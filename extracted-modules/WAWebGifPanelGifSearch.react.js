__d("WAWebGifPanelGifSearch.react", [
    "WAAbortError",
    "WALogger",
    "WAPromiseCache",
    "WAPromiseLoop",
    "WAShiftTimer",
    "WAWebEmptyState.react",
    "WAWebEventsWaitForBbEvent",
    "WAWebFocusTracer",
    "WAWebGifFromProviderSentWamEvent",
    "WAWebGifPanelConstants",
    "WAWebGifPanelGifInfo",
    "WAWebGifPanelGifPreview.react",
    "WAWebGifPanelGifSections",
    "WAWebGifSearchCancelledWamEvent",
    "WAWebGifSearchNoResultsWamEvent",
    "WAWebGifSearchResultTappedWamEvent",
    "WAWebGifSearchSessionStartedWamEvent",
    "WAWebGifSearchStyles",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "WAWebPanelsDisplayLocation",
    "WAWebPonyfillsFetch",
    "WAWebProtobufsE2E.pb",
    "WAWebSetRefCache",
    "WAWebURLUtils",
    "WAWebWamEnumGifSearchProvider",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebForceUpdate",
    "useWAWebStableCallback",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = [
        "ref"
    ];
    let b;
    let v;
    const S = v || (v = o("react"));
    const R = v;
    const { memo, useEffect, useImperativeHandle, useRef, useState } = R;
    const api_key = r("gkx")("26258") ? "3o85xmWDYKgihhIKSA" : "SPCZpy9mSOFVRbCLsuM5xWGUgcefkuCn";
    const x = new (r("WAPromiseCache"))(M, {
        maxCached: 6,
        maxAge: 360000,
        shouldCache: function(t) {
            return !!(t != null && t.length);
        }
    });
    const $ = {
        UP: "UP",
        DOWN: "DOWN",
        LEFT: "LEFT",
        RIGHT: "RIGHT"
    };
    function PComponent(t) {
        "use no forget";
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, C);
        const { onGif, scrollGifIntoViewIfNeeded, searchText, selectedSectionId } = i;
        const d = r("useWAWebUnmountSignal")();
        const m = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const p = useState([]);
        const _ = p[0];
        const f = p[1];
        const gRef = useRef(0);
        const hRef = useRef(null);
        const yRef = useRef(null);
        const vRef = useRef(null);
        const RRef = useRef(false);
        const LRef = useRef(null);
        const DRef = useRef(false);
        const PRef = useRef({});
        const N = (t, n)=>{
            const e = PRef.current[String(t)];
            e?.setShouldAnimate(n);
        };
        const M = r("useWAWebStableCallback")(function() {
            const hRef_current = hRef.current;
            const n = gRef.current + o("WAWebGifPanelConstants").GAP_SIZE;
            const r = yRef.current ?? Math.round(n / (o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT + o("WAWebGifPanelConstants").GAP_SIZE));
            const a = _[r];
            if (a?.gifs.length && a !== hRef_current) {
                hRef.current = a;
                const s = (hRef_current == null ? undefined : hRef_current.gifs.map((e)=>e.gifId)) ?? [];
                const u = new Set(a.gifs.map((e)=>e.gifId));
                for (const c of s.filter((e)=>!u.has(e))){
                    N(c, false);
                }
                for (const d of u){
                    N(d, true);
                }
            }
            const m = i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? [
                r - 3,
                r + 3
            ] : [
                r - 1,
                r + 1
            ];
            const p = m[0];
            for(let f = m[1], C = p; C <= f; C++){
                if (C !== r) {
                    const b = _[C];
                    if (b != null) {
                        for (const v of b.gifs){
                            const S = v.gifId;
                            N(S, false);
                        }
                    }
                }
            }
        });
        const w = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(M);
        });
        function F() {
            w.current.debounce(0);
        }
        const O = r("useWAWebStableCallback")(function() {
            const t = searchText || selectedSectionId || o("WAWebGifPanelGifSections").SECTIONS.TRENDING;
            let n = x.getOrRun(t);
            n = n.then();
            LRef.current = n;
            n.then((r)=>{
                if (!d.aborted && (r && r.length === 0 && new (o("WAWebGifSearchNoResultsWamEvent")).GifSearchNoResultsWamEvent({
                    gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY
                }).commit(), n === LRef.current)) {
                    LRef.current = null;
                    if (!r) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[gif_search] ",
                            " query failed, showing ",
                            " stale rows"
                        ])), A(t), _.length);
                        return;
                    }
                    let i = vRef.current?.clientWidth || 0;
                    i -= 2 * o("WAWebGifPanelConstants").GAP_SIZE;
                    DRef.current = true;
                    f(U(r, i));
                    m();
                    F();
                }
            }).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
        });
        const B = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(O);
        });
        const WRef = useRef([]);
        const qRef = useRef({});
        const V = function([e, r], n) {
            if (n) {
                PRef.current[e] = n;
                qRef.current[r] = n;
            } else {
                delete PRef.current[e];
                delete qRef.current[r];
            }
        };
        const H = r("useLazyRef")(function() {
            return new (r("WAWebSetRefCache"))(V);
        });
        const onSend = function(t) {
            new (o("WAWebGifFromProviderSentWamEvent")).GifFromProviderSentWamEvent({
                gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY
            }).commit();
            if (!t.trending) {
                new (o("WAWebGifSearchResultTappedWamEvent")).GifSearchResultTappedWamEvent({
                    gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY,
                    rank: t.rank
                }).commit();
            }
            RRef.current = true;
            onGif(t.url, o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY, t.accessibilityLabel);
        };
        const z = function(t) {
            vRef.current = t;
            if (t != null && t && DRef.current) {
                t.scrollTop = 0;
            }
        };
        const j = ()=>{
            const e = WRef.current.join("_");
            const t = qRef.current[e];
            if (t) {
                const n = t.getElement();
                if (n) {
                    r("WAWebFocusTracer").focus(n);
                    scrollGifIntoViewIfNeeded(n);
                }
            }
        };
        const initSelection = function(t = false) {
            WRef.current = [
                0,
                0
            ];
            j();
        };
        const Q = (t)=>{
            const WRef_current = WRef.current;
            const n = [
                WRef_current[0],
                WRef_current[1],
                _[Math.min(WRef_current[0], _.length - 1)].gifs.length - 1,
                _[Math.min(WRef_current[0] + 1, _.length - 1)].gifs.length - 1,
                _[Math.max(WRef_current[0] - 1, 0)].gifs.length - 1
            ];
            const r = n[0];
            const o = n[1];
            const a = n[2];
            const i = n[3];
            const l = n[4];
            const s = o / a;
            switch(t){
                case $.UP:
                    {
                        const u = Math.floor(l * s);
                        return [
                            Math.max(r - 1, 0),
                            u
                        ];
                    }
                case $.DOWN:
                    {
                        const c = Math.floor(i * s);
                        return [
                            r + 1,
                            c
                        ];
                    }
            }
            return [
                0,
                0
            ];
        };
        const contains = function(t) {
            return vRef.current?.contains(t ?? null) ?? false;
        };
        const Y = (t)=>{
            if (t) {
                t.preventDefault();
                t.stopPropagation();
            }
        };
        const J = (t, n)=>[
                Math.max(0, t),
                Math.max(0, n)
            ];
        const Z = (t, n)=>{
            const e = [
                WRef.current[0],
                WRef.current[1]
            ];
            const r = e[0];
            const o = e[1];
            switch(n){
                case $.UP:
                    if (r === 0) {
                        return;
                    }
                    WRef.current = Q($.UP);
                    break;
                case $.DOWN:
                    if (r === _.length - 1) {
                        return;
                    }
                    WRef.current = Q($.DOWN);
                    break;
                case $.LEFT:
                    if (o === 0 && r === 0) {
                        return;
                    }
                    if (o === 0) {
                        WRef.current = J(r - 1, _[r - 1].gifs.length - 1);
                    } else {
                        WRef.current = J(r, o - 1);
                    }
                    break;
                case $.RIGHT:
                    if (_[r]) {
                        if (_[r].gifs.length === o + 1) {
                            WRef.current = J(r + 1, 0);
                        } else {
                            WRef.current = J(r, o + 1);
                        }
                    } else {
                        WRef.current = [
                            0,
                            0
                        ];
                    }
            }
            Y(t);
            j();
        };
        const ee = function(t) {
            Z(t, $.UP);
        };
        const te = function(t) {
            Z(t, $.DOWN);
        };
        const ne = function(t) {
            Z(t, $.LEFT);
        };
        const re = function(t) {
            Z(t, $.RIGHT);
        };
        const enter = function(t) {
            Y(t);
            const WRef_current = WRef.current;
            const n = [
                WRef_current[0],
                WRef_current[1],
                WRef_current[2]
            ];
            const r = n[0];
            const o = n[1];
            onSend(_[r].gifs[o]);
        };
        const ae = r("useWAWebStableCallback")(function() {
            B.current.debounceAndCap(200, 2000);
        });
        const animateOnScroll = function(t) {
            gRef.current = t.scrollTop;
            yRef.current = null;
            w.current.debounce(200);
        };
        useEffect(function() {
            const e = new AbortController;
            const e_signal = e.signal;
            o("WAPromiseLoop").promiseLoop(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (d.aborted) {
                    throw new (o("WAAbortError")).AbortError;
                }
                yield r("WAWebEventsWaitForBbEvent")(r("WAWebNetworkStatus"), "change:online", function() {
                    return r("WAWebNetworkStatus").online;
                }, e_signal);
                ae();
            })).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
            O();
            new (o("WAWebGifSearchSessionStartedWamEvent")).GifSearchSessionStartedWamEvent({
                gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY
            }).commit();
            return function() {
                w.current.cancel();
                B.current.cancel();
                e.abort();
                if (!RRef.current) {
                    new (o("WAWebGifSearchCancelledWamEvent")).GifSearchCancelledWamEvent({
                        gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY
                    }).commit();
                }
            };
        }, []);
        useEffect(function() {
            ae();
        }, [
            ae,
            searchText
        ]);
        useImperativeHandle(t_ref, function() {
            return {
                contains,
                initSelection,
                animateOnScroll
            };
        });
        const le = {
            up: ee,
            down: te,
            left: ne,
            right: re,
            enter
        };
        const se = _.map((e, t)=>{
            const onRowActivate = function() {
                yRef.current = t;
                w.current.debounce(0);
            };
            const a = e.gifs.map((gif, r)=>{
                const Component = o("WAWebGifPanelGifPreview.react").GifPreview;
                return <Component key={gif.gifId} ref={H.current.getRefSetter([
                    `${gif.gifId}`,
                    `${t}_${r}`
                ])} gif={gif} onSend={onSend} onRowActivate={onRowActivate}/>;
            });
            let i = null;
            if (e.blankStr != null) {
                i = <div className={(b || (b = r("stylex")))(o("WAWebGifSearchStyles").gifSearchStyles.blank)} style={{
                    flexBasis: e.blankStr
                }}/>;
            }
            return <div key={t} {...babelHelpers.extends({}, (b || (b = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.row, t === _.length - 1 && o("WAWebGifSearchStyles").gifSearchStyles.lastRow), {
                children: [
                    a,
                    i
                ]
            })}/>;
        });
        const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
        const children = i.selectedSectionId !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES && (se.length === 0 ? <div {...babelHelpers.extends({}, (b || (b = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.noResults), {
            children: i.searchText ? S.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {}) : S.jsx(o("WAWebEmptyState.react").Loading, {})
        })}/> : <Component className={(b || (b = r("stylex")))(o("WAWebGifSearchStyles").gifSearchStyles.section)} handlers={le}>{se}</Component>);
        return <div {...babelHelpers.extends({}, (b || (b = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.searchContainer), {
            ref: z,
            children
        })}/>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    const N = memo(PComponent, function(e, { onGif, searchText, selectedSectionId }) {
        return !(e.onGif !== onGif || e.selectedSectionId !== selectedSectionId || e.searchText !== searchText);
    });
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(q_1) {
            const t = q_1 === o("WAWebGifPanelGifSections").SECTIONS.TRENDING;
            const n = A(q_1);
            let a;
            if (t) {
                a = r("WAWebURLUtils").build("https://api.giphy.com/v1/gifs/trending", {
                    api_key,
                    limit: 100,
                    rating: "pg-13"
                });
            } else {
                const i = r("WAWebL10N").getNormalizedLocale();
                let l = i;
                switch(i){
                    case "zh-HK":
                        l = "zh-TW";
                        break;
                    case "pt-BR":
                        l = "pt";
                        break;
                }
                let lang = "";
                if (o("WAWebGifPanelGifInfo").GIPHY_LOCALES.includes(l)) {
                    lang = l;
                }
                a = r("WAWebURLUtils").build("https://api.giphy.com/v1/gifs/search", {
                    q: q_1,
                    api_key,
                    limit: 100,
                    rating: "pg-13",
                    lang
                });
            }
            let u;
            try {
                u = yield r("WAWebPonyfillsFetch")(a);
            } catch (error) {
                F(n, r("getErrorSafe")(error));
                return null;
            }
            if (!u.ok) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[gif_search] searchGiphy: ",
                    " request failed with HTTP ",
                    ""
                ])), n, u.status).sendLogs("gif_search_http_error", {
                    sampling: 0.01,
                    employeeSampling: 1
                });
                return null;
            }
            let c;
            try {
                c = yield u.json();
            } catch (error) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[gif_search] searchGiphy: failed to parse ",
                    " response"
                ])), n).catching(r("getErrorSafe")(error)).sendLogs("gif_search_parse_failed");
                return null;
            }
            try {
                return B(c, t);
            } catch (error) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[gif_search] searchGiphy: failed to convert ",
                    " response"
                ])), n).catching(r("getErrorSafe")(error)).sendLogs("gif_search_convert_failed");
                return null;
            }
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        if (e === o("WAWebGifPanelGifSections").SECTIONS.TRENDING) {
            return "trending";
        }
        return "search";
    }
    function F(e, t) {
        if (!r("WAWebNetworkStatus").online) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] searchGiphy: ",
                " request failed while offline"
            ])), e);
            return;
        }
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[gif_search] searchGiphy: ",
            " request failed before a response was received"
        ])), e).catching(t).sendLogs("gif_search_network_error", {
            sampling: 0.01,
            employeeSampling: 1
        });
    }
    function O(e, t) {
        if (e) {
            const n = parseInt(e.width, 10);
            const r = parseInt(e.height, 10);
            if (n && r) {
                return {
                    width: n,
                    height: r
                };
            }
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] getGifDimensions: invalid fullContent dims"
            ]))).sendLogs("[gif_search] getGifDimensions: invalid fullContent dims");
        }
        if (t) {
            const a = parseInt(t.width, 10);
            const i = parseInt(t.height, 10);
            if (a && i) {
                return {
                    width: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT * a / i,
                    height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT
                };
            }
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] getGifDimensions: invalid original dims"
            ]))).sendLogs("[gif_search] getGifDimensions: invalid original dims");
        }
        return {
            width: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT,
            height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT
        };
    }
    function B(e, trending) {
        const n = trending ? "trending" : "search";
        if (!e || !Array.isArray(e.data)) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] giphyResultsToGifs: unexpected ",
                " response shape, meta.status=",
                ""
            ])), n, e?.meta?.status).sendLogs("gif_search_unexpected_response");
            return [];
        }
        if (!e.data.length) {
            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] giphyResultsToGifs: giphy returned 0 ",
                " results, total_count=",
                ", response_id=",
                ""
            ])), n, e.pagination?.total_count, e.meta?.response_id);
            return [];
        }
        for(var l = e.data, s = [], u = {
            noImages: 0,
            missingDownsized: 0,
            missingUrls: 0,
            renditions: new Set
        }, c = 0; c < l.length; c++){
            const d = l[c];
            const _ = d.images;
            if (!_) {
                u.noImages++;
                continue;
            }
            const { downsized_medium, downsized_small, original, preview, preview_gif, preview_webp } = _;
            if (!downsized_small || !downsized_medium) {
                u.missingDownsized++;
                W(u, _);
                continue;
            }
            const url = downsized_small.mp4;
            const S = downsized_medium.url;
            if (S == null || url == null || url === "") {
                u.missingUrls++;
                W(u, _);
                continue;
            }
            const R = O(downsized_small, original);
            const { height, width } = R;
            const accessibilityLabel = d.alt_text != null && d.alt_text !== "" ? d.alt_text : d.title;
            s.push(new (o("WAWebGifPanelGifInfo")).GifInfo({
                accessibilityLabel,
                nonVideoUrl: S || preview_webp?.url || preview_gif?.url || undefined,
                previewUrl: preview?.mp4 || undefined,
                rank: s.length,
                trending,
                url,
                width: Math.round(width * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT / height)
            }));
        }
        q(u, n, l.length, s.length);
        return s;
    }
    function W(e, t) {
        for (const n of Object.keys(t)){
            e.renditions.add(n);
        }
    }
    function q(e, t, n, r) {
        const a = n - r;
        if (a !== 0) {
            const i = Array.from(e.renditions).sort().join(",");
            if (r === 0) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[gif_search] all gifs skipped, check giphy response: ",
                    ", received=",
                    ", no_images=",
                    ", missing_downsized=",
                    ", missing_urls=",
                    ", skipped_renditions=",
                    ""
                ])), t, n, e.noImages, e.missingDownsized, e.missingUrls, i).sendLogs("[gif_search] all gifs skipped, check giphy response");
                return;
            }
            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[gif_search] skipped ",
                "/",
                " ",
                " gifs: no_images=",
                ", missing_downsized=",
                ", missing_urls=",
                ", skipped_renditions=",
                ""
            ])), a, n, t, e.noImages, e.missingDownsized, e.missingUrls, i);
        }
    }
    function U(e, t) {
        const n = [];
        const r = 0.9 * t;
        for(var a = e, i = null, l = 0.05; l < 1 && a.length; l += 0.05){
            a.sort((e, t)=>{
                const n = e.rank - t.rank;
                if (Math.abs(n) > 8) {
                    return n;
                }
                return t.width - e.width;
            });
            const s = (1 + l) * t;
            const u = [];
            const c = [];
            for (const d of a){
                for(var m = false, p = Math.min(s - d.width, r), _ = 0; !m && _ < u.length; _++){
                    if (u[_] < p) {
                        u[_] += d.width + o("WAWebGifPanelConstants").GAP_SIZE;
                        c[_].push(d);
                        m = true;
                    }
                }
                if (!m) {
                    u.push(d.width);
                    c.push([
                        d
                    ]);
                }
            }
            if (c.length === 1) {
                a = [];
                const f = t - u[0] - o("WAWebGifPanelConstants").GAP_SIZE;
                i = {
                    gifs: c[0],
                    blankStr: f > 0 ? `${f}px` : undefined
                };
            } else {
                a = [];
                for(let g = 0; g < c.length; g++){
                    if (u[g] > r) {
                        n.push(c[g]);
                    } else {
                        a.push(...c[g]);
                    }
                }
            }
        }
        n.forEach((e)=>e.sort((e, t)=>e.rank - t.rank));
        n.sort((e, t)=>e[0].rank - t[0].rank);
        const y = n.map((gifs)=>({
                gifs,
                blankStr: undefined
            }));
        if (i) {
            y.push(i);
        }
        return y;
    }
    l.GifSearch = N;
    l.searchGiphy = M;
    l.getGifDimensions = O;
    l.giphyResultsToGifs = B;
}, 98);