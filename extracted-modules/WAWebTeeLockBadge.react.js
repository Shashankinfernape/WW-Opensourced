__d("WAWebTeeLockBadge.react", [
    "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            position: "x1n2onr6",
            display: "x1rg5ohu",
            $$css: true
        },
        badge: {
            position: "x10l6tqk",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            boxShadow: "x119zby7",
            pointerEvents: "x47corl",
            zIndex: "x1vjfegm",
            $$css: true
        },
        small: {
            bottom: "x1me21xl",
            insetInlineEnd: "x131a0oe",
            left: null,
            right: null,
            width: "x1mzsije",
            height: "x8lyb6r",
            $$css: true
        },
        medium: {
            bottom: "x1ey2m1c",
            insetInlineEnd: "xgvahye",
            left: null,
            right: null,
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        large: {
            bottom: "x1ey2m1c",
            insetInlineEnd: "xqqy42c",
            left: null,
            right: null,
            width: "x1247r65",
            height: "xng8ra",
            $$css: true
        }
    };
    const d = {
        small: {
            width: 12,
            height: 14
        },
        medium: {
            width: 22,
            height: 26
        },
        large: {
            width: 34,
            height: 40
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(12);
        const { children, size } = t;
        const l = size === undefined ? "small" : size;
        const s = d[l];
        let m;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x1n2onr6 x1rg5ohu"
            };
            n[0] = m;
        } else {
            m = n[0];
        }
        let p;
        if (n[1] !== l) {
            p = (e || (e = r("stylex"))).props(c.badge, c[l]);
            n[1] = l;
            n[2] = p;
        } else {
            p = n[2];
        }
        let _;
        if (n[3] !== s.height || n[4] !== s.width) {
            _ = u.jsx(r("WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react"), {
                "aria-hidden": true,
                height: s.height,
                width: s.width
            });
            n[3] = s.height;
            n[4] = s.width;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== p || n[7] !== _) {
            f = <div {...babelHelpers.extends({}, p, {
                "data-testid": "tee-lock-badge-icon",
                children: _
            })}/>;
            n[6] = p;
            n[7] = _;
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] !== children || n[10] !== f) {
            g = <div {...babelHelpers.extends({}, m, {
                "data-testid": "tee-lock-badge-container",
                children: [
                    children,
                    f
                ]
            })}/>;
            n[9] = children;
            n[10] = f;
            n[11] = g;
        } else {
            g = n[11];
        }
        return g;
    }
    l.default = m;
}, 98);