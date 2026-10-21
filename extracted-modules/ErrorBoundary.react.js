__d("ErrorBoundary.react", [
    "ErrorPubSub",
    "ErrorSerializer",
    "cr:1645510",
    "getErrorSafe",
    "getReactElementDisplayName",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = ((t)=>{
        function o(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.state = {
                error: null,
                moduleName: d(e.props.children)
            };
            e.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix = true;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(o, t);
        o.getDerivedStateFromError = function(t) {
            return {
                error: r("getErrorSafe")(t)
            };
        };
        const o_prototype = o.prototype;
        o_prototype.componentDidUpdate = function(t) {
            if (this.state.error && this.props.forceResetErrorCount != null && this.props.forceResetErrorCount !== t.forceResetErrorCount) {
                this.setState({
                    error: null
                });
                return;
            }
        };
        o_prototype.componentDidCatch = function(n, { componentStack }) {
            const { augmentError, context = {}, description = "base", onError, tags } = this.props;
            if (context.messageFormat == null) {
                context.messageFormat = "caught error in module %s (%s)";
                context.messageParams = [
                    this.state.moduleName,
                    description
                ];
            }
            const state = this.state;
            const { error, moduleName } = state;
            if (error != null) {
                r("ErrorSerializer").aggregateError(error, {
                    componentStack,
                    loggingSource: "ERROR_BOUNDARY"
                });
                r("ErrorSerializer").aggregateError(error, context);
                if (typeof augmentError === "function") {
                    augmentError(error);
                }
                error.tags = Array.from(tags ?? []);
                (e || (e = r("ErrorPubSub"))).reportError(error);
                if (typeof onError === "function") {
                    onError(error, moduleName);
                }
            }
        };
        o_prototype.render = function() {
            const state = this.state;
            const { error, moduleName } = state;
            if (error) {
                const a = this.props.fallback;
                if (a != null) {
                    return a(error, moduleName);
                }
                return null;
            }
            if (n("cr:1645510") != null) {
                const i = <>{u.jsx(n("cr:1645510"), {})}{this.props.children}</>;
                return i;
            }
            return this.props.children ?? null;
        };
        return o;
    })(u.PureComponent);
    c.defaultProps = {
        forceResetErrorCount: 0
    };
    function d(children) {
        const t = u.Children.count(children) > 1 ? u.Children.toArray(children)[0] : children;
        return r("getReactElementDisplayName")(t);
    }
    l.default = c;
}, 98);