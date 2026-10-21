__d("WAWebChatlistPanelNuxBanners.react", [
    "WAWebBoolFunc",
    "WAWebCTWAConstants",
    "WAWebCTWASuggestionCollection",
    "WAWebCallsOnlyGating",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebErrorBoundary.react",
    "WAWebMobilePlatforms",
    "WAWebNux",
    "WAWebNuxBanners.react",
    "WAWebNuxCtwaSuggestionBanner.react",
    "WAWebNuxCtwaSuggestionHelpers",
    "WAWebNuxOrderExpansion.react",
    "WAWebNuxQuickPromotionChatListBanner.react",
    "WAWebUserPrefsNuxPreferences",
    "react",
    "react-compiler-runtime",
    "useWAWebBestQuickPromotionForSurface",
    "useWAWebButterbarVisibilityReport",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    const m = 10000;
    function P3Component(e) {
        "use no forget";
        const e_onVisibilityChange = e.onVisibilityChange;
        const onInteract = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const a = function() {
            return o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.findFirstNotExpired()?.suggestion;
        };
        const i = useState(a);
        const l = i[0];
        const u = i[1];
        o("useWAWebListener").useListener(o("WAWebCTWASuggestionCollection").CTWASuggestionCollection, "add", function() {
            u(a());
        });
        o("useWAWebListener").useListener(o("WAWebUserPrefsNuxPreferences").NuxPrefsEvent, o("WAWebNux").NUX.MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT, onInteract);
        const p = o("useWAWebBestQuickPromotionForSurface").useBestQuickPromotionForSurface({
            surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP
        }, {
            eligibilityCheck: o("WAWebMobilePlatforms").isSMB
        });
        const _ = p !== undefined;
        const f = r("useWAWebEventTargetValue")(o("WAWebCTWASuggestionCollection").CTWASuggestionCollection, "loaded_from_storage stopped_waiting_for_storage", function() {
            return o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.isDoneWaitingForStorage();
        });
        const g = !f && !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled();
        useEffect(function() {
            if (g) {
                o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.stopWaitingForStorageAfter(m);
            }
        }, [
            g
        ]);
        const isPending = !_ || g;
        const banners = [];
        if (l != null) {
            const Component = r("WAWebNuxCtwaSuggestionBanner.react");
            banners.push({
                element: <Component key="ctwa_suggestion" onInteract={onInteract} suggestion={l}/>,
                shouldShow: function() {
                    return o("WAWebNuxCtwaSuggestionHelpers").shouldShowSuggestion(l.id);
                }
            });
        }
        if (p != null) {
            const C = p.promotion.promotion;
            const Component = o("WAWebNuxQuickPromotionChatListBanner.react").QuickPromotionChatListBanner;
            banners.push({
                element: <Component key="quick_promotion" onInteract={onInteract} promotion={C}/>,
                shouldShow: function() {
                    return o("WAWebNuxQuickPromotionChatListBanner.react").canQuickPromotionChatListBannerPaint(C);
                }
            });
        }
        if (o("WAWebNuxOrderExpansion.react").shouldShowOrderExpansionBanner()) {
            const Component = o("WAWebNuxOrderExpansion.react").OrderExpansionBanner;
            banners.push({
                element: <Component key="order_expansion_banner" onInteract={onInteract}/>,
                shouldShow: o("WAWebBoolFunc").returnTrue
            });
        }
        r("useWAWebButterbarVisibilityReport")(banners.length > 0 ? null : isPending, e_onVisibilityChange);
        if (banners.length) {
            const Component = r("WAWebNuxBanners.react");
            const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
            return <Component_1 name="nux-banner-error-boundary" onError={function() {
                return e_onVisibilityChange?.(false);
            }}><Component banners={banners} isPending={isPending} onVisibilityChange={e_onVisibilityChange}/></Component_1>;
        }
        return null;
    }
    P3Component.displayName = `${P3Component.name} [from ${i.id}]`;
    function _(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_onVisibilityChange = e.onVisibilityChange;
        const a = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn);
        r("useWAWebButterbarVisibilityReport")(a ? null : false, e_onVisibilityChange);
        if (!a) {
            return null;
        }
        let i;
        if (t[0] !== e_onVisibilityChange) {
            i = <P3Component onVisibilityChange={e_onVisibilityChange}/>;
            t[0] = e_onVisibilityChange;
            t[1] = i;
        } else {
            i = t[1];
        }
        return i;
    }
    l.default = _;
}, 98);