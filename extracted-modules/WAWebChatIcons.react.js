__d("WAWebChatIcons.react", [
    "fbt",
    "WALogger",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatGetters",
    "WAWebChatUnreadCount.react",
    "WAWebFeatureFlagName",
    "WAWebFrontendChatGetters",
    "WAWebMuteGetters",
    "WAWebMutedChatDimming",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebSettingsGetters",
    "WAWebVelocityTransitionGroup",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcNotificationsOff.react",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcAi.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebBizAiWebSmartComposerAiListsGateEnabled",
    "useWAWebChatPreviewState",
    "useWAWebChatValues",
    "useWAWebGetFeatureFlag",
    "useWAWebIsChannelsInChatListEnabled",
    "useWAWebMuteValues",
    "useWAWebNewsletterMetadataValues",
    "useWAWebNewsletterMuteState",
    "useWAWebSettingsValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useMemo = c.useMemo;
    const p = {
        icon: {
            display: "x1rg5ohu",
            marginInlineEnd: "xf6vk7d x1j53mea",
            color: "xhslqc4",
            verticalAlign: "x16dsc37",
            $$css: true
        },
        iconContainer: {
            display: "x1rg5ohu",
            verticalAlign: "x16dsc37",
            $$css: true
        },
        iconColor: {
            color: "xhslqc4",
            $$css: true
        },
        iconMentions: {
            display: "x1rg5ohu",
            width: "xw4jnvo",
            height: "x1qx5ct2",
            color: "x1r8hjv8",
            $$css: true
        },
        iconMentionsDimmed: {
            color: "xhslqc4",
            $$css: true
        },
        archived: {
            display: "x1rg5ohu",
            height: "xlup9mm",
            paddingTop: "x4p5aij",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "xaso8d8",
            fontSize: "x1ncwhqj",
            lineHeight: "x1d3mw78",
            color: "x17t9dm2",
            backgroundColor: "xs7vtfe",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            borderStartStartRadius: "xrlxcrs",
            borderStartEndRadius: "x7g1fbw",
            borderEndEndRadius: "xxl59ln",
            borderEndStartRadius: "xmw6rta",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(6);
        const { noMargin, noMarginRight, ref } = e;
        let i;
        if (t[0] !== noMargin || t[1] !== noMarginRight) {
            i = ({
                0: {
                    className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy xdj266r xat24cr x13fj5qh x1xegmmw x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6"
                },
                2: {
                    className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy xdj266r xat24cr x13fj5qh x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 x14z9mp"
                },
                1: {
                    className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x14z9mp xat24cr x1lziwak"
                },
                3: {
                    className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x14z9mp xat24cr x1lziwak"
                }
            })[(noMarginRight === true) << 1 | (noMargin === true) << 0];
            t[0] = noMargin;
            t[1] = noMarginRight;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== ref || t[4] !== i) {
            l = <div {...babelHelpers.extends({
                ref
            }, i, {
                key: "icon-unread",
                "data-testid": "icon-unread-indicator",
                "aria-hidden": "true"
            })}/>;
            t[3] = ref;
            t[4] = i;
            t[5] = l;
        } else {
            l = t[5];
        }
        return l;
    }
    function FComponent(t) {
        let n;
        const { chat, dimWhenMuted, fakePin, hideArchivedIcon, hideMuteIcon, hidePin, smallUnread, unreadCount, unreadMentionIcon } = t;
        const b = o("useWAWebChatValues").useChatValues(t.chat.id, [
            (n = o("WAWebChatGetters")).getId,
            n.getArchive,
            n.getPin,
            o("WAWebFrontendChatGetters").getUnopenedByAssignedAgent,
            o("WAWebFrontendChatGetters").getIsAssignedToMe,
            n.getIsNewsletter,
            n.getMuteExpiration,
            o("WAWebFrontendChatGetters").getNewsletterMetadata
        ]);
        const v = b[0];
        const S = b[1];
        const R = b[2];
        const L = b[3];
        const E = b[4];
        const isNewsletter = b[5];
        const I = b[6];
        const T = b[7];
        const chat_isFavorite = chat.isFavorite;
        const x = o("useWAWebChatPreviewState").useChatPreviewState(chat);
        const $ = x[0];
        const P = x[1];
        const N = o("useWAWebMuteValues").useMuteValues(t.mute.id, [
            o("WAWebMuteGetters").getIsMuted
        ]);
        const M = N[0];
        const w = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(T?.id, [
            o("WAWebNewsletterMetadataGetters").getFollowerActivityMuteExpiration,
            o("WAWebNewsletterMetadataGetters").getMembershipType,
            o("WAWebNewsletterMetadataGetters").getCapabilities
        ], {
            isStrong: true
        });
        const A = o("useWAWebSettingsValues").useSettingsValues([
            o("WAWebSettingsGetters").getShowArchiveV2
        ]);
        const F = A[0];
        const O = r("useWAWebIsChannelsInChatListEnabled")();
        const B = c_useMemo(function() {
            return isNewsletter && O && o("useWAWebNewsletterMuteState").getIsNewsletterMuted({
                adminActivityMuteExpiration: I,
                followerActivityMuteExpiration: w?.[0] ?? 0,
                getIsFollowerActivityFeatureEnabled: function() {
                    return o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(T);
                }
            });
        }, [
            I,
            O,
            isNewsletter,
            T,
            w
        ]);
        const W = ()=>{
            if (S && F) {
                return !hideMuteIcon;
            }
            if (isNewsletter) {
                return B;
            }
            return M;
        };
        const q = W() ? <div key="icon-muted" className="x1rg5ohu xf6vk7d x1j53mea x16dsc37 xhslqc4" data-testid="mute-notifications-refreshed" aria-label={s._("Muted chat")}>{d.jsx(r("WDSIconIcNotificationsOff.react"), {
            width: 20,
            height: 20
        })}</div> : null;
        const U = d.jsx(r("WDSIconIcPushPin.react"), {
            width: 20,
            height: 20
        });
        const V = hidePin !== true && R != null && R > 0 || fakePin === true ? <div key="icon-pinned" className="x1rg5ohu xf6vk7d x1j53mea x16dsc37 xhslqc4" aria-label={s._("Pinned chat")}>{U}</div> : null;
        const H = chat_isFavorite ? <span key="icon-favorite" aria-label={s._("Starred chat")}/> : null;
        const G = o("WAWebBizAiAgentStatusUtils").useIsChatAiEnabled(t.chat.id);
        const z = r("useWAWebBizAiWebSmartComposerAiListsGateEnabled")();
        const j = G && !o("WAWebBizAiAgentGating").isAiListsWebUIEnabledWithJointGate(z);
        if (j) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Maiba] WAWebChatIcons: shouldShowAiIndicator=",
                " for chat=",
                ""
            ])), j, chat.id.toLogString());
        }
        const K = dimWhenMuted === true && o("WAWebMutedChatDimming").shouldDimMutedChat({
            isMuted: M,
            isNewsletter,
            unreadCount
        });
        const Q = smallUnread === true ? <_/> : <div key="icon-unread" className="x1rg5ohu xf6vk7d x1j53mea xhslqc4 x16dsc37 xt4ypqs x2b8uid" aria-hidden="true">{d.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
            count: unreadCount,
            theme: K ? o("WAWebChatUnreadCount.react").UnreadCountTheme.Deemphasized : undefined
        })}</div>;
        const X = j ? null : Q;
        const Y = !P && unreadCount !== 0 ? X : null;
        const enabled = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled;
        const Z = enabled && E && L && !Y && !j ? <div key="icon-unread" className="x1rg5ohu xf6vk7d x1j53mea xhslqc4 x16dsc37">{d.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
            count: 0
        })}</div> : null;
        let ee = null;
        if (!P && unreadMentionIcon && !j) {
            ee = <div key="icon-mentions" className="x1rg5ohu x16dsc37 xcknrev" data-testid="icon-mentions" data-dimmed={K ? true : undefined} aria-label={s._("\u0040 message")}>{d.jsx(r("WDSIconIcAlternateEmail.react"), {
                width: 20,
                height: 20,
                iconXstyle: [
                    p.iconMentions,
                    K && p.iconMentionsDimmed
                ]
            })}</div>;
        }
        const te = S && !hideArchivedIcon ? <span {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.icon, p.archived, o("WDSMargins.stylex").wdsMargins.marginEnd8), {
            key: "icon-archived"
        })}>{s._("Archived")}</span> : null;
        const ne = <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.iconContainer, o("WDSMargins.stylex").wdsMargins.margin2), {
            key: "icon-ai-agent",
            "data-testid": "icon-ai-agent",
            "aria-label": s._("AI chat")
        })}>{d.jsx(r("WDSIconWdsIcAi.react"), {
            width: 18,
            height: 18,
            iconXstyle: p.iconColor,
            testid: "ai-signal-outline"
        })}</div>;
        const re = j ? ne : null;
        const Component = r("WAWebVelocityTransitionGroup");
        return <Component key={v.toString()} transitionName="pop" enter exit>{q}{te}{V}{H}{re}{ee}{Y}{Z}</Component>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.UnreadIndicator = _;
    l.Icons = FComponent;
}, 226);