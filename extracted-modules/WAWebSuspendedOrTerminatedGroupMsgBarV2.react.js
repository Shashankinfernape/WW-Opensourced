__d("WAWebSuspendedOrTerminatedGroupMsgBarV2.react", [
    "fbt",
    "WAWebButton.react",
    "WAWebChatGroupUtils",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebSuspendedGroupDeleteWamEvent",
    "WAWebSuspendedGroupUtils",
    "WAWebTabOrder",
    "WAWebWamEnumDeleteSuspendedGroupBtn",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "WDSIconIcHelp.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        suspendedMsgBar: {
            width: "xh8yej3",
            $$css: true
        }
    };
    function m(e, t) {
        if (o("WAWebChatGroupUtils").isTerminatedGroup(e) || !o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled()) {
            return "legacy";
        }
        const r = e.groupMetadata?.participants.iAmAdmin() === true;
        if (r) {
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
    function p(e) {
        const n = o("react-compiler-runtime").c(29);
        const e_chat = e.chat;
        const i = e_useState(false);
        const l = i[0];
        const p = i[1];
        const f = r("useWAWebWindowSize")();
        const f_width = f.width;
        let h;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                "change:suspendAppealStatus"
            ];
            n[0] = h;
        } else {
            h = n[0];
        }
        let y;
        if (n[1] !== e_chat.groupMetadata?.suspendAppealStatus) {
            y = function() {
                return e_chat.groupMetadata?.suspendAppealStatus;
            };
            n[1] = e_chat.groupMetadata?.suspendAppealStatus;
            n[2] = y;
        } else {
            y = n[2];
        }
        const b = r("useWAWebEventTargetValue")(e_chat.groupMetadata, h, y);
        let v;
        let S;
        if (n[3] !== e_chat || n[4] !== b) {
            S = m(e_chat, b);
            v = o("WAWebSuspendedGroupUtils").getFooterSurface(S);
            n[3] = e_chat;
            n[4] = b;
            n[5] = v;
            n[6] = S;
        } else {
            v = n[5];
            S = n[6];
        }
        const R = v;
        o("WAWebSuspendedGroupUtils").useSuspensionImpression(e_chat, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.FOOTER_IMPRESSION, R);
        let L;
        if (n[7] !== e_chat || n[8] !== R) {
            L = function() {
                new (o("WAWebSuspendedGroupDeleteWamEvent")).SuspendedGroupDeleteWamEvent({
                    deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn").DELETE_SUSPENDED_GROUP_BTN.BLOCKED_COMPOSER_BTN
                }).commit();
                if (R != null) {
                    o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                        chat: e_chat,
                        uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
                        uiSurface: R
                    });
                }
                o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(e_chat);
            };
            n[7] = e_chat;
            n[8] = R;
            n[9] = L;
        } else {
            L = n[9];
        }
        const E = L;
        let k;
        if (n[10] !== E || n[11] !== l || n[12] !== S) {
            const Component = r("WDSButton.react");
            const Component_1 = o("WAWebButton.react").WAWebButtonSimplified;
            k = S !== "legacy" ? <Component disabled={l} variant="borderless" type="destructive" onPress={E} testid="suspended-group-exit-delete-group-btn" Icon={r("WDSIconIcDelete.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} label={s._("Delete group")}/> : <Component_1 onClick={E} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} testid="suspended-group-exit-delete-group-btn">{u.jsx(r("WDSIconIcDelete.react"), {
                directional: true
            })}{s._("Delete group for me")}</Component_1>;
            n[10] = E;
            n[11] = l;
            n[12] = S;
            n[13] = k;
        } else {
            k = n[13];
        }
        const I = k;
        const T = f_width <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow;
        let D;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "x126k92a"
            };
            n[14] = D;
        } else {
            D = n[14];
        }
        let x;
        if (n[15] !== e_chat || n[16] !== S) {
            const Component = o("WAWebFlex.react").FlexColumn;
            x = <Component><span {...babelHelpers.extends({}, D, {
                "data-testid": "suspended-group-status-text",
                children: <_ viewState={S} chat={e_chat}/>
            })}/></Component>;
            n[15] = e_chat;
            n[16] = S;
            n[17] = x;
        } else {
            x = n[17];
        }
        const $ = S !== "in_review_admin" && I;
        let P;
        if (n[18] !== e_chat || n[19] !== l || n[20] !== S) {
            const Component = r("WDSButton.react");
            P = S === "suspended_admin" && <Component variant="borderless" onPress={function() {
                o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                    chat: e_chat,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_CLICK,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
                });
                p(true);
                o("WAWebSuspendedGroupUtils").submitGroupAppeal(e_chat, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER).finally(()=>{
                    p(false);
                });
            }} disabled={l} loading={l} testid="suspended-group-request-review-btn" Icon={r("WDSIconIcHelp.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} label={s._("Request review")}/>;
            n[18] = e_chat;
            n[19] = l;
            n[20] = S;
            n[21] = P;
        } else {
            P = n[21];
        }
        let N;
        if (n[22] !== $ || n[23] !== P) {
            const Component = o("WAWebFlex.react").FlexRow;
            N = <Component>{$}{P}</Component>;
            n[22] = $;
            n[23] = P;
            n[24] = N;
        } else {
            N = n[24];
        }
        let M;
        if (n[25] !== T || n[26] !== N || n[27] !== x) {
            const Component = o("WAWebFlex.react").FlexColumn;
            M = <Component xstyle={d.suspendedMsgBar}><T alignSelf="stretch" align="center" justify="all" testid="suspended-msg-bar">{x}{N}</T></Component>;
            n[25] = T;
            n[26] = N;
            n[27] = x;
            n[28] = M;
        } else {
            M = n[28];
        }
        return M;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { chat, viewState } = e;
        if (viewState === "legacy") {
            let i;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = o("WAWebExternalLink.react").ExternalLink;
                i = s._("This group is no longer available. {link to learn more}", [
                    s._param("link to learn more", <Component href={o("WAWebSuspendedGroupUtils").getSuspendedFaqUrl()} testid="learn-more-link" data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE}>{s._("Learn more")}</Component>)
                ]);
                t[0] = i;
            } else {
                i = t[0];
            }
            return i;
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("See details");
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = l;
        if (viewState === "in_review_admin") {
            let d;
            if (t[2] !== chat) {
                const Component = r("WAWebClickableLink.react");
                const m = <Component onClick={function() {
                    o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                        chat,
                        uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
                        uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_FOOTER
                    });
                    o("WAWebSuspendedGroupUtils").openGroupAppealInReviewModal(chat);
                }} data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} tabIndex={0} testid="see-details-link">{c}</Component>;
                d = s._("This group is suspended. A group admin has requested a review. {link to see details}", [
                    s._param("link to see details", m)
                ]);
                t[2] = chat;
                t[3] = d;
            } else {
                d = t[3];
            }
            return d;
        }
        if (viewState === "rejected_admin") {
            let p;
            if (t[4] !== chat) {
                const Component = r("WAWebClickableLink.react");
                const _ = <Component onClick={function() {
                    o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                        chat,
                        uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
                        uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_FOOTER
                    });
                    o("WAWebSuspendedGroupUtils").openGroupAppealRejectedModal(chat);
                }} data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} tabIndex={0} testid="see-details-link">{c}</Component>;
                p = s._("This group is suspended. Requesting a review is not available. {link to see details}", [
                    s._param("link to see details", _)
                ]);
                t[4] = chat;
                t[5] = p;
            } else {
                p = t[5];
            }
            return p;
        }
        let f;
        if (t[6] !== chat) {
            const Component = r("WAWebClickableLink.react");
            const g = <Component onClick={function() {
                o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                    chat,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
                });
                o("WAWebSuspendedGroupUtils").openSuspendedGroupRedesignModal(chat);
            }} data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} tabIndex={0} testid="see-details-link">{c}</Component>;
            f = s._("This group is suspended. {link to see details}", [
                s._param("link to see details", g)
            ]);
            t[6] = chat;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    l.default = p;
}, 226);