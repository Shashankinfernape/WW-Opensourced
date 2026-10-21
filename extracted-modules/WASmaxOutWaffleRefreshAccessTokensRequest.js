__d("WASmaxOutWaffleRefreshAccessTokensRequest", [
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs, timestampElementValue, fbidElementValue }) {
        let t;
        const i = o("WASmaxOutWaffleBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin((t = o("WASmaxJsx")).smax("iq", {
            xmlns: "waffle",
            smax_id: o("WAWap").INT(46),
            to: o("WAWap").S_WHATSAPP_NET
        }, o("WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup").mergeRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup(t.smax("encryption_metadata", null), rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs), t.smax("timestamp", null, o("WAWap").INT(timestampElementValue)), t.smax("fbid", null, fbidElementValue)));
        return i;
    }
    l.makeRefreshAccessTokensRequest = e;
}, 98);