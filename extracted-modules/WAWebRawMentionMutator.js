__d("WAWebRawMentionMutator", [
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebMentionDisplayUtils",
    "WAWebMentionFormatMutator"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebMentionFormatMutator"));
    e.mutates = true;
    e.mutate = function(e, { contact }) {
        const r = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(contact) ? o("WAWebChatContactUtils").getFormattedNotifyName(o("WAWebContactGetters").getNotifyName(contact), false).toString() : o("WAWebFrontendContactGetters").getDisplayName(contact);
        return o("WAWebMentionDisplayUtils").addAtPrefixForMention(r);
    };
    l.default = e;
}, 98);