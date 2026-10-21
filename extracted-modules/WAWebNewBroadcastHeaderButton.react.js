__d("WAWebNewBroadcastHeaderButton.react", [
    "WAWebBizBroadcastCreationQPLLogger",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizBroadcastNewBroadcastFlowRouter.react",
    "WAWebBizBroadcastProListUtils",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebBizBroadcastTos",
    "WAWebBizBroadcastTosModalLoadable",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBroadcastMetadataGetters",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebDrawerManager",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebTabOrder",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastEntrypointEnabled",
    "useWAWebBizBroadcastProEligibilityState",
    "useWAWebBroadcastMetadataValues",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef } = u;
    function m(e) {
        const n = o("react-compiler-runtime").c(14);
        const e_chat = e.chat;
        const i = o("useWAWebBizBroadcastEntrypointEnabled").useWAWebBizBroadcastEntrypointEnabled(false);
        const l = o("useWAWebBizBroadcastProEligibilityState").useWAWebBizBroadcastProEligibilityState();
        const l_onboardingStatus = l.onboardingStatus;
        let m;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebFrontendChatGetters").getBroadcastMetadata
            ];
            n[0] = m;
        } else {
            m = n[0];
        }
        const _ = o("useWAWebChatValues").useChatValues(e_chat.id, m);
        const f = _[0];
        const g = o("useWAWebBroadcastMetadataValues").useOptionalBroadcastMetadataValues(f?.id, [
            o("WAWebBroadcastMetadataGetters").getCustomAudienceFbid
        ]) ?? [
            null
        ];
        const h = g[0];
        const yRef = useRef(false);
        let C;
        let b;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            C = function() {
                if (!yRef.current) {
                    yRef.current = true;
                    o("WAWebBizBroadcastNewBroadcastFlowLoadable").prefetchNewBroadcastFlow();
                }
            };
            b = [];
            n[1] = C;
            n[2] = b;
        } else {
            C = n[1];
            b = n[2];
        }
        useEffect(C, b);
        if (!i || o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(h) && l_onboardingStatus !== o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus.ONBOARDED) {
            return null;
        }
        let v;
        if (n[3] !== e_chat) {
            v = function() {
                o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_HEADER, true);
                o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                const Component = r("WAWebBizBroadcastNewBroadcastFlowRouter.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(<Component chat={e_chat} entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD} onBack={p}/>, {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            n[3] = e_chat;
            n[4] = v;
        } else {
            v = n[4];
        }
        const S = v;
        let R;
        if (n[5] !== e_chat.id || n[6] !== S) {
            R = function() {
                const Component = o("WAWebBizBroadcastTosModalLoadable").WAWebBizBroadcastTosModalLoadable;
                o("WAWebModalManager").ModalManager.open(<Component entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD} onAccept={function() {
                    o("WAWebModalManager").ModalManager.close();
                    S();
                }} onDismiss={o("WAWebModalManager").closeModalManager} broadcastJid={e_chat.id.toString()}/>, {
                    transition: "modal-flow"
                });
            };
            n[5] = e_chat.id;
            n[6] = S;
            n[7] = R;
        } else {
            R = n[7];
        }
        const L = R;
        let E;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            E = {
                className: "x150mmf0"
            };
            n[8] = E;
        } else {
            E = n[8];
        }
        let k;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            k = o("WAWebBizBroadcastsCreationStrings").getNewBroadcastButtonLabel();
            n[9] = k;
        } else {
            k = n[9];
        }
        let I;
        if (n[10] !== e_chat.id || n[11] !== S || n[12] !== L) {
            const Component = r("WDSButton.react");
            I = <div {...babelHelpers.extends({}, E, {
                children: <Component label={k} onPress={function() {
                    o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newBroadcastButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, o("WAWebWidToJid").widToBroadcastJid(e_chat.id));
                    if (o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() || o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()) {
                        S();
                    } else {
                        L();
                    }
                }} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} testid="new-broadcast-header-button"/>
            })}/>;
            n[10] = e_chat.id;
            n[11] = S;
            n[12] = L;
            n[13] = I;
        } else {
            I = n[13];
        }
        return I;
    }
    function p() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    l.default = m;
}, 98);