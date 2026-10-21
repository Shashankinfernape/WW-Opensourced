__d("WAWebBotShoppingItemCard.react", [
    "WAWebBotCardImageUtils",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WDSText.react",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 212;
    const c = 220;
    function d(e) {
        const t = o("react-compiler-runtime").c(26);
        const { brand, imageUrl, price, productUrl, salePrice, title } = e;
        let p;
        if (t[0] !== imageUrl) {
            p = {
                imageUrl,
                width: u,
                height: u
            };
            t[0] = imageUrl;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = o("WAWebBotCardImageUtils").useResizedImage(p);
        let f;
        if (t[2] !== productUrl) {
            f = function() {
                if (r("isStringNotNullAndNotWhitespaceOnly")(productUrl)) {
                    o("WAWebExternalLink.react").openExternalLink(productUrl);
                }
            };
            t[2] = productUrl;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] !== g) {
            h = function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    t.preventDefault();
                    g();
                }
            };
            t[4] = g;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1ypdohk x78zum5 xdt5ytf x6ikm8r x10wlt62 x1tiyuxx x1uc92m x181vq82 xscbp6u x8a3fw1 x1hl2dhg x16grhtn"
            };
            t[6] = y;
        } else {
            y = t[6];
        }
        let C;
        if (t[7] !== _ || t[8] !== title) {
            const Component = r("WAWebImg.react");
            C = _ != null && <Component alt={title ?? ""} src={o("WAWebBotCardImageUtils").toJpegDataUrl(_)} className="xbrszos xea3l6g x18isctg x2q3nzr xs3hcls xl1xv1r xh8yej3"/>;
            t[7] = _;
            t[8] = title;
            t[9] = C;
        } else {
            C = t[9];
        }
        let b;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x78zum5 xdt5ytf x1nzty39 x12w63v0"
            };
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] !== brand) {
            const Component = r("WDSText.react");
            v = r("isStringNotNullAndNotWhitespaceOnly")(brand) && <Component type="Body3" colorName="contentDeemphasized" maxLines={1}>{brand}</Component>;
            t[11] = brand;
            t[12] = v;
        } else {
            v = t[12];
        }
        let S;
        if (t[13] !== title) {
            const Component = r("WDSText.react");
            S = r("isStringNotNullAndNotWhitespaceOnly")(title) && <div className="x13m54ha x1moqkgt"><Component type="Body1Emphasized" colorName="contentDefault" maxLines={1}>{title}</Component></div>;
            t[13] = title;
            t[14] = S;
        } else {
            S = t[14];
        }
        const price_1 = salePrice ?? price;
        let L;
        if (t[15] !== price_1) {
            L = <M1Component price={price_1}/>;
            t[15] = price_1;
            t[16] = L;
        } else {
            L = t[16];
        }
        let E;
        if (t[17] !== v || t[18] !== S || t[19] !== L) {
            E = <div {...babelHelpers.extends({}, b, {
                children: [
                    v,
                    S,
                    L
                ]
            })}/>;
            t[17] = v;
            t[18] = S;
            t[19] = L;
            t[20] = E;
        } else {
            E = t[20];
        }
        let k;
        if (t[21] !== g || t[22] !== E || t[23] !== h || t[24] !== C) {
            k = <div {...babelHelpers.extends({
                onClick: g,
                onKeyDown: h,
                role: "link",
                tabIndex: 0
            }, y, {
                children: [
                    C,
                    E
                ]
            })}/>;
            t[21] = g;
            t[22] = E;
            t[23] = h;
            t[24] = C;
            t[25] = k;
        } else {
            k = t[25];
        }
        return k;
    }
    function M1Component(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_price = e.price;
        if (!r("isStringNotNullAndNotWhitespaceOnly")(e_price)) {
            return null;
        }
        let a;
        if (t[0] !== e_price) {
            const Component = r("WDSText.react");
            a = <Component type="Body3" colorName="contentDeemphasized" maxLines={1}>{e_price}</Component>;
            t[0] = e_price;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    l.default = d;
}, 98);