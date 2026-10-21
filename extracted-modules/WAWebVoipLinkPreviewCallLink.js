__d("WAWebVoipLinkPreviewCallLink", [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLinkAutoJoinConsent",
    "WAWebEnsureVoipInited",
    "WAWebEventEmitter",
    "WAWebFrontendContactGetters",
    "WAWebPipController",
    "WAWebUserPrefsVoip",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallLinkBundlePreloader",
    "WAWebVoipCallStateUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipMoveCallHere",
    "WAWebVoipNackHandlers",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipStackInterface",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    const S = 22;
    let R = {
        videoMuted: false,
        audioMuted: false
    };
    const L = new (r("WAWebEventEmitter"));
    function E() {
        return R;
    }
    function k(e) {
        R = {
            videoMuted: e.videoMuted,
            audioMuted: e.audioMuted
        };
        L.trigger("change", R);
    }
    function I() {
        if (r("WAWebPipController").manager != null) {
            r("WAWebPipController").openVoipUiPiPForCallLink();
            return;
        }
        const e = 5000;
        const t = 100;
        const n = Date.now();
        const o = function() {
            if (r("WAWebPipController").manager != null) {
                if (r("WAWebCallCollection").pendingCallLink != null) {
                    r("WAWebPipController").openVoipUiPiPForCallLink();
                }
                return;
            }
            if (Date.now() - n < e) {
                window.setTimeout(o, t);
            }
        };
        window.setTimeout(o, t);
    }
    function T(e) {
        if (e.audioDeviceId != null) {
            o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.audioDeviceId);
        }
        if (e.speakerDeviceId != null) {
            o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e.speakerDeviceId);
        }
        if (e.videoDeviceId != null) {
            const t = e.videoDeviceId;
            o("WAWebUserPrefsVoip").setLandingPageVideoDeviceId(t);
            o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(t);
        }
        if (e.colorIndex != null) {
            o("WAWebUserPrefsVoip").saveLandingPageColorIndex(e.colorIndex);
        }
    }
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ data }, t = 0) {
            const { audioDeviceId, audioMuted, autoJoin, callType, colorIndex, speakerDeviceId, token, videoDeviceId, videoMuted } = data;
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink token=",
                " type=",
                " lobby=",
                ""
            ])), token, callType, t);
            if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink blocked — call links not enabled"
                ])));
                o("WAWebCallLinkAutoJoinConsent").dropAutoJoinConsentRefusedByGate(autoJoin, token);
                $();
                return;
            }
            if (P(token)) {
                o("WAWebCallLinkAutoJoinConsent").dropAutoJoinConsentRefusedByExistingCall(autoJoin, token);
                return;
            }
            const E = o("WAWebCallLinkAutoJoinConsent").consumeAutoJoinConsent(autoJoin, token);
            if (yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink blocked — call unavailable"
                ])));
                return;
            }
            R.videoMuted = videoMuted ?? false;
            R.audioMuted = audioMuted ?? false;
            const k = callType === "video";
            if (E) {
                T({
                    audioDeviceId,
                    colorIndex,
                    speakerDeviceId,
                    videoDeviceId
                });
            }
            o("WAWebVoipCallLinkBundlePreloader").preloadCallLinkBundles();
            const D = o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
            if (!D) {
                r("WAWebCallCollection").setPendingCallLink({
                    isVideo: k
                });
                I();
            }
            try {
                yield o("WAWebEnsureVoipInited").ensureVoipInitialized();
            } catch (error) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink init failed: ",
                    ""
                ])), String(error));
                r("WAWebCallCollection").setPendingCallLink(null);
                r("WAWebPipController").closePiP();
                if (!(error instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError)) {
                    o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal();
                }
                return;
            }
            const x = o("WAWebFrontendContactGetters").getMyUsername();
            const N = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (N == null) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink aborted - voipStackInterface is null"
                ])));
                r("WAWebCallCollection").setPendingCallLink(null);
                r("WAWebPipController").closePiP();
                o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal();
                return;
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink hasVoipStack=true isVideo=",
                ""
            ])), k);
            if (token.length !== S) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink: invalid token length ",
                    ", expected ",
                    ""
                ])), token.length, S);
                r("WAWebCallCollection").setPendingCallLink(null);
                r("WAWebPipController").closePiP();
                o("WAWebVoipNackHandlers").showErrorDialog(s._("Invalid call link"));
                return;
            }
            const M = yield N.previewCallLink(token, k, t, x, videoMuted === true);
            if (audioMuted === true && N.type === "web") {
                yield N.setCallMute(true);
            }
            if (E && N.type === "web") {
                if (M === 0) {
                    o("WAWebCallLinkAutoJoinConsent").reportAutoJoinAttempted();
                    yield N.joinCallLink();
                } else {
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleClickCallLink previewCallLink failed, skip join ",
                        ""
                    ])), String(M));
                }
            }
        });
        return x.apply(this, arguments);
    }
    function $() {
        o("WAWebVoipNackHandlers").showErrorDialog(s._("Calling isn't available on WhatsApp Web right now. Try joining from WhatsApp on your phone."), undefined, s._("Can't join call"));
    }
    function P(token) {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall == null) {
            return false;
        }
        const a = activeCall.getState();
        if (a == null || o("WAWebVoipCallStateUtils").isCallTerminal(a)) {
            return false;
        }
        if (activeCall.isCallLink && activeCall.callLinkToken === token && N(activeCall)) {
            return true;
        }
        if (o("WAWebVoipCallStateUtils").isCallIncoming(a) && activeCall.msg != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink — incoming call ringing, opening miniplayer"
            ])));
            r("WAWebPipController").openVoipUiPiP(activeCall.msg);
            return true;
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleClickCallLink blocked — already in a different active call"
        ])));
        o("WAWebVoipCallBlockedModals").showEndCurrentCallToast();
        return true;
    }
    function N(activeCall) {
        if (o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow() || o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen()) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink — already in this call link, pulling call back to this window"
            ])));
            o("WAWebVoipMoveCallHere").moveCallHere();
            return true;
        }
        const e_callLinkState = activeCall.callLinkState;
        if (e_callLinkState != null && e_callLinkState !== o("WAWebVoipWaCallEnums").CallLinkState.None) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink — already in this call link, reopening call-link UI"
            ])));
            r("WAWebPipController").openVoipUiPiPForCallLink();
            return true;
        }
        if (activeCall.msg != null) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink — already in this call link, opening miniplayer"
            ])));
            r("WAWebPipController").openVoipUiPiP(activeCall.msg);
            return true;
        }
        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleClickCallLink — same call link but no UI to reopen"
        ])));
        return false;
    }
    l.LandingPageMutePrefsEmitter = L;
    l.getLandingPageMutePrefs = E;
    l.updateLandingPageMutePrefs = k;
    l.applyCallLinkDevicePrefs = T;
    l.handleClickCallLink = D;
}, 226);