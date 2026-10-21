__d("isWAWebFeatureDetectionAndroidTablet", [
    "WACustomError",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebUA",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = /^Linux armv8[l1]$/;
    const s = "android";
    const detectorVersion = 5;
    const c = /^Mozilla\/5\.0 \(X11; Linux x86_64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+(?:\.\d+){3} Safari\/537\.36$/;
    const d = /\(X11; Linux x86_64[;)]/;
    const m = 500;
    const p = 6;
    const _ = 600;
    const f = [
        _,
        720,
        840
    ];
    const g = "tablet";
    const h = /^(?:pixel tablet|(?:samsung )?sm-[ptx]\d+[a-z]*|(?:lenovo )?tb[-_a-z0-9]*|(?:lenovo )?yt\d?-[a-z0-9]+|\d{4}[0-9a-z]rp[0-9a-z]{3}|21051182[cg]|22081283[cg]|opd\d+[a-z]*|rmp\d{4}|(?:agm|bky|btkr?|cga|eln|hey|ndl|rod|rol|txz|yag|yle)\d*-[a-z]\d{2}[a-z]*|infinix x11\d{2}[a-z]*|tecno t1[01]\d{2}|itel p100\d{2}[a-z]?|pa2473|(?:nokia|hmd) t\d+|moto tab\b.*|8491x|zte k\d+|asus_p\w+|b\d+-a\d+|sgp\d+|(?:lg-)?v(?:4|5|7|9)\d{2}|(?:lm-)?t\d{3}|.*googlebook.*)$/i;
    const y = new Set([
        "automotive",
        "desktop",
        "mobile",
        "tablet",
        "tv",
        "watch",
        "wearable",
        "xr"
    ]);
    const C = new Set([
        "",
        "k",
        "mobile",
        "tablet"
    ]);
    const b = /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:ags|bah|btv|cmr|dby|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i;
    const v = /^(?:(?:ws)?t9[5-8]2(?:_[a-z0-9]+)?|c[a-z]?-(?:a1516|t9[5-8]2)-.+|mtk?[59]\d{3}|sbid-.+|ifp\d{4}(?:-.+)?|teachmint.*|lt-ir[a-z0-9]+|logic_lt_[a-z0-9]+|maxhub.*|[a-z]{1,2}\d{2}[a-z]{2}-cs\d{4}[a-z]?-.+|hidb.*|.*a311d2.*|taishan|(?:.*[^a-z])?(?:tv|display|projector)(?:[^a-z].*)?)$/i;
    const S = new Set([
        "amazon",
        "barnes & noble",
        "honor",
        "huawei"
    ]);
    const R = [
        "huawei",
        "honor",
        "hmscore",
        "harmonyos",
        "kindle",
        "silk/",
        "nook",
        "android tv",
        "smart-tv",
        "smarttv",
        "googletv",
        "google tv",
        "crkey",
        "bravia",
        "mibox",
        "mobile vr",
        "oculusbrowser",
        "picobrowser",
        "; wv)"
    ];
    let L;
    let E;
    let k = null;
    let I = false;
    function T(e, t, n, r, o) {
        return D(e, t, n, r, o) != null;
    }
    function D(e, t, n, r, a) {
        const i = o("WAWebUA").parseUA(e);
        const l = i.os === s && ce(i.osVersion);
        const u = ee(e, n, r, a);
        if (!l && !u) {
            return null;
        }
        const c = i.parser.getDevice();
        return G(c.type, i.isOculusBrowser, i.parser.getUA(), c.vendor, c.model, t, n, r, a, u);
    }
    function x() {
        return $() != null;
    }
    function $() {
        return D(o("WAWebUA").UA.parser.getUA(), E, self.navigator.userAgentData?.mobile, L, Z());
    }
    function P() {
        return N(o("WAWebUA").UA.parser.getUA(), Z());
    }
    function N(e, t) {
        return o("WAWebUA").parseUA(e).os === s || re(e, t);
    }
    function M() {
        return w(self.screen);
    }
    function w(e) {
        const t = e == null ? NaN : Math.min(e.height, e.width);
        if (Number.isNaN(t) || t <= 0) {
            return null;
        }
        return f.filter((e)=>t >= e).length;
    }
    function A() {
        if (I || self.navigator.userAgentData?.mobile === true) {
            return false;
        }
        const a = o("WAWebUA").UA.parser.getDevice();
        const i = self.navigator.userAgentData?.getHighEntropyValues != null;
        const l = o("WAWebUA").UA.os === s && ce(o("WAWebUA").UA.osVersion);
        const u = Z();
        const c = l ? ie(a.type, o("WAWebUA").UA.parser.getUA(), a.model, self.navigator.userAgentData?.mobile, undefined) : self.navigator.userAgentData?.mobile === false && te(o("WAWebUA").UA.parser.getUA(), u);
        return i && c && !o("WAWebUA").UA.isOculusBrowser && !me(o("WAWebUA").UA.parser.getUA(), a.vendor, a.model);
    }
    function F() {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return (yield B()) != null;
        });
        return O.apply(this, arguments);
    }
    function B() {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (A()) {
                const e = self.navigator.userAgentData;
                if (e == null) {
                    return null;
                }
                const t = yield q(e);
                if (t == null) {
                    return null;
                }
                L = t.formFactors;
                E = t.model;
                I = true;
            }
            return $();
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WATimeUtils").unixTimeMs();
            if (e.getHighEntropyValues == null) {
                return null;
            }
            try {
                const n = yield o("WAPromiseTimeout").promiseTimeout(e.getHighEntropyValues([
                    "formFactors",
                    "model"
                ]), m);
                H("resolved", t);
                return n;
            } catch (error) {
                H(error instanceof o("WACustomError").TimeoutError ? "timed_out" : "failed", t);
                throw error;
            }
        });
        return U.apply(this, arguments);
    }
    function V() {
        return k;
    }
    function H(outcome, t) {
        k = {
            durationMs: Math.max(0, o("WATimeUtils").unixTimeMs() - t),
            outcome
        };
    }
    function G(type, isOculusBrowser, n, vendor, model, a, i, l, s, c) {
        const modelSource = ae(model, a);
        const m = z(model, a, modelSource);
        const p = j(type, n, m, i, l, c);
        const _ = se(l);
        const f = K(_, c, s);
        const g = X(c, modelSource, i, _, s, f);
        if (p == null || isOculusBrowser) {
            return null;
        }
        const detectionSource = J(p, g);
        if (!f || !Q(_, modelSource, m) || !Y(detectionSource, modelSource) || me(n, vendor, m)) {
            return null;
        }
        return {
            detectionSource,
            detectorVersion,
            modelSource
        };
    }
    function z(model, t, modelSource) {
        if (modelSource === "user_agent") {
            return model;
        }
        return t?.trim();
    }
    function j(type, t, n, r, o, a) {
        if (a) {
            return "desktop_mode_signals";
        }
        return le(type, t, n, r, o);
    }
    function K(e, t, n) {
        if (e !== "desktop") {
            return true;
        }
        const r = t ? "Linux" : "Android";
        return n?.clientHintPlatform === r && ne(n);
    }
    function Q(e, modelSource, n) {
        if (e !== "desktop" || modelSource === "unavailable") {
            return true;
        }
        return n != null && h.test(n);
    }
    function X(e, modelSource, n, r, o, a) {
        return !e && modelSource === "unavailable" && n === false && r === "desktop" && o?.clientHintPlatform === "Android" && a;
    }
    function Y(detectionSource, modelSource) {
        return modelSource !== "unavailable" || detectionSource === "desktop_mode_signals" || detectionSource === "screen_size";
    }
    function J(e, t) {
        if (t) {
            return "screen_size";
        }
        return e;
    }
    function Z() {
        return {
            clientHintPlatform: self.navigator.userAgentData?.platform,
            maxTouchPoints: self.navigator.maxTouchPoints,
            navigatorPlatform: self.navigator.platform,
            screenSize: self.screen
        };
    }
    function ee(e, t, n, r) {
        return t === false && se(n) === "desktop" && te(e, r);
    }
    function te(e, t) {
        return c.test(e) && t?.clientHintPlatform === "Linux" && ne(t);
    }
    function ne(t) {
        return e.test(t?.navigatorPlatform ?? "") && (t?.maxTouchPoints ?? 0) > 0 && oe(t?.screenSize);
    }
    function re(t, n) {
        return d.test(t) && e.test(n?.navigatorPlatform ?? "") && (n?.maxTouchPoints ?? 0) > 0;
    }
    function oe(e) {
        return e != null && Math.min(e.height, e.width) >= _;
    }
    function ae(model, t) {
        if (de(model)) {
            return "user_agent";
        }
        if (de(t)) {
            return "ua_ch";
        }
        return "unavailable";
    }
    function ie(type, t, model, r, o) {
        return le(type, t, model, r, o) != null;
    }
    function le(e, t, n, r, o) {
        if (r === true || /\bmobile\b/i.test(t)) {
            return null;
        }
        const a = se(o);
        if (a !== "unavailable") {
            return ue(a, r);
        }
        if (r === false) {
            return "ua_ch_mobile_false";
        }
        if (e === g) {
            return "ua_parser_device_type";
        }
        if (n != null && h.test(n)) {
            return "known_model_pattern";
        }
        return null;
    }
    function se(e) {
        if (e == null || e.length === 0) {
            return "unavailable";
        }
        const t = new Set(e.map((e)=>e.toLowerCase()));
        if (t.size !== 1 || Array.from(t).some((e)=>!y.has(e))) {
            return "unknown";
        }
        if (t.has("mobile")) {
            return "phone";
        }
        if (t.has("tablet")) {
            return "tablet";
        }
        if (t.has("desktop")) {
            return "desktop";
        }
        return "non_handheld";
    }
    function ue(e, t) {
        if (e === "tablet") {
            return "ua_ch_form_factor";
        }
        if (e === "desktop" && t === false) {
            return "ua_ch_mobile_false";
        }
        return null;
    }
    function ce(osVersion) {
        return parseInt(osVersion, 10) >= p;
    }
    function de(e) {
        const t = e == null ? undefined : e.trim().toLowerCase();
        return t != null && !C.has(t);
    }
    function me(e, vendor, n) {
        const o = e.toLowerCase();
        const a = vendor?.toLowerCase() ?? "";
        const i = R.some((e)=>o.includes(e));
        return S.has(a) || i || n != null && (b.test(n) || v.test(n));
    }
    l.ANDROID_TABLET_DETECTOR_VERSION = detectorVersion;
    l.isWAWebFeatureDetectionAndroidTabletUserAgent = T;
    l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = D;
    l.isWAWebFeatureDetectionAndroidTablet = x;
    l.getWAWebFeatureDetectionAndroidTabletInfo = $;
    l.isWAWebFeatureDetectionAndroidOS = P;
    l.isWAWebFeatureDetectionAndroidOSUserAgent = N;
    l.getWAWebFeatureDetectionAndroidTabletScreenClass = M;
    l.getWAWebFeatureDetectionAndroidTabletScreenClassForSize = w;
    l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = A;
    l.isWAWebFeatureDetectionAndroidTabletWithClientHints = F;
    l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = B;
    l.getWAWebAndroidClientHintValues = q;
    l.getWAWebFeatureDetectionAndroidTabletClientHintResult = V;
}, 98);