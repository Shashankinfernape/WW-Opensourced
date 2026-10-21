__d("WAWebUprPaymentBubble.react", [
    "fbt",
    "WAWebFormatUprAmount",
    "WAWebMediaMsgPreview.react",
    "WAWebOrderDetailProductLabel",
    "WAWebUprPaymentBubbleArtworkLoadable",
    "WAWebUprPaymentMethodLabels",
    "WAWebUprPaymentRequest",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = 10;
    function d(option, t) {
        return <span key={t} className="xbrszos xea3l6g x18isctg x2q3nzr x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1849jeq xxk0z11 x1y1aw1k xf159sx xwib8y2 xmzvs34 x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s" data-testid="upr_bubble_pay_with_icon_card">{u.jsx(o("WAWebUprPaymentBubbleArtworkLoadable").WAWebUprPaymentBubbleArtworkLoadable, {
            kind: "pay_with",
            option
        })}</span>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m(paymentOptions) {
        const t = [];
        for (const n of paymentOptions){
            if (n.kind === "payment_account" && (t.push(n), t.length >= c)) {
                break;
            }
        }
        return t;
    }
    function P7Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <span className="x1bvqhpb x190qgfh x1xlr1w8 x1d3mw78 xlxmecl xtvhhri xcahpfu">{s._("Payment request")}</span>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { downloadMedia, mediaData, thumbnailUrl } = e;
        let i;
        if (t[0] !== mediaData || t[1] !== thumbnailUrl) {
            i = mediaData != null && o("WAWebMediaMsgPreview.react").isMediaTypeWithImage(mediaData.type) || thumbnailUrl != null && thumbnailUrl !== "";
            t[0] = mediaData;
            t[1] = thumbnailUrl;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let s;
        if (t[3] !== downloadMedia || t[4] !== l || t[5] !== mediaData || t[6] !== thumbnailUrl) {
            s = l ? <div className="x1useyqa xsdox4t xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ekq09l xlmuga0 x54tcbp xlzwp1d x9f619 x18d0r48 xztyhrg xiy17q3 x2lah0s x6ikm8r x10wlt62" data-testid="upr_bubble_item_thumbnail">{u.jsx(o("WAWebUprPaymentBubbleArtworkLoadable").WAWebUprPaymentBubbleArtworkLoadable, {
                downloadMedia,
                kind: "item_thumbnail",
                mediaData,
                thumbnailUrl
            })}</div> : null;
            t[3] = downloadMedia;
            t[4] = l;
            t[5] = mediaData;
            t[6] = thumbnailUrl;
            t[7] = s;
        } else {
            s = t[7];
        }
        return s;
    }
    function F18(e) {
        const t = o("react-compiler-runtime").c(16);
        const { downloadMedia, mediaData, name, quantity, thumbnailUrl } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x78zum5 x1q0g3np x6s0dn4 xtqikln"
            };
            t[0] = d;
        } else {
            d = t[0];
        }
        let m;
        if (t[1] !== downloadMedia || t[2] !== mediaData || t[3] !== thumbnailUrl) {
            m = <_ mediaData={mediaData} downloadMedia={downloadMedia} thumbnailUrl={thumbnailUrl}/>;
            t[1] = downloadMedia;
            t[2] = mediaData;
            t[3] = thumbnailUrl;
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x78zum5 xdt5ytf xeuugli x1iyjqo2"
            };
            t[5] = p;
        } else {
            p = t[5];
        }
        let f;
        if (t[6] !== name) {
            const Component = r("WDSText.react");
            f = <Component type="Body2Emphasized" colorName="contentDefault">{name}</Component>;
            t[6] = name;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== quantity) {
            const Component = r("WDSText.react");
            g = <Component type="Body3" colorName="contentDeemphasized">{s._("_j{\"*\":\"Quantity {count}\"}", [
                s._param("count", quantity, [
                    0
                ])
            ])}</Component>;
            t[8] = quantity;
            t[9] = g;
        } else {
            g = t[9];
        }
        let h;
        if (t[10] !== f || t[11] !== g) {
            h = <div {...babelHelpers.extends({}, p, {
                children: [
                    f,
                    g
                ]
            })}/>;
            t[10] = f;
            t[11] = g;
            t[12] = h;
        } else {
            h = t[12];
        }
        let y;
        if (t[13] !== m || t[14] !== h) {
            y = <div {...babelHelpers.extends({}, d, {
                "data-testid": "upr_bubble_item_row",
                children: [
                    m,
                    h
                ]
            })}/>;
            t[13] = m;
            t[14] = h;
            t[15] = y;
        } else {
            y = t[15];
        }
        return y;
    }
    function G10(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_items = e.items;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x78zum5 x1q0g3np x6s0dn4 xtqikln"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x78zum5 xdt5ytf xeuugli x1iyjqo2"
            };
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== e_items) {
            l = o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(e_items);
            t[2] = e_items;
            t[3] = l;
        } else {
            l = t[3];
        }
        let c;
        if (t[4] !== l) {
            const Component = r("WDSText.react");
            c = <Component type="Body2Emphasized" colorName="contentDefault" maxLines={1}>{l}</Component>;
            t[4] = l;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== e_items.length) {
            const Component = r("WDSText.react");
            d = <Component type="Body3" colorName="contentDeemphasized">{s._("_j{\"*\":\"{count} items\",\"_1\":\"1 item\"}", [
                s._plural(e_items.length, "count")
            ])}</Component>;
            t[6] = e_items.length;
            t[7] = d;
        } else {
            d = t[7];
        }
        let m;
        if (t[8] !== c || t[9] !== d) {
            m = <div {...babelHelpers.extends({}, a, {
                "data-testid": "upr_bubble_multi_item_row",
                children: <div {...babelHelpers.extends({}, i, {
                    children: [
                        c,
                        d
                    ]
                })}/>
            })}/>;
            t[8] = c;
            t[9] = d;
            t[10] = m;
        } else {
            m = t[10];
        }
        return m;
    }
    function H9Component(e) {
        const t = o("react-compiler-runtime").c(23);
        const { account, currency } = e;
        let i;
        let l;
        if (t[0] !== account.accountType || t[1] !== account.identifierType || t[2] !== account.identifierValue) {
            l = Symbol.for("react.early_return_sentinel");
            e: {
                const s = o("WAWebUprPaymentMethodLabels").getUprMethodLabels(account.accountType, account.identifierType);
                if (s == null) {
                    l = null;
                    break e;
                }
                i = s.formatForDisplay != null ? s.formatForDisplay(account.identifierValue) : account.identifierValue;
            }
            t[0] = account.accountType;
            t[1] = account.identifierType;
            t[2] = account.identifierValue;
            t[3] = i;
            t[4] = l;
        } else {
            i = t[3];
            l = t[4];
        }
        if (l !== Symbol.for("react.early_return_sentinel")) {
            return l;
        }
        const c = i;
        let d;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x78zum5 x1q0g3np x6s0dn4 xtqikln"
            };
            t[5] = d;
        } else {
            d = t[5];
        }
        let m;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s"
            };
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== currency) {
            p = <span {...babelHelpers.extends({}, m, {
                children: u.jsx(o("WAWebUprPaymentBubbleArtworkLoadable").WAWebUprPaymentBubbleArtworkLoadable, {
                    currency,
                    kind: "account"
                })
            })}/>;
            t[7] = currency;
            t[8] = p;
        } else {
            p = t[8];
        }
        let _;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                className: "x78zum5 xdt5ytf xeuugli x1iyjqo2"
            };
            t[9] = _;
        } else {
            _ = t[9];
        }
        let f;
        if (t[10] !== c) {
            const Component = r("WDSText.react");
            f = <Component type="Body2Emphasized" colorName="contentDefault">{c}</Component>;
            t[10] = c;
            t[11] = f;
        } else {
            f = t[11];
        }
        let g;
        if (t[12] !== account.institutionName) {
            const Component = r("WDSText.react");
            g = <Component type="Body3" colorName="contentDeemphasized">{account.institutionName}</Component>;
            t[12] = account.institutionName;
            t[13] = g;
        } else {
            g = t[13];
        }
        let h;
        if (t[14] !== account.beneficiaryName) {
            const Component = r("WDSText.react");
            h = account.beneficiaryName !== "" ? <Component type="Body3" colorName="contentDeemphasized">{account.beneficiaryName}</Component> : null;
            t[14] = account.beneficiaryName;
            t[15] = h;
        } else {
            h = t[15];
        }
        let y;
        if (t[16] !== f || t[17] !== g || t[18] !== h) {
            y = <div {...babelHelpers.extends({}, _, {
                children: [
                    f,
                    g,
                    h
                ]
            })}/>;
            t[16] = f;
            t[17] = g;
            t[18] = h;
            t[19] = y;
        } else {
            y = t[19];
        }
        let C;
        if (t[20] !== y || t[21] !== p) {
            C = <div {...babelHelpers.extends({}, d, {
                "data-testid": "upr_bubble_account_row",
                children: [
                    p,
                    y
                ]
            })}/>;
            t[20] = y;
            t[21] = p;
            t[22] = C;
        } else {
            C = t[22];
        }
        return C;
    }
    function y(currency) {
        return u.jsx(o("WAWebUprPaymentBubbleArtworkLoadable").WAWebUprPaymentBubbleArtworkLoadable, {
            currency,
            kind: "account"
        });
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C(e) {
        const t = o("react-compiler-runtime").c(19);
        const { accounts, currency } = e;
        let i;
        if (t[0] !== accounts) {
            i = accounts.map(b).join(", ");
            t[0] = accounts;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x78zum5 x1q0g3np x6s0dn4 xtqikln"
            };
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s"
            };
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== currency) {
            m = y(currency);
            t[4] = currency;
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        if (t[6] !== m) {
            p = <span {...babelHelpers.extends({}, d, {
                children: m
            })}/>;
            t[6] = m;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                className: "x78zum5 xdt5ytf xeuugli x1iyjqo2"
            };
            t[8] = _;
        } else {
            _ = t[8];
        }
        let f;
        if (t[9] !== accounts.length) {
            const Component = r("WDSText.react");
            f = <Component type="Body2Emphasized" colorName="contentDefault">{s._("_j{\"*\":\"Payment accounts ({count})\"}", [
                s._param("count", accounts.length, [
                    0
                ])
            ])}</Component>;
            t[9] = accounts.length;
            t[10] = f;
        } else {
            f = t[10];
        }
        let g;
        if (t[11] !== l) {
            const Component = r("WDSText.react");
            g = <Component type="Body3" colorName="contentDeemphasized">{l}</Component>;
            t[11] = l;
            t[12] = g;
        } else {
            g = t[12];
        }
        let h;
        if (t[13] !== f || t[14] !== g) {
            h = <div {...babelHelpers.extends({}, _, {
                children: [
                    f,
                    g
                ]
            })}/>;
            t[13] = f;
            t[14] = g;
            t[15] = h;
        } else {
            h = t[15];
        }
        let C;
        if (t[16] !== p || t[17] !== h) {
            C = <div {...babelHelpers.extends({}, c, {
                "data-testid": "upr_bubble_accounts_summary_row",
                children: [
                    p,
                    h
                ]
            })}/>;
            t[16] = p;
            t[17] = h;
            t[18] = C;
        } else {
            C = t[18];
        }
        return C;
    }
    function b(e) {
        return e.institutionName;
    }
    function V4Component(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_paymentOptions = e.paymentOptions;
        let a;
        if (t[0] !== e_paymentOptions) {
            const i = new Set;
            a = [];
            for (const c of e_paymentOptions){
                const m = c.kind === "payment_account" ? `account/${c.accountType}` : "link";
                if (!i.has(m)) {
                    i.add(m);
                    a.push(d(c, m));
                }
            }
            t[0] = e_paymentOptions;
            t[1] = a;
        } else {
            a = t[1];
        }
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3"
            };
            t[2] = p;
        } else {
            p = t[2];
        }
        let _;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            _ = <Component type="Body2" colorName="contentDefault">{s._("Pay with")}</Component>;
            f = {
                className: "x78zum5 x1q0g3np xmixu3c"
            };
            t[3] = _;
            t[4] = f;
        } else {
            _ = t[3];
            f = t[4];
        }
        let g;
        if (t[5] !== a) {
            g = <div {...babelHelpers.extends({}, p, {
                "data-testid": "upr_bubble_pay_with_row",
                children: [
                    _,
                    <div {...babelHelpers.extends({}, f, {
                        children: a
                    })}/>
                ]
            })}/>;
            t[5] = a;
            t[6] = g;
        } else {
            g = t[6];
        }
        return g;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(7);
        const { amount, currency } = e;
        let i;
        if (t[0] !== amount || t[1] !== currency) {
            i = o("WAWebFormatUprAmount").formatUprAmount(currency, amount);
            t[0] = amount;
            t[1] = currency;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let c;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3"
            };
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            d = <Component type="Body2Emphasized" colorName="contentDefault">{s._("Total")}</Component>;
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== l) {
            const Component = r("WDSText.react");
            m = <div {...babelHelpers.extends({}, c, {
                "data-testid": "upr_bubble_total_row",
                children: [
                    d,
                    <Component type="Body2Emphasized" colorName="contentDefault">{l}</Component>
                ]
            })}/>;
            t[5] = l;
            t[6] = m;
        } else {
            m = t[6];
        }
        return m;
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(37);
        const { downloadHeaderMedia, headerMediaData, msg, thumbnailUrl } = e;
        let amount;
        let s;
        let c;
        let d;
        let _;
        let y;
        if (t[0] !== msg) {
            y = Symbol.for("react.early_return_sentinel");
            e: {
                s = o("WAWebUprPaymentRequest").parseUprPaymentInfo(msg);
                if (s == null) {
                    y = null;
                    break e;
                }
                const E = s.totalAmount != null && s.totalAmount.offset !== 0 ? s.totalAmount.value / s.totalAmount.offset : null;
                amount = E != null && E > 0 ? E : null;
                const k = s.items?.length ?? 0;
                d = k === 1 ? s.items?.[0] : null;
                c = k > 1 ? s.items : null;
                const I = k > 0;
                _ = I ? [] : m(s.paymentOptions);
            }
            t[0] = msg;
            t[1] = amount;
            t[2] = s;
            t[3] = c;
            t[4] = d;
            t[5] = _;
            t[6] = y;
        } else {
            amount = t[1];
            s = t[2];
            c = t[3];
            d = t[4];
            _ = t[5];
            y = t[6];
        }
        if (y !== Symbol.for("react.early_return_sentinel")) {
            return y;
        }
        const accounts = _;
        let D;
        let x;
        let $;
        let P;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "x78zum5 xdt5ytf x1u2d2a2 xxc7z9f x1198e8h x1lxpwgx xod5an3 xw01apr"
            };
            x = {
                className: "x1bu39yj x1i282gy xx9ypkp xd15eu0 x11ecxm0 x9f619 x78zum5 xdt5ytf x1yrsyyn x12xbjc7 x12w63v0 x1nzty39"
            };
            $ = <P7Component/>;
            P = <div className="xh8yej3 x178xt8z xlya59e xx42vgk xav9cv8 xefnzgg"/>;
            t[7] = D;
            t[8] = x;
            t[9] = $;
            t[10] = P;
        } else {
            D = t[7];
            x = t[8];
            $ = t[9];
            P = t[10];
        }
        let N;
        if (t[11] !== downloadHeaderMedia || t[12] !== headerMediaData || t[13] !== d || t[14] !== thumbnailUrl) {
            N = d != null ? <><F18 downloadMedia={downloadHeaderMedia} mediaData={headerMediaData} name={d.name} quantity={d.quantity} thumbnailUrl={thumbnailUrl}/><div className="xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg"/></> : null;
            t[11] = downloadHeaderMedia;
            t[12] = headerMediaData;
            t[13] = d;
            t[14] = thumbnailUrl;
            t[15] = N;
        } else {
            N = t[15];
        }
        let M;
        if (t[16] !== c) {
            M = c != null ? <><G10 items={c}/><div className="xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg"/></> : null;
            t[16] = c;
            t[17] = M;
        } else {
            M = t[17];
        }
        let w;
        if (t[18] !== accounts[0] || t[19] !== accounts.length || t[20] !== s.currency) {
            w = accounts.length === 1 ? <><H9Component account={accounts[0]} currency={s.currency}/><div className="xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg"/></> : null;
            t[18] = accounts[0];
            t[19] = accounts.length;
            t[20] = s.currency;
            t[21] = w;
        } else {
            w = t[21];
        }
        let A;
        if (t[22] !== accounts || t[23] !== s.currency) {
            A = accounts.length >= 2 ? <><C accounts={accounts} currency={s.currency}/><div className="xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg"/></> : null;
            t[22] = accounts;
            t[23] = s.currency;
            t[24] = A;
        } else {
            A = t[24];
        }
        let F;
        if (t[25] !== s.paymentOptions) {
            F = <V4Component paymentOptions={s.paymentOptions}/>;
            t[25] = s.paymentOptions;
            t[26] = F;
        } else {
            F = t[26];
        }
        let O;
        if (t[27] !== amount || t[28] !== s.currency) {
            O = amount != null ? <><div className="xh8yej3 x178xt8z xlya59e xx42vgk x1380le5 xefnzgg"/><S amount={amount} currency={s.currency}/></> : null;
            t[27] = amount;
            t[28] = s.currency;
            t[29] = O;
        } else {
            O = t[29];
        }
        let B;
        if (t[30] !== A || t[31] !== F || t[32] !== O || t[33] !== N || t[34] !== M || t[35] !== w) {
            B = <div {...babelHelpers.extends({
                "data-testid": "upr_payment_bubble"
            }, D, {
                children: <div {...babelHelpers.extends({}, x, {
                    children: [
                        $,
                        P,
                        N,
                        M,
                        w,
                        A,
                        F,
                        O
                    ]
                })}/>
            })}/>;
            t[30] = A;
            t[31] = F;
            t[32] = O;
            t[33] = N;
            t[34] = M;
            t[35] = w;
            t[36] = B;
        } else {
            B = t[36];
        }
        return B;
    }
    l.default = R;
}, 226);