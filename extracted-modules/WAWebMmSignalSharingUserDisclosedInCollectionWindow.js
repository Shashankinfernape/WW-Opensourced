__d("WAWebMmSignalSharingUserDisclosedInCollectionWindow", [
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted() && o("WAWebMmSignalSharingExpirationWindowUtils").isMmSignalSharingExpirationWindowActive(e);
        }
        return false;
    }
    l.isMmSignalSharingUserDisclosedInCollectionWindow = e;
}, 98);