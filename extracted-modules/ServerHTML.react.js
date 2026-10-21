__d("ServerHTML.react", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "blob"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.elementRef = u.createRef();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.render = function() {
            const props = this.props;
            const t_blob = props.blob;
            const r = babelHelpers.objectWithoutPropertiesLoose(props, e);
            if (typeof t_blob === "string") {
                return <div {...babelHelpers.extends({}, r, {
                    ref: this.elementRef,
                    children: t_blob
                })}/>;
            }
            return <div {...babelHelpers.extends({}, r, {
                dangerouslySetInnerHTML: t_blob,
                ref: this.elementRef
            })}/>;
        };
        return n;
    })(u.Component);
    l.default = c;
}, 98);