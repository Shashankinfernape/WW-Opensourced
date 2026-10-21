__d("WAWebNewChatMsgCappingSendFailIcon.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFailIcon.react",
    "WAWebIndividualNewChatMessageCappedModalLoadable.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebModalManager",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_displayType = e.displayType;
        o("WAWebIndividualNewChatMessageCappingLogEvents").logView(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD_CAPPED_COMPOSE_BLOCKER, JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {}));
        const a = d;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD_CAPPED_COMPOSE_BLOCKER, "learn_more");
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager} cancelText={s._("Learn more")} onCancel={a}>{s._("Your message couldn't be sent because you've reached your monthly limit of new chats.")}</Component>, {
                    transition: "modal-flow"
                });
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = i;
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Your message couldn't be sent because you've reached your monthly limit of new chats. Click to learn more.");
            t[1] = c;
        } else {
            c = t[1];
        }
        const m = c;
        let p;
        if (t[2] !== e_displayType) {
            const Component = r("WAWebFailIcon.react");
            p = <Component displayType={e_displayType} tooltip={m} ariaLabel={m} onClick={l}/>;
            t[2] = e_displayType;
            t[3] = p;
        } else {
            p = t[3];
        }
        return p;
    }
    function d() {
        o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebIndividualNewChatMessageCappedModalLoadable.react").IndividualNewChatMessageCappedModalLoadable, {}));
    }
    l.default = c;
}, 226);