__d("WAWebAttachMenuPopupItemQuestion.react", [
    "fbt",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WAWebQuestions.flow",
    "WAWebQuestionsInputModalLoadable",
    "WDSIconIcHelpFilled.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        icon: {
            color: "x11i6shi",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(9);
        const { chat, getComposeBoxEditorRef, onAlternateSendFlowStart } = e;
        let l;
        if (t[0] !== chat || t[1] !== getComposeBoxEditorRef) {
            l = function() {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebQuestionsInputModalLoadable").QuestionsInputModalLoadable, {
                    chat,
                    getComposeBoxEditorRef,
                    questionType: o("WAWebQuestions.flow").QuestionType.Question
                }));
                o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
            };
            t[0] = chat;
            t[1] = getComposeBoxEditorRef;
            t[2] = l;
        } else {
            l = t[2];
        }
        const d = l;
        let m;
        if (t[3] !== onAlternateSendFlowStart || t[4] !== d) {
            m = function() {
                onAlternateSendFlowStart();
                d();
            };
            t[3] = onAlternateSendFlowStart;
            t[4] = d;
            t[5] = m;
        } else {
            m = t[5];
        }
        const p = m;
        let _;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Question");
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== p) {
            const Component = r("WDSMenuItem.react");
            f = <Component testid="mi-attach-question" onPress={p} Icon={r("WDSIconIcHelpFilled.react")} iconXstyle={c.icon} title={_}/>;
            t[7] = p;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    l.default = d;
}, 226);