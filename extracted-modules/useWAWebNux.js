__d("useWAWebNux", [
    "WAWebNuxAction",
    "WAWebUserPrefsNuxPreferences",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useState } = s;
    function m(e, t) {
        const n = o("react-compiler-runtime").c(23);
        const r = t === undefined ? o("WAWebUserPrefsNuxPreferences").shouldShowNUX : t;
        let a;
        if (n[0] !== e || n[1] !== r) {
            a = function() {
                return r(e);
            };
            n[0] = e;
            n[1] = r;
            n[2] = a;
        } else {
            a = n[2];
        }
        const i = useState(a);
        const l = i[0];
        const s = i[1];
        let u;
        let m;
        if (n[3] !== e) {
            u = function() {
                const t = o("WAWebUserPrefsNuxPreferences").getNUX(e);
                if (t == null) {
                    o("WAWebUserPrefsNuxPreferences").setNUX(e, {
                        views: 0
                    });
                }
            };
            m = [
                e
            ];
            n[3] = e;
            n[4] = u;
            n[5] = m;
        } else {
            u = n[4];
            m = n[5];
        }
        useEffect(u, m);
        let p;
        if (n[6] !== e || n[7] !== r) {
            p = function() {
                o("WAWebNuxAction").viewNux(e);
                s(r(e));
            };
            n[6] = e;
            n[7] = r;
            n[8] = p;
        } else {
            p = n[8];
        }
        const _ = p;
        let f;
        if (n[9] !== e || n[10] !== r) {
            f = function() {
                o("WAWebNuxAction").dismissNux(e);
                s(r(e));
            };
            n[9] = e;
            n[10] = r;
            n[11] = f;
        } else {
            f = n[11];
        }
        const g = f;
        let h;
        if (n[12] !== e || n[13] !== r) {
            h = function() {
                o("WAWebNuxAction").resetNux(e);
                s(r(e));
            };
            n[12] = e;
            n[13] = r;
            n[14] = h;
        } else {
            h = n[14];
        }
        const y = h;
        let C;
        if (n[15] !== e || n[16] !== r) {
            C = function() {
                s(r(e));
            };
            n[15] = e;
            n[16] = r;
            n[17] = C;
        } else {
            C = n[17];
        }
        o("useWAWebListener").useListener(o("WAWebUserPrefsNuxPreferences").NuxPrefsEvent, e, C);
        let b;
        if (n[18] !== g || n[19] !== y || n[20] !== l || n[21] !== _) {
            b = [
                l,
                _,
                g,
                y
            ];
            n[18] = g;
            n[19] = y;
            n[20] = l;
            n[21] = _;
            n[22] = b;
        } else {
            b = n[22];
        }
        return b;
    }
    l.default = m;
}, 98);