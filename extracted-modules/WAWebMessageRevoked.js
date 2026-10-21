__d("WAWebMessageRevoked", [
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatRevokedMsg",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WDSIconIcBlock.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            display: "x1rg5ohu",
            color: "xhslqc4",
            minWidth: "xnei2rj",
            marginInlineStart: "xe9ewy2",
            marginInlineEnd: "xcknrev",
            $$css: true
        },
        text: {
            marginTop: "xr9ek0c",
            marginBottom: "xjpr12u",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(18);
        const { displayAuthor, displayType, msgKey } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let c;
            l = [
                (c = o("WAWebMsgGetters")).getSubtype,
                c.getIsNewsletterMsg,
                c.getIsRevokedByMe,
                c.getIsSentByMe,
                c.getRevokeSender
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const m = d[0];
        const p = d[1];
        const isRevokedByMe = d[2];
        const f = d[3];
        const revokeSender = d[4];
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                "add",
                "remove",
                "change:name"
            ];
            t[1] = h;
        } else {
            h = t[1];
        }
        let y;
        let C;
        if (t[2] !== p || t[3] !== isRevokedByMe || t[4] !== f || t[5] !== revokeSender || t[6] !== m) {
            y = function() {
                return o("WAWebFormatRevokedMsg").formatRevokedMsgFor({
                    isNewsletterMsg: p,
                    isRevokedByMe,
                    isSentByMe: f,
                    revokeSender,
                    subtype: m
                });
            };
            C = [
                p,
                isRevokedByMe,
                f,
                revokeSender,
                m
            ];
            t[2] = p;
            t[3] = isRevokedByMe;
            t[4] = f;
            t[5] = revokeSender;
            t[6] = m;
            t[7] = y;
            t[8] = C;
        } else {
            y = t[7];
            C = t[8];
        }
        const b = r("useWAWebEventTargetValue")(o("WAWebContactCollection").ContactCollection, h, y, C);
        let v;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            v = <Component xstyle={u.icon}>{s.jsx(r("WDSIconIcBlock.react"), {
                height: 22,
                testid: "recalled",
                width: 22
            })}</Component>;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] !== msgKey || t[11] !== b) {
            const Component = r("WAWebMessageSpacerText.react");
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            S = <Component_2>{v}<Component_1 xstyle={u.text}><Component msgKey={msgKey} theme="placeholder">{b}</Component></Component_1></Component_2>;
            t[10] = msgKey;
            t[11] = b;
            t[12] = S;
        } else {
            S = t[12];
        }
        let R;
        if (t[13] !== displayAuthor || t[14] !== displayType || t[15] !== msgKey || t[16] !== S) {
            const Component = r("WAWebMessageTextBubble.react");
            R = <Component msgKey={msgKey} displayType={displayType} displayAuthor={displayAuthor}>{S}</Component>;
            t[13] = displayAuthor;
            t[14] = displayType;
            t[15] = msgKey;
            t[16] = S;
            t[17] = R;
        } else {
            R = t[17];
        }
        return R;
    }
    l.default = c;
}, 98);