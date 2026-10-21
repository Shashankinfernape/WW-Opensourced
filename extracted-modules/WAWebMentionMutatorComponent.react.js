__d("WAWebMentionMutatorComponent.react", [
    "WAWebTextMentionWrapperMutatorComponent.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(7);
        const { lastMessage, mentionMeta, selectable, theme } = e;
        let u;
        if (t[0] !== lastMessage || t[1] !== mentionMeta.contact || t[2] !== mentionMeta.fromChatWid || t[3] !== mentionMeta.groupMetadata || t[4] !== selectable || t[5] !== theme) {
            u = s.jsx(r("WAWebTextMentionWrapperMutatorComponent.react"), {
                chatWid: mentionMeta.fromChatWid,
                contact: mentionMeta.contact,
                groupMetadata: mentionMeta.groupMetadata,
                theme,
                selectable,
                lastMessage
            });
            t[0] = lastMessage;
            t[1] = mentionMeta.contact;
            t[2] = mentionMeta.fromChatWid;
            t[3] = mentionMeta.groupMetadata;
            t[4] = selectable;
            t[5] = theme;
            t[6] = u;
        } else {
            u = t[6];
        }
        return u;
    }
    l.default = u;
}, 98);