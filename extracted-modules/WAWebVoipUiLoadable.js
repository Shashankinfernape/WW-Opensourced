__d("WAWebVoipUiLoadable", [
    "JSResourceForInteraction",
    "WAWebCallCollection",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallLinkLoadingPreview.react",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOutgoingLoadingPreview.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        let e;
        (e = o("WAWebVoipActivityTracker")).trackUiActivity(e.VoipUiActivity.VOIP_UI_BUNDLE_LOADING);
        const t = yield r("JSResourceForInteraction")("WAWebVoipUi.react").__setRef("WAWebVoipUiLoadable").load();
        e.trackUiActivity(e.VoipUiActivity.VOIP_UI_BUNDLE_LOADED);
        return t;
    }), "WAWebVoipUiLoadable");
    function c() {
        if (typeof window.requestIdleCallback === "function") {
            if (!o("WAWebVoipHiddenPrewarmIdleWork").requestHiddenPrewarmIdleWork("ui_bundle", d)) {
                window.requestIdleCallback(d);
            }
        }
    }
    function d() {
        r("JSResourceForInteraction")("WAWebVoipUi.react").__setRef("WAWebVoipUiLoadable").load();
    }
    if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
        c();
    } else {
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on("voipInitSuccess", c);
    }
    const m = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            const pendingCallLink = r("WAWebCallCollection").pendingCallLink;
            if (pendingCallLink != null) {
                return s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
                    isVideo: pendingCallLink.isVideo
                });
            }
            const pendingOutgoingCall = r("WAWebCallCollection").pendingOutgoingCall;
            if (pendingOutgoingCall != null) {
                return s.jsx(r("WAWebVoipOutgoingLoadingPreview.react"), {
                    isJoin: pendingOutgoingCall.isJoin,
                    isVideo: pendingOutgoingCall.isVideo
                });
            }
            return <></>;
        }
    });
    l.requireBundle = u;
    l.WAWebVoipUiLoadable = m;
}, 98);