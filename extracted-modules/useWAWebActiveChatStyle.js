__d("useWAWebActiveChatStyle", [
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(13);
        let r;
        if (n[0] !== e || n[1] !== t) {
            r = function() {
                return t && e === o("WAWebChatCollection").ChatCollection.getActive();
            };
            n[0] = e;
            n[1] = t;
            n[2] = r;
        } else {
            r = n[2];
        }
        const a = useState(r);
        const i = a[0];
        const l = a[1];
        let u;
        if (n[3] !== e || n[4] !== t) {
            u = t ? function({ chat, threadId }) {
                if (!(o("WAWebBotGating").isMetaAiChatInThreadsMode(chat.id) && threadId != null)) {
                    l(chat === e);
                }
            } : null;
            n[3] = e;
            n[4] = t;
            n[5] = u;
        } else {
            u = n[5];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", u);
        let c;
        if (n[6] !== t) {
            c = t ? function() {
                l(false);
            } : null;
            n[6] = t;
            n[7] = c;
        } else {
            c = n[7];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", c);
        let d;
        if (n[8] !== e || n[9] !== t) {
            d = t ? function({ chat }) {
                if (chat === e) {
                    l(false);
                }
            } : null;
            n[8] = e;
            n[9] = t;
            n[10] = d;
        } else {
            d = n[10];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "archive_chat", d);
        const m = i ? true : undefined;
        let p;
        if (n[11] !== m) {
            p = {
                forceActive: m,
                activeStyleType: "DEFAULT"
            };
            n[11] = m;
            n[12] = p;
        } else {
            p = n[12];
        }
        return p;
    }
    l.default = u;
}, 98);