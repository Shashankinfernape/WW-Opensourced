__d("WAWebRichResponseTextFragment.react", [
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(10);
        const { fragment, msgKey } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getInitialPageSize,
                o("WAWebMsgGetters").getLastBotEditBodyLength,
                o("WAWebFrontendMsgGetters").getRtl,
                o("WAWebFrontendMsgGetters").getDir
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const u = l[0];
        const lastBotEditBodyLength = l[1];
        const d = l[2];
        const m = l[3];
        const fragment_text = fragment.text;
        let _;
        if (t[1] !== m || t[2] !== lastBotEditBodyLength || t[3] !== d || t[4] !== fragment_text) {
            _ = function({ textLimit }) {
                const n = o("WAWebFormatConfiguration").RichResponse({
                    selectable: true,
                    showLinks: false,
                    links: []
                });
                return s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: fragment_text,
                    lastBotEditBodyLength,
                    dirMismatch: d !== r("WAWebL10N").isRTL(),
                    direction: m,
                    inferLinesDirection: true,
                    formatters: n,
                    selectable: true,
                    textLimit
                });
            };
            t[1] = m;
            t[2] = lastBotEditBodyLength;
            t[3] = d;
            t[4] = fragment_text;
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== u || t[7] !== _ || t[8] !== fragment_text) {
            const Component = o("WAWebExpandableText.react").ExpandableText;
            f = <Component text={fragment_text} textLimit={u}>{_}</Component>;
            t[6] = u;
            t[7] = _;
            t[8] = fragment_text;
            t[9] = f;
        } else {
            f = t[9];
        }
        return f;
    }
    l.default = u;
}, 98);