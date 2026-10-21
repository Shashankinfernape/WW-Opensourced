__d("WAWebDesktopUpsellWASquareIcon.react", [
    "WAWebDesktopUpsellUtils",
    "WAWebWhatsAppAppIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            marginInlineStart: "x8sq2zk",
            $$css: true
        },
        macIcon: {
            borderStartStartRadius: "x16qb05n",
            borderStartEndRadius: "xi7iut8",
            borderEndEndRadius: "x1dm3dyd",
            borderEndStartRadius: "x1pv694p",
            $$css: true
        },
        marginEnd8: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function c() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = s.jsx(r("WAWebWhatsAppAppIcon.react"), {
                size: 40,
                xstyle: [
                    u.icon,
                    u.marginEnd8,
                    n === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS && u.macIcon
                ]
            });
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    l.default = c;
}, 98);