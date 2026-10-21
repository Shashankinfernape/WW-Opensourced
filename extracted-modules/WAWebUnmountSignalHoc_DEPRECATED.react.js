__d("WAWebUnmountSignalHoc_DEPRECATED.react", [
    "WAWebHocComponent_DEPRECATED.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        let t;
        t = ((t)=>{
            function n(...r) {
                let e;
                e = t.call(this, ...r) || this;
                e._isUnmounted = false;
                e._controller = null;
                e.getUnmountSignal = function() {
                    if (e._controller && !e._controller.signal.aborted) {
                        return e._controller.signal;
                    }
                    const t = new AbortController;
                    e._controller = t;
                    if (e._isUnmounted) {
                        t.abort();
                    }
                    return t.signal;
                };
                return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.componentDidMount = function() {
                this._isUnmounted = false;
            };
            n_prototype.componentWillUnmount = function() {
                this._isUnmounted = true;
                this._controller?.abort();
            };
            n_prototype.render = function() {
                return s.jsx(e, babelHelpers.extends({
                    ref: this.setComponent,
                    getUnmountSignal: this.getUnmountSignal
                }, this.props));
            };
            return n;
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent);
        t.defaultProps = e.defaultProps ?? undefined;
        t.displayName = `UnmountSignal(${o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(e)})`;
        t.wrappedComponent = null;
        return t;
    }
    l.default = u;
}, 98);