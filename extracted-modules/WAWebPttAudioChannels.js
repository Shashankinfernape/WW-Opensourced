__d("WAWebPttAudioChannels", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.registerMedia = function(t) {
            const e = this;
            let n = null;
            const r = function() {
                n = e.claim(t, function() {
                    t.pause();
                });
            };
            const o = function() {
                n?.();
            };
            t.addEventListener("play", r);
            t.addEventListener("pause", o);
            return function() {
                n?.();
                t.removeEventListener("play", r);
                t.removeEventListener("pause", o);
            };
        };
        n.claim = function(t, n) {
            const e = this;
            const r = this.$AudioChannel$p_1;
            if (r != null && t !== r.key) {
                r.pause();
                this.trigger("paused_DEPRECATED_DO_NOT_USE", r.key);
            }
            this.$AudioChannel$p_1 = {
                key: t,
                pause: n
            };
            return function() {
                if (t === e.$AudioChannel$p_1?.key) {
                    e.$AudioChannel$p_1 = null;
                }
            };
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.MainAudioChannel = s;
}, 98);