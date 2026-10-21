__d("WAWebVcardUtils", [
    "fbt",
    "WATypeUtils",
    "WAWebFbtIntlList",
    "WAWebVcardParsingUtils",
    "err"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const a = e.ORG?.[0];
        const i = e.TITLE?.[0];
        if (a && Array.isArray(a.value) && a.value.length > 0) {
            let l;
            let s = null;
            if (i != null && i.value) {
                s = `${i.value}`.trim();
            }
            const u = a.value;
            const c = u[0];
            const d = babelHelpers.arrayLikeToArray(u).slice(1);
            d.push(c);
            const m = r("WAWebFbtIntlList")(d.map((e)=>{
                if (o("WATypeUtils").isString(e)) {
                    return e.trim();
                }
                return "";
            }).filter((e)=>e.length), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            return (s || "") + ((l = s) != null && l.length && m.length ? " - " : "") + m;
        }
        return "";
    }
    function u(e) {
        const n = {
            jabber: s._("Jabber"),
            "skype-username": s._("Skype"),
            skype: s._("Skype"),
            msn: s._("Windows Live"),
            aim: s._("AIM"),
            yahoo: s._("Yahoo"),
            icq: s._("ICQ"),
            "wa-biz-description": s._("Description"),
            [o("WAWebVcardParsingUtils").WA_BIZ_NAME]: s._("Business name")
        };
        let r = e.properties["X-ABLabel"] || n[e.type.toLowerCase()];
        if (r != null && r !== "") {
            return o("WAWebVcardParsingUtils").clean(String(r));
        }
        const a = {
            TEL: [
                [
                    [
                        "cell"
                    ],
                    s._("Mobile")
                ],
                [
                    [
                        "iphone"
                    ],
                    s._("iPhone")
                ],
                [
                    [
                        "main"
                    ],
                    s._("Main")
                ],
                [
                    [
                        "home",
                        "fax"
                    ],
                    s._("Home fax")
                ],
                [
                    [
                        "work",
                        "fax"
                    ],
                    s._("Work fax")
                ],
                [
                    [
                        "home"
                    ],
                    s._("Home")
                ],
                [
                    [
                        "work"
                    ],
                    s._("Work")
                ],
                [
                    [
                        "pager"
                    ],
                    s._("Pager")
                ],
                [
                    [],
                    s._("Home")
                ]
            ],
            EMAIL: [
                [
                    [
                        "home"
                    ],
                    s._("Home")
                ],
                [
                    [
                        "work"
                    ],
                    s._("Work")
                ],
                [
                    [
                        "internet"
                    ],
                    s._("Email")
                ]
            ],
            URL: [
                [
                    [
                        "home"
                    ],
                    s._("Home")
                ],
                [
                    [
                        "work"
                    ],
                    s._("Work")
                ]
            ],
            ADR: [
                [
                    [
                        "home"
                    ],
                    s._("Home")
                ],
                [
                    [
                        "work"
                    ],
                    s._("Work")
                ]
            ]
        };
        r = e.type;
        const i = a[e.type];
        if (i != null) {
            const c = new Set(e.properties?.type?.map(function(e) {
                return e.toLowerCase();
            }) ?? []);
            for (const [m, p] of i){
                if (new Set(m).difference(c).size === 0) {
                    r = p;
                    break;
                }
            }
        }
        return r;
    }
    function c(e) {
        return d(e.map((e)=>e.displayName)).toString();
    }
    function d(e) {
        const t = e.find((e)=>!!e);
        if (e.length) {
            if (t == null || t === "") {
                return s._("_j{\"*\":\"{count} contacts\",\"_1\":\"1 contact\"}", [
                    s._plural(e.length, "count")
                ]);
            }
            if (e.length === 1) {
                return t;
            }
            return s._("_j{\"*\":\"{contactName} and {count} other contacts\",\"_1\":\"{contactName} and 1 other contact\"}", [
                s._plural(e.length - 1, "count"),
                s._param("contactName", t)
            ]);
        }
        return s._("No contacts");
    }
    function m(e) {
        if (e.length === 0) {
            throw r("err")("No vcards provided");
        }
        if (e.length === 1) {
            return e[0];
        }
        return {
            displayName: c(e),
            vcard: e.map((e)=>e.vcard).join("\n"),
            isMultiVcard: true
        };
    }
    l.vcardGetOrganizationString = e;
    l.vcardGetType = u;
    l.getNameString = c;
    l.getNameStringFromNames = d;
    l.mergeVcards = m;
}, 226);