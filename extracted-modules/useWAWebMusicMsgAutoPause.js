__d("useWAWebMusicMsgAutoPause", [
    "WAWebMusicMsgPlayerStore",
    "react",
    "react-compiler-runtime",
    "useWAWebIntersection"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                root: null,
                threshold: 0
            };
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = r("useWAWebIntersection")(n);
        const i = a[0];
        const l = a[1];
        const l_isIntersecting = l.isIntersecting;
        const dRef = useRef(false);
        let p;
        let _;
        if (t[1] !== l_isIntersecting || t[2] !== e) {
            p = function() {
                if (dRef.current && !l_isIntersecting) {
                    m(e);
                }
                dRef.current = l_isIntersecting;
            };
            _ = [
                l_isIntersecting,
                e
            ];
            t[1] = l_isIntersecting;
            t[2] = e;
            t[3] = p;
            t[4] = _;
        } else {
            p = t[3];
            _ = t[4];
        }
        useEffect(p, _);
        let f;
        let g;
        if (t[5] !== e) {
            f = function() {
                return function() {
                    return m(e);
                };
            };
            g = [
                e
            ];
            t[5] = e;
            t[6] = f;
            t[7] = g;
        } else {
            f = t[6];
            g = t[7];
        }
        useEffect(f, g);
        return i;
    }
    function m(e) {
        if (o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.getState().msg?.id.equals(e) === true) {
            o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.pause();
        }
    }
    l.default = useD;
}, 98);