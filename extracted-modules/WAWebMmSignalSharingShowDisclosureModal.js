__d("WAWebMmSignalSharingShowDisclosureModal", [
    "Promise",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebWamEnumDisclosureEventType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            let i;
            if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled() || o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && (i = t.contact) != null && i.isContactBlocked || !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMm(t, r) || !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(r) || a === o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK && !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled() || o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted()) {
                return (e || (e = n("Promise"))).resolve(false);
            }
            return o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted() === false;
        });
        return u.apply(this, arguments);
    }
    l.showDisclosureModalForMm = s;
}, 98);