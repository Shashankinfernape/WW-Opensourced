__d("WAWebWamPageLoadReporter", [
    "Promise",
    "WALogger",
    "WAWebAppScreenTypes",
    "WAWebPageLoadLogging",
    "WAWebStreamTypes",
    "WAWebWam",
    "WAWebWamResourceLoadReporter",
    "WAWebWebcPageLoadWamEvent",
    "cr:11133",
    "once"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c = new (o("WAWebWebcPageLoadWamEvent")).WebcPageLoadWamEvent;
    let d;
    const m = {};
    let p;
    let _;
    let uiTimingComplete = false;
    let wsTimingComplete = false;
    function h() {
        return {
            uiTimingComplete,
            wsTimingComplete
        };
    }
    const y = new (u || (u = n("Promise")))(function(e) {
        return p = function() {
            uiTimingComplete = true;
            e();
        };
    });
    const C = new u(function(e) {
        return _ = function() {
            wsTimingComplete = true;
            e();
        };
    });
    const b = u.all([
        y,
        C
    ]);
    function v(e) {
        b.then(e);
    }
    let S = false;
    let webcLoadInForeground;
    let L = false;
    function E({ info, infoNormal, socketSequence, timestamp }) {
        const a = timestamp ?? Math.floor(self.performance.now());
        k(info, a);
        m[info] = a;
        if (infoNormal) {
            m.socketSequence = socketSequence;
            _();
        }
    }
    function k(info, t) {
        e: {
            if (info === o("WAWebStreamTypes").StreamInfo.OPENING) {
                o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_opening", t);
                break e;
            }
            if (info === o("WAWebStreamTypes").StreamInfo.PAIRING) {
                o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_pairing", t);
                break e;
            }
            if (info === o("WAWebStreamTypes").StreamInfo.NORMAL) {
                o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_normal", t);
                break e;
            }
            if (info === o("WAWebStreamTypes").StreamInfo.OFFLINE || info === o("WAWebStreamTypes").StreamInfo.SYNCING || info === o("WAWebStreamTypes").StreamInfo.RESUMING || info === o("WAWebStreamTypes").StreamInfo.CONNECTING) {
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${info}`);
        }
    }
    function I(e) {
        $("webc_initial_panel_mount_t", e);
        d = e;
    }
    function T(webcInitialPanel) {
        if (c != null) {
            c.set({
                webcInitialPanel
            });
        }
    }
    function D() {
        p();
    }
    if (window.document) {
        webcLoadInForeground = !document.hidden;
        document.addEventListener("visibilitychange", P);
    }
    b.then(()=>{
        N();
        r("WAWebWamResourceLoadReporter")();
        if (!S) {
            S = true;
            o("WAWebWam").Wam.resumeJobs();
        }
    });
    function x(e) {
        if (!self.performance || !self.performance.timing || !self.performance.timing.navigationStart) {
            return null;
        }
        return e - self.performance.timing.navigationStart;
    }
    function $(e, t) {
        o("WAWebPageLoadLogging").addPageLoadQplPoint(e, x(t) ?? undefined);
    }
    function P() {
        if (c && document.hidden) {
            webcLoadInForeground = false;
        }
    }
    function N() {
        if (!(self.performance?.timing && self.performance.navigation)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "MetricReporter:logPageLoad metrics not provided by browser!"
            ])));
            return;
        }
        if (!c) {
            return;
        }
        const r = c;
        const timing = self.performance.timing;
        const navigation = self.performance.navigation;
        const a_navigationStart = timing.navigationStart;
        const webcPageLoadT = timing.loadEventEnd - a_navigationStart;
        if (webcPageLoadT <= 0) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "MetricReporter:logPageLoad delayed"
            ])));
            self.setTimeout(N, 10000);
            return;
        }
        function p(e) {
            const t = timing[e];
            return t && x(t);
        }
        r.set({
            webcPageLoadT,
            webcUnloadEventStart: p("unloadEventStart"),
            webcUnloadEventEnd: p("unloadEventEnd"),
            webcRedirectStart: p("redirectStart"),
            webcRedirectEnd: p("redirectEnd"),
            webcFetchStart: p("fetchStart"),
            webcDomainLookupStart: p("domainLookupStart"),
            webcDomainLookupEnd: p("domainLookupEnd"),
            webcConnectStart: p("connectStart"),
            webcConnectEnd: p("connectEnd"),
            webcSecureConnectionStart: p("secureConnectionStart"),
            webcRequestStart: p("requestStart"),
            webcResponseStart: p("responseStart"),
            webcResponseEnd: p("responseEnd"),
            webcDomLoading: p("domLoading"),
            webcDomInteractive: p("domInteractive"),
            webcDomContentLoadedEventStart: p("domContentLoadedEventStart"),
            webcDomContentLoadedEventEnd: p("domContentLoadedEventEnd"),
            webcDomComplete: p("domComplete"),
            webcLoadEventStart: p("loadEventStart"),
            webcLoadEventEnd: p("loadEventEnd"),
            webcCached: timing.fetchStart === timing.domainLookupEnd,
            webcNavigation: navigation.type,
            webcRedirectCount: navigation.redirectCount,
            webcWsOpening: m.OPENING,
            webcWsPairing: m.PAIRING,
            webcWsSyncing: m.SYNCING,
            webcWsNormal: m.NORMAL,
            webcWsAttempts: m.socketSequence,
            webcQrCode: !m.SYNCING,
            webcInitialPanelMountT: (n("cr:11133") == null ? undefined : n("cr:11133")()) === true && d == null ? null : d - a_navigationStart,
            webcLoadInForeground,
            webcPageLoadId: o("WAWebPageLoadLogging").getPageLoadId()
        });
        M(r);
        if (L) {
            r.commitAndWaitForFlush(true);
        } else {
            r.commit();
        }
        if (window.document) {
            document.removeEventListener("visibilitychange", P);
        }
        c = null;
    }
    function M(e) {
        let t;
        (t = o("WAWebPageLoadLogging")).addPageLoadValidationData("webc_ws_opening", {
            wam: e.webcWsOpening
        });
        t.addPageLoadValidationData("webc_ws_pairing", {
            wam: e.webcWsPairing
        });
        t.addPageLoadValidationData("webc_ws_normal", {
            wam: e.webcWsNormal
        });
        t.addPageLoadValidationData("webc_initial_panel_mount_t", {
            wam: e.webcInitialPanelMountT
        });
        t.addPageLoadValidationData("webc_initial_panel_mount_start_t", {
            wam: e.webcInitialPanelMountStartT
        });
        t.addPageLoadValidationData("webc_initial_panel_render_t", {
            wam: e.webcInitialPanelRenderT
        });
        t.setWamCompleteForValidation();
    }
    class w {
        constructor(e){
            this.$4 = false;
            this.$3 = e.label;
            this.$1 = e.startProperty;
            this.$2 = e.endProperty;
        }
        start(t) {
            this.$4 = true;
            if (c != null) {
                c.set({
                    [this.$1]: x(t ?? Date.now())
                });
            }
        }
        end(t) {
            if (c != null) {
                c.set({
                    [this.$2]: x(t ?? Date.now())
                });
            }
        }
        hasStarted() {
            return this.$4;
        }
    }
    function A(e, t) {
        if (!G.hasStarted() && F(e)) {
            T(e);
            const r = t?.mountEpochMs ?? Date.now();
            G.start(r);
            $("webc_initial_panel_mount_start_t", r);
            if (t?.renderEpochMs != null) {
                const o = t.renderEpochMs;
                G.end(o);
                $("webc_initial_panel_render_t", o);
                W("initialPanelRenderTRecorded");
                return;
            }
            window.requestAnimationFrame(function() {
                const e = Date.now();
                G.end(e);
                $("webc_initial_panel_render_t", e);
                W("initialPanelRenderTRecorded");
            });
        }
    }
    function F(e) {
        return e !== o("WAWebAppScreenTypes").AppScreen.SYNCING;
    }
    let O = false;
    let B = false;
    function W(e) {
        if (e === "initialPanelMountTRecorded") {
            O = true;
        }
        if (e === "initialPanelRenderTRecorded") {
            B = true;
        }
        if (O && B) {
            D();
        }
    }
    const q = r("once")(function(e) {
        I(e ?? Date.now());
        W("initialPanelMountTRecorded");
    });
    function U(e, t) {
        L = true;
        const n = typeof t === "number" ? t : undefined;
        const r = t != null && typeof t !== "number" ? t : undefined;
        e: {
            if (e === "qr_mount") {
                A(o("WAWebAppScreenTypes").AppScreen.QR, r);
                q(r?.mountEpochMs);
                break e;
            }
            if (e === "ws_opening") {
                E({
                    info: o("WAWebStreamTypes").StreamInfo.OPENING,
                    infoNormal: false,
                    socketSequence: 1,
                    timestamp: n
                });
                break e;
            }
            if (e === "ws_pairing") {
                E({
                    info: o("WAWebStreamTypes").StreamInfo.PAIRING,
                    infoNormal: false,
                    socketSequence: 1,
                    timestamp: n
                });
                break e;
            }
            if (e === "ws_normal") {
                E({
                    info: o("WAWebStreamTypes").StreamInfo.NORMAL,
                    infoNormal: true,
                    socketSequence: 1,
                    timestamp: n
                });
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    const V = new w({
        label: "PageLoad.webcExe",
        startProperty: "webcExeStart",
        endProperty: "webcExeDone"
    });
    const H = new w({
        label: "PageLoad.webcMainScript",
        startProperty: "webcMainScriptStart",
        endProperty: "webcMainScriptEnd"
    });
    var G = new w({
        label: "PageLoad.webcInitialPanelRender",
        startProperty: "webcInitialPanelMountStartT",
        endProperty: "webcInitialPanelRenderT"
    });
    l.getWamPageLoadTimingCompletion = h;
    l.onWamPageLoadTimingComplete = v;
    l.streamInfoChange = E;
    l.logWamPageLoad = N;
    l.maybeLogInitialScreenRenderStart = A;
    l.logFirstRenderMountTimeOnce = q;
    l.reportLoggedOutPageLoadStage = U;
    l.exeTimer = V;
    l.mainScriptTimer = H;
}, 98);