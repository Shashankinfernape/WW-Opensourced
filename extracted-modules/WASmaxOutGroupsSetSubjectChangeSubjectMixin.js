__d("WASmaxOutGroupsSetSubjectChangeSubjectMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ subjectElementValue }) {
        const n = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("subject", null, subjectElementValue));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSetSubjectChangeSubjectMixin = s;
}, 98);