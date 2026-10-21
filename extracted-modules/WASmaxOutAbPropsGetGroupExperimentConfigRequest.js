__d("WASmaxOutAbPropsGetGroupExperimentConfigRequest", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutAbPropsBaseIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ propsGroup, propsHash }) {
        const r = o("WASmaxOutAbPropsBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            xmlns: "abt",
            to: o("WAWap").S_WHATSAPP_NET
        }, o("WASmaxJsx").smax("props", {
            group: o("WAWap").GROUP_JID(propsGroup),
            hash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, propsHash)
        })));
        return r;
    }
    l.makeGetGroupExperimentConfigRequest = e;
}, 98);