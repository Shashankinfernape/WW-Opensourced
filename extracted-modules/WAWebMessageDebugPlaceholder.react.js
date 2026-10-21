__d("WAWebMessageDebugPlaceholder.react", [
    "fbt",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WDSIconIcErrorFilled.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getBody
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = u.jsx(r("WDSIconIcErrorFilled.react"), {
                width: 24,
                height: 24,
                colorName: "secondaryNegative"
            });
            t[1] = c;
        } else {
            c = t[1];
        }
        let d;
        if (t[2] !== l) {
            d = s._("This message was dropped due to error ({errorCode}). Please report the problem by selecting 'Report Issue' from the context menu of the message if you are in dev env. Or report the bug via Settings -> Report a bug if using a production app.", [
                s._param("errorCode", l)
            ]);
            t[2] = l;
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== e_msgKey || t[5] !== d) {
            const Component = r("WAWebMessagePlaceholder.react");
            m = <Component Icon={c} msgKey={e_msgKey}>{d}</Component>;
            t[4] = e_msgKey;
            t[5] = d;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== e_msgKey || t[8] !== m) {
            const Component = r("WAWebMessageTextBubble.react");
            p = <Component msgKey={e_msgKey} displayAuthor>{m}</Component>;
            t[7] = e_msgKey;
            t[8] = m;
            t[9] = p;
        } else {
            p = t[9];
        }
        return p;
    }
    l.default = c;
}, 226);