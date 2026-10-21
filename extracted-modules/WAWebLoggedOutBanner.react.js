__d("WAWebLoggedOutBanner.react", [
    "WAWebClickable.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WDSIconIcAlertWarning.react",
    "WDSIconIcArrowForward.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        marginInlineStart5: {
            marginInlineStart: "xpcyujq",
            $$css: true
        },
        padding15: {
            paddingTop: "xqy66fx",
            paddingInlineEnd: "x1q3ajuy",
            paddingBottom: "xr1496l",
            paddingInlineStart: "x1gx403c",
            $$css: true
        }
    };
    const c = {
        wrapper: {
            minHeight: "x4lt0of",
            boxSizing: "x9f619",
            borderStartStartRadius: "x16qb05n",
            borderStartEndRadius: "xi7iut8",
            borderEndEndRadius: "x1dm3dyd",
            borderEndStartRadius: "x1pv694p",
            $$css: true
        },
        error: {
            backgroundColor: "x1o4ak67",
            $$css: true
        },
        errorIcon: {
            color: "x1xr9wsx",
            $$css: true
        },
        warn: {
            backgroundColor: "x4d3jff",
            $$css: true
        },
        warningIcon: {
            color: "x157dx7a",
            $$css: true
        },
        moreHelpLinkIcon: {
            rotate: "x14ahhpt",
            $$css: true
        },
        moreHelpLinkText: {
            color: "x1hql6x6",
            fontSize: "x1f6kntn",
            lineHeight: "x1evy7pa",
            fontWeight: "xk50ysn",
            $$css: true
        }
    };
    function D45({ link }) {
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebClickable.react").Clickable;
        return <Component_1 xstyle={c.moreHelpLinkText} as="span" dataTestId="link-device-qrcode-alt-linking-hint" onClick={function() {
            o("WAWebExternalLink.react").openExternalLink(link);
        }}><Component align="center">{r("WAWebFbtCommon")("Learn more")}{s.jsx(r("WDSIconIcArrowForward.react"), {
            width: 20,
            height: 20,
            iconXstyle: [
                c.moreHelpLinkIcon,
                u.marginInlineStart5
            ]
        })}</Component></Component_1>;
    }
    D45.displayName = `${D45.name} [from ${i.id}]`;
    function m(e) {
        const t = o("react-compiler-runtime").c(22);
        const { category, header, link, text } = e;
        const m = category === "error";
        let p;
        if (t[0] !== link) {
            p = link != null ? <D45 link={link}/> : null;
            t[0] = link;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        const f = m ? c.error : c.warn;
        let g;
        if (t[2] !== f) {
            g = [
                c.wrapper,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto,
                o("WDSMargins.stylex").wdsMargins.marginTop0,
                o("WDSMargins.stylex").wdsMargins.marginBottom40,
                u.padding15,
                f
            ];
            t[2] = f;
            t[3] = g;
        } else {
            g = t[3];
        }
        const h = m ? c.errorIcon : c.warningIcon;
        let y;
        if (t[4] !== h) {
            const Component = o("WAWebFlex.react").FlexItem;
            y = <Component xstyle={o("WDSMargins.stylex").wdsMargins.marginTop4}>{s.jsx(r("WDSIconIcAlertWarning.react"), {
                width: 28,
                height: 28,
                iconXstyle: h
            })}</Component>;
            t[4] = h;
            t[5] = y;
        } else {
            y = t[5];
        }
        let C;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "x1evy7pa x1c3i2sq x1hql6x6 xu06os2"
            };
            t[6] = C;
        } else {
            C = t[6];
        }
        let b;
        if (t[7] !== header) {
            b = <div {...babelHelpers.extends({}, C, {
                children: header
            })}/>;
            t[7] = header;
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "x1u7k74 x1hql6x6"
            };
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] !== text) {
            S = <div>{text}</div>;
            t[10] = text;
            t[11] = S;
        } else {
            S = t[11];
        }
        let R;
        if (t[12] !== _ || t[13] !== S) {
            R = <div {...babelHelpers.extends({}, v, {
                children: [
                    S,
                    _
                ]
            })}/>;
            t[12] = _;
            t[13] = S;
            t[14] = R;
        } else {
            R = t[14];
        }
        let L;
        if (t[15] !== R || t[16] !== b) {
            const Component = o("WAWebFlex.react").FlexColumn;
            L = <Component xstyle={o("WDSMargins.stylex").wdsMargins.marginStart16}>{b}{R}</Component>;
            t[15] = R;
            t[16] = b;
            t[17] = L;
        } else {
            L = t[17];
        }
        let E;
        if (t[18] !== L || t[19] !== g || t[20] !== y) {
            const Component = o("WAWebFlex.react").FlexRow;
            E = <Component align="start" grow={1} xstyle={g}>{y}{L}</Component>;
            t[18] = L;
            t[19] = g;
            t[20] = y;
            t[21] = E;
        } else {
            E = t[21];
        }
        return E;
    }
    l.default = m;
}, 98);