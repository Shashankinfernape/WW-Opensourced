__d("WAWebExitGroupAction", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebBoolFunc",
    "WAWebChatGetters",
    "WAWebGroupExitJob",
    "WAWebInvalidateEventsAction",
    "WAWebMiscErrors",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebSchemaChat",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "err",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    function p(e) {
        return _(o("WAWebStateUtils").unproxy(e));
    }
    function _(t) {
        const t_promises = t.promises;
        if (!o("WAWebChatGetters").getIsGroup(t)) {
            return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        if (t_promises.sendExit) {
            return t_promises.sendExit;
        }
        const a = t_promises.sendExit = o("WAWebGroupExitJob").leaveGroup(t.id).then((e)=>{
            if (e.code !== 200) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(e.code);
            }
        });
        const i = new (o("WAWebActionToast.react")).ActionType(s._("Exiting group"));
        const l = a.then(()=>new (o("WAWebActionToast.react")).ActionType(s._("Exited group"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            if (e.status >= 400) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't exit group."));
            }
        })).catch((n)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "actions:chat:sendExit dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't exit group."), {
                actionText: s._("Try again."),
                actionHandler: function() {
                    return _(t);
                }
            });
        });
        o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: i,
            pendingAction: l
        }));
        return a.then(()=>f(t)).finally(()=>{
            t_promises.sendExit = null;
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, o("WAWebBoolFunc").returnFalse));
    }
    function f(e) {
        if (!o("WAWebChatGetters").getIsGroup(e)) {
            return (c || (c = n("Promise"))).resolve(true);
        }
        const a = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const i = o("WAWebApiContact").getAlternateUserWid(a);
        e.groupMetadata?.participants.remove(a);
        if (i != null) {
            e.groupMetadata?.participants.remove(i);
        }
        return o("WAWebSchemaChat").getChatTable().merge(e.id.toString(), {
            isReadOnly: true
        }).then(()=>{
            e.isReadOnly = true;
            o("WAWebPollsInvalidateChatPollMsgsAction").invalidateChatPollMsgs(e);
            o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(e);
            return true;
        }).catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "failed to merge chat table"
            ]))).verbose().sendLogs(`failed to merge chat table when exiting group: ${String(e)}`);
            throw r("err")("failed to merge chat table");
        });
    }
    l.sendExitGroup = p;
}, 226);