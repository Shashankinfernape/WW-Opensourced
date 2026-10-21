__d("WAWebSelectModalSelectedChatList.react", [
    "WAWebChatModel",
    "WAWebChatParticipantList.react",
    "WAWebContactModel",
    "WDSPaddings.stylex",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useState = s.useState;
    const d = {
        paddingInlineEnd25: {
            paddingInlineEnd: "x1a4sjiy",
            $$css: true
        },
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        }
    };
    const m = {
        container: {
            display: "x78zum5",
            flexWrap: "x1a02dak",
            maxHeight: "x1aoj0v",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            backgroundColor: "x1280gxy",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(10);
        const { chats, onDelete } = t;
        let l;
        if (n[0] !== chats) {
            l = chats.getSelected();
            n[0] = chats;
            n[1] = l;
        } else {
            l = n[1];
        }
        const s = s_useState(l);
        const p = s[0];
        const f = s[1];
        let g;
        if (n[2] !== chats) {
            g = function() {
                f(chats.getSelected());
            };
            n[2] = chats;
            n[3] = g;
        } else {
            g = n[3];
        }
        o("useWAWebListener").useListener(chats, "all", g);
        let h;
        if (n[4] !== p) {
            h = r("compactMap")(p, _);
            n[4] = p;
            n[5] = h;
        } else {
            h = n[5];
        }
        const y = h;
        if (y.length === 0) {
            return null;
        }
        let C;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = (e || (e = r("stylex"))).props(m.container, o("WDSPaddings.stylex").wdsPaddings.paddingTop20, d.paddingInlineEnd25, d.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingStart24);
            n[6] = C;
        } else {
            C = n[6];
        }
        let b;
        if (n[7] !== y || n[8] !== onDelete) {
            const Component = r("WAWebChatParticipantList.react");
            b = <div {...babelHelpers.extends({}, C, {
                children: <Component theme="list-names" contacts={y} onDelete={onDelete}/>
            })}/>;
            n[7] = y;
            n[8] = onDelete;
            n[9] = b;
        } else {
            b = n[9];
        }
        return b;
    }
    function _(e) {
        if (e instanceof r("WAWebContactModel")) {
            return e;
        }
        if (e instanceof o("WAWebChatModel").Chat) {
            return e.contact;
        }
    }
    l.default = p;
}, 98);