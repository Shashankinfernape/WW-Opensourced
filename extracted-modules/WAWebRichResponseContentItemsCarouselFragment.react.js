__d("WAWebRichResponseContentItemsCarouselFragment.react", [
    "WAWebCarouselNavigationButton",
    "WAWebChevronButton.react",
    "WAWebDisplayType",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebVelocityTransitionGroup",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebCarouselScrollUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useImperativeHandle, useRef, useState } = u;
    const _ = {
        carouselControlContainer: {
            width: "xh8yej3",
            position: "x1n2onr6",
            $$css: true
        },
        botPluginCarouselControlContainer: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    function f(e) {
        const t = o("react-compiler-runtime").c(36);
        const { fragment, msgKey, ref } = e;
        const lRef = useRef(null);
        const uRef = useRef(null);
        const items = fragment.contentItem.items;
        const g = useState(null);
        const h = g[0];
        const y = g[1];
        const C = useState(false);
        const b = C[0];
        const v = C[1];
        const S = r("useWAWebCarouselScrollUtils")(lRef, v, y, 1);
        const R = S[0];
        const onButtonClick = S[1];
        let E;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                return lRef.current;
            };
            t[0] = E;
        } else {
            E = t[0];
        }
        const k = E;
        let I;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            I = function() {
                return r("nullthrows")(uRef.current);
            };
            t[1] = I;
        } else {
            I = t[1];
        }
        const T = I;
        let D;
        let x;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            D = function() {
                const lRef_current = lRef.current;
                if (lRef_current) {
                    const t = lRef_current.scrollWidth > lRef_current.clientWidth;
                    y(t);
                }
            };
            x = [];
            t[2] = D;
            t[3] = x;
        } else {
            D = t[2];
            x = t[3];
        }
        useEffect(D, x);
        let $;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            $ = function() {
                return {
                    getElement: k,
                    getContainerElement: T
                };
            };
            t[4] = $;
        } else {
            $ = t[4];
        }
        useImperativeHandle(ref, $);
        let P;
        if (t[5] !== items || t[6] !== msgKey) {
            let N;
            if (t[8] !== msgKey) {
                N = function(reelItem, n) {
                    return <div key={n} className="x1e03a83 x1gqwnh9 x1s9hi2i">{s.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
                        msgKey,
                        displayType: o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
                        theme: "bot_plugin_link",
                        reelItem
                    })}</div>;
                };
                t[8] = msgKey;
                t[9] = N;
            } else {
                N = t[9];
            }
            P = items.map(N);
            t[5] = items;
            t[6] = msgKey;
            t[7] = P;
        } else {
            P = t[7];
        }
        const M = P;
        let w;
        if (t[10] !== onButtonClick || t[11] !== b) {
            const Component = o("WAWebCarouselNavigationButton").CarouselNavigationButton;
            w = b === true ? <Component buttonType={o("WAWebChevronButton.react").ButtonType.Prev} onButtonClick={onButtonClick} displayType={o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel}/> : null;
            t[10] = onButtonClick;
            t[11] = b;
            t[12] = w;
        } else {
            w = t[12];
        }
        const A = w;
        let F;
        if (t[13] !== onButtonClick || t[14] !== h) {
            const Component = o("WAWebCarouselNavigationButton").CarouselNavigationButton;
            F = h === true ? <Component buttonType={o("WAWebChevronButton.react").ButtonType.Next} onButtonClick={onButtonClick} displayType={o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel}/> : null;
            t[13] = onButtonClick;
            t[14] = h;
            t[15] = F;
        } else {
            F = t[15];
        }
        const O = F;
        const B = items.length > 3 && _.carouselControlContainer;
        let W;
        if (t[16] !== B) {
            W = [
                _.botPluginCarouselControlContainer,
                B
            ];
            t[16] = B;
            t[17] = W;
        } else {
            W = t[17];
        }
        let q;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            q = {
                className: "x1n2onr6"
            };
            t[18] = q;
        } else {
            q = t[18];
        }
        let U;
        if (t[19] !== items.length) {
            U = ({
                0: {
                    className: "xw2csxc x10wlt62 xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24"
                },
                1: {
                    className: "x10wlt62 xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1rohswg x6ikm8r"
                }
            })[(items.length === 1) << 0];
            t[19] = items.length;
            t[20] = U;
        } else {
            U = t[20];
        }
        let V;
        if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
            V = {
                className: "x78zum5 x1q0g3np xozqiw3 x9xpc1z xezivpi xk8lq53"
            };
            t[21] = V;
        } else {
            V = t[21];
        }
        let H;
        if (t[22] !== M || t[23] !== msgKey.id) {
            H = <div {...babelHelpers.extends({}, V, {
                "data-id": msgKey.id,
                children: M
            })}/>;
            t[22] = M;
            t[23] = msgKey.id;
            t[24] = H;
        } else {
            H = t[24];
        }
        let G;
        if (t[25] !== R || t[26] !== U || t[27] !== H) {
            G = <div {...babelHelpers.extends({}, U, {
                onScroll: R,
                ref: lRef,
                children: H
            })}/>;
            t[25] = R;
            t[26] = U;
            t[27] = H;
            t[28] = G;
        } else {
            G = t[28];
        }
        let z;
        if (t[29] !== O || t[30] !== A || t[31] !== G) {
            const Component = r("WAWebVelocityTransitionGroup");
            z = <Component transitionName="bot-plugin-carousel"><div {...babelHelpers.extends({}, q, {
                children: [
                    A,
                    G,
                    O
                ]
            })}/></Component>;
            t[29] = O;
            t[30] = A;
            t[31] = G;
            t[32] = z;
        } else {
            z = t[32];
        }
        let j;
        if (t[33] !== W || t[34] !== z) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
            j = <Component_1 name="content-item-carousel-fragment"><Component xstyle={W} ref={uRef} tabIndex={-1}>{z}</Component></Component_1>;
            t[33] = W;
            t[34] = z;
            t[35] = j;
        } else {
            j = t[35];
        }
        return j;
    }
    l.default = f;
}, 98);