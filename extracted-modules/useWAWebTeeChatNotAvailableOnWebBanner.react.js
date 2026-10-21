__d("useWAWebTeeChatNotAvailableOnWebBanner.react", [
    "WAWebBotGroupGatingUtils",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebNux",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebNux"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useState } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(9);
        const n = useState(false);
        const a = n[0];
        const i = n[1];
        const l = r("useWAWebNux")(o("WAWebNux").NUX.TEE_CHAT_NOT_AVAILABLE_ON_WEB);
        const s = l[0];
        const u = l[2];
        let d;
        if (t[0] !== e) {
            d = function(n) {
                if (n.id.equals(e.id) && o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupTee(e)) {
                    i(true);
                }
            };
            t[0] = e;
            t[1] = d;
        } else {
            d = t[1];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_message_sent", d);
        let p;
        if (t[2] !== e || t[3] !== s || t[4] !== a) {
            p = a && s && o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupTee(e);
            t[2] = e;
            t[3] = s;
            t[4] = a;
            t[5] = p;
        } else {
            p = t[5];
        }
        const _ = p;
        let f;
        if (t[6] !== u || t[7] !== _) {
            f = [
                _,
                u
            ];
            t[6] = u;
            t[7] = _;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    l.default = d;
}, 98);