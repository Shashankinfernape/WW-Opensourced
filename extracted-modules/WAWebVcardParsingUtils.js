__d("WAWebVcardParsingUtils", [
    "WALogger",
    "WATypeUtils",
    "WAWeb-moment",
    "WAWebURLUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "wa-biz-name";
    const u = /X-([^;:]+)(?:;[^:]+)*:(.+)/;
    const c = {
        "X-ABLabel": [
            /X-ABLabel(?:;([^:]+))*:(.+)/,
            1
        ],
        ADR: [
            /ADR(?:;([^:]+))*:;;(.*);(.*);(.*);(.*);(.*)/,
            5
        ],
        "X-ABADR": [
            /X-ABADR(?:;([^:]+))*:(.*)/,
            1
        ],
        URL: [
            /URL(?:;([^:]+))*:(.*)/,
            1
        ],
        EMAIL: [
            /EMAIL(?:;([^:]+))*:(.+)/,
            1
        ],
        TEL: [
            /TEL(?:;([^:]+))*:(.+)/,
            1
        ]
    };
    const d = {
        N: [
            /N(?:;([^:]+))*:([^;]*);([^;]*);([^;]*);([^;]*);(.*)/,
            5
        ],
        FN: [
            /FN(?:;([^:]+))*:(.*)/,
            1
        ],
        NICKNAME: [
            /NICKNAME(?:;([^:]+))*:(.*)/,
            1
        ],
        "X-PHONETIC-FIRST-NAME": [
            /X-PHONETIC-FIRST-NAME(?:;([^:]+))*:(.*)/,
            1
        ],
        "X-PHONETIC-LAST-NAME": [
            /X-PHONETIC-LAST-NAME(?:;([^:]+))*:(.*)/,
            1
        ],
        ORG: [
            /ORG(?:;([^:]+))*:([^;]*)(?:;(.*))*/,
            2
        ],
        TITLE: [
            /TITLE(?:;([^:]+))*:(.*)/,
            1
        ],
        TEL: [
            /TEL(?:;([^:]+))*:(.*)/,
            1
        ],
        PHOTO: [
            /PHOTO(?:;([^:]+))*:(.*)/,
            1
        ],
        BDAY: [
            /BDAY(?:;([^:]+))*:(.*)/,
            1
        ],
        URL: [
            /URL(?:;([^:]+))*:(.+)/,
            1
        ],
        EMAIL: [
            /EMAIL(?:;([^:]+))*:(.+)/,
            1
        ]
    };
    const m = function({ index: e, properties: n, type, value: o }) {
        this.type = type;
        this.index = e;
        this.properties = n || {};
        this.value = o;
    };
    function p(e, t, n) {
        if (!e[t]) {
            e[t] = [];
        }
        e[t].push(n);
    }
    function _(e) {
        const t = {};
        if (!(e == null || e === "")) {
            e.split(";").forEach((e)=>{
                const n = e.split(/=/);
                if (n.length === 1) {
                    const r = n[0];
                    p(t, r.toLowerCase(), true);
                } else if (n.length === 2) {
                    const o = n[0];
                    const a = n[1];
                    p(t, o.toLowerCase(), a.toLowerCase());
                }
            });
        }
        return t;
    }
    function f(e) {
        if (!(e == null || e === "")) {
            return e.replace(/^_\$!<([^>]*)>!\$_$/, "$1").replace(/\\,/, ",").replace(/\\;/, ";").replace(/\\\\/, "\\");
        }
    }
    function g(e) {
        const t = {};
        Object.keys(e).forEach((n)=>{
            const o = e[n] ?? [];
            t[n] = [].concat(o).sort((e, t)=>(e.index ?? 0) - (t.index ?? 0));
        });
        return t;
    }
    function h(e) {
        const t = [
            /-([^-]*)-([^-]*)-([^-]*)/,
            /([^-]*)-([^-]*)-([^-]*)/
        ];
        let n = e;
        for (const o of t){
            const a = e.match(o);
            if (a) {
                const i = !a[1].length || a[1] === "1604";
                const l = i ? "0000" : a[1];
                n = r("WAWeb-moment")(`${l}-${a[2]}-${a[3]}`).format("l");
                if (i) {
                    n = n.replace(/[.,-\/\s]*0000[.,-\/\s]*/, "");
                }
                break;
            }
        }
        return n;
    }
    function y(e) {
        let t = [];
        if (e != null && e.TEL) {
            e.TEL.forEach((e)=>{
                if ((e.properties?.waid?.length ?? 0) > 0) {
                    t = t.concat(e.properties.waid.map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e)));
                }
            });
        }
        return t;
    }
    function C(e) {
        if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) {
            if ((e?.TEL ?? []).length > 0) {
                return null;
            }
            const n = (e?.SERVICE || []).find((e)=>e.type.toLowerCase() === "wa-lid");
            if (n != null && n.value) {
                return o("WAWebWidFactory").createUserLidOrThrow(n.value, "lid");
            }
        }
        return null;
    }
    function b(e) {
        let t = y(e).map((e)=>e);
        const n = C(e);
        if (n != null) {
            t = t.concat(n);
        }
        return t;
    }
    function v(t) {
        const n = t == null ? void 0 : t.replace(/\r?\n|\r/g, "\n").replace(/\n^[ \t]/gm, "").split("\n").filter((e)=>e.trim().length !== 0);
        const r = {};
        const a = {};
        if (!(n == null || n.length < 3)) {
            const i = n[0].trim().toUpperCase();
            const l = n[1].trim().toUpperCase();
            const s = n[n.length - 1].trim().toUpperCase();
            const f = l === "VERSION:2.1" || l === "VERSION:3.0" || l === "VERSION:4.0";
            if (i !== "BEGIN:VCARD" || !f || s !== "END:VCARD") {
                const h = String(i === "BEGIN:VCARD");
                const y = String(f);
                const C = String(s === "END:VCARD");
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[vcard] parse failed hdr=",
                    " ver=",
                    " ftr=",
                    " lines=",
                    ""
                ])), h, y, C, n.length).sendLogs("vcard-fault");
                return;
            }
            for(let b = 2; b < n.length - 1; b++){
                const S = n[b];
                const R = S.match(/item(\d+)\.(.*)/);
                const L = R ? R[2] : S;
                const E = L.match(/([^:;]*)[:;].*/)?.[1];
                if (E != null) {
                    const k = R ? c : d;
                    let I = E;
                    let T = E;
                    let D = {};
                    let x = void 0;
                    if (k[I]) {
                        const $ = k[I];
                        const P = $[0];
                        const N = $[1];
                        const M = L.match(P);
                        if (M) {
                            D = _(M[1]);
                            x = N === 1 ? x = M[2] : M.slice(2, 2 + N);
                        }
                    } else {
                        const w = L.match(u);
                        if (w) {
                            T = "SERVICE";
                            I = w[1];
                            x = w[2];
                            D = {};
                        }
                    }
                    const A = Array.isArray(x) ? x : [
                        x
                    ];
                    if (A.some((e)=>o("WATypeUtils").isString(e) && e.trim())) {
                        if (R) {
                            const F = R[1];
                            if (a[F]) {
                                a[F].fields.push(new m({
                                    index: null,
                                    properties: D,
                                    type: I,
                                    value: x
                                }));
                            } else {
                                a[F] = {
                                    type: I,
                                    index: b,
                                    key: T,
                                    properties: D,
                                    value: x,
                                    fields: []
                                };
                            }
                        } else {
                            p(r, T, new m({
                                index: b,
                                properties: D,
                                type: I,
                                value: x
                            }));
                        }
                    }
                }
            }
            Object.keys(a).forEach((e)=>{
                const t = a[e];
                const { fields: n, index: o, key: i, properties: l, type: s, value: u } = t;
                n.forEach((e)=>{
                    l[e.type] = e.value;
                });
                p(r, i, new m({
                    index: o,
                    properties: l,
                    type: s,
                    value: u
                }));
            });
            return g(r);
        }
    }
    function S(e) {
        if (e) {
            const t = e.PHOTO;
            if (t?.[0] && r("WAWebURLUtils").isData(t[0].value)) {
                return t[0].value;
            }
        }
    }
    function R(e) {
        const t = e.match(/BEGIN:VCARD([^]*?)END:VCARD/g);
        if (t) {
            return r("compactMap")(t, function(e) {
                return v(e);
            });
        }
        return [];
    }
    function L(e) {
        return (e.SERVICE || []).some((e)=>e.type.toLowerCase() === s && e.value);
    }
    l.WA_BIZ_NAME = s;
    l.Field = m;
    l.clean = f;
    l.vcardGetDate = h;
    l.vcardPhoneNumberWids = y;
    l.vcardLidWid = C;
    l.vcardAllWids = b;
    l.parseVcard = v;
    l.vcardThumbnail = S;
    l.parseMultiVcard = R;
    l.vcardIsBiz = L;
}, 98);