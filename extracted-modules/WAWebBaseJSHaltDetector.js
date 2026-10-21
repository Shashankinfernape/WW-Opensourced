__d("WAWebBaseJSHaltDetector", [
    "WALogger",
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "js_halt";
    const d = "clock_change_backwards";
    const m = ((t)=>{
        function n(e, n) {
            let r;
            r = t.call(this) || this;
            r.$BaseJsHaltDetector$p_1 = e;
            r.$BaseJsHaltDetector$p_2 = n;
            return r;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.startDetection = function() {
            const t = this;
            if (this.$BaseJsHaltDetector$p_3 == null) {
                let n = Date.now();
                this.$BaseJsHaltDetector$p_3 = self.setInterval(function() {
                    const e = Date.now();
                    const r = e - n - t.$BaseJsHaltDetector$p_1;
                    if (r > t.$BaseJsHaltDetector$p_2) {
                        t.trigger(c, r);
                    } else if (r < -t.$BaseJsHaltDetector$p_2) {
                        t.trigger(d, r);
                    }
                    n = e;
                }, this.$BaseJsHaltDetector$p_1);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "JsHaltDetector:detection started"
                ])));
            }
        };
        n_prototype.stopDetection = function() {
            if (this.$BaseJsHaltDetector$p_3 != null) {
                self.clearInterval(this.$BaseJsHaltDetector$p_3);
                this.$BaseJsHaltDetector$p_3 = null;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "JsHaltDetector:detection stopped"
                ])));
            }
        };
        n_prototype.restartDetection = function() {
            this.stopDetection();
            this.startDetection();
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "JsHaltDetector:detection restarted"
            ])));
        };
        return n;
    })(r("WAWebEventEmitter"));
    l.JS_HALT_EVENT = c;
    l.CLOCK_CHANGE_BACKWARDS_EVENT = d;
    l.BaseJsHaltDetector = m;
}, 98);