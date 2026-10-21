__d("WAWebBotPluginMsgBubbleMeta.react", [
    "WAWebClock",
    "WAWebProtobufsAICommon.pb",
    "WAWebSearchPluginBingIconIcon.react",
    "WAWebSearchPluginGoogleIconIcon.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 16;
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(26);
        const { botPluginSearchProvider, botPluginSearchQuery, botPluginSearchUrl, t: t_1, theme } = e;
        if (botPluginSearchProvider == null || botPluginSearchUrl == null) {
            return null;
        }
        let d = null;
        e: switch(botPluginSearchProvider){
            case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.GOOGLE:
                {
                    let m;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        m = s.jsx(o("WAWebSearchPluginGoogleIconIcon.react").SearchPluginGoogleIconIcon, {
                            height: u
                        });
                        t[0] = m;
                    } else {
                        m = t[0];
                    }
                    d = m;
                    break e;
                }
            case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.BING:
                {
                    let p;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        p = s.jsx(o("WAWebSearchPluginBingIconIcon.react").SearchPluginBingIconIcon, {
                            height: u
                        });
                        t[1] = p;
                    } else {
                        p = t[1];
                    }
                    d = p;
                    break e;
                }
            case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.SUPPORT:
            case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.UNKNOWN:
        }
        let _ = null;
        if (theme !== "date") {
            if (t_1 != null) {
                let f;
                if (t[2] !== t_1) {
                    f = o("WAWebClock").Clock.timestampStr(t_1);
                    t[2] = t_1;
                    t[3] = f;
                } else {
                    f = t[3];
                }
                _ = f;
            }
        } else if (t_1 != null) {
            let g;
            if (t[4] !== t_1) {
                g = o("WAWebClock").Clock.relativeStr(t_1);
                t[4] = t_1;
                t[5] = g;
            } else {
                g = t[5];
            }
            _ = g;
        }
        let h;
        if (t[6] !== botPluginSearchQuery || t[7] !== botPluginSearchUrl) {
            const Component = r("WDSTextualLink.react");
            h = botPluginSearchQuery != null ? <div className="x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv"><Component href={botPluginSearchUrl} textConfig="Body1">{botPluginSearchQuery}</Component></div> : null;
            t[6] = botPluginSearchQuery;
            t[7] = botPluginSearchUrl;
            t[8] = h;
        } else {
            h = t[8];
        }
        const y = h;
        let C;
        let b;
        let v;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "xcxhlts x1y3qizg x19dbzi3 x78zum5 x1qughib"
            };
            b = {
                className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv"
            };
            v = {
                className: "x78zum5 x6ikm8r x10wlt62"
            };
            t[9] = C;
            t[10] = b;
            t[11] = v;
        } else {
            C = t[9];
            b = t[10];
            v = t[11];
        }
        const S = d;
        let R;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "xe2zdcy x4p5aij x6ikm8r x10wlt62"
            };
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] !== y || t[14] !== R) {
            L = <div {...babelHelpers.extends({}, R, {
                children: y
            })}/>;
            t[13] = y;
            t[14] = R;
            t[15] = L;
        } else {
            L = t[15];
        }
        let E;
        if (t[16] !== d || t[17] !== L) {
            E = <div {...babelHelpers.extends({}, b, {
                children: <div {...babelHelpers.extends({}, v, {
                    children: [
                        S,
                        L
                    ]
                })}/>
            })}/>;
            t[16] = d;
            t[17] = L;
            t[18] = E;
        } else {
            E = t[18];
        }
        let k;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            k = {
                className: "x78zum5 x13a6bvl xpqajaz"
            };
            t[19] = k;
        } else {
            k = t[19];
        }
        let I;
        if (t[20] !== _) {
            I = <div {...babelHelpers.extends({}, k, {
                children: _
            })}/>;
            t[20] = _;
            t[21] = I;
        } else {
            I = t[21];
        }
        let T;
        if (t[22] !== I || t[23] !== C || t[24] !== E) {
            T = <div {...babelHelpers.extends({}, C, {
                children: [
                    E,
                    I
                ]
            })}/>;
            t[22] = I;
            t[23] = C;
            t[24] = E;
            t[25] = T;
        } else {
            T = t[25];
        }
        return T;
    }
    l.default = CComponent;
}, 98);