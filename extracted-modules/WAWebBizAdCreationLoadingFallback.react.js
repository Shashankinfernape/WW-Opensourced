__d("WAWebBizAdCreationLoadingFallback.react", [
    "WAWebBaseShimmerComponents.react",
    "WAWebBizTwoColumnLayout.react",
    "WAWebDivider.react",
    "WAWebFlexBox.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        audience: {
            minHeight: "x1q45rg8",
            $$css: true
        },
        card: {
            alignContent: "xqjyukv",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            boxSizing: "x9f619",
            paddingTop: "x1p57kb1",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "xdx6fka",
            $$css: true
        },
        creative: {
            height: "xc3b8f0",
            $$css: true
        },
        preview: {
            boxSizing: "x9f619",
            minHeight: "x1reb3pv",
            paddingBottom: "x1c76a8b",
            $$css: true
        },
        primary: {
            paddingBottom: "xvpt6g3",
            $$css: true
        },
        secondary: {
            rowGap: "xlxy9ep",
            columnGap: "xf91ah9",
            $$css: true
        },
        shimmers: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        summary: {
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        summaryRow: {
            width: "xh8yej3",
            $$css: true
        }
    };
    function c() {
        const e = o("react-compiler-runtime").c(9);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xl56j7k"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <M3Component gap={12} xstyle={u.creative}><D11 width={180}/><D11 height={80} width="100%"/><D11 height={40} width={255}/></M3Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            a = <M3Component gap={48} xstyle={u.audience}><Component gap={40} paddingTop={8}><D11 width={232}/><D11 height={64} width="100%"/><D11 width={532}/><D11 width={314}/><D11 width={490}/><D11 width={285}/><D11 width={460}/></Component></M3Component>;
            e[2] = a;
        } else {
            a = e[2];
        }
        let i;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            i = <M3Component gap={32}><D11 width="100%"/></M3Component>;
            e[3] = i;
        } else {
            i = e[3];
        }
        let l;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            l = <M3Component gap={40}><D11 width={180}/><D11 width={515}/></M3Component>;
            e[4] = l;
        } else {
            l = e[4];
        }
        let c;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            c = <M3Component gap={40}><Component align="center" gap={40}><D11 height={40} width={40}/><D11 width={532}/></Component></M3Component>;
            e[5] = c;
        } else {
            c = e[5];
        }
        let _;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            _ = <M3Component gap={40}><Component align="center" gap={40}><D11 height={40} width={105}/><D11 width={532}/></Component></M3Component>;
            e[6] = _;
        } else {
            _ = e[6];
        }
        let primaryContent;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            primaryContent = <Component gap={16} xstyle={u.primary}>{n}{a}{i}{l}{c}{_}<M3Component gap={24}><D11 height={24} width={119}/><D11 height={44} width={260}/><D11 height={24} width={180}/><D11 height={16} width={400}/></M3Component></Component>;
            e[7] = primaryContent;
        } else {
            primaryContent = e[7];
        }
        let g;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            const Component_1 = o("WAWebFlexBox.react").FlexColumn;
            g = <div {...babelHelpers.extends({}, t, {
                children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
                    primaryContent,
                    secondaryContent: <Component_1 xstyle={u.secondary}><M3Component gap={40} xstyle={u.preview}><Component align="center"><D11 height={412} width={300}/></Component></M3Component><P4Component/></Component_1>
                })
            })}/>;
            e[8] = g;
        } else {
            g = e[8];
        }
        return g;
    }
    function D11(e) {
        const t = o("react-compiler-runtime").c(3);
        const { height, width } = e;
        const a = height === undefined ? 16 : height;
        let i;
        if (t[0] !== a || t[1] !== width) {
            i = s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: a,
                width,
                xstyle: u.shimmers
            });
            t[0] = a;
            t[1] = width;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    function M3Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const { align, children, gap, xstyle } = e;
        let l;
        if (t[0] !== xstyle) {
            l = [
                u.card,
                xstyle
            ];
            t[0] = xstyle;
            t[1] = l;
        } else {
            l = t[1];
        }
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = <D11 height={24} width={115}/>;
            t[2] = c;
        } else {
            c = t[2];
        }
        let m;
        if (t[3] !== align || t[4] !== children || t[5] !== gap || t[6] !== l) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            m = <Component align={align} gap={gap} xstyle={l}>{c}{children}</Component>;
            t[3] = align;
            t[4] = children;
            t[5] = gap;
            t[6] = l;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    function P4Component() {
        const e = o("react-compiler-runtime").c(7);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <D11 height={24} width={68}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexRow;
            n = <Component justify="all" xstyle={u.summaryRow}><D11 width={250}/><D11 width={70}/></Component>;
            a = s.jsx(r("WAWebDivider.react"), {
                direction: "horizontal"
            });
            e[1] = n;
            e[2] = a;
        } else {
            n = e[1];
            a = e[2];
        }
        let i;
        let l;
        let c;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexRow;
            i = <Component justify="all" xstyle={u.summaryRow}><D11 width={210}/><D11 width={60}/></Component>;
            l = <D11 width={75}/>;
            c = s.jsx(r("WAWebDivider.react"), {
                direction: "horizontal"
            });
            e[3] = i;
            e[4] = l;
            e[5] = c;
        } else {
            i = e[3];
            l = e[4];
            c = e[5];
        }
        let m;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlexBox.react").FlexRow;
            const Component_1 = o("WAWebFlexBox.react").FlexColumn;
            const Component_2 = o("WAWebFlexBox.react").FlexColumn;
            m = <Component_2 gap={20} xstyle={u.summary}>{t}<Component_1 gap={12}>{n}{a}{i}{l}{c}<Component justify="all" xstyle={u.summaryRow}><D11 width={210}/><D11 width={60}/></Component></Component_1></Component_2>;
            e[6] = m;
        } else {
            m = e[6];
        }
        return m;
    }
    l.default = c;
}, 98);