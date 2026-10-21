__d("WAWebQuestionReplyQuotedMessage.react", [
    "WAWebChatEntryPoint",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebNewsletterOpenAtAction",
    "WAWebNewsletterValidationUtils",
    "WAWebQuotedMsgContent.react",
    "WAWebQuotedMsgWrapper.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const c = {
        barColor: {
            backgroundColor: "x1518k6t",
            $$css: true
        },
        contentWrapper: {
            paddingInlineEnd: "x1nzty39",
            paddingInlineStart: "x12w63v0",
            paddingTop: "x16ovd2e",
            paddingBottom: "x12xbjc7",
            backgroundColor: "x1bu39yj",
            width: "xh8yej3",
            $$css: true
        },
        responseBody: {
            paddingTop: "x1tiyuxx",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(27);
        const { questionReplyQuotedMessage, replyMsg } = e;
        let l;
        if (t[0] !== replyMsg) {
            l = replyMsg && o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(o("WAWebFrontendMsgGetters").getChat(replyMsg).id.toJid());
            t[0] = replyMsg;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        const d = replyMsg?.serverId;
        let m;
        if (t[2] !== u || t[3] !== d) {
            m = function() {
                if (!(d == null || u == null)) {
                    o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                        newsletterJid: u,
                        serverId: d,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply
                    });
                }
            };
            t[2] = u;
            t[3] = d;
            t[4] = m;
        } else {
            m = t[4];
        }
        const p = m;
        let _;
        if (t[5] !== p || t[6] !== u || t[7] !== questionReplyQuotedMessage.questionServerId) {
            _ = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (u != null) {
                        o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                            newsletterJid: u,
                            serverId: questionReplyQuotedMessage.questionServerId,
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply,
                            onMessageDeleted: p,
                            onMessageNotFound: p
                        });
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[5] = p;
            t[6] = u;
            t[7] = questionReplyQuotedMessage.questionServerId;
            t[8] = _;
        } else {
            _ = t[8];
        }
        const f = _;
        let g;
        if (t[9] !== questionReplyQuotedMessage.quotedQuestion) {
            const h = o("WAWebMsgModelFromData").msgModelFromMsgData(babelHelpers.extends({}, questionReplyQuotedMessage.quotedQuestion, {
                id: r("WAWebMsgKey").from(questionReplyQuotedMessage.quotedQuestion.id)
            }));
            g = o("WAWebMsgCollection").MsgCollection.gadd(h);
            t[9] = questionReplyQuotedMessage.quotedQuestion;
            t[10] = g;
        } else {
            g = t[10];
        }
        const y = g;
        const clickable = replyMsg != null;
        let b;
        if (t[11] !== replyMsg) {
            b = replyMsg?.safe();
            t[11] = replyMsg;
            t[12] = b;
        } else {
            b = t[12];
        }
        let v;
        if (t[13] !== y) {
            v = y.safe();
            t[13] = y;
            t[14] = v;
        } else {
            v = t[14];
        }
        let S;
        if (t[15] !== v) {
            S = s.jsx(r("WAWebQuotedMsgContent.react"), {
                msg: v,
                theme: "questions"
            });
            t[15] = v;
            t[16] = S;
        } else {
            S = t[16];
        }
        let R;
        if (t[17] !== questionReplyQuotedMessage.quotedResponse.body) {
            R = s.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: c.responseBody,
                text: questionReplyQuotedMessage.quotedResponse.body,
                breakWord: true
            });
            t[17] = questionReplyQuotedMessage.quotedResponse.body;
            t[18] = R;
        } else {
            R = t[18];
        }
        let L;
        if (t[19] !== S || t[20] !== R) {
            const Component = o("WAWebFlex.react").FlexColumn;
            L = <Component xstyle={c.contentWrapper}>{S}{R}</Component>;
            t[19] = S;
            t[20] = R;
            t[21] = L;
        } else {
            L = t[21];
        }
        let E;
        if (t[22] !== f || t[23] !== L || t[24] !== clickable || t[25] !== b) {
            const Component = r("WAWebQuotedMsgWrapper.react");
            E = <Component authorBackgroundStyle={c.barColor} handleClick={f} clickable={clickable} rootMsg={b}>{L}</Component>;
            t[22] = f;
            t[23] = L;
            t[24] = clickable;
            t[25] = b;
            t[26] = E;
        } else {
            E = t[26];
        }
        return E;
    }
    l.default = d;
}, 98);