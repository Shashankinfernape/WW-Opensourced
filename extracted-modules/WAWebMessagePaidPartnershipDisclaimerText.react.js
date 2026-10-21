__d("WAWebMessagePaidPartnershipDisclaimerText.react", [
    "fbt",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        text: {
            display: "x1lliihq",
            $$css: true
        },
        marginVert2: {
            marginTop: "xfl633f",
            marginBottom: "x13m54ha",
            $$css: true
        },
        marginBottom4: {
            marginBottom: "x4tpdpg",
            $$css: true
        },
        paddingStart4: {
            paddingInlineStart: "x181vq82",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_msgKey = e.msgKey;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebMsgGetters").getHasPaidPartnershipLabel,
                o("WAWebMsgGetters").getType
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msgKey, r);
        const i = a[0];
        const l = a[1];
        if (i !== true || !o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()) {
            return null;
        }
        const d = l === o("WAWebMsgType").MSG_TYPE.PTT;
        const m = d && c.marginBottom4;
        const p = d && c.paddingStart4;
        let _;
        if (t[1] !== m || t[2] !== p) {
            _ = [
                c.text,
                c.marginVert2,
                m,
                p
            ];
            t[1] = m;
            t[2] = p;
            t[3] = _;
        } else {
            _ = t[3];
        }
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Paid partnership");
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] !== _) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            g = <Component weight="normal" color="secondary" testid="paid-partnership-disclaimer" xstyle={_}>{f}</Component>;
            t[5] = _;
            t[6] = g;
        } else {
            g = t[6];
        }
        return g;
    }
    l.default = d;
}, 226);