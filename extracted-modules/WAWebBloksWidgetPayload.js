__d("WAWebBloksWidgetPayload", [], function(t, n, r, o, a, i) {
    const e = "im_a2ui";
    function l(t) {
        return t?.type === e;
    }
    function s(e) {
        const t = c(e, "title");
        if (t == null) {
            return null;
        }
        const n = t.trim();
        if (n === "") {
            return null;
        }
        return n;
    }
    function u(e) {
        return c(e, "type");
    }
    function c(e, t) {
        if (e == null || e === "") {
            return null;
        }
        try {
            const n = JSON.parse(e);
            if (n == null || typeof n !== "object" || Array.isArray(n)) {
                return null;
            }
            const r = babelHelpers.extends({}, n);
            const o = r[t];
            if (typeof o === "string" && o.length > 0) {
                return o;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    i.isA2UIBloksWidget = l;
    i.readA2UITitle = s;
    i.readA2UIComponentType = u;
}, 66);