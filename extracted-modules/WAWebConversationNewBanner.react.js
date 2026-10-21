__d("WAWebConversationNewBanner.react", [
    "WAWebButton.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 1250;
    const c = {
        container: {
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            backgroundColor: "x1280gxy",
            display: "x78zum5",
            justifyContent: "x1l1ennw",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(15);
        const { buttons, primaryText, secondaryText, testId } = e;
        const d = r("useWAWebWindowSize")();
        const d_width = d.width;
        const P = d_width <= u ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow;
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                16,
                16,
                16,
                16
            ];
            t[0] = _;
        } else {
            _ = t[0];
        }
        let f;
        if (t[1] !== primaryText) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            f = <Component>{primaryText}</Component>;
            t[1] = primaryText;
            t[2] = f;
        } else {
            f = t[2];
        }
        let g;
        if (t[3] !== secondaryText) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            g = secondaryText != null && <Component>{secondaryText}</Component>;
            t[3] = secondaryText;
            t[4] = g;
        } else {
            g = t[4];
        }
        let h;
        if (t[5] !== f || t[6] !== g) {
            const Component = o("WAWebFlex.react").FlexColumn;
            h = <Component>{f}{g}</Component>;
            t[5] = f;
            t[6] = g;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== buttons) {
            const Component = o("WAWebButton.react").ButtonGroup;
            y = <Component direction="horizontal" shrink={0}>{buttons}</Component>;
            t[8] = buttons;
            t[9] = y;
        } else {
            y = t[9];
        }
        let C;
        if (t[10] !== P || t[11] !== h || t[12] !== y || t[13] !== testId) {
            const Component = o("WAWebFlex.react").FlexColumn;
            C = <Component padding={8}>{<P alignSelf="stretch" align="center" justify="all" xstyle={c.container} padding={_} gap={16} testid={testId}>{h}{y}</P>}</Component>;
            t[10] = P;
            t[11] = h;
            t[12] = y;
            t[13] = testId;
            t[14] = C;
        } else {
            C = t[14];
        }
        return C;
    }
    l.default = d;
}, 98);