__d("WAWebProductCatalogMetaLinkingGatingUtils", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        if (s()) {
            return u();
        }
        return false;
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("meta_catalog_linking_m2_enabled");
    }
    function u() {
        const search = window.location.search;
        const t = new URLSearchParams(search);
        return t.get("force_disable_catalog") === "1";
    }
    l.shouldShowMetaLinkedDisabledCatalogTooltipForSelf = e;
    l.linkedCatalogDisabledTooltipEnabled = s;
    l.shouldDisableCatalogDueToMetaLinkingForProfileOptions = u;
}, 98);