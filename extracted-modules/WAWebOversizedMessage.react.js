__d("WAWebOversizedMessage.react", [
    "WAWebFormatOversizedMsg",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { displayAuthor, msgKey } = e;
        let i;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = <div className="x1rg5ohu x1faq86j x1p8j9ns x18cpw0e">{s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                testid: "unknown",
                height: 24,
                width: 24
            })}</div>;
            l = {
                className: "xfl633f x1w9lr8p"
            };
            t[0] = i;
            t[1] = l;
        } else {
            i = t[0];
            l = t[1];
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = o("WAWebFormatOversizedMsg").formatOversizedMsgText();
            t[2] = u;
        } else {
            u = t[2];
        }
        let c;
        if (t[3] !== msgKey) {
            const Component = r("WAWebMessageSpacerText.react");
            c = <div {...babelHelpers.extends({}, l, {
                children: <Component msgKey={msgKey} theme="placeholder">{u}</Component>
            })}/>;
            t[3] = msgKey;
            t[4] = c;
        } else {
            c = t[4];
        }
        let d;
        if (t[5] !== displayAuthor || t[6] !== msgKey || t[7] !== c) {
            const Component = r("WAWebMessageTextBubble.react");
            d = <Component msgKey={msgKey} displayAuthor={displayAuthor}>{i}{c}</Component>;
            t[5] = displayAuthor;
            t[6] = msgKey;
            t[7] = c;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    l.default = u;
}, 98);