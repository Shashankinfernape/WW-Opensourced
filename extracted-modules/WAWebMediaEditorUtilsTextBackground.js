__d("WAWebMediaEditorUtilsTextBackground", [
    "WAWebMediaEditorEnumsFonts"
], function(t, n, r, o, a, i, l) {
    function e({ alignment, lineWidths, style }) {
        const style_arcSize = style.arcSize;
        const i = [];
        const l = [];
        const u = Math.max(...lineWidths);
        const c = style.lineHeight + style.lineVerticalPadding * 2;
        lineWidths.forEach((e, a)=>{
            const s = e + style.lineHorizontalPadding * 2;
            let d = 0;
            switch(alignment){
                case o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT:
                    d = 0;
                    break;
                case o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER:
                    d = (u - e) / 2;
                    break;
                case o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT:
                    d = u - e;
                    break;
            }
            const m = a * c;
            i.push({
                y: m,
                x: d
            });
            l.push({
                y: m,
                x: d + s
            });
            if (a === lineWidths.length - 1) {
                i.push({
                    y: m + c,
                    x: d
                });
                l.push({
                    y: m + c,
                    x: d + s
                });
            }
        });
        let d = [];
        for (const m of [
            {
                left: true,
                points: i
            },
            {
                left: false,
                points: l
            }
        ]){
            const p = m.left;
            let _ = m.points;
            let f = _;
            for(let g = true; g;){
                _ = f;
                f = [];
                g = false;
                for(let h = 0; h < _.length; h++){
                    const y = _[h];
                    if (h === 0) {
                        f.push(y);
                    } else {
                        if (f.length >= 2 && f[f.length - 1].x === f[f.length - 2].x) {
                            f.pop();
                            g = true;
                        }
                        const C = f[f.length - 1];
                        if (y.x !== C.x && Math.abs(y.x - C.x) < style_arcSize * 2) {
                            g = true;
                            if (p && C.x < y.x || !p && C.x > y.x) {
                                y.x = C.x;
                            } else {
                                C.x = y.x;
                            }
                        }
                        f.push(y);
                    }
                }
            }
            const b = [];
            for(let v = 0; v < f.length; v++){
                const S = f[v];
                if (v === 0 || v === f.length - 1) {
                    b.push(S);
                    continue;
                }
                const R = f[v - 1];
                if (S.x !== R.x) {
                    const L = {
                        x: R.x,
                        y: S.y
                    };
                    const E = b.length - 1;
                    if (b.length >= 2 && b[E].x === L.x && b[E].x === b[E - 1].x) {
                        b.pop();
                    }
                    b.push(L);
                }
                b.push(S);
            }
            if (!p) {
                b.reverse();
            }
            d = d.concat(b);
        }
        return s(d, style_arcSize);
    }
    function s(e, style_arcSize) {
        function n(t) {
            if (t === 0) {
                return e[e.length - 1];
            }
            return e[t - 1];
        }
        function r(t) {
            if (t === e.length - 1) {
                return e[0];
            }
            return e[t + 1];
        }
        const o = [];
        for(let a = 0; a < e.length; a++){
            const i = u(e[a], n(a), r(a), style_arcSize);
            const { clockwise, end, start } = i;
            const d = a === e.length - 1 ? 0 : a + 1;
            const m = u(e[d], n(d), r(d), style_arcSize);
            const p = m.start;
            if (a === 0) {
                o.push(`M ${start.x},${start.y}`);
            }
            o.push(`A ${style_arcSize},${style_arcSize} 0 0 ${clockwise ? 1 : 0} ${end.x},${end.y}`);
            o.push(`L ${p.x},${p.y}`);
        }
        o.push("Z");
        return o.join("\n");
    }
    function u(e, t, n, style_arcSize) {
        const o = t.y === e.y;
        let a;
        if (o) {
            a = e.y;
        } else if (t.y > e.y) {
            a = e.y + style_arcSize;
        } else {
            a = e.y - style_arcSize;
        }
        let i;
        if (o) {
            if (t.x > e.x) {
                i = e.x + style_arcSize;
            } else {
                i = e.x - style_arcSize;
            }
        } else {
            i = e.x;
        }
        const start = {
            y: a,
            x: i
        };
        const s = e.y === n.y;
        let u;
        if (s) {
            u = e.y;
        } else if (n.y > e.y) {
            u = e.y + style_arcSize;
        } else {
            u = e.y - style_arcSize;
        }
        let c;
        if (s) {
            if (n.x > e.x) {
                c = e.x + style_arcSize;
            } else {
                c = e.x - style_arcSize;
            }
        } else {
            c = e.x;
        }
        const end = {
            y: u,
            x: c
        };
        const clockwise = o && (t.y < n.y && t.x < n.x || t.x > n.x && t.y > n.y) || !o && (t.y < n.y && t.x > n.x || t.x < n.x && t.y > n.y);
        return {
            start,
            end,
            clockwise
        };
    }
    l.generateTextBackgroundPath = e;
}, 98);