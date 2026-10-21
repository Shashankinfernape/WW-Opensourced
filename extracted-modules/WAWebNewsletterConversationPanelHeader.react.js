__d("WAWebNewsletterConversationPanelHeader.react", [
    "fbt",
    "Promise",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNewsletterAddToStatusButtonLoadable",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSubscribeButton.react",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebUnfollowNewsletterConfirmationModalLoadable",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelLinkShareEntryPoint",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "WDSButton.react",
    "WDSIconIcLink.react",
    "WDSIconIcNotifications.react",
    "WDSIconIcNotificationsOff.react",
    "WDSMenuBarItem.react",
    "WDSSpinner.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebChatValues",
    "useWAWebNewsletterMetadataValues",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useState } = d;
    const _ = r("requireDeferred")("WAWebFollowNewsletter").__setRef("WAWebNewsletterConversationPanelHeader.react");
    const f = r("requireDeferred")("WAWebNewsletterDirectorySearchAction").__setRef("WAWebNewsletterConversationPanelHeader.react");
    function g(t) {
        const l = o("react-compiler-runtime").c(39);
        const t_chat = t.chat;
        let d;
        if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebChatGetters").getIsNewsletter,
                o("WAWebChatGetters").getMuteExpiration
            ];
            l[0] = d;
        } else {
            d = l[0];
        }
        const m = o("useWAWebChatValues").useChatValues(t_chat.id, d);
        const g = m[0];
        const h = m[1];
        const y = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(t_chat.newsletterMetadata?.id, [
            o("WAWebNewsletterMetadataGetters").getCanBeMuted,
            o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated,
            o("WAWebNewsletterMetadataGetters").getMembershipType,
            o("WAWebNewsletterMetadataGetters").getCapabilities
        ], {
            isStrong: true
        }) ?? [
            false,
            false,
            null,
            null
        ];
        const b = y[0];
        const v = y[1];
        const S = y[2];
        const R = y[3];
        const u_newsletterMetadata = t_chat.newsletterMetadata;
        let E;
        if (l[1] !== u_newsletterMetadata) {
            E = function() {
                u_newsletterMetadata?.resetRecentlyFollowedFrom();
            };
            l[1] = u_newsletterMetadata;
            l[2] = E;
        } else {
            E = l[2];
        }
        r("useWAWebOnUnmount")(E);
        const k = useState(false);
        const isLoading = k[0];
        const T = k[1];
        const D = useState(false);
        const isTogglingMute = D[0];
        const $ = D[1];
        const P = useState(h);
        const N = P[0];
        const M = P[1];
        if (N !== h) {
            M(h);
            if (isTogglingMute) {
                $(false);
            }
        }
        let w;
        if (l[3] !== t_chat) {
            w = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    T(true);
                    yield (e || (e = n("Promise"))).allSettled([
                        _.load().then(({ followNewsletter })=>followNewsletter(o("WAWebStateUtils").unproxy(t_chat), {
                                eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
                            })),
                        o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled() && f.load().then(({ getSimilarNewslettersAction })=>getSimilarNewslettersAction(o("WAWebStateUtils").unproxy(t_chat)))
                    ]);
                    T(false);
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            l[3] = t_chat;
            l[4] = w;
        } else {
            w = l[4];
        }
        const A = w;
        let F;
        if (l[5] !== t_chat) {
            F = function() {
                o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebUnfollowNewsletterConfirmationModalLoadable").UnfollowNewsletterConfirmationModalLoadable, {
                    chat: o("WAWebStateUtils").unproxy(t_chat),
                    loggingOptions: {
                        eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
                    }
                }));
            };
            l[5] = t_chat;
            l[6] = F;
        } else {
            F = l[6];
        }
        const O = F;
        const B = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid");
        let W;
        if (l[7] !== t_chat || l[8] !== B) {
            W = function() {
                const t = B.existsDrawer() ?? false;
                if (!t) {
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "info_flow",
                        chat: t_chat,
                        initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                        newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
                    } : c.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                        chat: t_chat,
                        initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                        newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
                    }), {
                        transition: "slide-left",
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                        noFocus: true
                    });
                }
            };
            l[7] = t_chat;
            l[8] = B;
            l[9] = W;
        } else {
            W = l[9];
        }
        const q = W;
        let U;
        if (l[10] !== t_chat.id || l[11] !== h) {
            U = function() {
                $(true);
                o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(t_chat.id, o("WAWebNewsletterModelUtils").isMuted(h) ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [
                    o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity
                ], {
                    eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
                }).catch(()=>$(false));
            };
            l[10] = t_chat.id;
            l[11] = h;
            l[12] = U;
        } else {
            U = l[12];
        }
        const V = U;
        if (!g || u_newsletterMetadata == null) {
            return null;
        }
        if (v) {
            let H;
            if (l[13] !== O || l[14] !== S) {
                const Component = r("WDSButton.react");
                H = S === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber ? <Component label={s._("Unfollow")} onPress={O} testid="conversation-panel-header-newsletter-unfollow-button"/> : null;
                l[13] = O;
                l[14] = S;
                l[15] = H;
            } else {
                H = l[15];
            }
            return H;
        }
        let G = null;
        if (b && !o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(t_chat.newsletterMetadata)) {
            let z;
            if (l[16] !== h) {
                z = o("WAWebNewsletterModelUtils").isMuted(h);
                l[16] = h;
                l[17] = z;
            } else {
                z = l[17];
            }
            let j;
            if (l[18] !== V || l[19] !== isTogglingMute || l[20] !== z) {
                j = <C isMuted={z} isTogglingMute={isTogglingMute} onClick={V}/>;
                l[18] = V;
                l[19] = isTogglingMute;
                l[20] = z;
                l[21] = j;
            } else {
                j = l[21];
            }
            G = j;
        }
        let K;
        if (l[22] !== q || l[23] !== S) {
            const Component = r("WDSMenuBarItem.react");
            K = o("WAWebNewsletterModelUtils").isMembershipAdminOrOwner(S?.valueOf()) ? <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} testid="share-newsletter-button" icon={r("WDSIconIcLink.react")} onClick={q} title={s._("Share")}/> : null;
            l[22] = q;
            l[23] = S;
            l[24] = K;
        } else {
            K = l[24];
        }
        const Q = K;
        let X;
        if (l[25] !== A || l[26] !== isLoading || l[27] !== S) {
            const Component = r("WAWebNewsletterSubscribeButton.react");
            X = S === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest ? <Component onClick={A} isLoading={isLoading} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON}/> : null;
            l[25] = A;
            l[26] = isLoading;
            l[27] = S;
            l[28] = X;
        } else {
            X = l[28];
        }
        const Y = X;
        let J;
        if (l[29] !== R || l[30] !== t_chat.id || l[31] !== v || l[32] !== S) {
            J = o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabledForValues(S, v, R) ? c.jsx(o("WAWebNewsletterAddToStatusButtonLoadable").WAWebNewsletterAddToStatusButtonLoadable, {
                newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(t_chat.id)
            }) : null;
            l[29] = R;
            l[30] = t_chat.id;
            l[31] = v;
            l[32] = S;
            l[33] = J;
        } else {
            J = l[33];
        }
        const Z = J;
        let ee;
        if (l[34] !== Z || l[35] !== G || l[36] !== Q || l[37] !== Y) {
            ee = <>{Z}{Q}{G}{Y}</>;
            l[34] = Z;
            l[35] = G;
            l[36] = Q;
            l[37] = Y;
            l[38] = ee;
        } else {
            ee = l[38];
        }
        return ee;
    }
    const h = {
        deemphasized: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function y(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_height = e.height;
        const a = e_height === undefined ? 20 : e_height;
        let i;
        if (t[0] !== a) {
            i = c.jsx(r("WDSSpinner.react"), {
                size: a,
                xstyle: h.deemphasized
            });
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        return i;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(11);
        const { isMuted, isTogglingMute, onClick } = e;
        const l = !isTogglingMute;
        let u;
        if (isTogglingMute) {
            u = y;
        } else if (isMuted) {
            u = r("WDSIconIcNotificationsOff.react");
        } else {
            u = r("WDSIconIcNotifications.react");
        }
        let d;
        if (t[0] !== isMuted) {
            d = isMuted ? s._("Unmute") : s._("Mute");
            t[0] = isMuted;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = d;
        const p = isMuted ? "unmute-button" : "mute-button";
        const _ = isTogglingMute ? undefined : onClick;
        let f;
        if (t[2] !== u || t[3] !== _ || t[4] !== p || t[5] !== m) {
            const Component = r("WDSButton.react");
            f = <Component variant="borderless" size="medium" type="default" directional Icon={u} aria-label={m} onPress={_} testid={p} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON}/>;
            t[2] = u;
            t[3] = _;
            t[4] = p;
            t[5] = m;
            t[6] = f;
        } else {
            f = t[6];
        }
        const g = f;
        let h;
        if (t[7] !== g || t[8] !== l || t[9] !== m) {
            const Component = r("WDSTooltip.react");
            h = l ? <Component label={m}>{g}</Component> : <div title={m}>{g}</div>;
            t[7] = g;
            t[8] = l;
            t[9] = m;
            t[10] = h;
        } else {
            h = t[10];
        }
        return h;
    }
    l.default = g;
}, 226);