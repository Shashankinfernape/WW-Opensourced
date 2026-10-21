__d("WAWebVoipGatingUtils", [
    "WALogger",
    "WAOnceWithReset",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebUA",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f = false;
    function g() {
        if (o("WAWebUA").UA.isWebkit || o("WAWebUA").UA.isSafari) {
            return true;
        }
        const navigator_userAgent = navigator.userAgent;
        return !!/CriOS|FxiOS|iPhone|iPad|iPod/.test(navigator_userAgent);
    }
    let h = null;
    function y() {
        if (h != null) {
            return h;
        }
        h = false;
        if (!g() || window.OffscreenCanvas === undefined || document === undefined) {
            return false;
        }
        try {
            const t = document.createElement("canvas");
            h = t.getContext("bitmaprenderer") != null;
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [portal-mode] bitmaprenderer probe failed"
            ]))).catching(r("getErrorSafe")(error));
            h = false;
        }
        return h;
    }
    function C() {
        const e = Reflect.get(window, "crossOriginIsolated");
        if (typeof e === "boolean") {
            return e;
        }
        return null;
    }
    const b = r("WAOnceWithReset")(function() {
        const e = C();
        const t = Reflect.get(window, "isSecureContext") === true;
        const n = String(e);
        if (window.SharedArrayBuffer === undefined) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [browser] no SharedArrayBuffer coi=",
                " sec=",
                " ",
                "/",
                " ",
                "/",
                ""
            ])), n, t, o("WAWebUA").UA.browser, o("WAWebUA").UA.browserVersion, o("WAWebUA").UA.os, o("WAWebUA").UA.osVersion);
            return "missing_shared_array_buffer";
        }
        if (window.Atomics === undefined) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [browser] no Atomics coi=",
                " sec=",
                " ",
                "/",
                " ",
                "/",
                ""
            ])), n, t, o("WAWebUA").UA.browser, o("WAWebUA").UA.browserVersion, o("WAWebUA").UA.os, o("WAWebUA").UA.osVersion);
            return "missing_atomics";
        }
        if (window.RTCPeerConnection === undefined) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [browser] no RTCPeerConnection coi=",
                " sec=",
                " ",
                "/",
                " ",
                "/",
                ""
            ])), n, t, o("WAWebUA").UA.browser, o("WAWebUA").UA.browserVersion, o("WAWebUA").UA.os, o("WAWebUA").UA.osVersion);
            return "missing_rtc_peer_connection";
        }
        if (o("WAWebUA").UA.isBrokenVoipWasm) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [browser] Safari ",
                " broken WASM coi=",
                " sec=",
                " ",
                "/",
                " ",
                "/",
                ""
            ])), o("WAWebUA").UA.browserVersion, n, t, o("WAWebUA").UA.browser, o("WAWebUA").UA.browserVersion, o("WAWebUA").UA.os, o("WAWebUA").UA.osVersion);
            return "broken_voip_wasm";
        }
        return null;
    });
    function v() {
        return b() != null;
    }
    function S() {
        if (r("WAWebEnvironment").isWindows) {
            if (!f) {
                f = true;
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [gating] win=true ",
                    "/",
                    " ",
                    "/",
                    ""
                ])), o("WAWebUA").UA.browser, o("WAWebUA").UA.browserVersion, o("WAWebUA").UA.os, o("WAWebUA").UA.osVersion);
            }
            return true;
        }
        if (k()) {
            if (!f) {
                f = true;
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [gating] guest=true ab=true ",
                    "/",
                    " ",
                    "/",
                    ""
                ])), o("WAWebUA").UA.browser, o("WAWebUA").UA.browserVersion, o("WAWebUA").UA.os, o("WAWebUA").UA.osVersion);
            }
            return true;
        }
        const e = o("WAWebABProps").getABPropConfigValue("enable_web_calling");
        if (!f) {
            f = true;
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [gating] win=false ab=",
                " ",
                "/",
                " ",
                "/",
                ""
            ])), e, o("WAWebUA").UA.browser, o("WAWebUA").UA.browserVersion, o("WAWebUA").UA.os, o("WAWebUA").UA.osVersion);
        }
        return e;
    }
    function R() {
        return o("WAWebABProps").getABPropConfigValue("coex_calling_permissions_3p_enabled");
    }
    function L() {
        return o("WAWebABProps").getABPropConfigValue("is_guest_calling_eligible");
    }
    function E() {
        return o("WAWebABProps").getABPropConfigValue("is_guest_calling_eligible");
    }
    function k() {
        return r("WAWebEnvironment").isGuest;
    }
    function I() {
        return o("WAWebABProps").getABPropConfigValue("web_calling_smooth_call_link_lobby");
    }
    function T() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_voip_mic_health_experience");
    }
    function D() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_voip_mic_health_compact_affordance");
    }
    function x() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_voip_mic_input_level");
    }
    function $() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_voip_speaker_menu_split");
    }
    const P = 250;
    function N() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_voip_device_menu_animation_stagger_ms");
        if (!Number.isFinite(e) || e <= 0) {
            return 0;
        }
        return Math.min(e, P);
    }
    function M(e) {
        return e.group_jid != null || e.group_info_updates != null && e.group_info_updates.length > 0;
    }
    function w() {
        return !r("WAWebEnvironment").isWindows && !v() && o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function A() {
        return w() && o("WAWebABProps").getABPropConfigValue("wa_web_calling_chat_empty_state_update_enabled");
    }
    function F() {
        return w() && o("WAWebABProps").getABPropConfigValue("wa_web_calling_whats_new_modal_update_enabled");
    }
    function O() {
        return w() && o("WAWebABProps").getABPropConfigValue("wa_web_calling_chatlist_activation_banner_enabled");
    }
    function B() {
        return o("WAWebABProps").getABPropConfigValue("web_calling_missed_call_banner");
    }
    function W() {
        const e = S() && !v();
        return e && o("WAWebABProps").getABPropConfigValue("wa_web_calling_calls_tab_empty_state_update_enabled");
    }
    function q() {
        if (r("WAWebEnvironment").isWindows) {
            return true;
        }
        if (v()) {
            return false;
        }
        if (k()) {
            return true;
        }
        return o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    let U = false;
    function V(e) {
        U = e;
    }
    let H = false;
    function G(e) {
        H = e;
    }
    function z() {
        return H;
    }
    function j(e) {
        return e.mapChildrenWithTag("relay", function(e) {
            return e.mapChildrenWithTag("te2", function(e) {
                return e.hasAttr("is_fna");
            }).some(Boolean);
        }).some(Boolean);
    }
    function K() {
        return r("WAWebEnvironment").isWindows && o("WAWebABProps").getABPropConfigValue("wa_web_win_hybrid_plus_enabled") === true;
    }
    function Q() {
        return !r("WAWebEnvironment").isWindows || K() && r("WAWebEnvironment").getEnvironment() !== "prod";
    }
    let X = false;
    function Y() {
        X = true;
    }
    function J() {
        X = false;
    }
    function Z() {
        const e = r("justknobx")._("1929");
        return e && !K();
    }
    function ee() {
        return o("WAWebABProps").getABPropConfigValue("enable_web_voip_webtransport");
    }
    function te() {
        if (g() || U || K() || X) {
            return false;
        }
        return ee();
    }
    function ne() {
        return ee();
    }
    function re() {
        return o("WAWebABProps").getABPropConfigValue("web_voip_av_sync_strict_fifo_drain") === true;
    }
    function oe() {
        return o("WAWebABProps").getABPropConfigValue("gc_device_switching_killswitch");
    }
    function ae() {
        return o("WAWebABProps").getABPropConfigValue("refresh_group_info_on_mismatch");
    }
    function ie() {
        return o("WAWebABProps").getABPropConfigValue("call_info_optimizations_1on1");
    }
    function le() {
        return o("WAWebABProps").getABPropConfigValue("call_info_optimizations_lgc");
    }
    function se() {
        return o("WAWebABProps").getABPropConfigValue("call_info_optimizations_ahgc_call_link");
    }
    function ue() {
        return o("WAWebABProps").getABPropConfigValue("call_info_optimizations_ahgc_call_link");
    }
    function ce({ isAdHocGroupCall, isCallLink, isGroup }) {
        if (isCallLink === true) {
            return ue();
        }
        if (isAdHocGroupCall) {
            return se();
        }
        if (isGroup) {
            return le();
        }
        return ie();
    }
    function de() {
        const e = ie();
        const t = o("WAWebABProps").getABPropConfigValue("call_info_optimizations_1on1_context_menu");
        return e && t;
    }
    function me({ isAdHocGroupCall, isCallLink, isGroup }) {
        if (isCallLink === true) {
            return ue();
        }
        if (isAdHocGroupCall) {
            return se();
        }
        if (isGroup) {
            return le();
        }
        return de();
    }
    function pe() {
        return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function _e() {
        return o("WAWebUA").UA.isSafari;
    }
    function fe() {
        return "documentPictureInPicture" in window && !o("WAWebUA").UA.isBrokenDocPip;
    }
    function ge() {
        return S() && r("justknobx")._("4943");
    }
    l.isWebKitBrowser = g;
    l.shouldUsePortalModeForSafari = y;
    l.getCrossOriginIsolatedState = C;
    l.getUnsupportedBrowserReason = b;
    l.isUnsupportedBrowserForWebCalling = v;
    l.isCallingEnabled = S;
    l.isCoexCallingPermissionsEnabled = R;
    l.canCreateGuestCallLinks = L;
    l.isGuestCallingWaitingRoomAdminXpEnabled = E;
    l.isGuestViewer = k;
    l.isSmoothCallLinkLobbyEnabled = I;
    l.isMicrophoneHealthExperienceEnabled = T;
    l.isMicrophoneHealthCompactAffordanceEnabled = D;
    l.isMicrophoneDeviceMenuLevelEnabled = x;
    l.isAudioDeviceMenuSplitEnabled = $;
    l.getDeviceMenuAnimationStaggerMs = N;
    l.isGroupCallMessage = M;
    l.isWebGroupCallingUsable = w;
    l.isWebIntroPanelCallingChangeEnabled = A;
    l.isWhatsNewCallingHighlightEnabled = F;
    l.isChatlistCallingBannerEnabled = O;
    l.isChatlistMissedCallBannerEnabled = B;
    l.isCallsTabEmptyStateUpdateEnabled = W;
    l.isVoipDownloadEnabled = q;
    l.markCurrentCallAsFna = V;
    l.markCurrentCallAsGroup = G;
    l.isCurrentCallGroup = z;
    l.hasFnaRelay = j;
    l.isWinHybridPlusEnabled = K;
    l.isWebCallingUiEnabled = Q;
    l.markWebTransportFellBack = Y;
    l.resetWebTransportFallbackState = J;
    l.shouldUseOriginalRelayPort = Z;
    l.isWebTransportConfigured = ee;
    l.isWebTransportEnabled = te;
    l.isWebTransportFastSetupEnabled = ne;
    l.isAvSyncStrictFifoDrainEnabled = re;
    l.isDeviceSwitchingEnabled = oe;
    l.isRefreshGroupInfoOnMismatchEnabled = ae;
    l.isCallInfoOptimizationsEnabledFor1to1 = ie;
    l.isCallInfoOptimizationsEnabledForLGC = le;
    l.isCallInfoOptimizationsEnabledForAHGC = se;
    l.isCallInfoOptimizationsEnabledForCallLink = ue;
    l.isCallInfoOptimizationsEnabledForCallType = ce;
    l.isCallInfoOptimizations1to1ContextMenuEnabled = de;
    l.isCallInfoOptimizationsContextMenuEnabledForCallType = me;
    l.isPopoutReuseCaptureEnabled = pe;
    l.doesPopoutEndMainWindowScreenShare = _e;
    l.isDocPipEnabled = fe;
    l.areRichCallNotificationsEnabled = ge;
}, 98);