__d("WAWebHarmfulFileSenderRelationshipResolver", [
    "$InternalEnum",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        NON_CONTACT: 0,
        CONTACT: 1
    });
    function s(t) {
        const n = o("WAWebMsgGetters").getSender(t);
        if (n == null) {
            return e.NON_CONTACT;
        }
        const r = o("WAWebContactCollection").ContactCollection.get(n);
        if (r != null && o("WAWebFrontendContactGetters").getIsMyContact(r)) {
            return e.CONTACT;
        }
        return e.NON_CONTACT;
    }
    l.HarmfulFileSenderRelationship = e;
    l.resolveHarmfulFileSenderRelationship = s;
}, 98);