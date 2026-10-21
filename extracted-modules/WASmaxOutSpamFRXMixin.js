__d("WASmaxOutSpamFRXMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ tagValue }) {
        const n = o("WASmaxJsx").smax("tag", {
            value: o("WAWap").CUSTOM_STRING(tagValue)
        });
        return n;
    }
    function s({ parametersElementValue }) {
        const n = o("WASmaxJsx").smax("parameters", null, parametersElementValue);
        return n;
    }
    function u({ tagArgs, parametersArgs, spamListReportee, contextElementValue }) {
        let n;
        const u = (n = o("WASmaxJsx")).smax("iq", null, n.smax("spam_list", {
            reportee: o("WAWap").USER_JID(spamListReportee)
        }), n.smax("frx", null, n.smax("tagset", null, o("WASmaxChildren").REPEATED_CHILD(e, tagArgs, 0, 20)), n.smax("context", null, contextElementValue), o("WASmaxChildren").OPTIONAL_CHILD(s, parametersArgs)));
        return u;
    }
    function c(e, t) {
        const n = u(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeFRXFrxTagsetTag = e;
    l.makeFRXFrxParameters = s;
    l.mergeFRXMixin = c;
}, 98);