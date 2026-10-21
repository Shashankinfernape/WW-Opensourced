__d("WADeprecatedWapParser", [
    "WAParsableWapNode",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e(e, t) {
            this.$1 = e;
            this.$2 = t;
        }
        const t = e.prototype;
        t.parse = function(t) {
            const e = new (o("WAParsableWapNode")).ParsableWapNode(this.$1, t);
            try {
                return {
                    success: this.$2(e)
                };
            } catch (e) {
                if (e instanceof o("WAParsableWapNode").XmppParsingFailure) {
                    return {
                        error: e
                    };
                }
                throw e;
            }
        };
        t.parseOrThrow = function(t) {
            const e = this.parse(t);
            if (e.error) {
                throw r("err")(String(e.error));
            }
            return e.success;
        };
        return e;
    })();
    l.default = e;
}, 98);