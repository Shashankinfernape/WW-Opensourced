__d("WAWebProfilePicThumbGetters", [
    "WAWebBizAiAssetResolver",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebProfilePicThumbHostUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = {
        SINGLE: "SINGLE",
        GROUP: "GROUP"
    };
    const s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createProfilePicThumbCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = s;
    const p = o("WAWebGetters").createGetterFactories({
        root: unsafeIdentityGetter,
        createCache: o("WAWebGettersCaches").createFrontendProfilePicThumbCache
    });
    const { clearCacheFor: clearCacheFor_1, computed: computed_1, field: field_1 } = p;
    function h(e) {
        clearCacheFor(e);
        clearCacheFor_1(e);
    }
    function y(e) {
        return field_1(e);
    }
    const C = y("id");
    const b = y("tag");
    const v = y("raw");
    const S = y("stale");
    const R = y("eurl");
    const L = y("previewEurl");
    const E = y("fullDirectPath");
    const k = y("previewDirectPath");
    const I = y("filehash");
    const T = y("lastHostUsed");
    const D = y("isDarkTheme");
    const x = field("id");
    const $ = computed_1(function([t, n, a, i, l, s, u, c, d]) {
        if (r("WAWebWid").isAiHub(t)) {
            return o("WAWebBizAiAssetResolver").getAiHubProfileURL(d);
        }
        if (a) {
            return `data:image/jpeg;base64,${a}`;
        }
        if (!n && i) {
            return null;
        }
        if (n) {
            if (s != null) {
                return o("WAWebProfilePicThumbHostUtils").buildMms4DownloadUrl(s, u, c);
            }
            return l;
        }
    }, [
        C,
        b,
        v,
        S,
        L,
        k,
        I,
        T,
        D
    ]);
    const P = computed_1(function([t, n, a, i, l, s, u, c, d]) {
        if (r("WAWebWid").isAiHub(t)) {
            return o("WAWebBizAiAssetResolver").getAiHubProfileURL(d);
        }
        if ((a || !n) && i) {
            return null;
        }
        if (!a && n) {
            if (s != null) {
                return o("WAWebProfilePicThumbHostUtils").buildMms4DownloadUrl(s, u, c);
            }
            return l;
        }
    }, [
        C,
        b,
        v,
        S,
        R,
        E,
        I,
        T,
        D
    ]);
    function N(e) {
        const t = new Set;
        const n = new Set;
        function r(dependencies) {
            dependencies.forEach((e)=>{
                if (!n.has(e)) {
                    n.add(e);
                    const o = e.dependencyKey;
                    if (o == null) {
                        r(e.dependencies);
                    } else if (o !== "id") {
                        t.add(o);
                    }
                }
            });
        }
        e.forEach((e)=>r(e.dependencies));
        return Array.from(t, function(e) {
            return `change:${e}`;
        }).join(" ");
    }
    const M = N([
        $
    ]);
    const w = N([
        $,
        P
    ]);
    function A(e) {
        if (e != null) {
            return $(e);
        }
    }
    function F(e) {
        if (e != null) {
            return P(e);
        }
    }
    const O = computed(function([n]) {
        if (r("WAWebWid").isUser(n)) {
            return e.SINGLE;
        }
        r("WAWebWid").isGroup(n);
        return e.GROUP;
    }, [
        x
    ]);
    l.FALLBACK = e;
    l.clearProfilePicThumbGetterCacheFor = h;
    l.getId = x;
    l.getImg = $;
    l.getImgFull = P;
    l.IMG_ROOT_CHANGE_EVENTS = M;
    l.IMG_OR_IMG_FULL_ROOT_CHANGE_EVENTS = w;
    l.getMaybeImg = A;
    l.getMaybeImgFull = F;
    l.getFallbackType = O;
}, 98);