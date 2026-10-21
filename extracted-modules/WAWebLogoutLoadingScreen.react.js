__d("WAWebLogoutLoadingScreen.react", [
    "fbt",
    "WAPromiseDelays",
    "WAWebProgressBar.react",
    "WAWebWaLogoIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect: d, useState: m } = c;
    const p = {
        icon: {
            color: "xsq9etf",
            marginTop: "x1cm6mvd",
            $$css: true
        }
    };
    const _ = 450;
    function f() {
        const e = o("react-compiler-runtime").c(11);
        const t = m(0);
        const n = t[0];
        const a = t[1];
        let i;
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                o("WAPromiseDelays").delayMs(_).finally(()=>{
                    a(100);
                });
            };
            l = [];
            e[0] = i;
            e[1] = l;
        } else {
            i = e[0];
            l = e[1];
        }
        d(i, l);
        let c;
        let f;
        let g;
        let h;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x1n2onr6 x16uhe5s x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x6egj2d"
            };
            f = u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                height: 52,
                xstyle: p.icon
            });
            g = <div className="x1c3i2sq x14ug900 xk82a7y x1nmyh1g">{s._("Logging out")}</div>;
            h = {
                className: "x1n2onr6 x1oysuqx xqu0tyb xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xevwqry"
            };
            e[2] = c;
            e[3] = f;
            e[4] = g;
            e[5] = h;
        } else {
            c = e[2];
            f = e[3];
            g = e[4];
            h = e[5];
        }
        let y;
        if (e[6] !== n) {
            y = <div {...babelHelpers.extends({}, h, {
                children: u.jsx(r("WAWebProgressBar.react"), {
                    value: n
                })
            })}/>;
            e[6] = n;
            e[7] = y;
        } else {
            y = e[7];
        }
        let C;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            C = <div className="x1f6kntn x17fgdl5 xhslqc4 xo1l8bm x1ci5j9l">{s._("Don't close this window")}</div>;
            e[8] = C;
        } else {
            C = e[8];
        }
        let b;
        if (e[9] !== y) {
            b = <div {...babelHelpers.extends({}, c, {
                children: [
                    f,
                    g,
                    y,
                    C
                ]
            })}/>;
            e[9] = y;
            e[10] = b;
        } else {
            b = e[10];
        }
        return b;
    }
    l.default = f;
}, 226);