__d("WAWebVoipGridLayoutCalculator", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 1.3333333333333333;
    const l = 4;
    const s = 8;
    function u({ columns, containerHeight, containerWidth, rows, spacing }) {
        const l = (containerWidth - (columns - 1) * spacing) / columns;
        const s = (containerHeight - (rows - 1) * spacing) / rows;
        const u = Math.min(l, s * e);
        const c = Math.min(s, l / e);
        return {
            cellWidth: u,
            cellHeight: c
        };
    }
    function c(e, t, n, spacing) {
        if (n <= 0 || e <= 0 || t <= 0) {
            return {
                cellWidth: 0,
                cellHeight: 0,
                columns: 0,
                rows: 0
            };
        }
        const o = e * t;
        let a = o;
        let i = {
            cellWidth: e,
            cellHeight: t,
            columns: 1,
            rows: 1
        };
        for(let l = 1; l <= n; l++){
            const columns = Math.ceil(n / l);
            const c = u({
                columns,
                containerHeight: t,
                containerWidth: e,
                rows: l,
                spacing
            });
            const { cellHeight, cellWidth } = c;
            const p = o - cellWidth * cellHeight * n;
            if (p < a) {
                a = p;
                i = {
                    cellWidth,
                    cellHeight,
                    columns,
                    rows: l
                };
            }
        }
        return i;
    }
    function d(e) {
        if (e <= 2) {
            return 1;
        }
        if (e <= 8) {
            return 2;
        }
        return 3;
    }
    function m(e, t, n, r, o) {
        if (n <= 0 || e <= 0 || t <= 0) {
            return {
                cellWidth: 0,
                cellHeight: 0,
                columns: 0,
                rows: 0
            };
        }
        const a = d(n);
        const i = Math.ceil(n / a);
        const columns = o ? i : a;
        const s = o ? a : i;
        const u = Math.max(0, (e - (columns - 1) * r) / columns);
        const c = Math.max(0, (t - (s - 1) * r) / s);
        return {
            cellWidth: u,
            cellHeight: c,
            columns,
            rows: s
        };
    }
    function p(cols) {
        if (cols <= 0) {
            return {
                cols: 1,
                rows: 1
            };
        }
        if (cols <= 2) {
            return {
                cols,
                rows: 1
            };
        }
        if (cols <= 4) {
            return {
                cols: 2,
                rows: Math.ceil(cols / 2)
            };
        }
        if (cols <= 6) {
            return {
                cols: 3,
                rows: 2
            };
        }
        if (cols <= 9) {
            return {
                cols: 3,
                rows: 3
            };
        }
        return {
            cols: 4,
            rows: Math.ceil(cols / 4)
        };
    }
    function _(e, t) {
        const n = p(e);
        const r = p(t);
        return n.cols !== r.cols || n.rows !== r.rows;
    }
    function f(t, n) {
        if (t <= 0 || n <= 0) {
            return 0;
        }
        const r = p(n);
        const { cols, rows } = r;
        const i = t - 2 * s - (cols - 1) * l;
        if (i <= 0) {
            return 0;
        }
        const u = i / cols;
        const c = u / e;
        return rows * c + (rows - 1) * l + s;
    }
    i.GRID_GAP_PX = l;
    i.GRID_PADDING_SINGLE_PX = s;
    i.calculateOptimalGridLayout = c;
    i.calculateNativeGridLayout = m;
    i.canonicalGridShape = p;
    i.hasCanonicalGridShapeChanged = _;
    i.calculateGroupVideoGridContentHeight = f;
}, 66);