__d("WASmaxInPingsEnums", [
    "WAJids"
], function(t, n, r, o, a, i, l) {
    const e = {
        validators: [
            o("WAJids").validateDomainJid,
            o("WAJids").validateUserJid
        ],
        typeName: "DomainJid|UserJid"
    };
    l.DOMAINJID_USERJID = e;
}, 98);