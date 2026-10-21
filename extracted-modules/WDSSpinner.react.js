__d("WDSSpinner.react", [
    "WDSSpinnerElement.react",
    "getPlatformByGK",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = "x17qceat-B";
    const m = "xekv6nw-B";
    const p = "xnrop4s-B";
    const _ = {
        height: "x16ye13r",
        width: "x5lhr3w",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: true
    };
    const f = {
        container: function(t) {
            return [
                _,
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        gpuContainer: {
            animationName: "x1e112to",
            animationDuration: "x1c74tu6",
            animationTimingFunction: "x1esw782",
            animationIterationCount: "xa4qsjk",
            display: "x3nfvp2",
            $$css: true
        }
    };
    const g = {
        width: "x5lhr3w",
        height: "x16ye13r",
        $$css: true
    };
    const h = {
        morphIcon: function(t) {
            return [
                g,
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        morphContainer: {
            position: "x1n2onr6",
            display: "x3nfvp2",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function y(e, max) {
        if (e == null) {
            return null;
        }
        const n = Math.max(Math.min(e, max), 0);
        return n * 100 / max;
    }
    function C(t) {
        const t_ref = t.ref;
        const { platform = o("getPlatformByGK").WDS_PLATFORM, size = platform === "iOS" ? 18 : 65, stroke = 4, strokeLinecap = "round", xstyle, max = 100, value, testid = "loading-spinner", morphToIcon = false, iconToMorphTo, iconProps, gpuAnimationEnabled = false } = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const progress = y(value, max);
        const children = <span {...babelHelpers.extends({
            ref: t_ref,
            "data-testid": undefined
        }, (s || (s = r("stylex"))).props(f.container(size), gpuAnimationEnabled && progress == null && f.gpuContainer), {
            children: c.jsx(r("WDSSpinnerElement.react"), {
                gpuAnimationEnabled,
                platform,
                size,
                stroke,
                progress,
                strokeLinecap,
                xstyle
            })
        })}/>;
        return <span {...babelHelpers.extends({}, s.props(h.morphContainer, f.container(size)), {
            children: [
                <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1hc1fzr"
                    },
                    1: {
                        className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1hc1fzr xvma63k xdz8niu x4hg4is x10e4vud"
                    }
                }[(morphToIcon === true && iconToMorphTo != null) << 0], {
                    children
                })}/>,
                morphToIcon === true && iconToMorphTo != null && <div className="x10l6tqk x78zum5 x6s0dn4 xl56j7k xg01cxk x127lhb5 xdz8niu x1t83zlg x4hg4is x10e4vud"><iconToMorphTo {...babelHelpers.extends({
                    width: size,
                    height: size,
                    xstyle: h.morphIcon(size)
                }, iconProps)}/></div>
            ]
        })}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = C;
}, 98);