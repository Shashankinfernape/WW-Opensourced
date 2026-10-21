__d("WAWebNewsletterSuspendedMessagePreview.react", [
    "fbt",
    "WAWebCommonNewsletterIntegrityStrings",
    "WDSIconIcBlock.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useState } = c;
    const p = {
        marginTop3: {
            marginTop: "x7r5mf7",
            $$css: true
        },
        marginInlineEnd3: {
            marginInlineEnd: "x1p8j9ns",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_isGeosuspended = e.isGeosuspended;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("This channel is no longer available");
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = useState(i);
        const c = l[0];
        const _ = l[1];
        let f;
        let g;
        if (t[1] !== e_isGeosuspended) {
            f = function() {
                const e = (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        if (e_isGeosuspended) {
                            const e = yield o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
                            _(e);
                        }
                    });
                    function t() {
                        return e.apply(this, arguments);
                    }
                    return t;
                })();
                e();
            };
            g = [
                e_isGeosuspended
            ];
            t[1] = e_isGeosuspended;
            t[2] = f;
            t[3] = g;
        } else {
            f = t[2];
            g = t[3];
        }
        useEffect(f, g);
        let h;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "x1k4tb9n"
            };
            t[4] = h;
        } else {
            h = t[4];
        }
        let y;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            y = u.jsx(r("WDSIconIcBlock.react"), {
                width: 14,
                height: 14,
                displayInline: true,
                directional: true,
                testid: "settings-blocked",
                xstyle: [
                    p.marginTop3,
                    p.marginInlineEnd3
                ]
            });
            t[5] = y;
        } else {
            y = t[5];
        }
        let C;
        if (t[6] !== c) {
            C = <span {...babelHelpers.extends({
                title: c
            }, h, {
                "data-testid": "newsletter-suspended-message-preview",
                children: [
                    y,
                    c
                ]
            })}/>;
            t[6] = c;
            t[7] = C;
        } else {
            C = t[7];
        }
        return C;
    }
    l.default = _;
}, 226);