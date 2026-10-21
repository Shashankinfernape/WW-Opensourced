__d("WAWebNewsletterCreatedMessagePreview.react", [
    "WAWebCommonNewsletterStrings",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const n = o("react-compiler-runtime").c(4);
        const e_chat = e.chat;
        const a = e_chat.newsletterMetadata?.name;
        let i;
        if (n[0] !== a) {
            i = o("WAWebCommonNewsletterStrings").getYouCreatedChannelWithNameText(a);
            n[0] = a;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        let u;
        if (n[2] !== l) {
            u = <span title={l}>{l}</span>;
            n[2] = l;
            n[3] = u;
        } else {
            u = n[3];
        }
        return u;
    }
    l.default = u;
}, 98);