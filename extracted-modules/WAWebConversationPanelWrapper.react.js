__d("WAWebConversationPanelWrapper.react", [
    "fbt",
    "WAWebBizAiSmartComposerImpressionContext",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WAWebCmd",
    "WAWebConversationPanel.react",
    "WAWebConversationPanelWrapper.stylex",
    "WAWebConversationPreview.react",
    "WAWebErrorBoundary.react",
    "WAWebGetConversationPanelKey",
    "WAWebStockWallpaperLayer.react",
    "WAWebUim",
    "WAWebUimUie.react",
    "react",
    "stylex",
    "useWAWebChatThemeModeValue",
    "useWAWebListener",
    "useWAWebWallpaperState"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useImperativeHandle, useRef, useState } = m;
    const g = {
        pane: {
            backgroundColor: "x1q80dvb",
            $$css: true
        }
    };
    function h(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { chat, chatEntryPoint, focusCtx, msgCollection, notifyChatRendered, showPreview, threadId, updateOpenedChatInfo } = a;
        const SRef = useRef(null);
        const R = o("useWAWebWallpaperState").useWallpaperState({
            chat,
            chatPreference: a.chatPreference,
            showPreview
        });
        const { backgroundKind, backgroundWrapperStyle, bubbleStyle, displayWallpaper, effectiveOutgoingScheme, isDarkTheme, isMinimalMode, isThemeResolved, isVibrant, showDoodle, showStockWallpaper, stockWallpaperThumbnailUrl, stockWallpaperUrl, wallpaperStyle } = R;
        const O = useState([]);
        const B = O[0];
        const W = O[1];
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "show_overlay_animation", function(e) {
            W(function(t) {
                return [].concat(t, [
                    e
                ]);
            });
            window.setTimeout(function() {
                W(function(t) {
                    return t.filter((t)=>t !== e);
                });
            }, 5000);
        });
        const containsDOMNode = function(t) {
            if (SRef.current) {
                return SRef.current.contains(t);
            }
            return false;
        };
        useImperativeHandle(t_ref, function() {
            return {
                containsDOMNode
            };
        });
        const U = showPreview != null ? d.jsx(r("WAWebConversationPreview.react"), {
            previewType: showPreview,
            title: showPreview === "theme" ? s._("Theme preview") : s._("Wallpaper preview"),
            wallpaper: displayWallpaper,
            showDoodle
        }) : null;
        const V = chat && msgCollection ? d.jsx(r("WAWebConversationPanel.react"), {
            chat,
            chatEntryPoint,
            groupMetadata: chat.groupMetadata,
            focusCtx,
            msgCollection,
            threadId,
            notifyChatRendered,
            overlay: a.overlay,
            updateOpenedChatInfo,
            wallpaper: displayWallpaper,
            showDoodle
        }, r("WAWebGetConversationPanelKey")(chat, threadId)) : null;
        let H;
        if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled()) {
            H = U ?? V;
        } else {
            H = V ?? U;
        }
        const G = r("useWAWebChatThemeModeValue")({
            bubbleStyle,
            isMinimalMode,
            isVibrant,
            wallpaperStyle
        });
        const z = y({
            isThemeResolved,
            isMinimalMode,
            effectiveOutgoingScheme,
            backgroundKind,
            showDoodle
        });
        const Component = o("WAWebBizAiSmartComposerImpressionContext").WAWebBizAiSmartComposerImpressionProvider;
        const Component_1 = r("WAWebChatThemeModeContext").Provider;
        const Component_2 = o("WAWebUimUie.react").UIE;
        const Component_3 = o("WAWebErrorBoundary.react").ErrorBoundary;
        return <Component_3 name="conversation-panel" type="fatal"><Component_2 displayName="ConversationPanel" uimState={o("WAWebUim").UIMState.INACTIVE}><Component_1 value={G}><div {...babelHelpers.extends({
            id: "main",
            className: (u || (u = r("stylex")))(o("WAWebConversationPanelWrapper.stylex").styles.pane, g.pane, a.showPreview != null && o("WAWebConversationPanelWrapper.stylex").styles.previewPane, wallpaperStyle),
            style: backgroundWrapperStyle,
            ref: SRef,
            "data-testid": "conversation-panel-wrapper"
        }, z, {
            children: [
                showStockWallpaper && stockWallpaperUrl != null && <>{d.jsx(r("WAWebStockWallpaperLayer.react"), {
                    fullResUrl: stockWallpaperUrl,
                    thumbnailUrl: stockWallpaperThumbnailUrl
                }, stockWallpaperUrl)}{isDarkTheme && <div className="x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x1ja2u2z" data-testid="stock-wallpaper-dim"/>}</>,
                <Component>{H}</Component>,
                B
            ]
        })}/></Component_1></Component_2></Component_3>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y({ backgroundKind, effectiveOutgoingScheme, isMinimalMode, isThemeResolved, showDoodle }) {
        if (isThemeResolved) {
            return {
                "data-chat-theme-incoming-bubble": isMinimalMode ? "minimal" : "default",
                "data-chat-theme-outgoing-bubble": effectiveOutgoingScheme != null ? String(effectiveOutgoingScheme) : "default",
                "data-chat-theme-chat-background": backgroundKind,
                "data-chat-theme-show-doodle": String(showDoodle)
            };
        }
        return {};
    }
    l.default = h;
}, 226);