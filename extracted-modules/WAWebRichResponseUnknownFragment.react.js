__d("WAWebRichResponseUnknownFragment.react", [
    "WAWebFlex.react",
    "WAWebRichResponseUnknownFragmentUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            borderStartStartRadius: "xbjudin",
            borderStartEndRadius: "xnlwouz",
            borderEndEndRadius: "xpp8er5",
            borderEndStartRadius: "xs9wviy",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            color: "xhslqc4",
            $$css: true
        },
        paddingAll12: {
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x1iw51ew",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const { fragment, parseState } = e;
        let a;
        if (t[0] !== fragment || t[1] !== parseState) {
            a = o("WAWebRichResponseUnknownFragmentUtils").getUnknownFragmentText(fragment, parseState);
            t[0] = fragment;
            t[1] = parseState;
            t[2] = a;
        } else {
            a = t[2];
        }
        const i = a;
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                u.container,
                u.paddingAll12
            ];
            t[3] = l;
        } else {
            l = t[3];
        }
        let c;
        if (t[4] !== i) {
            const Component = o("WAWebFlex.react").FlexRow;
            c = <Component align="center" xstyle={l}>{i}</Component>;
            t[4] = i;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = c;
}, 98);