__d("WDSBidiParagraphNode", [
    "Lexical",
    "Locale",
    "WABidi",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "bidi-paragraph";
    function s(t) {
        return t.endsWith(e);
    }
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.getType = function() {
            return "wds-bidi-paragraph";
        };
        t.clone = function(n) {
            return new t(n.__key);
        };
        const t_prototype = t.prototype;
        t_prototype.updateDOM = function(t, n) {
            this.updateDOMDirection(n);
            return false;
        };
        t.importJSON = function(t) {
            throw r("err")("Deserialization of WDSBidiParagraphNode is unsupported");
        };
        t_prototype.updateDOMDirection = function(t) {
            let e = o("Locale").isRTL() ? "rtl" : "ltr";
            const n = this.getTextContent();
            if (n) {
                const r = o("WABidi").bidiDir(n);
                e = r ?? e;
            }
            t.dir = e;
        };
        t_prototype.exportJSON = function() {
            return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
                type: "wds-bidi-paragraph"
            });
        };
        return t;
    })(o("Lexical").ParagraphNode);
    l.isBidiNodeType = s;
    l.WDSBidiParagraphNode = u;
}, 98);