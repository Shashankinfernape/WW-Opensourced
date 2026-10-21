__d("WAWebVoipBrowserAudioStatus", [
    "WAGetMediaDevicesSupportedConstraints",
    "WALogger",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = -1;
    const c = 7;
    let d = null;
    let m = null;
    let p = true;
    function _(e, t = true) {
        d = e;
        p = t;
    }
    function f() {
        const e = d ?? m;
        if (e == null || p || m == null) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            autoGainControl: m.autoGainControl
        });
    }
    function g() {
        const e = f();
        if (e == null) {
            return u;
        }
        if (o("WAWebUA").UA.isWebkit && e.echoCancellation) {
            return c;
        }
        return y(e);
    }
    function h() {
        if (m == null) {
            const t = o("WAGetMediaDevicesSupportedConstraints").getMediaDevicesSupportedConstraints();
            const n = t?.echoCancellation === true;
            const r = t?.noiseSuppression === true;
            const a = t?.autoGainControl === true;
            m = {
                echoCancellation: n,
                noiseSuppression: r,
                autoGainControl: a
            };
            if (n || r || a) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[preDetectBrowserAudioCapabilities] EC=",
                    " NS=",
                    " AGC=",
                    ""
                ])), String(n), String(r), String(a));
            } else {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[preDetectBrowserAudioCapabilities] no AEC/NS/AGC support"
                ])));
            }
        }
    }
    function y(e) {
        return (e.echoCancellation ? 1 : 0) + (e.noiseSuppression ? 2 : 0) + (e.autoGainControl ? 4 : 0);
    }
    l.BROWSER_AUDIO_PROCESSING_STATUS_UNKNOWN = u;
    l.BROWSER_AUDIO_PROCESSING_STATUS_ALL = c;
    l.setBrowserAudioProcessingApplied = _;
    l.getBrowserAudioProcessingStatusForVoipStack = g;
    l.preDetectBrowserAudioCapabilities = h;
}, 98);