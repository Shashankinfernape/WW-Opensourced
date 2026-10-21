__d("WAWebSuspendedCommunityMsgBar.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebClickableLink.react",
    "WAWebCxtUrl",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebKeyboardTabUtils",
    "WAWebLeaveCommunityModalUtilsLoadable",
    "WAWebSuspendedCommunityUtils",
    "WAWebSuspendedGroupUtils",
    "WAWebTabOrder",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WDSButton.react",
    "WDSIconIcDangerous.react",
    "WDSIconIcHelp.react",
    "WDSIconIcLogout.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebUIM",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        deactivate: {
            color: "x30a034",
            $$css: true
        },
        suspendedMsgBar: {
            width: "xh8yej3",
            $$css: true
        }
    };
    function m(e, t) {
        if (o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled()) {
            if (e) {
                switch(t){
                    case "IN_REVIEW":
                        return "in_review_admin";
                    case "REJECTED":
                        return "rejected_admin";
                    default:
                        return "suspended_admin";
                }
            }
            return "suspended_member";
        }
        return "legacy";
    }
    function p(e) {
        const i = o("react-compiler-runtime").c(45);
        const e_chat = e.chat;
        const p = e_useState(false);
        const f = p[0];
        const g = p[1];
        const h = r("useWAWebWindowSize")();
        const h_width = h.width;
        const C = r("useWAWebUIM")();
        const b = e_chat.groupMetadata?.parentGroup;
        let v;
        if (i[0] !== b) {
            v = b != null ? o("WAWebChatCollection").ChatCollection.get(b) : null;
            i[0] = b;
            i[1] = v;
        } else {
            v = i[1];
        }
        const S = v;
        let R;
        if (i[2] === Symbol.for("react.memo_cache_sentinel")) {
            R = [
                "change:suspendAppealStatus"
            ];
            i[2] = R;
        } else {
            R = i[2];
        }
        let L;
        if (i[3] !== S?.groupMetadata?.suspendAppealStatus) {
            L = function() {
                return S?.groupMetadata?.suspendAppealStatus;
            };
            i[3] = S?.groupMetadata?.suspendAppealStatus;
            i[4] = L;
        } else {
            L = i[4];
        }
        const k = r("useWAWebEventTargetValue")(S?.groupMetadata, R, L);
        let I;
        let T;
        if (i[5] !== S?.groupMetadata?.participants || i[6] !== k) {
            let $;
            if (i[9] !== S?.groupMetadata?.participants) {
                $ = S?.groupMetadata?.participants.iAmAdmin();
                i[9] = S?.groupMetadata?.participants;
                i[10] = $;
            } else {
                $ = i[10];
            }
            T = m($ === true, k);
            I = o("WAWebSuspendedGroupUtils").getFooterSurface(T);
            i[5] = S?.groupMetadata?.participants;
            i[6] = k;
            i[7] = I;
            i[8] = T;
        } else {
            I = i[7];
            T = i[8];
        }
        const M = I;
        o("WAWebSuspendedGroupUtils").useSuspensionImpression(S, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.FOOTER_IMPRESSION, M);
        if (S != null) {
            let w;
            if (i[11] !== S || i[12] !== M || i[13] !== C) {
                w = function() {
                    if (M != null) {
                        o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                            chat: S,
                            uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DEACTIVATE_COMMUNITY,
                            uiSurface: M
                        });
                    }
                    const Component = o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "deactivate_community",
                        chat: S
                    } : <Component onBack={o("WAWebDrawerManager").closeDrawerRight} chat={S}/>, {
                        transition: "slide-left",
                        uim: C,
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                };
                i[11] = S;
                i[12] = M;
                i[13] = C;
                i[14] = w;
            } else {
                w = i[14];
            }
            const A = w;
            let F;
            if (i[15] !== S || i[16] !== M) {
                F = function() {
                    if (M != null) {
                        o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                            chat: S,
                            uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.LEAVE_COMMUNITY_CLICK,
                            uiSurface: M
                        });
                    }
                    o("WAWebLeaveCommunityModalUtilsLoadable").openLeaveCommunityModal({
                        chat: S
                    });
                };
                i[15] = S;
                i[16] = M;
                i[17] = F;
            } else {
                F = i[17];
            }
            const O = F;
            let B;
            if (i[18] !== A || i[19] !== T) {
                const Component = r("WDSButton.react");
                const Component_1 = o("WAWebFlex.react").FlexRow;
                const Component_2 = o("WAWebButton.react").WAWebButtonSimplified;
                B = T !== "legacy" ? <Component variant="borderless" type="destructive" onPress={A} testid="suspended-community-deactivate-btn" Icon={r("WDSIconIcDangerous.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} label={s._("Deactivate community")}/> : <Component_2 onClick={A} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} testid="suspended-community-deactivate-btn"><Component_1 xstyle={d.deactivate} justify="center" align="center" gap={4}>{u.jsx(r("WDSIconIcDangerous.react"), {
                    directional: true
                })}{s._("Deactivate community")}</Component_1></Component_2>;
                i[18] = A;
                i[19] = T;
                i[20] = B;
            } else {
                B = i[20];
            }
            const W = B;
            let q;
            if (i[21] !== O || i[22] !== f || i[23] !== T) {
                const Component = r("WDSButton.react");
                const Component_1 = o("WAWebButton.react").WAWebButtonSimplified;
                q = T !== "legacy" ? <Component disabled={f} type="destructive" variant="borderless" onPress={O} testid="suspended-community-exit-btn" Icon={r("WDSIconIcLogout.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} label={s._("Exit community")}/> : <Component_1 onClick={O} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} testid="suspended-community-exit-btn">{u.jsx(r("WDSIconIcLogout.react"), {
                    directional: true
                })}{s._("Exit community")}</Component_1>;
                i[21] = O;
                i[22] = f;
                i[23] = T;
                i[24] = q;
            } else {
                q = i[24];
            }
            const U = q;
            const V = h_width <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow;
            let H;
            if (i[25] !== S || i[26] !== W || i[27] !== U) {
                H = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(S) ? W : U;
                i[25] = S;
                i[26] = W;
                i[27] = U;
                i[28] = H;
            } else {
                H = i[28];
            }
            const G = H;
            let z;
            if (i[29] === Symbol.for("react.memo_cache_sentinel")) {
                z = {
                    className: "x126k92a"
                };
                i[29] = z;
            } else {
                z = i[29];
            }
            let j;
            if (i[30] !== e_chat || i[31] !== S || i[32] !== T) {
                const Component = o("WAWebFlex.react").FlexColumn;
                j = <Component><span {...babelHelpers.extends({}, z, {
                    "data-testid": "suspended-community-msg-bar-description",
                    children: <_ chat={e_chat} communityChat={S} viewState={T}/>
                })}/></Component>;
                i[30] = e_chat;
                i[31] = S;
                i[32] = T;
                i[33] = j;
            } else {
                j = i[33];
            }
            const K = T !== "in_review_admin" && G;
            let Q;
            if (i[34] !== S || i[35] !== f || i[36] !== T) {
                const Component = r("WDSButton.react");
                Q = T === "suspended_admin" && <Component variant="borderless" onPress={function() {
                    o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                        chat: S,
                        uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_CLICK,
                        uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
                    });
                    g(true);
                    o("WAWebSuspendedGroupUtils").submitGroupAppeal(S, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER).finally(()=>{
                        g(false);
                    });
                }} disabled={f} loading={f} testid="suspended-community-request-review-btn" Icon={r("WDSIconIcHelp.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} label={s._("Request review")}/>;
                i[34] = S;
                i[35] = f;
                i[36] = T;
                i[37] = Q;
            } else {
                Q = i[37];
            }
            let X;
            if (i[38] !== K || i[39] !== Q) {
                const Component = o("WAWebFlex.react").FlexRow;
                X = <Component>{K}{Q}</Component>;
                i[38] = K;
                i[39] = Q;
                i[40] = X;
            } else {
                X = i[40];
            }
            let Y;
            if (i[41] !== V || i[42] !== j || i[43] !== X) {
                const Component = o("WAWebFlex.react").FlexColumn;
                Y = <Component xstyle={d.suspendedMsgBar}><V alignSelf="stretch" align="center" justify="all" testid="suspended-msg-bar">{j}{X}</V></Component>;
                i[41] = V;
                i[42] = j;
                i[43] = X;
                i[44] = Y;
            } else {
                Y = i[44];
            }
            return Y;
        }
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(9);
        const { chat, communityChat, viewState } = e;
        if (viewState === "legacy") {
            let l;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = o("WAWebExternalLink.react").ExternalLink;
                l = s._("This community is no longer available. {link to learn more}", [
                    s._param("link to learn more", <Component href={o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl()} testid="learn-more-link" data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE}>{s._("Learn more")}</Component>)
                ]);
                t[0] = l;
            } else {
                l = t[0];
            }
            return l;
        }
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("See details");
            t[1] = c;
        } else {
            c = t[1];
        }
        const d = c;
        if (viewState === "in_review_admin") {
            let m;
            if (t[2] !== communityChat) {
                const Component = r("WAWebClickableLink.react");
                const p = <Component onClick={function() {
                    o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                        chat: communityChat,
                        uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
                        uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_FOOTER
                    });
                    o("WAWebSuspendedGroupUtils").openGroupAppealInReviewModal(communityChat);
                }} data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} tabIndex={0} testid="see-details-link">{d}</Component>;
                m = s._("This community is suspended. A community admin has requested a review. {link to see details}", [
                    s._param("link to see details", p)
                ]);
                t[2] = communityChat;
                t[3] = m;
            } else {
                m = t[3];
            }
            return m;
        }
        if (viewState === "rejected_admin") {
            let _;
            if (t[4] !== communityChat) {
                const Component = r("WAWebClickableLink.react");
                const f = <Component onClick={function() {
                    o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                        chat: communityChat,
                        uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
                        uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_FOOTER
                    });
                    o("WAWebSuspendedGroupUtils").openGroupAppealRejectedModal(communityChat);
                }} data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} tabIndex={0} testid="see-details-link">{d}</Component>;
                _ = s._("This community is suspended. Requesting a review is not available. {link to see details}", [
                    s._param("link to see details", f)
                ]);
                t[4] = communityChat;
                t[5] = _;
            } else {
                _ = t[5];
            }
            return _;
        }
        let g;
        if (t[6] !== chat || t[7] !== communityChat) {
            const Component = r("WAWebClickableLink.react");
            const h = <Component onClick={function() {
                o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                    chat: communityChat,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
                });
                o("WAWebSuspendedCommunityUtils").openSuspendedCommunityRedesignModal(chat);
            }} data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} tabIndex={0} testid="see-details-link">{d}</Component>;
            g = s._("This community is suspended. {link to see details}", [
                s._param("link to see details", h)
            ]);
            t[6] = chat;
            t[7] = communityChat;
            t[8] = g;
        } else {
            g = t[8];
        }
        return g;
    }
    l.default = p;
}, 226);