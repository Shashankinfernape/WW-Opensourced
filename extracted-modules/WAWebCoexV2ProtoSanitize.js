__d("WAWebCoexV2ProtoSanitize", [
    "WAProtoCompile",
    "WAProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebLidMigrationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebStructuredClone",
    "WAWebWid",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = 32;
    function s(e) {
        const t = r("WAWebStructuredClone")(e);
        u({
            depth: 0,
            node: t,
            spec: o("WAWebProtobufsE2E.pb").MessageSpec
        });
        return t;
    }
    function u({ depth, node, spec }) {
        if (depth > e) {
            throw r("err")("coexv2 relay sanitize exceeded max nesting depth");
        }
        const l = o("WAProtoCompile").compileSpec(spec);
        const l_meta = l.meta;
        for(let u = l.names, p = l.types, _ = 0; _ < u.length; _++){
            const f = u[_];
            const g = p[_];
            const h = Reflect.get(node, f);
            if (h != null) {
                if (o("WAProtoUtils").isMessageType(g)) {
                    c({
                        depth: depth + 1,
                        repeated: o("WAProtoUtils").isRepeatedField(g),
                        spec: l_meta[_],
                        value: h
                    });
                    continue;
                }
                if (o("WAProtoUtils").isStringType(g)) {
                    if (o("WAProtoUtils").isRepeatedField(g)) {
                        if (Array.isArray(h)) {
                            Reflect.set(node, f, d(h));
                        }
                        continue;
                    }
                    const y = m(h);
                    if (y == null) {
                        Reflect.deleteProperty(node, f);
                    } else {
                        Reflect.set(node, f, y);
                    }
                }
            }
        }
    }
    function c({ depth, repeated, spec, value }) {
        if (!repeated) {
            if (typeof value === "object" && value != null) {
                u({
                    depth,
                    node: value,
                    spec
                });
            }
            return;
        }
        if (Array.isArray(value)) {
            for (const a of value){
                if (typeof a === "object" && a != null) {
                    u({
                        depth,
                        node: a,
                        spec
                    });
                }
            }
        }
    }
    function d(e) {
        const t = [];
        for (const n of e){
            const r = p(n);
            if (r != null) {
                t.push(r);
            } else if (!_(n)) {
                t.push(n);
            }
        }
        return t;
    }
    function m(e) {
        const t = p(e);
        if (t != null) {
            return t;
        }
        if (!_(e)) {
            return e;
        }
    }
    function p(e) {
        const t = f(e);
        if (t == null || !t.isUser() || t.isBot() || t.isLid()) {
            return null;
        }
        const n = o("WAWebLidMigrationUtils").toLid(t);
        if (n != null) {
            return o("WAWebE2EProtoUtils").encodeJid(n);
        }
        return null;
    }
    function _(e) {
        const t = f(e);
        return t != null && t.isUser() && !t.isBot() && !t.isLid();
    }
    function f(e) {
        if (typeof e !== "string" || !r("WAWebWid").isWid(e)) {
            return null;
        }
        try {
            return o("WAWebWidFactory").createWid(e);
        } catch (e) {
            return null;
        }
    }
    l.sanitizeCoexV2RelayMessage = s;
}, 98);