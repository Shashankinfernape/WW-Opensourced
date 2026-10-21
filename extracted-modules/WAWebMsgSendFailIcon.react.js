__d("WAWebMsgSendFailIcon.react", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebFailIcon.react",
    "WAWebFailedMessageEditResendModal.react",
    "WAWebFailedMessageModal.react",
    "WAWebFbtIntlList",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebPinMsgConstants",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteModel",
    "WAWebPollsRestoreLastSuccessfulVote",
    "WAWebPollsSendVoteMsgAction",
    "WAWebReactionsMsgAction",
    "WAWebReactionsSendersGetters",
    "WAWebReactionsUtils",
    "WAWebResendMsgAction",
    "WAWebSendCommentMessageAction",
    "WAWebSendEventResponseMsgAction",
    "WAWebSendMsgResultAction",
    "WAWebSendPinMessageAction",
    "WAWebStateUtils",
    "err",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebEventResponsesToResend",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues",
    "useWAWebPinsToResend",
    "useWAWebPollVotesToResend",
    "useWAWebReactionsByMe"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = f || (f = o("react"));
    function HComponent(t) {
        const n = o("react-compiler-runtime").c(35);
        const { displayType, msgs, showForAddOns, showForMessages } = t;
        const m = r("nullthrows")(msgs[0]);
        let p;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebMsgGetters").getIsSentByMe
            ];
            n[0] = p;
        } else {
            p = n[0];
        }
        const _ = o("useWAWebMsgValues").useMsgValues(m.id, p);
        const f = _[0];
        const h = o("WAWebFrontendMsgGetters").getChat(m.unsafe());
        let E;
        if (n[1] !== msgs || n[2] !== showForMessages) {
            E = showForMessages ? msgs : [];
            n[1] = msgs;
            n[2] = showForMessages;
            n[3] = E;
        } else {
            E = n[3];
        }
        const k = E;
        let I;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            I = [
                "change:ack",
                "change:isSendFailure"
            ];
            n[4] = I;
        } else {
            I = n[4];
        }
        let D;
        if (n[5] !== k) {
            D = function() {
                return k.filter(v);
            };
            n[5] = k;
            n[6] = D;
        } else {
            D = n[6];
        }
        const messagesToResend = r("useWAWebEventTargetValue")(k, I, D);
        let $;
        if (n[7] !== k[0]) {
            $ = k[0] != null && o("WAWebMsgGetters").getIsEdited(k[0].unsafe());
            n[7] = k[0];
            n[8] = $;
        } else {
            $ = n[8];
        }
        const P = $;
        let N;
        if (n[9] !== msgs || n[10] !== showForAddOns) {
            N = showForAddOns ? msgs : [];
            n[9] = msgs;
            n[10] = showForAddOns;
            n[11] = N;
        } else {
            N = n[11];
        }
        const M = N;
        let w;
        if (n[12] !== M) {
            w = M.map(b);
            n[12] = M;
            n[13] = w;
        } else {
            w = n[13];
        }
        const A = w;
        let F;
        if (n[14] !== msgs) {
            F = msgs.some(C);
            n[14] = msgs;
            n[15] = F;
        } else {
            F = n[15];
        }
        const O = r("useWAWebReactionsByMe")(A, F);
        let B;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            B = [
                "change:ack",
                "change:isSendFailure"
            ];
            n[16] = B;
        } else {
            B = n[16];
        }
        let W;
        if (n[17] !== O) {
            W = function() {
                return O.filter(y);
            };
            n[17] = O;
            n[18] = W;
        } else {
            W = n[18];
        }
        const reactionsToResend = r("useWAWebEventTargetValue")(O, B, W);
        const U = M[0];
        let V;
        if (n[19] !== U) {
            V = U.unsafe();
            n[19] = U;
            n[20] = V;
        } else {
            V = n[20];
        }
        const votesToResend = r("useWAWebPollVotesToResend")(V);
        const pinsToResend = r("useWAWebPinsToResend")(A);
        const eventResponsesToResend = r("useWAWebEventResponsesToResend")(A);
        if (messagesToResend.length === 0 && reactionsToResend.length === 0 && votesToResend.length === 0 && pinsToResend.length === 0 && eventResponsesToResend.length === 0) {
            return null;
        }
        let j;
        if (n[21] !== h || n[22] !== eventResponsesToResend || n[23] !== m || n[24] !== P || n[25] !== messagesToResend || n[26] !== pinsToResend || n[27] !== reactionsToResend || n[28] !== votesToResend) {
            j = function() {
                if (P && reactionsToResend.length === 0) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "MsgSendFailIcon:handleClick: edit send failure"
                    ])));
                    S(m, h);
                } else if (T(votesToResend)) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MsgSendFailIcon:handleClick: ended poll vote failure"
                    ])));
                    LComponent(votesToResend);
                } else {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "MsgSendFailIcon:handleClick: generic send failure"
                    ])));
                    R({
                        messagesToResend,
                        reactionsToResend,
                        votesToResend,
                        pinsToResend,
                        eventResponsesToResend,
                        commentsToResend: []
                    });
                }
            };
            n[21] = h;
            n[22] = eventResponsesToResend;
            n[23] = m;
            n[24] = P;
            n[25] = messagesToResend;
            n[26] = pinsToResend;
            n[27] = reactionsToResend;
            n[28] = votesToResend;
            n[29] = j;
        } else {
            j = n[29];
        }
        const K = j;
        let Q;
        if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
            Q = s._("Something went wrong. Click to learn more.");
            n[30] = Q;
        } else {
            Q = n[30];
        }
        const X = Q;
        let Y;
        if (n[31] !== displayType || n[32] !== K || n[33] !== f) {
            const Component = r("WAWebFailIcon.react");
            Y = <Component displayType={displayType} tooltip={X} ariaLabel={X} fromMe={f} onClick={K} isGroupChatProfilePictureDisplayed/>;
            n[31] = displayType;
            n[32] = K;
            n[33] = f;
            n[34] = Y;
        } else {
            Y = n[34];
        }
        return Y;
    }
    function y(e) {
        return o("WAWebReactionsSendersGetters").getIsFailed(e);
    }
    function C(e) {
        return o("WAWebMsgGetters").getHasReaction(e.unsafe());
    }
    function b(e) {
        return e.id;
    }
    function v(e) {
        return o("WAWebMsgGetters").getIsFailed(e.unsafe());
    }
    function S(e, t) {
        const n = o("WAWebMsgActionCapability").canEditText(e.unsafe());
        const a = n ? g.jsx(r("WAWebFailedMessageEditResendModal.react"), {
            failedEditedMsg: e.unsafe()
        }) : g.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
            chat: t,
            msgList: [
                e.unsafe()
            ].map(o("WAWebStateUtils").unproxy)
        });
        o("WAWebModalManager").ModalManager.open(a);
    }
    function R(e) {
        const t = E(e);
        const n = e.messagesToResend[0];
        const a = n != null ? o("WAWebFrontendMsgGetters").getChat(n.unsafe()) : null;
        const i = n != null && (o("WAWebMsgGetters").getBroadcastId(n.unsafe()) != null || a != null && o("WAWebChatGetters").getIsBroadcast(a));
        o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebFailedMessageModal.react"), {
            text: t,
            resend: i ? undefined : function() {
                k(e);
            }
        }));
    }
    function LComponent(votesToResend) {
        const t = I(votesToResend);
        const n = s._("The poll has now ended.");
        const Component = r("WAWebFailedMessageModal.react");
        o("WAWebModalManager").ModalManager.open(<Component title={t} text={n} onDelete={function() {
            return votesToResend.forEach((e)=>{
                if (e instanceof o("WAWebPollsPollVoteModel").PollVote) {
                    o("WAWebPollsRestoreLastSuccessfulVote").restoreLastSuccessfulVote(e);
                }
            });
        }}/>);
    }
    function E({ commentsToResend, eventResponsesToResend, messagesToResend, pinsToResend, reactionsToResend, votesToResend }) {
        const c = reactionsToResend.length + votesToResend.length + pinsToResend.length + eventResponsesToResend.length;
        const d = messagesToResend.length + c;
        if (messagesToResend.length > 0 && d === messagesToResend.length) {
            return s._("Your message was not sent.");
        }
        if (messagesToResend.length > 0) {
            return s._("Your message and actions on this message were not sent.");
        }
        if (reactionsToResend.length === c) {
            const m = r("WAWebFbtIntlList")(reactionsToResend.map((e)=>e.reactionText), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
            if (reactionsToResend.length > 2) {
                return s._("_j{\"*\":\"{count} reactions weren't sent\",\"_1\":\"1 reaction wasn't sent\"}", [
                    s._plural(reactionsToResend.length, "count")
                ]);
            }
            return s._("_j{\"*\":\"Your {reactions} reactions weren't sent\",\"_1\":\"Your {reactions} reaction was not sent\"}", [
                s._plural(reactionsToResend.length),
                s._param("reactions", m)
            ]);
        }
        if (votesToResend.length === c) {
            return I(votesToResend);
        }
        if (pinsToResend.length === c) {
            const p = pinsToResend[0];
            if (p.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN) {
                return s._("Couldn't pin.");
            }
            return s._("Couldn't unpin.");
        }
        if (eventResponsesToResend.length === c) {
            return s._("Your response was not sent.");
        }
        if (commentsToResend.length === c) {
            return s._("Your comment was not sent.");
        }
        if (c > 0) {
            return s._("Your actions on this message were not sent.");
        }
        throw r("err")(`Unhandled case: ${messagesToResend.length} messages, ${reactionsToResend.length} reactions, ${votesToResend.length} votes, ${d} total.`);
    }
    function k({ commentsToResend, eventResponsesToResend, messagesToResend, pinsToResend, reactionsToResend, votesToResend }) {
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "FailedMessageModal:resend: resend failed messages and add-ons, ",
            " messages, ",
            " reactions, ",
            " votes, ",
            " pins, ",
            " event responses, ",
            " comments"
        ])), messagesToResend.length, reactionsToResend.length, votesToResend.length, pinsToResend.length, eventResponsesToResend.length, commentsToResend.length);
        let u = 0;
        const c = messagesToResend.map((e)=>o("WAWebResendMsgAction").resendMsg(e.unsafe()).then((e)=>{
                if (e === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN) {
                    u++;
                }
            }).catch((e)=>{
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "FailedMessageModal:resend: resend failure ",
                    ""
                ])), e).tags("messaging");
            }));
        (_ || (_ = n("Promise"))).allSettled(c).then(()=>{
            if (u > 0) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "FailedMessageModal:resend: ",
                    " failures with SendMsgResult.ERROR_UNKNOWN"
                ])), u).tags("messaging");
            }
        });
        reactionsToResend.forEach((e)=>{
            const t = o("WAWebReactionsUtils").reactionSenderToReactionUpdate(e);
            o("WAWebReactionsMsgAction").resendUpdateFailedPropsForSentReactionsDBAndModel(t);
        });
        votesToResend.forEach(o("WAWebPollsSendVoteMsgAction").resendVote);
        pinsToResend.forEach(o("WAWebSendPinMessageAction").resendPinInChatMsg);
        eventResponsesToResend.forEach(o("WAWebSendEventResponseMsgAction").resendEventResponseMsg);
        commentsToResend.forEach(o("WAWebSendCommentMessageAction").resendComment);
    }
    function I([t]) {
        const n = t instanceof o("WAWebPollsPollVoteModel").PollVote ? o("WAWebPollVoteGetters").getIsUnvote(t) : t.isUnvote;
        if (n) {
            return s._("Your vote change couldn't be saved");
        }
        return s._("Your vote couldn't be saved");
    }
    function T(votesToResend) {
        return votesToResend.some((e)=>{
            if (!(e instanceof o("WAWebPollsPollVoteModel").PollVote)) {
                return false;
            }
            const t = o("WAWebFrontendPollVoteGetters").getParentMsg(e);
            const n = o("WAWebMsgGetters").getPollEndTime(t.unsafe());
            return n != null && n <= o("WAWebClock").Clock.getServerTimeMs();
        });
    }
    l.MsgSendFailIcon = HComponent;
    l.showResendDialog = R;
}, 226);