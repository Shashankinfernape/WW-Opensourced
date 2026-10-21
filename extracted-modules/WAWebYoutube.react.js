__d("WAWebYoutube.react", [
    "Promise",
    "WADeepEquals",
    "WAWebNoop",
    "WAWebTimeSpentLoggingNavigation",
    "asyncToGeneratorRuntime",
    "react",
    "youtube-player"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useRef } = c;
    function _(qRef_current, t) {
        if (qRef_current.videoId !== t.videoId) {
            return true;
        }
        const o = qRef_current.opts?.playerVars || {};
        const a = t.opts?.playerVars || {};
        return o.start !== a.start || o.end !== a.end;
    }
    function f(e) {
        return babelHelpers.extends({}, e, {
            playerVars: babelHelpers.extends({}, e?.playerVars, {
                autoplay: 0,
                start: 0,
                end: 0
            })
        });
    }
    function g(qRef_current, t) {
        return !o("WADeepEquals").deepEqual(f(qRef_current?.opts), f(t?.opts));
    }
    function h(qRef_current, t) {
        return qRef_current.id === t.id || qRef_current.className === t.className;
    }
    const y = {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5
    };
    function C(t) {
        const t_onReady = t.onReady;
        const i = t_onReady === undefined ? r("WAWebNoop") : t_onReady;
        const t_onError = t.onError;
        const s = t_onError === undefined ? r("WAWebNoop") : t_onError;
        const t_onStateChange = t.onStateChange;
        const f = t_onStateChange === undefined ? r("WAWebNoop") : t_onStateChange;
        const t_onEnd = t.onEnd;
        const b = t_onEnd === undefined ? r("WAWebNoop") : t_onEnd;
        const t_onPlay = t.onPlay;
        const S = t_onPlay === undefined ? r("WAWebNoop") : t_onPlay;
        const t_onPause = t.onPause;
        const L = t_onPause === undefined ? r("WAWebNoop") : t_onPause;
        const t_onPlaybackRateChange = t.onPlaybackRateChange;
        const k = t_onPlaybackRateChange === undefined ? r("WAWebNoop") : t_onPlaybackRateChange;
        const t_onPlaybackQualityChange = t.onPlaybackQualityChange;
        const T = t_onPlaybackQualityChange === undefined ? r("WAWebNoop") : t_onPlaybackQualityChange;
        const t_opts = t.opts;
        const x = t_opts === undefined ? {
            playerVars: {}
        } : t_opts;
        const { videoId, id } = t;
        const N = id === undefined ? null : id;
        const t_className = t.className;
        const w = t_className === undefined ? null : t_className;
        const t_containerClassName = t.containerClassName;
        const F = t_containerClassName === undefined ? "" : t_containerClassName;
        const ORef = useRef(null);
        const BRef = useRef(null);
        const WRef = useRef([]);
        const qRef = useRef(t);
        const U = useCallback(function(e) {
            return i(e);
        }, [
            i
        ]);
        const V = useCallback(function(e) {
            return s(e);
        }, [
            s
        ]);
        const H = useCallback(function(e) {
            f(e);
            switch(e.data){
                case y.ENDED:
                    b(e);
                    break;
                case y.PLAYING:
                    S(e);
                    break;
                case y.PAUSED:
                    L(e);
                    break;
                default:
                    return;
            }
        }, [
            b,
            L,
            S,
            f
        ]);
        const G = useCallback(function(e) {
            return k(e);
        }, [
            k
        ]);
        const z = useCallback(function(e) {
            return T(e);
        }, [
            T
        ]);
        const j = useCallback(function() {
            const a = babelHelpers.extends({}, x, {
                videoId
            });
            BRef.current = r("youtube-player")(ORef.current, a);
            WRef.current.push(BRef.current.on("ready", U), BRef.current?.on("error", V), BRef.current?.on("stateChange", H), BRef.current?.on("playbackRateChange", G), BRef.current?.on("playbackQualityChange", z));
        }, [
            V,
            z,
            G,
            U,
            H,
            x,
            videoId
        ]);
        useEffect(function() {
            j();
            return function() {
                WRef.current.filter(Boolean).forEach((e)=>{
                    BRef.current?.off(e);
                });
                BRef.current?.destroy();
            };
        }, []);
        const K = useCallback(function() {
            return BRef.current?.destroy().then(j) ?? (e || (e = n("Promise"))).resolve();
        }, [
            j
        ]);
        const Q = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield BRef.current?.getIframe();
            if (N != null && N !== "") {
                if (t != null) {
                    t.setAttribute("id", N);
                }
            } else if (t != null) {
                t.removeAttribute("id");
            }
            if (w != null && w !== "") {
                if (t != null) {
                    t.setAttribute("class", w);
                }
            } else if (t != null) {
                t.removeAttribute("class");
            }
        }), [
            w,
            N
        ]);
        const X = useCallback(function() {
            if (videoId == null) {
                BRef.current?.stopVideo();
                return;
            }
            let n = false;
            let startSeconds;
            let endSeconds;
            if ("playerVars" in x) {
                n = x.playerVars.autoplay === 1;
                if ("start" in x.playerVars) {
                    startSeconds = x.playerVars.start;
                }
                if ("end" in x.playerVars) {
                    endSeconds = x.playerVars.end;
                }
            }
            const a = {
                videoId,
                startSeconds,
                endSeconds
            };
            if (n) {
                BRef.current?.loadVideoById(a);
                return;
            }
            BRef.current?.cueVideoById(a);
        }, [
            x,
            videoId
        ]);
        useEffect(function() {
            const qRef_current = qRef.current;
            if (h(qRef_current, t)) {
                Q();
            }
            if (g(qRef_current, t)) {
                K();
            }
            if (_(qRef_current, t)) {
                X();
            }
            qRef.current = t;
        }, [
            t,
            K,
            Q,
            X
        ]);
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
            surface: "youtube-player"
        });
        return <span className={F}><div id={N} className={w} ref={ORef}/></span>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = C;
}, 98);