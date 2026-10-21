__d("WAWebWidFactory", [
    "WALogger",
    "WATypeUtils",
    "WAWebWid",
    "WAWebWidError",
    "WAWebWidStore",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 99;
    const m = "lid";
    const p = "hosted";
    const _ = "hosted.lid";
    function f(t) {
        if (typeof t !== "string") {
            if (t instanceof r("WAWebWid")) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createWid: ",
                    " is not a string: Wid"
                ])), t.toLogString()).sendLogs("createWid-not-a-string-wid");
            } else {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createWid: ",
                    " is not a string: ",
                    ""
                ])), t, typeof t).sendLogs("createWid-not-a-string");
                throw new (o("WAWebWidError")).InvalidWidError(`createWid: expected string, got ${typeof t}`);
            }
        }
        if (r("WAWebWid").isHosted(t)) {
            return r("nullthrows")(g(t));
        }
        let n = r("WAWebWidStore").cache[t];
        if (n) {
            return n;
        }
        let a = t;
        a = t.replace("@s.whatsapp.net", "@c.us");
        n = r("WAWebWidStore").cache[a];
        if (!n) {
            n = new (r("WAWebWid"))(a, {
                intentionallyUsePrivateConstructor: true
            });
            r("WAWebWidStore").cache[a] = n;
        }
        return n;
    }
    function g(e) {
        if (r("WAWebWidStore").cache[e]) {
            const t = r("WAWebWidStore").cache[e];
            return t;
        }
        if (!(o("WATypeUtils").isString(e) && (e.endsWith("@hosted") || e.endsWith("@hosted.lid")))) {
            throw r("err")("Hosted jid create called with wrong domain type");
        }
        const n = new (r("WAWebWid"))(e, {
            intentionallyUsePrivateConstructor: true
        });
        if (!n.isHosted()) {
            throw r("err")("createHostedDeviceWidOrThrow is called with invalid input");
        }
        const a = n;
        r("WAWebWidStore").cache[e] = a;
        return a;
    }
    function h(e) {
        if (e instanceof r("WAWebWid")) {
            return e;
        }
        return f(typeof e === "string" ? e : e._serialized);
    }
    function y(e) {
        if (e) {
            return !!(r("WAWebWid").isWid(e) || e && typeof e === "object" && r("WAWebWid").isWid(e._serialized));
        }
        return false;
    }
    function C(e, t, n = false) {
        const r = e.split("@");
        const o = r[0];
        const a = r[1];
        const i = a === void 0 ? "c.us" : a;
        if (n === true) {
            return S(o, i, t);
        }
        return v(o, i, t);
    }
    function b(e) {
        const t = e.split("@");
        const n = t[0];
        const r = t[1];
        const o = r === void 0 ? "c.us" : r;
        return E(n, o);
    }
    function v(e, t, n) {
        if (n === d) {
            return S(e, t, n);
        }
        return L(`${e}:${n}@${t}`);
    }
    function S(e, t, n) {
        return g(`${e}:${n}@${t.includes(m) ? _ : p}`);
    }
    function R(e) {
        if (!e.isUser()) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "createDeviceWidFromWidOrThrow: invalid device jid ",
                ""
            ])), e);
            throw r("err")("createDeviceWidFromWidOrThrow is called with invalid user string");
        }
        return e;
    }
    function L(e) {
        const t = f(e);
        return R(t);
    }
    function E(e, t) {
        let n;
        if (o("WATypeUtils").isString(e) && (e.endsWith("@c.us") || e.endsWith("@s.whatsapp.net") || e.endsWith("@lid") || e.endsWith("@bot"))) {
            n = e;
        } else {
            let a;
            if (t == null || t === "hosted") {
                a = "c.us";
            } else if (t === "hosted.lid") {
                a = "lid";
            } else {
                a = t;
            }
            n = `${e}@${a}`;
        }
        n = f(n);
        if (n.device == null || n.device === 0) {
            return n;
        }
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "createUserWidOrThrow: ",
            " is not a valid user jid"
        ])), e);
        throw r("err")("createUserWidOrThrow is called with invalid user string");
    }
    function k(e, t) {
        return T(E(e, t));
    }
    function I(e) {
        if (!e.isUser()) {
            throw r("err")("asUserWidOrThrow: wid is not a user wid");
        }
        if (e.device == null || e.device === 0) {
            return e;
        }
        return E(e.user, e.server);
    }
    function T(e) {
        const t = I(e);
        if (!t.isLid()) {
            throw r("err")(`asUserLidOrThrow: userWid is not a lid: ${t.toLogString()}`);
        }
        return t;
    }
    function D(e) {
        if (e.isUser()) {
            return I(e);
        }
        return e;
    }
    function x(e) {
        if (e.isUser()) {
            throw r("err")("asGroupWidOrThrow: wid is a user wid");
        }
        return e;
    }
    function $(e) {
        if (e.isNewsletter()) {
            return e;
        }
        throw r("err")("asNewsletterWidOrThrow: wid is not a newsletter wid");
    }
    function P(e) {
        if (e.isBot()) {
            return e;
        }
        throw r("err")("asBotWidOrThrow: wid is not a bot wid");
    }
    l.createWid = f;
    l.createHostedDeviceWidOrThrow = g;
    l.createWidFromWidLike = h;
    l.isWidlike = y;
    l.createDeviceWidFromDeviceListPk = C;
    l.createUserWidFromDeviceListPk = b;
    l.createDeviceWidFromUserAndDevice = v;
    l.createDeviceWidFromWidOrThrow = R;
    l.createDeviceWidOrThrow = L;
    l.createUserWidOrThrow = E;
    l.createUserLidOrThrow = k;
    l.asUserWidOrThrow = I;
    l.asUserLidOrThrow = T;
    l.asChatWid = D;
    l.asGroupWidOrThrow = x;
    l.asNewsletterWidOrThrow = $;
    l.asBotWidOrThrow = P;
}, 98);