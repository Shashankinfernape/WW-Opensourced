__d("WAWebPaymentBackground.react", [
    "WAWebPaymentBackground.stylex",
    "WAWebPaymentImageAssets.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const a = o("react-compiler-runtime").c(20);
        let i;
        if (a[0] !== t.isQuoted || a[1] !== t.isQuotedInComposeBox || a[2] !== t.thumbXstyle) {
            i = (e || (e = r("stylex"))).props(o("WAWebPaymentBackground.stylex").styles.thumb, o("WAWebPaymentBackground.stylex").styles.backgroundContainer, t.isQuoted !== true && o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.background, t.isQuoted === true && o("WAWebPaymentBackground.stylex").styles.thumbQuoted, t.isQuotedInComposeBox === true && o("WAWebPaymentBackground.stylex").styles.thumbQuotedInComposeBox, t.thumbXstyle);
            a[0] = t.isQuoted;
            a[1] = t.isQuotedInComposeBox;
            a[2] = t.thumbXstyle;
            a[3] = i;
        } else {
            i = a[3];
        }
        const l = i;
        let s;
        if (a[4] !== t.isQuoted || a[5] !== t.isQuotedInComposeBox) {
            s = (e || (e = r("stylex"))).props(o("WAWebPaymentBackground.stylex").styles.container, t.isQuoted === true && o("WAWebPaymentBackground.stylex").styles.isQuoted, t.isQuotedInComposeBox === true && o("WAWebPaymentBackground.stylex").styles.isQuotedInComposeBox);
            a[4] = t.isQuoted;
            a[5] = t.isQuotedInComposeBox;
            a[6] = s;
        } else {
            s = a[6];
        }
        const l_style = l.style;
        const d = t.isQuoted !== true ? "bg-payments" : "";
        const m = l.className ?? "";
        let p;
        if (a[7] !== d || a[8] !== m) {
            p = [
                d,
                m
            ].filter(Boolean);
            a[7] = d;
            a[8] = m;
            a[9] = p;
        } else {
            p = a[9];
        }
        const _ = p.join(" ");
        let f;
        if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
            f = (e || (e = r("stylex"))).props(o("WAWebPaymentBackground.stylex").styles.foregroundData);
            a[10] = f;
        } else {
            f = a[10];
        }
        let g;
        if (a[11] !== t.children) {
            g = <div {...babelHelpers.extends({}, f, {
                children: t.children
            })}/>;
            a[11] = t.children;
            a[12] = g;
        } else {
            g = a[12];
        }
        let h;
        if (a[13] !== _ || a[14] !== g || a[15] !== l.style) {
            h = <div data-testid="payment-background-thumb" style={l_style} className={_}>{g}</div>;
            a[13] = _;
            a[14] = g;
            a[15] = l.style;
            a[16] = h;
        } else {
            h = a[16];
        }
        let y;
        if (a[17] !== s || a[18] !== h) {
            y = <div {...babelHelpers.extends({}, s, {
                children: h
            })}/>;
            a[17] = s;
            a[18] = h;
            a[19] = y;
        } else {
            y = a[19];
        }
        return y;
    }
    l.default = c;
}, 98);