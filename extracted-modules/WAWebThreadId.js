__d("WAWebThreadId", [
    "WALogger",
    "WAWebMsgKey",
    "WAWebThreadUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = (()=>{
        function t(t) {
            this.type = t.type;
            if (t.key instanceof r("WAWebMsgKey")) {
                this.key = t.key;
            } else {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadId] non-WAWebMsgKey key for type ",
                    ""
                ])), this.type).sendLogs("WAWebThreadId: invalid MsgKey");
                this.key = r("WAWebMsgKey").from(t.key);
            }
            this.$1 = `${this.type}_${this.key.toString()}`;
        }
        const n = t.prototype;
        n.toString = function() {
            return this.$1;
        };
        n.equals = function(n) {
            return n instanceof t && this.toString() === n.toString();
        };
        t.from = function(t) {
            const e = t.split("_");
            if (e.length < 2) {
                throw r("err")("ThreadId.from error: invalid string format");
            }
            const n = e[0];
            const a = e.slice(1, e.length).join("_");
            const i = o("WAWebThreadUtils").getThreadTypeFromString(n);
            return o("WAWebThreadUtils").getThreadIDfromType(r("WAWebMsgKey").from(a), i);
        };
        t.tryFrom = function(n) {
            try {
                return t.from(n);
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadId.tryFrom] malformed id: ",
                    ""
                ])), n).sendLogs("WAWebThreadId: malformed-db-id");
                return null;
            }
        };
        t.fromMessage = function(t, n) {
            const e = t instanceof r("WAWebMsgKey") ? t : r("WAWebMsgKey").from(t);
            return o("WAWebThreadUtils").getThreadIDfromType(e, n);
        };
        return t;
    })();
    l.default = u;
}, 98);