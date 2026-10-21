__d("WAWebPrimaryFeaturesGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPrimaryFeaturesCache
    });
    const e_field = e.field;
    const u = e_field("customPaymentMethodsSyncSupport");
    const c = e_field("isAccountIntegrityStatePending");
    const d = e_field("isAccountIntegrityStateTimelock");
    const m = e_field("isContactsBackupOn");
    const p = e_field("primaryHasAddressbookPermission");
    const _ = e_field("primaryHasAgreedToNativeContactsNux");
    l.getCustomPaymentMethodsSyncSupport = u;
    l.getIsAccountIntegrityStatePending = c;
    l.getIsAccountIntegrityStateTimelock = d;
    l.getIsContactsBackupOn = m;
    l.getPrimaryHasAddressbookPermission = p;
    l.getPrimaryHasAgreedToNativeContactsNux = _;
}, 98);