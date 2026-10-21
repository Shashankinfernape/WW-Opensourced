__d("WAWebQuoteLineNode", [
    "Lexical",
    "WAWebClassnames",
    "WAWebCopyPasteCopyable.react",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = "\u3000";
    const s = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        n.create = function(t) {
            return new n(t);
        };
        n.getType = function() {
            return "quote-line";
        };
        n.clone = function(t) {
            return new n(t.__text, t.__key);
        };
        n.importJSON = function() {
            throw r("err")("Deserialization of QuoteLineNode is unsupported");
        };
        const n_prototype = n.prototype;
        n_prototype.createDOM = function(r) {
            const n = t.prototype.createDOM.call(this, r);
            n.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(n.className, "x1uu0p8 x1cpjm7i x1hmns74 xtsy0b0 x1n405n8 x1oi0s10 xy6poam x16sot9k x1r2idrg xh33742 xzkpmbt");
            n.textContent = e;
            n.dataset[o("WAWebCopyPasteCopyable.react").PLAIN_TEXT_DATA_ATTR] = ">";
            return n;
        };
        n_prototype.updateDOM = function(r, o, a) {
            const n = t.prototype.updateDOM.call(this, r, o, a);
            o.textContent = e;
            return n;
        };
        n_prototype.exportJSON = function() {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
                type: "quote-line-node"
            });
        };
        return n;
    })(o("Lexical").TextNode);
    function u(e) {
        return new s(e).setMode("token");
    }
    function c(e) {
        return e instanceof s;
    }
    function d(e) {
        if (c(e)) {
            return e;
        }
        const t = u(e.getTextContent());
        e.replace(t);
        return t;
    }
    l.QuoteLineNode = s;
    l.$transformToQuoteLineNode = d;
}, 98);