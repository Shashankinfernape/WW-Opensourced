__d("LexicalText.prod", [
    "Lexical"
], function $module_LexicalText_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function e() {
        return require("Lexical").$getRoot().getTextContent();
    }
    function n(t, n = true) {
        if (t) {
            return false;
        }
        let r = e();
        if (n) {
            r = r.trim();
        }
        return r === "";
    }
    function r(e) {
        if (!n(e, false)) {
            return false;
        }
        const r = require("Lexical").$getRoot().getChildren();
        const r_length = r.length;
        if (r_length > 1) {
            return false;
        }
        for(let _e = 0; _e < r_length; _e++){
            const _n = r[_e];
            if (require("Lexical").$isDecoratorNode(_n)) {
                return false;
            }
            if (require("Lexical").$isElementNode(_n)) {
                if (!require("Lexical").$isParagraphNode(_n)) {
                    return false;
                }
                if (_n.__indent !== 0) {
                    return false;
                }
                const _e2 = _n.getChildren();
                const _r = _e2.length;
                for(let _n2 = 0; _n2 < _r; _n2++){
                    const _r2 = _e2[_n2];
                    if (!require("Lexical").$isTextNode(_r2)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    function o(t, ...e_1) {
        throw ((t, ...e)=>{
            const n = new URL("https://lexical.dev/docs/error");
            const r = new URLSearchParams();
            r.append("code", t);
            for (const _t of e){
                r.append("v", _t);
            }
            n.search = r.toString();
            return new Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
        })(...[
            t
        ].concat(Array.from(e_1)));
    }
    exports.$canShowPlaceholder = r;
    exports.$canShowPlaceholderCurry = function(t) {
        return function() {
            return r(t);
        };
    };
    exports.$findTextIntersectionFromCharacters = function(e, n) {
        let r = e.getFirstChild();
        let o = 0;
        t: while(r !== null){
            if (require("Lexical").$isElementNode(r)) {
                const _t2 = r.getFirstChild();
                if (_t2 !== null) {
                    r = _t2;
                    continue;
                }
            } else if (require("Lexical").$isTextNode(r)) {
                const _t3 = r.getTextContentSize();
                if (o + _t3 > n) {
                    return {
                        node: r,
                        offset: n - o
                    };
                }
                o += _t3;
            }
            const _e3 = r.getNextSibling();
            if (_e3 !== null) {
                r = _e3;
                continue;
            }
            let i = r.getParent();
            while(i !== null){
                const _t4 = i.getNextSibling();
                if (_t4 !== null) {
                    r = _t4;
                    continue t;
                }
                i = i.getParent();
            }
            break;
        }
        return null;
    };
    exports.$isRootTextContentEmpty = n;
    exports.$isRootTextContentEmptyCurry = function(t, e) {
        return function() {
            return n(t, e);
        };
    };
    exports.$rootTextContent = e;
    exports.registerLexicalTextEntity = function(e, n, r, i) {
        const s = function s(t) {
            return t instanceof r;
        };
        const l = function l(e) {
            const n = require("Lexical").$createTextNode(e.getTextContent()).setFormat(e.getFormat()).setStyle(e.getStyle()).setDetail(e.getDetail());
            e.replace(n);
        };
        return [
            e.registerNodeTransform(require("Lexical").TextNode, function(e) {
                if (!e.isSimpleText()) {
                    return;
                }
                let r;
                let u = e.getPreviousSibling();
                let c = e.getTextContent();
                let f = e;
                if (require("Lexical").$isTextNode(u)) {
                    const _t5 = u.getTextContent();
                    const _r3 = n(_t5 + c);
                    if (s(u)) {
                        if (_r3 === null || ((t)=>t.getLatest().__mode)(u) !== 0) {
                            return void l(u);
                        }
                        {
                            const _n3 = _r3.end - _t5.length;
                            if (_n3 > 0) {
                                const _r4 = _t5 + c.slice(0, _n3);
                                u.select();
                                u.setTextContent(_r4);
                                if (_n3 === c.length) {
                                    e.remove();
                                } else {
                                    const _t6 = c.slice(_n3);
                                    e.setTextContent(_t6);
                                }
                                return;
                            }
                        }
                    } else if (_r3 === null || _r3.start < _t5.length) {
                        return;
                    }
                }
                let a = 0;
                while(true){
                    let _f$splitText;
                    let _f$splitText2;
                    const _e4 = c;
                    r = n(_e4);
                    const d = r === null ? "" : _e4.slice(r.end);
                    c = d;
                    if (d === "") {
                        const _o = f.getNextSibling();
                        if (require("Lexical").$isTextNode(_o)) {
                            const _t7 = _e4 + _o.getTextContent();
                            const _i = n(_t7);
                            if (_i === null) {
                                return void (s(_o) ? l(_o) : _o.markDirty());
                            }
                            if (r === null || _i.start !== r.start) {
                                return;
                            }
                        }
                    }
                    if (r === null) {
                        return;
                    }
                    if (r.start === 0 && require("Lexical").$isTextNode(u) && u.isTextEntity()) {
                        a += r.end;
                        continue;
                    }
                    let g;
                    if (r.start === 0) {
                        _f$splitText = f.splitText(r.end);
                        g = _f$splitText[0];
                        f = _f$splitText[1];
                        _f$splitText;
                    } else {
                        _f$splitText2 = f.splitText(r.start + a, r.end + a);
                        g = _f$splitText2[1];
                        f = _f$splitText2[2];
                        _f$splitText2;
                    }
                    if (g === undefined) {
                        o(165, "nodeToReplace");
                    }
                    const x = i(g);
                    x.setFormat(g.getFormat()).setStyle(g.getStyle()).setDetail(g.getDetail());
                    g.replace(x);
                    if (f == null) {
                        return;
                    }
                    a = 0;
                    u = x;
                }
            }),
            e.registerNodeTransform(r, function(e) {
                const r = e.getTextContent();
                const o = n(r);
                if (o === null || o.start !== 0) {
                    return void l(e);
                }
                if (r.length > o.end) {
                    return void e.splitText(o.end);
                }
                const i = e.getPreviousSibling();
                if (require("Lexical").$isTextNode(i) && i.isTextEntity()) {
                    l(i);
                    l(e);
                }
                const u = e.getNextSibling();
                if (require("Lexical").$isTextNode(u) && u.isTextEntity()) {
                    l(u);
                    if (s(e)) {
                        l(e);
                    }
                }
            })
        ];
    };
}, null);