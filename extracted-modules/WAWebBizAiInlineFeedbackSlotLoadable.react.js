__d("WAWebBizAiInlineFeedbackSlotLoadable.react", [
    "WAWebBizAiInlineFeedbackSlotLoadableComponent.react",
    "WAWebBotTypes",
    "WAWebDisplayType",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const { displayType, msg, selectable } = e;
        const l = selectable === undefined ? false : selectable;
        let u;
        if (t[0] !== msg.bizBotType) {
            u = function() {
                return msg.bizBotType === o("WAWebBotTypes").BizBotType.BIZ_1P;
            };
            t[0] = msg.bizBotType;
            t[1] = u;
        } else {
            u = t[1];
        }
        let c;
        if (t[2] !== msg) {
            c = [
                msg
            ];
            t[2] = msg;
            t[3] = c;
        } else {
            c = t[3];
        }
        const d = r("useWAWebEventTargetValue")(msg, "change:bizBotType", u, c);
        if (!d || msg.bizBotType !== o("WAWebBotTypes").BizBotType.BIZ_1P || l || displayType !== o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION) {
            return null;
        }
        let m;
        if (t[4] !== displayType || t[5] !== msg || t[6] !== l) {
            m = s.jsx(r("WAWebBizAiInlineFeedbackSlotLoadableComponent.react"), {
                displayType,
                msg,
                selectable: l
            });
            t[4] = displayType;
            t[5] = msg;
            t[6] = l;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    l.default = u;
}, 98);