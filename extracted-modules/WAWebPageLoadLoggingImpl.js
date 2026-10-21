__d("WAWebPageLoadLoggingImpl", [
    "WACyrb53Hash",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebDeviceFeatures",
    "WAWebEncryptedRid",
    "WAWebEnvironment",
    "WAWebForceFlushWamBuffers",
    "WAWebLoggedOutSeparationGating",
    "WAWebPageLoadLogging",
    "WAWebPageLoadTierStats",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsStore",
    "WAWebWaUlCookieUtils",
    "WAWebWamPageLoadReporter",
    "WAWebWebcPageLoad2WamEvent",
    "gkx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = r("qpl")._(891431414, "3268");
    let p;
    let _ = false;
    let f = {
        socket_error_count: 0
    };
    const g = r("WAWebPonyfillsCryptoRandomUUID")();
    let h = null;
    const y = 120000;
    function C() {
        if (_) {
            return false;
        }
        if (p == null) {
            p = o("WAWebQplFlowWrapper").QPL.markerStart(m, {
                annotations: {
                    bool: {
                        mh_default_async_await_wa: r("gkx")("8891"),
                        wa_web_media_wasm_worker_split: r("gkx")("24042")
                    },
                    string: {
                        logged_out_separation: o("WAWebLoggedOutSeparationGating").getLoggedOutSeparationExperiment()
                    }
                },
                timestamp: 0
            });
            if (h == null) {
                h = self.setTimeout(function() {
                    if (!_) {
                        o("WAWebCoreActionsODS").logPageLoadErrorTimeout();
                        R();
                        _ = true;
                        o("WAWebCoreActionsODS").markPageLoadComplete();
                    }
                }, y);
            }
        }
        return true;
    }
    function b(e, t) {
        p?.addPoint(e, t);
    }
    function v(e) {
        p?.annotate(e);
    }
    function S(e, t, n) {
        if (C()) {
            if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
                const i = o("WAWebEncryptedRid").getEncryptedRid();
                if (i != null) {
                    D({
                        encrypted_rid: i
                    });
                }
            }
            let l = document.referrer;
            if (r("WAWebEnvironment").isWeb && l != null && l !== "") {
                try {
                    l = new URL(l).hostname;
                } catch (e) {
                    l = "INVALID";
                }
            }
            const s = o("WAWebWaUlCookieUtils").getWaUlCookieIfLoggedOut();
            const u = s != null ? r("WACyrb53Hash")(s) : null;
            D({
                qr_screen: e,
                qr_screen_experience: t ?? -1,
                is_foreground: !document.hidden,
                page_load_id: g,
                sub_platform: L(),
                referrer: l,
                random_user_id: u ?? -1,
                locale: n ?? void 0,
                touch_presence: o("WAWebDeviceFeatures").getTouchPresenceForTouchOnlyCallers()
            });
            N();
            M();
            v(P(f));
            p?.end(2);
            p = null;
            new (o("WAWebWebcPageLoad2WamEvent")).WebcPageLoad2WamEvent({
                webcPageLoadId: g
            }).commit();
            _ = true;
            if (h != null) {
                self.clearTimeout(h);
                h = null;
            }
            o("WAWebCoreActionsODS").logPageLoadSuccess();
            if (e) {
                o("WAWebCoreActionsODS").logPageLoadSuccessQr();
            } else {
                o("WAWebCoreActionsODS").logPageLoadSuccessMain();
            }
            o("WAWebCoreActionsODS").markPageLoadComplete();
            F();
            if (o("WAWebABProps").getABPropConfigValue("webc_page_load_early_commit_enabled")) {
                o("WAWebWamPageLoadReporter").logWamPageLoad();
            }
            self.setTimeout(function() {
                return o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers(false);
            }, 10000);
        }
    }
    function R() {
        let e;
        if (p != null) {
            D({
                is_foreground: !document.hidden,
                page_load_id: g,
                sub_platform: L()
            });
            N();
            M();
            v(P(f));
            if ((e = p) != null) {
                e.end(113);
            }
            p = null;
        }
    }
    function L() {
        if (r("WAWebEnvironment").isWindows) {
            return "win_hybrid";
        }
        if (r("WAWebEnvironment").isWeb) {
            return "web";
        }
        return "";
    }
    const E = new Set;
    function k(e) {
        C();
        b(`${e}_start`);
        E.add(e);
    }
    function I(t) {
        if (!E.has(t)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[page load] ",
                " not started"
            ])), t);
            return;
        }
        C();
        b(`${t}_end`);
        E.delete(t);
    }
    function T(e, t) {
        const n = t ?? Math.floor(self.performance.now());
        A(e, {
            qpl: n
        });
        C();
        b(e, {
            timestamp: n
        });
    }
    function D(e) {
        f = babelHelpers.extends({}, f, e);
    }
    function x(e) {
        D(e);
        if (C()) {
            v(P(e));
        }
    }
    function $() {
        f.socket_error_count++;
    }
    function P(e) {
        const t = {};
        for (const n of Object.keys(e)){
            const r = e[n];
            if (typeof r === "boolean") {
                if (t.bool == null) {
                    t.bool = {};
                }
                t.bool[n] = r;
            } else if (typeof r === "number") {
                if (t.int == null) {
                    t.int = {};
                }
                t.int[n] = r;
            } else if (typeof r === "string") {
                if (t.string == null) {
                    t.string = {};
                }
                t.string[n] = r;
            }
        }
        return t;
    }
    function N() {
        if (p != null) {
            const t = window?.performance?.getEntriesByType("navigation")[0];
            if (t == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[page load] no navigation timing entry"
                ])));
                return;
            }
            b("request_start", {
                timestamp: t.requestStart
            });
            b("response_end", {
                timestamp: t.responseEnd
            });
            b("dom_complete", {
                timestamp: t.domComplete
            });
        }
    }
    function M() {
        if (p != null) {
            const e = o("WAWebPageLoadTierStats").getTierStats();
            const t = e[0];
            const n = e[1];
            D(babelHelpers.extends({}, n));
            for (const r of [
                "tierOne_start",
                "tierTwo_start",
                "tierThree_start",
                "tierOne_end",
                "tierTwo_end",
                "tierThree_end"
            ]){
                if (t[r]) {
                    const a = t[r];
                    b(r, {
                        timestamp: a
                    });
                }
            }
        }
    }
    const w = {
        wamComplete: false,
        qplComplete: false,
        timestamps: new Map
    };
    function A(e, t) {
        let n = w.timestamps.get(e);
        if (n == null) {
            n = {};
            w.timestamps.set(e, n);
        }
        if (n.qpl == null && t.qpl != null) {
            n.qpl = t.qpl;
        }
        if (n.wam == null && t.wam != null) {
            n.wam = t.wam;
        }
    }
    function F() {
        w.qplComplete = true;
        U();
    }
    function O() {
        w.wamComplete = true;
        U();
    }
    const B = 20;
    const W = 90000;
    let q = null;
    function U() {
        if (!(w.wamComplete && w.qplComplete)) {
            if (q == null) {
                q = self.setTimeout(function() {
                    const e = w.wamComplete ? "qpl" : "wam";
                    let t = `page-load-validation-missing-${e}`;
                    if (e === "wam") {
                        const n = o("WAWebWamPageLoadReporter").getWamPageLoadTimingCompletion();
                        const { uiTimingComplete: r, wsTimingComplete: a } = n;
                        if (!r && !a) {
                            t += "-incomplete-both-timings";
                        } else if (r) {
                            if (a) {
                                t += "-completed-timings";
                            } else {
                                t += "-incomplete-ws-timing";
                            }
                        } else {
                            t += "-incomplete-ui-timing";
                        }
                    }
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[page load] missing completion marker for ",
                        " after ",
                        "ms"
                    ])), e, W).sendLogs(t, {
                        sampling: 0.01
                    });
                }, W);
            }
            return;
        }
        if (q != null) {
            self.clearTimeout(q);
            q = null;
        }
        let e = false;
        for (const [n, r] of w.timestamps.entries()){
            const { qpl: a, wam: i } = r;
            if (a != null && i != null && Math.abs(a - i) > B) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[page load] ",
                    " qpl: ",
                    " wam: ",
                    " diff: ",
                    ""
                ])), n, a, i, Math.abs(a - i));
                e = true;
            }
        }
        if (e) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[page load] validation failed"
            ]))).sendLogs("page-load-validation", {
                sampling: 0.01
            });
        }
    }
    function V() {
        return null;
    }
    function H() {
        if (h != null) {
            self.clearTimeout(h);
            h = null;
        }
        if (q != null) {
            self.clearTimeout(q);
            q = null;
        }
        p = null;
        _ = false;
        f = {
            socket_error_count: 0
        };
        E.clear();
        w.wamComplete = false;
        w.qplComplete = false;
        w.timestamps.clear();
    }
    function G() {
        o("WAWebPageLoadLogging").setImpl({
            endPageLoadQpl: S,
            endPageLoadQplMeasure: I,
            startPageLoadQplMeasure: k,
            addPageLoadQplPoint: T,
            addPageLoadQplAnnotation: D,
            addPageLoadQplAnnotationNow: x,
            incrementPageLoadQplSocketError: $,
            addPageLoadValidationData: A,
            setWamCompleteForValidation: O,
            PAGE_LOAD_ID: g
        });
    }
    l.resetPageLoadLoggingForTests = H;
    l.setPageLoadLoggingImpl = G;
}, 98);