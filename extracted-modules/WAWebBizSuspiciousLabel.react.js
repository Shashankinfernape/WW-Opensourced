__d("WAWebBizSuspiciousLabel.react", [
    "fbt",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WDSIconIcAlertWarning.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginInlineEnd6: {
            marginInlineEnd: "xbelrpt",
            $$css: true
        },
        marginBottom3: {
            marginBottom: "xahult9",
            $$css: true
        },
        marginTop3: {
            marginTop: "x7r5mf7",
            $$css: true
        },
        marginBottom5: {
            marginBottom: "xu06os2",
            $$css: true
        }
    };
    const m = {
        icon: {
            color: "x17t9dm2",
            $$css: true
        },
        container: {
            display: "x1rg5ohu",
            height: "xhvdbge",
            marginInlineStart: "xw01apr",
            backgroundColor: "x1936wsd",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            $$css: true
        }
    };
    function p(e) {
        const n = o("react-compiler-runtime").c(8);
        const { displayType, link, msgKey } = e;
        const l = o("useWAWebMsgValues").useOptionalMsgValues(msgKey, [
            o("WAWebFrontendMsgGetters").getLinksInFullText,
            o("WAWebMsgGetters").getCtwaContext
        ]) ?? [];
        const msgLinks = l[0];
        const u = l[1];
        let c;
        if (n[0] !== u || n[1] !== displayType || n[2] !== link || n[3] !== msgLinks) {
            c = _({
                ctwaContext: u,
                displayType,
                link,
                msgLinks
            });
            n[0] = u;
            n[1] = displayType;
            n[2] = link;
            n[3] = msgLinks;
            n[4] = c;
        } else {
            c = n[4];
        }
        let d;
        if (n[5] !== u || n[6] !== c) {
            d = {
                ctwaContext: u,
                text: c
            };
            n[5] = u;
            n[6] = c;
            n[7] = d;
        } else {
            d = n[7];
        }
        return d;
    }
    function _({ ctwaContext, displayType, link, msgLinks }) {
        if (!(msgLinks == null && !link)) {
            let i;
            if (ctwaContext?.isSuspiciousLink === true) {
                i = s._("Suspicious link");
            } else if (link) {
                let l;
                if ((l = link.suspiciousCharacters) != null && l.size) {
                    i = s._("Suspicious link");
                }
            } else if (msgLinks != null) {
                const u = msgLinks.filter((e)=>e.suspiciousCharacters?.size).length;
                if (u) {
                    const c = msgLinks.length;
                    if (c === 1 || displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
                        i = s._("Suspicious link");
                    } else {
                        i = s._("_j{\"*\":\"{count} suspicious links\",\"_1\":\"1 suspicious link\"}", [
                            s._plural(u, "count")
                        ]);
                    }
                }
            }
            return i;
        }
    }
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = p(e);
        const { ctwaContext, text } = n;
        const isLink = e.link != null;
        let l;
        if (t[0] !== ctwaContext || t[1] !== isLink || t[2] !== text) {
            l = <G1Component ctwaContext={ctwaContext} isLink={isLink} text={text}/>;
            t[0] = ctwaContext;
            t[1] = isLink;
            t[2] = text;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function G1Component(t) {
        const n = o("react-compiler-runtime").c(10);
        const { ctwaContext, isLink, text } = t;
        if (text == null) {
            return null;
        }
        let s;
        if (n[0] !== ctwaContext || n[1] !== isLink) {
            s = (e || (e = r("stylex"))).props(m.container, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.marginInlineEnd6, o("WDSMargins.stylex").wdsMargins.marginBottom2, ctwaContext != null && d.marginBottom3, isLink && d.marginTop3, isLink && d.marginBottom5);
            n[0] = ctwaContext;
            n[1] = isLink;
            n[2] = s;
        } else {
            s = n[2];
        }
        let u;
        let p;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = c.jsx(r("WDSIconIcAlertWarning.react"), {
                displayInline: true,
                xstyle: [
                    m.icon,
                    o("WDSMargins.stylex").wdsMargins.marginTop4,
                    o("WDSMargins.stylex").wdsMargins.marginEnd4
                ],
                height: 10,
                width: 11
            });
            p = {
                className: "x1n2onr6 x1c7jfne x190qgfh x1fcty0u x17t9dm2 xtvhhri"
            };
            n[3] = u;
            n[4] = p;
        } else {
            u = n[3];
            p = n[4];
        }
        let _;
        if (n[5] !== text) {
            _ = <span {...babelHelpers.extends({}, p, {
                children: text
            })}/>;
            n[5] = text;
            n[6] = _;
        } else {
            _ = n[6];
        }
        let f;
        if (n[7] !== s || n[8] !== _) {
            f = <div {...babelHelpers.extends({}, s, {
                children: [
                    u,
                    _
                ]
            })}/>;
            n[7] = s;
            n[8] = _;
            n[9] = f;
        } else {
            f = n[9];
        }
        return f;
    }
    l.useSuspiciousLabel = p;
    l.getSuspiciousLabel = _;
    l.SuspiciousLabel = FComponent;
    l.SuspiciousLabelView = G1Component;
}, 226);