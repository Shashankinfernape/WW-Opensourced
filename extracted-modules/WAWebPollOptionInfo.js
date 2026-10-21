__d("WAWebPollOptionInfo", [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFacePile.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendPollVoteGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionBar",
    "WAWebPollsPollVoteModel",
    "WAWebSpoilerRevealLogger",
    "WAWebTextSizeUtils",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        top: {
            minHeight: "xisnujt",
            $$css: true
        },
        optionName: {
            width: "xh8yej3",
            cursor: "x1ypdohk",
            overflowY: "x10wlt62",
            $$css: true
        },
        voteCountContainer: {
            minWidth: "xk8lq53",
            $$css: true
        },
        votersContainer: {
            display: "x78zum5",
            justifyContent: "x13a6bvl",
            $$css: true
        },
        disabledPollLabel: {
            cursor: "xt0e3qv",
            $$css: true
        },
        pollEndedLabel: {
            color: "x1bvqhpb",
            $$css: true
        },
        pollsSender: {
            borderTopColor: "x3ewwah",
            borderInlineEndColor: "xzt7qbt",
            borderBottomColor: "x1xnb2cf",
            borderInlineStartColor: "xphqdy3",
            $$css: true
        },
        pollsReceiver: {
            borderTopColor: "xm7onvi",
            borderInlineEndColor: "xxy6lca",
            borderBottomColor: "x4728lr",
            borderInlineStartColor: "x4bbfdb",
            $$css: true
        },
        verticalHiddenOptionInfo: {
            paddingBottom: "xvpt6g3",
            $$css: true
        }
    };
    const d = 18;
    const m = 2;
    function p(e) {
        const t = o("react-compiler-runtime").c(30);
        const { checkBoxId, checked, hideResults, index, isAdminOrOwner, isCorrectOption, isPollEnded, layout, msgKey, name, onDetailImageClick, option, result, selectable, showFacePile, trusted } = e;
        let L;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            L = [
                o("WAWebMsgGetters").getIsSentByMe
            ];
            t[0] = L;
        } else {
            L = t[0];
        }
        const E = o("useWAWebMsgValues").useMsgValues(msgKey, L);
        const isPollSentByMe = E[0];
        const I = isPollSentByMe ? "polls_sender" : "polls_receiver";
        let T;
        if (t[1] !== checkBoxId || t[2] !== index || t[3] !== isPollEnded || t[4] !== msgKey || t[5] !== name || t[6] !== option || t[7] !== selectable || t[8] !== trusted) {
            T = <_ checkBoxId={checkBoxId} index={index} isPollEnded={isPollEnded} msgKey={msgKey} name={name} option={option} selectable={selectable} trusted={trusted}/>;
            t[1] = checkBoxId;
            t[2] = index;
            t[3] = isPollEnded;
            t[4] = msgKey;
            t[5] = name;
            t[6] = option;
            t[7] = selectable;
            t[8] = trusted;
            t[9] = T;
        } else {
            T = t[9];
        }
        const D = T;
        let x;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            x = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled();
            t[10] = x;
        } else {
            x = t[10];
        }
        const $ = x;
        let P;
        if (t[11] !== hideResults || t[12] !== msgKey || t[13] !== onDetailImageClick || t[14] !== result || t[15] !== showFacePile || t[16] !== I) {
            P = !hideResults && <F14 msgKey={msgKey} theme={I} onClick={$ ? undefined : onDetailImageClick} result={result} showFacePile={showFacePile}/>;
            t[11] = hideResults;
            t[12] = msgKey;
            t[13] = onDetailImageClick;
            t[14] = result;
            t[15] = showFacePile;
            t[16] = I;
            t[17] = P;
        } else {
            P = t[17];
        }
        const N = P;
        const M = hideResults ? undefined : result;
        let w;
        if (t[18] !== checked || t[19] !== isAdminOrOwner || t[20] !== isCorrectOption || t[21] !== isPollSentByMe || t[22] !== M) {
            w = u.jsx(r("WAWebPollsOptionBar"), {
                result: M,
                isPollSentByMe,
                isAdminOrOwner,
                checked,
                isCorrectOption
            });
            t[18] = checked;
            t[19] = isAdminOrOwner;
            t[20] = isCorrectOption;
            t[21] = isPollSentByMe;
            t[22] = M;
            t[23] = w;
        } else {
            w = t[23];
        }
        const A = w;
        let F;
        if (t[24] !== hideResults || t[25] !== layout || t[26] !== A || t[27] !== D || t[28] !== N) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            const Component_3 = r("WAWebFlexItem.react");
            F = layout === "horizontal" ? <Component_1><Component xstyle={c.top} columnGap={2}>{D}{N}</Component>{A}</Component_1> : <Component_3 xstyle={hideResults && c.verticalHiddenOptionInfo}><Component_2 xstyle={c.top} columnGap={2}>{D}</Component_2>{A}{N}</Component_3>;
            t[24] = hideResults;
            t[25] = layout;
            t[26] = A;
            t[27] = D;
            t[28] = N;
            t[29] = F;
        } else {
            F = t[29];
        }
        return F;
    }
    function _({ checkBoxId, index, isPollEnded, msgKey, name, option, selectable, trusted }) {
        const p = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getIsSpoiler,
            o("WAWebMsgGetters").getSender
        ]);
        const _ = p[0];
        const f = p[1];
        const g = p[2];
        const textSize = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().textSize;
        const y = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled();
        const C = o("WAWebFormatConfigurationConversation").Conversation({
            links: y ? o("WAWebMsgLinks").getLinksFromText(option.name, g) : [],
            phoneNumbers: [],
            selectable,
            trusted: trusted === true,
            fromMe: _,
            messageHasSpoiler: f,
            spoilerRevealContext: o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(msgKey.remote, _)
        });
        const b = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: name,
            selectable: true,
            formatters: C
        });
        const Component = r("WAWebFlexItem.react");
        return <Component xstyle={[
            c.optionName,
            textSize,
            !selectable && c.disabledPollLabel,
            isPollEnded && c.pollEndedLabel
        ]}>{y ? <div data-testid={`poll-option-row-label-${index}`}>{b}</div> : <label htmlFor={checkBoxId} data-testid={`poll-option-row-label-${index}`}>{b}</label>}</Component>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function F14(e) {
        const t = o("react-compiler-runtime").c(24);
        const { msgKey, onClick, result, showFacePile, theme } = e;
        const _ = showFacePile === undefined ? true : showFacePile;
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebMsgGetters").getPollHideVoterNames,
                o("WAWebMsgGetters").getIsNewsletterMsg
            ];
            t[0] = f;
        } else {
            f = t[0];
        }
        const h = o("useWAWebMsgValues").useMsgValues(msgKey, f);
        const y = h[0];
        const C = h[1];
        const { count, votes } = result;
        let S;
        if (t[1] !== votes) {
            S = votes.slice(0, m).map(g);
            t[1] = votes;
            t[2] = S;
        } else {
            S = t[2];
        }
        const R = S;
        const borderColor = theme === "polls_sender" ? c.pollsSender : c.pollsReceiver;
        const E = y === true;
        let k;
        if (t[3] !== borderColor || t[4] !== E || t[5] !== _ || t[6] !== R) {
            k = R.length > 0 && _ && !E && u.jsx(r("WAWebFacePile.react"), {
                faceSize: d,
                idsOrUrls: R,
                borderColor
            });
            t[3] = borderColor;
            t[4] = E;
            t[5] = _;
            t[6] = R;
            t[7] = k;
        } else {
            k = t[7];
        }
        const I = k;
        let T;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "x1pg5gke"
            };
            t[8] = T;
        } else {
            T = t[8];
        }
        let D;
        if (t[9] !== count) {
            D = r("WAWebL10N").d(count);
            t[9] = count;
            t[10] = D;
        } else {
            D = t[10];
        }
        let x;
        if (t[11] !== D) {
            const Component = r("WAWebFlexItem.react");
            x = <Component xstyle={c.voteCountContainer}><span {...babelHelpers.extends({}, T, {
                children: D
            })}/></Component>;
            t[11] = D;
            t[12] = x;
        } else {
            x = t[12];
        }
        let $;
        if (t[13] !== I || t[14] !== x) {
            const Component = o("WAWebFlex.react").FlexRow;
            $ = <Component columnGap={4}>{I}{x}</Component>;
            t[13] = I;
            t[14] = x;
            t[15] = $;
        } else {
            $ = t[15];
        }
        const P = $;
        if (onClick == null) {
            let N;
            if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
                N = {
                    className: "x78zum5 x13a6bvl"
                };
                t[16] = N;
            } else {
                N = t[16];
            }
            let M;
            if (t[17] !== P) {
                M = <div {...babelHelpers.extends({}, N, {
                    children: P
                })}/>;
                t[17] = P;
                t[18] = M;
            } else {
                M = t[18];
            }
            return M;
        }
        let w;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            w = s._("View poll voters");
            t[19] = w;
        } else {
            w = t[19];
        }
        let A;
        if (t[20] !== C || t[21] !== onClick || t[22] !== P) {
            const Component = r("WAWebUnstyledButton.react");
            A = <Component title={w} disabled={C} xstyle={c.votersContainer} onClick={onClick}>{P}</Component>;
            t[20] = C;
            t[21] = onClick;
            t[22] = P;
            t[23] = A;
        } else {
            A = t[23];
        }
        return A;
    }
    function g(e) {
        return h(e).id;
    }
    function h(e) {
        if (e instanceof o("WAWebPollsPollVoteModel").PollVote) {
            return o("WAWebFrontendPollVoteGetters").getSenderObj(e);
        }
        return e;
    }
    l.default = p;
}, 226);