__d("WAWebSupportAIStartChatNux.react", [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebLoggerDebugInfo",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebNux",
    "WAWebSendSupportRequestJob",
    "WAWebSpinner.react",
    "WAWebSupportAINux.react",
    "WAWebSupportAIStartChatErrorModalLoadable",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportChatConfirmationModal.react",
    "WAWebSupportChatStrings",
    "WAWebSupportChatUtils",
    "WAWebSupportOfflinePopUp.react",
    "WAWebWamEnumSupportAiEventType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebNux",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    const _ = 0;
    function FComponent({ entityId, onEmail, supportTag }) {
        const u = r("useWAWebUnmountSignal")();
        const d = useState(false);
        const isSending = d[0];
        const g = d[1];
        const h = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI);
        const y = h[0];
        const C = h[1];
        const BComponent = (supportAiErrorMessage, supportAiErrorCode)=>{
            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CREATE_SUPPORT_TICKET_ERROR,
                supportAiErrorCode,
                supportAiErrorMessage
            }).commit();
            const Component = o("WAWebSupportAIStartChatErrorModalLoadable").SupportAIStartChatErrorModalLoadable;
            o("WAWebModalManager").ModalManager.open(<Component onEmail={onEmail}/>);
        };
        const v = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                    supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.START_CHAT_CLICKED
                }).commit();
                if (!r("WAWebNetworkStatus").online) {
                    new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                        supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NO_INTERNET_DIALOG_SHOWN
                    }).commit();
                    o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSupportOfflinePopUp.react"), {}));
                    return;
                }
                g(true);
                const t = entityId == null ? o("WAWebSupportChatUtils").getSupportAgentChatWid() : null;
                const n = yield o("WAWebLoggerDebugInfo").getDebugInfo({
                    supportTag,
                    convertFields: true,
                    addUserAgentDetails: true,
                    entityId
                });
                n.sagaKey = "saga_v1_enabled";
                r("WAPromiseRaceAbort")(o("WAWebSendSupportRequestJob").sendSupportRequest("#chatbot", JSON.stringify(n), t?.user), u).then((n)=>{
                    if (n.message != null) {
                        if (t != null) {
                            r("WAPromiseRaceAbort")(o("WAWebSupportChatUtils").openSupportAgentChat(t, u), u).then(()=>{
                                new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                                    supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CREATE_SUPPORT_TICKET_SUCCESS
                                }).commit();
                                o("WAWebModalManager").ModalManager.close();
                            }).catch((t)=>{
                                const n = r("getErrorSafe")(t);
                                if (n.name !== o("WAAbortError").ABORT_ERROR) {
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[ias] failed to open the support agent chat"
                                    ]))).catching(n).sendLogs("ias-open-agent-chat-failed");
                                    BComponent(n.message, _);
                                    g(false);
                                }
                            });
                            return;
                        }
                        new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                            supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CREATE_SUPPORT_TICKET_SUCCESS
                        }).commit();
                        o("WAWebModalManager").ModalManager.close();
                        const a = n.groupId;
                        if (a !== undefined && a.includes("@s.whatsapp.net")) {
                            o("WAWebSupportChatUtils").openSupportChat(a);
                        } else {
                            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.TICKET_CREATION_DIALOG_SHOWN
                            }).commit();
                            o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSupportChatConfirmationModal.react"), {}));
                        }
                    } else {
                        BComponent(n.errorText, n.errorCode);
                        g(false);
                    }
                }).catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    BComponent(t.message || JSON.stringify(t), e.code);
                    g(false);
                });
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const S = r("useWAWebDebouncedCallback")(function() {
            return v();
        }, 100);
        useEffect(function() {
            if (!y) {
                S();
            }
        }, []);
        if (y) {
            const Component = r("WAWebSupportAINux.react");
            return <Component isSending={isSending} onOK={S} canCancel okText={o("WAWebSupportChatStrings").SupportChatStartButtonText()}/>;
        }
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 title={s._("Starting chat")} onCancel={o("WAWebModalManager").closeModalManager} cancelText={s._("Cancel")} tsNavigationData={{
            surface: "unknown",
            viewName: "support-chat-nux"
        }}><Component justify="center" align="center">{c.jsx(o("WAWebSpinner.react").Spinner, {
            stroke: 6,
            size: 24
        })}</Component></Component_1>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.default = FComponent;
}, 226);