__d("WASmaxOutPreKeysFetchMissingPreKeysRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysRegistrationIDMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_deviceId = e.deviceId;
        const n = o("WASmaxOutPreKeysRegistrationIDMixin").mergeRegistrationIDMixin(o("WASmaxJsx").smax("device", {
            id: o("WAWap").INT(e_deviceId)
        }), e);
        return n;
    }
    function s({ deviceArgs, userJid, hasUserReasonIdentity }) {
        const i = o("WASmaxJsx").smax("user", {
            jid: o("WAWap").JID(userJid),
            reason: o("WASmaxAttrs").OPTIONAL_LITERAL("identity", hasUserReasonIdentity)
        }, o("WASmaxChildren").REPEATED_CHILD(e, deviceArgs, 0, 100));
        return i;
    }
    function u({ userArgs, hasKeyFetchPqsupportTrue, keyFetchContextJid }) {
        const a = o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(o("WASmaxJsx").smax("iq", {
            type: "get"
        }, o("WASmaxJsx").smax("key_fetch", {
            pqsupport: o("WASmaxAttrs").OPTIONAL_LITERAL("true", hasKeyFetchPqsupportTrue),
            context_jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, keyFetchContextJid)
        }, o("WASmaxChildren").REPEATED_CHILD(s, userArgs, 1, 100000))));
        return a;
    }
    l.makeFetchMissingPreKeysRequestKeyFetchUserDevice = e;
    l.makeFetchMissingPreKeysRequestKeyFetchUser = s;
    l.makeFetchMissingPreKeysRequest = u;
}, 98);