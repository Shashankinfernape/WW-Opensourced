__d("WAWebChatLockUtils", [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatLockCrypto",
    "WAWebChatLockSettings",
    "WAWebChatLockWAMUtils",
    "WAWebCmd",
    "WAWebFlexBox.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = "locked-toast";
    const d = "unlocked-toast";
    let m = true;
    function p() {
        return m === false;
    }
    function _() {
        const e = o("WAWebChatLockSettings").getChatLockSettings();
        return e?.secretCode != null;
    }
    function f(e) {
        if (e.isLocked) {
            return p();
        }
        return true;
    }
    function GComponent(e) {
        m = true;
        if (e?.showToast !== false) {
            const T = r("WDSIconWdsIcChatlockOutline.react");
            o("WAWebToastManager").ToastManager.close(d);
            const Component = o("WAWebFlexBox.react").FlexRow;
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                id: c,
                msg: s._("{=m0}", [
                    s._implicitParam("=m0", <Component gap={8} align="center">{s._("{=m1} Chats are now locked and hidden", [
                        s._implicitParam("=m1", <T width={20} height={20}>{s._("")}</T>)
                    ])}</Component>)
                ])
            }));
        }
        o("WAWebCmd").Cmd.trigger("chatlock:lock");
    }
    function h() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e != null && e.isLocked) {
            o("WAWebCmd").Cmd.closeActiveChat();
        }
    }
    function y() {
        h();
        if (p()) {
            GComponent();
        }
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebChatLockSettings").getChatLockSettings();
            if (t.secretCode == null) {
                return false;
            }
            return o("WAWebChatLockCrypto").validateChatLockSecretCode(e, t.secretCode);
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const N = r("WDSIconWdsIcChatlockUnlockedOutline.react");
            if (yield C(e)) {
                const Component = o("WAWebFlexBox.react").FlexRow;
                if (t.unlockAppOnSuccess) {
                    m = false;
                    o("WAWebChatLockWAMUtils").chatLockUnlockedWAMEvent({
                        unlockEntryPoint: t.unlockEntryPoint,
                        landingSurface: t.landingSurface
                    });
                    o("WAWebToastManager").ToastManager.close(c);
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        id: d,
                        msg: s._("{=m0}", [
                            s._implicitParam("=m0", <Component gap={8} align="center">{s._("{=m1} Chats are now unlocked", [
                                s._implicitParam("=m1", <N width={20} height={20}>{s._("")}</N>)
                            ])}</Component>)
                        ])
                    }));
                    o("WAWebCmd").Cmd.trigger("chatlock:unlock");
                }
                return true;
            }
            return false;
        });
        return S.apply(this, arguments);
    }
    function R() {
        return o("WAWebChatCollection").ChatCollection.filter((e)=>e.isLocked);
    }
    function L() {
        return R().length > 0;
    }
    l.lockedChatsAreAccessible = p;
    l.hasChatlockSecretCode = _;
    l.chatIsAccessible = f;
    l.lockChats = GComponent;
    l.closeActiveChatIfLocked = h;
    l.leaveLockedChats = y;
    l.validateSecretCode = v;
    l.getLockedChats = R;
    l.shouldShowChatLockEntryPoints = L;
}, 226);