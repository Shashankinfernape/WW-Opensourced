__d("useWAWebRenderCallbacks", [
    "WAAbortError",
    "WAFilteredCatch",
    "WAWebDocumentFlushed",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useLayoutEffect: c, useRef: d } = s;
    function m(e) {
        let t;
        const n = o("react-compiler-runtime").c(11);
        const a = d(null);
        const i = r("useWAWebUnmountSignal")();
        const l = (t = r("useWAWebStableCallback"))(e.onDOMCommit);
        const s = t(e.onMount);
        const m = t(e.onBeforePaint);
        const p = t(e.onAfterPaint);
        const _ = t(e.onUnmount);
        const f = t(e.onError);
        let g;
        let h;
        if (n[0] !== p || n[1] !== m || n[2] !== f || n[3] !== s || n[4] !== _ || n[5] !== i) {
            g = function() {
                s();
                a.current = window.requestAnimationFrame(function() {
                    a.current = null;
                    m();
                });
                o("WAWebDocumentFlushed").documentFlushed({
                    signal: i
                }).then(()=>{
                    if (!i.aborted) {
                        p();
                    }
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAAbortError").AbortError, f));
                return function() {
                    if (a.current != null) {
                        window.cancelAnimationFrame(a.current);
                    }
                    _();
                };
            };
            h = [
                s,
                m,
                p,
                _,
                f,
                i
            ];
            n[0] = p;
            n[1] = m;
            n[2] = f;
            n[3] = s;
            n[4] = _;
            n[5] = i;
            n[6] = g;
            n[7] = h;
        } else {
            g = n[6];
            h = n[7];
        }
        u(g, h);
        let y;
        let C;
        if (n[8] !== l) {
            y = function() {
                l();
            };
            C = [
                l
            ];
            n[8] = l;
            n[9] = y;
            n[10] = C;
        } else {
            y = n[9];
            C = n[10];
        }
        c(y, C);
    }
    l.default = m;
}, 98);