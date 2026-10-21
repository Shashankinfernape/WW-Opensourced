__d("WASmaxOutWaffleGetCertificateRequest", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("payload_enc_certificates", null);
        return e;
    }
    function s() {
        const e = o("WASmaxJsx").smax("password_pem", null);
        return e;
    }
    function u({ hasPayloadEncCertificates, hasPasswordPem, timestampElementValue }) {
        const i = o("WASmaxOutWaffleBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            xmlns: "waffle",
            smax_id: o("WAWap").INT(51),
            to: o("WAWap").S_WHATSAPP_NET
        }, o("WASmaxJsx").smax("timestamp", null, o("WAWap").INT(timestampElementValue)), o("WASmaxChildren").HAS_OPTIONAL_CHILD(e, hasPayloadEncCertificates), o("WASmaxChildren").HAS_OPTIONAL_CHILD(s, hasPasswordPem)));
        return i;
    }
    l.makeGetCertificateRequestPayloadEncCertificates = e;
    l.makeGetCertificateRequestPasswordPem = s;
    l.makeGetCertificateRequest = u;
}, 98);