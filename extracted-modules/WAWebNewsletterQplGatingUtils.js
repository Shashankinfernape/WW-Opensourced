__d("WAWebNewsletterQplGatingUtils", [
    "WAWebABProps",
    "WAWebNewsletterGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = new Map([
        [
            1026957851,
            "1"
        ],
        [
            1026960759,
            "1"
        ]
    ]);
    function s(t) {
        if (!o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled()) {
            return false;
        }
        const n = e.get(t);
        if (n == null) {
            return false;
        }
        const r = o("WAWebABProps").getABPropConfigValue("channels_qpl_improvements_supported_types");
        const a = new Set(r.split(","));
        return a.has(n);
    }
    l.isNewsletterQplLoggingEnabledForMarkerId = s;
}, 98);