__d("WAWebBizAiBlockMsgBar.react", [
    "fbt",
    "WAWebCmd",
    "WAWebCopyPasteSelectable.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGenAiAgentLogEvents",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_chat = e.chat;
        o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyBlockingBar();
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = r("WAWebFlexItem.react");
            a = <Component_2><Component_1 align="center"><Component>{s._("AI is responding in this chat.")}</Component></Component_1></Component_2>;
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = "x1v5yvga";
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== e_chat) {
            l = function() {
                o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAutoReplyBlockingBar();
                o("WAWebCmd").Cmd.changeAiReplyStatus(e_chat, false);
            };
            t[2] = e_chat;
            t[3] = l;
        } else {
            l = t[3];
        }
        let c;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Respond manually");
            t[4] = c;
        } else {
            c = t[4];
        }
        let d;
        if (t[5] !== l) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableLink;
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            d = <div data-testid="biz_ai_block_msg_bar"><Component_2 align="center">{a}<Component_1><Component className={i} id="toggle-ai-reply-status" data-testid="toggle-ai-reply-status" selectable={false} onClick={l}>{c}</Component></Component_1></Component_2></div>;
            t[5] = l;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    l.default = c;
}, 226);