__d("WAWebMentionAllMutatorComponent.react", [
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebClickable.react",
    "WAWebMentionAllNuxModal.react",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        nonSelectable: {
            userSelect: "x87ps6o",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_lastMessage = e.lastMessage;
        const a = o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention");
        const i = d;
        let l;
        if (t[0] !== e_lastMessage) {
            const Component = r("WAWebMentionMutatorComponentBase.react");
            const Component_1 = o("WAWebClickable.react").Clickable;
            l = <Component_1 as="span" tabIndex={a ? -1 : undefined} xstyle={u.nonSelectable}><Component text="all" jid="@all" selectable={false} lastMessage={e_lastMessage} onClick={i}/></Component_1>;
            t[0] = e_lastMessage;
            t[1] = l;
        } else {
            l = t[1];
        }
        return l;
    }
    function d() {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e != null) {
            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMentionAllNuxModal.react"), {
                chat: e
            }));
        }
    }
    l.default = c;
}, 98);