__d("WAWebNewsletterChatMenuDropdown.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterMsgLinkUtils",
    "WAWebReportNewsletterPopup.react",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebUnfollowNewsletterConfirmationModalLoadable",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSIconIcCheckBox.react",
    "WDSIconIcClose.react",
    "WDSIconIcCode.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLogout.react",
    "WDSIconIcSettings.react",
    "WDSIconIcThumbDown.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function d(e) {
        const n = o("react-compiler-runtime").c(43);
        const { chat, onSelectMessages } = e;
        const chat_newsletterMetadata = chat.newsletterMetadata;
        let c;
        if (n[0] !== chat) {
            c = function() {
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportNewsletterPopup.react"), {
                    chat,
                    spamFlow: o("WAWebSpamConstants").SpamFlow.OverflowMenuReport
                }));
            };
            n[0] = chat;
            n[1] = c;
        } else {
            c = n[1];
        }
        const d = c;
        let p;
        if (n[2] !== chat) {
            p = function() {
                o("WAWebCmd").Cmd.chatInfoDrawer(chat);
            };
            n[2] = chat;
            n[3] = p;
        } else {
            p = n[3];
        }
        const _ = p;
        let f;
        if (n[4] !== chat) {
            f = function() {
                o("WAWebCmd").Cmd.closeChat(chat);
            };
            n[4] = chat;
            n[5] = f;
        } else {
            f = n[5];
        }
        const g = f;
        let h;
        if (n[6] !== chat) {
            h = function() {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModalLoadable").UnfollowNewsletterConfirmationModalLoadable, {
                    chat: o("WAWebStateUtils").unproxy(chat),
                    loggingOptions: {
                        eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                        discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
                    }
                }));
            };
            n[6] = chat;
            n[7] = h;
        } else {
            h = n[7];
        }
        const y = h;
        let C;
        if (n[8] !== chat) {
            C = function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "info_flow",
                    chat,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings
                } : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings
                }));
            };
            n[8] = chat;
            n[9] = C;
        } else {
            C = n[9];
        }
        const b = C;
        let v;
        if (n[10] !== chat) {
            v = function() {
                o("WAWebNewsletterMsgLinkUtils").handleNewsletterChannelEmbedClick(chat);
            };
            n[10] = chat;
            n[11] = v;
        } else {
            v = n[11];
        }
        const S = v;
        let R;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Channel settings");
            n[12] = R;
        } else {
            R = n[12];
        }
        const L = R;
        let E = null;
        if (chat.newsletterMetadata?.iAmAdminOrOwner() && !m(chat)) {
            let k;
            if (n[13] !== b) {
                const Component = r("WDSMenuItem.react");
                k = <Component key="newsletter-overflow-menu-newsletter-settings" onPress={b} testid="newsletter-overflow-menu-newsletter-settings" Icon={r("WDSIconIcSettings.react")} title={L}/>;
                n[13] = b;
                n[14] = k;
            } else {
                k = n[14];
            }
            E = k;
        }
        let I;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("Embed channel");
            n[15] = I;
        } else {
            I = n[15];
        }
        const T = I;
        let D = null;
        if (o("WAWebNewsletterGatingUtils").canEmbedNewsletterChannel(chat_newsletterMetadata)) {
            let x;
            if (n[16] !== S) {
                const Component = r("WDSMenuItem.react");
                x = <Component key="newsletter-overflow-menu-embed" onPress={S} testid="newsletter-overflow-menu-embed" Icon={r("WDSIconIcCode.react")} title={T}/>;
                n[16] = S;
                n[17] = x;
            } else {
                x = n[17];
            }
            D = x;
        }
        let $;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            $ = s._("Select updates");
            n[18] = $;
        } else {
            $ = n[18];
        }
        const P = $;
        let N = null;
        if (!m(chat)) {
            let M;
            if (n[19] !== onSelectMessages) {
                const Component = r("WDSMenuItem.react");
                M = <Component key="newsletter-overflow-menu-select-messages" testid="newsletter-overflow-menu-select-messages" onPress={onSelectMessages} Icon={r("WDSIconIcCheckBox.react")} title={P}/>;
                n[19] = onSelectMessages;
                n[20] = M;
            } else {
                M = n[20];
            }
            N = M;
        }
        let w;
        if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
            w = s._("Report");
            n[21] = w;
        } else {
            w = n[21];
        }
        const A = w;
        let F = null;
        if (!m(chat)) {
            let O;
            if (n[22] !== d) {
                const Component = r("WDSMenuItem.react");
                O = <Component key="newsletter-overflow-menu-report" onPress={d} testid="newsletter-overflow-menu-report" Icon={r("WDSIconIcThumbDown.react")} title={A} destructive/>;
                n[22] = d;
                n[23] = O;
            } else {
                O = n[23];
            }
            F = O;
        }
        let B;
        if (n[24] === Symbol.for("react.memo_cache_sentinel")) {
            B = s._("Channel info");
            n[24] = B;
        } else {
            B = n[24];
        }
        const W = B;
        let q;
        if (n[25] === Symbol.for("react.memo_cache_sentinel")) {
            q = s._("Close channel");
            n[25] = q;
        } else {
            q = n[25];
        }
        const U = q;
        let V;
        if (n[26] !== _) {
            const Component = r("WDSMenuItem.react");
            V = <Component key="newsletter-overflow-menu-newsletter-info" onPress={_} testid="newsletter-overflow-menu-newsletter-info" Icon={r("WDSIconIcInfo.react")} title={W}/>;
            n[26] = _;
            n[27] = V;
        } else {
            V = n[27];
        }
        let H;
        if (n[28] !== g) {
            const Component = r("WDSMenuItem.react");
            H = <Component key="newsletter-overflow-menu-close-channel" onPress={g} testid="newsletter-overflow-menu-close-channel" Icon={r("WDSIconIcClose.react")} title={U}/>;
            n[28] = g;
            n[29] = H;
        } else {
            H = n[29];
        }
        let G;
        if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
            G = u.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            }, "newsletter-overflow-menu-separator");
            n[30] = G;
        } else {
            G = n[30];
        }
        let z;
        if (n[31] !== y || n[32] !== D || n[33] !== chat_newsletterMetadata || n[34] !== F || n[35] !== N || n[36] !== E || n[37] !== V || n[38] !== H) {
            let j;
            const K = [
                V,
                E,
                D,
                N,
                H,
                G,
                F
            ];
            let Q;
            if (n[40] === Symbol.for("react.memo_cache_sentinel")) {
                Q = s._("Unfollow");
                n[40] = Q;
            } else {
                Q = n[40];
            }
            if ((j = chat_newsletterMetadata?.iAmSubscriber()) != null && j) {
                let Y;
                if (n[41] !== y) {
                    const Component = r("WDSMenuItem.react");
                    Y = <Component key="newsletter-overflow-menu-unfollow" onPress={y} testid="newsletter-overflow-menu-unfollow" Icon={r("WDSIconIcLogout.react")} title={Q} destructive/>;
                    n[41] = y;
                    n[42] = Y;
                } else {
                    Y = n[42];
                }
                K.push(Y);
            }
            const Component = r("WDSMenu.react");
            z = <Component testid="newsletter-menu-dropdown">{K}</Component>;
            n[31] = y;
            n[32] = D;
            n[33] = chat_newsletterMetadata;
            n[34] = F;
            n[35] = N;
            n[36] = E;
            n[37] = V;
            n[38] = H;
            n[39] = z;
        } else {
            z = n[39];
        }
        return z;
    }
    function m({ newsletterMetadata }) {
        return newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(newsletterMetadata);
    }
    l.default = d;
}, 226);