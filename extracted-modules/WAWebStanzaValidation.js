__d("WAWebStanzaValidation", [
    "WALogger",
    "WAWap",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    function C(t) {
        try {
            b(t);
            S(t);
            k(t);
            T(t);
            D(t);
            x(t);
            P(t);
            N(t);
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[stanza-validation]"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("stanza-validation-error");
        }
    }
    function b(e) {
        if (e.tag === "receipt") {
            const t = e.attrs.type;
            const n = t != null ? o("WAWap").decodeAsString(t) : "unknown";
            if (n === "sender" && e.attrs.recipient == null && e.attrs.participant == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[stanza-validation] sender rcpt: no recipient/participant"
                ]))).sendLogs("stanza-validation-sender-receipt-without-participant-nor-recipient");
            }
            const r = e.attrs.recipient;
            const a = e.attrs.to;
            if (r != null && a != null) {
                const i = o("WAWap").decodeAsString(r);
                const l = o("WAWap").decodeAsString(a);
                const d = R(i);
                const m = R(l);
                if (l.includes("@lid") && i.includes("@s.whatsapp.net")) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[stanza-validation] ",
                        " rcpt: pn recipient=",
                        " to=",
                        ""
                    ])), n, d, m).sendLogs(`stanza-validation-${n}-receipt-pn-recipient`);
                } else if (l.includes("@s.whatsapp.net") && i.includes("@lid")) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[stanza-validation] ",
                        " rcpt: pn to=",
                        " recipient=",
                        ""
                    ])), n, m, d).sendLogs(`stanza-validation-${n}-receipt-pn-to`);
                }
            }
        }
    }
    function v(e) {
        if (!Array.isArray(e.content)) {
            return [];
        }
        const t = e.content.find((e)=>e?.tag === "participants");
        const n = t?.content;
        if (!Array.isArray(n)) {
            return [];
        }
        const r = [];
        n.forEach((e)=>{
            if (e?.tag === "to" && e.attrs?.jid != null) {
                r.push(o("WAWap").decodeAsString(e.attrs.jid));
            }
        });
        return r;
    }
    function S(e) {
        if (e.tag === "message") {
            const t = e.attrs.to;
            if (!(t == null || !o("WAWap").decodeAsString(t).endsWith("@broadcast"))) {
                const n = v(e);
                if (n.length !== 0) {
                    const r = [];
                    let a = false;
                    let i = 0;
                    n.forEach((e)=>{
                        if (!e.includes("@lid")) {
                            r.push(e);
                            try {
                                const t = o("WAWebWidFactory").asUserWidOrThrow(o("WAWebWidFactory").createWid(e));
                                if (o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                                    a = true;
                                }
                                if (o("WAWebLidMigrationUtils").toLid(t) != null) {
                                    i++;
                                }
                            } catch (e) {}
                        }
                    });
                    if (r.length > 0) {
                        const l = r.map(R).join(",");
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[stanza-validation] broadcast pn-fanout: ",
                            "/",
                            " <to> nodes using PN in broadcast ",
                            ", includesSelfPn=",
                            ", pnWithLid=",
                            ", pnWithoutLid=",
                            ": ",
                            ""
                        ])), r.length, n.length, o("WAWap").decodeAsString(t), a, i, r.length - i, l).sendLogs("stanza-validation-broadcast-pn-fanout-to-node");
                    }
                }
            }
        }
    }
    function R(e) {
        try {
            return o("WAWebWidFactory").createWid(e).toLogString();
        } catch (t) {
            return e;
        }
    }
    function L(e) {
        if (e.tag !== "message" || !Array.isArray(e.content)) {
            return false;
        }
        return e.content.some((e)=>e?.tag === "enc" && e.attrs?.count != null);
    }
    function E(e) {
        const t = o("WAWebWidValidator").validateAndGetParts(e);
        if (t == null || t.userPart == null) {
            return false;
        }
        const n = o("WAWebWidFactory").createWid(e);
        return o("WAWebLidMigrationUtils").shouldHaveAccountLid(n) && !n.isLid() && !n.isHostedLid();
    }
    function k(e) {
        if (!(e.tag === "receipt" || e.tag === "ack")) {
            const t = e.attrs.to;
            if (t != null) {
                const n = o("WAWap").decodeAsString(t);
                if (E(n)) {
                    if (e.attrs.category === "peer") {
                        const r = R(n);
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[stanza-validation] pnless-stanza: peer <",
                            "> to=",
                            " is PN"
                        ])), e.tag, r).sendLogs(`stanza-validation-pnless-to-pn-leak-peer-${e.tag}`);
                        return;
                    }
                    if (!L(e)) {
                        const a = R(n);
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[stanza-validation] pnless-stanza: <",
                            "> to=",
                            " is PN"
                        ])), e.tag, a).sendLogs(`stanza-validation-pnless-to-pn-leak-${e.tag}`);
                    }
                }
            }
        }
    }
    function I(e) {
        if (e.tag !== "message") {
            return null;
        }
        const t = e.attrs.to;
        if (t == null) {
            return null;
        }
        const n = o("WAWap").decodeAsString(t);
        const r = o("WAWebWidValidator").validateAndGetParts(n);
        if (r == null || r.userPart == null) {
            return null;
        }
        const a = o("WAWebWidFactory").createWid(n);
        if (a.isUser()) {
            return n;
        }
        return null;
    }
    function T(e) {
        if (I(e) != null) {
            const t = v(e);
            const n = t.filter(E);
            if (n.length !== 0) {
                const r = n.map(R).join(",");
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[stanza-validation] pnless-stanza: <",
                    "> participant(s) using PN: ",
                    ""
                ])), e.tag, r).sendLogs("stanza-validation-pnless-participant-pn-leak");
            }
        }
    }
    function D(e) {
        if (e.tag === "message") {
            const t = v(e);
            if (t.length !== 0) {
                let n = 0;
                let r = 0;
                const a = [];
                t.forEach((e)=>{
                    if (e.includes("@lid")) {
                        n++;
                    } else if (e.includes("@s.whatsapp.net")) {
                        r++;
                        a.push(e);
                    }
                });
                if (n > 0 && r > 0) {
                    const i = a.map(R).join(",");
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[stanza-validation] mixed-participants: <message> has both LID (",
                        ") and PN (",
                        ") participants: ",
                        ""
                    ])), n, r, i).sendLogs("stanza-validation-mixed-addressing-participants");
                }
            }
        }
    }
    function x(e) {
        const t = I(e);
        if (t != null) {
            let n;
            if (t.endsWith("@lid")) {
                n = "@s.whatsapp.net";
            } else if (t.endsWith("@s.whatsapp.net")) {
                n = "@lid";
            } else {
                return;
            }
            const r = v(e).filter((e)=>e.endsWith(n));
            if (r.length !== 0) {
                const a = R(t);
                const i = r.map(R).join(",");
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[stanza-validation] 1to1-mixed-domain: <message> to=",
                    " but participant(s) on different domain: ",
                    ""
                ])), a, i).sendLogs("stanza-validation-mixed-domain-1to1-participants");
            }
        }
    }
    function $(e, t) {
        const n = e?.content;
        if (Array.isArray(n)) {
            return n.find((e)=>e.tag === t);
        }
        return null;
    }
    function P(e) {
        if (e.tag === "iq") {
            const t = e.attrs.xmlns;
            const n = e.attrs.type;
            if (!(t == null || o("WAWap").decodeAsString(t) !== "privacy" || n == null || o("WAWap").decodeAsString(n) !== "get")) {
                const r = $(e, "privacy");
                if (r != null) {
                    const a = r.attrs.addressing_mode;
                    if (!(a != null && o("WAWap").decodeAsString(a) === "lid")) {
                        const i = $(r, "list");
                        const l = i?.attrs.value;
                        if (!(l == null || o("WAWap").decodeAsString(l) !== "contact_blacklist")) {
                            const s = i?.attrs.name;
                            const u = s != null ? o("WAWap").decodeAsString(s) : "unknown";
                            o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                '[stanza-validation] privacy-list-pn-query: <iq> privacy list "',
                                '" fetched using legacy PN addressing'
                            ])), u).sendLogs("stanza-validation-privacy-list-pn-query", {
                                sampling: 0.01
                            });
                        }
                    }
                }
            }
        }
    }
    function N(e) {
        if (e.tag === "iq") {
            const t = e.attrs.xmlns;
            const n = e.attrs.type;
            if (!(t == null || o("WAWap").decodeAsString(t) !== "usync" || n == null || o("WAWap").decodeAsString(n) !== "get")) {
                const r = $(e, "usync");
                const a = $($(r, "query"), "contact");
                if (a != null) {
                    const i = a.attrs.addressing_mode;
                    if (!(i != null && o("WAWap").decodeAsString(i) === "lid")) {
                        const l = r?.attrs.context;
                        const s = l != null ? o("WAWap").decodeAsString(l) : "unknown";
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[stanza-validation] usync-contact-pn-query: <iq> usync contact protocol using PN addressing (context=",
                            ")"
                        ])), s).sendLogs("stanza-validation-usync-contact-pn-query", {
                            sampling: 0.01
                        });
                    }
                }
            }
        }
    }
    l.validateSentStanza = C;
}, 98);