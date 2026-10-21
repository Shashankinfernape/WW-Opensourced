__d("WAWebChatCellV2.react", [
    "fbt",
    "WAWebCellV2.react",
    "WAWebChatGetters",
    "WAWebChatIcons.react",
    "WAWebChatTimestamp.react",
    "WAWebChatstateInfo.react",
    "WAWebChevronCustomIcons",
    "WAWebCommunityGatingUtils",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebErrorBoundary.react",
    "WAWebFlexBox.react",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebGroupChatImage.react",
    "WAWebMobilePlatforms",
    "WAWebName.react",
    "WAWebPopoverContext.react",
    "WAWebStackedCirclesImage.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransition",
    "WDSFocusStateStyles",
    "WDSFontTokenStyles",
    "WDSGlobalContext",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebChatValues",
    "useWAWebHover"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "chat",
        "ref"
    ];
    const u = [
        "contextMenuItems",
        "forceActive",
        "hideArchivedIcon",
        "hideMuteIcon",
        "onContextMenuToggle",
        "showCommunityInfo",
        "showMessageYourselfName",
        "showSpeakerForCag",
        "useShortName"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useCallback, useContext, useEffect, useId, useRef, useState } = p;
    const b = {
        contextMenuButton: {
            lineHeight: "x14ju556",
            $$css: true
        },
        mutedTextColor: {
            color: "xhslqc4",
            $$css: true
        },
        secondaryText: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function v(t) {
        const n = o("react-compiler-runtime").c(97);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.chat;
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        let d;
        let p;
        let _;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let useShortName;
        if (n[4] !== i) {
            const T = i;
            p = T.contextMenuItems;
            _ = T.forceActive;
            S = T.hideArchivedIcon;
            R = T.hideMuteIcon;
            v = T.onContextMenuToggle;
            L = T.showCommunityInfo;
            E = T.showMessageYourselfName;
            k = T.showSpeakerForCag;
            useShortName = T.useShortName;
            d = babelHelpers.objectWithoutPropertiesLoose(T, u);
            n[4] = i;
            n[5] = d;
            n[6] = p;
            n[7] = _;
            n[8] = v;
            n[9] = S;
            n[10] = R;
            n[11] = L;
            n[12] = E;
            n[13] = k;
            n[14] = useShortName;
        } else {
            d = n[5];
            p = n[6];
            _ = n[7];
            v = n[8];
            S = n[9];
            R = n[10];
            L = n[11];
            E = n[12];
            k = n[13];
            useShortName = n[14];
        }
        const hideArchivedIcon = S === undefined ? false : S;
        const hideMuteIcon = R === undefined ? false : R;
        const showCommunityInfo = L === undefined ? false : L;
        const P = E === undefined ? false : E;
        const showSpeakerForCag = k === undefined ? false : k;
        let M;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            M = [
                o("WAWebFrontendChatGetters").getOptimisticUnreadCount
            ];
            n[15] = M;
        } else {
            M = n[15];
        }
        const w = o("useWAWebChatValues").useChatValues(a.id, M);
        const A = w[0];
        const FRef = useRef(null);
        const O = r("useMergeRefs")(l, FRef);
        const B = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef();
        const isHovered = o("useWAWebHover").useWAWebHover(FRef);
        const q = useState(null);
        const U = q[0];
        const V = q[1];
        const H = _ === true || d.active;
        const GRef = useRef(false);
        const zRef = useRef(null);
        let j;
        let K;
        if (n[16] !== U || n[17] !== v) {
            j = function() {
                v?.(U != null);
            };
            K = [
                U,
                v
            ];
            n[16] = U;
            n[17] = v;
            n[18] = j;
            n[19] = K;
        } else {
            j = n[18];
            K = n[19];
        }
        useEffect(j, K);
        let Q;
        if (n[20] !== p) {
            Q = function(t) {
                V({
                    anchor: t.anchor,
                    event: t.event,
                    menu: p ?? []
                });
            };
            n[20] = p;
            n[21] = Q;
        } else {
            Q = n[21];
        }
        const onContextMenu = Q;
        let Y;
        if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
            Y = function() {
                V(null);
                if (GRef.current) {
                    GRef.current = false;
                    r("WAWebFocusTracer").focus(zRef.current);
                }
            };
            n[22] = Y;
        } else {
            Y = n[22];
        }
        const J = Y;
        const Z = useId();
        const ee = useContext(o("WDSGlobalContext").WDSContext);
        const { registerMenu, unregisterMenu } = ee;
        let re;
        let oe;
        if (n[23] !== U || n[24] !== Z || n[25] !== registerMenu || n[26] !== unregisterMenu) {
            re = function() {
                if (U != null) {
                    registerMenu(Z, J);
                    return function() {
                        return unregisterMenu(Z);
                    };
                }
            };
            oe = [
                J,
                U,
                Z,
                registerMenu,
                unregisterMenu
            ];
            n[23] = U;
            n[24] = Z;
            n[25] = registerMenu;
            n[26] = unregisterMenu;
            n[27] = re;
            n[28] = oe;
        } else {
            re = n[27];
            oe = n[28];
        }
        useEffect(re, oe);
        let ae;
        if (n[29] !== B || n[30] !== onContextMenu) {
            ae = function(t) {
                if (t.key === "Enter") {
                    t.preventDefault();
                    t.stopPropagation();
                    onContextMenu({
                        anchor: zRef.current
                    });
                    GRef.current = true;
                    B.current?.showPopover();
                }
            };
            n[29] = B;
            n[30] = onContextMenu;
            n[31] = ae;
        } else {
            ae = n[31];
        }
        const ie = ae;
        let le;
        if (n[32] !== onContextMenu) {
            le = function(t) {
                t.preventDefault();
                t.stopPropagation();
                onContextMenu({
                    event: t,
                    anchor: zRef.current
                });
            };
            n[32] = onContextMenu;
            n[33] = le;
        } else {
            le = n[33];
        }
        const se = le;
        let ue;
        if (n[34] === Symbol.for("react.memo_cache_sentinel")) {
            ue = o("WAWebMobilePlatforms").isSMB();
            n[34] = ue;
        } else {
            ue = n[34];
        }
        const showLabelIcon = ue;
        let de;
        if (o("WAWebChatGetters").getIsGroup(a)) {
            let me;
            if (n[35] !== a || n[36] !== P || n[37] !== useShortName) {
                me = m.jsx(o("WAWebName.react").Name, {
                    chat: a,
                    ellipsify: true,
                    showLabelIcon,
                    showMessageYourselfName: P,
                    titlify: true,
                    useShortName
                });
                n[35] = a;
                n[36] = P;
                n[37] = useShortName;
                n[38] = me;
            } else {
                me = n[38];
            }
            de = me;
        } else {
            const pe = a.contact;
            let _e;
            if (n[39] !== pe || n[40] !== P || n[41] !== useShortName) {
                _e = pe != null ? m.jsx(o("WAWebName.react").Name, {
                    contact: pe,
                    ellipsify: true,
                    showBusinessCheckmark: o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(pe),
                    showLabelIcon,
                    showMessageYourselfName: P,
                    titlify: true,
                    useShortName,
                    you: true
                }) : null;
                n[39] = pe;
                n[40] = P;
                n[41] = useShortName;
                n[42] = _e;
            } else {
                _e = n[42];
            }
            de = _e;
        }
        let detailTop;
        const ge = showCommunityInfo === true && o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(a.groupMetadata);
        if (ge) {
            let he;
            if (n[43] !== a.groupMetadata) {
                he = a.groupMetadata?.getParentGroupChat();
                n[43] = a.groupMetadata;
                n[44] = he;
            } else {
                he = n[44];
            }
            const Ce = he;
            if (Ce != null) {
                let be;
                if (n[45] === Symbol.for("react.memo_cache_sentinel")) {
                    be = (c || (c = r("stylex"))).props(b.mutedTextColor, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2);
                    n[45] = be;
                } else {
                    be = n[45];
                }
                let ve;
                if (n[46] !== Ce) {
                    ve = <span {...babelHelpers.extends({}, be, {
                        children: m.jsx(o("WAWebName.react").Name, {
                            chat: Ce,
                            ellipsify: true,
                            titlify: true
                        })
                    })}/>;
                    n[46] = Ce;
                    n[47] = ve;
                } else {
                    ve = n[47];
                }
                detailTop = ve;
            }
        }
        let Se;
        if (n[48] !== de) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            Se = <Component>{de}</Component>;
            n[48] = de;
            n[49] = Se;
        } else {
            Se = n[49];
        }
        const Re = Se;
        let Le;
        if (n[50] === Symbol.for("react.memo_cache_sentinel")) {
            Le = (c || (c = r("stylex"))).props(b.mutedTextColor, b.secondaryText, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2);
            n[50] = Le;
        } else {
            Le = n[50];
        }
        let Ee;
        if (n[51] !== a) {
            Ee = <div {...babelHelpers.extends({}, Le, {
                "data-testid": "chat_cell_secondary_text",
                children: m.jsx(r("WAWebChatstateInfo.react"), {
                    chat: a
                })
            })}/>;
            n[51] = a;
            n[52] = Ee;
        } else {
            Ee = n[52];
        }
        const ke = Ee;
        let Ie;
        if (n[53] !== a.id) {
            Ie = m.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: a.id,
                size: 40,
                waitIdle: true
            });
            n[53] = a.id;
            n[54] = Ie;
        } else {
            Ie = n[54];
        }
        const Te = Ie;
        let De;
        if (n[55] !== a || n[56] !== Te || n[57] !== isHovered || n[58] !== showCommunityInfo || n[59] !== showSpeakerForCag) {
            const xe = o("WAWebChatGetters").getIsGroup(a) ? m.jsx(r("WAWebGroupChatImage.react"), {
                chat: a,
                isHovered,
                regularChatImage: Te,
                showCommunityInfo,
                showSpeakerForCag,
                size: 40,
                theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
            }) : Te;
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            De = <Component name="chat-cell-image">{xe}</Component>;
            n[55] = a;
            n[56] = Te;
            n[57] = isHovered;
            n[58] = showCommunityInfo;
            n[59] = showSpeakerForCag;
            n[60] = De;
        } else {
            De = n[60];
        }
        const $e = De;
        const Pe = A ? "teal" : null;
        let Ne;
        if (n[61] !== a) {
            Ne = m.jsx(r("WAWebChatTimestamp.react"), {
                chat: a
            });
            n[61] = a;
            n[62] = Ne;
        } else {
            Ne = n[62];
        }
        let Me;
        if (n[63] !== Pe || n[64] !== Ne) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            Me = <Component color={Pe}>{Ne}</Component>;
            n[63] = Pe;
            n[64] = Ne;
            n[65] = Me;
        } else {
            Me = n[65];
        }
        const we = Me;
        let Ae;
        if (U) {
            let Fe;
            if (n[66] !== U) {
                const Component = o("WAWebUimUie.react").UIE;
                Fe = <Component dismissOnWindowResize displayName="ChatContextMenu" escapable popable requestDismiss={J}>{m.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: U
                })}</Component>;
                n[66] = U;
                n[67] = Fe;
            } else {
                Fe = n[67];
            }
            Ae = Fe;
        }
        const Oe = U != null || isHovered || d.active === true;
        let unreadMentionIcon;
        if (n[68] !== a) {
            unreadMentionIcon = o("WAWebChatGetters").getIsGroup(a) && a.hasUnreadMention;
            n[68] = a;
            n[69] = unreadMentionIcon;
        } else {
            unreadMentionIcon = n[69];
        }
        let We;
        if (n[70] !== a || n[71] !== hideArchivedIcon || n[72] !== hideMuteIcon || n[73] !== A || n[74] !== unreadMentionIcon) {
            We = m.jsx(o("WAWebChatIcons.react").Icons, {
                chat: a,
                dimWhenMuted: true,
                hideArchivedIcon,
                hideMuteIcon,
                mute: a.mute,
                unreadCount: A,
                unreadMentionIcon
            });
            n[70] = a;
            n[71] = hideArchivedIcon;
            n[72] = hideMuteIcon;
            n[73] = A;
            n[74] = unreadMentionIcon;
            n[75] = We;
        } else {
            We = n[75];
        }
        let qe;
        if (n[76] !== p || n[77] !== se || n[78] !== ie || n[79] !== Oe || n[80] !== Ae) {
            const Component = r("WAWebVelocityTransition");
            qe = p != null && <Component appear in={Oe} mountOnEnter nodeRef={zRef} transitionName="pop-fast-chat" unmountOnExit><button {...babelHelpers.extends({
                "data-testid": "open-chat-context-menu",
                onClick: se,
                onKeyDown: ie,
                ref: zRef
            }, (c || (c = r("stylex"))).props(b.contextMenuButton, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), {
                "aria-label": s._("Open chat context menu"),
                children: [
                    m.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
                        iconXstyle: b.secondaryColor,
                        height: 20,
                        width: 20
                    }),
                    Ae
                ]
            })}/></Component>;
            n[76] = p;
            n[77] = se;
            n[78] = ie;
            n[79] = Oe;
            n[80] = Ae;
            n[81] = qe;
        } else {
            qe = n[81];
        }
        let Ue;
        if (n[82] !== We || n[83] !== qe) {
            const Component = o("WAWebFlexBox.react").FlexRow;
            Ue = <Component align="center" gap={8}>{We}{qe}</Component>;
            n[82] = We;
            n[83] = qe;
            n[84] = Ue;
        } else {
            Ue = n[84];
        }
        const Ve = Ue;
        let detailTopRight;
        let Ge;
        let secondaryRight;
        if (detailTop != null) {
            detailTopRight = we;
            Ge = Ve;
            secondaryRight = null;
        } else {
            detailTopRight = null;
            Ge = we;
            secondaryRight = Ve;
        }
        let je;
        if (n[85] !== H || n[86] !== d || n[87] !== $e || n[88] !== detailTop || n[89] !== detailTopRight || n[90] !== O || n[91] !== onContextMenu || n[92] !== Re || n[93] !== Ge || n[94] !== ke || n[95] !== secondaryRight) {
            je = m.jsx(r("WAWebCellV2.react"), babelHelpers.extends({
                ref: O
            }, d, {
                active: H,
                alignPrimary: "start",
                detailLeft: $e,
                detailTop,
                detailTopRight,
                onContextMenu,
                primary: Re,
                primaryRight: Ge,
                secondary: ke,
                secondaryRight
            }));
            n[85] = H;
            n[86] = d;
            n[87] = $e;
            n[88] = detailTop;
            n[89] = detailTopRight;
            n[90] = O;
            n[91] = onContextMenu;
            n[92] = Re;
            n[93] = Ge;
            n[94] = ke;
            n[95] = secondaryRight;
            n[96] = je;
        } else {
            je = n[96];
        }
        return je;
    }
    l.default = v;
}, 226);