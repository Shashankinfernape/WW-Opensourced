__d("VultureJSDeadComponent.react", [
    "ErrorBoundary.react",
    "FBLogger",
    "bumpVultureJSDeadStub",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = "VultureJSDeadComponent was hit. This should never happen as this component is intended to be used to replace dead components, as a stub. this being hit indicates that a component may have been cleaned up in error.";
    function C8({ name }) {
        r("bumpVultureJSDeadStub")(name ?? "VultureJSDeadComponent");
        const n = name != null ? `${u} Expected component ${name}` : u;
        const o = r("FBLogger")("vulture_js").blameToModule("m#VultureJSDeadComponent.react");
        o.addToCategoryKey(name ?? "VultureJSDeadComponent");
        throw o.mustfixThrow(n);
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_name = e.name;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                project: "vulture_js",
                type: "error"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_name) {
            const Component = r("ErrorBoundary.react");
            i = <Component context={a} fallback={fallback}><C8 name={e_name}/></Component>;
            t[1] = e_name;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    function fallback() {
        return null;
    }
    l.default = d;
}, 98);