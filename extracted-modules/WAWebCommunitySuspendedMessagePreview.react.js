__d("WAWebCommunitySuspendedMessagePreview.react", [
    "fbt",
    "WAWebGroupGatingUtils",
    "WAWebGroupSuspendCommonStrings",
    "WDSIconIcBlock.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        marginTop3: {
            marginTop: "x7r5mf7",
            $$css: true
        },
        marginInlineEnd3: {
            marginInlineEnd: "x1p8j9ns",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled() ? o("WAWebGroupSuspendCommonStrings").communitySuspendedTitle() : s._("This community is no longer available");
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x1k4tb9n"
            };
            e[1] = a;
        } else {
            a = e[1];
        }
        let i;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = <span {...babelHelpers.extends({
                title: n
            }, a, {
                "data-testid": "suspended-community-message-preview",
                children: [
                    u.jsx(r("WDSIconIcBlock.react"), {
                        width: 14,
                        height: 14,
                        displayInline: true,
                        directional: true,
                        testid: "settings-blocked",
                        xstyle: [
                            c.marginTop3,
                            c.marginInlineEnd3
                        ]
                    }),
                    n
                ]
            })}/>;
            e[2] = i;
        } else {
            i = e[2];
        }
        return i;
    }
    l.default = d;
}, 226);