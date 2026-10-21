__d("useWAWebCappingSubscriptionToast.react", [
    "fbt",
    "WAWebCmd",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebNux",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsTypes",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useRef, useState } = c;
    function useComponent(e) {
        const a = o("react-compiler-runtime").c(13);
        const i = useState(f);
        const l = i[0];
        const c = i[1];
        let _;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function() {
                c(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData());
            };
            a[0] = _;
        } else {
            _ = a[0];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "new_chat_message_capping_state_change", _);
        const g = r("useWAWebNux")(o("WAWebNux").NUX.NCT_CAPPING_SUBSCRIPTION_TOAST);
        const h = g[0];
        const y = g[1];
        let C;
        if (a[1] !== l?.subscription_status?.status || a[2] !== e || a[3] !== h) {
            C = l?.subscription_status?.status === o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionStatusType.ACTIVE && h && !o("WAWebIndividualNewChatMessageCappingLimitUtils").canSendMsgWhileCapped({
                chat: e,
                contact: e.contact
            }) && o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isIndividualNewChatMessageCappingEnabled();
            a[1] = l?.subscription_status?.status;
            a[2] = e;
            a[3] = h;
            a[4] = C;
        } else {
            C = a[4];
        }
        const S = C;
        let R;
        if (a[5] !== e.id) {
            R = e.id.toString();
            a[5] = e.id;
            a[6] = R;
        } else {
            R = a[6];
        }
        const L = R;
        const E = l?.total_quota ?? 0;
        const kRef = useRef(false);
        let I;
        let T;
        if (a[7] !== L || a[8] !== E || a[9] !== S || a[10] !== y) {
            I = function() {
                if (!(!S || kRef.current)) {
                    kRef.current = true;
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        id: `capping-subscription-toast-${L}`,
                        msg: s._("_j{\"*\":\"Your Meta One subscription increased your monthly limit to {number} new chats\",\"_1\":\"Your Meta One subscription increased your monthly limit to 1 new chat\"}", [
                            s._plural(E, "number")
                        ])
                    }));
                    y();
                }
            };
            T = [
                L,
                E,
                S,
                y
            ];
            a[7] = L;
            a[8] = E;
            a[9] = S;
            a[10] = y;
            a[11] = I;
            a[12] = T;
        } else {
            I = a[11];
            T = a[12];
        }
        useEffect(I, T);
    }
    function f() {
        return o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData();
    }
    l.default = useComponent;
}, 226);