__d("WAWebVoipUiPopoutWindowPortalHelpers", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCallCollection",
    "WAWebLazyLoadedRetriable",
    "WAWebUA",
    "WAWebVoipPopoutWindowState",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = 3000;
    const g = 500;
    const h = 250;
    const y = 10000;
    const C = new Map;
    const b = new WeakMap;
    function v(e, t, isFromPopout = false, acquiredInWindow = null) {
        if (t != null) {
            C.set(e, t);
            b.set(t, {
                acquiredInWindow,
                isFromPopout
            });
        } else {
            C.delete(e);
        }
    }
    function S(e, t) {
        if (t == null) {
            return false;
        }
        const r = C.get(e);
        if (r == null) {
            return false;
        }
        return b.get(r)?.acquiredInWindow === t;
    }
    function R() {
        C.clear();
    }
    function L(e) {
        if (e == null) {
            return false;
        }
        return b.get(e)?.isFromPopout ?? false;
    }
    function E() {
        const e = [];
        for (const [n, r] of C){
            if (L(r)) {
                e.push({
                    type: n,
                    stream: r
                });
            }
        }
        return e;
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ needsAudio, needsVideo, targetWindow }) {
            if (!o("WAWebUA").UA.isSafari || !needsVideo || !needsAudio) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip][popout] skip prime: safari=",
                    " vid=",
                    " aud=",
                    ""
                ])), String(o("WAWebUA").UA.isSafari), String(needsVideo), String(needsAudio));
                return;
            }
            try {
                const d = targetWindow.navigator?.mediaDevices;
                if (d == null) {
                    return;
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip][popout] priming Safari cam+mic perm"
                ])));
                const m = yield d.getUserMedia({
                    audio: true,
                    video: true
                });
                m.getTracks().forEach((e)=>{
                    e.stop();
                });
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip][popout] Safari perm granted, tracks released"
                ])));
            } catch (error) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip][popout] Safari perm prime failed, falling back"
                ]))).catching(r("getErrorSafe")(error));
            }
        });
        return I.apply(this, arguments);
    }
    const T = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVoipVideoCameraCapture").__setRef("WAWebVoipUiPopoutWindowPortalHelpers").load();
        return e.WAWebVoipVideoCameraCapture;
    }), "WAWebVoipVideoCameraCapture");
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (r("WAWebCallCollection").activeCall?.id === t) {
                const i = yield T();
                if (r("WAWebCallCollection").activeCall?.id === t) {
                    const { currentDeviceId, captureParams } = i;
                    const u = i.getLastCapturedStream();
                    if (!(currentDeviceId == null || currentDeviceId === "" || captureParams == null || u == null)) {
                        yield i.startCameraCapture({
                            camera_id_requested: currentDeviceId,
                            height: captureParams.height,
                            isAVUpgrade: false,
                            max_fps: captureParams.maxFps,
                            targetWindow: e,
                            width: captureParams.width
                        });
                        r("WAWebCallCollection").activeCall?.id;
                    }
                }
            }
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = null;
            try {
                if (e == null || r("WAWebCallCollection").activeCall?.id !== e) {
                    return false;
                }
                const i = yield T();
                if (r("WAWebCallCollection").activeCall?.id !== e) {
                    return false;
                }
                const l = i.captureParams;
                const s = i.getLastCapturedStream();
                if (l == null || s == null) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: popout reuse: no stream/params, skipping camera repump"
                    ])));
                    return false;
                }
                const u = s.getVideoTracks().some((e)=>e.readyState === "live");
                if (u) {
                    t = s.clone();
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: popout reuse: repumping camera from cloned stream"
                    ])));
                    yield i.startWithStream(t, l.width, l.height, l.maxFps, true);
                    return true;
                }
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: popout reuse: no live video track, skipping camera repump"
                ])));
                return false;
            } catch (error) {
                t?.getTracks().forEach(function(e) {
                    e.stop();
                });
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: popout reuse: camera repump failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-popout-reuse-camera-repump-failed");
                return false;
            }
        });
        return P.apply(this, arguments);
    }
    function N(visibilityState) {
        o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("popoutWindowVisibilityChanged", {
            visibilityState,
            isCallActiveInPopoutWindow: o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow(),
            hasPopoutWindow: o("WAWebVoipPopoutWindowState").getPopoutWindow() != null
        });
    }
    l.POPOUT_WINDOW_CALL_END_CLOSE_DELAY_MS = f;
    l.SAFARI_POPOUT_CLOSE_POLL_INTERVAL_MS = g;
    l.STREAM_REACQUISITION_POLL_INTERVAL_MS = h;
    l.STREAM_REACQUISITION_TIMEOUT_MS = y;
    l.setMediaStream = v;
    l.wasStreamAcquiredInWindow = S;
    l.clearActiveStreams = R;
    l.getStreamsFromPopout = E;
    l.primeSafariMediaPermissions = k;
    l.reacquireCameraInTargetWindow = D;
    l.reacquireCameraReusingStreamForPopout = $;
    l.emitPopoutWindowVisibilityChanged = N;
}, 98);