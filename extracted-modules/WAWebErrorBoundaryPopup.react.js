__d("WAWebErrorBoundaryPopup.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "gkx",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function D1(e) {
        const t = o("react-compiler-runtime").c(7);
        const n = e.boundaryName;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                surface: "unknown",
                viewName: "error-boundary"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Reload");
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Unexpected error occurred.");
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== n) {
            u = !r("gkx")("26258") && <p>{s._("Boundary name: {boundaryName}.", [
                s._param("boundaryName", n)
            ])}</p>;
            t[3] = n;
            t[4] = u;
        } else {
            u = t[4];
        }
        let d;
        if (t[5] !== u) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            d = <Component tsNavigationData={a} cover okText={i} onOK={p}>{l}{u}</Component>;
            t[5] = u;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    const m = function({ boundaryName: e }) {
        return <D1 boundaryName={e}/>;
    };
    function p() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] handleReload"
        ])));
        window.location.reload();
    }
    l.errorBoundaryPopupFallback = m;
}, 226);