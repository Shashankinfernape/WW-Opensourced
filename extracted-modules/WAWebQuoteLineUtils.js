__d("WAWebQuoteLineUtils", [], function(t, n, r, o, a, i) {
    const e = "> ";
    const l = /^> (?!\s)/;
    const s = "```";
    const u = /\r?\n|\r/;
    const c = /(\r?\n|\r)$/;
    const d = /^\s+/;
    const m = /^[^\S\r\n]+/;
    function p(e) {
        return (e.split(s).length - 1) % 2 === 1;
    }
    function _(e) {
        return l.test(e);
    }
    function f(t) {
        let n = false;
        return t.split(u).map((t, r)=>{
            const o = p(t);
            const a = t.replace(d, "");
            const i = a.trim() === "";
            const l = a.length === t.length && _(a);
            const s = r === 0 || n || o || i || l;
            if (o) {
                n = !n;
            }
            if (s) {
                return t;
            }
            return `${e}${a}`;
        }).join("\n");
    }
    function g(e, t) {
        const n = t.split(u)[0];
        return c.test(e) && n.trim() !== "" && !_(n) && !p(e);
    }
    function h(t, n) {
        if (n !== e || t.trim() === "") {
            return 0;
        }
        return t.match(m)?.[0].length ?? 0;
    }
    function y(e) {
        for(var t = e.split("\n"), n = t.length; n > 0 && C(t[n - 1]);){
            n--;
        }
        if (n === t.length || p(t.slice(0, n).join("\n"))) {
            return e;
        }
        const r = t.findIndex((e)=>e.trim() !== "");
        const o = Math.max(n, r + 1);
        if (o < t.length) {
            return t.slice(0, o).join("\n");
        }
        return e;
    }
    function C(t) {
        const n = t.startsWith(e) ? t.slice(e.length) : t;
        return n.trim() === "";
    }
    i.QUOTE_LINE_PREFIX = e;
    i.isInsideCodeBlock = p;
    i.isQuoteLine = _;
    i.prefixPastedLines = f;
    i.quotesTextAfter = g;
    i.firstLineWhitespaceLength = h;
    i.removeTrailingEmptyQuoteLines = y;
}, 66);