__d("WAWebUiIdleEventBus", [
    "invariant",
    "WALogger",
    "WAWebDebounce",
    "WAWebEventEmitter",
    "WAWebNoop"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e) {
        const t = function() {
            e();
        };
        t.cancel = r("WAWebNoop");
        return t;
    }
    const c = {
        UI_IDLE: "ui_idle"
    };
    const d = ((t)=>{
        function n(...i) {
            let n;
            n = t.call(this, ...i) || this;
            n.uiBusy = 0;
            n.$UiIdleEventBusImpl$p_1 = u;
            n.$UiIdleEventBusImpl$p_2 = null;
            n.$UiIdleEventBusImpl$p_3 = r("WAWebDebounce")(function() {
                if (n.uiBusy) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "UiIdleEventBus:clearUIBusy uibusy timeout"
                    ])));
                    n.uiBusy = 0;
                    n.$UiIdleEventBusImpl$p_4();
                }
            }, 1000, {
                maxWait: 5000
            });
            return babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.setDeferUntilDocumentFlushed = function(t) {
            this.$UiIdleEventBusImpl$p_1 = t;
            this.$UiIdleEventBusImpl$p_2 = null;
        };
        a.$UiIdleEventBusImpl$p_5 = function() {
            const e = this;
            if (this.$UiIdleEventBusImpl$p_2 == null) {
                this.$UiIdleEventBusImpl$p_2 = this.$UiIdleEventBusImpl$p_1(function() {
                    if (e.uiBusy !== 0) {
                        s(0, 75716, e.uiBusy);
                    }
                    if (e.uiBusy === 0) {
                        e.$UiIdleEventBusImpl$p_3.cancel();
                        e.trigger(c.UI_IDLE);
                    }
                });
            }
            return this.$UiIdleEventBusImpl$p_2;
        };
        a.$UiIdleEventBusImpl$p_4 = function() {
            this.$UiIdleEventBusImpl$p_5()();
        };
        a.setUiBusy = function(t) {
            let e = this.uiBusy || 0;
            if (t) {
                ++e;
                this.$UiIdleEventBusImpl$p_3();
                this.$UiIdleEventBusImpl$p_2?.cancel();
            } else {
                --e;
            }
            if (e < 0) {
                e = 0;
            }
            this.uiBusy = e;
            if (e === 0) {
                this.$UiIdleEventBusImpl$p_3.cancel();
                this.$UiIdleEventBusImpl$p_4();
            }
        };
        return n;
    })(r("WAWebEventEmitter"));
    const m = new d;
    l.UiIdleEventBus = m;
}, 98);