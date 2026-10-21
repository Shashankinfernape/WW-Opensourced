__d("WAWebSetArchiveChatAction", [
    "fbt",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatArchiveBridge",
    "WAWebChatGetters",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e, archive, n) {
        return f({
            archive,
            chat: o("WAWebStateUtils").unproxy(e),
            showToast: n
        });
    }
    function p(chat, archive) {
        if (o("WAWebChatGetters").getIsNewsletter(chat)) {
            if (archive) {
                return {
                    inProgress: s._("Archiving channel"),
                    done: s._("Channel archived"),
                    failed: s._("Couldn't archive channel.")
                };
            }
            return {
                inProgress: s._("Unarchiving channel"),
                done: s._("Channel unarchived"),
                failed: s._("Couldn't unarchive channel.")
            };
        }
        return null;
    }
    function _(archive) {
        if (archive) {
            return s._("Couldn't archive chat.");
        }
        return s._("Couldn't unarchive chat.");
    }
    function f({ archive, chat, showToast, toastId = o("WAWebActionToast.react").genId() }) {
        if (chat.archive === archive) {
            return (u || (u = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const chat_promises = chat.promises;
        if (chat_promises.setArchive) {
            return chat_promises.setArchive.promise;
        }
        const C = chat.getLastMsgKeyForAction();
        const b = new AbortController;
        const b_signal = b.signal;
        const S = o("WAWebChatArchiveBridge").sendConversationArchive(chat.id, archive, C);
        const R = p(chat, archive);
        const L = R?.failed ?? _(archive);
        const E = new (o("WAWebActionToast.react")).ActionType(R?.inProgress ?? (archive ? s._("Archiving chat") : s._("Unarchiving chat")));
        const k = S.then((e)=>{
            if (b_signal.aborted) {
                throw new (o("WAAbortError")).AbortError;
            }
            let t;
            if (e.status === 200) {
                t = archive ? s._("Chat archived") : s._("Chat unarchived");
                return new (o("WAWebActionToast.react")).ActionType(R?.done ?? t, {
                    actionText: s._("Undo"),
                    actionHandler: function() {
                        return f({
                            archive: !archive,
                            chat,
                            showToast,
                            toastId
                        });
                    }
                });
            } else if (e.status >= 400) {
                return new (o("WAWebActionToast.react")).ActionType(L);
            }
        }).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:chat:setArchive dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(L, {
                actionText: s._("Try again."),
                actionHandler: function() {
                    return f({
                        archive,
                        chat,
                        showToast,
                        toastId
                    });
                }
            });
        });
        if (showToast) {
            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
                id: toastId,
                initialAction: E,
                pendingAction: k
            }));
        }
        const I = S.then((e)=>{
            if (e.status === 200) {
                chat.archive = archive;
                if (archive) {
                    chat.pin = undefined;
                }
            }
        }).finally(()=>{
            delete chat_promises.setArchive;
        });
        const T = {
            promise: I,
            abortController: b,
            archive
        };
        chat_promises.setArchive = T;
        return I;
    }
    l.setArchive = m;
}, 226);