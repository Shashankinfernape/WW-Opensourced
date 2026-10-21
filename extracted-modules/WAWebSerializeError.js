__d("WAWebSerializeError", [
    "WAWebNormalizeStack",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    const e = [
        "message",
        "name",
        "stack"
    ];
    function s(t) {
        const n = o("WAWebNormalizeStack").normalizeError(t);
        const { message, name, stack } = n;
        const s = babelHelpers.objectWithoutPropertiesLoose(n, e);
        const u = o("WAWebNormalizeStack").normalizeStack(t, true);
        const c = r("isEmptyObject")(s) ? "" : ` ${JSON.stringify(s, function(e, t) {
            if (e && typeof t === "object") {
                return String(t);
            }
            return t;
        })}`;
        return `${name} - ${message || ""}${c}
${u}`;
    }
    l.default = s;
}, 98);