            // ==UserScript==
            // @name         Auto claim drop
            // @namespace    http://tampermonkey.net/
            // @version      6.3
            // @description  Auto claim bonues codes on stake!
            // @author       FCFC
            // @icon         https://www.google.com/s2/favicons?sz=64&domain=stake.com
            // @downloadURL  https://code-claimer-1255312793.cos.ap-hongkong.myqcloud.com/stake/stake-drop.user.js
            // @match        https://stake.com/*settings/offers*
            // @match        https://stake3097.com/*settings/offers*
            // @match        https://stake.ac/*settings/offers*
            // @match        https://stake.games/*settings/offers*
            // @match        https://stake.bet/*settings/offers*
            // @match        https://stake.pet/*settings/offers*
            // @match        https://stake.mba/*settings/offers*
            // @match        https://stake.jp/*settings/offers*
            // @match        https://stake.bz/*settings/offers*
            // @match        https://stake.ceo/*settings/offers*
            // @match        https://stake.krd/*settings/offers*
            // @match        https://staketr.com/*settings/offers*
            // @match        https://stake1001.com/*settings/offers*
            // @match        https://stake1002.com/*settings/offers*
            // @match        https://stake1003.com/*settings/offers*
            // @match        https://stake1021.com/*settings/offers*
            // @match        https://stake1022.com/*settings/offers*
            // @match        https://stake.us/settings/offers*
            // @match        https://stake.br/settings/offers*
            // @require      https://code.jquery.com/jquery-3.7.1.min.js
            // @grant GM_info
            // @grant GM_setValue
            // @grant GM_getValue
            // @grant GM_deleteValue
            // @grant  GM_xmlhttpRequest
            // @run-at document-idle
            // @noframes
            // @connect hh123.site
            // @connect code.hh123.site
            // ==/UserScript==
            const _0x2add = ['vaultText', 'bonusCodeInformation', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22close\x22>X</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22_turnstile\x22\x20style=\x22displsy:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'removeClass', 'sub_redeem_code', 'FC_login', '#autoDropwrap\x20.user-set-wrap', '/api/login', 'Please\x20enter\x20the\x20redeem\x20amount.', 'test', 'errMsg', '注册事件监听器:\x20', 'ConversionRate\x20failed', 'Send\x20a\x20tip\x20to.', '运行中', '连接断开：', 'version', 'eventHandlers', 'get-redeem-balance', 'success', '最小充值金额为1usd', '[403]', 'FC_USER_SETTINGS', 'Credit:', '\x20Version:\x20', 'query', 'mxn', 'click', '#autoDropwrap\x20.status', '[429]', '#00C500', 'maintainTokens', 'getTime', 'ERROR', 'reason', 'url', 'has', '正在生成', 'codeAlreadyRedeemed', 'refesh', 'You\x20need\x20to\x20make\x20a\x20deposit\x20in\x20this\x20currency\x20before\x20you\x20can\x20claim\x20with\x20it.', 'balance', 'changeConnectStatus', 'href', '[401]', 'amount', '发送消息到代理失败:', 'VaultDeposit', 'tipIntro', 'indexOf', 'pln', 'availableInCryptoOnly', 'prop', 'loadTurnstileScript', '请再次刷新页面。', '_removeIframe', 'source', 'updateRedeemBtnState', '_handleProxyReady', 'getDate', 'Turnstile\x20unavailable', 'sub_balance', 'GET_RATE_ERROR:\x20', '#autoDropwrap\x20#_turnstile', '获取成功后将在主面板显示兑换码，请注意查看。', 'splice', 'availabilityStatus', 'usd', 'getRedeemCodeSuccess', 'clearCache', 'vaultTip', 'style', '存入保险库', '</span></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x2010px\x200;\x20border-bottom:\x202px\x20solid\x20#2F4553;\x22>', 'GET_SESSION_ERROR:\x20', 'getSeconds', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.loading\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x204.75rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20.75rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#2f4553;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2046%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--radius-lg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.loading-animation\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--radius-lg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a1c8f3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200.125rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200.125rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20svelte-slide\x200.8s\x20infinite\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20svelte-slide\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x204rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20.125rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x205%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20.125rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x20.125rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x204rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2055%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x20.125rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x204rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20.125rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.pulsing-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20pulse\x201s\x20infinite\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20transform:\x20scale(0.5);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.coin-qty::-webkit-inner-spin-button,.no-spinners::-webkit-outer-spin-button{-webkit-appearance:\x20none;margin:\x200;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.coin-qty::-webkit-input-placeholder\x20{color:\x20#778699}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#drop-status\x20{position:fixed;right:\x200;top:255px;padding:0\x205px;height:30px;text-align:center;line-height:30px;background:#1475E1;color:#fff;font-size:12px;cursor:pointer;z-index:1000001;border-top-left-radius:\x2016px;\x0a\x20\x20\x20\x20border-bottom-left-radius:\x2016px;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.log\x20{padding:5px;margin-top:10px;font-size:0.78rem;background:#0F212E;border-radius:4px;outline:\x20none;font-family:auto;width:100%;height:420px;border:1px\x20solid\x20#2f4553;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.recharge-wrap\x20{display:none;position:absolute;top:46px;left:20px;right:20px;padding:8px;height:78%;background:#1a2c38;border-radius:5px;border:\x201px\x20solid\x20#2f4553;font-size:13px;line-height:1.5;color:#b1bad3;box-shadow:\x200\x200\x2020px\x20#2f4553;overflow:auto;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.recharge-wrap\x20.block-title\x20{display:flex;align-items:center;padding:\x2010px\x200;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.recharge-wrap\x20.block-title\x20.mark\x20{display:flex;align-items:center;justify-content:center;width:8px;height:12px;background:#1475E1;margin-right:5px;border-top-right-radius:\x206px;border-bottom-right-radius:\x206px;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.recharge-wrap\x20.block-title\x20.mark\x20span\x20{display:\x20block;width:3px;height:3px;border-radius:2px;background:#fff;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.recharge-wrap\x20.block-title\x20.text\x20{color:#d8dadf;font-weight:bold;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.redeem-wrap\x20form\x20{display:flex;align-items:\x20center;justify-content:\x20space-between;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.redeem-wrap\x20form\x20.form-item\x20{display:flex;flex-direction:column;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.redeem-wrap\x20form\x20.form-item\x20input\x20{padding:5px;height:30px;background:#0F212E;border:1px\x20solid\x20#2F4553;border-radius:5px;color:#fff;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.redeem-wrap\x20.redeem-btn\x20{padding:\x200\x205px;margin-top:10px;height:\x2030px;width:100%;border-radius:\x204px;background:\x20#1475E1;color:#fff;cursor:no-drop;opacity:0.6;}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.get-redeem-code-btn\x20{padding:\x200\x205px;margin-top:10px;height:\x2030px;width:100%;border-radius:\x204px;background:\x20#1475E1;color:#fff;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.recharge-close\x20{position:absolute;bottom:-20px;left:50%;margin-left:-10px;height:20px;width:20px;border-radius:\x2016px;border:1px\x20solid\x20#2f4553;line-height:20px;text-align:center;cursor:\x20pointer;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.service-wrap\x20{display:flex;align-items:center;justify-content:center;height:30px;border-radius:5px;border:1px\x20solid\x20#2f4553;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.service-wrap\x20a\x20{color:#1475E1;padding:2px\x206px;border-radius:30px;font-weight:bold;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.suport-currency\x20span\x20{display:inline-block;padding:0\x202px;background:\x20#545c62;}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20{display:none;position:absolute;top:46px;left:20px;right:20px;padding:5px;height:74%;background:#1a2c38;border-radius:5px;border:\x201px\x20solid\x20#2f4553;font-size:13px;line-height:1.5;color:#b1bad3;box-shadow:\x200\x200\x2020px\x20#2f4553;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20.close\x20{position:absolute;bottom:-20px;left:50%;margin-left:-10px;height:20px;width:20px;border-radius:\x2016px;border:1px\x20solid\x20#2f4553;line-height:20px;text-align:center;cursor:\x20pointer;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20.currency-wrap\x20{display:flex;align-items:center;justify-content:space-between;padding:5px;margin-bottom:\x205px;border:1px\x20solid\x20#2f4553;border-radius:5px;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20.currency-wrap\x20.title\x20{font-weight:bold;color:\x20#e79e00;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20.currency-wrap\x20.currency\x20{padding:0\x2010px;width:100px;height:30px;background:\x20#0F212E;text-align:\x20center;font-size:\x2013px;border-radius:5px;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20form\x20{flex:1;padding:5px;border:1px\x20solid\x20#2f4553;border-radius:5px;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20form\x20input[type]\x20{-webkit-appearance:\x20auto;appearance:\x20auto;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20.vault-desposit\x20{flex:1;padding:5px;margin-left:5px;border:1px\x20solid\x20#2f4553;border-radius:5px;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#autoDropwrap\x20.user-set-wrap\x20.vault-desposit\x20input[type]\x20{-webkit-appearance:\x20auto;appearance:\x20auto;}\x0a\x20\x20\x20\x20', '尝试多次领取失败，请检查网络连接', '您需要先以该货币存入存款，然后才能使用该货币提出索赔', 'Buy\x20redeem\x20code', 'vaultSuccess', '已在连接中或已连接，跳过', 'io-ping', 'disabled', '，等待20s左右再获取兑换码。', 'codeAlreadyClaimed', '\x20\x20\x20剩余:\x20', 'html', 'sub_redeem_balance', '未连接，无法发送消息:', 'vnd', '⏰\x20Token有效期:\x20', 'The\x20minimum\x20required\x20amount\x20is\x201usd.', '_handleProxyMessage', 'unknown\x20error', 'text', '<span\x20style=\x22color:', '获取结果', 'contentWindow', 'claimCode', 'bonusCodeInactive', '60px', 'getRedeemCodeSuccessTips', 'currency_currency', '#autoDropwrap\x20.get-redeem-code-btn', 'Payment\x20Method:\x20', '✅\x20维护器已处于停止状态', 'https://www.hh123.site/socket-proxy.html', '\x20\x20\x20状态:\x20', 'Select\x20claim\x20currency', 'response', 'parentNode', '代理初始化超时', '请输入兑换码', 'message', 'display', 'Daily2', 'showTokenCache', 'innerHTML', '收到Socket事件:', 'dkk', '#b1bad3', '获取兑换码', '[IframeSocketClient]', '费用：', '</span>', 'sub_system', 'idr', 'mutation\x20CreateVaultDeposit($currency:\x20CurrencyEnum!,\x20$amount:\x20Float!)\x20{\x0a\x20\x20createVaultDeposit(currency:\x20$currency,\x20amount:\x20$amount)\x20{\x0a\x20\x20\x20\x20id\x0a\x20\x20\x20\x20amount\x0a\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20user\x20{\x0a\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20balances\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20available\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vault\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20__typename\x0a\x20\x20}\x0a}\x0a', '/_api/graphql', 'CODE:', '#autoDropwrap\x20.loader-wrap', '收到代理消息:', '_api/graphql', '❌\x20Widget重置失败:', 'val', 'hide', 'script', 'redeemTip', 'Fee:\x20', '<div\x20id=\x22drop-status\x22>Claimer</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22autoDropwrap\x22\x20style=\x22position:fixed;top:72px;left:', 'onload', '余额:', 'data', 'CLAIM_SUCCESS', 'msgType', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:10px\x208px;background:#213743;margin:0\x20auto;border-radius:5px;border:2px\x20solid\x20#2f4553;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;justify-content:\x20space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:14px;font-weight:bold;color:#fff\x22>', 'getMinutes', '秒\x20(', 'Please\x20keep\x20your\x20redeem\x20code\x20safe\x20and\x20do\x20not\x20disclose\x20it\x20to\x20anyone.', '✅\x20Widget已移除', 'location', '_handleIOError', 'stopTokenMaintenance', '发送小费给', '发送消息:', 'Failed\x20to\x20parse\x20request\x20body', 'warn', '\x0a+\x20----------------------------------\x20+', '🛑\x20维护器已停止', 'Please\x20enter\x20the\x20redeem\x20code.', '\x0a📝\x20Token[', 'application/javascript', 'json', 'conected', '您已领取此代码', 'zfcz', '_log', 'toUpperCase', 'connect', 'getRate', 'msg', 'emit-callback', 'http://localhost:3000/', 'ars', '收到ping', '奖金未找到或不可用', '已存入保险库。', 'includes', 'The\x20claim\x20currency\x20has\x20been\x20changed\x20to', 'connecting', 'codeClaimSet', 'getToken', 'setAttribute', 'append', 'origin', 'src', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>', '🎉\x20Manager\x20初始化完成', 'alreadyClaimed', 'status', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-btn\x22\x20style=\x22padding:4px\x206px;border-radius:20px;background:#2f4553;color:#b1bad3;cursor:pointer;font-size:12px;border:\x201px\x20solid\x20#344f61;\x22>', 'return\x20/\x22\x20+\x20this\x20+\x20\x22/', '</span>\x22<span\x20style=\x22color:\x20#e79e00;margin:0\x205px;\x22>', '#EB0A29', 'removeChild', 'tipName', '#autoDropwrap\x20.redeem-wrap\x20form\x20.redeem-code\x20input', 'Can\x20be\x20modified\x20in\x20settings.', 'refresh', 'fetch', 'span', 'string', '#autoDropwrap\x20.recharge-btn', 'Recharge', 'emitCallbacks', 'length', 'dropUnavailable', 'checkCode', 'postMessage', '\x20|\x20', 'fcSocketInitialized', '🧹\x20TurnstileManager\x20已完全销毁', 'Your\x20email\x20address\x20is\x20not\x20verified.\x20Please\x20verify\x20your\x20email\x20address\x20and\x20try\x20again.', 'tokenCache', '</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20style=\x22font-weight:\x20bold;\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22redeem-btn\x22><span>', '请输入要兑换的金额', 'Deposited\x20in\x20the\x20vault.', '事件处理器执行错误\x20(', 'stringify', 'isGenerating', '初始化...', ',Wait\x20about\x2020s\x20before\x20getting\x20the\x20redeem\x20code.', '❌\x20Failed\x20to\x20load\x20key\x20resources,\x20please\x20refresh\x20the\x20page\x20to\x20reload.', 'HTTP\x20Error\x20[', 'io-error', 'turnstile', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22block-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mark\x22><span></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text\x22>', 'showLoading', 'name', 'iframe加载失败:', '#autoDropwrap\x20.turbo-state', 'proxyReady', 'querySelector', 'auth', '用户设置不认领\x20', '📭\x20缓存为空', 'https://code.hh123.site', 'The\x20current\x20claimed\x20currency\x20is', 'widgetId', 'Multiple\x20attempts\x20to\x20claim\x20failed,\x20please\x20check\x20the\x20network\x20connection.', 'isConnected', 'Please\x20refresh\x20the\x20page\x20again.', 'pulsing-text', '_handleDisconnect', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22block-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mark\x22><span></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text\x22>', 'initUserSetInfo', 'maxCacheSize', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22recharge-wrap\x20scrollY\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><span\x20style=\x22color:#d8dadf;font-weight:bold;\x22>', '此代码已全被领取', 'red', 'Socket连接断开:', 'drop', '_emit', 'addClass', 'init', '可在设置中修改。', 'info', 'iframe', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20name=\x22currency\x22\x20class=\x22currency\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22btc\x22>BTC</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22eth\x22>ETH</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ltc\x22>LTC</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22usdt\x22\x20selected>USDT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sol\x22>SOL</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22doge\x22>DOGE</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22xrp\x22>XRP</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22trx\x22>TRX</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22eos\x22>EOS</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22bnb\x22>BNB</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22usdc\x22>USDC</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dai\x22>DAI</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22link\x22>LINK</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22shib\x22>SHIB</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22uni\x22>UNI</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22pol\x22>POL</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22trump\x22>TRUMP</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<form\x20class=\x22code-claim-set\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:#e79e00;font-weight:\x20bold;\x22>', 'head', 'drops', '发生错误:', 'Automatically\x20deducted\x20from\x20credit\x20each\x20time\x20a\x20code\x20is\x20successfully\x20claimed.', 'stake.com', 'Settings', 'error', 'disconnect', 'type', 'getStakeUser', '每次成功领取时从机器人余额中扣除。', 'The\x20redeem\x20code\x20can\x20be\x20split\x20and\x20used\x20multiple\x20times,\x20and\x20can\x20also\x20be\x20used\x20on\x20other\x20accounts.', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22redeem-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22redeem-code\x20form-item\x22\x20style=\x22margin-right:5px;width:60%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;justify-content:space-between;padding-right:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>', 'messageQueue', ';z-index:1000000;background:rgba(0,0,0,.5);border-radius:5px;width:', 'eur', '断开现有Socket连接', 'retry...', '#autoDropwrap\x20.user-set-wrap\x20.code-claim-set\x20input[type=checkbox]', '❌\x20Request\x20failed:\x20', 'token', 'Daily1', '重新尝试', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22block-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mark\x22><span></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text\x22>', 'checked', '认领金额的\x205%', 'remove', '_handleEmitCallback', 'Request\x20timeout', 'maintenanceTimer', 'stake.us', 'POST', '⚠️\x20', 'iframe加载完成', 'ping', '主动断开连接', 'ClaimConditionBonusCode', 'socket-event', '请保存好你的兑换码，不要泄露给任何人。', 'onerror', '#autoDropwrap\x20.log', 'emailUnverified', '_postToProxy', 'vault', 'display:none', 'unck', 'cleanExpiredTokens', '请选择币种', '已停止', 'set', '/zh', '#00c500', '❌\x20TurnstileManager\x20不存在', 'Credit\x20Recharge', '当前认领币种为', 'maintenanceInterval', 'Connected', 'IO错误:', 'DailyOther', 'forEach', 'session', '_handleConnect', '秒\x20(4分钟)', 'Failed\x20to\x20obtain\x20token.', '.us', 'connected', 'withdrawError', '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20fill=\x22currentColor\x22\x20viewBox=\x220\x200\x2064\x2064\x22\x20class=\x22svg-icon\x20turbo-state\x22\x20style=\x22\x22>\x20<title></title>\x20<path\x20d=\x22M24.12\x2044H34.2L24.12\x2064zm0-21.56L16.2\x2038.2l-.92\x201.8H4L24.12\x200z\x22></path><path\x20d=\x22M39.88\x2064V40H19.76L39.88\x200v24H60z\x22></path><!----></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status\x22\x20style=\x22width:12px;height:12px;border-radius:10px;background:red;margin-left:6px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:100%;position:relative;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loader-wrap\x22\x20style=\x22position:\x20absolute;\x20inset:\x200px;\x20display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;justify-content:\x20center;width:100%;height:100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loading\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loading-animation\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22log\x20scrollY\x22\x20readonly=\x22\x22\x20value=\x22\x22></textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;justify-content:\x20space-between;margin-top:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;color:#b1bad3;font-size:12px;border:\x202px\x20solid\x20#2f4553;padding:\x204px\x206px;border-radius:\x2030px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22username\x22\x20style=\x22display:inline-block;overflow:\x20hidden;text-overflow:ellipsis;white-space:\x20nowrap;padding:0\x206px;border-radius:20px;background:#2f4553;color:#b1bad3;margin-right:5px;\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22recharge-btn\x22\x20style=\x22display:flex;align-items:center;cursor:pointer;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'Your\x20redeem\x20code\x20is', 'each', '_processMessageQueue', 'code', 'rate', '您不符合兑换此代码所需的验证级别', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22title\x22>', 'createToken', 'delete', 'input', '^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}', 'Claim\x20code\x20type', 'parse', 'none', 'available', '连接成功', 'socketMessageController', 'connectionConfig', 'inr', 'claimCurrency', 'pointer', 'OtherDrops', 'Failed\x20to\x20process\x20response', 'redeemForm', 'initialized', 'Currency', 'Redeem\x20Code', 'find', 'claimStart', 'createElement', 'errorType', '选择领取币种', 'errors', 'push', '🎁\x20+\x20', '#autoDropwrap\x20.redeem-wrap\x20form\x20.redeem-amount\x20input', 'redeem', 'toFixed', '脚本已经初始化，跳过重复初始化', '🚫\x20dropCompleted:', 'currency', 'Socket已经连接，跳过重复创建', '购买兑换码', 'This\x20code\x20is\x20available.', 'Successful\x20claim\x20', 'getConversionRate', '_createIframe', 'application/json', 'You\x20have\x20already\x20claimed\x20this\x20code.', 'addEventListener', 'clone', 'jpy', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>', 'getRedeemCodeTip', 'Retry\x20claim', '#autoDropwrap\x20.user-set-wrap\x20.vault-desposit\x20input[type=checkbox]', 'FCFC', 'hasOwnProperty', 'currencies', 'messageListener', '开始连接...', 'claim_success', '\x20\x20\x20年龄:\x20', 'You\x20have\x20already\x20redeemed\x20this\x20code.', 'css', 'shift', 'toggle', 'btn', '_handleError', 'log', '_setupMessageListener', 'border', 'off', 'split', '❌\x20移除widget失败:', 'Please\x20select\x20currency.', 'compile', 'pen', 'removeEventListener', '您的电子邮件地址未经验证，请验证您的电子邮件地址，然后重试', 'Socket连接成功:', '触发事件:\x20', '</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22redeem-code-balance\x22\x20style=\x22color:#00C500;\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22redeem-amount\x20form-item\x22\x20style=\x22width:40%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>', '机器人余额充值', '成功领取\x20', 'Get\x20token\x20timeout.', 'feeLabel', '#e19a14', 'kycLevelNotSufficient', 'updateTurboState', '创建iframe代理', 'timestamp', 'GET_USERNAME_ERROR:\x20', 'https://code.hh123.site/', '5%\x20of\x20the\x20amount\x20claimed.', 'socketUrl', 'query\x20BonusCodeInformation($code:\x20String!,\x20$couponType:\x20CouponType!)\x20{\x0a\x20\x20bonusCodeInformation(code:\x20$code,\x20couponType:\x20$couponType)\x20{\x0a\x20\x20\x20\x20availabilityStatus\x0a\x20\x20\x20\x20bonusValue\x0a\x20\x20}\x0a}\x0a', 'api', '&nbsp;</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22balance\x22\x20style=\x22font-size:13px;line-height:1.2;\x22>0</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:1em;margin-left:3px;\x22>USD</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-radius:\x2016px;padding:0\x206px;text-align:center;background:#1475E1;color:#fff;margin-left:10px;font-size:12px;\x22>', '收取方式：', 'Get\x20Redeem\x20Code', 'background', 'filter', 'CreateVaultDepositError:\x20', '兑换结果', '_handleSocketEvent', '收到emit回调:', 'You\x20have\x20not\x20played\x20enough\x20in\x20the\x20last\x20week\x20to\x20claim\x20this\x20code.', 'weeklyWagerRequirement', 'user', '\x22\x20target=\x22_blank\x22>→TELEGRAM</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--<div\x20class=\x22recharge-close\x22>X</div>-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--充值弹窗结束-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-set-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22currency-wrap\x22\x20style=\x22', 'sendClaimResult', 'BonusCodeInformation', 'change', 'startTokenMaintenance', 'feeContent', 'get', 'https://t.me/fcfcface', 'appendChild', 'getCookie', 'tokenTimeout', 'buyRedeemCode', 'rateFaild', '金额($)', 'faild\x20to\x20get\x20currency.', 'Bonus\x20cannot\x20be\x20found\x20or\x20is\x20unavailable.', '#autoDropwrap\x20.recharge-close', '此代码可用', 'height', '#autoDropwrap\x20.user-set-wrap\x20.currency-wrap\x20.currency', '🔧\x20维护状态:\x20', 'Status:\x20', 'Minimum\x20$2', '<span></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22padding:\x2010px\x200;color:\x20#e79e00;\x22>', 'sub_code_v2', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22service-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22service\x22\x20href=\x22', 'getHours', '🚀\x20启动维护器', 'try', 'event', '#autoDropwrap\x20.redeem-wrap\x20form\x20.redeem-code\x20.redeem-code-balance', 'emit', 'floor', '您未达到兑换此代码所需的每周投注需求', 'claimSuccess', '代理页面加载失败', 'FCTestSendClaim', 'rechargeEnter', 'apply', '❌\x20关键资源加载失败:', 'ghs', 'clp', 'body', 'trim', 'timeout', 'no-drop', 'debug', '领取代码类型', 'HighRollers', '86%', 'client\x20disconnect', 'refreshDelay', '#autoDropwrap\x20.recharge-wrap', 'service', 'CurrencyNewConversionRate', '❌\x20已过期', 'now', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22', 'Disconnect:\x20', 'getRedeemCode', 'DailyDrops', 'theCurrencyToGet', '📊\x20缓存统计:\x20', 'generateCacheToken', '兑换码可以拆分多次使用，也可以在其他账号上使用。'];
            (function(_0x5f096a, _0x2add1c) {
                const _0x25c6f8 = function(_0x53ec5c) {
                    while (--_0x53ec5c) {
                        _0x5f096a['push'](_0x5f096a['shift']());
                    }
                };
                const _0x498524 = function() {
                    const _0x5ef8a4 = {
                        'data': {
                            'key': 'cookie',
                            'value': 'timeout'
                        },
                        'setCookie': function(_0x2cc991, _0x433278, _0x47303c, _0x548637) {
                            _0x548637 = _0x548637 || {};
                            let _0x3e851 = _0x433278 + '=' + _0x47303c;
                            let _0x25048d = 0x0;
                            for (let _0x565cd8 = 0x0, _0x419131 = _0x2cc991['length']; _0x565cd8 < _0x419131; _0x565cd8++) {
                                const _0x29a47d = _0x2cc991[_0x565cd8];
                                _0x3e851 += ';\x20' + _0x29a47d;
                                const _0x2ee4a9 = _0x2cc991[_0x29a47d];
                                _0x2cc991['push'](_0x2ee4a9);
                                _0x419131 = _0x2cc991['length'];
                                if (_0x2ee4a9 !== !![]) {
                                    _0x3e851 += '=' + _0x2ee4a9;
                                }
                            }
                            _0x548637['cookie'] = _0x3e851;
                        },
                        'removeCookie': function() {
                            return 'dev';
                        },
                        'getCookie': function(_0x1dc602, _0x1241f1) {
                            _0x1dc602 = _0x1dc602 || function(_0x40a406) {
                                return _0x40a406;
                            }
                            ;
                            const _0x335eac = _0x1dc602(new RegExp('(?:^|;\x20)' + _0x1241f1['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                            const _0x1a66db = function(_0x2ae010, _0x44f023) {
                                _0x2ae010(++_0x44f023);
                            };
                            _0x1a66db(_0x25c6f8, _0x2add1c);
                            return _0x335eac ? decodeURIComponent(_0x335eac[0x1]) : undefined;
                        }
                    };
                    const _0x39d8f4 = function() {
                        const _0x23025d = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
                        return _0x23025d['test'](_0x5ef8a4['removeCookie']['toString']());
                    };
                    _0x5ef8a4['updateCookie'] = _0x39d8f4;
                    let _0x4e72e1 = '';
                    const _0x30fc78 = _0x5ef8a4['updateCookie']();
                    if (!_0x30fc78) {
                        _0x5ef8a4['setCookie'](['*'], 'counter', 0x1);
                    } else if (_0x30fc78) {
                        _0x4e72e1 = _0x5ef8a4['getCookie'](null, 'counter');
                    } else {
                        _0x5ef8a4['removeCookie']();
                    }
                };
                _0x498524();
            }(_0x2add, 0x1f3));
            const _0x25c6 = function(_0x5f096a, _0x2add1c) {
                _0x5f096a = _0x5f096a - 0x0;
                let _0x25c6f8 = _0x2add[_0x5f096a];
                return _0x25c6f8;
            };
            (function() {
                const _0x1013b9 = function() {
                    let _0x407a6c = !![];
                    return function(_0x280492, _0x54566f) {
                        const _0x126fe5 = _0x407a6c ? function() {
                            if (_0x54566f) {
                                const _0x443928 = _0x54566f[_0x25c6('0x1e0')](_0x280492, arguments);
                                _0x54566f = null;
                                return _0x443928;
                            }
                        }
                        : function() {}
                        ;
                        _0x407a6c = ![];
                        return _0x126fe5;
                    }
                    ;
                }();
                const _0x310c7d = _0x1013b9(this, function() {
                    const _0x2b310e = function() {
                        const _0x2eee7d = _0x2b310e['constructor'](_0x25c6('0xc4'))()[_0x25c6('0x198')](_0x25c6('0x156'));
                        return !_0x2eee7d[_0x25c6('0xd')](_0x310c7d);
                    };
                    return _0x2b310e();
                });
                _0x310c7d();
                'use strict';
                var _0x4b4b31 = _0x4b4b31 || window['$'];
                _0x4b4b31(function() {
                    var _0x62af01 = ![];
                    var _0x48913b = GM_info['script'][_0x25c6('0x14')];
                    var _0x16c2bc = GM_info[_0x25c6('0x8d')]['name'];
                    var _0x3def2c = window[_0x25c6('0x9b')][_0x25c6('0xbd')][_0x25c6('0x35')](_0x25c6('0x148')) > -0x1 ? _0x25c6('0x126') : _0x25c6('0x10c');
                    var _0x53e7de = _0x25c6('0x1ad');
                    var _0x33c9fe = ![];
                    var _0x436be3 = window[_0x25c6('0x9b')][_0x25c6('0xbd')];
                    var _0x59458d = !![];
                    var _0x28ba4c = '';
                    var _0x301507 = [];
                    var _0x1684d5 = _0x62af01 ? _0x25c6('0xb1') : _0x25c6('0x1a9');
                    var _0x42541b = _0x62af01 ? 'http://localhost:3000' : _0x25c6('0xf1');
                    var _0x5efa71 = '';
                    var _0x374858 = '';
                    var _0x17c26a = _0x25c6('0x184');
                    var _0x46b5ff = [];
                    var _0x4451af = {};
                    var _0x133b26 = window[_0x25c6('0x9b')][_0x25c6('0x2f')][_0x25c6('0x35')](_0x25c6('0x13a')) > -0x1 ? 'zh' : 'en';
                    var _0x58cb11 = null;
                    var _0x5d3169 = _0x25c6('0x1c1');
                    var _0x563d51 = null;
                    var _0x16f655 = null;
                    var _0x2477ce = null;
                    var _0x315681 = null;
                    var _0x2befff = null;
                    var _0x41a97c = null;
                    var _0x5aadb8 = null;
                    var _0x4abb89 = '';
                    var _0x46038e = '';
                    var _0x5a2d07 = {
                        'amount': 0x0,
                        'currency': ''
                    };
                    var _0x177fd9 = _0x25c6('0x1a');
                    var _0x519476 = null;
                    var _0x483f63 = {
                        'code': '',
                        'amount': null
                    };
                    let _0x26275a = ![];
                    class _0x669272 {
                        constructor() {
                            this['siteKey'] = '0x4AAAAAAAGD4gMGOTFnvupz';
                            this[_0x25c6('0xf3')] = null;
                            this[_0x25c6('0xda')] = [];
                            this[_0x25c6('0xfb')] = 0x2;
                            this['initialized'] = ![];
                            this[_0x25c6('0x1c4')] = 0x4 * 0x3c * 0x3e8;
                            this[_0x25c6('0x125')] = null;
                            this[_0x25c6('0x13f')] = 0x1e * 0x3e8;
                            this[_0x25c6('0xe0')] = ![];
                        }
                        async['initialize']() {
                            if (this[_0x25c6('0x164')])
                                return;
                            try {
                                await this['loadTurnstileScript']();
                                if (!unsafeWindow['turnstile']) {
                                    throw new Error(_0x25c6('0x40'));
                                }
                                this[_0x25c6('0x164')] = !![];
                                console[_0x25c6('0x191')](_0x25c6('0xc0'));
                                setTimeout( () => {
                                    this[_0x25c6('0x2')]();
                                }
                                , 0x7d0);
                                if (typeof _0x563d51 !== 'undefined' && _0x563d51 && _0x563d51['connected']) {
                                    this[_0x25c6('0x1be')]();
                                }
                            } catch (_0x44bc97) {
                                console[_0x25c6('0x10e')](_0x44bc97);
                                _0x4b4207(_0x25c6('0xe3'));
                            }
                        }
                        ['updateTurboState'](_0x1d6d4e) {
                            const _0x3d6ce0 = _0x4b4b31(_0x25c6('0xeb'));
                            let _0x44604b = _0x1d6d4e ? _0x25c6('0x13b') : _0x25c6('0x7d');
                            _0x3d6ce0[_0x25c6('0x18c')]('color', _0x44604b);
                        }
                        [_0x25c6('0x39')](_0x126caa, _0x26846b) {
                            return new Promise( (_0x511f5d, _0x119b49) => {
                                let _0x574408 = Date[_0x25c6('0x1f2')]();
                                const _0x53320a = document[_0x25c6('0x169')](_0x25c6('0x8d'));
                                _0x53320a[_0x25c6('0xbb')]('id', 'turnstile-scripts');
                                _0x53320a[_0x25c6('0xbe')] = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
                                _0x53320a[_0x25c6('0x110')] = _0x25c6('0xa6');
                                _0x53320a[_0x25c6('0x91')] = () => {
                                    let _0x5c64c6 = Date['now']();
                                    console[_0x25c6('0x191')]('✅\x20T\x20脚本加载完成:' + (_0x5c64c6 - _0x574408));
                                    _0x511f5d();
                                }
                                ;
                                _0x53320a[_0x25c6('0x12f')] = _0x4452b3 => {
                                    let _0x3b1b9b = Date[_0x25c6('0x1f2')]();
                                    console['error'](_0x25c6('0x1e1') + (_0x3b1b9b - _0x574408), _0x4452b3);
                                    _0x53320a[_0x25c6('0x122')]();
                                    _0x119b49();
                                }
                                ;
                                document[_0x25c6('0x108')]['append'](_0x53320a);
                            }
                            );
                        }
                        async[_0x25c6('0x153')]() {
                            this[_0x25c6('0xe0')] = !![];
                            return new Promise( (_0x5b9783, _0x5ebe1f) => {
                                try {
                                    const _0x27c5cf = document[_0x25c6('0xed')](_0x25c6('0x43'));
                                    const _0x479dbb = {
                                        'sitekey': this['siteKey'],
                                        'theme': 'dark',
                                        'language': _0x133b26,
                                        'callback': _0xf1e00d => {
                                            this[_0x25c6('0xe0')] = ![];
                                            _0x5b9783(_0xf1e00d);
                                        }
                                        ,
                                        'error-callback': _0xdda455 => {
                                            this['isGenerating'] = ![];
                                            _0x5ebe1f(_0xdda455);
                                        }
                                        ,
                                        'timeout-callback': () => {
                                            this[_0x25c6('0xe0')] = ![];
                                            _0x5ebe1f(_0x25c6('0x1a1'));
                                        }
                                    };
                                    this[_0x25c6('0xf3')] = unsafeWindow[_0x25c6('0xe6')]['render'](_0x27c5cf, _0x479dbb);
                                } catch (_0x399d6a) {
                                    this[_0x25c6('0xe0')] = ![];
                                    _0x5ebe1f(_0x399d6a);
                                }
                            }
                            );
                        }
                        async[_0x25c6('0x2')]() {
                            if (this[_0x25c6('0xe0')]) {
                                return;
                            }
                            try {
                                let _0xb15ddc = await this['createToken']();
                                const _0xee0cb1 = {
                                    'token': _0xb15ddc,
                                    'timestamp': Date[_0x25c6('0x1f2')]()
                                };
                                this['tokenCache'][_0x25c6('0x16d')](_0xee0cb1);
                                this[_0x25c6('0x1a5')](!![]);
                                this[_0x25c6('0x122')]();
                            } catch (_0x20feb3) {
                                if (this[_0x25c6('0xda')][_0x25c6('0xd2')] == 0x0) {
                                    this[_0x25c6('0x1a5')](![]);
                                }
                                this['remove']();
                            }
                        }
                        async[_0x25c6('0xba')]() {
                            this[_0x25c6('0x136')]();
                            if (this[_0x25c6('0xda')][_0x25c6('0xd2')] > 0x0) {
                                this[_0x25c6('0x1a5')](!![]);
                                let _0x7b9e8f = this[_0x25c6('0xda')][_0x25c6('0x18d')]();
                                return _0x7b9e8f[_0x25c6('0x11c')];
                            }
                            try {
                                this[_0x25c6('0x1a5')](![]);
                                this[_0x25c6('0xe0')] = ![];
                                const _0x389ce7 = await this[_0x25c6('0x153')]();
                                this[_0x25c6('0x122')]();
                                return _0x389ce7;
                            } catch (_0x5af1b2) {
                                this[_0x25c6('0x122')]();
                                throw _0x5af1b2;
                            }
                        }
                        ['cleanExpiredTokens']() {
                            const _0x5ec0b4 = Date['now']();
                            const _0x14f6fe = this['tokenCache'][_0x25c6('0xd2')];
                            this['tokenCache'] = this[_0x25c6('0xda')][_0x25c6('0x1b2')](_0x1c24bc => _0x5ec0b4 - _0x1c24bc[_0x25c6('0x1a7')] < this[_0x25c6('0x1c4')]);
                        }
                        async[_0x25c6('0x23')]() {
                            if (!this['initialized']) {
                                return;
                            }
                            this[_0x25c6('0x136')]();
                            if (this[_0x25c6('0xda')][_0x25c6('0xd2')]) {
                                this[_0x25c6('0x1a5')](!![]);
                            } else {
                                this[_0x25c6('0x1a5')](![]);
                            }
                            const _0x256570 = this['maxCacheSize'] - this[_0x25c6('0xda')][_0x25c6('0xd2')];
                            if (_0x256570 > 0x0) {
                                for (let _0x539e40 = 0x0; _0x539e40 < _0x256570; _0x539e40++) {
                                    try {
                                        await this[_0x25c6('0x2')]();
                                        await new Promise(_0x1b280d => setTimeout(_0x1b280d, 0x1e * 0x3e8));
                                    } catch (_0x216818) {}
                                }
                            } else {}
                        }
                        [_0x25c6('0x1be')]() {
                            if (this[_0x25c6('0x125')]) {
                                console['log']('✅\x20维护器已运行');
                                return;
                            }
                            console[_0x25c6('0x191')](_0x25c6('0x1d5'));
                            this[_0x25c6('0x125')] = setInterval( () => {
                                this[_0x25c6('0x23')]();
                            }
                            , this[_0x25c6('0x13f')]);
                        }
                        [_0x25c6('0x9d')]() {
                            if (this[_0x25c6('0x125')]) {
                                clearInterval(this[_0x25c6('0x125')]);
                                this[_0x25c6('0x125')] = null;
                                console['log'](_0x25c6('0xa3'));
                            } else {
                                console['log'](_0x25c6('0x6e'));
                            }
                        }
                        [_0x25c6('0x122')]() {
                            if (this[_0x25c6('0xf3')] !== null) {
                                try {
                                    unsafeWindow[_0x25c6('0xe6')][_0x25c6('0x122')](this[_0x25c6('0xf3')]);
                                    this[_0x25c6('0xf3')] = null;
                                } catch (_0x3454d1) {
                                    console[_0x25c6('0x10e')](_0x25c6('0x8a'), _0x3454d1);
                                }
                            }
                        }
                        ['destroy']() {
                            this[_0x25c6('0x9d')]();
                            if (this[_0x25c6('0xf3')] !== null) {
                                try {
                                    unsafeWindow[_0x25c6('0xe6')][_0x25c6('0x122')](this[_0x25c6('0xf3')]);
                                    console[_0x25c6('0x191')](_0x25c6('0x9a'));
                                } catch (_0x371e05) {
                                    console[_0x25c6('0x10e')](_0x25c6('0x196'), _0x371e05);
                                }
                                this[_0x25c6('0xf3')] = null;
                            }
                            this['tokenCache'] = [];
                            this[_0x25c6('0x164')] = ![];
                            console[_0x25c6('0x191')](_0x25c6('0xd8'));
                        }
                    }
                    let _0x475751 = null;
                    if (window[_0x25c6('0xd7')]) {
                        console[_0x25c6('0x191')](_0x25c6('0x172'));
                        return;
                    }
                    window[_0x25c6('0xd7')] = !![];
                    console[_0x25c6('0x191')]('+\x20----------------------------------\x20+\x0aName:\x20' + _0x16c2bc + _0x25c6('0x1c') + _0x48913b + '\x20debug:\x20' + _0x62af01 + _0x25c6('0xa2'));
                    _0x39be5c();
                    async function _0x39be5c() {
                        _0x2477ce = _0x3435a3();
                        _0x46038e = _0x2477ce['getpid']();
                        _0x58cb11 = _0x23440d(_0x133b26);
                        _0x3a2cd0();
                        _0x4b4207(_0x58cb11[_0x25c6('0x103')]);
                        _0x475751 = new _0x669272();
                        _0x475751['initialize']();
                        _0x2477ce[_0x25c6('0xfa')]();
                        _0x25ab68();
                        _0x2477ce['clearNoNeedClaimCode']();
                        _0x5aadb8 = _0x8bc618();
                        _0x429cc5();
                        try {
                            const _0x4c9a02 = _0x2477ce['getSession']();
                            _0x16f655 = _0x1024d6(_0x436be3, _0x4c9a02, _0x42541b, _0x133b26);
                            _0x5efa71 = await _0x2477ce['getUsername']();
                            _0x4b4b31('#autoDropwrap\x20.username')[_0x25c6('0x63')](_0x5efa71);
                            _0x5a016f(_0x5efa71);
                            _0x2477ce[_0x25c6('0xae')]();
                        } catch (_0x2ec1e9) {
                            _0x4b4207(_0x2ec1e9['message']);
                        }
                    }
                    async function _0x5a016f(_0x1f881c) {
                        const _0x2a5f8d = {
                            'username': _0x1f881c,
                            'platform': _0x3def2c,
                            'version': _0x48913b
                        };
                        if (_0x46038e) {
                            _0x2a5f8d['pid'] = _0x46038e;
                        }
                        try {
                            const _0x4733ff = await _0x16f655[_0x25c6('0x9')](_0x2a5f8d);
                            let _0x2746b7 = JSON[_0x25c6('0x158')](_0x4733ff['responseText']);
                            if (_0x2746b7[_0x25c6('0x17')]) {
                                _0x374858 = _0x2746b7[_0x25c6('0x93')];
                                _0x17c26a = _0x2746b7[_0x25c6('0xc8')] ? _0x2746b7['tipName'] : _0x25c6('0x184');
                                if (_0x2746b7[_0x25c6('0x1ef')]) {
                                    _0x5d3169 = _0x2746b7[_0x25c6('0x1ef')];
                                }
                                _0x353090(_0x374858);
                            } else {
                                _0x4b4207(_0x2746b7[_0x25c6('0x76')]);
                            }
                        } catch (_0x1faeca) {
                            _0x4b4207(_0x1faeca[_0x25c6('0x76')] + '\x20' + _0x58cb11[_0x25c6('0x2b')]);
                        }
                    }
                    function _0x429cc5() {
                        const _0x3148d0 = unsafeWindow[_0x25c6('0xcc')];
                        unsafeWindow['fetch'] = async function(_0x48d7e1, _0x406df6) {
                            let _0x26b5a0;
                            let _0x57d12f = null;
                            let _0x1a80b1;
                            if (_0x48d7e1 instanceof Request) {
                                const _0x59c506 = _0x48d7e1[_0x25c6('0x17e')]();
                                _0x1a80b1 = _0x48d7e1[_0x25c6('0x27')];
                                if (_0x59c506['body'] && _0x59c506[_0x25c6('0x1e4')]instanceof ReadableStream) {
                                    _0x26b5a0 = await new Response(_0x59c506[_0x25c6('0x1e4')])[_0x25c6('0x63')]();
                                } else if (_0x59c506[_0x25c6('0x1e4')]) {
                                    _0x26b5a0 = _0x59c506['body'];
                                }
                            } else {
                                _0x26b5a0 = _0x406df6 && _0x406df6[_0x25c6('0x1e4')];
                                _0x1a80b1 = _0x48d7e1;
                            }
                            if (!_0x1a80b1['includes'](_0x25c6('0x89'))) {
                                return _0x3148d0(_0x48d7e1, _0x406df6);
                            }
                            try {
                                if (_0x26b5a0) {
                                    try {
                                        _0x57d12f = typeof _0x26b5a0 == _0x25c6('0xce') ? JSON[_0x25c6('0x158')](_0x26b5a0) : _0x26b5a0;
                                    } catch (_0x185a72) {
                                        console[_0x25c6('0xa1')](_0x25c6('0xa0'), _0x185a72);
                                    }
                                }
                                const _0x282181 = await _0x3148d0(_0x48d7e1, _0x406df6);
                                const _0xe57b0 = _0x282181[_0x25c6('0x17e')]();
                                if (_0x57d12f) {
                                    try {
                                        const _0x398166 = await _0xe57b0[_0x25c6('0xa7')]();
                                        _0x3fa8aa(_0x57d12f, _0x398166);
                                    } catch (_0x41247e) {
                                        console[_0x25c6('0xa1')](_0x25c6('0x162'), _0x41247e);
                                    }
                                }
                                return _0x282181;
                            } catch (_0x88a936) {
                                if (_0x57d12f) {
                                    _0x3bf685(_0x57d12f, _0x88a936);
                                }
                                throw _0x88a936;
                            }
                        }
                        ;
                    }
                    ;function _0x3fa8aa(_0x1509ce, _0x363761) {
                        if (_0x1509ce[_0x25c6('0x1d')] && _0x1509ce['query'][_0x25c6('0x35')](_0x25c6('0x1f0')) > -0x1) {
                            _0x5aadb8[_0x25c6('0x150')](_0x363761);
                        }
                        if (_0x53e7de != 'api' && _0x33c9fe) {}
                    }
                    function _0x3bf685(_0xb919c5, _0x12f834) {
                        if (_0xb919c5[_0x25c6('0x1d')] && _0xb919c5[_0x25c6('0x1d')][_0x25c6('0x35')](_0x25c6('0x1f0')) > -0x1) {
                            _0x5aadb8[_0x25c6('0x1c6')](_0x12f834);
                        }
                        if (_0x53e7de != _0x25c6('0x1ad') && _0x33c9fe) {}
                    }
                    function _0x8bc618() {
                        return {
                            async 'rate'(_0x10019c) {
                                try {
                                    if (_0x10019c['data']) {
                                        let _0x35c810 = _0x10019c[_0x25c6('0x93')][_0x25c6('0x105')][_0x25c6('0x186')];
                                        let _0x3b9e03 = {};
                                        _0x35c810[_0x25c6('0x143')](_0x211949 => {
                                            let _0x1a10af = _0x211949['values'];
                                            _0x1a10af[_0x25c6('0x143')](_0x317f7 => {
                                                if (_0x317f7['currency'] == _0x25c6('0x47')) {
                                                    _0x3b9e03[_0x211949['name']] = _0x317f7[_0x25c6('0x150')];
                                                }
                                            }
                                            );
                                        }
                                        );
                                        _0x4451af = _0x3b9e03;
                                    } else {
                                        let _0x3f68f8 = _0x10019c[_0x25c6('0x16c')][0x0][_0x25c6('0x16a')];
                                        let _0xd5eaf = _0x10019c[_0x25c6('0x16c')][0x0][_0x25c6('0x76')];
                                        throw new Error(_0x25c6('0x42') + _0x3f68f8 + '-' + _0xd5eaf);
                                    }
                                } catch (_0x3f922e) {
                                    console[_0x25c6('0x191')](_0x3f922e);
                                }
                            },
                            'rateFaild'(_0x4d1c4c) {
                                console[_0x25c6('0x10e')]('Fetch\x20error:', _0x4d1c4c[_0x25c6('0x76')]);
                            }
                        };
                    }
                    function _0x23440d(_0x269108) {
                        const _0x37867e = {
                            'conected': _0x25c6('0x15b'),
                            'balance': _0x25c6('0x92'),
                            'currency': '币种',
                            'init': _0x25c6('0xe1'),
                            'notFound': _0x25c6('0xb4'),
                            'bonusCodeInactive': _0x25c6('0xfd'),
                            'weeklyWagerRequirement': _0x25c6('0x1db'),
                            'alreadyClaimed': _0x25c6('0xa9'),
                            'codeAlreadyClaimed': _0x25c6('0xa9'),
                            'codeAlreadyRedeemed': _0x25c6('0xa9'),
                            'withdrawError': _0x25c6('0x52'),
                            'emailUnverified': _0x25c6('0x19b'),
                            'kycLevelNotSufficient': _0x25c6('0x151'),
                            'available': _0x25c6('0x1cb'),
                            'formRules': {
                                'min': _0x25c6('0x18'),
                                'coin': _0x25c6('0x137'),
                                'getting': '获取余额中...'
                            },
                            'claimStart': 'CODE:',
                            'claimSuccess': _0x25c6('0x1a0'),
                            'retryClaim': _0x25c6('0x11e'),
                            'retryClaimDone': _0x25c6('0x51'),
                            'disconnect': _0x25c6('0x13'),
                            'theCurrencyToGet': [_0x25c6('0x13e'), _0x25c6('0x104'), '认领币种已修改为'],
                            'feeLabel': _0x25c6('0x80'),
                            'feeContent': _0x25c6('0x121'),
                            'getType': _0x25c6('0x1af'),
                            'getTypeContent': _0x25c6('0x112'),
                            'recharge': _0x25c6('0x19f'),
                            'tipIntro': [_0x25c6('0x9e'), '最低\x20$2', _0x25c6('0x58')],
                            'refesh': _0x25c6('0x3a'),
                            'codeClaimSet': _0x25c6('0x1e9'),
                            'settings': '设置',
                            'refreshDelay': '请等待2-5分钟再尝试刷新。',
                            'vaultSuccess': _0x25c6('0xb5'),
                            'vaultText': _0x25c6('0x4c'),
                            'vaultTip': '如果勾选此选项，成功领取代码后，领取的金额将自动存入保险库。',
                            'claimCurrency': _0x25c6('0x16b'),
                            'buyRedeemCode': _0x25c6('0x176'),
                            'redeemForm': {
                                'code': '兑换码',
                                'amount': _0x25c6('0x1c7'),
                                'btn': '兑换',
                                'codeTip': _0x25c6('0x75'),
                                'amountTip': _0x25c6('0xdc')
                            },
                            'redeemTip': _0x25c6('0x3'),
                            'getRedeemCode': _0x25c6('0x7e'),
                            'getRedeemCodeSuccess': '你的兑换码为',
                            'getRedeemCodeSuccessTips': _0x25c6('0x12e'),
                            'getRedeemCodeTip': _0x25c6('0x44'),
                            'rechargeEnter': '充值'
                        };
                        const _0x192355 = {
                            'conected': _0x25c6('0x140'),
                            'balance': _0x25c6('0x1b'),
                            'currency': _0x25c6('0x165'),
                            'init': 'Initializing...',
                            'notFound': _0x25c6('0x1c9'),
                            'bonusCodeInactive': 'This\x20code\x20has\x20been\x20fully\x20claimed.',
                            'weeklyWagerRequirement': _0x25c6('0x1b7'),
                            'alreadyClaimed': _0x25c6('0x17c'),
                            'codeAlreadyClaimed': 'You\x20have\x20already\x20claimed\x20this\x20code.',
                            'codeAlreadyRedeemed': _0x25c6('0x18b'),
                            'withdrawError': _0x25c6('0x2c'),
                            'emailUnverified': _0x25c6('0xd9'),
                            'kycLevelNotSufficient': 'You\x20do\x20not\x20meet\x20the\x20required\x20verification\x20level\x20to\x20redeem\x20this\x20code.',
                            'available': _0x25c6('0x177'),
                            'formRules': {
                                'min': _0x25c6('0x60'),
                                'coin': _0x25c6('0x197'),
                                'getting': 'Getting\x20balance...'
                            },
                            'claimStart': _0x25c6('0x86'),
                            'claimSuccess': _0x25c6('0x178'),
                            'retryClaim': _0x25c6('0x182'),
                            'retryClaimDone': _0x25c6('0xf4'),
                            'disconnect': _0x25c6('0x1f4'),
                            'theCurrencyToGet': [_0x25c6('0xf2'), _0x25c6('0xca'), _0x25c6('0xb7')],
                            'feeLabel': _0x25c6('0x8f'),
                            'feeContent': _0x25c6('0x1aa'),
                            'getType': _0x25c6('0x6d'),
                            'getTypeContent': _0x25c6('0x10b'),
                            'recharge': _0x25c6('0x13d'),
                            'tipIntro': [_0x25c6('0x11'), _0x25c6('0x1d0'), _0x25c6('0xe2')],
                            'refesh': _0x25c6('0xf6'),
                            'codeClaimSet': _0x25c6('0x157'),
                            'settings': _0x25c6('0x10d'),
                            'refreshDelay': 'Please\x20wait\x202-5\x20minutes\x20before\x20trying\x20to\x20refresh\x20again.',
                            'vaultSuccess': _0x25c6('0xdd'),
                            'vaultText': 'Deposit\x20in\x20vault',
                            'vaultTip': 'If\x20check\x20this\x20option,\x20the\x20claimed\x20amount\x20will\x20be\x20auto\x20deposited\x20into\x20vault\x20after\x20successfully\x20claiming\x20the\x20code.',
                            'claimCurrency': _0x25c6('0x71'),
                            'buyRedeemCode': _0x25c6('0x53'),
                            'redeemForm': {
                                'code': _0x25c6('0x166'),
                                'amount': 'Amount($)',
                                'btn': 'Redeem',
                                'codeTip': _0x25c6('0xa4'),
                                'amountTip': _0x25c6('0xc')
                            },
                            'redeemTip': _0x25c6('0x113'),
                            'getRedeemCode': _0x25c6('0x1b0'),
                            'getRedeemCodeSuccess': _0x25c6('0x14c'),
                            'getRedeemCodeSuccessTips': _0x25c6('0x99'),
                            'getRedeemCodeTip': 'After\x20the\x20code\x20is\x20successfully\x20obtained,\x20it\x20will\x20be\x20displayed\x20on\x20the\x20main\x20panel,\x20please\x20pay\x20attention\x20to\x20it.',
                            'rechargeEnter': _0x25c6('0xd0')
                        };
                        return _0x269108 == 'zh' ? _0x37867e : _0x192355;
                    }
                    function _0x25ab68() {
                        const _0x18e665 = _0x4b4b31(_0x25c6('0xcf'));
                        const _0x58e13d = _0x4b4b31(_0x25c6('0x1ee'));
                        const _0x1a97a6 = _0x4b4b31(_0x25c6('0x1ca'));
                        _0x18e665[_0x25c6('0x1f')](function() {
                            _0x58e13d[_0x25c6('0x18e')]();
                        });
                        _0x1a97a6[_0x25c6('0x1f')](function() {
                            _0x58e13d[_0x25c6('0x8c')]();
                        });
                        const _0x1d60e5 = _0x4b4b31(_0x25c6('0xc9'));
                        const _0x1a8c5b = _0x4b4b31(_0x25c6('0x16f'));
                        const _0x1cca07 = _0x4b4b31('#autoDropwrap\x20.redeem-wrap\x20.redeem-btn');
                        _0x1d60e5['on'](_0x25c6('0x155'), function() {
                            let _0x2119a8 = _0x4b4b31(this)[_0x25c6('0x8b')]();
                            _0x483f63[_0x25c6('0x14f')] = _0x2119a8;
                            _0x2477ce[_0x25c6('0x3d')](_0x1cca07);
                            _0x563d51[_0x25c6('0x1d9')](_0x25c6('0x16'), {
                                'code': _0x2119a8
                            }, _0x169931 => {
                                console['log'](_0x25c6('0x65'), _0x169931);
                            }
                            );
                        });
                        _0x1a8c5b['on']('input', function() {
                            let _0x222efe = _0x4b4b31(this)['val']();
                            console[_0x25c6('0x191')](_0x222efe);
                            _0x483f63[_0x25c6('0x31')] = _0x222efe;
                            if (!_0x222efe || _0x222efe < 0x0) {
                                _0x483f63[_0x25c6('0x31')] = null;
                                _0x4b4b31(this)[_0x25c6('0x8b')]('');
                            }
                            _0x2477ce[_0x25c6('0x3d')](_0x1cca07);
                        });
                        _0x1cca07['on'](_0x25c6('0x1f'), async function() {
                            if (!_0x483f63[_0x25c6('0x14f')] || !_0x483f63['amount']) {
                                return;
                            }
                            _0x4b4b31(this)[_0x25c6('0x167')]('span')[_0x25c6('0x102')]('pulsing-text');
                            _0x4b4b31(this)['prop'](_0x25c6('0x57'), !![])[_0x25c6('0x18c')]({
                                'opacity': 0.6,
                                'cursor': _0x25c6('0x1e7')
                            });
                            try {
                                const _0x1ec288 = {
                                    'code': _0x483f63[_0x25c6('0x14f')],
                                    'amount': _0x483f63[_0x25c6('0x31')]
                                };
                                _0x563d51[_0x25c6('0x1d9')](_0x25c6('0x170'), _0x1ec288, _0x1c632a => {
                                    console[_0x25c6('0x191')](_0x25c6('0x1b4'), _0x1c632a);
                                }
                                );
                                setTimeout( () => {
                                    _0x4b4b31(this)[_0x25c6('0x167')](_0x25c6('0xcd'))[_0x25c6('0x7')](_0x25c6('0xf7'));
                                    _0x2477ce[_0x25c6('0x3d')](_0x1cca07);
                                    _0x58e13d[_0x25c6('0x8c')]();
                                }
                                , 0x3e8);
                            } catch (_0x175530) {
                                console[_0x25c6('0x191')](_0x175530);
                            }
                        });
                        const _0x85606 = _0x4b4b31(_0x25c6('0x6c'));
                        _0x85606['on'](_0x25c6('0x1f'), async function() {
                            const _0x5ea712 = () => {
                                _0x4b4b31(this)[_0x25c6('0x38')](_0x25c6('0x57'), !![])[_0x25c6('0x18c')]({
                                    'opacity': 0.6,
                                    'cursor': _0x25c6('0x1e7')
                                });
                                _0x4b4b31(this)[_0x25c6('0x167')](_0x25c6('0xcd'))[_0x25c6('0x102')](_0x25c6('0xf7'));
                            }
                            ;
                            const _0x298b56 = () => {
                                _0x4b4b31(this)[_0x25c6('0x38')]('disabled', ![])[_0x25c6('0x18c')]({
                                    'opacity': 0x1,
                                    'cursor': _0x25c6('0x160')
                                });
                                _0x4b4b31(this)['find'](_0x25c6('0xcd'))['removeClass'](_0x25c6('0xf7'));
                            }
                            ;
                            _0x5ea712();
                            _0x563d51[_0x25c6('0x1d9')]('get-redeem-code', _0x4451af, _0x214354 => {
                                console[_0x25c6('0x191')](_0x25c6('0x65'), _0x214354);
                            }
                            );
                        });
                    }
                    class _0x299d6c {
                        constructor(_0x37b655={}) {
                            this[_0x25c6('0x1ab')] = _0x37b655[_0x25c6('0x27')] || '';
                            this['auth'] = _0x37b655[_0x25c6('0xee')] || {};
                            this['debug'] = _0x37b655['debug'] || ![];
                            this[_0x25c6('0x1e6')] = _0x37b655['timeout'] || 0x4e20;
                            this[_0x25c6('0x149')] = ![];
                            this['connecting'] = ![];
                            this[_0x25c6('0x106')] = null;
                            this[_0x25c6('0xec')] = ![];
                            this['id'] = null;
                            this['eventHandlers'] = new Map();
                            this[_0x25c6('0x115')] = [];
                            this['messageListener'] = null;
                            this[_0x25c6('0xd1')] = new Map();
                            this[_0x25c6('0x15d')] = {
                                'url': this['socketUrl'],
                                'auth': this[_0x25c6('0xee')],
                                'timeout': this[_0x25c6('0x1e6')]
                            };
                            this[_0x25c6('0xab')]('IframeSocketClient\x20初始化完成');
                        }
                        [_0x25c6('0xad')]() {
                            if (this[_0x25c6('0xb8')] || this['connected']) {
                                this[_0x25c6('0xab')](_0x25c6('0x55'));
                                return;
                            }
                            this[_0x25c6('0xb8')] = !![];
                            this[_0x25c6('0xab')](_0x25c6('0x188'));
                            this[_0x25c6('0x17a')]();
                        }
                        [_0x25c6('0x10f')]() {
                            this[_0x25c6('0xab')](_0x25c6('0x12b'));
                            this[_0x25c6('0x149')] = ![];
                            this[_0x25c6('0xb8')] = ![];
                            this['proxyReady'] = ![];
                            if (this['iframe']) {
                                this['_postToProxy']({
                                    'type': _0x25c6('0x10f')
                                });
                            }
                            if (this[_0x25c6('0x187')]) {
                                window[_0x25c6('0x19a')](_0x25c6('0x76'), this['messageListener']);
                                this[_0x25c6('0x187')] = null;
                            }
                            this[_0x25c6('0x3b')]();
                            this[_0x25c6('0x101')](_0x25c6('0x10f'), _0x25c6('0x1ec'));
                        }
                        [_0x25c6('0x17a')]() {
                            this[_0x25c6('0x3b')]();
                            this[_0x25c6('0xab')](_0x25c6('0x1a6'));
                            const _0x43e86f = _0x25c6('0x6f');
                            this['iframe'] = document[_0x25c6('0x169')](_0x25c6('0x106'));
                            this[_0x25c6('0x106')]['src'] = _0x43e86f;
                            this['iframe'][_0x25c6('0x4b')][_0x25c6('0x77')] = _0x25c6('0x159');
                            this[_0x25c6('0x106')][_0x25c6('0x4b')]['width'] = '0';
                            this[_0x25c6('0x106')][_0x25c6('0x4b')][_0x25c6('0x1cc')] = '0';
                            this[_0x25c6('0x106')][_0x25c6('0x4b')][_0x25c6('0x193')] = _0x25c6('0x159');
                            this[_0x25c6('0x106')][_0x25c6('0x91')] = () => {
                                this[_0x25c6('0xab')](_0x25c6('0x129'));
                            }
                            ;
                            this[_0x25c6('0x106')][_0x25c6('0x12f')] = _0x29ed2b => {
                                this[_0x25c6('0xab')](_0x25c6('0xea'), _0x29ed2b);
                                this[_0x25c6('0x190')](new Error(_0x25c6('0x1dd')));
                            }
                            ;
                            document[_0x25c6('0x1e4')][_0x25c6('0x1c2')](this[_0x25c6('0x106')]);
                            this[_0x25c6('0x192')]();
                            setTimeout( () => {
                                if (!this[_0x25c6('0xec')]) {
                                    this[_0x25c6('0xab')](_0x25c6('0x74'));
                                    this[_0x25c6('0x190')](new Error(_0x25c6('0x74')));
                                }
                            }
                            , 0x2710);
                        }
                        [_0x25c6('0x3b')]() {
                            if (this[_0x25c6('0x106')] && this[_0x25c6('0x106')]['parentNode']) {
                                this[_0x25c6('0x106')][_0x25c6('0x73')][_0x25c6('0xc7')](this[_0x25c6('0x106')]);
                                this['iframe'] = null;
                            }
                        }
                        [_0x25c6('0x192')]() {
                            if (this['messageListener']) {
                                window[_0x25c6('0x19a')](_0x25c6('0x76'), this[_0x25c6('0x187')]);
                            }
                            this[_0x25c6('0x187')] = _0x200767 => {
                                if (!this[_0x25c6('0x106')] || _0x200767[_0x25c6('0x3c')] !== this[_0x25c6('0x106')][_0x25c6('0x66')]) {
                                    return;
                                }
                                this['_handleProxyMessage'](_0x200767[_0x25c6('0x93')]);
                            }
                            ;
                            window[_0x25c6('0x17d')](_0x25c6('0x76'), this[_0x25c6('0x187')]);
                            this[_0x25c6('0xab')]('消息监听器已设置');
                        }
                        [_0x25c6('0x61')](_0x585498) {
                            const {type, payload} = _0x585498;
                            this['_log'](_0x25c6('0x88'), type, payload);
                            switch (type) {
                            case 'proxy-ready':
                                this[_0x25c6('0x3e')]();
                                break;
                            case _0x25c6('0xad'):
                                this[_0x25c6('0x145')](payload);
                                break;
                            case _0x25c6('0x10f'):
                                this[_0x25c6('0xf8')](payload);
                                break;
                            case _0x25c6('0x10e'):
                                this[_0x25c6('0x190')](new Error(payload['message']));
                                break;
                            case _0x25c6('0x12d'):
                                this['_handleSocketEvent'](payload);
                                break;
                            case 'io-error':
                                this[_0x25c6('0x9c')](payload);
                                break;
                            case _0x25c6('0x56'):
                                this['_handleIOPing']();
                                break;
                            case _0x25c6('0xb0'):
                                this[_0x25c6('0x123')](payload);
                                break;
                            }
                        }
                        [_0x25c6('0x3e')]() {
                            this['_log']('代理已就绪，开始连接Socket');
                            if (this[_0x25c6('0xec')]) {
                                this[_0x25c6('0xab')]('代理已经就绪，跳过重复处理');
                                return;
                            }
                            this[_0x25c6('0xec')] = !![];
                            this['_postToProxy']({
                                'type': _0x25c6('0xad'),
                                'payload': this['connectionConfig']
                            });
                            this[_0x25c6('0x14e')]();
                        }
                        [_0x25c6('0x145')](_0xe1c16d) {
                            this[_0x25c6('0xab')](_0x25c6('0x19c'), _0xe1c16d);
                            this['connected'] = !![];
                            this[_0x25c6('0xb8')] = ![];
                            this['id'] = _0xe1c16d['id'];
                            this[_0x25c6('0x101')](_0x25c6('0xad'));
                        }
                        [_0x25c6('0xf8')](_0x229a1a) {
                            this[_0x25c6('0xab')](_0x25c6('0xff'), _0x229a1a);
                            this['connected'] = ![];
                            this[_0x25c6('0xb8')] = ![];
                            this[_0x25c6('0x101')](_0x25c6('0x10f'), _0x229a1a[_0x25c6('0x26')]);
                        }
                        [_0x25c6('0x190')](_0xdc4d9c) {
                            this[_0x25c6('0xab')](_0x25c6('0x10a'), _0xdc4d9c);
                            this[_0x25c6('0x149')] = ![];
                            this[_0x25c6('0xb8')] = ![];
                            this['_emit'](_0x25c6('0x10e'), _0xdc4d9c);
                        }
                        [_0x25c6('0x1b5')](_0x315ae9) {
                            const {event, data} = _0x315ae9;
                            this[_0x25c6('0xab')](_0x25c6('0x7b'), event, data);
                            this[_0x25c6('0x101')](event, data);
                        }
                        [_0x25c6('0x9c')](_0xe85d24) {
                            this[_0x25c6('0xab')](_0x25c6('0x141'), _0xe85d24);
                            if (this[_0x25c6('0x15')][_0x25c6('0x28')](_0x25c6('0xe5'))) {
                                this[_0x25c6('0x101')]('io-error', new Error(_0xe85d24[_0x25c6('0x76')]));
                            }
                        }
                        ['_handleIOPing']() {
                            this[_0x25c6('0xab')](_0x25c6('0xb3'));
                            if (this[_0x25c6('0x15')][_0x25c6('0x28')](_0x25c6('0x56'))) {
                                this[_0x25c6('0x101')](_0x25c6('0x56'));
                            }
                        }
                        ['_handleEmitCallback'](_0x4ad4fe) {
                            this[_0x25c6('0xab')](_0x25c6('0x1b6'), _0x4ad4fe);
                            if (this[_0x25c6('0xd1')] && this['emitCallbacks'][_0x25c6('0x28')](_0x4ad4fe[_0x25c6('0x1d7')])) {
                                const _0x48ba32 = this[_0x25c6('0xd1')][_0x25c6('0x1c0')](_0x4ad4fe[_0x25c6('0x1d7')]);
                                if (_0x48ba32) {
                                    _0x48ba32(_0x4ad4fe[_0x25c6('0x72')]);
                                    this['emitCallbacks'][_0x25c6('0x154')](_0x4ad4fe[_0x25c6('0x1d7')]);
                                }
                            }
                        }
                        [_0x25c6('0x132')](_0xb9bcd) {
                            if (!this[_0x25c6('0x106')] || !this[_0x25c6('0x106')][_0x25c6('0x66')]) {
                                this[_0x25c6('0x115')][_0x25c6('0x16d')](_0xb9bcd);
                                return;
                            }
                            if (!this['proxyReady']) {
                                this[_0x25c6('0x115')][_0x25c6('0x16d')](_0xb9bcd);
                                return;
                            }
                            try {
                                this[_0x25c6('0x106')][_0x25c6('0x66')][_0x25c6('0xd5')](_0xb9bcd, '*');
                            } catch (_0x238640) {
                                this['_log'](_0x25c6('0x32'), _0x238640);
                            }
                        }
                        [_0x25c6('0x14e')]() {
                            while (this[_0x25c6('0x115')][_0x25c6('0xd2')] > 0x0) {
                                const _0x4e6dd7 = this[_0x25c6('0x115')]['shift']();
                                this[_0x25c6('0x132')](_0x4e6dd7);
                            }
                        }
                        [_0x25c6('0x1d9')](_0x2e5a8e, _0x47533e, _0x27aa45) {
                            if (!this['connected']) {
                                this[_0x25c6('0xab')](_0x25c6('0x5d'), _0x2e5a8e);
                                return ![];
                            }
                            this[_0x25c6('0xab')](_0x25c6('0x9f'), _0x2e5a8e, _0x47533e);
                            if (_0x27aa45) {
                                if (!this[_0x25c6('0xd1')]) {
                                    this[_0x25c6('0xd1')] = new Map();
                                }
                                this[_0x25c6('0xd1')][_0x25c6('0x139')](_0x2e5a8e, _0x27aa45);
                            }
                            this['_postToProxy']({
                                'type': _0x25c6('0x1d9'),
                                'payload': {
                                    'event': _0x2e5a8e,
                                    'data': _0x47533e,
                                    'callback': !!_0x27aa45
                                }
                            });
                            return !![];
                        }
                        ['on'](_0x149e67, _0x3d4c45) {
                            if (!this[_0x25c6('0x15')][_0x25c6('0x28')](_0x149e67)) {
                                this[_0x25c6('0x15')][_0x25c6('0x139')](_0x149e67, []);
                            }
                            this['eventHandlers'][_0x25c6('0x1c0')](_0x149e67)[_0x25c6('0x16d')](_0x3d4c45);
                            this['_log'](_0x25c6('0xf') + _0x149e67);
                            return this;
                        }
                        [_0x25c6('0x194')](_0xce6c6c, _0x303814) {
                            const _0x34fe66 = this['eventHandlers'][_0x25c6('0x1c0')](_0xce6c6c);
                            if (_0x34fe66) {
                                const _0x50d881 = _0x34fe66['indexOf'](_0x303814);
                                if (_0x50d881 > -0x1) {
                                    _0x34fe66[_0x25c6('0x45')](_0x50d881, 0x1);
                                }
                            }
                            return this;
                        }
                        [_0x25c6('0x101')](_0x3dd19a, ..._0x271402) {
                            const _0x14d883 = this[_0x25c6('0x15')][_0x25c6('0x1c0')](_0x3dd19a);
                            if (_0x14d883 && _0x14d883[_0x25c6('0xd2')] > 0x0) {
                                this['_log'](_0x25c6('0x19d') + _0x3dd19a + '，处理器数量:\x20' + _0x14d883['length']);
                                _0x14d883[_0x25c6('0x143')](_0x5742c1 => {
                                    try {
                                        _0x5742c1(..._0x271402);
                                    } catch (_0x1fc1c1) {
                                        this['_log'](_0x25c6('0xde') + _0x3dd19a + '):', _0x1fc1c1);
                                    }
                                }
                                );
                            }
                        }
                        [_0x25c6('0xf5')]() {
                            return this[_0x25c6('0x149')];
                        }
                        [_0x25c6('0xab')](..._0x3408c2) {
                            if (this[_0x25c6('0x1e8')]) {
                                console[_0x25c6('0x191')](_0x25c6('0x7f'), ..._0x3408c2);
                            }
                        }
                        get['io']() {
                            return {
                                'on': (_0x949e62, _0xb78e9d) => {
                                    if (_0x949e62 === 'error') {
                                        this['on'](_0x25c6('0xe5'), _0xb78e9d);
                                    } else if (_0x949e62 === _0x25c6('0x12a')) {
                                        this['on'](_0x25c6('0x56'), _0xb78e9d);
                                    }
                                }
                            };
                        }
                    }
                    function _0x353090(_0x2373b2) {
                        if (_0x563d51 && _0x563d51[_0x25c6('0xf5')] && _0x563d51[_0x25c6('0xf5')]()) {
                            console[_0x25c6('0x191')](_0x25c6('0x175'));
                            return;
                        }
                        if (_0x563d51) {
                            console[_0x25c6('0x191')](_0x25c6('0x118'));
                            _0x563d51[_0x25c6('0x10f')]();
                        }
                        _0x563d51 = new _0x299d6c({
                            'url': _0x1684d5,
                            'auth': {
                                'token': _0x2373b2,
                                'version': _0x48913b,
                                'locale': _0x133b26
                            },
                            'debug': _0x62af01,
                            'timeout': 0x4e20
                        });
                        _0x563d51['on'](_0x25c6('0xad'), () => {
                            console[_0x25c6('0x191')](_0x25c6('0x15b') + _0x563d51[_0x25c6('0x149')] + '\x20ID:' + _0x563d51['id']);
                            _0x4b4207(_0x58cb11[_0x25c6('0xa8')]);
                            _0x2477ce[_0x25c6('0x2e')](!![]);
                            if (_0x475751 && _0x475751[_0x25c6('0x164')]) {
                                _0x475751[_0x25c6('0x1be')]();
                            } else {}
                        }
                        );
                        _0x563d51['on'](_0x25c6('0x10f'), _0x1a664b => {
                            _0x4b4207('' + _0x58cb11['disconnect'] + _0x1a664b);
                            _0x2477ce[_0x25c6('0x2e')](![]);
                            if (_0x475751 && _0x475751[_0x25c6('0x125')]) {
                                _0x475751[_0x25c6('0x9d')]();
                            }
                        }
                        );
                        _0x563d51['io']['on'](_0x25c6('0x10e'), _0x50b869 => {
                            _0x4b4207('Error:\x20' + _0x50b869[_0x25c6('0x76')]);
                            _0x2477ce['changeConnectStatus'](![]);
                        }
                        );
                        _0x563d51['on'](_0x25c6('0x10e'), _0x498dea => {
                            _0x4b4207('Error:\x20' + _0x498dea['message']);
                            _0x2477ce[_0x25c6('0x2e')](![]);
                        }
                        );
                        _0x563d51['io']['on'](_0x25c6('0x12a'), () => {
                            console['log'](_0x25c6('0x12a'));
                        }
                        );
                        _0x563d51['on']('message', function(_0x5abb39) {
                            _0x2477ce[_0x25c6('0x15c')](_0x5abb39);
                        });
                        _0x563d51[_0x25c6('0xad')]();
                    }
                    function _0x3435a3() {
                        return {
                            'socketMessageController'(_0x372c35) {
                                if (_0x372c35[_0x25c6('0x110')] === _0x25c6('0x82')) {
                                    _0x4b4207(_0x372c35[_0x25c6('0xaf')]);
                                } else if (_0x372c35[_0x25c6('0x110')] === _0x25c6('0x41')) {
                                    let _0x3e89e7 = Number(_0x372c35['msg'][_0x25c6('0x171')](0x2));
                                    let _0x2e6d7a = '';
                                    if (_0x3e89e7 <= 1.5) {
                                        _0x2e6d7a = _0x25c6('0xc6');
                                    } else if (_0x3e89e7 > 1.5 && _0x3e89e7 < 0x3) {
                                        _0x2e6d7a = _0x25c6('0x1a3');
                                    } else {
                                        _0x2e6d7a = _0x25c6('0x22');
                                    }
                                    _0x4b4b31('#autoDropwrap\x20.balance')[_0x25c6('0x5b')](_0x25c6('0x64') + _0x2e6d7a + '\x22>' + _0x3e89e7 + _0x25c6('0x81'));
                                } else if (_0x372c35[_0x25c6('0x110')] === _0x25c6('0x5c')) {
                                    let _0x5178ab = _0x4b4b31(_0x25c6('0x1d8'));
                                    _0x5178ab[_0x25c6('0x63')]('$' + _0x372c35['msg']);
                                } else if (_0x372c35[_0x25c6('0x110')] === _0x25c6('0x8')) {
                                    if (_0x372c35['msg']['success']) {
                                        _0x4b4207(_0x58cb11[_0x25c6('0x48')]);
                                        _0x4b4207(_0x372c35[_0x25c6('0xaf')][_0x25c6('0x93')]);
                                        _0x4b4207(_0x58cb11[_0x25c6('0x6a')]);
                                    } else {
                                        _0x4b4207(_0x372c35[_0x25c6('0xaf')][_0x25c6('0x76')]);
                                    }
                                    _0x4b4b31(_0x25c6('0x6c'))[_0x25c6('0x38')](_0x25c6('0x57'), ![])['css']({
                                        'opacity': 0x1,
                                        'cursor': _0x25c6('0x160')
                                    });
                                    _0x4b4b31(_0x25c6('0x6c'))[_0x25c6('0x167')](_0x25c6('0xcd'))['removeClass'](_0x25c6('0xf7'));
                                    _0x4b4b31(_0x25c6('0x1ee'))['hide']();
                                } else if (_0x372c35['type'] === _0x25c6('0x1d2')) {
                                    console[_0x25c6('0x191')](new Date()['toLocaleString']() + '\x20CODE\x20incomming:\x20');
                                    console[_0x25c6('0x191')](_0x372c35['msg']);
                                    let _0x3ab628 = _0x372c35[_0x25c6('0xaf')][_0x25c6('0x14f')][_0x25c6('0x1e5')]();
                                    let _0xd931cd = _0x372c35[_0x25c6('0xaf')][_0x25c6('0x31')];
                                    if (_0xd931cd) {
                                        _0xd931cd = Number(_0xd931cd);
                                    }
                                    let _0x54010f = _0x372c35[_0x25c6('0xaf')][_0x25c6('0x110')];
                                    if (_0x54010f == _0x25c6('0x1f6')) {
                                        if (_0xd931cd == 0x1) {
                                            _0x54010f = _0x25c6('0x11d');
                                        } else if (_0xd931cd == 0x2) {
                                            _0x54010f = 'Daily2';
                                        } else if (_0xd931cd == 0x3) {
                                            _0x54010f = 'Daily3';
                                        } else {
                                            _0x54010f = _0x25c6('0x142');
                                        }
                                    }
                                    if (_0x372c35['msg'][_0x25c6('0x95')] && _0x372c35[_0x25c6('0xaf')][_0x25c6('0x95')] == _0x25c6('0x135')) {
                                        _0x26275a = !![];
                                    } else {
                                        _0x26275a = ![];
                                    }
                                    if (!_0x54010f) {
                                        _0x54010f = _0x25c6('0x161');
                                    }
                                    if (!_0x519476[_0x25c6('0x109')][_0x25c6('0xb6')](_0x54010f)) {
                                        console[_0x25c6('0x191')](_0x25c6('0xef') + _0x54010f);
                                        return;
                                    }
                                    if (!_0x46b5ff[_0x25c6('0xb6')](_0x3ab628)) {
                                        _0x301507[_0x25c6('0x16d')](_0x3ab628);
                                        if (_0x59458d) {
                                            if (_0x53e7de == _0x25c6('0x1ad')) {
                                                _0x30356e(_0x301507[0x0]);
                                            } else {
                                                _0x4bb4d3(_0x301507[0x0]);
                                            }
                                        }
                                    }
                                }
                            },
                            'initUserSetInfo'() {
                                try {
                                    const _0x3d2304 = {
                                        'drops': [_0x25c6('0x11d'), _0x25c6('0x78'), 'Daily3', 'DailyOther', _0x25c6('0x1ea'), 'PlaySmarter', 'WeeklyStream', _0x25c6('0x161')],
                                        'vault': ![],
                                        'currency': 'usdt'
                                    };
                                    const _0x4a10f6 = GM_getValue(_0x177fd9);
                                    if (_0x4a10f6) {
                                        if (!_0x4a10f6[_0x25c6('0x185')](_0x25c6('0x109'))) {
                                            _0x4a10f6[_0x25c6('0x109')] = _0x3d2304[_0x25c6('0x109')];
                                        }
                                        if (!_0x4a10f6['hasOwnProperty']('vault')) {
                                            _0x4a10f6[_0x25c6('0x133')] = _0x3d2304[_0x25c6('0x133')];
                                        }
                                        if (!_0x4a10f6['hasOwnProperty'](_0x25c6('0x174'))) {
                                            _0x4a10f6[_0x25c6('0x174')] = _0x3d2304[_0x25c6('0x174')];
                                        }
                                        _0x519476 = _0x4a10f6;
                                    } else {
                                        _0x519476 = _0x3d2304;
                                    }
                                    if (_0x3def2c == _0x25c6('0x10c')) {
                                        _0x4abb89 = _0x519476[_0x25c6('0x174')];
                                        _0x4b4207(_0x58cb11[_0x25c6('0x0')][0x0] + '\x20' + _0x4abb89[_0x25c6('0xac')]() + '\x20' + _0x58cb11[_0x25c6('0x0')][0x1]);
                                    }
                                    if (_0x3def2c == _0x25c6('0x126')) {
                                        _0x4abb89 = _0x2477ce['getCurrency']();
                                        _0x4b4207(_0x58cb11[_0x25c6('0x0')][0x0] + '\x20' + _0x4abb89[_0x25c6('0xac')]() + '\x20,If\x20you\x20need\x20to\x20modify\x20it,\x20please\x20select\x20it\x20on\x20the\x20page\x20and\x20refresh.');
                                    }
                                    console['log']('户设置', _0x519476);
                                    GM_setValue(_0x177fd9, _0x519476);
                                    _0x4b4b31('#autoDropwrap\x20.user-set-wrap\x20.code-claim-set\x20input[type=checkbox]')[_0x25c6('0x14d')](function() {
                                        const _0x47b7d9 = _0x4b4b31(this)[_0x25c6('0x8b')]();
                                        if (_0x519476[_0x25c6('0x109')][_0x25c6('0xb6')](_0x47b7d9)) {
                                            _0x4b4b31(this)['prop']('checked', !![]);
                                        }
                                    });
                                    _0x4b4b31('#autoDropwrap\x20.user-set-wrap\x20.vault-desposit\x20input[type=checkbox]')['prop'](_0x25c6('0x120'), _0x519476[_0x25c6('0x133')]);
                                    _0x4b4b31('#autoDropwrap\x20.user-set-wrap\x20.currency-wrap\x20.currency')[_0x25c6('0x8b')](_0x4abb89);
                                } catch (_0x9583ca) {
                                    console[_0x25c6('0x191')](_0x9583ca);
                                }
                            },
                            'getSession'() {
                                try {
                                    let _0x3e789a = _0x2477ce[_0x25c6('0x1c3')](_0x25c6('0x144'));
                                    if (_0x3e789a) {
                                        return _0x3e789a;
                                    } else {
                                        throw new Error(_0x25c6('0x4e') + _0x58cb11[_0x25c6('0x2b')]);
                                    }
                                } catch (_0x112441) {
                                    throw new Error(_0x25c6('0x4e') + _0x112441[_0x25c6('0x76')] + '\x20' + _0x58cb11['refesh']);
                                }
                            },
                            'getUsername': async () => {
                                try {
                                    const _0x58f862 = await _0x16f655[_0x25c6('0x111')]();
                                    if (!_0x58f862['ok']) {
                                        if (_0x58f862[_0x25c6('0xc2')] == 0x193 || _0x58f862['status'] == 0x191) {
                                            throw new Error(_0x25c6('0x1cf') + _0x58f862['status'] + ',\x20' + _0x58cb11['refreshDelay']);
                                        }
                                        throw new Error('' + _0x58cb11['refresh']);
                                    }
                                    const _0x1a9820 = await _0x58f862[_0x25c6('0xa7')]();
                                    if (_0x1a9820[_0x25c6('0x93')]) {
                                        let _0x512998 = _0x1a9820[_0x25c6('0x93')][_0x25c6('0x1b9')][_0x25c6('0xe9')];
                                        return _0x512998;
                                    } else {
                                        throw new Error('' + _0x58cb11[_0x25c6('0xcb')]);
                                    }
                                } catch (_0x12035c) {
                                    throw new Error(_0x25c6('0x1a8') + _0x12035c[_0x25c6('0x76')] + '\x20' + _0x58cb11[_0x25c6('0x2b')]);
                                }
                            }
                            ,
                            'getCurrency'() {
                                try {
                                    return _0x2477ce[_0x25c6('0x1c3')](_0x25c6('0x6b'));
                                } catch (_0x703d90) {
                                    console[_0x25c6('0x191')](_0x25c6('0x1c8'));
                                    return 'usdt';
                                }
                            },
                            'getpid'() {
                                try {
                                    let _0x1a5129 = GM_info[_0x25c6('0x8d')]['author']['split']('_')[0x1];
                                    if (_0x1a5129) {
                                        return _0x1a5129;
                                    }
                                } catch (_0x183c9f) {
                                    return '';
                                }
                            },
                            'clearNoNeedClaimCode'() {
                                setInterval(function() {
                                    _0x46b5ff = [];
                                }, 0x3 * 0x3c * 0x3e8);
                            },
                            'changeConnectStatus'(_0x354fff) {
                                let _0x11967b = _0x354fff ? _0x25c6('0x13b') : _0x25c6('0xfe');
                                _0x4b4b31(_0x25c6('0x20'))[_0x25c6('0x18c')](_0x25c6('0x1b1'), _0x11967b);
                            },
                            'showLoading'() {
                                _0x4b4b31(_0x25c6('0x87'))['show']();
                            },
                            'hideLoading'() {
                                _0x4b4b31(_0x25c6('0x87'))[_0x25c6('0x8c')]();
                            },
                            'getCookie'(_0x513fe5) {
                                let _0x3028aa = document['cookie'][_0x25c6('0x195')](';\x20');
                                for (let _0x598c57 = 0x0; _0x598c57 < _0x3028aa[_0x25c6('0xd2')]; _0x598c57++) {
                                    let _0x5e52a6 = _0x3028aa[_0x598c57]['split']('=');
                                    if (_0x5e52a6[0x0] == _0x513fe5) {
                                        return _0x5e52a6[0x1];
                                    }
                                }
                                return null;
                            },
                            'computedRate'(_0x5032be, _0x335d26) {
                                if (_0x5032be && _0x335d26 && _0x4451af['hasOwnProperty'](_0x335d26)) {
                                    let _0x67f97b = _0x4451af[_0x335d26];
                                    return (_0x5032be * _0x67f97b)[_0x25c6('0x171')](0x2);
                                } else {
                                    return '';
                                }
                            },
                            'getRate': async () => {
                                try {
                                    const _0x4cc62b = await _0x16f655[_0x25c6('0x179')]();
                                    const _0x1b4522 = await _0x4cc62b[_0x25c6('0xa7')]();
                                    if (_0x1b4522['data']) {
                                        let _0x332444 = _0x1b4522['data'][_0x25c6('0x105')][_0x25c6('0x186')];
                                        let _0x510d9f = {};
                                        _0x332444['forEach'](_0xfe8da9 => {
                                            let _0x5c7ae1 = _0xfe8da9['values'];
                                            _0x5c7ae1[_0x25c6('0x143')](_0x394806 => {
                                                if (_0x394806[_0x25c6('0x174')] == _0x25c6('0x47')) {
                                                    _0x510d9f[_0xfe8da9['name']] = _0x394806[_0x25c6('0x150')];
                                                }
                                            }
                                            );
                                        }
                                        );
                                        _0x4451af = _0x510d9f;
                                    } else {
                                        let _0x2d59f1 = _0x1b4522[_0x25c6('0x16c')][0x0]['errorType'];
                                        let _0x2e96bf = _0x1b4522['errors'][0x0][_0x25c6('0x76')];
                                        throw new Error(_0x25c6('0x42') + _0x2d59f1 + '-' + _0x2e96bf);
                                    }
                                } catch (_0xa5ad21) {
                                    console[_0x25c6('0x191')](_0x25c6('0x10'), _0xa5ad21);
                                }
                            }
                            ,
                            'sendClaimResult'(_0x4d1eff, _0x2c050d, _0xd06ee8, _0x1c69bc) {
                                const _0x109939 = {
                                    'code': _0x4d1eff,
                                    'amount': _0x2c050d,
                                    'usdAmount': _0xd06ee8,
                                    'currency': _0x1c69bc
                                };
                                _0x563d51[_0x25c6('0x1d9')](_0x25c6('0x189'), _0x109939, _0x48c628 => {
                                    console['log']('服务器确认：' + _0x48c628);
                                }
                                );
                            },
                            'VaultDeposit': async (_0x29cef5, _0x1c3b51) => {
                                if (!_0x519476[_0x25c6('0x133')]) {
                                    return;
                                }
                                try {
                                    const _0x33315d = await _0x16f655['createVaultDeposit'](_0x29cef5, _0x1c3b51);
                                    if (!_0x33315d['ok']) {
                                        throw new Error(_0x25c6('0x1b3') + _0x33315d[_0x25c6('0xc2')]);
                                    }
                                    const _0x6487ff = await _0x33315d[_0x25c6('0xa7')]();
                                    if (_0x6487ff[_0x25c6('0x93')]) {
                                        _0x4b4207(_0x58cb11[_0x25c6('0x54')]);
                                    } else {
                                        let _0x1e1609 = _0x6487ff[_0x25c6('0x16c')][0x0][_0x25c6('0x16a')];
                                        let _0x273569 = _0x6487ff[_0x25c6('0x16c')][0x0][_0x25c6('0x76')];
                                        throw new Error(_0x25c6('0x1b3') + _0x273569);
                                    }
                                } catch (_0x22c8e5) {
                                    _0x4b4207(_0x22c8e5[_0x25c6('0xe')]);
                                }
                            }
                            ,
                            'updateRedeemBtnState': _0x117bb0 => {
                                if (_0x483f63[_0x25c6('0x14f')] && _0x483f63[_0x25c6('0x31')]) {
                                    _0x117bb0[_0x25c6('0x38')](_0x25c6('0x57'), ![])[_0x25c6('0x18c')]({
                                        'opacity': 0x1,
                                        'cursor': _0x25c6('0x160')
                                    });
                                } else {
                                    _0x117bb0['prop'](_0x25c6('0x57'), !![])[_0x25c6('0x18c')]({
                                        'opacity': 0.6,
                                        'cursor': _0x25c6('0x1e7')
                                    });
                                }
                            }
                        };
                    }
                    async function _0x257853(_0x28b880, _0x250bb8, _0x2c3c9e='') {
                        _0x33c9fe = ![];
                        _0x2477ce['hideLoading']();
                        _0x59458d = !![];
                        _0x26275a = ![];
                        let _0x53be7a = [_0x25c6('0x68'), _0x25c6('0x1b8'), _0x25c6('0xc1'), _0x25c6('0x59'), _0x25c6('0x2a'), _0x25c6('0x14a'), _0x25c6('0x131'), _0x25c6('0x1a4')];
                        if (_0x53be7a[_0x25c6('0xb6')](_0x250bb8)) {
                            _0x4b4207(_0x25c6('0x128') + _0x58cb11[_0x250bb8]);
                        } else if (_0x2c3c9e) {
                            _0x4b4207(_0x2c3c9e);
                        } else {
                            _0x4b4207(_0x250bb8);
                        }
                        if (_0x301507[_0x25c6('0x35')](_0x28b880) > -0x1) {
                            _0x301507['splice'](_0x301507[_0x25c6('0x35')](_0x28b880), 0x1);
                            let _0x13a5f3 = _0x301507[_0x25c6('0x1b2')](_0x1d9fa6 => _0x1d9fa6 != undefined);
                            _0x301507 = _0x13a5f3;
                        }
                        let _0x11138e = [_0x25c6('0x94'), _0x25c6('0x68'), _0x25c6('0x1b8'), _0x25c6('0xc1'), _0x25c6('0x2a'), 'emailUnverified', 'kycLevelNotSufficient', 'codeAlreadyClaimed', _0x25c6('0xd3')];
                        if (_0x11138e[_0x25c6('0xb6')](_0x250bb8) || (_0x2c3c9e['indexOf'](_0x25c6('0x30')) > -0x1 || _0x2c3c9e['indexOf'](_0x25c6('0x19')) > -0x1 || _0x2c3c9e[_0x25c6('0x35')]('[429]') > -0x1)) {
                            _0x46b5ff[_0x25c6('0x16d')](_0x28b880);
                            let _0xb1362f = [];
                            _0x301507[_0x25c6('0x143')](_0x4f4391 => {
                                if (_0x4f4391 != _0x28b880) {
                                    _0xb1362f[_0x25c6('0x16d')](_0x4f4391);
                                }
                            }
                            );
                            _0x301507 = _0xb1362f;
                        }
                        if (_0x301507[_0x25c6('0xd2')] > 0x0) {
                            setTimeout( () => {
                                if (_0x53e7de == _0x25c6('0x1ad')) {
                                    _0x30356e(_0x301507[0x0]);
                                }
                            }
                            , 0x1f4);
                        }
                    }
                    async function _0x30356e(_0x5860e5) {
                        if (!_0x59458d) {
                            console['log'](_0x25c6('0x173') + _0x59458d);
                            return;
                        }
                        async function _0x271a7a(_0x3cb447) {
                            let _0x30b2ae = 0x0;
                            let _0x4c3a75 = 0x3;
                            while (_0x30b2ae < _0x4c3a75) {
                                try {
                                    const _0x5e97e0 = await _0x16f655[_0x25c6('0xd4')](_0x3cb447);
                                    if (!_0x5e97e0['ok']) {
                                        if (_0x5e97e0['status'] == 0x193 || _0x5e97e0[_0x25c6('0xc2')] == 0x191 || _0x5e97e0[_0x25c6('0xc2')] == 0x1ad) {
                                            throw new Error('HTTP\x20Error\x20[' + _0x5e97e0[_0x25c6('0xc2')] + ']\x20' + _0x58cb11[_0x25c6('0x1ed')]);
                                        }
                                        throw new Error('HTTP\x20Error\x20[' + _0x5e97e0[_0x25c6('0xc2')] + ']');
                                    }
                                    const _0x17ce0b = await _0x5e97e0[_0x25c6('0xa7')]();
                                    if (_0x17ce0b['data']) {
                                        let _0x1ee066 = _0x17ce0b[_0x25c6('0x93')][_0x25c6('0x5')][_0x25c6('0x46')];
                                        if (_0x1ee066 == 'available' || _0x1ee066 == _0x25c6('0x37')) {
                                            return _0x1ee066;
                                        } else {
                                            _0x257853(_0x3cb447, _0x1ee066);
                                            return null;
                                        }
                                    } else {
                                        let _0x1bfb3a = _0x17ce0b[_0x25c6('0x16c')][0x0]['errorType'];
                                        let _0x1d6eb0 = _0x25c6('0x128') + _0x17ce0b['errors'][0x0]['message'];
                                        _0x257853(_0x3cb447, _0x1bfb3a, _0x1d6eb0);
                                        return null;
                                    }
                                } catch (_0x217ef4) {
                                    let _0x2ac917 = 'FETCH_ERROR';
                                    let _0x550b10 = _0x25c6('0x11b') + _0x217ef4['message'];
                                    _0x30b2ae++;
                                    if (_0x30b2ae < _0x4c3a75) {
                                        _0x4b4207(_0x550b10);
                                        if (_0x550b10[_0x25c6('0x35')](_0x25c6('0x30')) > -0x1 || _0x550b10[_0x25c6('0x35')](_0x25c6('0x19')) > -0x1 || _0x550b10['indexOf'](_0x25c6('0x21')) > -0x1) {
                                            break;
                                        }
                                        await new Promise(_0x410760 => setTimeout(_0x410760, 0x3e8));
                                    } else {
                                        _0x257853(_0x3cb447, _0x2ac917, _0x550b10);
                                        return null;
                                    }
                                }
                            }
                            return null;
                        }
                        async function _0x5e9b49(_0xe8958f, _0x37e917) {
                            try {
                                const _0x31c82d = await _0x16f655[_0x25c6('0x67')](_0xe8958f, _0x4abb89, _0x37e917);
                                if (!_0x31c82d['ok']) {
                                    if (_0x31c82d['status'] == 0x193 || _0x31c82d[_0x25c6('0xc2')] == 0x191 || _0x31c82d[_0x25c6('0xc2')] == 0x1ad) {
                                        throw new Error(_0x25c6('0xe4') + _0x31c82d[_0x25c6('0xc2')] + ']\x20' + _0x58cb11[_0x25c6('0x1ed')]);
                                    }
                                    throw new Error('HTTP\x20Error\x20[' + _0x31c82d[_0x25c6('0xc2')] + ']');
                                }
                                const _0x3af20b = await _0x31c82d[_0x25c6('0xa7')]();
                                if (_0x3af20b[_0x25c6('0x93')]) {
                                    let _0x2eabe7 = _0x3af20b['data']['claimConditionBonusCode'][_0x25c6('0x31')];
                                    let _0x42191f = _0x3af20b[_0x25c6('0x93')]['claimConditionBonusCode']['currency'];
                                    let _0x14065f = '✅\x20' + _0x58cb11[_0x25c6('0x1dc')] + Number(_0x2eabe7[_0x25c6('0x171')](0x8)) + '\x20' + _0x42191f['toUpperCase']();
                                    const _0x16840f = _0x25c6('0x94');
                                    _0x257853(_0xe8958f, _0x16840f, _0x14065f);
                                    let _0x48d811 = _0x2eabe7 * _0x4451af[_0x42191f];
                                    _0x2477ce[_0x25c6('0x1bb')](_0xe8958f, _0x2eabe7, _0x48d811, _0x42191f);
                                    _0x2477ce[_0x25c6('0x33')](_0x42191f, _0x2eabe7);
                                } else {
                                    let _0x3e7a6f = _0x3af20b['errors'][0x0][_0x25c6('0x16a')];
                                    let _0x594282 = _0x25c6('0x128') + _0x3af20b[_0x25c6('0x16c')][0x0][_0x25c6('0x76')];
                                    _0x257853(_0xe8958f, _0x3e7a6f, _0x594282);
                                    if (_0x594282[_0x25c6('0x35')](_0x25c6('0x62')) > -0x1) {
                                        throw new Error(_0x594282);
                                    }
                                }
                            } catch (_0x4cc3bd) {
                                let _0x4b2f12 = '' + _0x4cc3bd[_0x25c6('0x76')];
                                throw new Error(_0x4b2f12);
                            }
                        }
                        if (_0x26275a) {
                            _0x4b4207(_0x25c6('0x16e') + _0x58cb11['claimStart'] + '\x20' + _0x5860e5);
                        } else {
                            _0x4b4207('🎁\x20-\x20' + _0x58cb11[_0x25c6('0x168')] + '\x20' + _0x5860e5);
                        }
                        _0x59458d = ![];
                        _0x2477ce[_0x25c6('0xe8')]();
                        setTimeout(function() {
                            _0x59458d = !![];
                            _0x2477ce['hideLoading']();
                        }, 0xf * 0x3e8);
                        if (_0x26275a) {
                            let _0x2a57fc = 0x0;
                            let _0x42ad70 = 0x3;
                            while (_0x2a57fc < _0x42ad70) {
                                try {
                                    const _0x442e22 = await _0x475751[_0x25c6('0xba')]();
                                    if (!_0x442e22) {
                                        throw new Error(_0x25c6('0x147'));
                                    }
                                    const _0x1beefb = await _0x5e9b49(_0x5860e5, _0x442e22);
                                    break;
                                } catch (_0x44b011) {
                                    let _0x5a5f54 = _0x25c6('0x25');
                                    let _0x538a00 = '❌\x20' + _0x44b011[_0x25c6('0x76')];
                                    _0x2a57fc++;
                                    if (_0x538a00[_0x25c6('0x35')]('unknown\x20error') > -0x1 && _0x2a57fc == _0x42ad70) {
                                        if (_0x42ad70 < 0x5) {
                                            _0x42ad70++;
                                        }
                                    }
                                    if (_0x2a57fc < _0x42ad70) {
                                        _0x4b4207(_0x538a00);
                                        if (_0x538a00[_0x25c6('0x35')](_0x25c6('0x30')) > -0x1 || _0x538a00[_0x25c6('0x35')](_0x25c6('0x19')) > -0x1 || _0x538a00['indexOf'](_0x25c6('0x21')) > -0x1) {
                                            break;
                                        }
                                        _0x4b4207(_0x25c6('0x119'));
                                        await new Promise(_0x106257 => setTimeout(_0x106257, 0x3e8));
                                    } else {
                                        _0x257853(_0x5860e5, _0x5a5f54, _0x538a00);
                                    }
                                }
                            }
                        } else {
                            let _0x28a94b = await _0x271a7a(_0x5860e5);
                            if (_0x28a94b == _0x25c6('0x15a') || _0x28a94b == _0x25c6('0x37')) {
                                let _0x16612f = 0x0;
                                let _0x29b4a5 = 0x3;
                                while (_0x16612f < _0x29b4a5) {
                                    try {
                                        const _0x4dc712 = await _0x475751[_0x25c6('0xba')]();
                                        if (!_0x4dc712) {
                                            throw new Error('Failed\x20to\x20obtain\x20token.');
                                        }
                                        const _0x2169b8 = await _0x5e9b49(_0x5860e5, _0x4dc712);
                                        break;
                                    } catch (_0x3589f7) {
                                        let _0x3edcac = _0x25c6('0x25');
                                        let _0x20a276 = '❌\x20' + _0x3589f7[_0x25c6('0x76')];
                                        _0x16612f++;
                                        if (_0x20a276['indexOf'](_0x25c6('0x62')) > -0x1 && _0x16612f == _0x29b4a5) {
                                            if (_0x29b4a5 < 0x5) {
                                                _0x29b4a5++;
                                            }
                                        }
                                        if (_0x16612f < _0x29b4a5) {
                                            _0x4b4207(_0x20a276);
                                            if (_0x20a276['indexOf'](_0x25c6('0x30')) > -0x1 || _0x20a276['indexOf'](_0x25c6('0x19')) > -0x1 || _0x20a276['indexOf'](_0x25c6('0x21')) > -0x1) {
                                                break;
                                            }
                                            _0x4b4207(_0x25c6('0x119'));
                                            await new Promise(_0x57afad => setTimeout(_0x57afad, 0x3e8));
                                        } else {
                                            _0x257853(_0x5860e5, _0x3edcac, _0x20a276);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    unsafeWindow[_0x25c6('0xaa')] = {};
                    unsafeWindow['FCTestClaim'] = function(_0x1bff97, _0x37bdf2) {
                        if (_0x37bdf2) {
                            _0x26275a = _0x37bdf2 ? !![] : ![];
                        }
                        _0x30356e(_0x1bff97);
                    }
                    ;
                    unsafeWindow[_0x25c6('0xaa')][_0x25c6('0x1de')] = function(_0x459e28, _0x5374f3, _0x4b6f89, _0x68b6d6) {
                        _0x2477ce[_0x25c6('0x1bb')](_0x459e28, _0x5374f3, _0x4b6f89, _0x68b6d6);
                    }
                    ;
                    unsafeWindow['zfcz'][_0x25c6('0x49')] = function() {
                        if (_0x475751) {
                            _0x475751[_0x25c6('0xda')] = [];
                        }
                    }
                    ;
                    unsafeWindow['zfcz'][_0x25c6('0x79')] = function() {
                        if (!_0x475751) {
                            console[_0x25c6('0x191')](_0x25c6('0x13c'));
                            return;
                        }
                        console[_0x25c6('0x191')]('🔍\x20===\x20Token缓存详细信息\x20===');
                        console[_0x25c6('0x191')](_0x25c6('0x1') + _0x475751[_0x25c6('0xda')][_0x25c6('0xd2')] + '/' + _0x475751[_0x25c6('0xfb')]);
                        console[_0x25c6('0x191')]('🔄\x20生成状态:\x20' + (_0x475751['isGenerating'] ? _0x25c6('0x29') : '空闲'));
                        console[_0x25c6('0x191')](_0x25c6('0x5f') + Math['floor'](_0x475751[_0x25c6('0x1c4')] / 0x3e8) + _0x25c6('0x146'));
                        console[_0x25c6('0x191')](_0x25c6('0x1ce') + (_0x475751[_0x25c6('0x125')] ? _0x25c6('0x12') : _0x25c6('0x138')));
                        if (_0x475751[_0x25c6('0xda')]['length'] === 0x0) {
                            console[_0x25c6('0x191')](_0x25c6('0xf0'));
                        } else {
                            const _0x1511ed = Date['now']();
                            _0x475751['tokenCache'][_0x25c6('0x143')]( (_0x11af82, _0x617c9a) => {
                                const _0x4b6eb5 = Math[_0x25c6('0x1da')]((_0x1511ed - _0x11af82[_0x25c6('0x1a7')]) / 0x3e8);
                                const _0x4fb369 = Math[_0x25c6('0x1da')]((_0x475751[_0x25c6('0x1c4')] - (_0x1511ed - _0x11af82[_0x25c6('0x1a7')])) / 0x3e8);
                                const _0x5730e7 = _0x1511ed - _0x11af82[_0x25c6('0x1a7')] >= _0x475751['tokenTimeout'];
                                console['log'](_0x25c6('0xa5') + _0x617c9a + ']:');
                                console[_0x25c6('0x191')]('\x20\x20\x20长度:\x20' + _0x11af82[_0x25c6('0x11c')][_0x25c6('0xd2')]);
                                console['log'](_0x25c6('0x18a') + _0x4b6eb5 + _0x25c6('0x98') + Math[_0x25c6('0x1da')](_0x4b6eb5 / 0x3c) + '分' + _0x4b6eb5 % 0x3c + '秒)');
                                console[_0x25c6('0x191')](_0x25c6('0x5a') + _0x4fb369 + _0x25c6('0x98') + Math[_0x25c6('0x1da')](_0x4fb369 / 0x3c) + '分' + _0x4fb369 % 0x3c + '秒)');
                                console[_0x25c6('0x191')](_0x25c6('0x70') + (_0x5730e7 ? _0x25c6('0x1f1') : '✅\x20有效'));
                            }
                            );
                        }
                        console[_0x25c6('0x191')]('===============================================');
                    }
                    ;
                    function _0x4bb4d3(_0x136b8a) {
                        _0x33c9fe = !![];
                    }
                    function _0x4b4207(_0x3103e8) {
                        let _0x575903 = new Date();
                        let _0x161cff = _0x575903['getFullYear']();
                        let _0x28cfd3 = _0x575903['getMonth']() + 0x1;
                        let _0x18d246 = _0x575903[_0x25c6('0x3f')]() >= 0xa ? _0x575903[_0x25c6('0x3f')]() : '0' + _0x575903['getDate']();
                        let _0x54f26a = _0x575903[_0x25c6('0x1d4')]() >= 0xa ? _0x575903['getHours']() : '0' + _0x575903[_0x25c6('0x1d4')]();
                        let _0xea55d2 = _0x575903['getMinutes']() >= 0xa ? _0x575903[_0x25c6('0x97')]() : '0' + _0x575903[_0x25c6('0x97')]();
                        let _0x347688 = _0x575903['getSeconds']() >= 0xa ? _0x575903[_0x25c6('0x4f')]() : '0' + _0x575903['getSeconds']();
                        let _0x23a4c5 = _0x575903['getTime']();
                        let _0x4a30c0 = new Date(_0x161cff + '-' + _0x28cfd3 + '-' + _0x18d246 + '\x20' + _0x54f26a + ':' + _0xea55d2 + ':' + _0x347688)[_0x25c6('0x24')]();
                        let _0x102f06 = 0x0;
                        if (_0x23a4c5 - _0x4a30c0 < 0xa) {
                            _0x102f06 = '00' + (_0x23a4c5 - _0x4a30c0);
                        } else if (_0x23a4c5 - _0x4a30c0 >= 0xa && _0x23a4c5 - _0x4a30c0 < 0x64) {
                            _0x102f06 = '0' + (_0x23a4c5 - _0x4a30c0);
                        } else {
                            _0x102f06 = _0x23a4c5 - _0x4a30c0;
                        }
                        let _0x39bb07 = _0x18d246 + '\x20' + _0x54f26a + ':' + _0xea55d2 + ':' + _0x347688;
                        let _0x28c792 = _0x39bb07 + _0x25c6('0xd6');
                        _0x28ba4c += '' + _0x28c792 + _0x3103e8 + '\x0a';
                        _0x4b4b31(_0x25c6('0x130'))[_0x25c6('0x8b')](_0x28ba4c);
                        _0x4b4b31('#autoDropwrap\x20.log')['scrollTop'](0x186a0);
                    }
                    function _0x3a2cd0() {
                        var _0x16c9a3 = _0x4b4b31(window)['width']();
                        let _0x1808aa = _0x16c9a3 > 0x280 ? '380px' : _0x25c6('0x1eb');
                        let _0x16c7d0 = _0x16c9a3 > 0x280 ? _0x25c6('0x69') : '7%';
                        let _0x4f9073 = _0x16c9a3 > 0x280 ? 0x18 : 0x16;
                        let _0x41215d = _0x3def2c == _0x25c6('0x126') ? _0x25c6('0x134') : '';
                        let _0x250eb5 = _0x436be3 + '/?tab=tip&currency=trx&modal=wallet&name=' + _0x17c26a;
                        const _0xee2fcd = document[_0x25c6('0x169')](_0x25c6('0x4b'));
                        _0xee2fcd['type'] = 'text/css';
                        _0xee2fcd[_0x25c6('0x7a')] = _0x25c6('0x50');
                        document[_0x25c6('0x108')][_0x25c6('0x1c2')](_0xee2fcd);
                        var _0x4789fe = _0x25c6('0x90') + _0x16c7d0 + _0x25c6('0x116') + _0x1808aa + _0x25c6('0x96') + _0x16c2bc + '\x20<span\x20class=\x22version\x22>v' + _0x48913b + _0x25c6('0x14b') + _0x58cb11[_0x25c6('0x2d')] + _0x25c6('0x1ae') + _0x58cb11[_0x25c6('0x1df')] + _0x25c6('0xc3') + _0x58cb11['settings'] + _0x25c6('0xfc') + _0x58cb11[_0x25c6('0x1a2')] + _0x25c6('0x81') + _0x58cb11[_0x25c6('0x1bf')] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><span\x20style=\x22color:#d8dadf;font-weight:bold;\x22>' + _0x58cb11['getType'] + '</span>' + _0x58cb11['getTypeContent'] + _0x25c6('0xf9') + _0x58cb11['recharge'] + _0x25c6('0x114') + _0x58cb11[_0x25c6('0x163')][_0x25c6('0x14f')] + _0x25c6('0x19e') + _0x58cb11['redeemForm'][_0x25c6('0x31')] + _0x25c6('0xdb') + _0x58cb11[_0x25c6('0x163')][_0x25c6('0x18f')] + _0x25c6('0x4d') + _0x58cb11[_0x25c6('0x8e')] + _0x25c6('0x1f3') + _0x41215d + _0x25c6('0x11f') + _0x58cb11[_0x25c6('0x1c5')] + _0x25c6('0xbf') + _0x58cb11[_0x25c6('0x34')][0x0] + '\x20\x22<span\x20style=\x22color:#fff;font-weight:blod;\x22>' + _0x17c26a + _0x25c6('0xc5') + _0x58cb11[_0x25c6('0x34')][0x1] + _0x25c6('0x81') + _0x58cb11[_0x25c6('0x34')][0x2] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22get-redeem-code-btn\x22><span>' + _0x58cb11[_0x25c6('0x1f5')] + _0x25c6('0x1d1') + _0x58cb11[_0x25c6('0x181')] + _0x25c6('0xe7') + _0x58cb11['buyRedeemCode'] + _0x25c6('0x1d3') + _0x5d3169 + _0x25c6('0x1ba') + _0x41215d + _0x25c6('0x152') + _0x58cb11[_0x25c6('0x15f')] + _0x25c6('0x107') + _0x58cb11[_0x25c6('0xb9')] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Daily\x20Drops</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22Daily1\x22>\x20$1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22Daily2\x22>\x20$2\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22Daily3\x22>\x20$3\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22DailyOther\x22>\x20Others\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22HighRollers\x22\x20disabled>\x20High\x20Rollers\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22WeeklyStream\x22\x20disabled>\x20Weekly\x20Stream\x20Drops\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22PlaySmarter\x22>\x20Play\x20Smarter\x20Drops\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20value=\x22OtherDrops\x22>\x20Other\x20Drops\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22vault-desposit\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22color:#e79e00;font-weight:bold;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22>\x20' + _0x58cb11[_0x25c6('0x4')] + _0x25c6('0x180') + _0x58cb11[_0x25c6('0x4a')] + _0x25c6('0x6');
                        _0x4b4b31(_0x25c6('0x1e4'))[_0x25c6('0xbc')](_0x4789fe);
                        _0x4b4b31('#drop-status')[_0x25c6('0x1f')](async function() {
                            _0x4b4b31('#autoDropwrap')[_0x25c6('0x18e')]();
                        });
                        _0x4b4b31('#autoDropwrap\x20.setting-btn')[_0x25c6('0x1f')](function() {
                            _0x4b4b31(_0x25c6('0xa'))['toggle']();
                        });
                        _0x4b4b31('#autoDropwrap\x20.user-set-wrap\x20.close')[_0x25c6('0x1f')](function() {
                            _0x4b4b31(_0x25c6('0xa'))['hide']();
                        });
                        _0x4b4b31(_0x25c6('0x11a'))[_0x25c6('0x1bd')](function(_0x1c7c98) {
                            let _0x259d2d = _0x4b4b31(this)[_0x25c6('0x8b')]();
                            let _0x4d4fc4 = _0x4b4b31(this)[_0x25c6('0x38')](_0x25c6('0x120'));
                            const _0x30fe67 = GM_getValue(_0x177fd9);
                            if (_0x30fe67) {
                                const _0x2ac11e = _0x30fe67[_0x25c6('0x109')];
                                if (_0x4d4fc4 && !_0x2ac11e['includes'](_0x259d2d)) {
                                    _0x2ac11e['push'](_0x259d2d);
                                    console[_0x25c6('0x191')]('正选', _0x2ac11e);
                                }
                                if (!_0x4d4fc4 && _0x2ac11e[_0x25c6('0xb6')](_0x259d2d)) {
                                    _0x2ac11e[_0x25c6('0x45')](_0x2ac11e[_0x25c6('0x35')](_0x259d2d), 0x1);
                                    console[_0x25c6('0x191')]('反选', _0x2ac11e);
                                }
                                _0x30fe67[_0x25c6('0x109')] = _0x2ac11e;
                                _0x519476 = _0x30fe67;
                                GM_setValue(_0x177fd9, _0x519476);
                            }
                        });
                        _0x4b4b31(_0x25c6('0x183'))[_0x25c6('0x1bd')](function(_0x352adb) {
                            let _0x4cc26f = _0x4b4b31(this)[_0x25c6('0x38')](_0x25c6('0x120'));
                            _0x519476[_0x25c6('0x133')] = _0x4cc26f;
                            GM_setValue(_0x177fd9, _0x519476);
                        });
                        _0x4b4b31(_0x25c6('0x1cd'))[_0x25c6('0x1bd')](function(_0x5b3aeb) {
                            let _0x1e2054 = _0x4b4b31(this)[_0x25c6('0x8b')]();
                            _0x519476['currency'] = _0x1e2054;
                            _0x4abb89 = _0x1e2054;
                            GM_setValue(_0x177fd9, _0x519476);
                            _0x4b4207(_0x58cb11['theCurrencyToGet'][0x2] + '\x20' + _0x4abb89[_0x25c6('0xac')]());
                        });
                    }
                    function _0x1024d6(_0x2bdc6d, _0x16c8f8, _0x2c36a1, _0x41f03e) {
                        const _0x1e784a = _0x2c36a1 + _0x25c6('0xb');
                        const _0x425cbb = _0x2c36a1 + '/api/checkCodeAmountV2';
                        const _0x40e8af = _0x2bdc6d + _0x25c6('0x85');
                        function _0xb235c6(_0x1279de) {
                            return new Promise( (_0x30fe12, _0x3ad103) => {
                                const _0x486590 = {
                                    'method': _0x25c6('0x127'),
                                    'headers': {},
                                    ..._0x1279de
                                };
                                if (_0x486590[_0x25c6('0x93')] && typeof _0x486590[_0x25c6('0x93')] !== _0x25c6('0xce')) {
                                    _0x486590[_0x25c6('0x93')] = JSON[_0x25c6('0xdf')](_0x486590['data']);
                                }
                                GM_xmlhttpRequest({
                                    ..._0x486590,
                                    'onload': function(_0x23a941) {
                                        _0x30fe12(_0x23a941);
                                    },
                                    'onerror': function(_0x2ec436) {
                                        _0x3ad103(_0x2ec436);
                                    },
                                    'ontimeout': function() {
                                        _0x3ad103(new Error(_0x25c6('0x124')));
                                    }
                                });
                            }
                            );
                        }
                        return {
                            'FC_login'(_0x44d815) {
                                return _0xb235c6({
                                    'method': _0x25c6('0x127'),
                                    'url': _0x1e784a,
                                    'data': _0x44d815,
                                    'headers': {
                                        'Content-Type': _0x25c6('0x17b'),
                                        'X-Language': _0x41f03e
                                    }
                                });
                            },
                            'checkCode'(_0x3eb29f) {
                                const _0x3391b0 = {
                                    'query': _0x25c6('0x1ac'),
                                    'variables': {
                                        'code': _0x3eb29f,
                                        'couponType': _0x25c6('0x100')
                                    }
                                };
                                const _0x19cff0 = {
                                    'Content-Type': _0x25c6('0x17b'),
                                    'x-access-token': _0x16c8f8,
                                    'x-operation-name': _0x25c6('0x1bc'),
                                    'x-operation-type': _0x25c6('0x1d')
                                };
                                return fetch(_0x40e8af, {
                                    'method': 'POST',
                                    'headers': _0x19cff0,
                                    'body': JSON['stringify'](_0x3391b0)
                                });
                            },
                            'claimCode'(_0x4d39d8, _0x31f147, _0x2e4bdd) {
                                const _0x4d3a45 = {
                                    'operationName': _0x25c6('0x12c'),
                                    'query': 'mutation\x20ClaimConditionBonusCode($code:\x20String!,\x20$currency:\x20CurrencyEnum!,\x20$turnstileToken:\x20String!)\x20{\x0a\x20\x20claimConditionBonusCode(\x0a\x20\x20\x20\x20code:\x20$code\x0a\x20\x20\x20\x20currency:\x20$currency\x0a\x20\x20\x20\x20turnstileToken:\x20$turnstileToken\x0a\x20\x20)\x20{\x0a\x20\x20\x20\x20bonusCode\x20{\x0a\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20code\x0a\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20amount\x0a\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20user\x20{\x0a\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20balances\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20available\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20__typename\x0a\x20\x20}\x0a}\x0a',
                                    'variables': {
                                        'code': _0x4d39d8,
                                        'currency': _0x31f147,
                                        'turnstileToken': _0x2e4bdd
                                    }
                                };
                                const _0x264f6d = {
                                    'Content-Type': _0x25c6('0x17b'),
                                    'x-access-token': _0x16c8f8,
                                    'x-operation-name': _0x25c6('0x12c'),
                                    'x-operation-type': _0x25c6('0x1d')
                                };
                                return fetch(_0x40e8af, {
                                    'method': 'POST',
                                    'headers': _0x264f6d,
                                    'body': JSON[_0x25c6('0xdf')](_0x4d3a45)
                                });
                            },
                            'getStakeUser'() {
                                const _0x58e043 = {
                                    'query': 'query\x20UserMeta($name:\x20String,\x20$signupCode:\x20Boolean\x20=\x20false)\x20{\x0a\x20\x20user(name:\x20$name)\x20{\x0a\x20\x20\x20\x20id\x0a\x20\x20\x20\x20name\x0a\x20\x20\x20\x20isMuted\x0a\x20\x20\x20\x20isRainproof\x0a\x20\x20\x20\x20isBanned\x0a\x20\x20\x20\x20createdAt\x0a\x20\x20\x20\x20campaignSet\x0a\x20\x20\x20\x20selfExclude\x20{\x0a\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20status\x0a\x20\x20\x20\x20\x20\x20active\x0a\x20\x20\x20\x20\x20\x20createdAt\x0a\x20\x20\x20\x20\x20\x20expireAt\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20signupCode\x20@include(if:\x20$signupCode)\x20{\x0a\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20code\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20code\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a}\x0a',
                                    'variables': {}
                                };
                                const _0x3f5047 = {
                                    'Content-Type': _0x25c6('0x17b'),
                                    'x-access-token': _0x16c8f8
                                };
                                return fetch(_0x40e8af, {
                                    'method': 'POST',
                                    'headers': _0x3f5047,
                                    'body': JSON[_0x25c6('0xdf')](_0x58e043)
                                });
                            },
                            'getConversionRate'() {
                                const _0x53d37d = {
                                    'query': 'query\x20CurrencyNewConversionRate($displayCurrencies:\x20[FiatCurrencyEnum!]!)\x20{\x0a\x20\x20info\x20{\x0a\x20\x20\x20\x20currencies\x20{\x0a\x20\x20\x20\x20\x20\x20name\x0a\x20\x20\x20\x20\x20\x20values(displayCurrencies:\x20$displayCurrencies)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20\x20\x20\x20\x20rate\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a}',
                                    'variables': {
                                        'displayCurrencies': [_0x25c6('0x47'), _0x25c6('0x117'), _0x25c6('0xb2'), _0x25c6('0x17f'), 'cad', _0x25c6('0x1e3'), 'cny', _0x25c6('0x7c'), _0x25c6('0x1e2'), _0x25c6('0x83'), _0x25c6('0x15e'), 'kes', 'krw', _0x25c6('0x1e'), 'ngn', _0x25c6('0x199'), 'php', _0x25c6('0x36'), 'rub', _0x25c6('0x1d6'), _0x25c6('0x5e')]
                                    }
                                };
                                const _0x497752 = {
                                    'Content-Type': _0x25c6('0x17b'),
                                    'x-access-token': _0x16c8f8,
                                    'x-operation-name': _0x25c6('0x1f0'),
                                    'x-operation-type': _0x25c6('0x1d')
                                };
                                return fetch(_0x40e8af, {
                                    'method': 'POST',
                                    'headers': _0x497752,
                                    'body': JSON[_0x25c6('0xdf')](_0x53d37d)
                                });
                            },
                            'createVaultDeposit'(_0x455a2a, _0x314354) {
                                const _0x1d4c82 = {
                                    'query': _0x25c6('0x84'),
                                    'variables': {
                                        'currency': _0x455a2a,
                                        'amount': _0x314354
                                    }
                                };
                                const _0x568e3e = {
                                    'Content-Type': 'application/json',
                                    'x-access-token': _0x16c8f8,
                                    'x-operation-name': 'CreateVaultDeposit',
                                    'x-operation-type': _0x25c6('0x1d')
                                };
                                return fetch(_0x40e8af, {
                                    'method': _0x25c6('0x127'),
                                    'headers': _0x568e3e,
                                    'body': JSON[_0x25c6('0xdf')](_0x1d4c82)
                                });
                            }
                        };
                    }
                });
            }());

        }, seed)
    }
    //# sourceURL=chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/userscript.html?name=Auto-claim-drop.user.js&id=9b6c9413-b239-4b85-931a-714143a7f332
}
