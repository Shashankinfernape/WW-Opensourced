__d("WAWebCommonGroupSubtitle.react", [
    "fbt",
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFbtIntlList",
    "WAWebFormatConfiguration",
    "WAWebFrontendContactGetters",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, { formatString = "" } = {}) {
        const l = r("WAWebFbtIntlList")(e.map((e)=>{
            const t = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e);
            const n = t ? o("WAWebChatContactUtils").getFormattedNotifyName(o("WAWebContactGetters").getNotifyName(e)).toString() : o("WAWebFrontendContactGetters").getFormattedName(e);
            return `${formatString}${n}${formatString}`;
        }), r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
        return s._("_j{\"*\":\"{contacts-list} are also in this group\",\"_1\":\"{contacts-list} is also in this group\"}", [
            s._plural(e.length),
            s._param("contacts-list", l)
        ]);
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d({ commonGroup, searchQuery }) {
        const r = commonGroup[1];
        const a = r.slice(0, 2);
        const i = c(a, {
            formatString: "*"
        });
        const l = c(a).toString();
        const s = o("WAWebFormatConfiguration").Search({
            terms: [
                searchQuery?.trimmed()
            ]
        });
        return u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: i,
            formatters: s,
            titlify: true,
            title: l,
            direction: "auto"
        });
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);