__d("WAWebBizTwoColumnLayout.react", [
    "WAWebFlexBox.react",
    "WAWebResizeObserver.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = 24;
    const d = 20;
    const m = 380;
    const p = m * 2 + d + c * 2;
    const _ = {
        largeScreenPrimary: {
            flexGrow: "xgyuaek",
            $$css: true
        },
        largeScreenRoot: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        largeScreenSecondary: {
            flexGrow: "x1iyjqo2",
            position: "x7wzq59",
            top: "x242muq",
            $$css: true
        },
        primary: {
            minWidth: "x1snuils",
            rowGap: "x1f0uite",
            $$css: true
        },
        root: {
            alignContent: "xc26acl",
            columnGap: "x1mn2tih",
            display: "x78zum5",
            height: "x5yr21d",
            maxWidth: "x4t6xuk",
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            rowGap: "x1f0uite",
            width: "xh8yej3",
            $$css: true
        },
        secondary: {
            height: "xg7h5cd",
            minWidth: "x1snuils",
            rowGap: "x1f0uite",
            $$css: true
        }
    };
    function f(e) {
        const t = o("react-compiler-runtime").c(25);
        const { allowContentHeightGrowth, flipResizeOrder, primaryContent, secondaryContent, testid } = e;
        const d = allowContentHeightGrowth === undefined ? false : allowContentHeightGrowth;
        const m = flipResizeOrder === undefined ? false : flipResizeOrder;
        const f = e_useState(false);
        const g = f[0];
        const h = f[1];
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = function(t) {
                h(t.width <= p);
            };
            t[0] = y;
        } else {
            y = t[0];
        }
        const onResize = y;
        const b = m && g && secondaryContent != null;
        const v = !g && _.largeScreenPrimary;
        let S;
        if (t[1] !== v) {
            S = [
                _.primary,
                v
            ];
            t[1] = v;
            t[2] = S;
        } else {
            S = t[2];
        }
        let R;
        if (t[3] !== primaryContent || t[4] !== S) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            R = <Component xstyle={S} align="stretch">{primaryContent}</Component>;
            t[3] = primaryContent;
            t[4] = S;
            t[5] = R;
        } else {
            R = t[5];
        }
        const L = R;
        let E;
        if (t[6] !== g || t[7] !== secondaryContent) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            E = secondaryContent != null && <Component xstyle={[
                _.secondary,
                !g && _.largeScreenSecondary
            ]}>{secondaryContent}</Component>;
            t[6] = g;
            t[7] = secondaryContent;
            t[8] = E;
        } else {
            E = t[8];
        }
        const k = E;
        let I;
        if (t[9] !== d) {
            I = ({
                0: "xc26acl x78zum5 xl56j7k xh8yej3 x5yr21d",
                1: "xc26acl x78zum5 xl56j7k xh8yej3 x1iyjqo2 x2lah0s"
            })[!!d << 0];
            t[9] = d;
            t[10] = I;
        } else {
            I = t[10];
        }
        const T = g ? "vertical" : "horizontal";
        const D = !g && _.largeScreenRoot;
        let x;
        if (t[11] !== D) {
            x = [
                _.root,
                D
            ];
            t[11] = D;
            t[12] = x;
        } else {
            x = t[12];
        }
        let $;
        if (t[13] !== L || t[14] !== k || t[15] !== b) {
            $ = b ? <>{k}{L}</> : <>{L}{k}</>;
            t[13] = L;
            t[14] = k;
            t[15] = b;
            t[16] = $;
        } else {
            $ = t[16];
        }
        let P;
        if (t[17] !== x || t[18] !== $ || t[19] !== T || t[20] !== testid) {
            const Component = o("WAWebFlexBox.react").FlexItem;
            P = <Component direction={T} flex testid={testid} xstyle={x}>{$}</Component>;
            t[17] = x;
            t[18] = $;
            t[19] = T;
            t[20] = testid;
            t[21] = P;
        } else {
            P = t[21];
        }
        let N;
        if (t[22] !== P || t[23] !== I) {
            const Component = r("WAWebResizeObserver.react");
            N = <Component className={I} onResize={onResize}>{P}</Component>;
            t[22] = P;
            t[23] = I;
            t[24] = N;
        } else {
            N = t[24];
        }
        return N;
    }
    l.default = f;
}, 98);