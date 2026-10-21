__d("WAWebMessageCiphertext.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebPlaceholder",
    "WAWebTabOrder",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = (externalLink)=>{
        o("WAWebExternalLink.react").openExternalLink(externalLink);
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(15);
        const { displayAuthor, msgKey } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getSubtype
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const d = l[0];
        const m = l[1];
        let p;
        if (t[1] !== d || t[2] !== m) {
            p = o("WAWebPlaceholder").getPlaceholderDetails(m ? m.toString() : "", d);
            t[1] = d;
            t[2] = m;
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = p;
        const { externalLink, placeholderIcon, placeholderMsg } = _;
        let y;
        if (t[4] !== externalLink) {
            const Component = r("WDSTextualLink.react");
            y = externalLink != null && <Component data-tab={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} testid="ciphertext-placeholder-learn-more" onClick={function() {
                c(externalLink);
            }}>{s._("Learn more")}</Component>;
            t[4] = externalLink;
            t[5] = y;
        } else {
            y = t[5];
        }
        const C = y;
        let b;
        if (t[6] !== C || t[7] !== msgKey || t[8] !== placeholderIcon || t[9] !== placeholderMsg) {
            const Component = r("WAWebMessagePlaceholder.react");
            b = <Component Icon={placeholderIcon} msgKey={msgKey}>{placeholderMsg} {C}</Component>;
            t[6] = C;
            t[7] = msgKey;
            t[8] = placeholderIcon;
            t[9] = placeholderMsg;
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] !== displayAuthor || t[12] !== msgKey || t[13] !== b) {
            const Component = r("WAWebMessageTextBubble.react");
            v = <Component msgKey={msgKey} displayAuthor={displayAuthor}>{b}</Component>;
            t[11] = displayAuthor;
            t[12] = msgKey;
            t[13] = b;
            t[14] = v;
        } else {
            v = t[14];
        }
        return v;
    }
    l.default = d;
}, 226);