__d("WAWebPDFNWhatsAppModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebPDFNCommonUtils",
    "WAWebPDFNContentElement.react",
    "WAWebPDFNHeaderImage.react",
    "WAWebPDFNSanitizedSvg.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        bulletSubtitle: {
            fontSize: "x1f6kntn",
            lineHeight: "x16h55sf",
            fontWeight: "xo1l8bm",
            $$css: true
        },
        marginStart12: {
            marginInlineStart: "x1uvdrpn",
            $$css: true
        },
        marginEnd24: {
            marginInlineEnd: "x7vsco6",
            $$css: true
        },
        paddingTop24: {
            paddingTop: "xl7twdi",
            $$css: true
        }
    };
    function m(e) {
        const a = o("react-compiler-runtime").c(21);
        const { handleCancel, handleOk, pdfnNotice } = e;
        let m;
        if (a[0] !== pdfnNotice) {
            m = o("WAWebPDFNCommonUtils").getFormattedPdfnContent(pdfnNotice);
            a[0] = pdfnNotice;
            a[1] = m;
        } else {
            m = a[1];
        }
        const p = m;
        const { bulletContent, footerContent, headerContent, okText } = p;
        let C;
        if (a[2] !== bulletContent) {
            C = bulletContent != null ? <_ bullets={bulletContent}/> : null;
            a[2] = bulletContent;
            a[3] = C;
        } else {
            C = a[3];
        }
        const b = C;
        let v;
        if (a[4] !== footerContent) {
            v = footerContent != null ? c.jsx(r("WAWebPDFNContentElement.react"), {
                as: "div",
                content: footerContent,
                xstyle: d.paddingTop24
            }) : null;
            a[4] = footerContent;
            a[5] = v;
        } else {
            v = a[5];
        }
        const S = v;
        let R;
        if (a[6] !== headerContent) {
            R = c.jsx(r("WAWebPDFNHeaderImage.react"), {
                content: headerContent
            });
            a[6] = headerContent;
            a[7] = R;
        } else {
            R = a[7];
        }
        const L = R;
        const E = pdfnNotice?.privacyDisclosureModal?.title;
        let cancelText;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            cancelText = s._("Close");
            a[8] = cancelText;
        } else {
            cancelText = a[8];
        }
        let I;
        if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x1603h9y xk50ysn x37zpob x2b8uid xl7twdi"
            };
            a[9] = I;
        } else {
            I = a[9];
        }
        const T = pdfnNotice?.privacyDisclosureModal?.title;
        let D;
        if (a[10] !== T) {
            D = <div {...babelHelpers.extends({
                role: "heading",
                "aria-level": 2,
                "data-testid": "popup-title"
            }, I, {
                children: T
            })}/>;
            a[10] = T;
            a[11] = D;
        } else {
            D = a[11];
        }
        let x;
        if (a[12] !== b || a[13] !== S || a[14] !== handleCancel || a[15] !== handleOk || a[16] !== L || a[17] !== okText || a[18] !== E || a[19] !== D) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            x = <Component ariaLabel={E} onOK={handleOk} okText={okText} cancelText={cancelText} onCancel={handleCancel} onOverlayClick={handleCancel}>{L}{D}{b}{S}</Component>;
            a[12] = b;
            a[13] = S;
            a[14] = handleCancel;
            a[15] = handleOk;
            a[16] = L;
            a[17] = okText;
            a[18] = E;
            a[19] = D;
            a[20] = x;
        } else {
            x = a[20];
        }
        return x;
    }
    function P2Component(t) {
        const n = o("react-compiler-runtime").c(14);
        const { iconSvg, secondaryText, text } = t;
        let s;
        if (n[0] !== secondaryText) {
            s = secondaryText != null ? c.jsx(r("WAWebPDFNContentElement.react"), {
                as: "span",
                xstyle: d.bulletSubtitle,
                content: secondaryText
            }) : null;
            n[0] = secondaryText;
            n[1] = s;
        } else {
            s = n[1];
        }
        const u = s;
        let m;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x1n2onr6 x78zum5 x6s0dn4 xhslqc4 x1nxh6w3 x1nmyh1g"
            };
            n[2] = m;
        } else {
            m = n[2];
        }
        let p;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = (e || (e = r("stylex")))([
                d.marginStart12,
                d.marginEnd24
            ]);
            n[3] = p;
        } else {
            p = n[3];
        }
        let _;
        if (n[4] !== iconSvg) {
            _ = c.jsx(r("WAWebPDFNSanitizedSvg.react"), {
                iconSvg,
                classNames: p
            });
            n[4] = iconSvg;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== text) {
            const Component = r("WDSText.react");
            f = <Component type="Body1" colorName="contentDefault" isSemanticHeading>{text}</Component>;
            n[6] = text;
            n[7] = f;
        } else {
            f = n[7];
        }
        let g;
        if (n[8] !== u || n[9] !== f) {
            g = <div>{f}{u}</div>;
            n[8] = u;
            n[9] = f;
            n[10] = g;
        } else {
            g = n[10];
        }
        let h;
        if (n[11] !== _ || n[12] !== g) {
            h = <div {...babelHelpers.extends({}, m, {
                children: [
                    _,
                    g
                ]
            })}/>;
            n[11] = _;
            n[12] = g;
            n[13] = h;
        } else {
            h = n[13];
        }
        return h;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_bullets = e.bullets;
        let r;
        if (t[0] !== e_bullets) {
            r = e_bullets.map(f);
            t[0] = e_bullets;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function f(e, t) {
        return <P2Component key={t} text={e.text} icon={e.icon} iconSvg={e.iconSvg} secondaryText={e.secondaryText}/>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = m;
}, 226);