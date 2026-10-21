__d("WAWebSignalAddress", [
    "WAWebApiContact",
    "WAWebSessionScope",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = ":99";
    const s = "_status";
    const u = "_pq";
    const c = (()=>{
        function t(e, t = o("WAWebSessionScope").SessionScope.DEFAULT) {
            this.wid = e;
            this.$1 = t;
        }
        const n = t.prototype;
        n.getWid = function() {
            return this.wid;
        };
        n.toString = function() {
            const t = this.wid.device != null && this.wid.device !== 0 ? `:${this.wid.device}` : "";
            if (this.wid.isFbidBot()) {
                return [
                    this.wid.user,
                    "@bot"
                ].join("");
            }
            if (this.wid.isBot()) {
                return [
                    this.wid.user,
                    t,
                    "@c.us"
                ].join("");
            }
            if (this.wid.isHosted()) {
                if (t !== e) {
                    throw r("err")("Hosted jid with wrong device id");
                }
                const n = o("WAWebWidFactory").asUserWidOrThrow(this.wid);
                const a = !n.isLid() && !n.isHostedLid() && n.isUser();
                const i = a ? o("WAWebApiContact").getCurrentLid(n) : n;
                if (i == null) {
                    return [
                        this.wid.user,
                        t,
                        "@hosted"
                    ].join("");
                }
                return [
                    i.user,
                    t,
                    "@hosted.lid"
                ].join("");
            }
            const l = o("WAWebWidFactory").asUserWidOrThrow(this.wid);
            const c = !l.isLid() && l.isUser();
            const d = c ? o("WAWebApiContact").getCurrentLid(l) : l;
            if (d == null) {
                const m = [
                    this.wid.user,
                    t,
                    "@c.us"
                ].join("");
                if (this.$1 === o("WAWebSessionScope").SessionScope.STATUS) {
                    return m + s;
                }
                return m;
            }
            const p = [
                d.user,
                t,
                "@lid"
            ].join("");
            if (this.$1 === o("WAWebSessionScope").SessionScope.STATUS) {
                return p + s;
            }
            if (this.$1 === o("WAWebSessionScope").SessionScope.PQ) {
                return p + u;
            }
            return p;
        };
        return t;
    })();
    l.SignalAddress = c;
}, 98);