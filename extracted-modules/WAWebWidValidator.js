__d("WAWebWidValidator", [
    "$InternalEnum",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum")({
        BROADCAST: "broadcast",
        CALL: "call",
        C_US: "c.us",
        G_US: "g.us",
        LID: "lid",
        MSGR: "msgr",
        S_WHATSAPP_NET: "s.whatsapp.net",
        NEWSLETTER: "newsletter",
        BOT: "bot"
    });
    const u = [
        "status",
        "location",
        "chat"
    ];
    const c = /[1-9][0-9]{9}/;
    const d = /[0-9]{1,2}/;
    const m = /[1-9][0-9]{0,2}/;
    const p = /[1-9][0-9]{0,14}/;
    const _ = /0/;
    const f = /[1-9][0-9]{0,19}/;
    const g = /(?!10)[1-9][0-9]{4,19}/;
    const h = /^([0-9a-f]{18,32})$/i;
    const y = new RegExp(`^(${g.source}[-]${c.source}\$|^${f.source})\$`);
    const C = new RegExp(`^(${f.source}\$|${u.map((e)=>`^${e}\$`).join("|")})`, "i");
    const b = new RegExp(`^(0\$|^${g.source})([.]${_.source})?(?:[:](${d.source}))?\$`);
    const v = new RegExp(`^(${p.source})([.]${_.source})?(?:[:](${d.source}))?\$`);
    const S = new RegExp(`^(${f.source})(?:[:](${m.source}))?\$`);
    const R = new RegExp(`^(${g.source})(?=:99\$)`);
    const L = new RegExp(`^(${p.source})(?=:99\$)`);
    const E = new RegExp(`^(${f.source})\$`);
    const k = new RegExp(`^(${f.source})(?::(0))?\$`);
    function I(e) {
        switch(e){
            case s.BROADCAST:
                return C;
            case s.CALL:
                return h;
            case s.C_US:
                return b;
            case s.G_US:
                return y;
            case s.LID:
                return v;
            case s.MSGR:
                return S;
            case s.S_WHATSAPP_NET:
                return b;
            case s.NEWSLETTER:
                return E;
            case s.BOT:
                return k;
        }
    }
    function T(e) {
        if (e == null) {
            return false;
        }
        const t = e.match(/(.*)@(.*)/);
        if (t == null) {
            return e === "call" || e === "s.whatsapp.net";
        }
        const n = t[1];
        const r = t[2];
        if (r === "hosted") {
            return R.test(n);
        }
        if (r === "hosted.lid") {
            return L.test(n);
        }
        const o = s.cast(r);
        if (o == null) {
            return false;
        }
        const a = I(o);
        return a.test(n);
    }
    function D(t) {
        if (t == null) {
            return null;
        }
        const n = t.match(/(.*)@(.*)/);
        if (n && n[2] === "hosted") {
            const r = n[1];
            const a = r.match(R);
            if (a) {
                return {
                    serverPart: "hosted",
                    userPart: a[1],
                    devicePart: "99"
                };
            }
            return null;
        }
        if (n && n[2] === "hosted.lid") {
            const i = n[1];
            const l = i.match(L);
            if (l) {
                return {
                    serverPart: "hosted.lid",
                    userPart: l[1],
                    devicePart: "99"
                };
            }
            return null;
        }
        if (n == null) {
            if (t === "call" || t === "s.whatsapp.net") {
                return {
                    serverPart: t
                };
            }
            return null;
        }
        const u = n[1];
        const c = s.cast(n[2]);
        if (c == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "validateAndGetParts: Domain not supported"
            ])));
            return null;
        }
        const d = I(c);
        const m = u.match(d);
        if (!m) {
            return null;
        }
        switch(c){
            case s.BROADCAST:
                return {
                    serverPart: s.BROADCAST,
                    userPart: m[1]
                };
            case s.CALL:
                return {
                    serverPart: s.CALL,
                    userPart: m[1]
                };
            case s.G_US:
                return {
                    serverPart: s.G_US,
                    userPart: m[1]
                };
            case s.NEWSLETTER:
                return {
                    serverPart: s.NEWSLETTER,
                    userPart: m[1]
                };
            case s.C_US:
                return {
                    serverPart: s.C_US,
                    userPart: m[1],
                    devicePart: m[3]
                };
            case s.S_WHATSAPP_NET:
                return {
                    serverPart: s.S_WHATSAPP_NET,
                    userPart: m[1],
                    devicePart: m[3]
                };
            case s.LID:
                return {
                    serverPart: s.LID,
                    userPart: m[1],
                    devicePart: m[3]
                };
            case s.MSGR:
                return {
                    serverPart: s.LID,
                    userPart: m[1],
                    devicePart: m[2]
                };
            case s.BOT:
                return {
                    serverPart: s.BOT,
                    userPart: m[1],
                    devicePart: m[2]
                };
        }
        return null;
    }
    l.Domains = s;
    l.validateWid = T;
    l.validateAndGetParts = D;
}, 98);