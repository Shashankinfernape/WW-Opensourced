__d("LexicalErrorBoundary.prod", [
    "react"
], function $module_LexicalErrorBoundary_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const r = _require_closure_react || (_require_closure_react = require("react"));
    const e = _require_closure_react;
    const _o = ((_r$Component)=>{
        function o(...args) {
            let _this;
            return (_this = _r$Component.call(this, ...args) || this, _this.state = {
                hasError: false
            }, babelHelpers.assertThisInitialized(_this)) || babelHelpers.assertThisInitialized(_this);
        }
        babelHelpers.inheritsLoose(o, _r$Component);
        o.getDerivedStateFromError = function getDerivedStateFromError() {
            return {
                hasError: true
            };
        };
        const _proto = o.prototype;
        _proto.componentDidCatch = function componentDidCatch(cause, e) {
            this.props.onError(cause instanceof Error ? cause : new Error(String(cause), {
                cause
            }), e);
        };
        _proto.render = function render() {
            if (this.state.hasError) {
                return this.props.fallback;
            }
            return this.props.children;
        };
        return o;
    })(r.Component);
    exports.LexicalErrorBoundary = function({ children, fallback, onError }) {
        return <_o fallback={fallback === undefined ? <div style={{
            border: "1px solid #f00",
            color: "#f00",
            padding: "8px"
        }}>An error was thrown.</div> : fallback} onError={onError}>{children}</_o>;
    };
}, null);