__d("WAWebPaymentDetailsBubbleHeaderLoadable", [
    "JSResourceForInteraction",
    "WAWebClickable.react",
    "WAWebFbtCommon",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSText.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        placeholder: {
            backgroundColor: "x1bu39yj",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            height: "xnxb3zj",
            marginBottom: "xcytdqz",
            width: "xh8yej3",
            $$css: true
        },
        pixCodePlaceholder: {
            height: "x185x1x2",
            $$css: true
        },
        retry: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    const d = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebPaymentDetailsBubbleHeader.react").__setRef("WAWebPaymentDetailsBubbleHeaderLoadable").load();
    }, "WAWebPaymentDetailsBubbleHeader");
    const m = r("WAWebLoadable")({
        loader: d,
        loading: function(t) {
            return <_ hasFailed={t.error != null} onRetry={t.retry}/>;
        },
        renderLoadingImmediately: true
    });
    const p = r("WAWebLoadable")({
        loader: d,
        loading: function(t) {
            return <_ hasFailed={t.error != null} isPixCode onRetry={t.retry}/>;
        },
        renderLoadingImmediately: true
    });
    function _({ hasFailed, isPixCode = false, onRetry }) {
        const s = isPixCode ? c.pixCodePlaceholder : null;
        if (hasFailed) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebClickable.react").Clickable;
            return <Component_1 dataTestId="payment-details-bubble-header-retry" onClick={function(t) {
                t.stopPropagation();
                onRetry();
            }} xstyle={[
                c.placeholder,
                s,
                c.retry
            ]}><Component colorName="contentDeemphasized" type="Body2">{r("WAWebFbtCommon")("Try again")}</Component></Component_1>;
        }
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.placeholder, s), {
            "data-testid": isPixCode ? "payment-details-pix-code-bubble-header-placeholder" : "payment-details-bubble-header-placeholder"
        })}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.WAWebPaymentDetailsBubbleHeaderLoadable = m;
    l.WAWebPaymentDetailsPixCodeBubbleHeaderLoadable = p;
}, 98);