__d("WAWebDebouncedLoadingScreen.react", [
    "$InternalEnum",
    "WALogger",
    "WAPromiseDelays",
    "WAWebCmd",
    "WAWebLoadingScreen.react",
    "WAWebOfflineHandler",
    "WAWebSocketModel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback: m, useEffect: p, useRef: _, useState: f } = d;
    const g = 500;
    const h = 1500;
    const y = 450;
    const C = 800;
    const b = 450;
    const v = n("$InternalEnum").Mirrored([
        "INITIAL_LOAD",
        "CONNECTING",
        "FAKE_FILL",
        "DOWNLOADING",
        "ORGANIZING"
    ]);
    const S = n("$InternalEnum").Mirrored([
        "NOT_STARTED",
        "STARTED",
        "PAST_MIN_TIME"
    ]);
    function R({ initialLoadState: a, onLogout: i, onReady: l }) {
        const u = a.initialLoadReady;
        const d = r("useWAWebUnmountSignal")();
        const R = _(false);
        const E = f(u ? o("WAWebLoadingScreen.react").Stage.CONNECTING : o("WAWebLoadingScreen.react").Stage.INITIAL_LOAD);
        const k = E[0];
        const I = E[1];
        const T = f({
            INITIAL_LOAD: u ? S.PAST_MIN_TIME : S.NOT_STARTED,
            CONNECTING: S.NOT_STARTED,
            FAKE_FILL: S.NOT_STARTED,
            DOWNLOADING: S.NOT_STARTED,
            ORGANIZING: S.NOT_STARTED
        });
        const D = T[0];
        const x = T[1];
        const $ = f(0);
        const P = $[0];
        const N = $[1];
        const M = f(null);
        const w = M[0];
        const A = M[1];
        const F = function() {
            const e = o("WAWebOfflineHandler").OfflineMessageHandler.getHasMessagesToDownload();
            if (w == null && e != null) {
                A(e);
            }
            if (e === true && D.CONNECTING === S.PAST_MIN_TIME) {
                N(o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress());
            }
        };
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge", F);
        const O = m((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                x(function(e) {
                    return babelHelpers.extends({}, e, {
                        [t]: S.STARTED
                    });
                });
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "DebouncedLoadingScreen: ",
                    " - starts minimum display time"
                ])), t);
                yield o("WAPromiseDelays").delayMs(n);
                if (!d.aborted) {
                    x(function(e) {
                        return babelHelpers.extends({}, e, {
                            [t]: S.PAST_MIN_TIME
                        });
                    });
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "DebouncedLoadingScreen: ",
                        " - ends minimum display time"
                    ])), t);
                }
            });
            return function(e, n) {
                return t.apply(this, arguments);
            };
        })(), [
            d
        ]);
        const { CONNECTING: B, DOWNLOADING: W, FAKE_FILL: q, INITIAL_LOAD: U, ORGANIZING: V } = D;
        p(function() {
            if (V === S.PAST_MIN_TIME) {
                if (!R.current) {
                    l();
                    R.current = true;
                }
            } else if (W === S.PAST_MIN_TIME && P >= 100 && V === S.NOT_STARTED) {
                o("WAPromiseDelays").delayMs(b).finally(()=>{
                    if (!d.aborted) {
                        I(o("WAWebLoadingScreen.react").Stage.ORGANIZING);
                        O(v.ORGANIZING, C);
                    }
                });
            } else if (B === S.PAST_MIN_TIME && w != null && W === S.NOT_STARTED && q === S.NOT_STARTED) {
                const e = o("WAWebOfflineHandler").OfflineMessageHandler.getFinishedDownloading();
                if (w && !e) {
                    I(o("WAWebLoadingScreen.react").Stage.DOWNLOADING);
                    N(o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress());
                    O(v.DOWNLOADING, y);
                } else {
                    N(100);
                    O(v.FAKE_FILL, b).then(()=>{
                        if (!d.aborted) {
                            if (o("WAWebSocketModel").Socket.hasSynced) {
                                if (!R.current) {
                                    l();
                                    R.current = true;
                                }
                            } else {
                                I(o("WAWebLoadingScreen.react").Stage.ORGANIZING);
                                O(v.ORGANIZING, C);
                            }
                        }
                    });
                }
            } else {
                if (u && U === S.PAST_MIN_TIME && B === S.NOT_STARTED) {
                    I(o("WAWebLoadingScreen.react").Stage.CONNECTING);
                    O(v.CONNECTING, h);
                } else if (U === S.NOT_STARTED) {
                    O(v.INITIAL_LOAD, g);
                }
            }
        }, [
            P,
            l,
            w,
            O,
            d,
            u,
            B,
            W,
            V,
            q,
            U
        ]);
        const H = L(a, w);
        const Component = o("WAWebLoadingScreen.react").LoadingScreen;
        return <Component stage={k} progress={P} onLogout={i} theme={H}/>;
    }
    R.displayName = `${R.name} [from ${i.id}]`;
    function L(e, t) {
        if (e.initialLoadReady) {
            if (e.initialHistorySyncComplete !== true) {
                return o("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED;
            }
            if (t === true) {
                return o("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED_WITH_PROGRESS;
            }
            return o("WAWebLoadingScreen.react").LoadingScreenTheme.LOGO;
        }
        return o("WAWebLoadingScreen.react").LoadingScreenTheme.MULTI_STAGE;
    }
    l.default = R;
}, 98);