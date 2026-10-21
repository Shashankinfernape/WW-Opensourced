__d("WAWebNewsletterSubscribeButton.react", [
    "fbt",
    "WAWebButton.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const { isLoading, onClick, tabOrder } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Follow");
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== isLoading || t[2] !== onClick || t[3] !== tabOrder) {
            const Component = o("WAWebButton.react").WAWebButtonPrimary;
            l = <Component testid="conversation-panel-header-newsletter-follow-button" onClick={onClick} spinner={isLoading} disabled={isLoading} tabOrder={tabOrder}>{i}</Component>;
            t[1] = isLoading;
            t[2] = onClick;
            t[3] = tabOrder;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    l.default = c;
}, 226);