__d("useWAWebGroupDiscardGuard", [
    "fbt",
    "Promise",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useCallback = u.useCallback;
    const m = 2;
    function p(t) {
        const r = o("react-compiler-runtime").c(2);
        let a;
        if (r[0] !== t) {
            a = (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (t < m) {
                        return true;
                    }
                    return new (e || (e = n("Promise")))(_);
                });
                return function() {
                    return r.apply(this, arguments);
                };
            })();
            r[0] = t;
            r[1] = a;
        } else {
            a = r[1];
        }
        return a;
    }
    function _(e) {
        const t = function() {
            o("WAWebModalManager").ModalManager.off("close_alert", t);
            e(false);
        };
        const n = (r)=>{
            o("WAWebModalManager").ModalManager.off("close_alert", t);
            o("WAWebModalManager").ModalManager.closeAlert();
            e(r);
        };
        o("WAWebModalManager").ModalManager.on("close_alert", t);
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.openAlert(<Component title={s._("Discard group?")} okText={s._("Discard")} onOK={function() {
            return n(true);
        }} cancelText={s._("Cancel")} onCancel={function() {
            return n(false);
        }} onOverlayClick={function() {
            return n(false);
        }}>{s._("Your changes won't be saved if you leave before creating the group.")}</Component>);
    }
    function f(e, t) {
        const n = o("react-compiler-runtime").c(3);
        let r;
        if (n[0] !== t || n[1] !== e) {
            r = function(r) {
                if (e < m) {
                    r?.();
                    return;
                }
                let n = false;
                const a = (t)=>{
                    if (!n) {
                        n = true;
                        o("WAWebModalManager").ModalManager.off("close_support", i);
                        if (t != null) {
                            t();
                        }
                    }
                };
                var i = function() {
                    return a(t?.onStay);
                };
                const l = function() {
                    a(t?.onStay);
                    o("WAWebModalManager").ModalManager.closeSupportModal();
                };
                t?.onShown();
                o("WAWebModalManager").ModalManager.on("close_support", i);
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.openSupportModal(<Component tsNavigationData={{
                    surface: "unknown",
                    viewName: "group-discard-guard"
                }} title={s._("Discard change?")} onOK={function() {
                    a(t?.onDiscard);
                    o("WAWebModalManager").ModalManager.closeSupportModal();
                    r?.();
                }} okText={s._("Discard")} onCancel={l} cancelText={s._("Cancel")} onOverlayClick={l}>{s._("Your changes won't be saved if you leave before adding members.")}</Component>);
            };
            n[0] = t;
            n[1] = e;
            n[2] = r;
        } else {
            r = n[2];
        }
        return r;
    }
    l.useGroupCreationDiscardGuard = p;
    l.useAddMemberDiscardGuard = f;
}, 226);