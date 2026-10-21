__d("WAWebContactFormWrapper.react", [
    "WAWebABPropsSaga",
    "WAWebContactUsModalLoadable",
    "WAWebEnvironment",
    "WAWebModalManager",
    "WAWebSendLogsPopupLoadable",
    "WAWebSupportAIStartChatNuxLoadable",
    "WAWebSupportAiSessionWamEvent",
    "WAWebWamEnumSupportAiEventType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function c(e) {
        const t = o("react-compiler-runtime").c(14);
        const { entityId, onCancel, onSend, supportTag } = e;
        const u = r("WAWebEnvironment").isWindows ? "win-hybrid" : supportTag;
        let c;
        if (t[0] !== entityId || t[1] !== onCancel || t[2] !== onSend || t[3] !== u) {
            c = function(t) {
                const Component = o("WAWebSendLogsPopupLoadable").SendLogsPopupLoadable;
                o("WAWebModalManager").ModalManager.open(<Component onCancel={onCancel} onSend={onSend} description={t?.description} supportTag={u} entityId={entityId}/>);
            };
            t[0] = entityId;
            t[1] = onCancel;
            t[2] = onSend;
            t[3] = u;
            t[4] = c;
        } else {
            c = t[4];
        }
        const d = c;
        if (o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_SHOWN
            }).commit();
            let m;
            if (t[5] !== entityId || t[6] !== d || t[7] !== u) {
                const Component = o("WAWebSupportAIStartChatNuxLoadable").SupportAIStartChatNuxLoadable;
                m = <Component onEmail={d} supportTag={u} entityId={entityId}/>;
                t[5] = entityId;
                t[6] = d;
                t[7] = u;
                t[8] = m;
            } else {
                m = t[8];
            }
            return m;
        }
        let p;
        if (t[9] !== entityId || t[10] !== onCancel || t[11] !== d || t[12] !== u) {
            const Component = o("WAWebContactUsModalLoadable").ContactUsModalLoadable;
            p = <Component onEmail={d} onCancel={onCancel} onFailure={d} supportTag={u} entityId={entityId}/>;
            t[9] = entityId;
            t[10] = onCancel;
            t[11] = d;
            t[12] = u;
            t[13] = p;
        } else {
            p = t[13];
        }
        return p;
    }
    l.default = c;
}, 98);