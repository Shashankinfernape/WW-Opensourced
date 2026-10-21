__d("WAWebAuraRingtoneDownloader", [
    "WALogger",
    "WAWebAuraGating",
    "WAWebAuraRingtonePrefs",
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSource",
    "WAWebWamEnumWpbujSurface",
    "asyncToGeneratorRuntime",
    "cr:19900",
    "fflate"
], function(t, n, r, o, a, i, l) {
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
    let C;
    let b;
    let v;
    let S;
    const R = "https://static.whatsapp.net/wa/static/downloadable?category=ringtone&id=aura-ringtones";
    const L = 1;
    const E = `aura-ringtones-v${String(L)}`;
    const k = new Map;
    let I = null;
    let T = false;
    function D() {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield caches.open(E);
                const t = yield e.match(R);
                if (t != null) {
                    return yield t.arrayBuffer();
                }
                return null;
            } catch (e) {
                return null;
            }
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = E) {
            try {
                yield caches.delete(e);
            } catch (e) {}
        });
        return P.apply(this, arguments);
    }
    function N() {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield D();
            if (e != null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] loaded ringtone zip from cache, size: ",
                    ""
                ])), e.byteLength);
                return e;
            }
            let t;
            try {
                t = yield window.fetch(R);
            } catch (e) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Error fetching ringtone zip"
                ])));
                return null;
            }
            if (!t.ok) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Failed to fetch ringtone zip: ",
                    ""
                ])), t.status);
                return null;
            }
            try {
                const n = yield caches.open(E);
                yield n.put(R, t.clone());
            } catch (error) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Failed to write ringtone zip to cache: ",
                    ""
                ])), String(error));
            }
            try {
                return yield t.arrayBuffer();
            } catch (error) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Failed to read ringtone zip body: ",
                    ""
                ])), String(error));
                return null;
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        const t = e.split(/[/\\]/);
        return t[t.length - 1];
    }
    function A(e) {
        const t = e.lastIndexOf(".");
        if (t > 0) {
            return e.substring(0, t);
        }
        return e;
    }
    const F = new Map([
        [
            ".m4r",
            "audio/mp4"
        ],
        [
            ".m4a",
            "audio/mp4"
        ],
        [
            ".ogg",
            "audio/ogg"
        ],
        [
            ".mp3",
            "audio/mpeg"
        ]
    ]);
    function O(e) {
        for (const [n, r] of F){
            if (e.endsWith(n)) {
                return r;
            }
        }
        return null;
    }
    function B(t, n, r) {
        const a = w(t);
        const displayName = A(a);
        const l = a.toLowerCase();
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Processing ",
            ": ",
            " bytes"
        ])), t, n.length);
        const u = k.get(l);
        if (u != null) {
            URL.revokeObjectURL(u.blobUrl);
        }
        const c = new Blob([
            n
        ], {
            type: r
        });
        const blobUrl = URL.createObjectURL(c);
        k.set(l, {
            displayName,
            id: l,
            blobUrl
        });
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Cached ringtone: ",
            ""
        ])), l);
    }
    function W(e) {
        const t = new Uint8Array(e);
        const n = o("fflate").unzipSync(t);
        const r = Object.keys(n);
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Extracted ",
            " files from zip"
        ])), r.length);
        for (const a of r){
            if (!(a.startsWith("__MACOSX") || a.endsWith("/"))) {
                const i = O(a);
                if (i != null) {
                    B(a, n[a], i);
                }
            }
        }
    }
    function q() {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!r("WAWebAuraGating").isRingtonesBenefitActive()) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] skip download - not premium"
                ])));
                return;
            }
            if (I != null) {
                return I;
            }
            if (T && o("WAWebAuraRingtonePrefs").getStoredPackVersion() === String(L)) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] skip download - v",
                    " loaded"
                ])), L);
                return;
            }
            I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
                    benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.RINGTONES,
                    surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.RINGTONE,
                    source: o("WAWebWamEnumWpbujSource").WPBUJ_SOURCE.APP_WIDE
                });
                const actionTarget = `aura-ringtones-v${String(L)}`;
                const r = o("WAWebAuraRingtonePrefs").getStoredPackVersion();
                if (r != null && r !== String(L)) {
                    G();
                    yield $(`aura-ringtones-v${r}`);
                }
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Starting premium ringtone download"
                ])));
                const a = yield N();
                if (a == null) {
                    o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[aura_ringtones] Failed to download ringtone zip"
                    ])));
                    e.logDownload({
                        success: false,
                        actionTarget,
                        errorMessage: "fetch_failed"
                    });
                    return;
                }
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Got zip file, size: ",
                    ""
                ])), a.byteLength);
                try {
                    W(a);
                    if (n("cr:19900") != null) {
                        n("cr:19900").cacheRingtonesUrlToNative(R);
                    }
                    T = true;
                    o("WAWebAuraRingtonePrefs").savePackVersion(L);
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[aura_ringtones] download done, cached ",
                        ""
                    ])), k.size);
                    e.logDownload({
                        success: true,
                        actionTarget
                    });
                } catch (error) {
                    o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[aura_ringtones] Error extracting ringtone zip: ",
                        ""
                    ])), String(error));
                    yield $();
                    e.logDownload({
                        success: false,
                        actionTarget,
                        errorMessage: "unzip_failed"
                    });
                }
            })();
            try {
                yield I;
            } finally{
                I = null;
            }
        });
        return U.apply(this, arguments);
    }
    function V() {
        return Array.from(k.values());
    }
    function H(e) {
        const n = k.get(e.toLowerCase());
        return n?.blobUrl ?? null;
    }
    function G() {
        for (const e of k.values()){
            URL.revokeObjectURL(e.blobUrl);
        }
        k.clear();
        T = false;
        o("WAWebAuraRingtonePrefs").clearPackVersion();
        $();
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Ringtone cache cleared"
        ])));
    }
    l.RINGTONE_PACK_VERSION = L;
    l.downloadPremiumRingtones = q;
    l.getDownloadedRingtones = V;
    l.getRingtoneBlobUrl = H;
    l.clearRingtoneCache = G;
}, 98);