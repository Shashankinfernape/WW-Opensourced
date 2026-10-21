__d("WASmaxOutSpamEntitySubjectMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ spamListSubject }) {
        const n = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("spam_list", {
            subject: o("WAWap").CUSTOM_STRING(spamListSubject)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEntitySubjectMixin = s;
}, 98);