__d("WAWebSetRefCache", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    class s {
        constructor(e){
            this.cache = new Map;
            this.howBig = 0;
            this.fn = e;
        }
        getKeyString(t) {
            if (typeof t === "string") {
                return t;
            }
            return t.join("_");
        }
        getRefSetter(n) {
            const t = this;
            const r = this.getKeyString(n);
            let a = this.cache.get(r);
            if (!a) {
                a = function(o) {
                    t.fn(n, o);
                    if (!o) {
                        t.cache.delete(r);
                    }
                };
                this.cache.set(r, a);
                if (Math.floor(this.cache.size / 500) > this.howBig) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[SetRefCache] Large cache detected with ",
                        " entries"
                    ])), this.cache.size);
                    this.howBig = Math.floor(this.cache.size / 500);
                }
            }
            return a;
        }
    }
    l.default = s;
}, 98);