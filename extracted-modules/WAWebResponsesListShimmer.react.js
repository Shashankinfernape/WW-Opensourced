__d("WAWebResponsesListShimmer.react", [
    "CometHeroHoldTrigger.react",
    "WAWebBaseShimmerComponents.react",
    "WAWebFlex.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        paddingInlineEnd10: {
            paddingInlineEnd: "x2vl965",
            $$css: true
        }
    };
    const c = {
        avatarContainer: {
            flexShrink: "x2lah0s",
            width: "x14atkfc",
            $$css: true
        },
        contentContainer: {
            flex: "x1cqoux5",
            minWidth: "xeuugli",
            width: "xh8yej3",
            $$css: true
        },
        responseBodyContent: {
            flex: "x12lumcd",
            minWidth: "xeuugli",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { count, description } = e;
        const length = count === undefined ? 9 : count;
        const description_1 = description === undefined ? "WAWebResponsesListShimmer" : description;
        let u;
        if (t[0] !== description_1) {
            u = s.jsx(r("CometHeroHoldTrigger.react"), {
                description: description_1,
                hold: true
            });
            t[0] = description_1;
            t[1] = u;
        } else {
            u = t[1];
        }
        let c;
        if (t[2] !== length) {
            const Component = o("WAWebFlex.react").FlexColumn;
            c = <Component align="stretch">{Array.from({
                length
            }, m)}</Component>;
            t[2] = length;
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] !== u || t[5] !== c) {
            d = <>{u}{c}</>;
            t[4] = u;
            t[5] = c;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    function m(e, t) {
        return <P5Component key={t}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function P5Component() {
        const e = o("react-compiler-runtime").c(6);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer12
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            n = <Component xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingEnd16,
                o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
                o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
                c.avatarContainer
            ]}>{s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
                diameter: 40
            })}</Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        let r;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                u.paddingInlineEnd10,
                c.contentContainer
            ];
            e[2] = r;
        } else {
            r = e[2];
        }
        let a;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            a = <Component align="center" xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingBottom4}>{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 14,
                width: 120,
                xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8
            })}</Component>;
            e[3] = a;
        } else {
            a = e[3];
        }
        let i;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            i = <Component_1 align="start"><Component xstyle={c.responseBodyContent}>{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 12,
                width: "100%",
                xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom4
            })}{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 12,
                width: 360
            })}</Component></Component_1>;
            e[4] = i;
        } else {
            i = e[4];
        }
        let l;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            l = <Component_2 align="start" xstyle={t}>{n}<Component_1 xstyle={r}>{a}{i}<Component xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingTop12}>{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 8,
                width: 40,
                xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop8
            })}</Component></Component_1></Component_2>;
            e[5] = l;
        } else {
            l = e[5];
        }
        return l;
    }
    l.default = d;
}, 98);