__d("WAWebBizBusinessChangeAction", [
    "WAWebBusinessProfileCollection",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const { businessProfile, id } = t;
        const a = t.isBusiness || o("WAWebContactGetters").getIsMe(t) && o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn);
        if (a && !businessProfile) {
            t.addChild("businessProfile", o("WAWebBusinessProfileCollection").BusinessProfileCollection.gadd(id));
        } else if (!a && businessProfile) {
            t.stopListening(businessProfile);
            t.businessProfile = undefined;
            businessProfile.delete();
        }
    }
    l.handleBusinessChange = e;
}, 98);