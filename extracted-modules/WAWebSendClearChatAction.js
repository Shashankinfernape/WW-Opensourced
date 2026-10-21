__d("WAWebSendClearChatAction", [
    "fbt",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseDelays",
    "WAWebActionListenerHelpers",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatConstants",
    "WAWebClearChatUtils",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebStateUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e, t) {
        return p(o("WAWebStateUtils").unproxy(e), t);
    }
    function p(t, a) {
        const i = new AbortController;
        const i_signal = i.signal;
        const c = new (o("WAWebActionToast.react")).ActionType(s._("Clearing chat"), {
            actionText: s._("Undo"),
            actionHandler: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    i.abort();
                    o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
                        initialAction: new (o("WAWebActionToast.react")).ActionType(s._("Chat clear canceled")),
                        pendingAction: (u || (u = n("Promise"))).resolve(null)
                    }));
                });
                function t() {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        });
        const m = o("WAPromiseDelays").delayMs(o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION).then(()=>{
            if (i_signal.aborted) {
                throw new (o("WAAbortError")).AbortError;
            }
            const e = o("WAWebClearChatUtils").initClearChat(t, a);
            return e.then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                t.endOfHistoryTransferType = o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
                yield o("WAWebClearChatUtils").finalizeClearChat(t, e);
            }));
        }).then(()=>new (o("WAWebActionToast.react")).ActionType(s._("Chat cleared"))).catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull)).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            if (e.status >= 400) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't clear chat."));
            }
        })).catch((r)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:chat:sendClear dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't clear chat."), {
                actionText: s._("Try again."),
                actionHandler: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        yield p(t, a);
                    });
                    function r() {
                        return e.apply(this, arguments);
                    }
                    return r;
                })()
            });
        });
        o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: c,
            pendingAction: m
        }));
        return m.then(r("WAWebNoop"));
    }
    l.sendClear = m;
}, 226);