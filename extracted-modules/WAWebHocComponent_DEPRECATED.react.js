__d("WAWebHocComponent_DEPRECATED.react", [
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const Component = (e || (e = o("react"))).Component;
    function u(e) {
        if (typeof e === "string") {
            return e;
        }
        if (!e) {
            return "Component";
        }
        const e_displayName = e.displayName;
        if (e_displayName != null && e_displayName !== "") {
            return e_displayName;
        }
        const e_name = e.name;
        if (e_name != null && e_name !== "") {
            return e_name;
        }
        return "Component";
    }
    const c = ((Component_1)=>{
        function t(t) {
            let n;
            n = Component_1.call(this, t) || this;
            n.setComponent = function(e) {
                n.component = e;
            };
            n.state = babelHelpers.extends({}, n.state);
            return n;
        }
        babelHelpers.inheritsLoose(t, Component_1);
        const t_prototype = t.prototype;
        t_prototype.getComponent = function() {
            if (this.component instanceof t) {
                return this.component.getComponent();
            }
            return r("nullthrows")(this.component);
        };
        return t;
    })(Component);
    l.getHocComponentDisplayName = u;
    l.WrappedComponent = c;
}, 98);