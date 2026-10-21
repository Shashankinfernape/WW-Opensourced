__d("WAWebReactionDetailsListItem.react", [
    "fbt",
    "WALogger",
    "WAWebBusinessProfileTypes",
    "WAWebCellFrame.react",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatParticipantColor",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentProfileRouting",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMsgGetters",
    "WAWebOpenGroupAgentProfile.react",
    "WAWebOrgNameWithIcon.react",
    "WAWebReactionCellDetailThumb.react",
    "WAWebReactionEmoji.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionMsgAction",
    "WAWebUnstyledButton.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatValues",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebOrgMemberIdentity",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useImperativeHandle, useRef, useState } = m;
    const g = {
        tilded: {
            "::before_content": "xxayilr",
            $$css: true
        },
        reactionAndMediaThumbContainer: {
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            marginInlineEnd: "xf6vk7d",
            $$css: true
        }
    };
    function h(e) {
        const t = o("react-compiler-runtime").c(96);
        const { isAggregated, onCloseDetailsPane, onItemBlur, onItemFocus, parentMsg, reaction, ref } = e;
        const b = isAggregated === undefined ? false : isAggregated;
        const vRef = useRef(null);
        const S = useState(false);
        const R = S[0];
        const L = S[1];
        let E;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                r("WAWebFocusTracer").focus(vRef.current);
                L(true);
            };
            t[0] = E;
        } else {
            E = t[0];
        }
        const focus = E;
        const { reactionText, senderObj } = reaction;
        const D = o("WAWebFrontendMsgGetters").getChat(parentMsg);
        let x;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            x = [
                o("WAWebFrontendChatGetters").getGroupMetadata,
                o("WAWebChatGetters").getIsGroup
            ];
            t[1] = x;
        } else {
            x = t[1];
        }
        o("useWAWebChatValues").useChatValues(D.id, x);
        const $ = !o("WAWebReactionsUtils").isReactionsEnabledInCAG(D);
        let P;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            P = function() {
                return {
                    focus
                };
            };
            t[2] = P;
        } else {
            P = t[2];
        }
        useImperativeHandle(ref, P);
        let N;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            N = [
                o("WAWebContactGetters").getId,
                o("WAWebFrontendContactGetters").getPhoneNumber
            ];
            t[3] = N;
        } else {
            N = t[3];
        }
        const M = o("useWAWebContactValues").useContactValues(senderObj.id, N);
        const w = M[0];
        const A = M[1];
        let F = senderObj;
        if (w.isLid() && A) {
            let O;
            if (t[4] !== A) {
                O = o("WAWebContactCollection").ContactCollection.get(A);
                t[4] = A;
                t[5] = O;
            } else {
                O = t[5];
            }
            const B = O;
            if (B) {
                F = B;
            }
        }
        let W;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            let q;
            W = [
                (q = o("WAWebContactGetters")).getId,
                q.getIsMe,
                q.getName,
                o("WAWebFrontendContactGetters").getFormattedName,
                q.getNotifyName,
                o("WAWebFrontendContactGetters").getIsNonVerified,
                q.getIsBusiness,
                q.getVerifiedLevel
            ];
            t[6] = W;
        } else {
            W = t[6];
        }
        const U = o("useWAWebContactValues").useContactValues(F.id, W);
        const V = U[0];
        const H = U[1];
        const G = U[2];
        const z = U[3];
        const j = U[4];
        const K = U[5];
        const Q = U[6];
        const X = U[7];
        const Y = r("useWAWebOrgMemberIdentity")(senderObj, senderObj.id);
        const { displayName, membership } = Y;
        let ee;
        if (t[7] !== G || t[8] !== displayName) {
            ee = r("isStringNullOrEmpty")(G) ? displayName : null;
            t[7] = G;
            t[8] = displayName;
            t[9] = ee;
        } else {
            ee = t[9];
        }
        const te = ee;
        const authorColor = o("WAWebChatParticipantColor").getAssignedColor(D, F.id);
        const re = r("useWAWebContactFormattedUsernameOrPhoneByChat")(D, senderObj);
        const re_formattedUsernameOrPhone = re.formattedUsernameOrPhone;
        const ae = r("useWAWebUIM")();
        let ie;
        if (t[10] !== H || t[11] !== parentMsg || t[12] !== ae) {
            ie = function(t) {
                t.preventDefault();
                t.stopPropagation();
                if (H) {
                    o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionUnselect();
                    o("WAWebSendReactionMsgAction").sendReactionToMsg(parentMsg, o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT).catch((e)=>{
                        if (ae) {
                            ae.requestDismiss();
                        }
                    });
                }
            };
            t[10] = H;
            t[11] = parentMsg;
            t[12] = ae;
            t[13] = ie;
        } else {
            ie = t[13];
        }
        const le = ie;
        let se;
        if (t[14] !== D) {
            se = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(D);
            t[14] = D;
            t[15] = se;
        } else {
            se = t[15];
        }
        const ue = se;
        const ce = re_formattedUsernameOrPhone != null && !K;
        let de;
        if (o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(F) && (ue || ce)) {
            de = re_formattedUsernameOrPhone;
        } else {
            de = j != null ? `~${j}` : null;
        }
        let me = null;
        if (te == null && !G && !r("isStringNullOrEmpty")(j)) {
            let pe;
            if (t[16] !== ue) {
                pe = (u || (u = r("stylex")))(!ue && !g.tilded);
                t[16] = ue;
                t[17] = pe;
            } else {
                pe = t[17];
            }
            let _e;
            if (t[18] !== de || t[19] !== pe) {
                const Component = o("WAWebEmojiText.react").EmojiText;
                _e = <Component className={pe} direction="auto" text={de}/>;
                t[18] = de;
                t[19] = pe;
                t[20] = _e;
            } else {
                _e = t[20];
            }
            me = _e;
        }
        let fe;
        if (t[21] !== ue || t[22] !== z || t[23] !== Q || t[24] !== j || t[25] !== F || t[26] !== ce || t[27] !== X) {
            fe = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(F) && (ue || ce && (!Q || X === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)) ? o("WAWebChatContactUtils").getAccessibleNotifyName(j).toString() : z;
            t[21] = ue;
            t[22] = z;
            t[23] = Q;
            t[24] = j;
            t[25] = F;
            t[26] = ce;
            t[27] = X;
            t[28] = fe;
        } else {
            fe = t[28];
        }
        let ge = fe;
        if (te != null) {
            ge = te;
        }
        if (me != null && de != null) {
            ge = `${ge}, ${de}`;
        }
        let he;
        if (t[29] !== ge || t[30] !== H || t[31] !== reactionText) {
            he = o("WAWebReactionsUtils").reactionBubbleAriaLabelOneReaction(ge, reactionText);
            if (H) {
                const ye = he.toString();
                let Ce;
                if (t[33] === Symbol.for("react.memo_cache_sentinel")) {
                    Ce = s._("Click to remove").toString();
                    t[33] = Ce;
                } else {
                    Ce = t[33];
                }
                he = `${ye} ${Ce}`;
            }
            t[29] = ge;
            t[30] = H;
            t[31] = reactionText;
            t[32] = he;
        } else {
            he = t[32];
        }
        let be;
        if (t[34] !== b || t[35] !== parentMsg) {
            be = b && o("WAWebMsgGetters").getIsMedia(parentMsg);
            t[34] = b;
            t[35] = parentMsg;
            t[36] = be;
        } else {
            be = t[36];
        }
        const ve = be;
        let Se;
        if (t[37] !== onCloseDetailsPane || t[38] !== parentMsg || t[39] !== reactionText || t[40] !== ve) {
            const Component = o("WAWebReactionCellDetailThumb.react").ReactionCellDetailThumb;
            const Component_1 = r("WAWebFlexItem.react");
            Se = ve ? <Component_1 xstyle={g.reactionAndMediaThumbContainer} testid="reaction-and-media-thumb"><Component msg={parentMsg} reactionText={reactionText} onCloseDetailsPane={onCloseDetailsPane}/></Component_1> : null;
            t[37] = onCloseDetailsPane;
            t[38] = parentMsg;
            t[39] = reactionText;
            t[40] = ve;
            t[41] = Se;
        } else {
            Se = t[41];
        }
        const Re = Se;
        let Le;
        if (t[42] !== D || t[43] !== $ || t[44] !== V || t[45] !== H || t[46] !== onCloseDetailsPane || t[47] !== parentMsg || t[48] !== senderObj) {
            Le = $ ? function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (!H) {
                    if (o("WAWebChatGetters").getIsGroup(D)) {
                        const t = o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(senderObj.id, D);
                        if (o("WAWebOpenGroupAgentProfile.react").openGroupAgentProfile(t, senderObj, D, "reactionDetailsPane")) {
                            onCloseDetailsPane();
                            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.selectProfile();
                            return;
                        }
                    }
                    onCloseDetailsPane();
                    let n = V;
                    if (parentMsg.from.isGroup()) {
                        n = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(V, "info_panel");
                    }
                    if (n != null) {
                        o("WAWebFindChatAction").findOrCreateLatestChat(n, "reactionDetailsPane").then(C).catch(y);
                    }
                }
            } : null;
            t[42] = D;
            t[43] = $;
            t[44] = V;
            t[45] = H;
            t[46] = onCloseDetailsPane;
            t[47] = parentMsg;
            t[48] = senderObj;
            t[49] = Le;
        } else {
            Le = t[49];
        }
        const Ee = Le;
        let ke;
        if (te != null) {
            ke = te;
        } else if (o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(F) && (ue || ce && (!Q || X === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH))) {
            let Ie;
            if (t[50] !== j) {
                Ie = o("WAWebChatContactUtils").getFormattedNotifyName(j);
                t[50] = j;
                t[51] = Ie;
            } else {
                Ie = t[51];
            }
            ke = Ie;
        } else {
            ke = z;
        }
        let Te;
        if (t[52] !== $ || t[53] !== z || t[54] !== Ee || t[55] !== H || t[56] !== membership || t[57] !== ke) {
            const Component = r("WAWebOrgNameWithIcon.react");
            const Component_1 = r("WAWebUnstyledButton.react");
            Te = H ? z : <Component_1 disabled={!$} onClick={Ee} title={s._("Contact info")} aria-label={s._("Click to open profile details")}><Component membership={membership}>{d.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: ke
            })}</Component></Component_1>;
            t[52] = $;
            t[53] = z;
            t[54] = Ee;
            t[55] = H;
            t[56] = membership;
            t[57] = ke;
            t[58] = Te;
        } else {
            Te = t[58];
        }
        const De = Te;
        let xe;
        if (t[59] === Symbol.for("react.memo_cache_sentinel")) {
            xe = s._("Click to remove");
            t[59] = xe;
        } else {
            xe = t[59];
        }
        let $e;
        if (t[60] !== le) {
            const Component = r("WAWebUnstyledButton.react");
            $e = <Component onClick={le}>{xe}</Component>;
            t[60] = le;
            t[61] = $e;
        } else {
            $e = t[61];
        }
        const Pe = $e;
        let Ne;
        if (t[62] !== onItemBlur) {
            Ne = function() {
                L(false);
                onItemBlur?.();
            };
            t[62] = onItemBlur;
            t[63] = Ne;
        } else {
            Ne = t[63];
        }
        const Me = Ne;
        let we;
        if (t[64] !== H || t[65] !== onItemFocus) {
            we = function() {
                if (H) {
                    L(true);
                }
                onItemFocus?.();
            };
            t[64] = H;
            t[65] = onItemFocus;
            t[66] = we;
        } else {
            we = t[66];
        }
        const Ae = we;
        let Fe;
        if (t[67] !== le) {
            Fe = {
                enter: le,
                space: le
            };
            t[67] = le;
            t[68] = Fe;
        } else {
            Fe = t[68];
        }
        const Oe = Fe;
        const Be = H ? "button" : "listitem";
        let We;
        if (t[69] !== Oe || t[70] !== H) {
            We = H ? Oe : {};
            t[69] = Oe;
            t[70] = H;
            t[71] = We;
        } else {
            We = t[71];
        }
        const qe = H ? "reactions-details-cell-me" : "reactions-details-cell-not-me";
        let Ue;
        if (t[72] !== authorColor || t[73] !== Ee || t[74] !== V) {
            const Component = o("WAWebDetailImage.react").DetailImage;
            Ue = <Component onClick={Ee} id={V} size={40} loadAnimation={false} theme="reaction_details" authorColor={authorColor}/>;
            t[72] = authorColor;
            t[73] = Ee;
            t[74] = V;
            t[75] = Ue;
        } else {
            Ue = t[75];
        }
        const Ve = H ? Pe : me;
        let detail;
        if (t[76] !== Re || t[77] !== reactionText || t[78] !== ve) {
            detail = ve ? Re : d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                scale: "list",
                size: "large",
                reaction: reactionText
            });
            t[76] = Re;
            t[77] = reactionText;
            t[78] = ve;
            t[79] = detail;
        } else {
            detail = t[79];
        }
        const Ge = H ? "reaction-by-me" : "reaction-by-others";
        let ze;
        if (t[80] !== le || t[81] !== R || t[82] !== De || t[83] !== qe || t[84] !== Ue || t[85] !== Ve || t[86] !== detail || t[87] !== Ge) {
            const Component = r("WAWebCellFrame.react");
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            ze = <Component_2 align="center"><Component_1 grow={2}><Component testid={qe} image={Ue} primary={De} onClick={le} secondary={Ve} detail={detail} theme={Ge} active={R}/></Component_1></Component_2>;
            t[80] = le;
            t[81] = R;
            t[82] = De;
            t[83] = qe;
            t[84] = Ue;
            t[85] = Ve;
            t[86] = detail;
            t[87] = Ge;
            t[88] = ze;
        } else {
            ze = t[88];
        }
        let je;
        if (t[89] !== Me || t[90] !== Ae || t[91] !== he || t[92] !== Be || t[93] !== We || t[94] !== ze) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            const Component_1 = r("WAWebKeyboardRotateFocusArrows.react");
            je = <Component_1><Component role={Be} aria-label={he} handlers={We} ref={vRef} onBlur={Me} onFocus={Ae}>{ze}</Component></Component_1>;
            t[89] = Me;
            t[90] = Ae;
            t[91] = he;
            t[92] = Be;
            t[93] = We;
            t[94] = ze;
            t[95] = je;
        } else {
            je = t[95];
        }
        return je;
    }
    function y() {
        return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reactions details] failed to find or create latest chat"
        ]))).sendLogs("reactions-failed-to-find-or-create-latest-chat");
    }
    function C({ chat }) {
        o("WAWebCmd").Cmd.chatInfoDrawer(chat);
        o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.selectProfile();
    }
    l.default = h;
}, 226);