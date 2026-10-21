__d("WAWebVoipCallBlockedModals", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebMiscBrowserUtils",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("WAWebVoipGatingUtils").getUnsupportedBrowserReason();
        if (e == null) {
            return false;
        }
        const t = o("WAWebVoipGatingUtils").getCrossOriginIsolatedState();
        e: {
            if (e === "missing_shared_array_buffer") {
                o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingSAB();
                o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingSAB(t);
                break e;
            }
            if (e === "missing_atomics") {
                o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingAtomics();
                o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingAtomics(t);
                break e;
            }
            if (e === "missing_rtc_peer_connection") {
                o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingRTC();
                o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingRTC(t);
                break e;
            }
            if (e === "broken_voip_wasm") {
                o("WAWebCoreActionsODS").logCallBrowserUnsupportedBrokenWasm();
                o("WAWebCoreActionsODS").logCallBrowserCapabilityBrokenWasm(t);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(e === "broken_voip_wasm" ? <Component tsNavigationData={{
            surface: "unknown",
            viewName: "voip-start-call"
        }} onOK={o("WAWebModalManager").closeModalManager} title={s._("Your version of Safari doesn’t support calls")}>{s._("Please update your browser to Safari 26.3 or higher and try again.")}</Component> : <Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "voip-start-call"
        }} onOK={o("WAWebModalManager").closeModalManager} title={s._("Your browser doesn’t support calling")}>{s._("Please update your browser or try another browser.")}</Component_1>);
        return true;
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError() || o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInitAttemptInFlight() && !r("WAWebEnvironment").isWindows) {
                return false;
            }
            const e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend();
            const e_WAWebVoipInit = e.WAWebVoipInit;
            if (yield e_WAWebVoipInit.retryWAWebVoipInitAfterFailure()) {
                return false;
            }
            p();
            return true;
        });
        return m.apply(this, arguments);
    }
    function p() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "voip-start-call"
        }} onOK={o("WAWebModalManager").closeModalManager} title={s._("Couldn't place call")}>{s._("Refresh the page and try again.")}</Component>);
    }
    function _() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component testid="voip_init_unavailable_reload_modal" tsNavigationData={{
            surface: "unknown",
            viewName: "voip-start-call"
        }} cancelText={s._("Not now")} okText={s._("Reload")} onCancel={o("WAWebModalManager").closeModalManager} onOK={function() {
            o("WAWebModalManager").closeModalManager();
            r("WAWebMiscBrowserUtils").hardRefresh();
        }} onOverlayClick={o("WAWebModalManager").closeModalManager} title={s._("Reload to restore calls")}>{s._("Calling couldn’t start. Incoming calls won’t ring on this computer until you reload the page.")}</Component>);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (c()) {
                return true;
            }
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipStackUnresponsive()) {
                o("WAWebCoreActionsODS").logCallInitBlockedStackUnresponsive();
                _();
                return true;
            }
            return d();
        });
        return g.apply(this, arguments);
    }
    function h() {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("End your current call to start a new one.")
        }));
    }
    l.showCouldNotPlaceCallModal = p;
    l.showVoipInitUnavailableModal = _;
    l.showCallBlockedModalIfNeeded = f;
    l.showEndCurrentCallToast = h;
}, 226);