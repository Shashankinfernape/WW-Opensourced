__d("WAWebListNumberNode", [
    "Lexical",
    "WAWebClassnames",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.create = function(n) {
            return new t(n);
        };
        t.getType = function() {
            return "numbered-symbol";
        };
        t.clone = function(n) {
            return new t(n.__text, n.__key);
        };
        t.importJSON = function() {
            throw r("err")("Deserialization of ListNumberNode is unsupported");
        };
        const t_prototype = t.prototype;
        t_prototype.createDOM = function(n) {
            const t = e.prototype.createDOM.call(this, n);
            t.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(t.className, "x1sdyfia xss6m8b");
            return t;
        };
        t_prototype.exportJSON = function() {
            return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
                type: "list-number-node"
            });
        };
        return t;
    })(o("Lexical").TextNode);
    function s(t) {
        return new e(t);
    }
    function u(t) {
        return t instanceof e;
    }
    function c(e) {
        if (u(e)) {
            return e;
        }
        const t = s(e.getTextContent());
        e.replace(t);
        return t;
    }
    l.ListNumberNode = e;
    l.$createListNumberNode = s;
    l.$isListNumberNode = u;
    l.$transformToListNumberNode = c;
}, 98);