__d("WAWebNonJidMentionNode", [
    "Lexical",
    "WAWebClassnames",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t({ key, text }) {
            return e.call(this, text, key) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.clone = function(n) {
            return new t({
                text: n.__text,
                key: n.__key
            });
        };
        t.getType = function() {
            return "non-jid-mention";
        };
        t.importJSON = function() {
            throw r("err")("Deserialization of NonJidMentionNode is unsupported");
        };
        const t_prototype = t.prototype;
        t_prototype.createDOM = function(n) {
            const t = e.prototype.createDOM.call(this, n);
            t.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(t.className, "x1ph7ams");
            return t;
        };
        t_prototype.exportJSON = function() {
            return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
                type: "non-jid-mention-node"
            });
        };
        return t;
    })(o("Lexical").TextNode);
    l.NonJidMentionNode = e;
}, 98);