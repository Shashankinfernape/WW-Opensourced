__d("WAWebQuestionsRenderingUtils", [
    "fbt",
    "WALogger",
    "WAWebChatUnreadCount.react",
    "WAWebDBUpdateMessageTable",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebQuestions.flow",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebQuestionsCreateResponseModalLoadable",
    "WAWebQuestionsGatingUtils",
    "WAWebQuestionsSenderGatingUtils",
    "WAWebResponsesListDrawerLoadable",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t, { isNewsletterMsg, isQuestion, type }, r) {
        if (!(type === o("WAWebMsgType").MSG_TYPE.UNKNOWN || !isQuestion)) {
            const m = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(t, isNewsletterMsg);
            if (m != null) {
                const p = m.newsletterMetadata?.iAmAdminOrOwner() ?? false;
                let f;
                if (p) {
                    f = r > 0 ? <>{s._("View responses")}{c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                        count: r,
                        theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.QuestionResponses
                    })}</> : s._("View responses");
                } else {
                    f = s._("Respond");
                }
                const testid = p ? "view-question-responses-cta" : "respond-to-question-cta";
                const h = function() {
                    const n = o("WAWebMsgCollection").MsgCollection.get(t);
                    if (n == null) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[questions] question action skipped, message left the collection"
                        ])));
                        return;
                    }
                    if (p) {
                        _(n, m);
                    } else {
                        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebQuestionsCreateResponseModalLoadable").CreateQuestionResponseModalLoadable, {
                            question: n,
                            chat: m
                        }));
                    }
                };
                const y = p ? !o("WAWebQuestionsAdminGatingUtils").isQuestionsFeatureEnabledForAdmins(m) : !o("WAWebQuestionsGatingUtils").isQuestionsFeatureEnabledForFollowersFor({
                    isNewsletterMsg,
                    type
                });
                return {
                    label: f,
                    testid,
                    onClick: h,
                    disabled: y
                };
            }
        }
    }
    function m(e) {
        switch(e){
            case o("WAWebQuestions.flow").ResponsesFilterType.ALL:
                return s._("All");
            case o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS:
                return s._("Contacts");
            case o("WAWebQuestions.flow").ResponsesFilterType.REPLIED:
                return s._("Replied");
            case o("WAWebQuestions.flow").ResponsesFilterType.STARRED:
                return s._("Starred");
        }
    }
    function p(e) {
        switch(e){
            case o("WAWebQuestions.flow").QuestionType.Question:
                return s._("Create question");
            case o("WAWebQuestions.flow").QuestionType.Reply:
                return s._("Reply");
            case o("WAWebQuestions.flow").QuestionType.Response:
                return s._("Respond");
        }
    }
    function _(e, t) {
        f(e);
        const isReplyDisabled = !o("WAWebQuestionsSenderGatingUtils").isQuestionReplySenderEnabled(t);
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebResponsesListDrawerLoadable").ResponsesListDrawerLoadable, {
            question: e,
            isReplyDisabled
        }), {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    function f(e) {
        e.readQuestionResponsesCount = e.questionResponsesCount;
        return o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
            readQuestionResponsesCount: e.questionResponsesCount
        });
    }
    l.getQuestionAction = d;
    l.getResponsesFilterLabel = m;
    l.getModalTitleFromQuestionType = p;
}, 226);