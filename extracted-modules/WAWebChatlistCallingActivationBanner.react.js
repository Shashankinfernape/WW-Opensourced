__d("WAWebChatlistCallingActivationBanner.react", [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebCallCollection",
    "WAWebChatlistCallingActivationBannerImpression",
    "WAWebCmd",
    "WAWebNavBarTypes",
    "WAWebNux",
    "WAWebNuxSync",
    "WAWebTabOrder",
    "WAWebUim",
    "WAWebUserPrefsNuxPreferences",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipEventConstants",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "WDSBanner.react",
    "WDSIconIcVideoCall.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect, useLayoutEffect, useRef } = c;
    const f = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL, o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE);
    const g = 500;
    function h(e) {
        const t = o("react-compiler-runtime").c(26);
        const e_onClose = e.onClose;
        const a = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), f, C);
        const iRef = useRef(false);
        const lRef = useRef(0);
        let c;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = function() {
                lRef.current = self.performance.now();
            };
            d = [];
            t[0] = c;
            t[1] = d;
        } else {
            c = t[0];
            d = t[1];
        }
        useLayoutEffect(c, d);
        const gRef = useRef(null);
        const hRef = useRef(false);
        let v;
        let S;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            v = function() {
                const gRef_current = gRef.current;
                return function() {
                    if (!(hRef.current || gRef_current?.contains(document.activeElement) !== true)) {
                        self.setTimeout(y, 0);
                    }
                };
            };
            S = [];
            t[2] = v;
            t[3] = S;
        } else {
            v = t[2];
            S = t[3];
        }
        useLayoutEffect(v, S);
        let R;
        let L;
        if (t[4] !== a) {
            R = function() {
                if (!(a || iRef.current)) {
                    o("WAWebChatlistCallingActivationBannerImpression").logChatlistCallingActivationBannerShownOnce();
                }
            };
            L = [
                a
            ];
            t[4] = a;
            t[5] = R;
            t[6] = L;
        } else {
            R = t[5];
            L = t[6];
        }
        useEffect(R, L);
        let E;
        if (t[7] !== e_onClose) {
            E = function() {
                hRef.current = true;
                r("WAWebNuxSync").acknowledgeNux(o("WAWebNux").NuxSyncKey.WEB_CALLING_ACTIVATION_BANNER);
                e_onClose();
            };
            t[7] = e_onClose;
            t[8] = E;
        } else {
            E = t[8];
        }
        const k = E;
        let I;
        if (t[9] !== e_onClose) {
            I = function(t) {
                if (t === o("WAWebNux").NuxSyncKey.WEB_CALLING_ACTIVATION_BANNER && o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(o("WAWebNux").NuxSyncKey.WEB_CALLING_ACTIVATION_BANNER)) {
                    e_onClose();
                }
            };
            t[9] = e_onClose;
            t[10] = I;
        } else {
            I = t[10];
        }
        o("useWAWebListener").useListener(o("WAWebUserPrefsNuxPreferences").NuxPrefsEvent, "nux_sync_change", I);
        let T;
        let D;
        if (t[11] !== k || t[12] !== a) {
            D = function() {
                if (!(!a || iRef.current)) {
                    iRef.current = true;
                    new (o("WAWebBannerEventWamEvent")).BannerEventWamEvent({
                        bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.REVOKED,
                        bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES.WEB_CALLING_ACTIVATION_BANNER
                    }).commit();
                    k();
                }
            };
            T = [
                k,
                a
            ];
            t[11] = k;
            t[12] = a;
            t[13] = T;
            t[14] = D;
        } else {
            T = t[13];
            D = t[14];
        }
        useLayoutEffect(D, T);
        let x;
        if (t[15] !== k) {
            x = function() {
                if (!b(lRef.current)) {
                    new (o("WAWebBannerEventWamEvent")).BannerEventWamEvent({
                        bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS,
                        bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES.WEB_CALLING_ACTIVATION_BANNER
                    }).commit();
                    k();
                }
            };
            t[15] = k;
            t[16] = x;
        } else {
            x = t[16];
        }
        const $ = x;
        let P;
        if (t[17] !== k) {
            P = function() {
                if (!b(lRef.current)) {
                    new (o("WAWebBannerEventWamEvent")).BannerEventWamEvent({
                        bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
                        bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES.WEB_CALLING_ACTIVATION_BANNER
                    }).commit();
                    o("WAWebCmd").Cmd.closeActiveChat();
                    o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Calls);
                    o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
                    k();
                }
            };
            t[17] = k;
            t[18] = P;
        } else {
            P = t[18];
        }
        const N = P;
        let M;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            M = {
                className: "x1uvdrpn x14mko6t x1380le5 xefnzgg"
            };
            t[19] = M;
        } else {
            M = t[19];
        }
        let w;
        let A;
        let F;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            w = s._("Voice and video calling is now available");
            A = s._("Now you can make and join calls on WhatsApp Web.");
            F = s._("Go to Calls");
            t[20] = w;
            t[21] = A;
            t[22] = F;
        } else {
            w = t[20];
            A = t[21];
            F = t[22];
        }
        let O;
        if (t[23] !== N || t[24] !== $) {
            const Component = r("WDSBanner.react");
            O = <div {...babelHelpers.extends({
                ref: gRef,
                role: "status",
                "data-testid": "chatlist_calling_activation_banner_wrapper"
            }, M, {
                children: <Component type="default" icon={r("WDSIconIcVideoCall.react")} title={w} body={A} actionText={F} onAction={N} onDismiss={$} tabOrder={o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR} testid="chatlist_calling_activation_banner"/>
            })}/>;
            t[23] = N;
            t[24] = $;
            t[25] = O;
        } else {
            O = t[25];
        }
        return O;
    }
    function y() {
        if (document.activeElement === document.body) {
            const e = o("WAWebUim").UIM.Manager.getTop();
            if (e != null && e.getState() === o("WAWebUim").UIM.State.ACTIVE) {
                e.requestFocus();
            } else {
                o("WAWebCmd").Cmd.focusChatSearch();
            }
        }
    }
    function C() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall == null) {
            return false;
        }
        return !(activeCall.isCallLink && v(activeCall));
    }
    function b(e) {
        return self.performance.now() - e < g;
    }
    function v(activeCall) {
        return activeCall.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.QuerySent || activeCall.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.QueryAcked;
    }
    l.default = h;
}, 226);