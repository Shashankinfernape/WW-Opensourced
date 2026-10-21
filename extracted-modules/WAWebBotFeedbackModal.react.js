__d("WAWebBotFeedbackModal.react", [
    "fbt",
    "WAWebBotTypes",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebRadio.react",
    "WAWebText.react",
    "WAWebUnifiedResponseUtils",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    function d(e) {
        const t = o("react-compiler-runtime").c(21);
        const { msg, onSubmit } = e;
        const i = e_useState();
        const l = i[0];
        const d = i[1];
        let p;
        if (t[0] !== msg) {
            p = msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE || o("WAWebUnifiedResponseUtils").isImagineResponse(o("WAWebMsgGetters").getUnifiedResponse(msg));
            t[0] = msg;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        const f = m;
        let g;
        if (t[2] !== _) {
            g = function() {
                const e = _ ? [
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING,
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT,
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE,
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER
                ] : [
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL,
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE,
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING,
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE,
                    o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER
                ];
                return e.map((e)=>({
                        value: e,
                        label: f(e),
                        onChange: function() {
                            return d(e);
                        }
                    }));
            };
            t[2] = _;
            t[3] = g;
        } else {
            g = t[3];
        }
        const h = g;
        let y;
        if (t[4] !== onSubmit || t[5] !== l) {
            y = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (l != null) {
                        onSubmit(l);
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[4] = onSubmit;
            t[5] = l;
            t[6] = y;
        } else {
            y = t[6];
        }
        const C = y;
        let b;
        let v;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Add a reason");
            v = s._("Submit");
            t[7] = b;
            t[8] = v;
        } else {
            b = t[7];
            v = t[8];
        }
        const S = l == null;
        let R;
        if (t[9] !== _) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            R = <Component color="secondaryLighter" paddingTop={4} paddingBottom={12}>{_ ? s._("Thanks for your feedback! Let us know what's wrong so we can train and improve AI images.") : s._("Thanks for your feedback! Let us know what's wrong so we can train and improve AI chats.")}</Component>;
            t[9] = _;
            t[10] = R;
        } else {
            R = t[10];
        }
        const checkedValue = l ?? null;
        let E;
        if (t[11] !== h) {
            E = h();
            t[11] = h;
            t[12] = E;
        } else {
            E = t[12];
        }
        let k;
        if (t[13] !== checkedValue || t[14] !== E) {
            k = u.jsx(o("WAWebRadio.react").RadioGroup, {
                name: "feedback",
                checkedValue,
                options: E
            });
            t[13] = checkedValue;
            t[14] = E;
            t[15] = k;
        } else {
            k = t[15];
        }
        let I;
        if (t[16] !== C || t[17] !== k || t[18] !== S || t[19] !== R) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            I = <Component title={b} okText={v} onOK={C} okDisabled={S} onCancel={o("WAWebModalManager").closeModalManager} testid="bot-feedback-modal">{R}{k}</Component>;
            t[16] = C;
            t[17] = k;
            t[18] = S;
            t[19] = R;
            t[20] = I;
        } else {
            I = t[20];
        }
        return I;
    }
    function m(e) {
        switch(e){
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL:
                return s._("Not relevant");
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING:
                return s._("Too repetitive");
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_REFUSED:
                return s._("Refused to answer");
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE:
                return s._("Not accurate");
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE:
                return s._("Harmful or offensive");
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER:
                return s._("Something else");
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING:
                return s._("Not visually appealing");
            case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT:
                return s._("Not relevant to text");
            default:
                return "";
        }
    }
    l.default = d;
}, 226);