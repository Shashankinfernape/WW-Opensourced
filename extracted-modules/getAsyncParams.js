__d("getAsyncParams", [
    "CometPersistQueryParams",
    "CurrentCanonicalRoute",
    "CurrentUserInitialData",
    "DTSGUtils",
    "Env",
    "GetAsyncParamsExtraData",
    "HasteBitMap",
    "HasteBitMapName",
    "JSErrorLoggingConfig",
    "LSD",
    "ServerJSDefine",
    "SiteData",
    "SprinkleConfig",
    "StaticSiteData",
    "WebConnectionClassServerGuess",
    "WebSession",
    "asyncParams",
    "cr:8959",
    "cr:8960",
    "getAsyncParamsForProfiling",
    "getAsyncParamsFromCurrentPageURI",
    "isSocialPlugin",
    "objectValues",
    "requireWeak",
    "uniqueRequestID"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, a = false) {
        const c = r("GetAsyncParamsExtraData").extra_data ?? {};
        const d = babelHelpers.extends({}, o("asyncParams").get(), c, {
            __user: (e || (e = r("CurrentUserInitialData"))).USER_ID,
            __a: 1,
            __req: r("uniqueRequestID")(),
            [r("StaticSiteData").hs_key]: r("SiteData").haste_session,
            [r("StaticSiteData").dpr_key]: r("SiteData").pr,
            [r("StaticSiteData").connection_class_server_guess_key]: r("WebConnectionClassServerGuess").connectionClass,
            __rev: r("SiteData").client_revision,
            __s: o("WebSession").getId(),
            [r("StaticSiteData").haste_session_id_key]: r("SiteData").hsi
        });
        if (!a) {
            d[r("StaticSiteData").jsmod_key] = r("ServerJSDefine").getLoadedModuleHash();
            r("objectValues")(r("HasteBitMapName")).forEach((e)=>{
                const t = o("HasteBitMap").toCompressedString(e);
                if (t !== "") {
                    d[e] = t;
                }
            });
        }
        if (r("SiteData").wbloks_env !== true && r("SiteData").comet_env != null && r("SiteData").comet_env !== 0) {
            d[r("StaticSiteData").comet_key] = r("SiteData").comet_env ?? 1;
        }
        Object.entries(r("CometPersistQueryParams").relative).forEach(([t, n])=>{
            if (n != null) {
                d[t] = String(n);
            }
        });
        if (typeof window !== "undefined" && window?.location != null) {
            Object.assign(d, r("getAsyncParamsFromCurrentPageURI")());
            Object.assign(d, o("getAsyncParamsForProfiling").getAsyncParamsForProfiling());
        }
        if ((s || (s = r("Env"))).isCQuick && !d.cquick) {
            d.cquick = (s || (s = r("Env"))).iframeKey;
            d.ctarget = s.iframeTarget;
            d.cquick_token = s.iframeToken;
        }
        if (t == "POST") {
            const p = n("cr:8959").getCachedToken ? n("cr:8959").getCachedToken() : n("cr:8959").getToken();
            if (p != null && p !== "") {
                d.fb_dtsg = p;
                if (r("SprinkleConfig").param_name) {
                    d[r("SprinkleConfig").param_name] = r("DTSGUtils").getNumericValue(p);
                }
            }
            if (r("LSD").token != null && r("LSD").token !== "") {
                d.lsd = r("LSD").token;
                if (r("SprinkleConfig").param_name && (p == null || p === "")) {
                    d[r("SprinkleConfig").param_name] = r("DTSGUtils").getNumericValue(r("LSD").token);
                }
            }
        }
        if (t == "GET") {
            const _ = n("cr:8960").getCachedToken ? n("cr:8960").getCachedToken() : n("cr:8960").getToken();
            if (_ != null && _ !== "") {
                d.fb_dtsg_ag = _;
                if (r("SprinkleConfig").param_name) {
                    d[r("SprinkleConfig").param_name] = r("DTSGUtils").getNumericValue(_);
                }
            }
        }
        if (r("isSocialPlugin")()) {
            d.__sp = 1;
        }
        if (r("SiteData").spin) {
            let f;
            d[(f = r("StaticSiteData")).spin_rev_key] = r("SiteData")[f.spin_rev_key];
            d[f.spin_branch_key] = r("SiteData")[f.spin_branch_key];
            d[f.spin_time_key] = r("SiteData")[f.spin_time_key];
            if (r("SiteData")[r("StaticSiteData").spin_mhenv_key]) {
                d[r("StaticSiteData").spin_mhenv_key] = r("SiteData")[r("StaticSiteData").spin_mhenv_key];
            }
        }
        if (o("JSErrorLoggingConfig").sampleWeight != null && o("JSErrorLoggingConfig").sampleWeightKey != null) {
            d[o("JSErrorLoggingConfig").sampleWeightKey] = o("JSErrorLoggingConfig").sampleWeight;
        }
        const g = o("CurrentCanonicalRoute").getForGlobalLoggingOnly();
        if (g != null) {
            d[r("StaticSiteData").canonical_route_key] = g;
        }
        r("requireWeak")("QPLUserFlow", function(e) {
            const t = e.getActiveFlowIDs();
            if (t.length > 0) {
                d.qpl_active_flow_ids = t.sort().join(",");
            }
        });
        r("requireWeak")("MessengerPWAVersionForUserAgent", function(e) {
            const t = e();
            if (t != null) {
                d.__pwa = t;
            }
        });
        return d;
    }
    l.default = u;
}, 98);