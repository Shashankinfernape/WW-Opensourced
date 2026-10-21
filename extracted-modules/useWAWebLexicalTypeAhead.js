__d("useWAWebLexicalTypeAhead", [
    "Lexical",
    "WAWebABProps",
    "WAWebEmoji",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef, useState } = s;
    function useM(e, t, n) {
        const a = o("react-compiler-runtime").c(35);
        let i;
        if (a[0] !== n) {
            i = n ?? {};
            a[0] = n;
            a[1] = i;
        } else {
            i = a[1];
        }
        const l = i;
        const { boundary, enabled, maxQueryLength, minQueryLength } = l;
        const boundary_1 = boundary === undefined ? false : boundary;
        const y = enabled === undefined ? true : enabled;
        const C = minQueryLength === undefined ? 0 : minQueryLength;
        const b = useState();
        const R = b[0];
        const L = b[1];
        const E = useState(0);
        const leadOffset = E[0];
        const I = E[1];
        const T = useState();
        const D = T[0];
        const x = T[1];
        const $RefRef = useRef(undefined);
        const PRef = useRef(0);
        let N;
        let M;
        if (a[2] !== boundary_1 || a[3] !== e || a[4] !== y || a[5] !== maxQueryLength || a[6] !== t) {
            N = function() {
                if (y) {
                    const n = o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_2");
                    const r = function() {
                        e.getEditorState().read(function() {
                            if (!e.isComposing()) {
                                const o = v(t, {
                                    boundary: boundary_1,
                                    maxQueryLength
                                });
                                p($RefRef, o?.query, L, n);
                                p(PRef, o?.leadOffset ?? 0, I, n);
                            }
                        });
                    };
                    const a = e.registerUpdateListener(r);
                    r();
                    return a;
                }
            };
            M = [
                e,
                t,
                y,
                boundary_1,
                maxQueryLength
            ];
            a[2] = boundary_1;
            a[3] = e;
            a[4] = y;
            a[5] = maxQueryLength;
            a[6] = t;
            a[7] = N;
            a[8] = M;
        } else {
            N = a[7];
            M = a[8];
        }
        useEffect(N, M);
        let w;
        if (a[9] !== boundary_1 || a[10] !== e || a[11] !== y || a[12] !== t) {
            w = function() {
                if (y) {
                    e.update(function() {
                        const e = S(t, {
                            boundary: boundary_1
                        });
                        e?.remove();
                    });
                }
            };
            a[9] = boundary_1;
            a[10] = e;
            a[11] = y;
            a[12] = t;
            a[13] = w;
        } else {
            w = a[13];
        }
        const clearQuery = r("useWAWebStableCallback")(w);
        let F;
        if (a[14] !== boundary_1 || a[15] !== e || a[16] !== y || a[17] !== t) {
            F = function(r, a = {}) {
                const n = a;
                if (y) {
                    e.update(function() {
                        const e = S(t, {
                            boundary: boundary_1
                        });
                        if (e) {
                            const { leadingSpace, select, trailingSpace } = n;
                            const s = leadingSpace === undefined ? false : leadingSpace;
                            const u = select === undefined ? false : select;
                            const c = trailingSpace === undefined ? false : trailingSpace;
                            const d = typeof r === "string" ? new (o("Lexical")).TextNode(r) : r();
                            o("WAWebLexicalUtils").$replaceTextNode(e, d);
                            if (s) {
                                o("WAWebLexicalUtils").$insertLeadingSpace(d);
                            }
                            if (c) {
                                o("WAWebLexicalUtils").$insertTrailingSpace(d, {
                                    moveCaret: true
                                });
                            }
                            if (u) {
                                d.select(0, d.getTextContent().length);
                            }
                        }
                    });
                }
            };
            a[14] = boundary_1;
            a[15] = e;
            a[16] = y;
            a[17] = t;
            a[18] = F;
        } else {
            F = a[18];
        }
        const replaceQuery = r("useWAWebStableCallback")(F);
        let B;
        if (a[19] !== y || a[20] !== R) {
            B = function() {
                if (y) {
                    x(R);
                }
            };
            a[19] = y;
            a[20] = R;
            a[21] = B;
        } else {
            B = a[21];
        }
        const omitQuery = r("useWAWebStableCallback")(B);
        let q;
        if (a[22] !== boundary_1 || a[23] !== clearQuery || a[24] !== e || a[25] !== y || a[26] !== t) {
            q = function(r) {
                if (y) {
                    e.focus();
                    clearQuery();
                    e.update(function() {
                        const e = o("WAWebLexicalUtils").$getRangeSelection();
                        if (e) {
                            let n = t + r;
                            if (boundary_1) {
                                const a = e.anchor.offset;
                                const i = e.anchor.getNode().getTextContent();
                                const l = i[a - 1];
                                if (l && !h(l)) {
                                    n = ` ${n}`;
                                }
                            }
                            e.insertText(n);
                        }
                    });
                }
            };
            a[22] = boundary_1;
            a[23] = clearQuery;
            a[24] = e;
            a[25] = y;
            a[26] = t;
            a[27] = q;
        } else {
            q = a[27];
        }
        const setQuery = r("useWAWebStableCallback")(q);
        if (R == null && D != null || D != null && R != null && !R.startsWith(D)) {
            x(null);
        }
        const V = y && D == null && R != null && R.length >= C;
        const H = V ? R : null;
        let G;
        if (a[28] !== clearQuery || a[29] !== leadOffset || a[30] !== omitQuery || a[31] !== replaceQuery || a[32] !== setQuery || a[33] !== H) {
            G = {
                query: H,
                leadOffset,
                clearQuery,
                setQuery,
                replaceQuery,
                omitQuery
            };
            a[28] = clearQuery;
            a[29] = leadOffset;
            a[30] = omitQuery;
            a[31] = replaceQuery;
            a[32] = setQuery;
            a[33] = H;
            a[34] = G;
        } else {
            G = a[34];
        }
        return G;
    }
    function p(e, t, n, r) {
        const o = t !== e.current;
        e.current = t;
        if (!r || o) {
            n(t);
        }
    }
    function _(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
    const f = /\W/;
    const g = /[\/:]+/;
    function h(e) {
        return o("WAWebEmoji").EmojiUtil.isEmoji(e) || f.test(e) && !g.test(e);
    }
    const y = 25;
    const C = /[\s()[\]{}<>]/;
    function b(e) {
        return C.test(e);
    }
    function v(e, t) {
        const { boundary = false, maxQueryLength = y } = t ?? {};
        let u = "";
        const c = o("WAWebLexicalUtils").$getRangeSelection();
        if (c == null || !c.isCollapsed()) {
            return null;
        }
        u = o("WAWebLexicalUtils").$getTextUpToAnchor() ?? "";
        const d = _(e);
        const m = u.match(`(.?)${d}${`([^${d}]{0,${maxQueryLength}})\$`}`);
        if (!m) {
            return null;
        }
        const p = m[1];
        const f = m[2];
        if (boundary && p && !h(p)) {
            return null;
        }
        if (boundary) {
            for(let g = 0; g < f.length; g++){
                if (b(f[g])) {
                    return null;
                }
            }
        }
        const leadOffset = u.length - f.length - e.length;
        return {
            query: f,
            leadOffset
        };
    }
    function S(e, t) {
        const { boundary = false } = t ?? {};
        const i = v(e, {
            boundary
        });
        if (i != null) {
            const l = i.query;
            let s;
            const u = o("WAWebLexicalUtils").$getTextAnchor();
            if (u) {
                const c = u.point.offset - l.length - e.length;
                const d = u.node.splitText(c, u.point.offset);
                if (c === 0) {
                    s = d[0];
                } else {
                    s = d[1];
                }
                s.selectNext(0, 0);
                return s;
            }
        }
    }
    l.useTypeAhead = useM;
}, 98);