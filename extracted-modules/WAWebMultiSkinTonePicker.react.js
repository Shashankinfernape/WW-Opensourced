__d("WAWebMultiSkinTonePicker.react", [
    "WAWebEmojiPickerOption.react",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { Children, useState } = u;
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(43);
        const { action, base, children, preVariant, unicode } = e;
        const m = Children.toArray(children);
        let p;
        if (t[0] !== children) {
            const _ = Children.count(children);
            p = Math.sqrt(_);
            t[0] = children;
            t[1] = p;
        } else {
            p = t[1];
        }
        const f = p;
        let g;
        if (t[2] !== f) {
            g = function(t, n) {
                return n % f === Math.floor(n / f);
            };
            t[2] = f;
            t[3] = g;
        } else {
            g = t[3];
        }
        const h = m.filter(g);
        const y = m.indexOf(preVariant);
        const C = useState(y === -1 ? null : Math.floor(y / f));
        const b = C[0];
        const v = C[1];
        const S = useState(y === -1 ? null : y % f);
        const R = S[0];
        const L = S[1];
        const E = useState(b != null && R != null ? b * f + R : null);
        const k = E[0];
        const I = E[1];
        let T;
        if (t[4] !== R || t[5] !== f) {
            T = function(t, n) {
                o("WAWebStopEvent").stopEvent(t);
                v(n);
                if (R != null) {
                    I(n * f + R);
                } else {
                    I(n * f);
                }
                return false;
            };
            t[4] = R;
            t[5] = f;
            t[6] = T;
        } else {
            T = t[6];
        }
        const D = T;
        let x;
        if (t[7] !== b || t[8] !== f) {
            x = function(t, n) {
                o("WAWebStopEvent").stopEvent(t);
                L(n);
                if (b != null) {
                    I(b * f + n);
                } else {
                    I(n);
                }
                return false;
            };
            t[7] = b;
            t[8] = f;
            t[9] = x;
        } else {
            x = t[9];
        }
        const $ = x;
        let P;
        if (t[10] !== action || t[11] !== b || t[12] !== preVariant || t[13] !== R) {
            P = function(t, r, o) {
                if (b == null && R == null) {
                    return false;
                }
                if (o === r || o === preVariant) {
                    action(t, r, o);
                    return true;
                }
                if (b == null || R == null) {
                    return false;
                }
                return action(t, r, o);
            };
            t[10] = action;
            t[11] = b;
            t[12] = preVariant;
            t[13] = R;
            t[14] = P;
        } else {
            P = t[14];
        }
        const N = P;
        const M = ()=>{
            if (k == null) {
                return s.jsx(r("WAWebEmojiPickerOption.react"), {
                    base,
                    action: function(t) {
                        return N(t, unicode, preVariant);
                    },
                    emoji: preVariant,
                    testid: "preview-none"
                });
            }
            if (b != null && R != null) {
                return s.jsx(r("WAWebEmojiPickerOption.react"), {
                    base,
                    action: function(t) {
                        return N(t, unicode, m[k]);
                    },
                    emoji: m[k],
                    testid: "preview-complete"
                });
            }
            return s.jsx(r("WAWebEmojiPickerOption.react"), {
                base,
                leftEmojiVariation: b != null && R == null,
                rightEmojiVariation: b == null && R != null,
                emoji: m[k],
                testid: "preview-partial"
            });
        };
        let w;
        let A;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            w = {
                className: "x1oysuqx x78zum5 xdt5ytf xl56j7k xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl"
            };
            A = {
                className: "x78zum5 x1a02dak x1qughib x1ncir08 xkgu5aw xdj266r x16q7b9a xat24cr x1sbwfh8"
            };
            t[15] = w;
            t[16] = A;
        } else {
            w = t[15];
            A = t[16];
        }
        let F;
        if (t[17] !== base || t[18] !== D || t[19] !== b) {
            F = function(t, n) {
                return s.jsx(r("WAWebEmojiPickerOption.react"), {
                    testid: `left-option-${n}`,
                    base,
                    leftEmojiVariation: true,
                    action: function(t) {
                        return D(t, n);
                    },
                    emoji: t,
                    selected: n === b
                }, t + n);
            };
            t[17] = base;
            t[18] = D;
            t[19] = b;
            t[20] = F;
        } else {
            F = t[20];
        }
        let O;
        if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
            O = {
                className: "x78zum5 x1a02dak x1qughib x1ncir08 xkgu5aw xdj266r x16q7b9a xat24cr x1sbwfh8"
            };
            t[21] = O;
        } else {
            O = t[21];
        }
        let B;
        if (t[22] !== base || t[23] !== $ || t[24] !== R) {
            B = function(t, n) {
                return s.jsx(r("WAWebEmojiPickerOption.react"), {
                    testid: `right-option-${n}`,
                    base,
                    rightEmojiVariation: true,
                    selected: n === R,
                    action: function(t) {
                        return $(t, n);
                    },
                    emoji: t
                }, t + n);
            };
            t[22] = base;
            t[23] = $;
            t[24] = R;
            t[25] = B;
        } else {
            B = t[25];
        }
        let W;
        let q;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            W = {
                className: "x78zum5 x1q0g3np xaw8158 x109j2v6 x1ktv7sr x13fuv20 x1uebkx7"
            };
            q = {
                className: "x1691je0 x2b8uid x1j8ymqv"
            };
            t[26] = W;
            t[27] = q;
        } else {
            W = t[26];
            q = t[27];
        }
        let U;
        if (t[28] !== action || t[29] !== base || t[30] !== unicode) {
            U = function(t) {
                return action(t, unicode, base);
            };
            t[28] = action;
            t[29] = base;
            t[30] = unicode;
            t[31] = U;
        } else {
            U = t[31];
        }
        let V;
        if (t[32] !== base || t[33] !== U) {
            V = <span {...babelHelpers.extends({}, q, {
                children: s.jsx(r("WAWebEmojiPickerOption.react"), {
                    base,
                    action: U,
                    emoji: base,
                    showBaseEmoji: true,
                    testid: "preview-base"
                })
            })}/>;
            t[32] = base;
            t[33] = U;
            t[34] = V;
        } else {
            V = t[34];
        }
        let H;
        if (t[35] === Symbol.for("react.memo_cache_sentinel")) {
            H = {
                className: "x1691je0 x2b8uid x4tra6z"
            };
            t[35] = H;
        } else {
            H = t[35];
        }
        const G = M();
        let z;
        if (t[36] !== H || t[37] !== G) {
            z = <span {...babelHelpers.extends({}, H, {
                children: G
            })}/>;
            t[36] = H;
            t[37] = G;
            t[38] = z;
        } else {
            z = t[38];
        }
        let j;
        if (t[39] !== W || t[40] !== V || t[41] !== z) {
            j = <div {...babelHelpers.extends({}, W, {
                children: [
                    V,
                    z
                ]
            })}/>;
            t[39] = W;
            t[40] = V;
            t[41] = z;
            t[42] = j;
        } else {
            j = t[42];
        }
        return <div {...babelHelpers.extends({}, w, {
            children: [
                <div {...babelHelpers.extends({}, A, {
                    children: h.map(F)
                })}/>,
                <div {...babelHelpers.extends({}, O, {
                    children: h.map(B)
                })}/>,
                j
            ]
        })}/>;
    }
    MComponent.displayName = `${MComponent.name} [from ${i.id}]`;
    l.default = MComponent;
}, 98);