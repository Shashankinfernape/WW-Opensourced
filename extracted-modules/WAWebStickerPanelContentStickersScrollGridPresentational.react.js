__d("WAWebStickerPanelContentStickersScrollGridPresentational.react", [
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebResizeObserver.react",
    "WAWebStickerPackPlaceholder",
    "WAWebStickerPanelContentStickerItem.react",
    "WAWebStickersScrollGridPresentationalStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useImperativeHandle, useRef, useState } = c;
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(72);
        const { displayLocation, loadOneRow, onFocusPrev, onScroll, onStickerClick, onStickerEnter, ref, resetScroll, selectedTab, stickers, theme } = t;
        const I = loadOneRow === undefined ? false : loadOneRow;
        const TRef = useRef();
        const D = r("useLazyRef")(C);
        let x;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            x = new Set;
            n[0] = x;
        } else {
            x = n[0];
        }
        const $RefRef = useRef(x);
        let P;
        if (n[1] !== displayLocation) {
            P = R(displayLocation);
            n[1] = displayLocation;
            n[2] = P;
        } else {
            P = n[2];
        }
        const N = useState(P);
        const M = N[0];
        const w = N[1];
        let A;
        if (n[3] !== M || n[4] !== stickers.length) {
            A = function() {
                return Math.ceil(stickers.length / M);
            };
            n[3] = M;
            n[4] = stickers.length;
            n[5] = A;
        } else {
            A = n[5];
        }
        const F = useState(A);
        const O = F[0];
        const B = F[1];
        const W = useState(stickers.length);
        const q = W[0];
        const U = W[1];
        if (q !== stickers.length) {
            U(stickers.length);
            B(Math.ceil(stickers.length / M));
        }
        const VRef = useRef();
        let H;
        if (n[6] !== D) {
            H = function() {
                return {
                    focus: function(t) {
                        const D_current = D.current;
                        let n = t || 0;
                        n = Math.min(n, D_current.size);
                        n = Math.max(n, 0);
                        const r = D_current.get(n);
                        if (r) {
                            r.focus();
                        }
                    },
                    scrollToTop: function() {
                        const TRef_current = TRef.current;
                        if (TRef_current) {
                            TRef_current.scrollTop = 0;
                        }
                    }
                };
            };
            n[6] = D;
            n[7] = H;
        } else {
            H = n[7];
        }
        useImperativeHandle(ref, H);
        let G;
        if (n[8] !== D) {
            G = function() {
                const D_current = D.current;
                const t = D_current.get(0);
                if (t == null) {
                    w(1);
                    return;
                }
                const n = t.getOffsetTop();
                for(let r = D_current.size, o = 0; o < r; o++){
                    const a = D_current.get(o);
                    if (a && a.getOffsetTop() !== n) {
                        w(o);
                        return;
                    }
                }
                w(D_current.size);
            };
            n[8] = D;
            n[9] = G;
        } else {
            G = n[9];
        }
        const onResize = G;
        let j;
        let K;
        if (n[10] !== displayLocation || n[11] !== stickers) {
            j = function() {
                const VRef_current = VRef.current;
                VRef.current = stickers;
                const t = new Set((VRef_current ?? []).map(y));
                const n = stickers.filter((e)=>t.has(e.id));
                if (n.length !== stickers.length && VRef_current !== stickers) {
                    $RefRef.current = new Set(n.map(h));
                    const r = VRef_current?.length === stickers.length;
                    if (r) {
                        B(v(displayLocation));
                    }
                }
            };
            K = [
                stickers,
                displayLocation
            ];
            n[10] = displayLocation;
            n[11] = stickers;
            n[12] = j;
            n[13] = K;
        } else {
            j = n[12];
            K = n[13];
        }
        useEffect(j, K);
        let Q;
        if (n[14] !== D) {
            Q = function() {
                const D_current = D.current;
                for(let t = D_current.size, n = 0; n < t; n++){
                    const r = D_current.get(n);
                    if (r && r.hasFocus()) {
                        return n;
                    }
                }
                return -1;
            };
            n[14] = D;
            n[15] = Q;
        } else {
            Q = n[15];
        }
        const X = Q;
        let Y;
        if (n[16] !== X || n[17] !== M || n[18] !== onFocusPrev || n[19] !== resetScroll || n[20] !== D) {
            Y = function(t) {
                if (t !== 0) {
                    const e = X();
                    if (e !== -1) {
                        let n = e + t;
                        if (n < 0) {
                            onFocusPrev?.();
                            return;
                        }
                        const r = TRef.current;
                        if (n < M && r != null && r.parentElement) {
                            r.parentElement.scrollTop = 0;
                            if (resetScroll != null) {
                                resetScroll();
                            }
                        }
                        const o = D.current;
                        n = Math.min(n, o.size - 1);
                        const a = o.get(n);
                        if (a) {
                            a.focus();
                        }
                    }
                }
            };
            n[16] = X;
            n[17] = M;
            n[18] = onFocusPrev;
            n[19] = resetScroll;
            n[20] = D;
            n[21] = Y;
        } else {
            Y = n[21];
        }
        const J = Y;
        let Z;
        if (n[22] !== J) {
            Z = function(t) {
                J(0 - t);
            };
            n[22] = J;
            n[23] = Z;
        } else {
            Z = n[23];
        }
        const ee = Z;
        let te;
        if (n[24] !== X || n[25] !== J || n[26] !== M || n[27] !== D) {
            te = function(t) {
                t.stopPropagation();
                t.preventDefault();
                const e = X();
                const D_current = D.current;
                const r = Math.min(e + M, D_current.size - 1);
                const o = Math.floor(e / M);
                const a = Math.floor(r / M);
                if (o !== a) {
                    J(M);
                }
            };
            n[24] = X;
            n[25] = J;
            n[26] = M;
            n[27] = D;
            n[28] = te;
        } else {
            te = n[28];
        }
        const ne = te;
        let re;
        if (n[29] !== ee) {
            re = function(t) {
                t.stopPropagation();
                t.preventDefault();
                ee(1);
            };
            n[29] = ee;
            n[30] = re;
        } else {
            re = n[30];
        }
        const oe = re;
        let ae;
        if (n[31] !== J) {
            ae = function(t) {
                t.stopPropagation();
                t.preventDefault();
                J(1);
            };
            n[31] = J;
            n[32] = ae;
        } else {
            ae = n[32];
        }
        const ie = ae;
        let le;
        if (n[33] !== ee || n[34] !== M) {
            le = function(t) {
                t.stopPropagation();
                t.preventDefault();
                ee(M);
            };
            n[33] = ee;
            n[34] = M;
            n[35] = le;
        } else {
            le = n[35];
        }
        const se = le;
        let ue;
        if (n[36] !== onScroll) {
            ue = function(t) {
                const TRef_current = TRef.current;
                if (TRef_current) {
                    if (onScroll != null) {
                        onScroll(TRef_current);
                    }
                }
            };
            n[36] = onScroll;
            n[37] = ue;
        } else {
            ue = n[37];
        }
        const ce = ue;
        let de;
        if (n[38] !== displayLocation || n[39] !== M || n[40] !== onResize || n[41] !== O) {
            de = function(t) {
                if (t != null) {
                    $RefRef.current.add(t);
                    if ($RefRef.current.size >= O * M) {
                        B(O + S(displayLocation));
                    }
                    onResize();
                }
            };
            n[38] = displayLocation;
            n[39] = M;
            n[40] = onResize;
            n[41] = O;
            n[42] = de;
        } else {
            de = n[42];
        }
        const onDownload = de;
        let pe;
        if (n[43] !== I || n[44] !== M || n[45] !== O || n[46] !== stickers) {
            pe = I ? stickers.slice(0, M * O) : stickers;
            n[43] = I;
            n[44] = M;
            n[45] = O;
            n[46] = stickers;
            n[47] = pe;
        } else {
            pe = n[47];
        }
        const _e = pe;
        let fe;
        if (n[48] !== displayLocation || n[49] !== onStickerClick || n[50] !== onStickerEnter || n[51] !== selectedTab || n[52] !== onDownload || n[53] !== D || n[54] !== _e) {
            fe = _e.map((sticker, t)=>{
                const D_current = D.current;
                const key = sticker.isPlaceholder || sticker.isCreateButton || sticker.id == null ? `${o("WAWebStickerPackPlaceholder").PRE_PLACEHOLDER_ID}${t}` : sticker.id;
                const Component = r("WAWebStickerPanelContentStickerItem.react");
                const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
                return <Component_1 key={key} name="sticker-item"><Component onClick={onStickerClick} onEnter={onStickerEnter} onDownload={onDownload} ref={function(r) {
                    if (r) {
                        D_current.set(t, r);
                    } else {
                        D_current.delete(t);
                    }
                }} selectedTab={selectedTab} sticker={sticker} downloadErrorShouldThrow={false} theme={displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? "stickerExpressionsPanel" : undefined}/></Component_1>;
            });
            n[48] = displayLocation;
            n[49] = onStickerClick;
            n[50] = onStickerEnter;
            n[51] = selectedTab;
            n[52] = onDownload;
            n[53] = D;
            n[54] = _e;
            n[55] = fe;
        } else {
            fe = n[55];
        }
        const ge = fe;
        let he;
        if (n[56] === Symbol.for("react.memo_cache_sentinel")) {
            he = (e || (e = r("stylex")))(o("WAWebStickersScrollGridPresentationalStyles").stickersScrollGridPresentationalStyles.fullHeight);
            n[56] = he;
        } else {
            he = n[56];
        }
        let ye;
        if (n[57] !== theme) {
            ye = (e || (e = r("stylex")))(o("WAWebStickersScrollGridPresentationalStyles").stickersScrollGridPresentationalStyles.container, theme === "searchable" && o("WAWebStickersScrollGridPresentationalStyles").stickersScrollGridPresentationalStyles.unscrollable);
            n[57] = theme;
            n[58] = ye;
        } else {
            ye = n[58];
        }
        let Ce;
        if (n[59] !== ne || n[60] !== oe || n[61] !== ie || n[62] !== se) {
            Ce = {
                up: se,
                down: ne,
                left: oe,
                right: ie
            };
            n[59] = ne;
            n[60] = oe;
            n[61] = ie;
            n[62] = se;
            n[63] = Ce;
        } else {
            Ce = n[63];
        }
        let be;
        if (n[64] !== ce || n[65] !== ge || n[66] !== ye || n[67] !== Ce) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            be = <Component ref={TRef} className={ye} handlers={Ce} onScroll={ce}>{ge}</Component>;
            n[64] = ce;
            n[65] = ge;
            n[66] = ye;
            n[67] = Ce;
            n[68] = be;
        } else {
            be = n[68];
        }
        let ve;
        if (n[69] !== onResize || n[70] !== be) {
            const Component = r("WAWebResizeObserver.react");
            ve = <Component onResize={onResize} className={he}>{be}</Component>;
            n[69] = onResize;
            n[70] = be;
            n[71] = ve;
        } else {
            ve = n[71];
        }
        return ve;
    }
    function h(e) {
        return e.id;
    }
    function y(e) {
        return e.id;
    }
    function C() {
        return new Map;
    }
    const b = GComponent;
    function v(displayLocation) {
        if (displayLocation !== o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) {
            return 2;
        }
        return 4;
    }
    function S(displayLocation) {
        if (displayLocation !== o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) {
            return 2;
        }
        return 3;
    }
    function R(displayLocation) {
        if (displayLocation !== o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) {
            return 6;
        }
        return 3;
    }
    l.StickersScrollGridPresentational = b;
}, 98);