__d("WAWebVoipBridgeMediaStreamHelpers", [
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipGatingUtils",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let t_targetWindow = t.targetWindow;
            if (e != null && o("WAWebVoipUiPopoutWindowPortalContainer.react").getPopoutWindow() == null) {
                e = null;
            }
            if (t_targetWindow == null) {
                const r = o("WAWebVoipUiPopoutWindowPortalContainer.react").getPopoutWindow();
                const a = r != null && !document.hasFocus();
                let i;
                try {
                    i = r != null && r.location.origin === window.location.origin;
                } catch (e) {
                    i = false;
                }
                let l = a;
                if (o("WAWebUA").UA.isSafari) {
                    l = a && o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsPopoutUiReady() && i;
                }
                const s = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled();
                const u = s && t.type === "camera" && r != null && e === "main";
                t.type === "camera" && r != null;
                if (o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari) {
                    if (!u) {
                        if (l) {
                            t_targetWindow = r;
                        } else {
                            o("WAWebUA").UA.isSafari;
                        }
                    }
                } else if (t.type !== "microphone" && a) {
                    t_targetWindow = r;
                }
            }
            const c = yield o("WAWebVoipAcquireMediaStream").acquireVoipMediaStream(babelHelpers.extends({}, t, {
                targetWindow: t_targetWindow
            }));
            if (c != null) {
                const d = t.type;
                if (d === "camera" || d === "desktop") {
                    const m = o("WAWebVoipUiPopoutWindowPortalContainer.react").getPopoutWindow();
                    const p = t_targetWindow != null && t_targetWindow === m;
                    o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream(d, c, p, t_targetWindow);
                }
                if (d === "camera") {
                    const _ = o("WAWebVoipUiPopoutWindowPortalContainer.react").getPopoutWindow();
                    e = t_targetWindow != null && t_targetWindow === _ ? "popout" : "main";
                }
                if (d === "desktop" && o("WAWebUA").UA.isSafari && o("WAWebVoipUiPopoutWindowPortalContainer.react").getPopoutWindow() != null) {
                    e = null;
                }
            }
            return c;
        });
        return u.apply(this, arguments);
    }
    l.voipAcquireMediaStreamImpl = s;
}, 98);