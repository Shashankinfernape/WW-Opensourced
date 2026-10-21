__d("WAWebAssetLoaderDynamicStyle", [
    "WACamelCase",
    "uniqueID"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e) {
            this.rules = {};
            this.styleSheet = this.createStyleSheet(e);
        }
        const t = e.prototype;
        t.createStyleSheet = function(t) {
            const e = t != null && t !== "" ? t : r("uniqueID")("dynamic-style-");
            const n = document.createElement("style");
            n.id = e;
            n.type = "text/css";
            if (document.head) {
                document.head.appendChild(n);
            }
            const o = n.sheet;
            return o;
        };
        t.addRule = function(t, n) {
            const e = this.styleSheet.cssRules.length;
            const r = Object.entries(n).map(([t, n])=>`${t}: ${n};`).join(" ");
            this.styleSheet.insertRule(`${t} { ${r} }`, e);
            this.rules[t] = this.styleSheet.cssRules[e];
            return this.rules[t];
        };
        t.updateRule = function(t, n) {
            const e = this.rules[t];
            Object.entries(n).forEach(([n, o])=>{
                e.style[r("WACamelCase")(n)] = o;
            });
            return e;
        };
        t.setRule = function(t, n) {
            const e = this.rules[t];
            if (e) {
                return this.updateRule(t, n);
            }
            return this.addRule(t, n);
        };
        return e;
    })();
    l.default = e;
}, 98);