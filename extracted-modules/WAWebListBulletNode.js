__d("WAWebListBulletNode", [
    "Lexical",
    "WAWebClassnames",
    "WAWebCopyPasteCopyable.react",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = "•";
    const s = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        n.create = function(t) {
            return new n(t);
        };
        n.getType = function() {
            return "list-bullet";
        };
        n.clone = function(t) {
            return new n(t.__text, t.__key);
        };
        n.importJSON = function() {
            throw r("err")("Deserialization of ListBulletNode is unsupported");
        };
        const n_prototype = n.prototype;
        n_prototype.createDOM = function(r) {
            const n = t.prototype.createDOM.call(this, r);
            n.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(n.className, "x1sdyfia x1ncwhqj xd4r4e8 x1n8ftqi");
            n.textContent = e;
            n.dataset[o("WAWebCopyPasteCopyable.react").PLAIN_TEXT_DATA_ATTR] = "*";
            return n;
        };
        n_prototype.updateDOM = function(n, r, o) {
            r.textContent = e;
            return false;
        };
        n_prototype.exportJSON = function() {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
                type: "list-bullet-node"
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
    l.ListBulletNode = s;
    l.$createListBulletNode = u;
    l.$transformToListBulletNode = d;
}, 98);