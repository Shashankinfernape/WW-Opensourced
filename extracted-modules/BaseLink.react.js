__d("BaseLink.react", [
    "BaseLinkDefaultTargetContext",
    "BaseLinkNestedPressableContext",
    "BaseNestedPressableHack_DO_NOT_USE.react",
    "CometCustomLinkshimHashContext",
    "CometLinkShimUtils",
    "CometLinkTrackingUtils",
    "CometProductAttributionContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "ConstUriUtils",
    "NavChainContentContext",
    "Pressable.react",
    "PressableText.react",
    "RecoverableViolationWithComponentStack.react",
    "appendPersistQueryParamsToUrl",
    "isCometRouterUrl",
    "isTrustedDestination",
    "mergeRefs",
    "react",
    "react-compiler-runtime",
    "useApplyEndpointModifiersToHref",
    "useAttributionSourceForClick",
    "useCometErrorProject",
    "useCometRouterDispatcher",
    "useCometRouterLinkEventHandlers",
    "useCometRouterLinkShimEventHandlers",
    "useCurrentRoute",
    "useFeedPressEventHandler",
    "useTransformRelativeUri"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext, useMemo, useRef } = u;
    function Component(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_children = e.children;
        let a;
        if (t[0] !== e_children) {
            const Component = r("BaseLinkNestedPressableContext").Provider;
            a = <Component value>{e_children}</Component>;
            t[0] = e_children;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    function FComponent(e) {
        const n = o("react-compiler-runtime").c(157);
        const { ref, "aria-activedescendant": aria_activedescendant, "aria-checked": aria_checked, "aria-controls": aria_controls, "aria-current": aria_current, "aria-describedby": aria_describedby, "aria-disabled": aria_disabled, "aria-expanded": aria_expanded, "aria-haspopup": aria_haspopup, "aria-hidden": aria_hidden, "aria-invalid": aria_invalid, "aria-label": aria_label, "aria-labelledby": aria_labelledby, "aria-owns": aria_owns, "aria-selected": aria_selected, attributionsrc, brid, children, className_DEPRECATED, disabled, disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV, disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV, display, download, draggable, fbclid, focusable, hidePageTransitioningLoadingState, href, id, label, lynxMode, onBlur, onClick, onContextMenu, onFocus, onFocusChange, onFocusVisibleChange, onHoverChange, onHoverEnd, onHoverMove, onHoverStart, onNavigate_DEPRECATED_FIXME, onNavigationTransitioning, onPressChange, onPressEnd, onPressStart, onTransitionOptimistic, passthroughProps, prefetchQueriesOnHover, prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING, preloadCodeOnMount, preserveQueryInShim, preventContextMenu, preventLocalNavigation, productAttribution, rel, replace, role, routeTarget, style, suppressFocusRing, suppressHydrationWarning, target, testid, testOnly_pressed, traceParams, xstyle } = e;
        const Le = display === undefined ? "inline" : display;
        const Ee = testOnly_pressed === undefined ? false : testOnly_pressed;
        const ke = r("useCometRouterDispatcher")();
        const IeRef = useRef(null);
        const Te = useContext(r("BaseLinkDefaultTargetContext"));
        const trackingNodes = useContext(r("CometTrackingNodesContext"));
        const navChainContent = useContext(r("NavChainContentContext"));
        const $e = useContext(r("CometTrackingCodeContext"));
        const { click_tracking_linkshim_cb, encrypted_click_tracking, encrypted_tracking } = $e;
        const linkContext = useContext(r("CometProductAttributionContext"));
        const Ae = useContext(o("CometCustomLinkshimHashContext").CometCustomLinkshimHashContext);
        const Fe = r("useCurrentRoute")();
        let Oe;
        if (n[0] !== encrypted_click_tracking || n[1] !== trackingNodes) {
            Oe = function(t) {
                return o("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(t, trackingNodes, encrypted_click_tracking);
            };
            n[0] = encrypted_click_tracking;
            n[1] = trackingNodes;
            n[2] = Oe;
        } else {
            Oe = n[2];
        }
        const Be = Oe;
        const We = r("useApplyEndpointModifiersToHref")();
        const qe = download === true || typeof download === "string";
        let Ue;
        e: {
            let He;
            if (n[3] !== href) {
                He = href != null ? r("appendPersistQueryParamsToUrl")(href) : href;
                n[3] = href;
                n[4] = He;
            } else {
                He = n[4];
            }
            const Ge = He;
            let ze = false;
            if (Ge != null) {
                if (n[5] !== Ge) {
                    const je = o("ConstUriUtils").getUri(Ge);
                    if (je != null) {
                        const Ke = je.getProtocol();
                        const Qe = je.getDomain();
                        if (!Ke.length && !Qe.length) {
                            ze = true;
                        } else {
                            const Xe = Ke.length ? je : je.getQualifiedUri();
                            ze = Xe != null && r("isTrustedDestination")(Xe);
                        }
                    }
                    n[5] = Ge;
                    n[6] = ze;
                } else {
                    ze = n[6];
                }
            } else {
                ze = true;
            }
            if (qe || disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV === true) {
                const Ye = !ze;
                let Je;
                if (n[7] !== Ge || n[8] !== Ye) {
                    Je = {
                        clickIDAppended: false,
                        ghlEncrypted: false,
                        href: Ge,
                        isExternalLink: Ye,
                        isRouterLink: false,
                        shimmed: false,
                        unshimmedHref: null
                    };
                    n[7] = Ge;
                    n[8] = Ye;
                    n[9] = Je;
                } else {
                    Je = n[9];
                }
                Ue = Je;
                break e;
            }
            if (Ge != null && r("isCometRouterUrl")(Ge)) {
                let Ze;
                if (n[10] !== We || n[11] !== Be || n[12] !== Ge) {
                    Ze = Be(We(Ge));
                    n[10] = We;
                    n[11] = Be;
                    n[12] = Ge;
                    n[13] = Ze;
                } else {
                    Ze = n[13];
                }
                const et = Ze;
                const tt = !ze;
                let nt;
                if (n[14] !== et || n[15] !== tt) {
                    nt = {
                        clickIDAppended: false,
                        ghlEncrypted: false,
                        href: et,
                        isExternalLink: tt,
                        isRouterLink: true,
                        shimmed: false,
                        unshimmedHref: null
                    };
                    n[14] = et;
                    n[15] = tt;
                    n[16] = nt;
                } else {
                    nt = n[16];
                }
                Ue = nt;
                break e;
            }
            let rt;
            let ot;
            if (n[17] !== brid || n[18] !== click_tracking_linkshim_cb || n[19] !== Fe?.url || n[20] !== Ae || n[21] !== Be || n[22] !== disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV || n[23] !== fbclid || n[24] !== Ge || n[25] !== preserveQueryInShim || n[26] !== trackingNodes) {
                rt = o("CometLinkShimUtils").getLinkShimInfo(Ge, click_tracking_linkshim_cb, trackingNodes, fbclid, brid, disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV, preserveQueryInShim, Ae, Fe?.url);
                ot = rt.shimmed ? rt.href : Be(rt.href);
                n[17] = brid;
                n[18] = click_tracking_linkshim_cb;
                n[19] = Fe?.url;
                n[20] = Ae;
                n[21] = Be;
                n[22] = disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV;
                n[23] = fbclid;
                n[24] = Ge;
                n[25] = preserveQueryInShim;
                n[26] = trackingNodes;
                n[27] = rt;
                n[28] = ot;
            } else {
                rt = n[27];
                ot = n[28];
            }
            const at = ot;
            const it = rt.ghlEncrypted ?? false;
            const lt = !ze;
            const unshimmedHref_1 = rt.shimmed ? rt.unshimmedHref : null;
            let ut;
            if (n[29] !== at || n[30] !== rt.clickIDAppended || n[31] !== rt.shimmed || n[32] !== it || n[33] !== lt || n[34] !== unshimmedHref_1) {
                ut = {
                    clickIDAppended: rt.clickIDAppended,
                    ghlEncrypted: it,
                    href: at,
                    isExternalLink: lt,
                    isRouterLink: false,
                    shimmed: rt.shimmed,
                    unshimmedHref: unshimmedHref_1
                };
                n[29] = at;
                n[30] = rt.clickIDAppended;
                n[31] = rt.shimmed;
                n[32] = it;
                n[33] = lt;
                n[34] = unshimmedHref_1;
                n[35] = ut;
            } else {
                ut = n[35];
            }
            Ue = ut;
        }
        const ct = Ue;
        const { clickIDAppended, ghlEncrypted, href: href_1, isExternalLink, isRouterLink, shimmed, unshimmedHref } = ct;
        let yt = false;
        let Ct = false;
        let bt = target;
        if (Te) {
            bt = bt ?? Te;
        }
        if (shimmed || ghlEncrypted || isExternalLink && disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV !== true) {
            yt = true;
            bt = bt ?? "_blank";
            Ct = !!o("CometLinkShimUtils").use_rel_no_referrer && bt === "_blank";
        }
        let vt;
        if (n[36] !== rel) {
            vt = Array.isArray(rel) ? rel.join(" ") : rel;
            n[36] = rel;
            n[37] = vt;
        } else {
            vt = n[37];
        }
        let St = vt;
        if (yt && (St == null || St.indexOf("nofollow") < 0)) {
            St = St != null ? `${St} nofollow` : "nofollow";
        }
        if (Ct && (St == null || St.indexOf("noreferrer") < 0)) {
            St = St != null ? `${St} noreferrer` : "noreferrer";
        }
        const Rt = r("useAttributionSourceForClick")(null, encrypted_tracking[0]);
        const Lt = useContext(r("BaseLinkNestedPressableContext"));
        const Et = role;
        const kt = label != null && Et !== "none" ? label : aria_label;
        const It = ref;
        let Tt;
        let Dt;
        let xt;
        Tt = r("useFeedPressEventHandler")(onClick, href_1);
        Dt = r("useFeedPressEventHandler")(onPressStart, href_1);
        xt = r("useFeedPressEventHandler")(onContextMenu, href_1);
        let $t;
        if (n[38] !== It) {
            $t = function(t) {
                return r("mergeRefs")(It, IeRef)(t);
            };
            n[38] = It;
            n[39] = $t;
        } else {
            $t = n[39];
        }
        const Pt = $t;
        let Nt;
        if (n[40] !== href_1 || n[41] !== lynxMode || n[42] !== onHoverStart || n[43] !== shimmed || n[44] !== xt || n[45] !== Tt || n[46] !== unshimmedHref) {
            Nt = {
                href: href_1,
                lynxMode,
                onContextMenu: xt,
                onHoverStart,
                onPress: Tt,
                shimmed,
                unshimmedHref
            };
            n[40] = href_1;
            n[41] = lynxMode;
            n[42] = onHoverStart;
            n[43] = shimmed;
            n[44] = xt;
            n[45] = Tt;
            n[46] = unshimmedHref;
            n[47] = Nt;
        } else {
            Nt = n[47];
        }
        const Mt = r("useCometRouterLinkShimEventHandlers")(Nt);
        const { onContextMenu: onContextMenu_1, onHoverStart: onHoverStart_1, onPress, useOrigHref } = Mt;
        let productAttributionUpdateProps;
        if (n[48] !== navChainContent || n[49] !== productAttribution || n[50] !== linkContext || n[51] !== trackingNodes) {
            productAttributionUpdateProps = {
                fromLink: productAttribution,
                linkContext,
                navChainContent,
                trackingNodes
            };
            n[48] = navChainContent;
            n[49] = productAttribution;
            n[50] = linkContext;
            n[51] = trackingNodes;
            n[52] = productAttributionUpdateProps;
        } else {
            productAttributionUpdateProps = n[52];
        }
        let Wt;
        if (n[53] !== hidePageTransitioningLoadingState || n[54] !== onNavigate_DEPRECATED_FIXME || n[55] !== onNavigationTransitioning || n[56] !== passthroughProps || n[57] !== replace || n[58] !== routeTarget || n[59] !== productAttributionUpdateProps || n[60] !== traceParams) {
            Wt = {
                hidePageTransitioningLoadingState,
                linkRef: IeRef,
                onNavigate_DEPRECATED_FIXME,
                onNavigationTransitioning,
                passthroughProps,
                productAttributionUpdateProps,
                replace,
                target: routeTarget,
                traceParams
            };
            n[53] = hidePageTransitioningLoadingState;
            n[54] = onNavigate_DEPRECATED_FIXME;
            n[55] = onNavigationTransitioning;
            n[56] = passthroughProps;
            n[57] = replace;
            n[58] = routeTarget;
            n[59] = productAttributionUpdateProps;
            n[60] = traceParams;
            n[61] = Wt;
        } else {
            Wt = n[61];
        }
        const qt = Wt;
        let Ut;
        if (n[62] !== qt || n[63] !== href_1 || n[64] !== isRouterLink || n[65] !== onHoverStart_1 || n[66] !== onPress || n[67] !== onBlur || n[68] !== onFocus || n[69] !== onHoverEnd || n[70] !== onHoverMove || n[71] !== onTransitionOptimistic || n[72] !== prefetchQueriesOnHover || n[73] !== prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING || n[74] !== preloadCodeOnMount || n[75] !== preventLocalNavigation || n[76] !== St || n[77] !== bt || n[78] !== Dt) {
            Ut = {
                dispatcherExtras: qt,
                href: href_1,
                isRouterLink,
                onBlur,
                onFocus,
                onHoverEnd,
                onHoverMove,
                onHoverStart: onHoverStart_1,
                onPress,
                onPressStart: Dt,
                onTransitionOptimistic,
                prefetchQueriesOnHover,
                prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING,
                preloadCodeOnMount,
                preventLocalNavigation,
                rel: St,
                target: bt
            };
            n[62] = qt;
            n[63] = href_1;
            n[64] = isRouterLink;
            n[65] = onHoverStart_1;
            n[66] = onPress;
            n[67] = onBlur;
            n[68] = onFocus;
            n[69] = onHoverEnd;
            n[70] = onHoverMove;
            n[71] = onTransitionOptimistic;
            n[72] = prefetchQueriesOnHover;
            n[73] = prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING;
            n[74] = preloadCodeOnMount;
            n[75] = preventLocalNavigation;
            n[76] = St;
            n[77] = bt;
            n[78] = Dt;
            n[79] = Ut;
        } else {
            Ut = n[79];
        }
        const Vt = r("useCometRouterLinkEventHandlers")(Ut);
        const { onBlur: onBlur_1, onFocus: onFocus_1, onHoverEnd: onHoverEnd_1, onHoverMove: onHoverMove_1, onHoverStart: onHoverStart_2, onPress: onPress_1, onPressStart: onPressStart_1 } = Vt;
        const Yt = useOrigHref && shimmed ? unshimmedHref : href_1;
        const Jt = isRouterLink && bt !== "_blank" && ke != null || Yt == null || Yt === "#" || preventLocalNavigation === true;
        const url = r("useTransformRelativeUri")(useOrigHref && shimmed ? unshimmedHref : href_1) ?? "#";
        let en;
        if (n[80] !== aria_activedescendant || n[81] !== aria_controls || n[82] !== aria_current || n[83] !== aria_describedby || n[84] !== aria_haspopup || n[85] !== aria_labelledby || n[86] !== aria_owns) {
            en = {
                activedescendant: aria_activedescendant,
                controls: aria_controls,
                current: aria_current,
                describedby: aria_describedby,
                haspopup: aria_haspopup,
                labelledby: aria_labelledby,
                owns: aria_owns
            };
            n[80] = aria_activedescendant;
            n[81] = aria_controls;
            n[82] = aria_current;
            n[83] = aria_describedby;
            n[84] = aria_haspopup;
            n[85] = aria_labelledby;
            n[86] = aria_owns;
            n[87] = en;
        } else {
            en = n[87];
        }
        const tn = aria_disabled ?? disabled;
        let nn;
        if (n[88] !== aria_checked || n[89] !== aria_expanded || n[90] !== aria_hidden || n[91] !== aria_invalid || n[92] !== aria_selected || n[93] !== tn) {
            nn = {
                checked: aria_checked,
                disabled: tn,
                expanded: aria_expanded,
                hidden: aria_hidden,
                invalid: aria_invalid,
                selected: aria_selected
            };
            n[88] = aria_checked;
            n[89] = aria_expanded;
            n[90] = aria_hidden;
            n[91] = aria_invalid;
            n[92] = aria_selected;
            n[93] = tn;
            n[94] = nn;
        } else {
            nn = n[94];
        }
        const rn = attributionsrc ?? Rt;
        let link;
        if (n[95] !== download || n[96] !== url || n[97] !== St || n[98] !== rn || n[99] !== bt) {
            link = {
                attributionsrc: rn,
                download,
                rel: St,
                target: bt,
                url
            };
            n[95] = download;
            n[96] = url;
            n[97] = St;
            n[98] = rn;
            n[99] = bt;
            n[100] = link;
        } else {
            link = n[100];
        }
        const suppressHydrationWarning_1 = suppressHydrationWarning === true || clickIDAppended === true ? true : undefined;
        let ln;
        if (n[101] !== Ee) {
            ln = {
                disabled: false,
                focused: false,
                focusVisible: false,
                hovered: false,
                pressed: Ee
            };
            n[101] = Ee;
            n[102] = ln;
        } else {
            ln = n[102];
        }
        let sn;
        if (n[103] !== kt || n[104] !== className_DEPRECATED || n[105] !== disabled || n[106] !== draggable || n[107] !== Pt || n[108] !== onBlur_1 || n[109] !== onContextMenu_1 || n[110] !== onFocus_1 || n[111] !== onHoverEnd_1 || n[112] !== onHoverMove_1 || n[113] !== onHoverStart_2 || n[114] !== onPress_1 || n[115] !== onPressStart_1 || n[116] !== id || n[117] !== onFocusChange || n[118] !== onFocusVisibleChange || n[119] !== onHoverChange || n[120] !== onPressChange || n[121] !== onPressEnd || n[122] !== preventContextMenu || n[123] !== Jt || n[124] !== style || n[125] !== en || n[126] !== nn || n[127] !== link || n[128] !== suppressHydrationWarning_1 || n[129] !== ln || n[130] !== testid || n[131] !== xstyle) {
            sn = {
                accessibilityLabel: kt,
                accessibilityRelationship: en,
                accessibilityState: nn,
                className_DEPRECATED,
                disabled,
                draggable,
                forwardedRef: Pt,
                link,
                nativeID: id,
                onBlur: onBlur_1,
                onContextMenu: onContextMenu_1,
                onFocus: onFocus_1,
                onFocusChange,
                onFocusVisibleChange,
                onHoverChange,
                onHoverEnd: onHoverEnd_1,
                onHoverMove: onHoverMove_1,
                onHoverStart: onHoverStart_2,
                onPress: onPress_1,
                onPressChange,
                onPressEnd,
                onPressStart: onPressStart_1,
                preventContextMenu,
                preventDefault: Jt,
                style,
                suppressHydrationWarning: suppressHydrationWarning_1,
                testID: testid,
                testOnly_state: ln,
                xstyle
            };
            n[103] = kt;
            n[104] = className_DEPRECATED;
            n[105] = disabled;
            n[106] = draggable;
            n[107] = Pt;
            n[108] = onBlur_1;
            n[109] = onContextMenu_1;
            n[110] = onFocus_1;
            n[111] = onHoverEnd_1;
            n[112] = onHoverMove_1;
            n[113] = onHoverStart_2;
            n[114] = onPress_1;
            n[115] = onPressStart_1;
            n[116] = id;
            n[117] = onFocusChange;
            n[118] = onFocusVisibleChange;
            n[119] = onHoverChange;
            n[120] = onPressChange;
            n[121] = onPressEnd;
            n[122] = preventContextMenu;
            n[123] = Jt;
            n[124] = style;
            n[125] = en;
            n[126] = nn;
            n[127] = link;
            n[128] = suppressHydrationWarning_1;
            n[129] = ln;
            n[130] = testid;
            n[131] = xstyle;
            n[132] = sn;
        } else {
            sn = n[132];
        }
        const un = sn;
        let cn;
        if (Le === "block") {
            const dn = Et === "button" || Et === "menuitem" || Et === "none" || Et === "switch" || Et === "checkbox" || Et === "article" || Et === "radio" || Et === "tab" ? Et : "link";
            let mn;
            if (n[133] !== children) {
                mn = <Component>{children}</Component>;
                n[133] = children;
                n[134] = mn;
            } else {
                mn = n[134];
            }
            let pn;
            if (n[135] !== dn || n[136] !== un || n[137] !== focusable || n[138] !== suppressFocusRing || n[139] !== mn) {
                pn = s.jsx(r("Pressable.react"), babelHelpers.extends({}, un, {
                    accessibilityRole: dn,
                    suppressFocusRing,
                    tabbable: focusable,
                    children: mn
                }));
                n[135] = dn;
                n[136] = un;
                n[137] = focusable;
                n[138] = suppressFocusRing;
                n[139] = mn;
                n[140] = pn;
            } else {
                pn = n[140];
            }
            cn = pn;
        } else {
            const _n = Et === "button" || Et === "menuitem" || Et === "menuitemradio" || Et === "menuitemcheckbox" || Et === "none" || Et === "tab" ? Et : "link";
            let fn;
            if (n[141] !== children) {
                fn = <Component>{children}</Component>;
                n[141] = children;
                n[142] = fn;
            } else {
                fn = n[142];
            }
            let gn;
            if (n[143] !== _n || n[144] !== un || n[145] !== focusable || n[146] !== suppressFocusRing || n[147] !== fn) {
                gn = s.jsx(r("PressableText.react"), babelHelpers.extends({}, un, {
                    accessibilityRole: _n,
                    direction: "none",
                    focusable,
                    suppressFocusRing,
                    children: fn
                }));
                n[143] = _n;
                n[144] = un;
                n[145] = focusable;
                n[146] = suppressFocusRing;
                n[147] = fn;
                n[148] = gn;
            } else {
                gn = n[148];
            }
            cn = gn;
        }
        let hn;
        if (n[149] !== routeTarget) {
            hn = routeTarget === "content" && <G1/>;
            n[149] = routeTarget;
            n[150] = hn;
        } else {
            hn = n[150];
        }
        let yn;
        if (n[151] !== Lt || n[152] !== cn) {
            const Component = r("BaseNestedPressableHack_DO_NOT_USE.react");
            yn = Lt ? <Component>{cn}</Component> : cn;
            n[151] = Lt;
            n[152] = cn;
            n[153] = yn;
        } else {
            yn = n[153];
        }
        let Cn;
        if (n[154] !== hn || n[155] !== yn) {
            Cn = <>{hn}{yn}</>;
            n[154] = hn;
            n[155] = yn;
            n[156] = Cn;
        } else {
            Cn = n[156];
        }
        return Cn;
    }
    function G1() {
        const e = o("react-compiler-runtime").c(3);
        const t = r("useCurrentRoute")();
        const n = r("useCometErrorProject")();
        let a;
        if (e[0] !== t || e[1] !== n) {
            a = t != null && t.isCometRootContainer !== true && s.jsx(r("RecoverableViolationWithComponentStack.react"), {
                errorMessage: "A link with target=content was rendered in a non-tab-container",
                projectName: n ?? "comet_infra"
            });
            e[0] = t;
            e[1] = n;
            e[2] = a;
        } else {
            a = e[2];
        }
        return a;
    }
    l.default = FComponent;
}, 98);