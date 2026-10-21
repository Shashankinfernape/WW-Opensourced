__d("WAWebMultiStepFormResponseUtils", [
    "WATimeUtils",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMultiStepFormButton",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = {};
        for(let r = 0; r < e.length; r++){
            const a = e[r];
            const i = t[r];
            const l = i.customAnswer.trim();
            if (a.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive) {
                if (l !== "") {
                    n[a.id] = l;
                } else {
                    const s = Array.from(i.selectedIds)[0];
                    if (s != null) {
                        n[a.id] = s;
                    }
                }
            } else {
                const u = Array.from(i.selectedIds);
                if (l !== "") {
                    u.push(l);
                }
                if (u.length > 0) {
                    n[a.id] = u;
                }
            }
        }
        return n;
    }
    function s(e, t) {
        const n = [];
        const r = ()=>{
            const r = e[a];
            const i = t[a];
            const l = i.customAnswer.trim();
            let s = "";
            if (r.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive) {
                if (l !== "") {
                    s = l;
                } else {
                    const u = Array.from(i.selectedIds)[0];
                    if (u != null) {
                        const d = r.options.find((e)=>e.id === u);
                        s = d?.title ?? u;
                    }
                }
            } else {
                const m = Array.from(i.selectedIds).map((e)=>r.options.find((t)=>t.id === e)?.title ?? e);
                if (l !== "") {
                    m.push(l);
                }
                s = m.join(", ");
            }
            if (s !== "") {
                n.push(`${r.label}
*${s}*`);
            }
        };
        for(var a = 0; a < e.length; a++){
            r();
        }
        return n.join("\n\n");
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const i = {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                ack: o("WAWebAck").ACK.CLOCK,
                to: e.id,
                from: a,
                id: new (r("WAWebMsgKey"))({
                    id: yield r("WAWebMsgKey").newId(),
                    from: a,
                    to: e.id,
                    participant: undefined,
                    selfDir: "out"
                }),
                local: true,
                isNewMsg: true,
                t: o("WATimeUtils").unixTime(),
                interactivePayload: {
                    type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                    name: String(r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE),
                    description: "Agentic Form Submitted",
                    paramsJson: JSON.stringify(t),
                    version: 1
                },
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                body: n
            };
            const l = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, i);
            const s = l[1];
            yield s;
        });
        return c.apply(this, arguments);
    }
    l.buildResponseJson = e;
    l.buildResponseBody = s;
    l.sendFormResponse = u;
}, 98);