__d("WAWebRawShortNameMentionFormatMutator", [
    "WAWebFrontendContactGetters",
    "WAWebMentionDisplayUtils",
    "WAWebMentionFormatMutator",
    "WAWebMiscGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebMentionFormatMutator"));
    e.mutates = true;
    e.mutate = function(e, { contact, groupMetadata }) {
        if (o("WAWebMiscGatingUtils").isDropLastNameEnabled() && groupMetadata && groupMetadata.hasUniqueShortNameMention(contact)) {
            return o("WAWebMentionDisplayUtils").addAtPrefixForMention(contact.shortName);
        }
        return o("WAWebMentionDisplayUtils").addAtPrefixForMention(o("WAWebFrontendContactGetters").getDisplayName(contact));
    };
    l.default = e;
}, 98);