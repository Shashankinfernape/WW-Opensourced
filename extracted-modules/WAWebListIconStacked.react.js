__d("WAWebListIconStacked.react", [
    "WAWebLabelCollection",
    "WAWebListUtils",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 2;
    const d = 12;
    const m = 9;
    const p = {
        container: {
            display: "x3nfvp2",
            alignItems: "x6s0dn4",
            position: "x1n2onr6",
            flexShrink: "x2lah0s",
            $$css: true
        }
    };
    function Component(t) {
        const n = o("react-compiler-runtime").c(38);
        const { colorOverrides, horizontalOffset, labelIds, size, xstyle } = t;
        const left = horizontalOffset === undefined ? m : horizontalOffset;
        const h = size === undefined ? d : size;
        if (labelIds.length === 0) {
            return null;
        }
        let y;
        let C;
        if (n[0] !== colorOverrides || n[1] !== labelIds) {
            C = Symbol.for("react.early_return_sentinel");
            e: {
                const b = f(labelIds, colorOverrides);
                if (b.length === 0) {
                    C = null;
                    break e;
                }
                y = b.slice(0, c);
            }
            n[0] = colorOverrides;
            n[1] = labelIds;
            n[2] = y;
            n[3] = C;
        } else {
            y = n[2];
            C = n[3];
        }
        if (C !== Symbol.for("react.early_return_sentinel")) {
            return C;
        }
        const v = y;
        const S = v.length === 1 ? h : h + (v.length - 1) * left;
        if (v.length === 1) {
            let R;
            if (n[4] !== xstyle) {
                R = (e || (e = r("stylex"))).props(p.container, xstyle);
                n[4] = xstyle;
                n[5] = R;
            } else {
                R = n[5];
            }
            let L;
            if (n[6] !== h || n[7] !== S) {
                L = {
                    width: S,
                    height: h
                };
                n[6] = h;
                n[7] = S;
                n[8] = L;
            } else {
                L = n[8];
            }
            let E;
            if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
                E = {
                    className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo"
                };
                n[9] = E;
            } else {
                E = n[9];
            }
            let k;
            if (n[10] !== h || n[11] !== v[0]) {
                k = <span {...babelHelpers.extends({}, E, {
                    style: {
                        backgroundColor: v[0],
                        width: h,
                        height: h,
                        left: 0
                    }
                })}/>;
                n[10] = h;
                n[11] = v[0];
                n[12] = k;
            } else {
                k = n[12];
            }
            let I;
            if (n[13] !== R || n[14] !== L || n[15] !== k) {
                I = <span {...babelHelpers.extends({
                    "data-testid": "list-icon-stacked"
                }, R, {
                    style: L,
                    children: k
                })}/>;
                n[13] = R;
                n[14] = L;
                n[15] = k;
                n[16] = I;
            } else {
                I = n[16];
            }
            return I;
        }
        const T = h / 2 - left;
        const D = h / 2;
        const x = h / 2 + 2.5;
        let $;
        if (n[17] !== xstyle) {
            $ = (e || (e = r("stylex"))).props(p.container, xstyle);
            n[17] = xstyle;
            n[18] = $;
        } else {
            $ = n[18];
        }
        let P;
        if (n[19] !== h || n[20] !== S) {
            P = {
                width: S,
                height: h
            };
            n[19] = h;
            n[20] = S;
            n[21] = P;
        } else {
            P = n[21];
        }
        let N;
        if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk x1vjfegm"
            };
            n[22] = N;
        } else {
            N = n[22];
        }
        const maskImage = `radial-gradient(circle at ${T}px ${D}px, transparent 0, transparent ${x}px, black ${x}px)`;
        const WebkitMaskImage = `radial-gradient(circle at ${T}px ${D}px, transparent 0, transparent ${x}px, black ${x}px)`;
        let A;
        if (n[23] !== left || n[24] !== h || n[25] !== maskImage || n[26] !== WebkitMaskImage || n[27] !== v[1]) {
            A = <span {...babelHelpers.extends({}, N, {
                style: {
                    backgroundColor: v[1],
                    width: h,
                    height: h,
                    left,
                    maskImage,
                    WebkitMaskImage
                }
            })}/>;
            n[23] = left;
            n[24] = h;
            n[25] = maskImage;
            n[26] = WebkitMaskImage;
            n[27] = v[1];
            n[28] = A;
        } else {
            A = n[28];
        }
        let F;
        if (n[29] === Symbol.for("react.memo_cache_sentinel")) {
            F = {
                className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo"
            };
            n[29] = F;
        } else {
            F = n[29];
        }
        let O;
        if (n[30] !== h || n[31] !== v[0]) {
            O = <span {...babelHelpers.extends({}, F, {
                style: {
                    backgroundColor: v[0],
                    width: h,
                    height: h,
                    left: 0
                }
            })}/>;
            n[30] = h;
            n[31] = v[0];
            n[32] = O;
        } else {
            O = n[32];
        }
        let B;
        if (n[33] !== A || n[34] !== O || n[35] !== $ || n[36] !== P) {
            B = <span {...babelHelpers.extends({
                "data-testid": "list-icon-stacked"
            }, $, {
                style: P,
                children: [
                    A,
                    O
                ]
            })}/>;
            n[33] = A;
            n[34] = O;
            n[35] = $;
            n[36] = P;
            n[37] = B;
        } else {
            B = n[37];
        }
        return B;
    }
    function f(labelIds, colorOverrides) {
        const n = [].concat(labelIds).filter((e)=>!Number.isNaN(parseInt(e, 10))).sort((e, t)=>parseInt(t, 10) - parseInt(e, 10));
        const r = n.length >= c ? n : labelIds;
        const a = [];
        for (const i of r){
            if (a.length >= c) {
                break;
            }
            const l = colorOverrides?.get(i);
            if (l != null) {
                a.push(l);
                continue;
            }
            const s = o("WAWebLabelCollection").LabelCollection.get(i);
            if (s != null) {
                const u = s.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(s.colorIndex) : s.color;
                if (u != null) {
                    a.push(u);
                }
            }
        }
        return a;
    }
    l.default = Component;
}, 98);