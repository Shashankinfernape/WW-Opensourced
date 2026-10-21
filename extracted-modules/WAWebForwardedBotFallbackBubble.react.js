__d("WAWebForwardedBotFallbackBubble.react", [
    "fbt",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WDSIconIcMessageReport.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function d(e) {
        const t = o("react-compiler-runtime").c(20);
        const { displayAuthor, displayType, mode, msgKey, onDownloadClick } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("WhatsApp can't verify the security of this media. Only download if you trust the sender.");
            t[0] = d;
        } else {
            d = t[0];
        }
        const m = d;
        let p;
        if (t[1] !== onDownloadClick) {
            p = function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    t.preventDefault();
                    onDownloadClick();
                }
            };
            t[1] = onDownloadClick;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = u.jsx(r("WDSIconIcMessageReport.react"), {});
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = `forwarded-bot-fallback-bubble-${mode}`;
        let h;
        if (t[4] !== g) {
            h = <span data-testid={g}>{m}</span>;
            t[4] = g;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "xo1mcw5 x1ypdohk"
            };
            t[6] = y;
        } else {
            y = t[6];
        }
        let C;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Download");
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] !== _ || t[9] !== onDownloadClick) {
            b = <span {...babelHelpers.extends({}, y, {
                "data-testid": "forwarded-bot-fallback-download-cta",
                onClick: onDownloadClick,
                onKeyDown: _,
                role: "button",
                tabIndex: 0,
                children: C
            })}/>;
            t[8] = _;
            t[9] = onDownloadClick;
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] !== msgKey || t[12] !== h || t[13] !== b) {
            const Component = r("WAWebMessagePlaceholder.react");
            v = <Component Icon={f} msgKey={msgKey}>{h} {b}</Component>;
            t[11] = msgKey;
            t[12] = h;
            t[13] = b;
            t[14] = v;
        } else {
            v = t[14];
        }
        let S;
        if (t[15] !== displayAuthor || t[16] !== displayType || t[17] !== msgKey || t[18] !== v) {
            const Component = r("WAWebMessageTextBubble.react");
            S = <Component msgKey={msgKey} displayType={displayType} displayAuthor={displayAuthor}>{v}</Component>;
            t[15] = displayAuthor;
            t[16] = displayType;
            t[17] = msgKey;
            t[18] = v;
            t[19] = S;
        } else {
            S = t[19];
        }
        return S;
    }
    l.default = d;
}, 226);