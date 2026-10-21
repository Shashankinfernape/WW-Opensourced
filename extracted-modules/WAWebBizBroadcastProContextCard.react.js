__d("WAWebBizBroadcastProContextCard.react", [
    "fbt",
    "WAWebBizBroadcastProContextCardIllustrationLoadable",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFormatBroadcastNotification",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        container: {
            rowGap: "x8a3fw1",
            width: "xh8yej3",
            $$css: true
        },
        content: {
            rowGap: "x129bwdz",
            width: "xh8yej3",
            $$css: true
        },
        illustrationSize: {
            zoom: "xkoynjh",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "x78zum5 xwzfr38 xl56j7k x6ikm8r x10wlt62 xps46vt"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <div {...babelHelpers.extends({}, t, {
                "aria-hidden": true,
                children: u.jsx(r("WAWebBizBroadcastProContextCardIllustrationLoadable"), {
                    xstyle: c.illustrationSize
                })
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            a = <Component type="Body1Emphasized" colorName="contentDefault" textAlign="center">{o("WAWebFormatBroadcastNotification").getBizBroadcastProChatMessage()}</Component>;
            e[2] = a;
        } else {
            a = e[2];
        }
        let i;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSTextualLink.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            const Component_3 = o("WAWebFlex.react").FlexColumn;
            i = <Component_3 align="center" xstyle={c.container} testid="biz-broadcast-pro-context-card">{n}<Component_2 align="center" xstyle={c.content}>{a}<Component_1 type="Body2" colorName="contentDeemphasized" textAlign="center">{s._("Broadcasts in this chat are generated and sent using Meta Business Tools. {=m2}", [
                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl()}>{s._("Learn more")}</Component>)
            ])}</Component_1></Component_2></Component_3>;
            e[3] = i;
        } else {
            i = e[3];
        }
        return i;
    }
    l.default = d;
}, 226);