__d("WAWebCatalogVariantHelper", [
    "fbt",
    "$InternalEnum",
    "WAWebLinkedCatalogHelper"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = 100;
    const u = "listing_details,types,availability,variant_properties";
    function c(e, t) {
        const r = t != null && t.variantInfo != null && t.variantInfo.listing_details?.description == null && t.variantInfo.variant_properties == null;
        return !!(!r && e && o("WAWebLinkedCatalogHelper").isLinkedCatalog(e.id));
    }
    const d = n("$InternalEnum")({
        COLOR: "color",
        SIZE: "size",
        MATERIAL: "material",
        PATTERN: "pattern",
        GENDER: "gender",
        AGE_GROUP: "age group"
    });
    function m(e, t) {
        const n = d.cast(e.toLocaleLowerCase("en-US"));
        if (n == null) {
            return e;
        }
        switch(n){
            case d.COLOR:
                if (t == null) {
                    return s._("Colour");
                }
                return s._("_j{\"*\":\"{number} Colours\",\"_1\":\"Colour\"}", [
                    s._plural(t, "number")
                ]);
            case d.SIZE:
                return s._("Size");
            case d.MATERIAL:
                return s._("Material");
            case d.PATTERN:
                return s._("Pattern");
            case d.GENDER:
                return s._("Gender");
            case d.AGE_GROUP:
                return s._("Age group");
        }
    }
    l.VARIANT_THUMBNAIL_IMAGE_SIZE = e;
    l.FULL_VARIANT_INFO_FIELDS = u;
    l.shouldRequestVariantInfo = c;
    l.VariantOptionName = d;
    l.getVariantTypeOptions = m;
}, 226);