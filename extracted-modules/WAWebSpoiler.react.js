__d("WAWebSpoiler.react", [
    "fbt",
    "WAWebSpoilerParticlesCanvas.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useRef, useState } = c;
    function Component(e) {
        const t = o("react-compiler-runtime").c(30);
        const { children, interactive, onReveal } = e;
        const l = interactive === undefined ? true : interactive;
        const c = useState(false);
        const d = c[0];
        const _ = c[1];
        const f = useState(null);
        const dismissCoords = f[0];
        const h = f[1];
        const yRef = useRef(false);
        let C;
        if (t[0] !== onReveal) {
            C = function() {
                if (!yRef.current) {
                    yRef.current = true;
                    _(true);
                    if (onReveal != null) {
                        onReveal();
                    }
                }
            };
            t[0] = onReveal;
            t[1] = C;
        } else {
            C = t[1];
        }
        const b = C;
        let v;
        if (t[2] !== b) {
            v = function(t) {
                t.preventDefault();
                t.stopPropagation();
                h({
                    clientX: t.clientX,
                    clientY: t.clientY
                });
                b();
            };
            t[2] = b;
            t[3] = v;
        } else {
            v = t[3];
        }
        const onClickCapture = v;
        let R;
        if (t[4] !== b) {
            R = function(t) {
                if (t.target === t.currentTarget && (t.key === "Enter" || t.key === " ")) {
                    t.preventDefault();
                    t.stopPropagation();
                    b();
                }
            };
            t[4] = b;
            t[5] = R;
        } else {
            R = t[5];
        }
        const onKeyDown = R;
        let E;
        if (t[6] !== d) {
            E = ({
                0: {
                    className: "xg01cxk x47corl x5h36tt x1fbs3r x19991ni x9lcvmn"
                },
                1: {
                    className: "x5h36tt x1fbs3r x19991ni x9lcvmn x1hc1fzr x67bb7w"
                }
            })[!!d << 0];
            t[6] = d;
            t[7] = E;
        } else {
            E = t[7];
        }
        let k;
        if (t[8] !== children || t[9] !== E) {
            k = <span {...babelHelpers.extends({}, E, {
                children
            })}/>;
            t[8] = children;
            t[9] = E;
            t[10] = k;
        } else {
            k = t[10];
        }
        let I;
        if (t[11] !== dismissCoords || t[12] !== d) {
            I = u.jsx(r("WAWebSpoilerParticlesCanvas.react"), {
                revealed: d,
                dismissCoords
            });
            t[11] = dismissCoords;
            t[12] = d;
            t[13] = I;
        } else {
            I = t[13];
        }
        let T;
        if (t[14] !== k || t[15] !== I) {
            T = <>{k}{I}</>;
            t[14] = k;
            t[15] = I;
            t[16] = T;
        } else {
            T = t[16];
        }
        const D = T;
        if (d) {
            let x;
            if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
                x = {
                    className: "xbrszos xea3l6g x2q3nzr x18isctg xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 xjbqb8w x1heor9g xt0e3qv x1kxipp6"
                };
                t[17] = x;
            } else {
                x = t[17];
            }
            let $;
            if (t[18] !== D) {
                $ = <span {...babelHelpers.extends({
                    "data-spoiler": "revealed",
                    "data-testid": "spoiler"
                }, x, {
                    children: D
                })}/>;
                t[18] = D;
                t[19] = $;
            } else {
                $ = t[19];
            }
            return $;
        }
        if (l) {
            let P;
            if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
                P = s._("Hidden spoiler. Click to reveal.");
                t[20] = P;
            } else {
                P = t[20];
            }
            let N;
            if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
                N = {
                    className: "xjbqb8w xbrszos xea3l6g x2q3nzr x18isctg x19co3pv x1ypdohk xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 x87ps6o"
                };
                t[21] = N;
            } else {
                N = t[21];
            }
            let M;
            if (t[22] !== onClickCapture || t[23] !== onKeyDown || t[24] !== D) {
                M = <span {...babelHelpers.extends({
                    "data-spoiler": "true",
                    "data-testid": "spoiler",
                    role: "button",
                    tabIndex: 0,
                    "aria-label": P,
                    onClickCapture,
                    onKeyDown
                }, N, {
                    children: D
                })}/>;
                t[22] = onClickCapture;
                t[23] = onKeyDown;
                t[24] = D;
                t[25] = M;
            } else {
                M = t[25];
            }
            return M;
        }
        let w;
        let A;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            A = s._("Hidden spoiler.");
            w = {
                className: "xjbqb8w xbrszos xea3l6g x2q3nzr x18isctg x19co3pv xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 x87ps6o xt0e3qv"
            };
            t[26] = w;
            t[27] = A;
        } else {
            w = t[26];
            A = t[27];
        }
        let F;
        if (t[28] !== D) {
            F = <span {...babelHelpers.extends({
                "data-spoiler": "true",
                "data-testid": "spoiler",
                role: "img",
                "aria-label": A
            }, w, {
                children: D
            })}/>;
            t[28] = D;
            t[29] = F;
        } else {
            F = t[29];
        }
        return F;
    }
    l.default = Component;
}, 226);