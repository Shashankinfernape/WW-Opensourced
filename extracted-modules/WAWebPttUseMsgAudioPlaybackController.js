__d("WAWebPttUseMsgAudioPlaybackController", [
    "WAWebPttMsgAudioStore",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = function() {
                if (e == null) {
                    return null;
                }
                return o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = n;
        const i = useState(a);
        const l = i[0];
        const u = i[1];
        const c = useState(e);
        const d = c[0];
        const m = c[1];
        if (d !== e) {
            m(e);
            if (l != null) {
                l.dispose();
            }
            u(a());
        }
        let p;
        if (t[2] !== l) {
            p = function() {
                l?.dispose();
            };
            t[2] = l;
            t[3] = p;
        } else {
            p = t[3];
        }
        r("useWAWebOnUnmount")(p);
        return l;
    }
    l.useMsgAudioPlaybackController = u;
}, 98);