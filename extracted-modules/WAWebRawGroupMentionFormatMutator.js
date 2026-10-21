__d("WAWebRawGroupMentionFormatMutator", [
    "WAWebGroupMentionFormatMutator"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebGroupMentionFormatMutator").GroupMention);
    e.mutates = true;
    e.mutate = function(e, { groupSubject }) {
        return `@${groupSubject ?? ""}`;
    };
    l.RawGroupMention = e;
}, 98);