__d("WAWebMediaStateControlDownload.react", [
    "WAWebL10nFilesize",
    "WAWebMediaStateControlSharedStyles",
    "WDSIconIcDownload.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef } = c;
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(18);
        const { filesize, onClick, ref, tabIndex } = t;
        const c = filesize === undefined ? 0 : filesize;
        const tabIndex_1 = tabIndex === undefined ? 0 : tabIndex;
        const _RefRef = useRef();
        let f;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                return {
                    getElement: function() {
                        return _RefRef.current;
                    }
                };
            };
            n[0] = f;
        } else {
            f = n[0];
        }
        useImperativeHandle(ref, f);
        if (c > 0) {
            let g;
            if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
                g = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls);
                n[1] = g;
            } else {
                g = n[1];
            }
            let h;
            if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
                h = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").btnMeta, r("WAWebMediaStateControlSharedStyles").cursorPointer);
                n[2] = h;
            } else {
                h = n[2];
            }
            let y;
            if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
                y = u.jsx(r("WDSIconIcDownload.react"), {
                    xstyle: r("WAWebMediaStateControlSharedStyles").iconMeta
                });
                n[3] = y;
            } else {
                y = n[3];
            }
            let C;
            if (n[4] !== c) {
                C = o("WAWebL10nFilesize").getL10nFilesize(c);
                n[4] = c;
                n[5] = C;
            } else {
                C = n[5];
            }
            let b;
            if (n[6] !== C) {
                b = <span>{C}</span>;
                n[6] = C;
                n[7] = b;
            } else {
                b = n[7];
            }
            let v;
            if (n[8] !== onClick || n[9] !== b || n[10] !== tabIndex_1) {
                v = <div {...babelHelpers.extends({
                    ref: _RefRef
                }, g, {
                    "data-testid": "media-state-download",
                    children: <button {...babelHelpers.extends({
                        tabIndex: tabIndex_1
                    }, h, {
                        onClick,
                        children: [
                            y,
                            b
                        ]
                    })}/>
                })}/>;
                n[8] = onClick;
                n[9] = b;
                n[10] = tabIndex_1;
                n[11] = v;
            } else {
                v = n[11];
            }
            return v;
        }
        let S;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            S = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls);
            n[12] = S;
        } else {
            S = n[12];
        }
        let R;
        if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
            R = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").button, r("WAWebMediaStateControlSharedStyles").cursorPointer);
            n[13] = R;
        } else {
            R = n[13];
        }
        let L;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            L = u.jsx(r("WDSIconIcDownload.react"), {});
            n[14] = L;
        } else {
            L = n[14];
        }
        let E;
        if (n[15] !== onClick || n[16] !== tabIndex_1) {
            E = <div {...babelHelpers.extends({
                ref: _RefRef
            }, S, {
                "data-testid": "media-state-download",
                children: <button {...babelHelpers.extends({
                    tabIndex: tabIndex_1
                }, R, {
                    onClick,
                    children: L
                })}/>
            })}/>;
            n[15] = onClick;
            n[16] = tabIndex_1;
            n[17] = E;
        } else {
            E = n[17];
        }
        return E;
    }
    l.default = PComponent;
}, 98);