__d("WAWebNonMemberGroupMsgBar.react", [
    "fbt",
    "WAWebCmd",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            a = <Component grow={1} paddingEnd={4}><div className="x126k92a">{s._("You can't send messages to this group because you're no longer a member.")}</div></Component>;
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_chat) {
            i = function() {
                o("WAWebCmd").Cmd.deleteOrExitChat(e_chat);
            };
            t[1] = e_chat;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Delete chat");
            t[3] = l;
        } else {
            l = t[3];
        }
        let c;
        if (t[4] !== i) {
            const Component = r("WDSButton.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            c = <Component_2 align="center" grow={1}>{a}<Component_1 shrink={0}><Component variant="outline" type="destructive" onPress={i} Icon={r("WDSIconIcDelete.react")} testid="non-member-group-delete-group-btn" label={l}/></Component_1></Component_2>;
            t[4] = i;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = c;
}, 226);