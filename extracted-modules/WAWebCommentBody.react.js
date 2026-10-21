__d("WAWebCommentBody.react", [
    "WAWebCommentFrontendUtils",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfigurationConversation",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            maxWidth: "x1j9u4d2",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_comment = e.comment;
        let a;
        if (t[0] !== e_comment) {
            a = function({ textLimit }) {
                const r = o("WAWebFormatConfigurationConversation").Conversation({
                    trusted: o("WAWebCommentFrontendUtils").isTrustedComment(e_comment),
                    links: o("WAWebCommentFrontendUtils").getLinksFromComment(o("WAWebStateUtils").unproxy(e_comment), o("WAWebMsgGetters").INITIAL_PAGE_SIZE),
                    phoneNumbers: o("WAWebCommentFrontendUtils").getPhoneNumbersFromComment(o("WAWebStateUtils").unproxy(e_comment), o("WAWebMsgGetters").INITIAL_PAGE_SIZE),
                    selectable: true,
                    parseInlineCode: true,
                    parseQuotes: true,
                    parseLists: true
                });
                return s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: e_comment.body,
                    textLimit,
                    formatters: r,
                    selectable: true,
                    multiline: true
                });
            };
            t[0] = e_comment;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== e_comment.body || t[3] !== a) {
            const Component = o("WAWebExpandableText.react").ExpandableText;
            const Component_1 = r("WAWebFlexItem.react");
            i = <Component_1 xstyle={u.container}><Component text={e_comment.body} textLimit={o("WAWebMsgGetters").INITIAL_PAGE_SIZE}>{a}</Component></Component_1>;
            t[2] = e_comment.body;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    l.default = c;
}, 98);