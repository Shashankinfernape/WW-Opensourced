__d("WAWebVoipCallsTabScheduleCallModal.react", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebEventsCreateEventModalFlowLoadable",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "fbs",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useMemo = u.useMemo;
    function M1(t) {
        const n = o("react-compiler-runtime").c(20);
        const t_targetChat = t.targetChat;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = p();
            n[0] = i;
        } else {
            i = n[0];
        }
        const eventStartTime = i;
        let u;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = _(eventStartTime);
            n[1] = u;
        } else {
            u = n[1];
        }
        const eventEndTime = u;
        let m;
        let isScheduledCall;
        let callLinkRequired;
        let preselectedChat;
        let eventName;
        let C;
        if (n[2] !== t_targetChat) {
            C = Symbol.for("react.early_return_sentinel");
            e: {
                const b = o("WAWebContactCollection").ContactCollection.getMeContact();
                if (b == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "schedule call modal: me contact is null"
                    ]))).sendLogs("schedule-call-me-null");
                    C = null;
                    break e;
                }
                m = o("WAWebEventsCreateEventModalFlowLoadable").EventsCreateEventModalFlowLoadable;
                isScheduledCall = true;
                callLinkRequired = true;
                preselectedChat = t_targetChat ?? null;
                eventName = r("fbs")._("{user-full-name}’s call", [
                    r("fbs")._param("user-full-name", o("WAWebFrontendContactGetters").getDisplayName(b))
                ]).toString();
            }
            n[2] = t_targetChat;
            n[3] = m;
            n[4] = isScheduledCall;
            n[5] = callLinkRequired;
            n[6] = preselectedChat;
            n[7] = eventName;
            n[8] = C;
        } else {
            m = n[3];
            isScheduledCall = n[4];
            callLinkRequired = n[5];
            preselectedChat = n[6];
            eventName = n[7];
            C = n[8];
        }
        if (C !== Symbol.for("react.early_return_sentinel")) {
            return C;
        }
        let prefilledData;
        if (n[9] !== eventName) {
            prefilledData = {
                eventName,
                eventCallType: "video",
                eventStartTime,
                eventEndTime
            };
            n[9] = eventName;
            n[10] = prefilledData;
        } else {
            prefilledData = n[10];
        }
        let nameInputTitle;
        let nameInputPlaceholder;
        let L;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("Schedule call");
            nameInputTitle = s._("Call name");
            nameInputPlaceholder = s._("Call name");
            n[11] = nameInputTitle;
            n[12] = nameInputPlaceholder;
            n[13] = L;
        } else {
            nameInputTitle = n[11];
            nameInputPlaceholder = n[12];
            L = n[13];
        }
        let E;
        if (n[14] !== m || n[15] !== isScheduledCall || n[16] !== callLinkRequired || n[17] !== preselectedChat || n[18] !== prefilledData) {
            E = c.jsx(m, {
                isScheduledCall,
                callLinkRequired,
                preselectedChat,
                prefilledData,
                title: L,
                nameInputTitle,
                nameInputPlaceholder,
                showLocationField: false,
                showRemoveEndTimeButton: true,
                onSend: o("WAWebDrawerManager").closeDrawerLeft
            });
            n[14] = m;
            n[15] = isScheduledCall;
            n[16] = callLinkRequired;
            n[17] = preselectedChat;
            n[18] = prefilledData;
            n[19] = E;
        } else {
            E = n[19];
        }
        return E;
    }
    function p() {
        const e = o("WATimeUtils").unixTime();
        const t = 1800;
        const n = Math.ceil(e / t) * t;
        return o("WATimeUtils").castToUnixTime(n);
    }
    function _(eventStartTime) {
        return o("WATimeUtils").futureUnixTime(30 * o("WATimeUtils").MINUTE_SECONDS, eventStartTime);
    }
    function FComponent(targetChat) {
        o("WAWebModalManager").ModalManager.open(<M1 targetChat={targetChat}/>);
    }
    l.WAWebVoipCallsTabScheduleCallModal = M1;
    l.handleScheduleCallForChat = FComponent;
}, 226);