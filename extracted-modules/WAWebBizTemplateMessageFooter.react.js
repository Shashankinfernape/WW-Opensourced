__d("WAWebBizTemplateMessageFooter.react", [
    "WAWebEmojiText.react",
    "WAWebFormatHeaderFooter",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        footer: {
            boxSizing: "x9f619",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x1120s5i",
            paddingInlineStart: "x1c1uobl",
            fontSize: "x1nxh6w3",
            lineHeight: "xuy8w9f",
            color: "xhslqc4",
            $$css: true
        },
        isMedia: {
            paddingTop: "x4p5aij",
            paddingInlineEnd: "x11lfxj5",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        dirMismatch: {
            paddingBottom: "x1i2zvha",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(21);
        const { dir, footer, isShown, msgKey, rtl, trusted, type } = e;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebMsgGetters").getIsDynamicReplyButtonsMsg,
                o("WAWebMsgGetters").getSender
            ];
            t[0] = p;
        } else {
            p = t[0];
        }
        const _ = o("useWAWebMsgValues").useMsgValues(msgKey, p);
        const f = _[0];
        const g = _[1];
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = r("WAWebL10N").isRTL();
            t[1] = h;
        } else {
            h = t[1];
        }
        const y = rtl !== h;
        if (isShown && footer != null) {
            let C;
            if (t[2] !== footer || t[3] !== f || t[4] !== g || t[5] !== trusted) {
                C = f ? o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(o("WAWebMsgLinks").getLinksFromText(footer, g), trusted === true) : {};
                t[2] = footer;
                t[3] = f;
                t[4] = g;
                t[5] = trusted;
                t[6] = C;
            } else {
                C = t[6];
            }
            const b = C;
            const { formatters, selectable } = b;
            const R = type !== o("WAWebMsgType").MSG_TYPE.CHAT && u.isMedia;
            const L = y && u.dirMismatch;
            let E;
            if (t[7] !== R || t[8] !== L) {
                E = [
                    u.footer,
                    R,
                    L
                ];
                t[7] = R;
                t[8] = L;
                t[9] = E;
            } else {
                E = t[9];
            }
            const k = !rtl;
            let I;
            if (t[10] !== dir || t[11] !== y || t[12] !== footer || t[13] !== formatters || t[14] !== selectable) {
                I = s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: footer,
                    direction: dir,
                    dirMismatch: y,
                    selectable,
                    formatters
                });
                t[10] = dir;
                t[11] = y;
                t[12] = footer;
                t[13] = formatters;
                t[14] = selectable;
                t[15] = I;
            } else {
                I = t[15];
            }
            let T;
            if (t[16] !== msgKey || t[17] !== E || t[18] !== k || t[19] !== I) {
                const Component = r("WAWebMessageSpacerText.react");
                T = <Component xstyle={E} spacer={k} msgKey={msgKey}>{I}</Component>;
                t[16] = msgKey;
                t[17] = E;
                t[18] = k;
                t[19] = I;
                t[20] = T;
            } else {
                T = t[20];
            }
            return T;
        }
        return null;
    }
    l.default = c;
}, 98);