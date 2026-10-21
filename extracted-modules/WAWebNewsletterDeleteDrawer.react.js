__d("WAWebNewsletterDeleteDrawer.react", [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebContactGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebModalManager",
    "WAWebNewsletterDeleteModal.react",
    "WAWebNewsletterDrawerBodyParagraph.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterImageWithAction.react",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterWamoSubUtils",
    "WAWebWamEnumInteractionSurface",
    "WDSIconIcDelete.react",
    "WDSIconIcHistory.react",
    "WDSText.react",
    "cr:640",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect } = c;
    const p = {
        container: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x6s0dn4",
            justifyContent: "x1nhvcw1",
            paddingTop: "xijc0j3",
            paddingInlineEnd: "x15zmtp0",
            paddingBottom: "xq1608w",
            paddingInlineStart: "x1oiqv2n",
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        buttonContainer: {
            textAlign: "x2b8uid",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        },
        marginTop16: {
            marginTop: "x98l61r",
            $$css: true
        }
    };
    function _(e) {
        const a = o("react-compiler-runtime").c(43);
        const { chat, onBack, onCancel, ref } = e;
        let _;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata,
                o("WAWebFrontendChatGetters").getContact
            ];
            a[0] = _;
        } else {
            _ = a[0];
        }
        const h = o("useWAWebChatValues").useChatValues(chat.id, _);
        const y = h[0];
        let C;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                o("WAWebContactGetters").getId,
                o("WAWebContactGetters").getName
            ];
            a[1] = C;
        } else {
            C = a[1];
        }
        const b = o("useWAWebContactValues").useContactValues(chat.contact.id, C);
        const v = b[1];
        const S = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(y?.id, [
            o("WAWebNewsletterMetadataGetters").getSuspended,
            o("WAWebNewsletterMetadataGetters").getWamoSubPlanId
        ], {
            isStrong: true
        }) ?? [
            null,
            null
        ];
        const R = S[0];
        let L;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            L = [];
            a[2] = L;
        } else {
            L = a[2];
        }
        useEffect(g, L);
        let E;
        if (a[3] !== v) {
            E = s._("Delete \"{channel-name}\"?", [
                s._param("channel-name", u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: v
                }))
            ]);
            a[3] = v;
            a[4] = E;
        } else {
            E = a[4];
        }
        const k = E;
        let I;
        if (a[5] !== y || a[6] !== R) {
            I = [];
            let T;
            if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
                T = {
                    title: s._("Channel will be permanently deleted"),
                    description: s._("You won't be able to recover the channel."),
                    Icon: r("WDSIconIcDelete.react"),
                    key: "channel-will-be-permanently-deleted"
                };
                a[8] = T;
            } else {
                T = a[8];
            }
            I.push(T);
            if (n("cr:640") != null && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(y) && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
                if (R !== true) {
                    let D;
                    if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
                        D = n("cr:640").getNewsletterDeleteDialogSuspendedWamoSubWarningMessageContent();
                        a[9] = D;
                    } else {
                        D = a[9];
                    }
                    I.push(D);
                }
                let x;
                if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
                    x = n("cr:640").getNewsletterDeleteDialogWamoSubWarningMessageContent();
                    a[10] = x;
                } else {
                    x = a[10];
                }
                I.push(x);
            } else if (R !== true) {
                let $;
                if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
                    $ = {
                        title: s._("Followers can see past activity"),
                        description: s._("Past channel activity will stay on your followers' devices."),
                        Icon: r("WDSIconIcHistory.react"),
                        key: "followers-can-see-past-activity"
                    };
                    a[11] = $;
                } else {
                    $ = a[11];
                }
                I.push($);
            }
            a[5] = y;
            a[6] = R;
            a[7] = I;
        } else {
            I = a[7];
        }
        let P;
        if (a[12] !== chat) {
            P = function() {
                if (r("WAWebEnforcementActionLogging").isSessionStarted()) {
                    r("WAWebEnforcementActionLogging").logDeleteChannelConfirmClick();
                }
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNewsletterDeleteModal.react"), {
                    chat
                }));
            };
            a[12] = chat;
            a[13] = P;
        } else {
            P = a[13];
        }
        const N = P;
        let M;
        if (a[14] !== onBack) {
            M = function() {
                r("WAWebEnforcementActionLogging").logBackClick();
                onBack?.();
            };
            a[14] = onBack;
            a[15] = M;
        } else {
            M = a[15];
        }
        const w = M;
        let A;
        if (a[16] !== onCancel) {
            A = function() {
                r("WAWebEnforcementActionLogging").logDismissDrawerClick();
                onCancel?.();
            };
            a[16] = onCancel;
            a[17] = A;
        } else {
            A = a[17];
        }
        const F = A;
        let O;
        if (a[18] === Symbol.for("react.memo_cache_sentinel")) {
            O = {
                surface: "unknown",
                viewName: "newsletter-delete"
            };
            a[18] = O;
        } else {
            O = a[18];
        }
        let B;
        if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
            B = o("WAWebCommonNewsletterStrings").getDeleteChannelText();
            a[19] = B;
        } else {
            B = a[19];
        }
        let W;
        if (a[20] !== w || a[21] !== F) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            W = <Component title={B} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onBack={w} onCancel={F}/>;
            a[20] = w;
            a[21] = F;
            a[22] = W;
        } else {
            W = a[22];
        }
        let q;
        if (a[23] !== chat) {
            const Component = o("WAWebFlex.react").FlexRow;
            q = <Component align="center" justify="center">{u.jsx(r("WAWebNewsletterImageWithAction.react"), {
                chat,
                actionTheme: "danger",
                Icon: r("WDSIconIcDelete.react")
            })}</Component>;
            a[23] = chat;
            a[24] = q;
        } else {
            q = a[24];
        }
        let U;
        if (a[25] === Symbol.for("react.memo_cache_sentinel")) {
            U = {
                className: "x2b8uid x98l61r x1ua1l7f"
            };
            a[25] = U;
        } else {
            U = a[25];
        }
        let V;
        if (a[26] !== k) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            V = <Component_1 align="center" justify="center"><h1 {...babelHelpers.extends({
                "data-testid": "newsletter-delete-title-heading"
            }, U, {
                children: <Component type="Headline1" textAlign="center" colorName="contentDefault" testid="newsletter-delete-title">{k}</Component>
            })}/></Component_1>;
            a[26] = k;
            a[27] = V;
        } else {
            V = a[27];
        }
        let H;
        if (a[28] !== I) {
            H = I.map(f);
            a[28] = I;
            a[29] = H;
        } else {
            H = a[29];
        }
        let G;
        if (a[30] === Symbol.for("react.memo_cache_sentinel")) {
            G = [
                p.buttonContainer,
                p.marginTop16
            ];
            a[30] = G;
        } else {
            G = a[30];
        }
        let z;
        if (a[31] === Symbol.for("react.memo_cache_sentinel")) {
            z = s._("Delete");
            a[31] = z;
        } else {
            z = a[31];
        }
        let j;
        if (a[32] !== N) {
            const Component = o("WAWebButton.react").Button;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            j = <Component_1 xstyle={G}><Component testid="delete-channel-button" type="solid-warning" onClick={N}>{z}</Component></Component_1>;
            a[32] = N;
            a[33] = j;
        } else {
            j = a[33];
        }
        let K;
        if (a[34] !== q || a[35] !== V || a[36] !== H || a[37] !== j) {
            const Component = r("WAWebDrawerSection.react");
            const Component_1 = r("WAWebDrawerBody.react");
            K = <Component_1><Component animation={false} xstyle={p.container}>{q}{V}{H}{j}</Component></Component_1>;
            a[34] = q;
            a[35] = V;
            a[36] = H;
            a[37] = j;
            a[38] = K;
        } else {
            K = a[38];
        }
        let Q;
        if (a[39] !== ref || a[40] !== W || a[41] !== K) {
            const Component = r("WAWebDrawer.react");
            Q = <Component ref={ref} testid="newsletter-delete-drawer" tsNavigationData={O}>{W}{K}</Component>;
            a[39] = ref;
            a[40] = W;
            a[41] = K;
            a[42] = Q;
        } else {
            Q = a[42];
        }
        return Q;
    }
    function f({ Icon, description, key, title }) {
        return u.jsx(r("WAWebNewsletterDrawerBodyParagraph.react"), {
            icon: <Icon width={24} height={24} xstyle={p.icon}/>,
            title,
            description
        }, key);
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g() {
        r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.DELETE_CHANNEL_CONFIRMATION_SCREEN);
    }
    l.default = _;
}, 226);