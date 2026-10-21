__d("WAWebListenerHoc_DEPRECATED", [
    "WAAbortError",
    "WAWebDocumentFlushed",
    "WAWebHocComponent_DEPRECATED.react",
    "WAWebUIListener",
    "WAWebUiIdleEventBus",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    class u {
        constructor(){
            var e = this;
            this._mounted = false;
            this._unmounted = false;
            this._listeners = new Set;
            this._remove = function(t) {
                t.disengage();
                e._listeners.delete(t);
            };
        }
        _add(t) {
            this._listeners.add(t);
            if (this._mounted) {
                t.engage();
            }
        }
        internalUseOnlyMarkMounted() {
            this._mounted = true;
            this._unmounted = false;
            this._listeners.forEach((e)=>{
                e.engage();
            });
        }
        internalUseOnlyMarkUnmounted() {
            this._unmounted = true;
            this._mounted = false;
            this._listeners.forEach(this._remove);
            if (this._abortController) {
                this._abortController.abort();
            }
        }
        add(t, n, r, a) {
            const e = this;
            const i = new (o("WAWebUIListener")).Listener(t, n, function() {
                if (!e._unmounted) {
                    r.apply(this, arguments);
                }
            }, a, r);
            this._add(i);
        }
        addOnce(t, n, r, a) {
            const e = this;
            var i = new (o("WAWebUIListener")).Listener(t, n, function() {
                e._remove(i);
                if (!e._unmounted) {
                    r.apply(this, arguments);
                }
            }, a, r);
            this._add(i);
        }
        remove(t, n, r, o) {
            const e = this;
            this._listeners.forEach((a)=>{
                if (a.represents(t, n, r, o)) {
                    e._remove(a);
                }
            });
        }
        uiIdle(t) {
            if (o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy) {
                this.addOnce(o("WAWebUiIdleEventBus").UiIdleEventBus, "ui_idle", t);
                return;
            }
            this._abortController = this._abortController || new AbortController;
            o("WAWebDocumentFlushed").documentFlushed({
                signal: this._abortController.signal
            }).then(()=>{
                t();
            }, (e)=>{
                if (e.name !== o("WAAbortError").ABORT_ERROR) {
                    throw e;
                }
            });
        }
        testsOnlyGetListeners() {
            return this._listeners;
        }
    }
    function c(e) {
        let t;
        t = ((t)=>{
            function n(...r) {
                let e;
                e = t.call(this, ...r) || this;
                e.listeners = new u;
                return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.componentDidMount = function() {
                this.listeners.internalUseOnlyMarkMounted();
            };
            n_prototype.componentWillUnmount = function() {
                this.listeners.internalUseOnlyMarkUnmounted();
            };
            n_prototype.render = function() {
                return s.jsx(e, babelHelpers.extends({
                    ref: this.setComponent
                }, this.props, {
                    listeners: this.listeners
                }));
            };
            return n;
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent);
        t.defaultProps = e.defaultProps ?? undefined;
        t.displayName = `Listener(${o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(e)})`;
        t.wrappedComponent = null;
        return t;
    }
    l.Listeners = u;
    l.ListenerHOC = c;
}, 98);