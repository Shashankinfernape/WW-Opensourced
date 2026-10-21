__d("useWAWebHasA2uiReplyBelow", [
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(3);
        const r = t === undefined ? true : t;
        let a;
        if (n[0] !== r || n[1] !== e) {
            a = function() {
                if (!r) {
                    return false;
                }
                const n = o("WAWebMsgCollection").MsgCollection.get(e);
                const a = n == null ? null : o("WAWebFrontendMsgGetters").getMaybeChat(n)?.msgs;
                if (a == null) {
                    return false;
                }
                const i = a.getModelsArray();
                const l = e.toString();
                const s = i.findIndex((e)=>e.id.toString() === l);
                if (s < 0) {
                    return false;
                }
                for(let u = s + 1; u < i.length; u++){
                    if (i[u].id.fromMe === true) {
                        return true;
                    }
                }
                return false;
            };
            n[0] = r;
            n[1] = e;
            n[2] = a;
        } else {
            a = n[2];
        }
        const i = useState(a);
        const l = i[0];
        return l;
    }
    l.default = u;
}, 98);