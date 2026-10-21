__d("WAWebSendNotSpamAction", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebSendNotSpamJob",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e, t) {
        return p(o("WAWebStateUtils").unproxy(e), t);
    }
    function p(t, a = false, i = o("WAWebActionToast.react").genId()) {
        const { notSpam, promises } = t;
        if (notSpam) {
            return (u || (u = n("Promise"))).resolve();
        }
        if (promises.sendNotSpam) {
            return promises.sendNotSpam;
        }
        const m = promises.sendNotSpam = r("WAWebSendNotSpamJob")(t);
        if (a) {
            const _ = new (o("WAWebActionToast.react")).ActionType(s._("Marking as not spam"));
            const f = m.then(()=>new (o("WAWebActionToast.react")).ActionType(s._("Marked as not spam"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function() {
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mark as not spam"));
            })).catch((n)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendNotSpam dropped"
                ])));
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mark as not spam"), {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return p(t, a, i);
                    }
                });
            });
            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
                id: i,
                initialAction: _,
                pendingAction: f
            }));
        }
        return m.then(()=>{
            t.set({
                notSpam: true
            });
            if (o("WAWebChatGetters").getIsGroup(t)) {
                t.groupMetadata?.set({
                    trusted: true
                });
            }
        }).finally(()=>{
            t.isTrusted();
            promises.sendNotSpam = null;
        });
    }
    l.default = m;
}, 226);