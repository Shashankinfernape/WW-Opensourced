__d("WAWebDelimiterNode", [
    "Lexical",
    "WAWebClassnames",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t, r) || this;
            o.__position = n;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        t.getType = function() {
            return "delimiter";
        };
        t.clone = function(n) {
            return new t(n.__text, n.__position, n.__key);
        };
        t.importJSON = function() {
            throw r("err")("Deserialization of DelimiterNode is unsupported");
        };
        const t_prototype = t.prototype;
        t_prototype.createDOM = function(n) {
            const t = e.prototype.createDOM.call(this, n);
            t.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(t.className, "xgkkfiv");
            return t;
        };
        t_prototype.isOpen = function() {
            return this.__position === "open";
        };
        t_prototype.getPosition = function() {
            return this.__position;
        };
        t_prototype.setPosition = function(t) {
            if (this.getPosition() !== t) {
                const e = this.getWritable();
                e.__position = t;
            }
        };
        t_prototype.exportJSON = function() {
            return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
                type: "delimiter-node"
            });
        };
        return t;
    })(o("Lexical").TextNode);
    function s(t, n) {
        return new e(t, n);
    }
    function u(t) {
        return t instanceof e;
    }
    function c(e, t) {
        if (u(e)) {
            e.setPosition(t);
            return e;
        }
        const n = s(e.getTextContent(), t);
        e.replace(n);
        return n;
    }
    l.DelimiterNode = e;
    l.$createDelimiterNode = s;
    l.$isDelimiterNode = u;
    l.$transformToDelimiterNode = c;
}, 98);