__d("WAWebImg.react", [
    "WAAbortError",
    "WAFilteredCatch",
    "WAWebCopyPasteSelectable.react",
    "WAWebImgPlaceholderConst",
    "WAWebImgRetry",
    "WAWebImgRetryQueue",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebServerErrors",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect: d, useRef: m, useState: p } = c;
    const _ = new (r("WAWebImgRetryQueue"));
    function f(t) {
        const n = o("react-compiler-runtime").c(2);
        const a = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { alt: l, className: s, crossOrigin: c, disableContextMenu: f, draggable: y, hasPrivacyChecks: C, noXHR: b, onBlur: v, onClick: S, onError: R, onFocus: L, onLoad: E, onMouseMove: k, plainText: I, renderError: T, renderLoading: D, selectable: x, style: $ } = i;
        const P = c === void 0 ? true : c;
        const N = f === void 0 ? false : f;
        const M = C === void 0 ? true : C;
        const w = b === void 0 ? false : b;
        const A = m(null);
        const F = r("useMergeRefs")(a, A);
        const O = m(null);
        const B = p(i.src);
        const W = B[0];
        const q = B[1];
        const U = p(true);
        const V = U[0];
        const H = U[1];
        const G = p(null);
        const z = G[0];
        const j = G[1];
        const K = p(true);
        const Q = K[0];
        const X = K[1];
        const Y = r("useWAWebUnmountSignal")();
        if (i.src !== W) {
            q(i.src);
            H(true);
        }
        const J = function(t) {
            if (N) {
                t.preventDefault();
            }
        };
        const Z = function(t) {
            H(false);
            if (W == null || W === "" || !h(W)) {
                j(t.error);
                return;
            }
            const e = O.current;
            let n;
            if (e) {
                if (g(e, i)) {
                    if (!e.noXHR) {
                        return;
                    }
                    n = e;
                } else {
                    const a = e.release();
                    if (a) {
                        _.remove(e);
                    }
                    n = new (r("WAWebImgRetry"))({
                        crossOrigin: P,
                        hasPrivacyChecks: M,
                        noXHR: w,
                        src: W
                    });
                }
            } else {
                n = new (r("WAWebImgRetry"))({
                    crossOrigin: P,
                    hasPrivacyChecks: M,
                    noXHR: w,
                    src: W
                });
            }
            O.current = n;
            const l = _.enqueue(n);
            l.then(()=>{
                if (n === n) {
                    if (!Y.aborted) {
                        H(true);
                    }
                }
            }).catch(o("WAFilteredCatch").filteredCatch([
                o("WAWebServerErrors").ServerStatusError,
                o("WAWebMiscErrors").GaveUpRetry
            ], function(e) {
                if (n === n) {
                    if (!Y.aborted) {
                        H(false);
                        j(e);
                        if (R) {
                            R(e);
                        }
                    }
                }
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").Unmount, r("WAWebNoop"))).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
        };
        const ee = function(t) {
            if (t.currentTarget.tagName === "IMG") {
                const e = A.current;
                if (e != null && e.complete) {
                    e.style.visibility = "visible";
                }
                if (E) {
                    E(t);
                }
                X(false);
            }
        };
        let te;
        if (n[0] !== W) {
            te = [
                W
            ];
            n[0] = W;
            n[1] = te;
        } else {
            te = n[1];
        }
        d(function() {
            if (!(W == null || W === "")) {
                const e = A.current;
                if (e && !e.complete) {
                    e.style.visibility = "hidden";
                }
                return function() {
                    const e = O.current;
                    if (e) {
                        const t = e.release();
                        if (t) {
                            _.remove(e);
                        }
                    }
                };
            }
        }, te);
        if (z && T) {
            return T(z);
        }
        const ne = !!(V && W);
        const Component = o("WAWebCopyPasteSelectable.react").SelectableImg;
        return <><Component onFocus={L} onBlur={v} ref={F} plainText={I || ""} selectable={!!x} crossOrigin={P ? "anonymous" : void 0} onError={ne ? Z : r("WAWebNoop")} onLoad={ne ? ee : r("WAWebNoop")} src={ne && W != null ? W : o("WAWebImgPlaceholderConst").ONE_BY_ONE_TRANS_GIF} alt={l} className={s} draggable={y} data-ellipsifiable={i.ellipsifiable === true ? "true" : void 0} onClick={S} onMouseMove={k} style={$} onContextMenu={J} data-testid={i.testid}/>{Q && D?.()}</>;
    }
    function g(e, t) {
        return e.src === t.src && e.crossOrigin === t.crossOrigin && e.noXHR === t.noXHR && e.hasPrivacyChecks === t.hasPrivacyChecks;
    }
    function h(e) {
        return e[0] === "/" || r("WAWebURLUtils").isHttp(e);
    }
    l.default = f;
}, 98);