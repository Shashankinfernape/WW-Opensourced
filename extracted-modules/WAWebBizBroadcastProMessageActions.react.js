__d("WAWebBizBroadcastProMessageActions.react", [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcInfo.react",
    "WDSMenuItem.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = r("JSResourceForInteraction")("WAWebBizBroadcastProOpenCampaignDetails").__setRef("WAWebBizBroadcastProMessageActions.react");
    function m(e) {
        const t = o("react-compiler-runtime").c(8);
        const { campaignId, isBusinessBroadcastEnabled, msg } = e;
        let l;
        if (t[0] !== campaignId || t[1] !== msg.id) {
            l = function() {
                o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, msg.id.toString());
                d.load().then((e)=>e(campaignId)).catch(p);
            };
            t[0] = campaignId;
            t[1] = msg.id;
            t[2] = l;
        } else {
            l = t[2];
        }
        const u = l;
        let m;
        if (t[3] !== u || t[4] !== isBusinessBroadcastEnabled) {
            const Component = r("WDSMenuItem.react");
            m = isBusinessBroadcastEnabled ? <Component Icon={r("WDSIconIcInfo.react")} title={s._("Broadcast details")} onPress={u} testid="mi-broadcast-details"/> : null;
            t[3] = u;
            t[4] = isBusinessBroadcastEnabled;
            t[5] = m;
        } else {
            m = t[5];
        }
        let _;
        if (t[6] !== m) {
            _ = <>{m}</>;
            t[6] = m;
            t[7] = _;
        } else {
            _ = t[7];
        }
        return _;
    }
    function p(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to open BB Pro campaign details"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("bb-pro-message-details-open-failed");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastProLoadFailedInlineMessage()
        }));
    }
    l.default = m;
}, 226);