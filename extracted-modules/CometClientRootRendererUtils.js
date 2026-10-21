__d("CometClientRootRendererUtils", [
    "ReactDOM",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    let u = false;
    function c() {
        return u;
    }
    function d(e, t) {
        let n = document.getElementById(e);
        if (!n) {
            n = document.createElement("div");
            n.id = e;
            document.body.appendChild(n);
        }
        if (t) {
            t.setupNavigationMutationRoot(n);
        }
        return n;
    }
    function m({ CometVisualCompletion, rootComponent, rootElementID, rootOptions }) {
        if (!u) {
            const i = o("ReactDOM").createRoot(d(rootElementID, CometVisualCompletion), rootOptions);
            i.render(rootComponent);
            u = true;
        }
    }
    l.getIsClientSideRendered = c;
    l.getOrCreateRootElement = d;
    l.initReactRender = m;
}, 98);