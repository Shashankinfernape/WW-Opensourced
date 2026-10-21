__d("WAWebChatstateInfo.react", [
    "fbt",
    "WAReplaceRepeatingWhitespace",
    "WAWebABProps",
    "WAWebChatCommunityUtils",
    "WAWebChatGetters",
    "WAWebChatGroupSafetyCheckedMessagePreview.react",
    "WAWebChatGroupSuspendedMessagePreview.react",
    "WAWebChatGroupUtils",
    "WAWebChatLastMsg.react",
    "WAWebChatstateGetters",
    "WAWebCommunitySuspendedMessagePreview.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebFrontendPresenceGetters",
    "WAWebGroupSafetyCheckUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebNewsletterCreatedMessagePreview.react",
    "WAWebNewsletterSuspendedMessagePreview.react",
    "WAWebPreviewFormatGating",
    "WAWebScheduledChatPreview.react",
    "WAWebSkeletonGlimmerVars",
    "WDSIconIcDescription.react",
    "WDSIconIcGif.react",
    "WDSIconIcHeadphones.react",
    "WDSIconIcImage.react",
    "WDSIconIcVideocamFilled.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "cr:11133",
    "cr:9947",
    "react",
    "stylex",
    "useWAWebChatPreviewState",
    "useWAWebChatValues",
    "useWAWebChatstateValues",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebPresenceValues",
    "useWAWebScheduledChatPreview"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    const _ = {
        chatstateTyping: {
            display: "x1lliihq",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontWeight: "xk50ysn",
            color: "x1v5yvga",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        loadingIndicator: {
            fontStyle: "x1k4tb9n",
            color: "xhslqc4",
            $$css: true
        },
        loadingSkeletonContainer: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            height: "x1qx5ct2",
            width: "xh8yej3",
            $$css: true
        },
        loadingSkeleton: {
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            height: "x6w4g8m",
            width: "x1oux285",
            $$css: true
        },
        draftLabel: {
            flexShrink: "x2lah0s",
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function f(t) {
        "use no forget";
        const { chat, fromCommunity } = t;
        const fromCommunity_1 = fromCommunity === undefined ? false : fromCommunity;
        const d = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getDerivedLastAddOnPreview,
            o("WAWebChatGetters").getIsGroup,
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebChatGetters").getPreviewT,
            o("WAWebFrontendChatGetters").getIsCAG
        ]);
        const lastAddOnPreview = d[0];
        const y = d[1];
        const C = d[2];
        const b = d[3];
        const v = d[4];
        const S = d[5];
        const R = o("useWAWebChatPreviewState").useChatPreviewState(chat);
        const L = R[0];
        const E = R[1];
        const k = useState();
        const I = k[0];
        const T = k[1];
        const D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        useEffect(function() {
            let e = true;
            function t() {
                return r.apply(this, arguments);
            }
            function r() {
                r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    T(null);
                    if (lastAddOnPreview?.parentMsgKey != null) {
                        const n = lastAddOnPreview.parentMsgKey;
                        let r = o("WAWebMsgCollection").MsgCollection.get(n);
                        if (!r) {
                            const i = yield o("WAWebMsgCollection").MsgCollection.getMessagesById([
                                n
                            ]);
                            r = i.messages[0] ?? null;
                        }
                        if (!e || r?.isGroupStatus === true) {
                            return;
                        }
                        T(r);
                    }
                });
                return r.apply(this, arguments);
            }
            t();
            return function() {
                e = false;
            };
        }, [
            lastAddOnPreview?.parentMsgKey
        ]);
        o("useWAWebListener").useListener(L, "change:msgKey", function() {
            D();
        });
        const x = o("useWAWebChatstateValues").useChatstateValues(chat.presence.chatstate, [
            o("WAWebChatstateGetters").getType
        ]);
        const $ = x[0];
        const P = o("useWAWebPresenceValues").usePresenceValues(chat.presence.id, o("WAWebABProps").getABPropConfigValue("web_memlab_fixes") ? [
            o("WAWebFrontendPresenceGetters").getHasData,
            o("WAWebFrontendPresenceGetters").getWithholdDisplayStage,
            o("WAWebFrontendPresenceGetters").getChatstate
        ] : [
            o("WAWebFrontendPresenceGetters").getChatstate,
            o("WAWebFrontendPresenceGetters").getHasData,
            o("WAWebFrontendPresenceGetters").getWithholdDisplayStage
        ]);
        const N = P[0];
        const M = P[1];
        const w = P[2];
        const chat_presence = chat.presence;
        const F = r("useWAWebEventTargetValue")(v, [
            "change:suspended"
        ], function() {
            return b && v?.suspended === true;
        });
        const isGeosuspended = r("useWAWebEventTargetValue")(v, [
            "change:geosuspended"
        ], function() {
            return b && v?.geosuspended === true;
        });
        const B = r("useWAWebEventTargetValue")(C, [
            "change:suspended"
        ], function() {
            return o("WAWebChatGroupUtils").isSuspendedGroup(chat) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat);
        });
        const W = r("useWAWebEventTargetValue")(C, [
            "change:suspended"
        ], function() {
            return o("WAWebChatCommunityUtils").isSuspendedCommunity(chat) || o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(chat);
        });
        const q = r("useWAWebEventTargetValue")(C, [
            "change:groupSafetyCheck",
            "change:trusted"
        ], function() {
            return o("WAWebGroupSafetyCheckUtils").shouldShowGroupSafetyCheckUI(chat);
        });
        const U = g(chat, C);
        const V = r("useWAWebScheduledChatPreview")(chat);
        if (F) {
            return c.jsx(r("WAWebNewsletterSuspendedMessagePreview.react"), {
                isGeosuspended
            });
        }
        if (W) {
            return c.jsx(r("WAWebCommunitySuspendedMessagePreview.react"), {});
        }
        if (B && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
            return c.jsx(r("WAWebChatGroupSuspendedMessagePreview.react"), {});
        }
        if (q) {
            return c.jsx(r("WAWebChatGroupSafetyCheckedMessagePreview.react"), {});
        }
        const elevatedPushNamesEnabled = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(chat);
        if (!fromCommunity_1 && h(chat_presence)) {
            const G = chat_presence.getFormattedString({
                elevatedPushNamesEnabled
            }) || {};
            const { ariaLabel, text } = G;
            if (text != null && text !== "") {
                return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    xstyle: _.chatstateTyping,
                    direction: "inherit",
                    ellipsify: true,
                    titlify: true,
                    text,
                    ariaLabel
                });
            }
        }
        if (L?.subtype === "newsletter_admin_context_card") {
            return c.jsx(r("WAWebNewsletterCreatedMessagePreview.react"), {
                chat
            });
        }
        if (E) {
            if ((n("cr:11133") == null ? undefined : n("cr:11133")()) === true && n("cr:9947") != null) {
                return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebSkeletonGlimmerVars"), _.loadingSkeletonContainer), {
                    "aria-hidden": true,
                    "data-testid": "chat_list_preview_loading_skeleton",
                    children: c.jsx(n("cr:9947"), {
                        xstyle: _.loadingSkeleton
                    })
                })}/>;
            }
            return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: _.loadingIndicator,
                direction: "inherit",
                titlify: true,
                ellipsify: true,
                text: s._("Loading…")
            });
        }
        if (L == null) {
            return U || null;
        }
        if (U) {
            return U;
        }
        if (V != null) {
            return c.jsx(r("WAWebScheduledChatPreview.react"), babelHelpers.extends({}, V, {
                groupMetadata: C ?? null
            }));
        }
        const K = I && lastAddOnPreview != null ? c.jsx(r("WAWebChatLastMsg.react"), {
            msg: I.safe(),
            msgType: "AddOnParentMsg",
            lastAddOnPreview,
            elevatedPushNamesEnabled,
            fromCommunity: fromCommunity_1,
            groupMetadata: C ?? null
        }) : null;
        const Q = L.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? L.revokeTimestamp ?? 0 : L.t;
        const X = lastAddOnPreview?.timestamp && lastAddOnPreview?.timestamp / 1000;
        if (X != null && X > Q && K != null) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            return <Component name="chat-last-addon-msg">{K}</Component>;
        }
        const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
        return <Component name="chat-last-msg">{c.jsx(r("WAWebChatLastMsg.react"), {
            msg: L.safe(),
            msgType: "LastMessage",
            elevatedPushNamesEnabled,
            fromCommunity: fromCommunity_1,
            groupMetadata: C ?? null
        })}</Component>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(chat, t) {
        const n = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebChatGetters").getDraftMessage,
            o("WAWebFrontendChatGetters").getHasDraftMessage,
            o("WAWebFrontendChatGetters").getActive,
            o("WAWebChatGetters").getHasUnread,
            o("WAWebFrontendChatGetters").getAttachMediaContents
        ]);
        const a = n[0];
        const i = n[1];
        const l = n[2];
        const u = n[3];
        const d = n[4];
        if (!(i !== true || l || u)) {
            if (d) {
                const m = d.getPreviewableMedias()[0];
                const p = m != null ? YComponent(m) : null;
                const Component = r("WDSText.react");
                const Component_1 = o("WAWebFlex.react").FlexRow;
                return <Component_1><Component type="Body2Emphasized" colorName="accent" xstyle={_.draftLabel}>{s._("Draft")}: </Component>{p}</Component_1>;
            }
            const f = a?.text;
            if (f != null) {
                const g = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
                const Component = r("WDSText.react");
                const Component_1 = o("WAWebFlex.react").FlexRow;
                return <Component_1><Component type="Body2Emphasized" colorName="accent" xstyle={_.draftLabel}>{s._("Draft")}: </Component>{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: r("WAReplaceRepeatingWhitespace")(f, true),
                    formatters: o("WAWebFormatConfiguration").LastMessage({
                        isDraftMessage: true,
                        mentions: {},
                        groupMentions: {},
                        groupMetadata: g && t != null ? t : undefined,
                        selectable: false
                    }),
                    ellipsify: true,
                    inlineblock: true,
                    previewMode: g
                }, "draft")}</Component_1>;
            }
            return null;
        }
    }
    function h(chat_presence) {
        const type = chat_presence.chatstate.type;
        return chat_presence.hasData && (type === "typing" || type === "recording_audio");
    }
    function YComponent({ type, isGif }) {
        if (isGif) {
            return c.jsx(r("WDSIconIcGif.react"), {
                height: 18,
                width: 18
            });
        }
        if (type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            return <>{c.jsx(r("WDSIconIcImage.react"), {
                height: 18,
                width: 18
            })} {s._("Photo")}</>;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return <>{c.jsx(r("WDSIconIcVideocamFilled.react"), {
                height: 18,
                width: 18
            })} {s._("Video")}</>;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.AUDIO) {
            return <>{c.jsx(r("WDSIconIcHeadphones.react"), {
                height: 18,
                width: 18
            })} {s._("Audio")}</>;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            return <>{c.jsx(r("WDSIconIcDescription.react"), {
                height: 18,
                width: 18
            })} {s._("Document")}</>;
        }
        return s._("Attachment");
    }
    l.default = f;
}, 226);