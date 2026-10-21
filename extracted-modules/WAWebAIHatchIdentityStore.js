__d("WAWebAIHatchIdentityStore", [
    "WALogger",
    "WATimeUtils",
    "WAWebHatchGating",
    "WAWebLocalStorage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = "hatch-identity";
    const d = /^https:\/\/[a-z0-9.-]+\.whatsapp\.net\//;
    let m = null;
    let p = new Set;
    function _(e) {
        p.add(e);
        return function() {
            p.delete(e);
        };
    }
    function f(e) {
        p.forEach((t)=>{
            t(e);
        });
    }
    function g(t, n) {
        if (t == null || t === "") {
            return null;
        }
        if (!d.test(t)) {
            const r = n ?? "avatar";
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[AIHatchIdentityStore] invalid ",
                " URL, not whatsapp.net"
            ])), r);
            return null;
        }
        return t;
    }
    function h(e) {
        try {
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").setItem(c, JSON.stringify(e));
            }
        } catch (e) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "AIHatchIdentityStore: localStorage persist failed"
            ]))).sendLogs("hatch-identity-storage-persist-failed", {
                sampling: 0.01
            });
        }
    }
    function y() {
        try {
            const e = r("WAWebLocalStorage") == null ? undefined : r("WAWebLocalStorage").getItem(c);
            if (e == null) {
                return null;
            }
            const t = JSON.parse(e);
            if (t != null && typeof t.name === "string" && typeof t.fetchedAt === "number") {
                return {
                    name: t.name,
                    secureImage: C(t.secureImage),
                    secureVideoVariants: b(t.secureVideoVariants),
                    fetchedAt: t.fetchedAt
                };
            }
        } catch (e) {}
        return null;
    }
    function C(e) {
        if (e == null || typeof e !== "object") {
            return null;
        }
        const t = e;
        const n = v(t.mediaType);
        const r = S(t.directPath);
        const o = S(t.mediaKey);
        const a = S(t.encFilehash);
        const i = S(t.filehash);
        if (n == null || r == null || o == null || a == null || i == null) {
            return null;
        }
        return {
            directPath: r,
            mediaKey: o,
            encFilehash: a,
            filehash: i,
            mediaType: n,
            mimeType: S(t.mimeType),
            sidecarB64: S(t.sidecarB64),
            fileLength: typeof t.fileLength === "number" ? t.fileLength : null,
            staticUrl: g(S(t.staticUrl), "secure media")
        };
    }
    function b(secureVideoVariants) {
        if (secureVideoVariants == null || typeof secureVideoVariants !== "object") {
            return null;
        }
        const t = secureVideoVariants;
        const n = {};
        let r = false;
        for (const o of Object.keys(t)){
            const a = C(t[o]);
            if (a != null) {
                n[o] = a;
                r = true;
            }
        }
        if (r) {
            return n;
        }
        return null;
    }
    function v(mediaType) {
        if (mediaType === "image" || mediaType === "video") {
            return mediaType;
        }
        return null;
    }
    function S(e) {
        if (typeof e === "string" && e !== "") {
            return e;
        }
        return null;
    }
    function R(e) {
        const staticUrl = g(e.staticUrl, "secure media");
        if (staticUrl === e.staticUrl) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            staticUrl
        });
    }
    function L(e) {
        if (e == null) {
            return null;
        }
        const t = {};
        for (const n of Object.keys(e)){
            t[n] = R(e[n]);
        }
        return t;
    }
    function E(e) {
        const r = {
            name: e.name ?? "",
            secureImage: e.secureImage != null ? R(e.secureImage) : null,
            secureVideoVariants: L(e.secureVideoVariants ?? null),
            fetchedAt: o("WATimeUtils").unixTime()
        };
        m = r;
        h(r);
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "AIHatchIdentityStore: identity applied from push"
        ])));
        f(r);
    }
    function k() {
        if (m == null) {
            m = y();
        }
        return m;
    }
    function I() {
        const e = k();
        return {
            name: e?.name || o("WAWebHatchGating").getHatchBotName(),
            profileThumb: o("WAWebHatchGating").getHatchBotProfileThumb()
        };
    }
    function T() {
        m = null;
        p = new Set;
        try {
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").removeItem(c);
            }
        } catch (e) {}
    }
    l.subscribeToIdentityChanges = _;
    l.validateWhatsAppNetUrl = g;
    l.applyHatchIdentity = E;
    l.getCachedHatchIdentity = k;
    l.getHatchInitialIdentity = I;
    l.__resetCacheForTesting = T;
}, 98);