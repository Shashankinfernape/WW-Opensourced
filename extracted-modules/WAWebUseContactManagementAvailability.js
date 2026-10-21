__d("WAWebUseContactManagementAvailability", [
    "WAWebPrimaryFeaturesGetters",
    "react-compiler-runtime",
    "useWAWebPrimaryFeaturesValues"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                o("WAWebPrimaryFeaturesGetters").getIsContactsBackupOn,
                o("WAWebPrimaryFeaturesGetters").getPrimaryHasAddressbookPermission,
                o("WAWebPrimaryFeaturesGetters").getPrimaryHasAgreedToNativeContactsNux
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues(t);
        const r = n[0];
        const canSyncToAddressbook = n[1];
        const i = n[2];
        const isNativeContactOn = r && i;
        let s;
        if (e[1] !== canSyncToAddressbook || e[2] !== isNativeContactOn) {
            s = {
                isNativeContactOn,
                canSyncToAddressbook
            };
            e[1] = canSyncToAddressbook;
            e[2] = isNativeContactOn;
            e[3] = s;
        } else {
            s = e[3];
        }
        return s;
    }
    l.useContactManagementAvailability = e;
}, 98);