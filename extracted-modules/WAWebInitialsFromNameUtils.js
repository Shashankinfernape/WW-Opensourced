__d("WAWebInitialsFromNameUtils", [
    "$InternalEnum",
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "ARABIC",
        "LATIN",
        "HEBREW",
        "THAI",
        "GUJARATI",
        "DEVANAGARI",
        "CYRILLIC",
        "BENGALI",
        "HAN"
    ]);
    const s = new RegExp(/[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]/);
    const u = new RegExp(/[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u0249\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/);
    const c = new RegExp(/[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/);
    const d = new RegExp(/[\u0E01-\u0E3A\u0E40-\u0E5B]/);
    const m = new RegExp(/[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/);
    const p = new RegExp(/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]/);
    const _ = new RegExp(/[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]/);
    const f = new RegExp(/[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/);
    const g = new RegExp(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]/);
    const h = new Map([
        [
            e.ARABIC,
            s
        ],
        [
            e.LATIN,
            u
        ],
        [
            e.HEBREW,
            c
        ],
        [
            e.THAI,
            d
        ],
        [
            e.GUJARATI,
            m
        ],
        [
            e.DEVANAGARI,
            p
        ],
        [
            e.CYRILLIC,
            _
        ],
        [
            e.BENGALI,
            f
        ],
        [
            e.HAN,
            g
        ]
    ]);
    const y = new RegExp(/[\u093A\u093B\u093E-\u094C\u094E\u094F\u0955-\u0957\u0962\u0963]/);
    const C = new RegExp(/[\u09BE-\u09CC\u09E2\u09E3]/);
    const b = new RegExp(/[\u0ABE-\u0ACC\u0AE2\u0AE3]/);
    const v = new RegExp(/[\u0E30-\u0E59]/);
    const S = D([
        s,
        d,
        m,
        p,
        f
    ]);
    const R = D([
        p,
        f,
        m
    ]);
    const L = D(Array.from(h.values()));
    function E(e) {
        return Array.from(h.keys()).find((t)=>{
            const n = h.get(t);
            return n?.test(e);
        });
    }
    function k(firstName) {
        return S.test(firstName);
    }
    function I(e) {
        return g.test(e);
    }
    function T(e) {
        return L.test(e);
    }
    function D(e) {
        return new RegExp(e.map((e)=>e.source).join("|"));
    }
    function x(e) {
        let t = false;
        if (e.firstName != null) {
            t = k(e.firstName);
        }
        let showFirstNameInitial = e.firstName != null && e.firstName !== "" && !I(e.firstName);
        const showLastNameInitial = t !== true && e.lastName != null && e.lastName !== "";
        if (e.firstName != null && e.firstName !== "" && g.test(e.firstName) && !showLastNameInitial) {
            showFirstNameInitial = true;
        }
        const o = e.lastName === "" && e.firstName === "";
        const showPushnameInitial = showFirstNameInitial !== true && showLastNameInitial !== true && !o;
        return {
            showFirstNameInitial,
            showLastNameInitial,
            showPushnameInitial
        };
    }
    function $(shortName, name, n) {
        const a = shortName?.trim();
        let i = null;
        if (a != null && name != null && a?.length > 0) {
            i = name.trim().replace(a, "").trim();
        } else {
            i = name?.trim();
        }
        const l = r("WAWebL10N").getFullLocale();
        const s = a?.toLocaleUpperCase(l);
        const lastName = i?.toLocaleUpperCase(l);
        const pushname = n?.toLocaleUpperCase(l);
        return {
            firstName: s,
            lastName,
            pushname
        };
    }
    function P(e) {
        const t = e.charAt(0);
        const n = e.charAt(1);
        let r = null;
        let o = null;
        if (p.test(t)) {
            r = p;
            o = y;
        } else if (f.test(t)) {
            r = f;
            o = C;
        } else if (m.test(t)) {
            r = m;
            o = b;
        }
        if (!(r == null || o == null)) {
            if (n != null && r.test(t) && !o.test(t) && o.test(n)) {
                return t + n;
            }
            if (r.test(t)) {
                return t;
            }
            return null;
        }
    }
    function N(e, t) {
        const n = e.charAt(0);
        if (R.test(e)) {
            return P(e);
        }
        if (n != null && d.test(n) && v.test(n)) {
            const r = e == null ? undefined : e.slice(1).trim();
            const o = r?.charAt(0);
            if (T(o) && !v.test(o)) {
                return o;
            }
            return null;
        }
        if (I(e) && !t) {
            return e.slice(0, 2);
        }
        if (T(n)) {
            return n;
        }
        return null;
    }
    function M(e) {
        const t = $(e.shortName, e.name, e.pushname);
        const n = x(t);
        let firstInitial = null;
        let secondInitial = null;
        const t_firstName = t.firstName;
        const i = n.showFirstNameInitial === true && n.showLastNameInitial === false;
        if (n.showFirstNameInitial === true && t_firstName != null) {
            firstInitial = N(t_firstName, i);
        }
        if (n.showLastNameInitial === true && t.lastName != null) {
            secondInitial = N(t.lastName, i);
        }
        if (n.showPushnameInitial === true && t.pushname != null) {
            firstInitial = N(t.pushname, true);
            secondInitial = null;
        }
        if (firstInitial != null && secondInitial != null && E(firstInitial) !== E(secondInitial)) {
            secondInitial = null;
        }
        return {
            firstInitial,
            secondInitial
        };
    }
    function w(e) {
        return M({
            shortName: e?.shortName,
            name: e?.name,
            pushname: e?.pushname
        });
    }
    function A(e) {
        return M({
            name: e.name,
            shortName: e.name.trim().split(" ")[0],
            pushname: null
        });
    }
    l.InitialsAlphabets = e;
    l.supportedAlphabetsMap = h;
    l.getInitialsFromNames = M;
    l.getInitialsFromContact = w;
    l.getInitialsFromAdminProfile = A;
}, 98);