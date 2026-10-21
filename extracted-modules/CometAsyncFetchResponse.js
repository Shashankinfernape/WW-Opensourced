__d("CometAsyncFetchResponse", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(e, t){
            this.$1 = e;
            this.$2 = this.$3(t);
        }
        getFullResponsePayload() {
            return this.$1;
        }
        getResponsePayload() {
            return this.$1?.payload;
        }
        getResponseHeader(t) {
            return this.$2?.get(t.toLowerCase());
        }
        getAllResponseHeadersMap() {
            return new Map(this.$2);
        }
        $3(t) {
            if (t == null || t.length === 0) {
                return null;
            }
            const e = new Map;
            const n = t.split("\r\n");
            for (const r of n){
                const o = r.indexOf(": ");
                if (!(o <= 0)) {
                    const a = r.substring(0, o).toLowerCase();
                    const i = r.substring(o + 2);
                    const l = e.get(a);
                    const s = l != null ? `${l}, ${i}` : i;
                    e.set(a, s);
                }
            }
            return e;
        }
    }
    i.default = e;
}, 66);