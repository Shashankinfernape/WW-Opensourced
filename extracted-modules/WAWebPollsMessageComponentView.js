__d("WAWebPollsMessageComponentView", [
    "fbt",
    "WALogger",
    "WAWebBizSuspiciousLabel.react",
    "WAWebCastToPollCreationMsg",
    "WAWebClock",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNoop",
    "WAWebPollCreationUtils",
    "WAWebPollMessageHeader",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsDetailsFlow",
    "WAWebPollsExpandedPhotoDrawer",
    "WAWebPollsOptions",
    "WAWebPollsUseResults",
    "WDSIconIcWarning.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsChatAcp2Restricted",
    "useWAWebMsgValues",
    "useWAWebPollEndTime",
    "useWAWebQuizOptionOrderExposure",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "msgKey"
    ];
    const c = [
        "msgKey"
    ];
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useCallback, useMemo } = _;
    const h = {
        paddingInlineStart14: {
            paddingInlineStart: "x1onr9mi",
            $$css: true
        }
    };
    const y = 500;
    const C = {
        invalidPollWarning: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            $$css: true
        },
        invalidPollWarningBorderReceiver: {
            borderTopColor: "xzd3fmn",
            borderInlineEndColor: "x47save",
            borderBottomColor: "x1ie97uy",
            borderInlineStartColor: "xhfwe17",
            $$css: true
        },
        invalidPollWarningBorderSender: {
            borderTopColor: "x89hfnh",
            borderInlineEndColor: "xfhc3ru",
            borderBottomColor: "x1vv3rcg",
            borderInlineStartColor: "x1yriv23",
            $$css: true
        },
        spanText: {
            fontSize: "x1pg5gke",
            lineHeight: "x1d3mw78",
            $$css: true
        },
        warningIcon: {
            color: "x1kt8ij1",
            $$css: true
        }
    };
    function b(e) {
        const t = o("react-compiler-runtime").c(42);
        let n;
        let a;
        if (t[0] !== e) {
            n = e.msgKey;
            a = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        const i = a;
        const { associatedMessages, optionsToResults } = i;
        let c;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            let d;
            c = [
                (d = o("WAWebMsgGetters")).getPollInvalidated,
                d.getPollSelectableOptionsCount,
                d.getIsNewsletterMsg,
                d.getPollHideVoterNames,
                d.getPollOptions,
                d.getPollType,
                d.getIsSentByMe
            ];
            t[3] = c;
        } else {
            c = t[3];
        }
        const m = o("useWAWebMsgValues").useMsgValues(n, r("WAWebCastToPollCreationMsg"), c);
        const isPollInvalid = m[0];
        const f = m[1];
        const g = m[2];
        const h = m[3];
        const y = m[4];
        const C = m[5];
        const b = m[6];
        const v = o("useWAWebPollEndTime").useWAWebPollEndTime(n);
        const { isPollEnded, pollEndTime } = v;
        let E;
        if (t[4] !== g || t[5] !== n) {
            E = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(n, g);
            t[4] = g;
            t[5] = n;
            t[6] = E;
        } else {
            E = t[6];
        }
        const k = E;
        const I = r("useWAWebIsChatAcp2Restricted")(k);
        const readonly = isPollEnded || I;
        const x = r("useWAWebUIM")();
        const $ = r("useWAWebQuizOptionOrderExposure")(n);
        let P;
        if (t[7] !== optionsToResults) {
            P = o("WAWebPollOptionsRenderUtils").getVotedForOptions(optionsToResults);
            t[7] = optionsToResults;
            t[8] = P;
        } else {
            P = t[8];
        }
        const N = P;
        let M;
        if (t[9] !== k || t[10] !== g) {
            M = !g || k != null && o("WAWebNewsletterExtendedGatingUtils").isNewsletterPollsVotersEnabledForChat(k);
            t[9] = k;
            t[10] = g;
            t[11] = M;
        } else {
            M = t[11];
        }
        const showViewVotesButton = M;
        let A;
        let onViewVotesAction;
        let O;
        if (t[12] !== associatedMessages || t[13] !== n || t[14] !== y?.length || t[15] !== f || t[16] !== x || t[17] !== N) {
            A = function(t) {
                o("WAWebPollOptionsRenderUtils").toggleOption({
                    optionLocalId: t,
                    votedForOptions: N,
                    selectableOptionsCount: O,
                    msgKey: n
                });
            };
            let W;
            if (t[21] !== associatedMessages || t[22] !== n || t[23] !== x) {
                W = function() {
                    const e = D(n);
                    if (e != null) {
                        o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                        self.setTimeout(function() {
                            o("WAWebDrawerManager").DrawerManager.openDrawerRight(p.jsx(r("WAWebPollsDetailsFlow"), {
                                msg: e,
                                associatedMessages
                            }, n.toString()), {
                                transition: "slide-left",
                                uim: x,
                                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                                noFocus: true
                            });
                        }, 150);
                    }
                };
                t[21] = associatedMessages;
                t[22] = n;
                t[23] = x;
                t[24] = W;
            } else {
                W = t[24];
            }
            onViewVotesAction = W;
            O = f == null || f === 0 ? y?.length ?? 0 : f;
            t[12] = associatedMessages;
            t[13] = n;
            t[14] = y?.length;
            t[15] = f;
            t[16] = x;
            t[17] = N;
            t[18] = A;
            t[19] = onViewVotesAction;
            t[20] = O;
        } else {
            A = t[18];
            onViewVotesAction = t[19];
            O = t[20];
        }
        const q = readonly ? r("WAWebNoop") : A;
        const pollHideVoterNames = h === true;
        const V = C !== o("WAWebPollCreationUtils").PollType.QUIZ || !b ? f : null;
        let H;
        if (t[25] !== readonly || t[26] !== isPollEnded || t[27] !== n || t[28] !== onViewVotesAction || t[29] !== pollEndTime || t[30] !== isPollInvalid || t[31] !== a || t[32] !== O || t[33] !== showViewVotesButton || t[34] !== q || t[35] !== pollHideVoterNames || t[36] !== V || t[37] !== N) {
            H = <S {...babelHelpers.extends({}, a, {
                msgKey: n,
                onOptionToggle: q,
                onViewVotesAction,
                isPollInvalid,
                isPollEnded,
                pollEndTime,
                pollHideVoterNames,
                pollSelectableOptionsCount: V,
                votedForOptions: N,
                showViewVotesButton,
                selectableOptionsCount: O,
                testid: "poll-bubble",
                readonly
            })}/>;
            t[25] = readonly;
            t[26] = isPollEnded;
            t[27] = n;
            t[28] = onViewVotesAction;
            t[29] = pollEndTime;
            t[30] = isPollInvalid;
            t[31] = a;
            t[32] = O;
            t[33] = showViewVotesButton;
            t[34] = q;
            t[35] = pollHideVoterNames;
            t[36] = V;
            t[37] = N;
            t[38] = H;
        } else {
            H = t[38];
        }
        const G = H;
        let z;
        if (t[39] !== G || t[40] !== $) {
            z = $ == null ? G : <div ref={$}>{G}</div>;
            t[39] = G;
            t[40] = $;
            t[41] = z;
        } else {
            z = t[41];
        }
        return z;
    }
    function VComponent(e) {
        const n = o("react-compiler-runtime").c(9);
        let a;
        let i;
        if (n[0] !== e) {
            a = e.msgKey;
            i = babelHelpers.objectWithoutPropertiesLoose(e, c);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getPollVotesSnapshot
            ];
            n[3] = l;
        } else {
            l = n[3];
        }
        const s = o("useWAWebMsgValues").useMsgValues(a, l);
        const u = s[0];
        let d;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = new Set;
            n[4] = d;
        } else {
            d = n[4];
        }
        const m = u?.pollVotes.length ?? 0;
        let _;
        if (n[5] !== a || n[6] !== i || n[7] !== m) {
            _ = <S {...babelHelpers.extends({}, i, {
                msgKey: a,
                onOptionToggle: r("WAWebNoop"),
                onViewVotesAction: r("WAWebNoop"),
                isPollInvalid: false,
                isPollEnded: false,
                pollEndTime: null,
                pollHideVoterNames: false,
                pollSelectableOptionsCount: null,
                votedForOptions: d,
                showViewVotesButton: false,
                selectableOptionsCount: m,
                testid: "poll-snapshot-bubble",
                readonly: true
            })}/>;
            n[5] = a;
            n[6] = i;
            n[7] = m;
            n[8] = _;
        } else {
            _ = n[8];
        }
        return _;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(97);
        const { associatedMessages, displayAuthor, displayType, isPollEnded, isPollInvalid, msgKey, onOptionToggle, onViewVotesAction, optionsToResults, pollEndTime, pollHideVoterNames, pollSelectableOptionsCount, quotedMsg, readonly, selectableOptionsCount, showViewVotesButton, testid, trusted, votedForOptions } = e;
        let P;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let N;
            P = [
                (N = o("WAWebMsgGetters")).getPollName,
                N.getT,
                N.getIsSentByMe,
                N.getForwardedNewsletterMessageInfo,
                N.getPollCorrectOptionIndex,
                N.getPollType,
                N.getCtwaContext,
                N.getIsDynamicReplyButtonsMsg,
                o("WAWebFrontendMsgGetters").getSenderObj,
                N.getSender,
                N.getIsPSA,
                N.getNotifyName,
                N.getIsNewsletterMsg
            ];
            t[0] = P;
        } else {
            P = t[0];
        }
        const M = o("useWAWebMsgValues").useMsgValues(msgKey, P);
        const w = M[0];
        const A = M[1];
        const F = M[2];
        const O = M[3];
        const correctOptionIndex = M[4];
        const W = M[5];
        const q = M[6];
        const U = M[7];
        const V = M[8];
        const H = M[9];
        const isPSA = M[10];
        const z = M[11];
        const j = M[12];
        let K;
        if (t[1] !== W) {
            K = W === o("WAWebPollCreationUtils").PollType.QUIZ ? s._("View responses") : s._("View votes");
            t[1] = W;
            t[2] = K;
        } else {
            K = t[2];
        }
        const Q = K;
        let X;
        if (t[3] !== optionsToResults) {
            X = optionsToResults.values().every(R);
            t[3] = optionsToResults;
            t[4] = X;
        } else {
            X = t[4];
        }
        const Y = X;
        let J;
        if (t[5] !== w) {
            J = w.slice(0, y);
            t[5] = w;
            t[6] = J;
        } else {
            J = t[6];
        }
        const Z = J;
        let ee;
        if (t[7] !== optionsToResults) {
            ee = o("WAWebPollsUseResults").getOptionWithCount(optionsToResults);
            t[7] = optionsToResults;
            t[8] = ee;
        } else {
            ee = t[8];
        }
        const commaSeparatedOptionsAndResults = ee;
        let ne;
        if (t[9] !== associatedMessages || t[10] !== correctOptionIndex || t[11] !== isPollEnded || t[12] !== isPollInvalid || t[13] !== onViewVotesAction || t[14] !== readonly || t[15] !== trusted) {
            ne = {
                trusted,
                isPollEnded,
                isPollInvalid,
                onDetailImageClick: onViewVotesAction,
                readonly,
                associatedMessages,
                correctOptionIndex
            };
            t[9] = associatedMessages;
            t[10] = correctOptionIndex;
            t[11] = isPollEnded;
            t[12] = isPollInvalid;
            t[13] = onViewVotesAction;
            t[14] = readonly;
            t[15] = trusted;
            t[16] = ne;
        } else {
            ne = t[16];
        }
        const re = ne;
        let oe;
        if (t[17] !== F || t[18] !== msgKey || t[19] !== Z || t[20] !== re || t[21] !== pollEndTime || t[22] !== pollHideVoterNames || t[23] !== selectableOptionsCount) {
            oe = function() {
                const n = D(msgKey);
                if (n != null) {
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(p.jsx(r("WAWebPollsExpandedPhotoDrawer"), babelHelpers.extends({
                        msgKey,
                        chatName: o("WAWebFrontendMsgGetters").getChat(n.unsafe())?.name ?? "",
                        isSentByMe: F,
                        selectableOptionsCount,
                        pollName: Z,
                        pollEndTime,
                        pollHideVoterNames
                    }, re)), {
                        transition: "slide-left"
                    });
                }
            };
            t[17] = F;
            t[18] = msgKey;
            t[19] = Z;
            t[20] = re;
            t[21] = pollEndTime;
            t[22] = pollHideVoterNames;
            t[23] = selectableOptionsCount;
            t[24] = oe;
        } else {
            oe = t[24];
        }
        const onPhotoThumbClick = oe;
        let ie;
        if (t[25] !== j || t[26] !== isPSA || t[27] !== isPollEnded || t[28] !== F || t[29] !== msgKey || t[30] !== Z || t[31] !== z || t[32] !== commaSeparatedOptionsAndResults || t[33] !== pollEndTime || t[34] !== pollHideVoterNames || t[35] !== H || t[36] !== V || t[37] !== A) {
            ie = T({
                authorDisplayName: o("WAWebMsgModelUtils").getMsgDisplayNameFor({
                    chat: o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, j),
                    isPSA,
                    notifyName: z,
                    sender: H,
                    senderObj: V
                }),
                commaSeparatedOptionsAndResults,
                isPollEnded,
                isSentByMe: F,
                pollEndTime,
                pollHideVoterNames,
                pollName: Z,
                t: A
            });
            t[25] = j;
            t[26] = isPSA;
            t[27] = isPollEnded;
            t[28] = F;
            t[29] = msgKey;
            t[30] = Z;
            t[31] = z;
            t[32] = commaSeparatedOptionsAndResults;
            t[33] = pollEndTime;
            t[34] = pollHideVoterNames;
            t[35] = H;
            t[36] = V;
            t[37] = A;
            t[38] = ie;
        } else {
            ie = t[38];
        }
        let le;
        if (t[39] !== q || t[40] !== displayType || t[41] !== msgKey) {
            le = !q && p.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                msgKey,
                displayType
            });
            t[39] = q;
            t[40] = displayType;
            t[41] = msgKey;
            t[42] = le;
        } else {
            le = t[42];
        }
        let se;
        if (t[43] !== isPollEnded || t[44] !== F || t[45] !== msgKey || t[46] !== Z || t[47] !== pollEndTime || t[48] !== pollHideVoterNames || t[49] !== pollSelectableOptionsCount || t[50] !== trusted) {
            se = p.jsx(r("WAWebPollMessageHeader"), {
                isPollEnded,
                pollSelectableOptionsCount,
                pollEndTime,
                pollHideVoterNames,
                name: Z,
                msgKey,
                isSentByMe: F,
                trusted
            });
            t[43] = isPollEnded;
            t[44] = F;
            t[45] = msgKey;
            t[46] = Z;
            t[47] = pollEndTime;
            t[48] = pollHideVoterNames;
            t[49] = pollSelectableOptionsCount;
            t[50] = trusted;
            t[51] = se;
        } else {
            se = t[51];
        }
        let ue;
        if (t[52] === Symbol.for("react.memo_cache_sentinel")) {
            ue = (d || (d = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.padding4);
            t[52] = ue;
        } else {
            ue = t[52];
        }
        let ce;
        if (t[53] !== onPhotoThumbClick || t[54] !== msgKey || t[55] !== onOptionToggle || t[56] !== re || t[57] !== optionsToResults || t[58] !== selectableOptionsCount || t[59] !== votedForOptions) {
            ce = p.jsx(r("WAWebPollsOptions"), babelHelpers.extends({
                msgKey,
                options: optionsToResults,
                checkedOptionLocalIds: votedForOptions,
                onOptionToggle,
                selectableOptionsCount,
                onPhotoThumbClick,
                view: "message"
            }, re));
            t[53] = onPhotoThumbClick;
            t[54] = msgKey;
            t[55] = onOptionToggle;
            t[56] = re;
            t[57] = optionsToResults;
            t[58] = selectableOptionsCount;
            t[59] = votedForOptions;
            t[60] = ce;
        } else {
            ce = t[60];
        }
        let de;
        if (t[61] !== isPollInvalid || t[62] !== F) {
            const Component = o("WAWebFlex.react").FlexRow;
            de = isPollInvalid && <Component xstyle={[
                C.invalidPollWarning,
                F ? C.invalidPollWarningBorderSender : C.invalidPollWarningBorderReceiver,
                o("WDSMargins.stylex").wdsMargins.marginBottom4,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
                h.paddingInlineStart14,
                o("WDSPaddings.stylex").wdsPaddings.paddingEnd12
            ]}>{p.jsx(r("WDSIconIcWarning.react"), {
                iconXstyle: C.warningIcon
            })}<span {...babelHelpers.extends({}, (d || (d = r("stylex"))).props(C.spanText, o("WDSMargins.stylex").wdsMargins.marginStart8), {
                "data-testid": "invalid-poll-bubble-warning",
                children: s._("You can only see votes made before you left.")
            })}/></Component>;
            t[61] = isPollInvalid;
            t[62] = F;
            t[63] = de;
        } else {
            de = t[63];
        }
        let me;
        if (t[64] !== O || t[65] !== W) {
            const Component = o("WAWebFlex.react").FlexRow;
            me = O != null && <Component xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
            ]}><span className="x1pg5gke x1d3mw78 xhslqc4" data-testid="see-votes-in-channel">{W === o("WAWebPollCreationUtils").PollType.QUIZ ? s._("View channel to answer.") : s._("See the latest votes in the channel.")}</span></Component>;
            t[64] = O;
            t[65] = W;
            t[66] = me;
        } else {
            me = t[66];
        }
        let pe;
        if (t[67] !== associatedMessages || t[68] !== msgKey) {
            const Component = o("WAWebFlex.react").FlexRow;
            pe = <Component justify="end">{p.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey,
                associatedMessages
            })}</Component>;
            t[67] = associatedMessages;
            t[68] = msgKey;
            t[69] = pe;
        } else {
            pe = t[69];
        }
        let _e;
        if (t[70] !== ce || t[71] !== de || t[72] !== me || t[73] !== pe) {
            _e = <div {...babelHelpers.extends({}, ue, {
                children: [
                    ce,
                    de,
                    me,
                    pe
                ]
            })}/>;
            t[70] = ce;
            t[71] = de;
            t[72] = me;
            t[73] = pe;
            t[74] = _e;
        } else {
            _e = t[74];
        }
        let fe;
        if (t[75] !== Y || t[76] !== F || t[77] !== onViewVotesAction || t[78] !== showViewVotesButton || t[79] !== Q) {
            fe = showViewVotesButton && p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                theme: F ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme.POLL_SENDER : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.POLL_RECEIVER,
                items: [
                    {
                        label: Q,
                        title: Q,
                        onClick: onViewVotesAction,
                        disabled: Y,
                        testid: "poll-view-votes"
                    }
                ]
            });
            t[75] = Y;
            t[76] = F;
            t[77] = onViewVotesAction;
            t[78] = showViewVotesButton;
            t[79] = Q;
            t[80] = fe;
        } else {
            fe = t[80];
        }
        let ge;
        if (t[81] !== msgKey || t[82] !== quotedMsg || t[83] !== V || t[84] !== se || t[85] !== _e || t[86] !== fe || t[87] !== le) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            ge = <Component contact={V} msgKey={msgKey}>{le}{quotedMsg}{se}{_e}{fe}</Component>;
            t[81] = msgKey;
            t[82] = quotedMsg;
            t[83] = V;
            t[84] = se;
            t[85] = _e;
            t[86] = fe;
            t[87] = le;
            t[88] = ge;
        } else {
            ge = t[88];
        }
        let he;
        if (t[89] !== displayAuthor || t[90] !== displayType || t[91] !== U || t[92] !== msgKey || t[93] !== ge || t[94] !== ie || t[95] !== testid) {
            const Component = r("WAWebMessageTextBubble.react");
            he = <Component msgKey={msgKey} displayType={displayType} displayAuthor={displayAuthor} authorRole="button" hideMeta ariaLabel={ie} useFixedWidth={U} testid={testid}>{ge}</Component>;
            t[89] = displayAuthor;
            t[90] = displayType;
            t[91] = U;
            t[92] = msgKey;
            t[93] = ge;
            t[94] = ie;
            t[95] = testid;
            t[96] = he;
        } else {
            he = t[96];
        }
        return he;
    }
    function R(e) {
        return e.count === 0;
    }
    const L = 1000;
    const E = 3600;
    const k = 24 * E;
    function I(isPollEnded, pollEndTime) {
        if (pollEndTime == null) {
            return "";
        }
        if (isPollEnded) {
            return s._("Poll ended");
        }
        const n = pollEndTime - o("WAWebClock").Clock.getServerTimeMs();
        const r = Math.max(0, Math.ceil(n / L));
        if (r < E) {
            return s._("Ends in less than 1h");
        }
        if (r < k) {
            const a = Math.floor(r / E);
            return s._("Ends in {hours}h", [
                s._param("hours", a)
            ]);
        }
        const i = Math.floor(r / k);
        return s._("_j{\"*\":\"Ends in {days} days\",\"_1\":\"Ends in {days} day\"}", [
            s._plural(i),
            s._param("days", i)
        ]);
    }
    function T({ authorDisplayName, commaSeparatedOptionsAndResults, isPollEnded, isSentByMe, pollEndTime, pollHideVoterNames, pollName, t: t_1 }) {
        const d = pollHideVoterNames ? s._("Voter names hidden") : "";
        const m = I(isPollEnded, pollEndTime);
        if (isSentByMe) {
            return s._("Poll from you {time} {poll-name} {hidden-voter-names} {end-time} Top vote counts: {poll-results}.", [
                s._param("time", o("WAWebClock").Clock.timestampStr(t_1)),
                s._param("poll-name", pollName),
                s._param("hidden-voter-names", d),
                s._param("end-time", m),
                s._param("poll-results", commaSeparatedOptionsAndResults)
            ]);
        }
        return s._("Poll from {poll-author-name-not-you} {time} {poll-name} {hidden-voter-names} {end-time} Top vote counts: {poll-results}.", [
            s._param("poll-author-name-not-you", authorDisplayName),
            s._param("time", o("WAWebClock").Clock.timestampStr(t_1)),
            s._param("poll-name", pollName),
            s._param("hidden-voter-names", d),
            s._param("end-time", m),
            s._param("poll-results", commaSeparatedOptionsAndResults)
        ]);
    }
    T.displayName = `${T.name} [from ${i.id}]`;
    function D(t) {
        const r = o("WAWebMsgCollection").MsgCollection.get(t)?.safe();
        if (r == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[polls] poll action skipped, message left the collection"
            ])));
            return null;
        }
        if (r.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
            return r;
        }
        return null;
    }
    l.PollCreationMessageComponent = b;
    l.PollSnapshotMessageComponent = VComponent;
}, 226);