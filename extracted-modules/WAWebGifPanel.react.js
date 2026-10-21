__d("WAWebGifPanel.react", [
    "fbt",
    "WAWebDomScroll",
    "WAWebEmojiPickerConstants",
    "WAWebExpressionsPanelPicker.react",
    "WAWebGifPanelGifSearch.react",
    "WAWebGifPanelGifSections",
    "WAWebGifPanelMenuSectionTab.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenu.react",
    "WAWebStopEvent",
    "WAWebWebcEmojiOpenWamEvent",
    "WDSSearchBar.react",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount",
    "useWAWebThrottledCallback",
    "useWAWebUiIdle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useImperativeHandle, useRef, useState } = c;
    const f = o("WAWebGifPanelGifSections").ORDERED_TAB_SECTION_IDS.filter((e)=>e !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES);
    const g = "GIPHY";
    const h = {
        searchBarWrapper: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            $$css: true
        }
    };
    function YComponent(e) {
        const a = o("react-compiler-runtime").c(101);
        const { defaultSearchText, displayCache, displayLocation, onChange, onDisplayCache, onFocusNext, onFocusPrev, onGif, ref, size } = e;
        const ERef = useRef();
        const kRef = useRef();
        const IRef = useRef();
        const TRef = useRef();
        const DRef = useRef(0);
        const xRef = useRef(false);
        const $RefRef = useRef(0);
        const PRef = useRef(0);
        const scrollTop = displayCache?.scrollTop ?? 0;
        const M = displayCache?.showSearchInput ?? true;
        const w = displayCache?.selectedSectionId;
        let A;
        if (a[0] !== scrollTop || a[1] !== M || a[2] !== w) {
            A = {
                scrollTop,
                showSearchInput: M,
                selectedSectionId: w
            };
            a[0] = scrollTop;
            a[1] = M;
            a[2] = w;
            a[3] = A;
        } else {
            A = a[3];
        }
        const F = A;
        const O = useState(!F.scrollTop);
        const B = O[0];
        const W = O[1];
        const q = useState(defaultSearchText ?? "");
        const U = q[0];
        const V = q[1];
        const H = useState(F.showSearchInput);
        const G = H[0];
        const z = H[1];
        const j = useState(F.selectedSectionId || o("WAWebGifPanelGifSections").SECTIONS.TRENDING);
        const K = j[0];
        const Q = j[1];
        const X = useState(false);
        const Y = X[1];
        const J = useState(-1);
        const Z = J[0];
        const ee = J[1];
        let te;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            te = new Map;
            a[4] = te;
        } else {
            te = a[4];
        }
        const neRef = useRef(te);
        let re;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            re = function(t) {
                if (IRef.current) {
                    IRef.current.focus();
                } else {
                    xRef.current = true;
                    z(true);
                }
            };
            a[5] = re;
        } else {
            re = a[5];
        }
        const oe = re;
        let ae;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            ae = function() {
                return {
                    getElement: function() {
                        return ERef.current;
                    },
                    focusSearchInput: function(t) {
                        oe(t);
                    },
                    restoreFocus: function(t) {
                        oe(t);
                    }
                };
            };
            a[6] = ae;
        } else {
            ae = a[6];
        }
        useImperativeHandle(ref, ae);
        const ie = r("useWAWebUiIdle")();
        let le;
        if (a[7] !== displayCache?.scrollTop || a[8] !== ie) {
            le = function() {
                if (PRef.current === 0) {
                    PRef.current = Date.now();
                    const e = displayCache?.scrollTop;
                    const t = TRef.current;
                    if (t && e != null && e !== 0) {
                        t.scrollTop = e;
                    }
                    ie(function() {
                        oe();
                        new (o("WAWebWebcEmojiOpenWamEvent")).WebcEmojiOpenWamEvent({
                            webcEmojiOpenTab: "GIF"
                        }).commit();
                        W(false);
                    });
                }
            };
            a[7] = displayCache?.scrollTop;
            a[8] = ie;
            a[9] = le;
        } else {
            le = a[9];
        }
        const se = displayCache?.scrollTop;
        let ue;
        if (a[10] !== se || a[11] !== ie) {
            ue = [
                se,
                ie
            ];
            a[10] = se;
            a[11] = ie;
            a[12] = ue;
        } else {
            ue = a[12];
        }
        useEffect(le, ue);
        let ce;
        if (a[13] !== B || a[14] !== U || a[15] !== K || a[16] !== G) {
            ce = function() {
                const TRef_current = TRef.current;
                if (K == null && U && TRef_current && kRef.current) {
                    kRef.current.animateOnScroll(TRef_current);
                    return;
                }
                if (!(Date.now() - PRef.current < o("WAWebEmojiPickerConstants").SCROLL_CLICK_TIME_GAP) && (B && W(false), !!TRef_current)) {
                    const n = TRef_current.scrollTop;
                    const r = DRef.current - n;
                    const a = Math.abs(r) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
                    xRef.current = Math.abs(r) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST;
                    if (r < 0) {
                        if (G && (n > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && a || DRef.current < o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && n >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT)) {
                            z(false);
                        }
                    } else if (!G) {
                        if (a || n < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT) {
                            z(true);
                        }
                    }
                    kRef.current?.animateOnScroll(TRef_current);
                    DRef.current = n;
                }
            };
            a[13] = B;
            a[14] = U;
            a[15] = K;
            a[16] = G;
            a[17] = ce;
        } else {
            ce = a[17];
        }
        const de = r("useWAWebThrottledCallback")(ce, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME);
        let me;
        if (a[18] !== onDisplayCache || a[19] !== K || a[20] !== G) {
            me = function() {
                const TRef_current = TRef.current;
                onDisplayCache({
                    scrollTop: TRef_current?.scrollTop ?? 0,
                    showSearchInput: G,
                    selectedSectionId: K
                });
            };
            a[18] = onDisplayCache;
            a[19] = K;
            a[20] = G;
            a[21] = me;
        } else {
            me = a[21];
        }
        r("useWAWebOnUnmount")(me);
        let pe;
        if (a[22] === Symbol.for("react.memo_cache_sentinel")) {
            pe = function(t) {
                const TRef_current = TRef.current;
                if (TRef_current && t.offsetTop - TRef_current.scrollTop < o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT) {
                    o("WAWebDomScroll").scrollIntoView(t, true, TRef_current);
                }
            };
            a[22] = pe;
        } else {
            pe = a[22];
        }
        const scrollGifIntoViewIfNeeded = pe;
        let fe;
        if (a[23] !== onChange || a[24] !== U) {
            fe = function(t) {
                if (TRef.current != null) {
                    if (U.length === 0 && t) {
                        $RefRef.current = TRef.current.scrollTop;
                        TRef.current?.scrollTo(0, 0);
                    } else if (U && t.length === 0 && $RefRef.current > 0) {
                        TRef.current?.scrollTo(0, $RefRef.current);
                    }
                    onChange?.(t);
                    V(t);
                    Y(false);
                }
            };
            a[23] = onChange;
            a[24] = U;
            a[25] = fe;
        } else {
            fe = a[25];
        }
        const onValueChange = fe;
        let he;
        if (a[26] !== K) {
            he = function(t) {
                const n = K ?? f[0];
                neRef.current.get(n)?.focus();
                ee(f.indexOf(K));
            };
            a[26] = K;
            a[27] = he;
        } else {
            he = a[27];
        }
        const ye = he;
        let Ce;
        if (a[28] === Symbol.for("react.memo_cache_sentinel")) {
            Ce = function(t) {
                o("WAWebStopEvent").stopEvent(t);
                oe();
            };
            a[28] = Ce;
        } else {
            Ce = a[28];
        }
        const be = Ce;
        let ve;
        if (a[29] === Symbol.for("react.memo_cache_sentinel")) {
            ve = function(t) {
                const e = t?.nativeEvent.target;
                const n = e instanceof HTMLElement && !!kRef.current && kRef.current.contains(e);
                if (n) {
                    oe();
                    o("WAWebStopEvent").stopEvent(t);
                }
            };
            a[29] = ve;
        } else {
            ve = a[29];
        }
        const Se = ve;
        let Re;
        if (a[30] === Symbol.for("react.memo_cache_sentinel")) {
            Re = function(t) {
                let e;
                const n = t?.nativeEvent.target;
                if (n instanceof Node && (e = kRef.current) != null && e.contains(n)) {
                    kRef.current?.initSelection(false);
                    o("WAWebStopEvent").stopEvent(t);
                }
            };
            a[30] = Re;
        } else {
            Re = a[30];
        }
        const Le = Re;
        let Ee;
        if (a[31] !== onFocusNext) {
            Ee = function(t) {
                o("WAWebStopEvent").stopEvent(t);
                if (IRef.current) {
                    if (document.activeElement !== IRef.current) {
                        return oe();
                    }
                    onFocusNext();
                }
            };
            a[31] = onFocusNext;
            a[32] = Ee;
        } else {
            Ee = a[32];
        }
        const tab = Ee;
        let Ie;
        if (a[33] !== onFocusPrev) {
            Ie = function(t) {
                o("WAWebStopEvent").stopEvent(t);
                if (IRef.current) {
                    if (document.activeElement !== IRef.current) {
                        return oe();
                    }
                    onFocusPrev();
                }
            };
            a[33] = onFocusPrev;
            a[34] = Ie;
        } else {
            Ie = a[34];
        }
        const Te = Ie;
        let De;
        if (a[35] !== onChange) {
            De = function(t) {
                z(true);
                if (t !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES) {
                    Q(t);
                }
                V(t === o("WAWebGifPanelGifSections").SECTIONS.FAVORITES ? "" : t);
                Y(true);
                onChange?.("");
                IRef.current?.focus();
            };
            a[35] = onChange;
            a[36] = De;
        } else {
            De = a[36];
        }
        const xe = De;
        let $e;
        if (a[37] !== Z || a[38] !== xe) {
            $e = function(t) {
                const e = f[Z];
                ee(-1);
                xe(e);
            };
            a[37] = Z;
            a[38] = xe;
            a[39] = $e;
        } else {
            $e = a[39];
        }
        const Pe = $e;
        let Ne;
        if (a[40] !== Z) {
            Ne = function(t) {
                const n = (Z + 1) % f.length;
                const r = f[n];
                neRef.current.get(r)?.focus();
                ee(n);
            };
            a[40] = Z;
            a[41] = Ne;
        } else {
            Ne = a[41];
        }
        const Me = Ne;
        let we;
        if (a[42] !== Z) {
            we = function(t) {
                const n = (f.length + Z - 1) % f.length;
                const r = f[n];
                neRef.current.get(r)?.focus();
                ee(n);
            };
            a[42] = Z;
            a[43] = we;
        } else {
            we = a[43];
        }
        const Ae = we;
        let Fe;
        if (a[44] === Symbol.for("react.memo_cache_sentinel")) {
            Fe = function(t) {
                oe();
                ee(-1);
            };
            a[44] = Fe;
        } else {
            Fe = a[44];
        }
        const Oe = Fe;
        const Be = displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel;
        let We;
        if (a[45] !== ye) {
            We = function(t) {
                if (t.key === "ArrowUp") {
                    ye();
                    return false;
                }
                if (t.key === "ArrowDown") {
                    kRef.current?.initSelection();
                    return false;
                }
            };
            a[45] = ye;
            a[46] = We;
        } else {
            We = a[46];
        }
        const qe = We;
        let Ue;
        if (a[47] !== onGif) {
            Ue = r("nullthrows")(onGif);
            a[47] = onGif;
            a[48] = Ue;
        } else {
            Ue = a[48];
        }
        const onGif_1 = Ue;
        let He;
        if (a[49] !== Te || a[50] !== tab) {
            He = {
                tab,
                "shift+tab": Te,
                up: Se,
                down: Le
            };
            a[49] = Te;
            a[50] = tab;
            a[51] = He;
        } else {
            He = a[51];
        }
        let Ge;
        if (a[52] !== Be || a[53] !== size) {
            Ge = ({
                0: "",
                2: "x1mf5yl2 x1cipttk x6ikm8r x10wlt62",
                1: "x1kaczmr",
                3: "x1cipttk x6ikm8r x10wlt62 x1kaczmr"
            })[!!(Be && size !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 1 | !!(Be && size !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 0];
            a[52] = Be;
            a[53] = size;
            a[54] = Ge;
        } else {
            Ge = a[54];
        }
        let renderSectionTab;
        if (a[55] !== displayLocation || a[56] !== Z || a[57] !== xe) {
            renderSectionTab = function(t, n) {
                const e = function(n) {
                    neRef.current.set(t, n);
                };
                const Component = r("WAWebGifPanelMenuSectionTab.react");
                return <Component key={t} onClick={xe} sectionId={t} selected={n} showFocusIndicator={Z !== -1} displayLocation={displayLocation} ref={e}/>;
            };
            a[55] = displayLocation;
            a[56] = Z;
            a[57] = xe;
            a[58] = renderSectionTab;
        } else {
            renderSectionTab = a[58];
        }
        let je;
        if (a[59] !== defaultSearchText) {
            je = defaultSearchText?.trim();
            a[59] = defaultSearchText;
            a[60] = je;
        } else {
            je = a[60];
        }
        const showTabHighlight = !je;
        let Qe;
        if (a[61] !== displayLocation || a[62] !== Pe || a[63] !== Me || a[64] !== Ae || a[65] !== K || a[66] !== renderSectionTab || a[67] !== showTabHighlight) {
            const Component = r("WAWebPanelsMenu.react");
            Qe = <Component selectedSectionId={K} sectionIds={f} renderSectionTab={renderSectionTab} displayLocation={displayLocation} showTabHighlight={showTabHighlight} onFocusPrev={Ae} onFocusNext={Me} onEnter={Pe} onFocusLeave={Oe}/>;
            a[61] = displayLocation;
            a[62] = Pe;
            a[63] = Me;
            a[64] = Ae;
            a[65] = K;
            a[66] = renderSectionTab;
            a[67] = showTabHighlight;
            a[68] = Qe;
        } else {
            Qe = a[68];
        }
        let Xe;
        if (a[69] === Symbol.for("react.memo_cache_sentinel")) {
            Xe = {
                className: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp x106tr1i"
            };
            a[69] = Xe;
        } else {
            Xe = a[69];
        }
        let Ye;
        if (a[70] !== Be) {
            Ye = ({
                0: {
                    className: "x1n2onr6 xhjsbib x5yr21d"
                },
                2: {
                    className: "x1n2onr6 x5yr21d x16w0wmm"
                },
                1: {
                    className: "x1n2onr6 xhjsbib x5yr21d xfl633f"
                },
                3: {
                    className: "x1n2onr6 x5yr21d x16w0wmm xfl633f"
                }
            })[!!Be << 1 | !!Be << 0];
            a[70] = Be;
            a[71] = Ye;
        } else {
            Ye = a[71];
        }
        let Je;
        if (a[72] === Symbol.for("react.memo_cache_sentinel")) {
            Je = s._("Search GIFs via {service}", [
                s._param("service", g)
            ]);
            a[72] = Je;
        } else {
            Je = a[72];
        }
        let Ze;
        if (a[73] !== qe || a[74] !== onValueChange || a[75] !== U) {
            const Component = r("WDSSearchBar.react");
            Ze = <div onMouseDown={o("WAWebStopEvent").stopPropagation} onMouseUp={o("WAWebStopEvent").stopPropagation} onFocus={o("WAWebStopEvent").stopPropagation}><Component hintText={Je} onValueChange={onValueChange} onKeyDown={qe} ref={IRef} value={U} xstyle={h.searchBarWrapper} testid="gif_panel_search_bar"/></div>;
            a[73] = qe;
            a[74] = onValueChange;
            a[75] = U;
            a[76] = Ze;
        } else {
            Ze = a[76];
        }
        let et;
        if (a[77] !== Be || a[78] !== size) {
            et = ({
                0: {
                    className: "x1n2onr6 x9f619 xl300f8 xexx8yu x1zti42 x4tejmo x1rife3k"
                },
                1: {
                    className: "x1n2onr6 x9f619 xexx8yu x1zti42 x4tejmo x1rife3k xjifopm"
                }
            })[!!(Be && size !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 0];
            a[77] = Be;
            a[78] = size;
            a[79] = et;
        } else {
            et = a[79];
        }
        const tt = U || "";
        let nt;
        if (a[80] !== tt) {
            let rt;
            if (a[82] === Symbol.for("react.memo_cache_sentinel")) {
                rt = /^\s+/;
                a[82] = rt;
            } else {
                rt = a[82];
            }
            nt = tt.replace(rt, "");
            a[80] = tt;
            a[81] = nt;
        } else {
            nt = a[81];
        }
        let ot;
        if (a[83] !== displayLocation || a[84] !== onGif_1 || a[85] !== K || a[86] !== nt) {
            const Component = o("WAWebGifPanelGifSearch.react").GifSearch;
            ot = <Component displayLocation={displayLocation} ref={kRef} onGif={onGif_1} searchText={nt} scrollGifIntoViewIfNeeded={scrollGifIntoViewIfNeeded} selectedSectionId={K}/>;
            a[83] = displayLocation;
            a[84] = onGif_1;
            a[85] = K;
            a[86] = nt;
            a[87] = ot;
        } else {
            ot = a[87];
        }
        let at;
        if (a[88] !== de || a[89] !== et || a[90] !== ot) {
            at = <div {...babelHelpers.extends({}, et, {
                onScroll: de,
                ref: TRef,
                children: ot
            })}/>;
            a[88] = de;
            a[89] = et;
            a[90] = ot;
            a[91] = at;
        } else {
            at = a[91];
        }
        let it;
        if (a[92] !== Ye || a[93] !== Ze || a[94] !== at) {
            it = <div {...babelHelpers.extends({}, Xe, {
                children: <div {...babelHelpers.extends({}, Ye, {
                    onMouseDown: be,
                    children: [
                        Ze,
                        at
                    ]
                })}/>
            })}/>;
            a[92] = Ye;
            a[93] = Ze;
            a[94] = at;
            a[95] = it;
        } else {
            it = a[95];
        }
        let lt;
        if (a[96] !== He || a[97] !== Ge || a[98] !== Qe || a[99] !== it) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            lt = <Component ref={ERef} handlers={He} className={Ge}>{Qe}{it}</Component>;
            a[96] = He;
            a[97] = Ge;
            a[98] = Qe;
            a[99] = it;
            a[100] = lt;
        } else {
            lt = a[100];
        }
        return lt;
    }
    l.default = YComponent;
}, 226);