__d("WAWebInteractiveTitleHeader", [
    "WABidi",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatHeaderFooter",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        marginInlineStart6: {
            marginInlineStart: "xdzw4kq",
            $$css: true
        }
    };
    const c = {
        title: {
            fontSize: "x6prxxf",
            fontWeight: "xk50ysn",
            overflowWrap: "x1mzt3pk",
            whiteSpace: "x126k92a",
            width: "xh8yej3",
            $$css: true
        },
        subtitle: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function d(e) {
        const t = o("WABidi").bidiDir(e);
        const n = t === "rtl";
        return {
            direction: t,
            dirMismatch: n !== r("WAWebL10N").isRTL()
        };
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(14);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getInteractiveHeader,
                o("WAWebMsgGetters").getSender
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        const m = i[1];
        let p;
        if (t[1] !== l) {
            p = l ?? {};
            t[1] = l;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        const { subtitle, title } = _;
        const h = r("useWAWebIsMsgTrusted")(e_msgKey);
        let y;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                o("WDSMargins.stylex").wdsMargins.marginEnd4,
                u.marginInlineStart6
            ];
            t[3] = y;
        } else {
            y = t[3];
        }
        let C;
        if (t[4] !== m || t[5] !== title || t[6] !== h) {
            C = title != null ? s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, d(title), o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(o("WAWebMsgLinks").getLinksFromText(title, m), h), {
                text: title,
                xstyle: c.title,
                inferLinesDirection: true
            })) : null;
            t[4] = m;
            t[5] = title;
            t[6] = h;
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] !== subtitle || t[9] !== h) {
            b = subtitle != null ? s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, d(subtitle), {
                selectable: h,
                text: subtitle,
                xstyle: c.subtitle,
                inferLinesDirection: true
            })) : null;
            t[8] = subtitle;
            t[9] = h;
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] !== C || t[12] !== b) {
            const Component = o("WAWebFlex.react").FlexColumn;
            v = <Component xstyle={y}>{C}{b}</Component>;
            t[11] = C;
            t[12] = b;
            t[13] = v;
        } else {
            v = t[13];
        }
        return v;
    }
    l.default = m;
}, 98);