__d("WAWebBidiParagraphNode", [
    "Lexical",
    "Locale",
    "WABidi",
    "WAWebABProps",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebQuoteLineNode",
    "WDSBidiParagraphNode",
    "WDSVars.stylex",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = 40;
    const s = 30;
    const u = 14;
    const c = o("Lexical").createState("waQuoteDirection", {
        parse: function(t) {
            if (t === "ltr" || t === "rtl") {
                return t;
            }
            return null;
        }
    });
    const d = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        n.getType = function() {
            return "bidi-paragraph";
        };
        n.clone = function(t) {
            return new n(t.__key);
        };
        const n_prototype = n.prototype;
        n_prototype.updateDOM = function(n, r) {
            t.prototype.updateDOM.call(this, n, r);
            this.updateDOMTextIndent(r);
            this.updateDOMMargin(r);
            this.updateDOMQuoteBarHeight(r);
            return false;
        };
        n.importJSON = function(t) {
            throw r("err")("Deserialization of BidiParagraphNode is unsupported");
        };
        n_prototype.updateDOMDirection = function(n) {
            const e = this.getQuoteDirection();
            if (e == null) {
                t.prototype.updateDOMDirection.call(this, n);
                return;
            }
            n.dir = e;
        };
        n_prototype.getQuoteDirection = function() {
            if (!(this.getQuoteLineNode() == null || !o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes"))) {
                return o("Lexical").$getState(this, c) ?? undefined;
            }
        };
        n_prototype.getTargetIndent = function() {
            if (this.getNumberNode() || this.getBulletNode()) {
                return s / e;
            }
            if (this.getQuoteLineNode()) {
                return u / e;
            }
            return 0;
        };
        n_prototype.getBulletNode = function() {
            const e = this.getFirstChild();
            if (e instanceof o("WAWebListBulletNode").ListBulletNode) {
                return e;
            }
            return null;
        };
        n_prototype.getNumberNode = function() {
            const e = this.getFirstChild();
            if (e instanceof o("WAWebListNumberNode").ListNumberNode) {
                return e;
            }
            return null;
        };
        n_prototype.getQuoteLineNode = function() {
            const e = this.getFirstChild();
            if (e instanceof o("WAWebQuoteLineNode").QuoteLineNode) {
                return e;
            }
            return null;
        };
        n_prototype.getQuoteBarDirection = function() {
            return this.getQuoteDirection() ?? o("WABidi").bidiDir(this.getTextContent()) ?? (o("Locale").isRTL() ? "rtl" : "ltr");
        };
        n_prototype.updateDOMTextIndent = function(t) {
            t.style.textIndent = "0";
            if (this.getBulletNode()) {
                t.style.textIndent = "-12px";
            }
            const e = this.getNumberNode();
            if (e) {
                t.style.textIndent = `-${e.getTextContentSize()}ch`;
            }
            if (this.getQuoteLineNode()) {
                t.style.textIndent = `-${u}px`;
            }
        };
        n_prototype.updateDOMMargin = function(t) {
            let e = 0;
            let n = 0;
            const r = this.getBulletNode() || this.getNumberNode();
            if (r) {
                const o = this.getPreviousSibling();
                const a = o?.getBulletNode() || o?.getNumberNode();
                if (!a || a.getType() !== r.getType()) {
                    e = 4;
                }
                const i = this.getNextSibling();
                const l = i?.getBulletNode() || i?.getNumberNode();
                if (!l || l.getType() !== r.getType()) {
                    n = 4;
                }
            }
            if (this.getQuoteLineNode()) {
                const s = m(this, t);
                n = s.marginBottom;
                e = s.marginTop;
            }
            t.style.marginTop = `${e}px`;
            t.style.marginBottom = `${n}px`;
        };
        n_prototype.updateDOMQuoteBarHeight = function(t) {
            if (!this.getQuoteLineNode()) {
                t.style.removeProperty("--wa-quote-bar-height");
                return;
            }
            const e = this.getChildren().some(o("Lexical").$isLineBreakNode);
            t.style.setProperty("--wa-quote-bar-height", e ? "1lh" : "100%");
        };
        n_prototype.exportJSON = function() {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
                type: "bidi-paragraph-node"
            });
        };
        return n;
    })(o("WDSBidiParagraphNode").WDSBidiParagraphNode);
    function m(e, t) {
        const n = o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes");
        const r = n && _(e, e.getPreviousSibling());
        const a = n && _(e, e.getNextSibling());
        p(t, "--wa-quote-bar-top-radius", r);
        p(t, "--wa-quote-bar-bottom-radius", a);
        return {
            marginTop: r ? 0 : 4,
            marginBottom: a ? 0 : 4
        };
    }
    function p(e, t, n) {
        if (n) {
            e.style.setProperty(t, o("WDSVars.stylex").WDSVars.borderRadiusNone);
        } else {
            e.style.removeProperty(t);
        }
    }
    function _(e, t) {
        return t != null && t.getQuoteLineNode() != null && t.getQuoteBarDirection() === e.getQuoteBarDirection();
    }
    function f(e) {
        if (o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes")) {
            for(let t = e; t != null;){
                const r = [];
                while(t instanceof d && t.getQuoteLineNode() != null){
                    r.push(t);
                    t = t.getNextSibling();
                }
                g(r);
                t = t?.getNextSibling();
            }
        }
    }
    function g(e) {
        let t = null;
        for (const n of e){
            t = o("WABidi").bidiDir(n.getTextContent()) ?? null;
            if (t != null) {
                break;
            }
        }
        for (const a of e){
            if (o("Lexical").$getState(a, c) !== t) {
                o("Lexical").$setState(a, c, t);
            }
        }
    }
    l.BidiParagraphNode = d;
    l.$setQuoteDirections = f;
}, 98);