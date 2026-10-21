__d("WAXmlParsingFailure", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        function e(e, t) {
            this.parser = e;
            this.reason = t;
        }
        const t = e.prototype;
        t.toString = function() {
            return `XmlParsingFailure: ${this.parser}: ${this.reason}`;
        };
        return e;
    })();
    i.XmlParsingFailure = e;
}, 66);