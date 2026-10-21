__d("WAWebNewsletterMessageAdminContextCard.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebNewsletterInfoPhoto.react",
    "WAWebNewsletterMetadataGetters",
    "WAWebProfilePicThumbGetters",
    "WAWebText.react",
    "WAWebWamEnumAdminFlowType",
    "WAWebWamEnumChannelLinkShareEntryPoint",
    "WDSIconIcPhotoCamera.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterMetadataValues",
    "useWAWebProfilePicThumbValues",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = {
        body: {
            textAlign: "x2b8uid",
            $$css: true
        },
        title: {
            maxWidth: "x17fpy1y",
            boxSizing: "x9f619",
            wordBreak: "x13faqbe",
            $$css: true
        },
        marginHoriz20: {
            marginInlineStart: "x6pxu1d",
            marginInlineEnd: "xd6izgl",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        marginVert24: {
            marginTop: "x9u28bd",
            marginBottom: "x14mdic9",
            $$css: true
        },
        paddingHoriz20: {
            paddingInlineStart: "x1phvje8",
            paddingInlineEnd: "xcldk2z",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const m = 850;
    function p(e) {
        const a = o("react-compiler-runtime").c(34);
        const e_chat = e.chat;
        const i_newsletterMetadata = e_chat.newsletterMetadata;
        const c = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(i_newsletterMetadata?.id, [
            o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated,
            o("WAWebNewsletterMetadataGetters").getName,
            o("WAWebNewsletterMetadataGetters").getDescription,
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        }) ?? [
            false,
            "",
            "",
            null
        ];
        const p = c[0];
        const _ = c[1];
        const f = c[2];
        let g;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = new (o("WAWebNewsletterAdminFunnelLogging")).NewsletterAdminFunnelLogger(o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT);
            a[0] = g;
        } else {
            g = a[0];
        }
        const adminFunnelLogger = g;
        const y = r("useWAWebWindowSize")();
        const y_width = y.width;
        let b;
        if (a[1] !== e_chat) {
            b = function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "info_flow",
                    chat: e_chat,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                    newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD
                } : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: e_chat,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                    newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD
                }), {
                    transition: "slide-left",
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    noFocus: true
                });
            };
            a[1] = e_chat;
            a[2] = b;
        } else {
            b = a[2];
        }
        const v = b;
        let S;
        if (a[3] !== e_chat) {
            S = function() {
                o("WAWebCmd").Cmd.editNewsletterDescription();
                o("WAWebCmd").Cmd.chatInfoDrawer(e_chat, {
                    focusNewsletterDescriptionOnMount: true
                });
            };
            a[3] = e_chat;
            a[4] = S;
        } else {
            S = a[4];
        }
        const R = S;
        const L = o("useWAWebProfilePicThumbValues").useOptionalProfilePicThumbValues(e_chat.id, [
            o("WAWebProfilePicThumbGetters").getImg
        ]) ?? [
            undefined
        ];
        const E = L[0];
        const K = y_width <= m ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow;
        let I;
        if (a[5] !== y_width) {
            I = y_width <= m ? {
                rowGap: 8,
                align: "center"
            } : {};
            a[5] = y_width;
            a[6] = I;
        } else {
            I = a[6];
        }
        const T = I;
        let D;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            D = [
                d.body,
                d.marginHoriz20,
                d.marginVert24
            ];
            a[7] = D;
        } else {
            D = a[7];
        }
        let x;
        if (a[8] !== e_chat || a[9] !== E || a[10] !== p || a[11] !== i_newsletterMetadata) {
            let $;
            x = E != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: e_chat.id,
                shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                size: 88,
                showOutline: true,
                testId: "newsletter-admin-context-card-readonly-photo"
            }) : u.jsx(r("WAWebNewsletterInfoPhoto.react"), {
                chat: e_chat,
                readOnly: p || !(($ = i_newsletterMetadata?.iAmAdminOrOwner()) != null && $),
                HoverIcon: r("WDSIconIcPhotoCamera.react"),
                adminFunnelLogger,
                showAddIconOverlay: false,
                size: 88,
                testId: "newsletter-admin-context-card-photo-picker"
            });
            a[8] = e_chat;
            a[9] = E;
            a[10] = p;
            a[11] = i_newsletterMetadata;
            a[12] = x;
        } else {
            x = a[12];
        }
        let P;
        if (a[13] === Symbol.for("react.memo_cache_sentinel")) {
            P = [
                d.title,
                d.paddingHoriz20
            ];
            a[13] = P;
        } else {
            P = a[13];
        }
        const N = _ ?? "";
        let M;
        if (a[14] !== N) {
            M = o("WAWebCommonNewsletterStrings").startGrowingChannelNameText(N);
            a[14] = N;
            a[15] = M;
        } else {
            M = a[15];
        }
        let w;
        if (a[16] !== M) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            w = <Component color="primary" xstyle={P} testid="newsletter-admin-context-card-channel-title">{M}</Component>;
            a[16] = M;
            a[17] = w;
        } else {
            w = a[17];
        }
        let A;
        if (a[18] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            A = <Component color="secondary" wrap="wrap" testid="newsletter-admin-context-card-subtitle-message">{s._("Get started by adding an icon, description and your first update. Invite people by sharing your link.")}</Component>;
            a[18] = A;
        } else {
            A = a[18];
        }
        let F;
        if (a[19] !== f || a[20] !== R) {
            const Component = o("WAWebButton.react").WAWebButtonSecondary;
            F = (f == null || f === "") && <Component onClick={R} shadowOnHover={false} testid="newsletter-admin-context-card-add-description-button">{s._("Add description")}</Component>;
            a[19] = f;
            a[20] = R;
            a[21] = F;
        } else {
            F = a[21];
        }
        let O;
        if (a[22] !== v || a[23] !== i_newsletterMetadata) {
            const Component = o("WAWebButton.react").WAWebButtonSecondary;
            O = (i_newsletterMetadata?.iAmAdminOrOwner() ?? false) && <Component onClick={v} shadowOnHover={false} testid="newsletter-admin-context-card-share-channel-link-button">{s._("Share channel link")}</Component>;
            a[22] = v;
            a[23] = i_newsletterMetadata;
            a[24] = O;
        } else {
            O = a[24];
        }
        let W;
        if (a[25] !== K || a[26] !== T || a[27] !== F || a[28] !== O) {
            W = <K {...babelHelpers.extends({
                columnGap: 8,
                marginTop: 8
            }, T, {
                children: [
                    F,
                    O
                ]
            })}/>;
            a[25] = K;
            a[26] = T;
            a[27] = F;
            a[28] = O;
            a[29] = W;
        } else {
            W = a[29];
        }
        let q;
        if (a[30] !== w || a[31] !== W || a[32] !== x) {
            const Component = o("WAWebFlex.react").FlexColumn;
            q = <Component rowGap={12} xstyle={D} align="center" testid="newsletter-admin-context-card">{x}{w}{A}{W}</Component>;
            a[30] = w;
            a[31] = W;
            a[32] = x;
            a[33] = q;
        } else {
            q = a[33];
        }
        return q;
    }
    l.default = p;
}, 226);