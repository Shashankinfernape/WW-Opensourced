__d("WAWebPaymentLinkTrustSignalFooter.react", [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WDSIconIcShieldVerifiedFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        footer: {
            paddingTop: "x1tiyuxx",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            height: "xxk0z11",
            $$css: true
        },
        isMedia: {
            paddingTop: "x1gxa6cn",
            paddingInlineEnd: "x1uc92m",
            paddingBottom: "x1nbhmlj",
            paddingInlineStart: "x181vq82",
            $$css: true
        },
        dirMismatch: {
            paddingBottom: "xv6tirj",
            $$css: true
        },
        icon: {
            display: "x1rg5ohu",
            color: "x1bvqhpb",
            verticalAlign: "xxymvpz",
            marginInlineEnd: "x16q7b9a",
            $$css: true
        },
        footerText: {
            color: "xhslqc4",
            fontSize: "x1pg5gke",
            lineHeight: "x1d3mw78",
            verticalAlign: "xxymvpz",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(18);
        const { dir, msg, rtl, type } = e;
        let d;
        if (t[0] !== msg) {
            d = m(msg);
            t[0] = msg;
            t[1] = d;
        } else {
            d = t[1];
        }
        const p = d;
        if (p == null) {
            return null;
        }
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = r("WAWebL10N").isRTL();
            t[2] = _;
        } else {
            _ = t[2];
        }
        const f = rtl !== _;
        let g;
        if (t[3] !== p) {
            g = s._("Seller verified by {Payment service provider name}", [
                s._param("Payment service provider name", p)
            ]);
            t[3] = p;
            t[4] = g;
        } else {
            g = t[4];
        }
        const h = g;
        const y = type !== o("WAWebMsgType").MSG_TYPE.CHAT && c.isMedia;
        const C = f && c.dirMismatch;
        let b;
        if (t[5] !== y || t[6] !== C) {
            b = [
                c.footer,
                y,
                C
            ];
            t[5] = y;
            t[6] = C;
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = !rtl;
        let S;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            S = u.jsx(r("WDSIconIcShieldVerifiedFilled.react"), {
                iconXstyle: c.icon,
                height: 16,
                width: 16
            });
            t[8] = S;
        } else {
            S = t[8];
        }
        let R;
        if (t[9] !== dir || t[10] !== f || t[11] !== h) {
            R = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: c.footerText,
                text: h,
                direction: dir,
                dirMismatch: f,
                testid: "payments-link-trust-signal-footer"
            });
            t[9] = dir;
            t[10] = f;
            t[11] = h;
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] !== msg.id || t[14] !== b || t[15] !== v || t[16] !== R) {
            const Component = r("WAWebMessageSpacerText.react");
            L = <Component xstyle={b} spacer={v} msgKey={msg.id}>{S}{R}</Component>;
            t[13] = msg.id;
            t[14] = b;
            t[15] = v;
            t[16] = R;
            t[17] = L;
        } else {
            L = t[17];
        }
        return L;
    }
    function m(msg) {
        const t = o("WAWebMsgGetters").getPaymentLinkPreviewMetaTags(msg);
        return t?.providerName;
    }
    l.default = d;
}, 226);