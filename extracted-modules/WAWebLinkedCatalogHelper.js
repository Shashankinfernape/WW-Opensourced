__d("WAWebLinkedCatalogHelper", [
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebCatalogCollection",
    "WAWebMobilePlatforms",
    "WAWebOrderRequestMsg.flow",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        return s(e);
    }
    function s(e) {
        if (o("WAWebMobilePlatforms").isSMB() && o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            const n = o("WAWebCatalogCollection").CatalogCollection.get(e);
            return n?.catalogType === o("WAWebOrderRequestMsg.flow").CatalogType.SMB_META_CATALOG;
        }
        const r = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
        return r?.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG;
    }
    l.shouldHideComponentForSMBLinkedCatalog = e;
    l.isLinkedCatalog = s;
}, 98);