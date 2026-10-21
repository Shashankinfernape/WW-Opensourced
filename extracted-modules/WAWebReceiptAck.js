__d("WAWebReceiptAck", [
    "WAWap",
    "WAWebCommsWapMd"
], function(t, n, r, o, a, i, l) {
    function e({ ackString: t, from: n, participant: r, stanzaId: a }) {
        return o("WAWap").wap("ack", {
            to: o("WAWebCommsWapMd").JID(n),
            id: o("WAWap").CUSTOM_STRING(a),
            class: "receipt",
            type: o("WAWap").MAYBE_CUSTOM_STRING(t),
            participant: r && r !== n ? o("WAWebCommsWapMd").DEVICE_JID(r) : o("WAWap").DROP_ATTR
        });
    }
    l.buildReceiptAck = e;
}, 98);