__d("WAWebAutoCrosspostAction", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebActionToast.react",
    "WAWebCrosspostingQplUtils",
    "WAWebMediaOpaqueData",
    "WAWebSettingsModel",
    "WAWebToastManager",
    "WAWebUserPrefsStatus",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (r("WAWebSettingsModel").linkState === o("WAWebAccountLinkingConstants").AccountLinkState.Active) {
                const a = yield (u || (u = n("Promise"))).all([
                    o("WAWebUserPrefsStatus").getShareToFB(),
                    o("WAWebUserPrefsStatus").getShareToIG()
                ]);
                const is_auto_crosspost_setting_fb = a[0];
                const is_auto_crosspost_setting_ig = a[1];
                const destinations = [];
                if (is_auto_crosspost_setting_fb && r("WAWebSettingsModel").isFBLinked) {
                    destinations.push("F");
                }
                if (is_auto_crosspost_setting_ig && r("WAWebSettingsModel").isIGLinked) {
                    destinations.push("I");
                }
                if (destinations.length !== 0) {
                    o("WAWebCrosspostingQplUtils").crosspostingQplStart();
                    o("WAWebCrosspostingQplUtils").crosspostingQplPoint(o("WAWebCrosspostingQplUtils").CrosspostingQplPoints.INIT_CROSSPOST);
                    o("WAWebCrosspostingQplUtils").crosspostingQplAnnotate({
                        string: {
                            entrypoint: "auto_xpost_status_share_view"
                        },
                        bool: {
                            is_destination_fb: destinations.includes("F"),
                            is_destination_ig: destinations.includes("I"),
                            is_auto_crosspost_setting_fb,
                            is_auto_crosspost_setting_ig,
                            is_crosspost_experience_v2_at_start: false
                        }
                    });
                    if (t.type === "video") {
                        const f = parseFloat(t.mediaData?.duration ?? "0");
                        if (f > 60) {
                            o("WAWebCrosspostingQplUtils").crosspostingQplPoint(o("WAWebCrosspostingQplUtils").CrosspostingQplPoints.SEE_CROSSPOST_ERROR);
                            o("WAWebCrosspostingQplUtils").crosspostingQplEndFail();
                            return;
                        }
                    }
                    const g = yield u.all([
                        r("JSResourceForInteraction")("WAWebCrosspostingJob").__setRef("WAWebAutoCrosspostAction").load(),
                        r("JSResourceForInteraction")("WAWebTextStatusImageRenderer").__setRef("WAWebAutoCrosspostAction").load(),
                        r("JSResourceForInteraction")("WAWebCrosspostingConfig").__setRef("WAWebAutoCrosspostAction").load()
                    ]);
                    const h = g[0];
                    const y = g[1];
                    const C = g[2];
                    const b = h.crosspostStatus;
                    const { isTextStatusMessage, renderTextStatusToBlob } = y;
                    const { getAutoCrosspostFailureToastMsg, getAutoCrosspostPendingToastMsg, getAutoCrosspostSuccessToastMsg } = C;
                    let statusBlob;
                    try {
                        statusBlob = yield _(t, isTextStatusMessage, renderTextStatusToBlob);
                    } catch (error) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE] Auto-crosspost: failed to get status blob: ",
                            ""
                        ])), String(error)).sendLogs("auto-crosspost-blob-error");
                        o("WAWebCrosspostingQplUtils").crosspostingQplPoint(o("WAWebCrosspostingQplUtils").CrosspostingQplPoints.SEE_CROSSPOST_ERROR);
                        o("WAWebCrosspostingQplUtils").crosspostingQplEndFail();
                        return;
                    }
                    if (statusBlob == null) {
                        o("WAWebCrosspostingQplUtils").crosspostingQplPoint(o("WAWebCrosspostingQplUtils").CrosspostingQplPoints.SEE_CROSSPOST_ERROR);
                        o("WAWebCrosspostingQplUtils").crosspostingQplEndFail();
                        return;
                    }
                    const initialAction = new (o("WAWebActionToast.react")).ActionType(getAutoCrosspostPendingToastMsg(destinations));
                    const pendingAction = b({
                        caption: t.caption,
                        destinations,
                        statusBlob,
                        statusKey: t.id,
                        statusTimestamp: t.t
                    }).then(()=>{
                        let e;
                        (e = o("WAWebCrosspostingQplUtils")).crosspostingQplPoint(e.CrosspostingQplPoints.FINISH_CROSSPOST);
                        e.crosspostingQplPoint(e.CrosspostingQplPoints.SEE_CROSSPOST_SUCCESS);
                        e.crosspostingQplEndSuccess();
                        return new (o("WAWebActionToast.react")).ActionType(getAutoCrosspostSuccessToastMsg(destinations));
                    }).catch((e)=>{
                        let t;
                        (t = o("WAWebCrosspostingQplUtils")).crosspostingQplPoint(t.CrosspostingQplPoints.FINISH_CROSSPOST);
                        t.crosspostingQplPoint(t.CrosspostingQplPoints.SEE_CROSSPOST_ERROR);
                        t.crosspostingQplEndFail();
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE] Auto-crosspost failed: ",
                            ""
                        ])), String(e)).sendLogs("auto-crosspost-failed");
                        return new (o("WAWebActionToast.react")).ActionType(getAutoCrosspostFailureToastMsg(destinations));
                    });
                    o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
                        initialAction,
                        pendingAction
                    }));
                }
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (t(e)) {
                return n(e);
            }
            const a = e.mediaData?.mediaBlob;
            if (a instanceof r("WAWebMediaOpaqueData")) {
                return a.getBlob();
            }
            return a;
        });
        return f.apply(this, arguments);
    }
    l.triggerAutoCrosspostIfEnabled = m;
}, 98);