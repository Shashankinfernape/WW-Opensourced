__d("WAWebLoadingNewsletterPreviewModal.react", [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebEmptyState.react",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "err",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useState } = m;
    function f({ chatEntryPoint, identifier, onFailure, onSuccess, qpl }) {
        const f = useState(true);
        const g = f[0];
        const h = f[1];
        const y = useState(null);
        const C = y[0];
        const b = y[1];
        const v = useState(null);
        const S = v[0];
        const R = v[1];
        useEffect(function() {
            o("WAWebLoadNewsletterPreviewChatAction").loadNewsletterPreviewChat(identifier, qpl).then((e)=>{
                if (e == null) {
                    throw r("err")("Chat not found");
                }
                b(e);
            }).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[LoadingNewsletterPreviewModal] Failed to load preview for ",
                    ""
                ])), identifier);
                R(t);
            }).finally(()=>{
                h(false);
            });
        }, []);
        function L() {
            return E.apply(this, arguments);
        }
        function E() {
            E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
                o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                    msg: e,
                    id: k
                }));
            });
            return E.apply(this, arguments);
        }
        if (g) {
            const Component = o("WAWebModal.react").Modal;
            return <Component>{d.jsx(o("WAWebEmptyState.react").Loading, {
                description: "Loading Newsletter Preview Modal"
            })}</Component>;
        }
        if (C != null) {
            o("WAWebModalManager").ModalManager.close();
            onSuccess(C);
            return;
        }
        o("WAWebModalManager").ModalManager.close();
        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[openNewsletterPreviewChat] Failed to load preview for ",
            ""
        ])), identifier);
        onFailure?.();
        var k = o("WAWebActionToast.react").genId();
        if (S?.status === 405) {
            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                msg: s._("This channel is closed to new followers. Try again later."),
                id: k
            }));
        } else if (S?.status === 451) {
            L();
        } else {
            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Could not load channel"),
                id: k
            }));
        }
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = f;
}, 226);