__d("WAWebBlockQuoteFormatMutator", [
    "WABidi",
    "WAWebABProps",
    "WAWebBlockQuoteMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = String.raw(e || (e = babelHelpers.taggedTemplateLiteralLoose([
        "[^S\n](?! +)"
    ], [
        "[^\\S\\n](?! +)"
    ])));
    const m = new RegExp(String.raw(s || (s = babelHelpers.taggedTemplateLiteralLoose([
        "^>(",
        "[^\n]*$(?:\n|$))"
    ], [
        "^>(",
        "[^\\n]*$(?:\\n|$))"
    ])), d), "gm");
    const p = new RegExp(`>${d}`, "y");
    const _ = new WeakMap;
    const f = r("WAWebCreateRegexMutator")(m, 1);
    const g = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.match = function(n, r, a) {
            const t = e.match.call(this, n);
            let i = null;
            for (const l of t){
                const s = l[4];
                const blockDirection = i != null && i.nextLineStart === s.index ? i.blockDirection : C(s);
                i = {
                    blockDirection,
                    nextLineStart: s.index + s[0].length
                };
                _.set(s, babelHelpers.extends({}, h(s, a), {
                    direction: blockDirection ?? o("WABidi").bidiDir(s[1])
                }));
            }
            return t;
        };
        t.jsx = function(t, n, { inline = false, quoted = false, selectable = false }) {
            const m = _.get(n) ?? babelHelpers.extends({}, h(n), {
                direction: y(n)
            });
            const { direction, joinsNextLine, joinsPreviousLine } = m;
            const Component = r("WAWebBlockQuoteMutatorComponent.react");
            return <Component selectable={selectable} inline={inline} joinsNextLine={joinsNextLine} joinsPreviousLine={joinsPreviousLine} dir={direction} quoted={quoted}>{t}</Component>;
        };
        return t;
    })(f);
    g.unformatDecorations = {
        pre: ">"
    };
    function h(e, t = Infinity) {
        if (!o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes")) {
            return {
                joinsNextLine: false,
                joinsPreviousLine: false
            };
        }
        const { index, input } = e;
        const a = index + e[0].length;
        return {
            joinsNextLine: a < Math.min(input.length, t) && R(input, a),
            joinsPreviousLine: index > 0 && R(input, S(input, index))
        };
    }
    function y(e) {
        return C(e) ?? o("WABidi").bidiDir(e[1]);
    }
    function C(e) {
        if (!o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes")) {
            return null;
        }
        const { index, input } = e;
        return v(input, b(input, index));
    }
    function b(input, index) {
        for(var n = index, r = S(input, n); n > 0 && R(input, r);){
            n = r;
            r = S(input, n);
        }
        return n;
    }
    function v(input, t) {
        for(let n = t; n < input.length && R(input, n);){
            const r = input.indexOf("\n", n);
            const a = o("WABidi").bidiDir(input.slice(n + 1, r === -1 ? input.length : r));
            if (a != null) {
                return a;
            }
            if (r === -1) {
                break;
            }
            n = r + 1;
        }
        return null;
    }
    function S(input, t) {
        if (t < 2) {
            return 0;
        }
        return input.lastIndexOf("\n", t - 2) + 1;
    }
    function R(input, t) {
        p.lastIndex = t;
        return p.test(input);
    }
    const L = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(f);
    l.BlockQuote = g;
    l.getAdjacentQuoteLines = h;
    l.getQuoteDirection = y;
    l.BlockQuoteWithEmpty = L;
}, 98);