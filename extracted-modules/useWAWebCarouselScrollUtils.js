__d("useWAWebCarouselScrollUtils", [
    "WAWebVelocityAnimate",
    "react-compiler-runtime",
    "useWAWebThrottledCallback"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 200;
    const s = 7;
    const u = 200;
    function c(t, n, a, i) {
        const l = o("react-compiler-runtime").c(10);
        let c;
        if (l[0] !== t || l[1] !== a || l[2] !== n) {
            c = function(r) {
                const e = t?.current;
                if (e != null) {
                    if (e.scrollLeft < s) {
                        n(false);
                    } else {
                        n(true);
                    }
                    const o = e.scrollLeft + e.clientWidth >= e.scrollWidth - s;
                    a(!o);
                }
            };
            l[0] = t;
            l[1] = a;
            l[2] = n;
            l[3] = c;
        } else {
            c = l[3];
        }
        const d = r("useWAWebThrottledCallback")(c, 100);
        let m;
        if (l[4] !== t || l[5] !== i) {
            m = function(o) {
                const n = e * 0.5 * i * (o ? 1 : -1);
                const a = t?.current;
                if (a != null) {
                    r("WAWebVelocityAnimate")(a, "stop");
                    r("WAWebVelocityAnimate")(a, "scroll", {
                        SCROLL_ANIMATION: u,
                        container: a,
                        offset: n,
                        axis: "x",
                        easing: [
                            0.1,
                            0.82,
                            0.25,
                            1
                        ]
                    });
                }
            };
            l[4] = t;
            l[5] = i;
            l[6] = m;
        } else {
            m = l[6];
        }
        const p = m;
        let _;
        if (l[7] !== d || l[8] !== p) {
            _ = [
                d,
                p
            ];
            l[7] = d;
            l[8] = p;
            l[9] = _;
        } else {
            _ = l[9];
        }
        return _;
    }
    l.default = c;
}, 98);