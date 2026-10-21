__d("useWAWebCappingWarningBanner.react", [
    "WAWebABPropsCache",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWorkerSafeBackendApi",
    "react",
    "react-compiler-runtime",
    "useWAWebCappingData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useState } = s;
    function useM(e) {
        const t = o("react-compiler-runtime").c(14);
        const n = useState(false);
        const a = n[0];
        const i = n[1];
        const l = r("useWAWebCappingData")();
        let s;
        if (t[0] !== e) {
            s = !o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isCappingKillSwitched() && !o("WAWebIndividualNewChatMessageCappingLimitUtils").canSendMsgWhileCapped({
                chat: e,
                contact: e.contact
            });
            t[0] = e;
            t[1] = s;
        } else {
            s = t[1];
        }
        const u = s;
        let m;
        let p;
        if (t[2] !== u) {
            m = function() {
                if (u) {
                    if (o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isIndividualNewChatMessageCappingEnabled()) {
                        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("restoreNewMessageCappingData");
                    } else if (o("WAWebABPropsCache").isABPropConfigsReady() && o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() != null) {
                        o("WAWebIndividualNewChatMessageCappingLimitUtils").clearCappingData();
                    }
                }
            };
            p = [
                u
            ];
            t[2] = u;
            t[3] = m;
            t[4] = p;
        } else {
            m = t[3];
            p = t[4];
        }
        useEffect(m, p);
        const _ = l != null && l.dismissed_warning_level === String(l.capping_status) && l.dismissed_cycle_start_timestamp === l.cycle_start_timestamp;
        let f;
        if (t[5] !== u || t[6] !== a || t[7] !== _) {
            f = u && !a && !_ && o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserWarned();
            t[5] = u;
            t[6] = a;
            t[7] = _;
            t[8] = f;
        } else {
            f = t[8];
        }
        const g = f;
        let h;
        if (t[9] !== l) {
            h = function() {
                i(true);
                if (l != null) {
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebIndividualNewChatMessageCappingLimitUtils").NEW_CHAT_MESSAGE_CAPPING_IDB_KEY, babelHelpers.extends({}, l, {
                        dismissed_warning_level: String(l.capping_status),
                        dismissed_cycle_start_timestamp: l.cycle_start_timestamp
                    }));
                }
            };
            t[9] = l;
            t[10] = h;
        } else {
            h = t[10];
        }
        const y = h;
        let C;
        if (t[11] !== y || t[12] !== g) {
            C = [
                g,
                y
            ];
            t[11] = y;
            t[12] = g;
            t[13] = C;
        } else {
            C = t[13];
        }
        return C;
    }
    l.default = useM;
}, 98);