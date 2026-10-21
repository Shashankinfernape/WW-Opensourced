__d("WAWebNormalizeStack", [
    "WAUpperFirst",
    "err",
    "escapeRegex"
], function(t, n, r, o, a, i, l) {
    function e(e, t = false) {
        const n = s(e);
        const { message: o, name: a, stack: i } = n;
        const l = i.indexOf("\n");
        const u = i.slice(0, l);
        const c = u.match(new RegExp(`(${r("escapeRegex")(a)}|Error)(:|\$)`));
        if (c != null) {
            if (!t) {
                return i;
            }
            const d = c.index + c[0].length;
            const m = o == null ? -1 : i.indexOf(o, d);
            const p = o == null || m === -1 ? -1 : m + o.length;
            const _ = Math.max(0, l, d, p);
            return i.slice(_).replace(/^\n+/, "");
        }
        if (t) {
            return i;
        }
        const f = i === "" ? "" : `
${i}`;
        if (o != null && o !== "") {
            return `${a}: ${o}${f}`;
        }
        return `${a}${f}`;
    }
    function s(e) {
        const t = typeof e === "object" && typeof e?.name === "string" ? e.name : `Thrown${r("WAUpperFirst")(typeof e)}Error`;
        let n;
        if (e != null && typeof e.message === "string") {
            n = e.message;
        } else if (e === void 0) {
            n = "";
        } else {
            n = String(e);
        }
        let o;
        if (e != null && typeof e.stack === "string") {
            o = e.stack;
        } else {
            const a = r("err")(n);
            a.name = t;
            const i = typeof a.stack === "string" ? a.stack : "";
            const l = i.replace(/^Error:/, `${t}:`);
            o = l.replace(/\n\s+at err\s[^\n]+/, "");
        }
        const s = typeof e === "object" ? babelHelpers.extends({}, e) : null;
        return babelHelpers.extends({}, s, {
            name: t,
            message: n,
            stack: o
        });
    }
    l.normalizeStack = e;
    l.normalizeError = s;
}, 98);