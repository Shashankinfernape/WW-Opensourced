__d("DTSGUtils", [
    "SprinkleConfig",
    "isCdnURI",
    "isFacebookURI",
    "isInstagramURI",
    "isMessengerDotComURI",
    "isMetaDotComURI",
    "isOculusDotComURI",
    "isWorkplaceDotComURI"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        getNumericValue: function(t) {
            let e = 0;
            for(let r = 0; r < t.length; r++){
                e += t.charCodeAt(r);
            }
            const o = e.toString();
            if (n("SprinkleConfig").should_randomize) {
                return o;
            }
            return n("SprinkleConfig").version + o;
        },
        shouldAppendToken: function(t) {
            return !n("isCdnURI")(t) && !t.isSubdomainOfDomain("fbsbx.com") && (n("isFacebookURI")(t) || n("isInstagramURI")(t) || n("isMessengerDotComURI")(t) || n("isMetaDotComURI")(t) || n("isWorkplaceDotComURI")(t) || n("isOculusDotComURI")(t) || t.isSubdomainOfDomain("freebasics.com") || t.isSubdomainOfDomain("discoverapp.com"));
        }
    };
    a.exports = e;
}, null);