// ==UserScript==
// @name         Stake Auto Fill (WebSocket + Auth Key)
// @namespace    http://tampermonkey.net
// @version      1.4
// @downloadURL  https://github.com/dicer1505/lttdrop/raw/refs/heads/main/codestakev3.user.js
// @match        https://*.stake.us/*
// @match        https://stake.com*
// @match        https://stake.ac*
// @match        https://stake.games*
// @match        https://stake.bet*
// @match        https://stake.pet*
// @match        https://stake.mba*
// @match        https://stake.jp*
// @match        https://stake.bz*
// @match        https://stake.ceo*
// @match        https://stake.krd*
// @match        https://staketr.com*
// @match        https://stake1001.com*
// @match        https://stake1002.com*
// @match        https://stake1003.com*
// @match        https://stake1021.com*
// @match        https://stake1022.com*
// @match        https://stake.us*
// @match        https://stake.br*
// @grant 		 GM_xmlhttpRequest
// @connect      *.ngrok-free.dev
// ==/UserScript==

(function() {
    'use strict';

    // 1. Quản lý và yêu cầu Key người dùng
 // 1. Lấy giá trị từ kho lưu trữ
let USER_KEY = localStorage.getItem('STAKE_BOT_KEY');

// 2. Kiểm tra kỹ: nếu là null, hoặc chuỗi "null", hoặc trống thì mới hiện prompt
if (!USER_KEY || USER_KEY === "null" || USER_KEY.trim() === "") {
    
    // Sử dụng window.prompt để tránh bị trùng tên biến cục bộ
    USER_KEY = window.prompt("🔑 Vui lòng nhập Key kích hoạt Tool:");

    if (USER_KEY && USER_KEY.trim() !== "") {
        localStorage.setItem('STAKE_BOT_KEY', USER_KEY.trim());
        // Thông báo cho người dùng biết đã lưu thành công
        window.alert("✅ Key đã được lưu! Đang kết nối...");
    } else {
        // Nếu người dùng bấm Cancel hoặc để trống
        window.alert("⚠️ Bạn chưa nhập Key. Tool sẽ không hoạt động!");
    }
}


    // Kết nối WebSocket với tham số key
    const WS_URL = `wss://cara-bioecologic-unlogically.ngrok-free.dev/?key=${USER_KEY}`;
    let socket;

    function connect() {
        if (!USER_KEY) return;
        socket = new WebSocket(WS_URL);

        socket.onmessage = async (event) => {
            const data = event.data;

            if (data === "AUTH_FAILED") {
                alert("❌ Key không hợp lệ hoặc đã hết hạn!");
                localStorage.removeItem('STAKE_BOT_KEY');
                window.location.reload(); // Tải lại trang để nhập key mới
                return;
            }

            if (data && data.length > 0) {
                await fillCode(data);
            }
        };

        socket.onclose = () => {
            setTimeout(connect, 1000); // Tự động kết nối lại nếu bị mất kết nối
        };
    }

    // 2. Hàm nhập mã và xử lý tự động
    async function fillCode(code) {
        const input = document.querySelector('input[data-testid="bonus-code"]') || document.querySelector('input[name="code"]');

        if (input) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;

            // Xóa trắng ô input trước (như code Python của bạn)
            nativeInputValueSetter.call(input, "");
            input.dispatchEvent(new Event('input', { bubbles: true }));
            await new Promise(r => setTimeout(r, 50)); // Nghỉ 50ms

            // 1. Nhập mã mới
            nativeInputValueSetter.call(input, code);
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));

            // 2. Nhấn Enter và Submit
            await new Promise(r => setTimeout(r, 300)); // Đợi 300ms cho nút Redeem sẵn sàng
            const enterOptions = { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true };
            input.dispatchEvent(new KeyboardEvent('keydown', enterOptions));
            
            const form = input.closest('form');
            if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));

            // 3. Cơ chế Click nút phụ (Claim/Dismiss) sau khi gửi mã
            let attempts = 0;
            const checkInterval = setInterval(() => {
                const popupBtn = document.querySelector('button[data-testid*="claim-drop"], button[data-testid*="claim-bonus-dismiss"], button[data-testid*="close"], button[class*="Variant-primary"]');
                
                if (popupBtn && !popupBtn.disabled) {
                    popupBtn.click();
                    clearInterval(checkInterval);
                }

                attempts++;
                if (attempts > 20) clearInterval(checkInterval); // Dừng sau 4 giây
            }, 200); // Kiểm tra mỗi 200ms

             // Lệnh xóa trắng bổ sung bạn đã thêm (đặt ở đây để xóa form sau khi xử lý xong)
             setTimeout(() => {
                    nativeInputValueSetter.call(input, ""); 
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    input.dispatchEvent(new Event('change', { bubbles: true }));
             }, 1000); // Xóa trắng 1 giây sau khi submit

        }
    }
    
    connect(); // Bắt đầu kết nối khi tải trang
})();


