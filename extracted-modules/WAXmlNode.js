__d("WAXmlNode", [
    "WAHex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    const s = (()=>{
        function t(t, n = e, r = null) {
            this.tag = t;
            this.attrs = n;
            this.content = r;
        }
        const n = t.prototype;
        n.toString = function() {
            let e = `<${this.tag}`;
            e += u(this.attrs);
            const t = this.content;
            if (Array.isArray(t)) {
                e += `>${t.map(String).join("")}</${this.tag}>`;
            } else if (t instanceof Uint8Array) {
                e += `>${c(t)}</${this.tag}>`;
            } else if (t != null) {
                e += `>${String(t)}</${this.tag}>`;
            } else {
                e += " />";
            }
            return e;
        };
        return t;
    })();
    function u(e) {
        for(var t = Object.keys(e), n = "", r = 0; r < t.length; r++){
            const o = t[r];
            n += ` ${o}="${e[o].toString()}"`;
        }
        return n;
    }
    function c(e) {
        let t = "";
        if (e.length === 0) {
            t = "<!-- empty binary -->";
        } else if (e.length < 50) {
            t = o("WAHex").bytesToDebugString(e);
        } else {
            t = `<!-- ${e.length} bytes -->`;
        }
        return t;
    }
    l.XmlNode = s;
    l.attrsToString = u;
    l.uint8ArrayToDebugString = c;
}, 98);