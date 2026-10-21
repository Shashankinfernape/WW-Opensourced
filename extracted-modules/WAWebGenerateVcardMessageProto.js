__d("WAWebGenerateVcardMessageProto", [], function(t, n, r, o, a, i) {
    function e({ contextInfo, json }) {
        return {
            contactMessage: {
                displayName: json.vcardFormattedName,
                vcard: json.body,
                contextInfo
            }
        };
    }
    i.default = e;
}, 66);