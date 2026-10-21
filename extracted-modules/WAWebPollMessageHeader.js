__d("WAWebPollMessageHeader", [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WAWebMultiSelectIconFilledIcon.react",
    "WAWebPollBubbleSettingLabel",
    "WAWebPollCreationUtils",
    "WAWebPollEndTimeLabel",
    "WAWebSpoilerRevealLogger",
    "WAWebTextSizeUtils",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcVisibilityOffFilled.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        pollName: {
            fontWeight: "x1s688f",
            fontSize: "x1jchvi3",
            $$css: true
        },
        selectIcon: {
            fill: "x2u7xp1",
            $$css: true
        },
        selectIconColor: {
            color: "x1bvqhpb",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(48);
        const { isPollEnded, isSentByMe, msgKey, name, pollEndTime, pollHideVoterNames, pollSelectableOptionsCount, trusted } = t;
        let h;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let y;
            h = [
                (y = o("WAWebMsgGetters")).getSender,
                y.getInitialPageSize,
                y.getIsSpoiler,
                o("WAWebFrontendMsgGetters").getRtl,
                o("WAWebFrontendMsgGetters").getDir,
                y.getMentionedJidList,
                y.getGroupMentions,
                y.getPollType
            ];
            n[0] = h;
        } else {
            h = n[0];
        }
        const C = o("useWAWebMsgValues").useMsgValues(msgKey, h);
        const b = C[0];
        const v = C[1];
        const S = C[2];
        const R = C[3];
        const L = C[4];
        const E = C[5];
        const k = C[6];
        const pollType = C[7];
        let T;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            T = o("WAWebTextSizeUtils").getWAWebTextSizeStyles();
            n[1] = T;
        } else {
            T = n[1];
        }
        const T_pollQuestionTextSize = T.pollQuestionTextSize;
        const isSingleOptionPoll = pollSelectableOptionsCount === 1;
        let $;
        let P;
        let N;
        if (n[2] !== L || n[3] !== k || n[4] !== v || n[5] !== isPollEnded || n[6] !== isSentByMe || n[7] !== isSingleOptionPoll || n[8] !== S || n[9] !== E || n[10] !== msgKey || n[11] !== name || n[12] !== pollEndTime || n[13] !== pollHideVoterNames || n[14] !== pollSelectableOptionsCount || n[15] !== pollType || n[16] !== R || n[17] !== b || n[18] !== trusted) {
            const M = [];
            if (pollSelectableOptionsCount != null && !isPollEnded) {
                M.push({
                    key: "selectable-options",
                    render: function(t) {
                        return <_ isSingleOptionPoll={isSingleOptionPoll} pollType={pollType} trailingSeparator={t}/>;
                    }
                });
            }
            if (pollHideVoterNames) {
                M.push({
                    key: "hidden-voter-names",
                    render
                });
            }
            if (pollEndTime != null) {
                M.push({
                    key: "end-time",
                    render: function(t) {
                        return c.jsx(r("WAWebPollEndTimeLabel"), {
                            isPollEnded,
                            pollEndTime,
                            trailingSeparator: t
                        });
                    }
                });
            }
            let w;
            if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
                w = (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.padding4);
                n[22] = w;
            } else {
                w = n[22];
            }
            let A;
            if (n[23] !== L || n[24] !== k || n[25] !== isSentByMe || n[26] !== S || n[27] !== E || n[28] !== msgKey.remote || n[29] !== name || n[30] !== R || n[31] !== b || n[32] !== trusted) {
                A = function({ textLimit }) {
                    const n = o("WAWebFormatConfigurationConversation").Conversation({
                        mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap({
                            mentionedJidList: E
                        }),
                        groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap({
                            groupMentions: k
                        }),
                        links: o("WAWebMsgLinks").getLinksFromText(name, b, textLimit),
                        phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(name, textLimit),
                        selectable: true,
                        trusted: trusted === true,
                        fromMe: isSentByMe,
                        fromChatWid: msgKey.remote,
                        messageHasSpoiler: S,
                        spoilerRevealContext: o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(msgKey.remote, isSentByMe)
                    });
                    return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: name,
                        dirMismatch: R !== r("WAWebL10N").isRTL(),
                        direction: L,
                        inferLinesDirection: true,
                        formatters: n,
                        selectable: true,
                        textLimit,
                        xstyle: [
                            d.pollName,
                            T_pollQuestionTextSize
                        ]
                    });
                };
                n[23] = L;
                n[24] = k;
                n[25] = isSentByMe;
                n[26] = S;
                n[27] = E;
                n[28] = msgKey.remote;
                n[29] = name;
                n[30] = R;
                n[31] = b;
                n[32] = trusted;
                n[33] = A;
            } else {
                A = n[33];
            }
            let F;
            if (n[34] !== v || n[35] !== name || n[36] !== A) {
                const Component = o("WAWebExpandableText.react").ExpandableText;
                F = <div {...babelHelpers.extends({}, w, {
                    children: <Component text={name} textLimit={v}>{A}</Component>
                })}/>;
                n[34] = v;
                n[35] = name;
                n[36] = A;
                n[37] = F;
            } else {
                F = n[37];
            }
            if (n[38] !== msgKey || n[39] !== F) {
                const Component = r("WAWebMessageSpacerText.react");
                N = <Component msgKey={msgKey} spacer={false} data-id={msgKey}>{F}</Component>;
                n[38] = msgKey;
                n[39] = F;
                n[40] = N;
            } else {
                N = n[40];
            }
            if (n[41] === Symbol.for("react.memo_cache_sentinel")) {
                $ = {
                    className: "x78zum5 x6s0dn4 x1q0g3np x1a02dak"
                };
                n[41] = $;
            } else {
                $ = n[41];
            }
            P = M.map(({ key, render }, t)=><c.Fragment key={key}>{render(t < M.length - 1)}</c.Fragment>);
            n[2] = L;
            n[3] = k;
            n[4] = v;
            n[5] = isPollEnded;
            n[6] = isSentByMe;
            n[7] = isSingleOptionPoll;
            n[8] = S;
            n[9] = E;
            n[10] = msgKey;
            n[11] = name;
            n[12] = pollEndTime;
            n[13] = pollHideVoterNames;
            n[14] = pollSelectableOptionsCount;
            n[15] = pollType;
            n[16] = R;
            n[17] = b;
            n[18] = trusted;
            n[19] = $;
            n[20] = P;
            n[21] = N;
        } else {
            $ = n[19];
            P = n[20];
            N = n[21];
        }
        let O;
        if (n[42] !== $ || n[43] !== P) {
            O = <div {...babelHelpers.extends({}, $, {
                children: P
            })}/>;
            n[42] = $;
            n[43] = P;
            n[44] = O;
        } else {
            O = n[44];
        }
        let B;
        if (n[45] !== N || n[46] !== O) {
            B = <>{N}{O}</>;
            n[45] = N;
            n[46] = O;
            n[47] = B;
        } else {
            B = n[47];
        }
        return B;
    }
    function render(e) {
        return <F9 trailingSeparator={e}/>;
    }
    render.displayName = `${render.name} [from ${i.id}]`;
    function _(e) {
        const t = o("react-compiler-runtime").c(9);
        const { isSingleOptionPoll, pollType, trailingSeparator } = e;
        let l;
        if (pollType === o("WAWebPollCreationUtils").PollType.QUIZ) {
            let u;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                u = s._("Select your answer");
                t[0] = u;
            } else {
                u = t[0];
            }
            l = u;
        } else if (isSingleOptionPoll) {
            let m;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                m = s._("Select one");
                t[1] = m;
            } else {
                m = t[1];
            }
            l = m;
        } else {
            let p;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                p = s._("Select one or more");
                t[2] = p;
            } else {
                p = t[2];
            }
            l = p;
        }
        let _;
        if (t[3] !== isSingleOptionPoll) {
            _ = isSingleOptionPoll ? c.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                height: 12,
                width: 12,
                testid: "ic-check-circle-filled",
                iconXstyle: d.selectIconColor
            }) : c.jsx(o("WAWebMultiSelectIconFilledIcon.react").MultiSelectIconFilledIcon, {
                innerStyles: {
                    background: d.selectIcon
                }
            });
            t[3] = isSingleOptionPoll;
            t[4] = _;
        } else {
            _ = t[4];
        }
        let f;
        if (t[5] !== l || t[6] !== _ || t[7] !== trailingSeparator) {
            f = c.jsx(r("WAWebPollBubbleSettingLabel"), {
                icon: _,
                label: l,
                testid: "poll-selectable-options-hint",
                trailingSeparator
            });
            t[5] = l;
            t[6] = _;
            t[7] = trailingSeparator;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    function F9(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_trailingSeparator = e.trailingSeparator;
        let a;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = c.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
                width: 12,
                height: 12,
                colorName: "contentDeemphasized"
            });
            i = s._("Names hidden");
            t[0] = a;
            t[1] = i;
        } else {
            a = t[0];
            i = t[1];
        }
        let l;
        if (t[2] !== e_trailingSeparator) {
            l = c.jsx(r("WAWebPollBubbleSettingLabel"), {
                icon: a,
                label: i,
                testid: "poll-hide-voter-names-label",
                trailingSeparator: e_trailingSeparator
            });
            t[2] = e_trailingSeparator;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    l.default = m;
}, 226);