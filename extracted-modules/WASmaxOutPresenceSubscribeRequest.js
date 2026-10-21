__d("WASmaxOutPresenceSubscribeRequest", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPresenceTCTokenMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ presenceTo, presenceName, presenceContext, tCTokenMixinArgs }) {
        const i = o("WASmaxMixins").optionalMerge(o("WASmaxOutPresenceTCTokenMixin").mergeTCTokenMixin, o("WASmaxJsx").smax("presence", {
            type: "subscribe",
            to: o("WAWap").JID(presenceTo),
            name: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, presenceName),
            context: o("WASmaxAttrs").OPTIONAL(o("WAWap").GROUP_JID, presenceContext)
        }), tCTokenMixinArgs);
        return i;
    }
    l.makeSubscribeRequest = e;
}, 98);