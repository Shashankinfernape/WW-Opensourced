__d("WAWebWamUtils", [
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebEnvironment",
    "WAWebPsIdUpdateWamEvent",
    "WAWebUserPrefsGeneral",
    "WAWebWamCodegenUtils",
    "WAWebWamConstants",
    "WAWebWamEnumAppBuildType",
    "WAWebWamEnumWebcEnvCode",
    "WAWebWamGlobals",
    "cr:9565",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = n("cr:9565") ?? {};
    const d = c.getWindowsAppBuild;
    const m = 1;
    const p = 2;
    function _(e, t, n) {
        new (o("WAWebPsIdUpdateWamEvent")).PsIdUpdateWamEvent({
            psIdAction: e,
            psIdKey: t,
            psIdRotationFrequence: n
        }).commit();
    }
    function f(e, t) {
        const n = JSON.parse(t);
        const r = o("WAWebWamCodegenUtils").events[e];
        if (r == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "WAM: commitWorkerWamEvent failed, ",
                " is not defined"
            ])), e).sendLogs("wam-worker-event-undefined-error");
            return;
        }
        new r(n).commit();
    }
    function g(e, t) {
        const r = JSON.parse(t);
        const a = r.value;
        o("WAWebWamGlobals").Global.set({
            [e]: a
        });
    }
    function h({ action: t, name, payload: r }) {
        if (t === "commit") {
            return f(name, r);
        }
        return g(name, r);
    }
    function y(e) {
        let t = true;
        try {
            const n = new (o("WABinary")).Binary(o("WABase64").decodeB64(e));
            t = n.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE_FOR_UPLOAD;
        } catch (e) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "dropping invalid wam buffer"
            ])));
        }
        return t;
    }
    function C(e) {
        switch(e){
            case "regular":
                return "regular";
            case "realtime":
                return "realtime";
            default:
                return "private";
        }
    }
    function b() {
        const e = d?.();
        return e ?? (r("gkx")("26258") ? o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb() ? o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.BETA : o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.RELEASE : o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.ALPHA);
    }
    function v() {
        if (r("gkx")("26259")) {
            return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.INTERN;
        }
        if (r("gkx")("26258")) {
            return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.PROD;
        }
        if (r("gkx")("26256")) {
            return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.E2E;
        }
        throw r("err")("invalid env");
    }
    function S() {
        return o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
    }
    function R() {
        o("WAWebWamGlobals").Global.set({
            appBuild: b(),
            appIsBetaRelease: S()
        });
    }
    function L(e) {
        if (r("gkx")("26256")) {
            const t = window.__je2e_recordWAMEvent;
            if (t || typeof t === "function") {
                t(babelHelpers.extends({
                    name: e.$className
                }, e.all));
            }
        }
    }
    function E(e, t) {
        if (r("gkx")("26256")) {
            const n = window.__je2e_recordWAMEvent;
            if (n || typeof n === "function") {
                n({
                    name: e,
                    value: t
                });
            }
        }
    }
    function k() {
        if (r("WAWebEnvironment").isGuest) {
            return m;
        }
        return o("WAWebWamConstants").WAM_IN_MEMORY_BUFFERING_DURATION_IN_SECS;
    }
    function I() {
        if (r("WAWebEnvironment").isGuest) {
            return p;
        }
        return o("WAWebWamConstants").WAM_BUFFER_ROTATE_INTERVAL_IN_SECS;
    }
    l.logPsIdUpdate = _;
    l.processWorkerWamDataRow = h;
    l.isWamBufferTooBigToUpload = y;
    l.getChannelFromBufferKey = C;
    l.getAppBuild = b;
    l.getWamEnv = v;
    l.getAppIsBetaRelease = S;
    l.refreshBetaWamGlobals = R;
    l.maybeForwardWamEventToJestE2e = L;
    l.maybeForwardWamAttributeToJestE2e = E;
    l.getInMemoryBufferingDurationInSecs = k;
    l.getBufferRotateIntervalInSecs = I;
}, 98);