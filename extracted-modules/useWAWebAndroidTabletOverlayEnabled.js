__d("useWAWebAndroidTabletOverlayEnabled", [
    "WAWebLinkDeviceScreenGatedUtils",
    "isWAWebFeatureDetectionAndroidTablet",
    "react-compiler-runtime",
    "useWAWebAsync"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("react-compiler-runtime").c(9);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebLinkDeviceScreenGatedUtils").isAndroidTabletOverlayPotentiallyEnabled();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        const r = s(n);
        const { detectionInfo: a, resolving: i } = r;
        const l = n && !i;
        const u = l && a != null;
        let c;
        if (e[1] !== u) {
            c = u && o("WAWebLinkDeviceScreenGatedUtils").isAndroidTabletOverlayEnabled(true);
            e[1] = u;
            e[2] = c;
        } else {
            c = e[2];
        }
        const d = c;
        const m = u && !d ? a : null;
        const p = l && a == null;
        const _ = d ? a : null;
        let f;
        if (e[3] !== d || e[4] !== i || e[5] !== m || e[6] !== p || e[7] !== _) {
            f = {
                controlDetectionInfo: m,
                detectionFailed: p,
                detectionInfo: _,
                enabled: d,
                resolving: i
            };
            e[3] = d;
            e[4] = i;
            e[5] = m;
            e[6] = p;
            e[7] = _;
            e[8] = f;
        } else {
            f = e[8];
        }
        return f;
    }
    function s(e) {
        const n = o("react-compiler-runtime").c(9);
        let a;
        if (n[0] !== e) {
            a = e && o("isWAWebFeatureDetectionAndroidTablet").isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired();
            n[0] = e;
            n[1] = a;
        } else {
            a = n[1];
        }
        const i = a;
        let l;
        if (n[2] !== i || n[3] !== e) {
            l = e && !i ? o("isWAWebFeatureDetectionAndroidTablet").getWAWebFeatureDetectionAndroidTabletInfo() : null;
            n[2] = i;
            n[3] = e;
            n[4] = l;
        } else {
            l = n[4];
        }
        const s = l;
        let u;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            u = [];
            n[5] = u;
        } else {
            u = n[5];
        }
        const c = r("useWAWebAsync")(o("isWAWebFeatureDetectionAndroidTablet").getWAWebFeatureDetectionAndroidTabletInfoWithClientHints, u, i);
        const d = i ? c.value ?? null : s;
        const m = i && c.loading;
        let p;
        if (n[6] !== d || n[7] !== m) {
            p = {
                detectionInfo: d,
                resolving: m
            };
            n[6] = d;
            n[7] = m;
            n[8] = p;
        } else {
            p = n[8];
        }
        return p;
    }
    l.default = e;
}, 98);