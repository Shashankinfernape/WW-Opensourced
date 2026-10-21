__d("Visibility", [
    "BaseEventEmitter",
    "ExecutionEnvironment",
    "TimeSlice"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        if (document.hidden !== undefined) {
            s = "hidden";
            u = "visibilitychange";
        } else if (document.mozHidden !== undefined) {
            s = "mozHidden";
            u = "mozvisibilitychange";
        } else if (document.msHidden !== undefined) {
            s = "msHidden";
            u = "msvisibilitychange";
        } else if (document.webkitHidden !== undefined) {
            s = "webkitHidden";
            u = "webkitvisibilitychange";
        }
    }
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.HIDDEN = "hidden";
            e.VISIBLE = "visible";
            e.hiddenKey = s;
            e.hiddenEvent = u;
            e.$VisibilityEmitter$p_1 = null;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.isHidden = function() {
            if (s) {
                return document[s];
            }
            return false;
        };
        n_prototype.isSupported = function() {
            return (e || (e = r("ExecutionEnvironment"))).canUseDOM && document.addEventListener && u !== undefined;
        };
        n_prototype.setLoggingSinkCallback = function(t) {
            this.$VisibilityEmitter$p_1 = t;
        };
        n_prototype.getLoggingSinkCallback = function() {
            return this.$VisibilityEmitter$p_1;
        };
        return n;
    })(r("BaseEventEmitter"));
    const d = new c;
    if (d.isSupported()) {
        document.addEventListener(d.hiddenEvent, r("TimeSlice").guard(function(t) {
            const e = d.isHidden();
            d.emit(e ? d.HIDDEN : d.VISIBLE, {
                changeTime: t.timeStamp
            });
            const n = d.getLoggingSinkCallback();
            if (n != null) {
                n(e);
            }
        }, "visibility change"));
    }
    l.default = d;
}, 98);