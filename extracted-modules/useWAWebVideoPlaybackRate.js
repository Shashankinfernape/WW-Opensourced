__d("useWAWebVideoPlaybackRate", [
    "WAWebVideoPlaybackSpeed",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    const u = new Map;
    const c = [];
    function d() {
        c.forEach((e)=>e());
    }
    function m(e) {
        c.push(e);
        return function() {
            const t = c.indexOf(e);
            if (t !== -1) {
                c.splice(t, 1);
            }
        };
    }
    function p(e) {
        if (e == null) {
            return o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE;
        }
        return u.get(e) ?? o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE;
    }
    function _(e, t) {
        if (!(e == null || t === p(e))) {
            u.set(e, t);
            d();
        }
    }
    function resetAllPlaybackRates() {
        if (u.size !== 0) {
            u.clear();
            d();
        }
    }
    function useG(e) {
        const t = o("react-compiler-runtime").c(11);
        let n;
        if (t[0] !== e) {
            n = function() {
                return p(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = useSyncExternalStore(m, n);
        let a;
        if (t[2] !== e) {
            a = function(n) {
                _(e, n);
            };
            t[2] = e;
            t[3] = a;
        } else {
            a = t[3];
        }
        const setPlaybackRate = a;
        let advancePlaybackRate;
        if (t[4] !== r || t[5] !== setPlaybackRate) {
            advancePlaybackRate = function() {
                return setPlaybackRate(o("WAWebVideoPlaybackSpeed").getNextVideoPlaybackRate(r));
            };
            t[4] = r;
            t[5] = setPlaybackRate;
            t[6] = advancePlaybackRate;
        } else {
            advancePlaybackRate = t[6];
        }
        let u;
        if (t[7] !== r || t[8] !== setPlaybackRate || t[9] !== advancePlaybackRate) {
            u = {
                playbackRate: r,
                setPlaybackRate,
                advancePlaybackRate,
                resetAllPlaybackRates
            };
            t[7] = r;
            t[8] = setPlaybackRate;
            t[9] = advancePlaybackRate;
            t[10] = u;
        } else {
            u = t[10];
        }
        return u;
    }
    l.default = useG;
}, 98);