__d("WAWebGenerateMultiVcardMessageProto", [], function(t, n, r, o, a, i) {
    function e({ contextInfo, json }) {
        return {
            contactsArrayMessage: {
                contacts: json.vcardList.map((e)=>e),
                contextInfo
            }
        };
    }
    i.default = e;
}, 66);