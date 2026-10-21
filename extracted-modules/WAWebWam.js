__d("WAWebWam", [
    "Promise",
    "SiteData",
    "WALogger",
    "WAResolvable",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABPropsLocalStorage",
    "WAWebBrowserApi",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebEventSampling",
    "WAWebGuestCoreWamUtils",
    "WAWebIsOfficialClient",
    "WAWebUploadStatsBackend",
    "WAWebUserPrefsIsLoggedIn",
    "WAWebUserPrefsTabMutex",
    "WAWebWamClientErrorsWamEvent",
    "WAWebWamConstants",
    "WAWebWamEnumDeviceClassification",
    "WAWebWamEnumPlatformType",
    "WAWebWamEnumWebcWebPlatformType",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoBatchRouter",
    "WAWebWamFalcoLogger",
    "WAWebWamGlobals",
    "WAWebWamInterop",
    "WAWebWamLibContext",
    "WAWebWamPlatform",
    "WAWebWamPrivateStats",
    "WAWebWamRuntimeProvider",
    "WAWebWamStorage",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
    "requireDeferred",
    "sumBy"
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
    const y = r("requireDeferred")("WAWebUploadPrivateStatsBackend").__setRef("WAWebWam");
    let C;
    let b = [];
    const v = [];
    let S = false;
    const R = "1";
    const L = {
        commit: k(O),
        set: k(q),
        resumeJobs: k(z),
        initialize: k(U)
    };
    function E() {
        b = o("WAWebWamGlobals").PrivateStatsAllIds.map((e)=>e.key);
        o("WAWebWamPrivateStats").initPrivateStats().catch((t)=>{
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM] failed to initialise private stats for wam runtime "
            ])));
        });
        o("WAWebWamInterop").startWamStore();
        C = new (o("WAShiftTimer")).ShiftTimer(function(e) {
            const t = !r("WAWebEnvironment").isGuest && !o("WAWebUserPrefsTabMutex").currentTabHasMutex() && o("WAWebUserPrefsIsLoggedIn").isLoggedIn();
            if (t) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] bg tab, skipping WAM processing"
                ])));
                return;
            }
            j(e).catch((e)=>{
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM] failed to execute pending jobs for wam runtime "
                ])));
            });
        });
        o("WAWebWamRuntimeProvider").setWamRuntime(L);
        while(v.length){
            const t = v.pop();
            if (t) {
                t();
            }
        }
        S = true;
    }
    function k(e) {
        return function(...n) {
            if (S) {
                return e.apply(void 0, n);
            }
            v.push(function() {
                e.apply(void 0, n);
            });
        };
    }
    const I = {};
    let T = 0;
    var D = [];
    var x = false;
    let $ = false;
    var P = null;
    function N() {
        const t = P?.abKey2;
        if (t == null) {
            return null;
        }
        return String(t);
    }
    var M = new (o("WAResolvable")).Resolvable;
    var w = false;
    var A = false;
    function F(e, t) {
        if (!o("WAWebWamFalcoABProps").isFalcoLoggingEnabled()) {
            return {
                handled: false,
                shouldUseLegacyBridge: false
            };
        }
        const n = o("WAWebWamFalcoBatchRouter").resolveWamFalcoRoute(e);
        if (n.sink === "wam") {
            return {
                handled: false,
                shouldUseLegacyBridge: n.reason === "mode"
            };
        }
        if (t) {
            return {
                handled: false,
                shouldUseLegacyBridge: false
            };
        }
        return {
            handled: o("WAWebWamFalcoLogger").logEventToGeneratedFalco(e, n.logger),
            shouldUseLegacyBridge: false
        };
    }
    function O(e, t = false) {
        if (e.commitTime != null && e.commitTime !== 0) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "wam:commit redundant commit! ",
                ""
            ])), e.$className);
            return (h || (h = n("Promise"))).resolve();
        }
        e.wamChannel;
        const i = F(e, t);
        if (i.handled) {
            B(e);
            return (h || (h = n("Promise"))).resolve();
        }
        const l = o("WAWebEventSampling").getClientEventSamplingWeight(e.id) ?? e.weight;
        const s = l !== 0 && Math.random() * l > 1;
        if (i.shouldUseLegacyBridge) {
            o("WAWebWamFalcoLogger").logEventToFalcoBridge(e, s);
        }
        if (s || o("WAWebWamFalcoABProps").isWamLoggingDisabled()) {
            e.commitTime = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
            return (h || (h = n("Promise"))).resolve();
        }
        B(e);
        o("WAWebWamUtils").maybeForwardWamEventToJestE2e(e);
        let u;
        if (e.wamChannel === "realtime") {
            u = r("justknobx")._("4680") ? "realtime" : "all";
        } else if (r("WAWebEnvironment").isGuest || t) {
            u = "all";
        } else {
            u = "none";
        }
        return H({
            job: e,
            flushWamBuffers: u
        });
    }
    function B(e, t) {
        e.commitTime = t ?? o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }
    function W(e, t) {
        if (e.name === "memClass") {
            o("WAWebBrowserApi").setMemClassOverride(typeof t === "number" ? t : null);
        } else if (e.name === "osVersion") {
            o("WAWebBrowserApi").setOsVersionOverride(typeof t === "string" ? t : null);
        }
    }
    function q(e, t) {
        o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(e.name, String(t));
        W(e, t);
        return H({
            job: [
                e,
                t
            ],
            flushWamBuffers: "none"
        });
    }
    function U() {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (P) {
                return (h || (h = n("Promise"))).resolve(P);
            }
            const t = r("WAWebBrowserInfo")();
            const a = babelHelpers.extends({
                appVersion: o("WAWebBuildConstants").VERSION_BASE_WITH_WINDOWS_BUILD,
                appBuild: o("WAWebWamUtils").getAppBuild(),
                platform: o("WAWebWamEnumPlatformType").PLATFORM_TYPE.WEBCLIENT,
                webcWebArch: ce(),
                appIsBetaRelease: yield o("WAWebWamUtils").getAppIsBetaRelease(),
                browser: t.name || null,
                browserVersion: t.ua || null,
                deviceName: t.os || null,
                deviceVersion: t.version || null,
                osVersion: t.version || null,
                memClass: o("WAWebBrowserApi").getMemClass(),
                numCpu: o("WAWebBrowserApi").getNumCpu(),
                webcEnv: o("WAWebWamUtils").getWamEnv(),
                webcTabId: o("WAWebUserPrefsTabMutex").THIS_TAB,
                webcWebPlatform: o("WAWebWamEnumWebcWebPlatformType").WEBC_WEB_PLATFORM_TYPE[o("WAWebWamPlatform").getWamPlatform()],
                ocVersion: o("WAWebIsOfficialClient").isOfficialClient ? 1 : 0,
                deviceClassification: o("WAWebWamEnumDeviceClassification").DEVICE_CLASSIFICATION.DESKTOP,
                webcRevision: r("SiteData").client_revision,
                abKey2: o("WAWebABPropsLocalStorage").getABKey() ?? ""
            }, r("WAWebEnvironment").isGuest ? o("WAWebGuestCoreWamUtils").getGuestWamOverrides() : {});
            P = a;
            o("WAWebWamGlobals").Global.commitOnSet = false;
            o("WAWebWamGlobals").Global.set(P);
            o("WAWebWamGlobals").Global.commitOnSet = true;
            Object.keys(a).forEach((e)=>o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(e, String(a[e])));
            return a;
        });
        return V.apply(this, arguments);
    }
    function H({ flushWamBuffers: t, job: n }) {
        D.push(n);
        if (x) {
            if (t !== "none") {
                w = false;
                A = true;
                self.setTimeout(function() {
                    return C.forceRunNow(t);
                }, 1);
            } else {
                C.onOrBefore(o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1000);
            }
        } else if (t === "realtime" && r("justknobx")._("3237")) {
            self.setTimeout(function() {
                return C.forceRunNow("realtime");
            }, 1);
        } else if (t !== "none") {
            C.cancel();
            w = true;
            A = false;
        }
        return M.promise;
    }
    function G() {
        x = false;
        C.cancel();
        const e = M;
        M = new (o("WAResolvable")).Resolvable;
        return e;
    }
    function z() {
        x = true;
        A = false;
        if (D.length > 0) {
            C.onOrBefore(o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1000);
        }
        if (w) {
            w = false;
            A = true;
            C.forceRunNow();
        }
    }
    function j(e) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = A;
            const a = !(e === "realtime" && r("justknobx")._("3237"));
            const i = a ? G() : null;
            let l;
            let s;
            if (e === "realtime") {
                l = [
                    "realtime"
                ];
                const u = D.reduce(([n, r], t)=>{
                    if (!Array.isArray(t) && t.wamChannel === "realtime") {
                        n.push(t);
                    } else {
                        r.push(t);
                    }
                    return [
                        n,
                        r
                    ];
                }, [
                    [],
                    []
                ]);
                s = u[0];
                D = u[1];
            } else {
                l = [
                    "regular",
                    "realtime",
                    "none"
                ].concat(b);
                s = [].concat(D);
                D = [];
            }
            try {
                const c = yield U();
                if (e !== "realtime") {
                    const d = yield o("WAWebWamPrivateStats").maybeRotatePsIds();
                    yield (h || (h = n("Promise"))).all(d.map((e)=>Q(e, c)));
                }
                yield (h || (h = n("Promise"))).all(l.map((e)=>te({
                        forceFlushBuffers: t,
                        key: e,
                        localScopeLockedInGlobals: c,
                        toBeExecuted: s
                    })));
            } finally{
                if (a) {
                    if (i != null) {
                        i.resolve();
                    }
                    z();
                }
            }
        });
        return K.apply(this, arguments);
    }
    function Q(e, t) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield re(e, t);
            I[e] = yield Y(e, t);
            return I[e];
        });
        return X.apply(this, arguments);
    }
    function Y(e, t) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return new (o("WAWebWamLibContext")).WamContext(e, (yield r("WAWebWamStorage").getNextSequenceNumberForStream(R)), t);
        });
        return J.apply(this, arguments);
    }
    function Z(e, t) {
        return ee.apply(this, arguments);
    }
    function ee() {
        ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = I[e] ?? (yield Y(e, t));
            I[e] = r;
            return r;
        });
        return ee.apply(this, arguments);
    }
    function te(e) {
        return ne.apply(this, arguments);
    }
    function ne() {
        ne = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ forceFlushBuffers: t, key, localScopeLockedInGlobals: a, toBeExecuted: i }) {
            const l = o("WAWebWamUtils").getChannelFromBufferKey(key);
            let s;
            try {
                s = yield Z(key, a);
            } catch (e) {
                const c = r("getErrorSafe")(e);
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] executePendingForContext failed to get context ",
                    ""
                ])), String(c.stack ?? c));
                return;
            }
            try {
                for(let p = 0; p < i.length; p++){
                    if (s.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE) {
                        const _ = yield Q(key, a);
                        if (_ == null) {
                            break;
                        }
                        s = _;
                    }
                    const f = i[p];
                    if (Array.isArray(f)) {
                        const h = f[0];
                        const y = f[1];
                        const C = l === "realtime" ? "regular" : l;
                        if (h.channels.includes(C)) {
                            a[h.name] = y;
                            s.set(h.id, y);
                            W(h, y);
                        }
                    } else {
                        const g = f;
                        if ((g.wamChannel === "regular" || g.wamChannel === "realtime") && g.wamChannel === l || g.wamChannel === "private" && key === o("WAWebWamPrivateStats").getPrivateStatsKeyFromInt(g.privateStatsIdInt)) {
                            s.write(g);
                        }
                    }
                }
                const b = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                if (s.eventsWritten > 0 && (t || s.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE || b >= T + o("WAWebWamUtils").getBufferRotateIntervalInSecs() || !$)) {
                    const v = o("WAWebUserPrefsIsLoggedIn").isLoggedIn();
                    if (!v) {
                        if (s.buffer.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE) {
                            I[key] = null;
                        } else {
                            yield re(key, a);
                        }
                        return;
                    }
                    yield ae(key);
                } else {
                    yield re(key, a);
                }
            } catch (e) {
                const R = r("getErrorSafe")(e);
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] _executePending error ",
                    ""
                ])), String(R.stack ?? R));
                o("WAWebCrashlog").upload({
                    reason: "wam-error"
                });
                new (o("WAWebWamClientErrorsWamEvent")).WamClientErrorsWamEvent({
                    wamClientBufferDropErrorCount: 1
                }).commit();
                I[key] = null;
            }
        });
        return ne.apply(this, arguments);
    }
    function re(e, t) {
        return oe.apply(this, arguments);
    }
    function oe() {
        oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (I[e]) {
                const n = I[e].stringBuffer();
                if (n) {
                    const a = r("nullthrows")(I[e]).unsavedPortion;
                    if (!(a && a.eventsWritten === 0)) {
                        const i = r("nullthrows")(I[e]).saveKey;
                        try {
                            if (a) {
                                const l = yield r("WAWebWamStorage").update(i, e, n);
                                if (!I[e]) {
                                    return;
                                }
                                if (l) {
                                    r("nullthrows")(I[e]).unsavedPortion = yield Y(e, t);
                                } else {
                                    I[e] = I[e].unsavedPortion;
                                    yield re(e, t);
                                    return;
                                }
                            } else {
                                yield r("WAWebWamStorage").add(i, e, n);
                                if (!I[e]) {
                                    return;
                                }
                                r("nullthrows")(I[e]).unsavedPortion = yield Y(e, t);
                            }
                        } catch (e) {
                            const s = r("getErrorSafe")(e);
                            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[wam] save WamStorage failed to save ",
                                ""
                            ])), String(s));
                        }
                    }
                }
            }
        });
        return oe.apply(this, arguments);
    }
    function ae(e) {
        return ie.apply(this, arguments);
    }
    function ie() {
        ie = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            try {
                t = yield r("WAWebWamStorage").deleteAll(e);
            } catch (e) {
                const a = r("getErrorSafe")(e);
                t = {};
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] sendAllLogs failed to read because ",
                    ""
                ])), String(a));
            }
            const i = t;
            if (I[e]) {
                if (I[e].unsavedPortion && !(I[e].saveKey in i)) {
                    I[e] = I[e].unsavedPortion;
                }
                const l = r("nullthrows")(I[e]).saveKey;
                i[l] = r("nullthrows")(I[e]).stringBuffer();
            }
            const s = yield (h || (h = n("Promise"))).all(Object.entries(i).map(([n, r])=>le(r, n, o("WAWebWamUtils").getChannelFromBufferKey(e))));
            const u = s.filter(Boolean);
            if (u.length !== s.length) {
                T = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                $ = true;
            }
            if (I[e] && !u.includes(I[e].saveKey)) {
                I[e] = null;
            }
            if (u.length !== 0) {
                const c = r("sumBy")(u, function(e) {
                    return i[e].length;
                });
                if (c < o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE) {
                    yield (h || (h = n("Promise"))).all(u.map((()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                            try {
                                yield r("WAWebWamStorage").add(t, e, i[t]);
                            } catch (e) {
                                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "sendAllLogs: adding to WamStorage failed"
                                ])));
                            }
                        });
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    })()));
                } else {
                    I[e] = null;
                    new (o("WAWebWamClientErrorsWamEvent")).WamClientErrorsWamEvent({
                        wamClientBufferDropErrorCount: 1
                    }).commit();
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "wam dropped ",
                        " buffers! (",
                        " bytes)"
                    ])), u.length, c);
                }
            }
        });
        return ie.apply(this, arguments);
    }
    function le(e, t, n) {
        return se.apply(this, arguments);
    }
    function se() {
        se = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            if (e === "" || e[0] === "[") {
                return (h || (h = n("Promise"))).resolve();
            }
            if (o("WAWebWamUtils").isWamBufferTooBigToUpload(e)) {
                new (o("WAWebWamClientErrorsWamEvent")).WamClientErrorsWamEvent({
                    wamClientBufferDropErrorCount: 1
                }).commit();
                return (h || (h = n("Promise"))).resolve();
            }
            if (a === "private") {
                return y.load().then((n)=>n(e, t));
            }
            return r("WAWebUploadStatsBackend")(e, t);
        });
        return se.apply(this, arguments);
    }
    var ue = new Map([
        [
            "sandcastle",
            "dev"
        ],
        [
            "trunkstable",
            "C1"
        ]
    ]);
    function ce() {
        const e = r("gkx")("26256");
        if (e) {
            return "jest-e2e";
        }
        if (!r("isStringNullOrEmpty")(o("WAWebBuildConstants").PUSH_PHASE)) {
            return ue.get(o("WAWebBuildConstants").PUSH_PHASE) ?? o("WAWebBuildConstants").PUSH_PHASE;
        }
    }
    l.Wam = L;
    l.initWamRuntime = E;
    l.getSerializedAbKey2 = N;
    l.sendAllLogs = ae;
    l.getPushPhase = ce;
}, 98);