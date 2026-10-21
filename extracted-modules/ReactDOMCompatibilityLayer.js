__d("ReactDOMCompatibilityLayer", [
    "ReactDOM"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = typeof WeakMap === "function" ? new WeakMap : new Map;
    function s(t, n) {
        let r = e.get(n);
        if (r == null) {
            r = o("ReactDOM").createRoot(n);
            e.set(n, r);
        }
        let a = null;
        const ref = t.props.ref;
        o("ReactDOM").flushSync(function() {
            let n;
            return r?.render(typeof t.type === "string" || (n = t.type) != null && (n = n.prototype) != null && n.isReactComponent ? babelHelpers.extends({}, t, {
                props: babelHelpers.extends({}, t.props, {
                    ref: function(t) {
                        if (typeof ref === "function") {
                            ref(t);
                        } else if (ref != null) {
                            ref.current = t;
                        }
                        a = t;
                    }
                })
            }) : t);
        });
        return a;
    }
    function u(t) {
        if (t == null) {
            return false;
        }
        const n = e.get(t);
        if (n) {
            o("ReactDOM").flushSync(function() {
                n.unmount();
            });
            e.delete(t);
            return true;
        }
        return false;
    }
    l.render_DEPRECATED = s;
    l.unmountComponentAtNode_DEPRECATED = u;
}, 98);