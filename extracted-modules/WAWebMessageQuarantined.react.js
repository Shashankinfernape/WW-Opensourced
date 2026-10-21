__d("WAWebMessageQuarantined.react", [
    "fbt",
    "WAWebClickable.react",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageContentBox.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebQuarantinedAttachmentInterstitial.react",
    "WDSFontTokenStyles",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        attachmentContainer: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            width: "xh8yej3",
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "xdx6fka",
            position: "x1n2onr6",
            $$css: true
        },
        attachmentContainerNoText: {
            marginBottom: "x1ua1l7f",
            $$css: true
        },
        iconContainer: {
            flexShrink: "x2lah0s",
            width: "x23j0i4",
            height: "x1gnnpzl",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        textContainer: {
            flexGrow: "x1iyjqo2",
            marginInlineStart: "x150mmf0",
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(37);
        const { displayAuthor, displayType, msgKey } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getQuarantineExtractedText,
                o("WAWebFrontendMsgGetters").getSenderObj,
                o("WAWebMsgGetters").getIsDynamicReplyButtonsMsg
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const m = d[0];
        const p = d[1];
        const _ = d[2];
        const f = d[3];
        let g;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Attachment blocked");
            t[1] = g;
        } else {
            g = t[1];
        }
        const h = g;
        const y = p != null && p.length > 0;
        let C;
        if (t[2] !== msgKey) {
            C = function() {
                o("WAWebQuarantinedAttachmentInterstitial.react").openQuarantinedAttachmentInterstitial(msgKey);
            };
            t[2] = msgKey;
            t[3] = C;
        } else {
            C = t[3];
        }
        const b = C;
        let v;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            v = "x1198e8h x1lxpwgx xzueoph xw01apr";
            t[4] = v;
        } else {
            v = t[4];
        }
        const S = !y && c.attachmentContainerNoText;
        let R;
        if (t[5] !== S) {
            R = [
                c.attachmentContainer,
                S
            ];
            t[5] = S;
            t[6] = R;
        } else {
            R = t[6];
        }
        let L;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            L = <Component xstyle={c.iconContainer}>{u.jsx(r("WAWebDocumentFileIcon"), {
                width: 26,
                mimeType: "",
                ext: ""
            })}</Component>;
            t[7] = L;
        } else {
            L = t[7];
        }
        let E;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            E = <Component_2 align="center">{L}<Component_1 xstyle={c.textContainer} justify="center"><Component type="Body2Emphasized" colorName="contentDefault">{h}</Component></Component_1></Component_2>;
            t[8] = E;
        } else {
            E = t[8];
        }
        let k;
        if (t[9] !== m || t[10] !== R) {
            const Component = r("WAWebMessageDeeperContainer.react");
            k = <Component xstyle={R} outgoingMsg={m}>{E}</Component>;
            t[9] = m;
            t[10] = R;
            t[11] = k;
        } else {
            k = t[11];
        }
        let I;
        if (t[12] !== b || t[13] !== k) {
            const Component = o("WAWebClickable.react").Clickable;
            I = <Component onClick={b} className={v}>{k}</Component>;
            t[12] = b;
            t[13] = k;
            t[14] = I;
        } else {
            I = t[14];
        }
        const T = I;
        const D = y ? p : null;
        let x;
        if (t[15] !== D) {
            x = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: D,
                xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                direction: "auto",
                breakWord: true
            });
            t[15] = D;
            t[16] = x;
        } else {
            x = t[16];
        }
        let $;
        if (t[17] !== y || t[18] !== msgKey || t[19] !== x) {
            const Component = r("WAWebMessageSpacerText.react");
            $ = <Component msgKey={msgKey} spacer={y}>{x}</Component>;
            t[17] = y;
            t[18] = msgKey;
            t[19] = x;
            t[20] = $;
        } else {
            $ = t[20];
        }
        let P;
        if (t[21] !== T || t[22] !== displayAuthor || t[23] !== displayType || t[24] !== msgKey || t[25] !== $) {
            const Component = r("WAWebMessageContentBox.react");
            P = <Component displayType={displayType} msgKey={msgKey} showAuthor={displayAuthor} trusted={false}>{T}{$}</Component>;
            t[21] = T;
            t[22] = displayAuthor;
            t[23] = displayType;
            t[24] = msgKey;
            t[25] = $;
            t[26] = P;
        } else {
            P = t[26];
        }
        let N;
        if (t[27] !== msgKey || t[28] !== _ || t[29] !== P) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            N = <Component contact={_} msgKey={msgKey}>{P}</Component>;
            t[27] = msgKey;
            t[28] = _;
            t[29] = P;
            t[30] = N;
        } else {
            N = t[30];
        }
        let M;
        if (t[31] !== displayAuthor || t[32] !== displayType || t[33] !== f || t[34] !== msgKey || t[35] !== N) {
            const Component = r("WAWebMessageTextBubble.react");
            M = <Component msgKey={msgKey} displayType={displayType} displayAuthor={displayAuthor} hideMeta={false} theme="landscape" useFixedWidth={f}>{N}</Component>;
            t[31] = displayAuthor;
            t[32] = displayType;
            t[33] = f;
            t[34] = msgKey;
            t[35] = N;
            t[36] = M;
        } else {
            M = t[36];
        }
        return M;
    }
    l.default = d;
}, 226);