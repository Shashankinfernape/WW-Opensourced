__d("WAWebStatusContactAction", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatCollection",
    "WAWebContactStatusBridge",
    "WAWebMiscErrors",
    "WAWebTextStatusCollection",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const r = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e)?.tcToken;
            const a = {
                wid: e,
                tcToken: r
            };
            const i = yield o("WAWebContactStatusBridge").getStatus(a);
            if (i.stale === true) {
                const l = o("WAWebTextStatusCollection").TextStatusCollection.get(e);
                if (l) {
                    return {
                        id: e,
                        status: l.status
                    };
                }
            }
            const s = i.status ?? o("WAWebTextStatusCollection").getDefaultTextStatus();
            return {
                id: e,
                status: s
            };
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n, r) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, onDismiss, a = o("WAWebActionToast.react").genId(), i = false) {
            const l = t.trim();
            if (!l) {
                return (u || (u = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            const c = o("WAWebContactStatusBridge").setMyStatus(l);
            const m = new (o("WAWebActionToast.react")).ActionType(s._("Changing About…"));
            const p = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const status = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(p).status;
            const g = c.then((e)=>{
                if (e.status === 200) {
                    const t = i ? undefined : {
                        actionText: s._("Undo"),
                        actionHandler: function() {
                            return _(status, onDismiss, a, true);
                        }
                    };
                    return new (o("WAWebActionToast.react")).ActionType(s._("About changed"), t);
                } else if (e.status >= 400) {
                    return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't change About."));
                }
            }).catch((n)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:statusCollection:setMyStatus dropped"
                ])));
                throw new (o("WAWebActionToast.react")).ActionType(s._("Couldn't change About."), {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return _(t, onDismiss, a);
                    }
                });
            });
            const Component = o("WAWebActionToast.react").ActionToast;
            o("WAWebToastManager").ToastManager.open(<Component id={a} initialAction={m} pendingAction={g} onDismiss={onDismiss}/>);
            const h = yield c;
            if (h.status === 200) {
                o("WAWebTextStatusCollection").TextStatusCollection.assertGet(p).status = t;
            }
        });
        return f.apply(this, arguments);
    }
    l.getStatus = m;
    l.setMyStatus = _;
}, 226);