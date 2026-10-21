__d("WAWebPaymentDetailsPixCodeBubbleHeader.react", [
    "WAWebFlex.react",
    "WAWebMessageMeta.react",
    "WAWebPaymentDetailsBubbleHeaderLoadable",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        header: {
            marginTop: "xfl633f",
            marginBottom: "xefnzgg",
            marginInlineStart: "x1sbwfh8",
            marginInlineEnd: "x16q7b9a",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        meta: {
            alignSelf: "xpvyfi4",
            height: "xiryn5a",
            paddingInlineEnd: "x1uc92m",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { displayType, msgKey } = e;
        let a;
        if (t[0] !== msgKey) {
            a = s.jsx(o("WAWebPaymentDetailsBubbleHeaderLoadable").WAWebPaymentDetailsPixCodeBubbleHeaderLoadable, {
                msgKey
            });
            t[0] = msgKey;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== displayType || t[3] !== msgKey) {
            const Component = o("WAWebFlex.react").FlexRow;
            i = <Component justify="end" testid="payment-details-pix-code-bubble-meta" xstyle={u.meta}>{s.jsx(o("WAWebMessageMeta.react").Meta, {
                displayType,
                msgKey
            })}</Component>;
            t[2] = displayType;
            t[3] = msgKey;
            t[4] = i;
        } else {
            i = t[4];
        }
        let l;
        if (t[5] !== a || t[6] !== i) {
            const Component = o("WAWebFlex.react").FlexColumn;
            l = <Component testid="payment-details-pix-code-bubble-header" xstyle={u.header}>{a}{i}</Component>;
            t[5] = a;
            t[6] = i;
            t[7] = l;
        } else {
            l = t[7];
        }
        return l;
    }
    l.default = c;
}, 98);