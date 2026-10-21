__d("WAWebContactUtils", [
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactManagementGating",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebPrimaryFeaturesModel",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVcardParsingUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWid",
    "WAWebWidFactory",
    "WAXplatTrim",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = /^[A-Za-z\s]+$/;
    function u(e) {
        if (e == null) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
        }
        const t = o("WAWebContactCollection").ContactCollection.get(o("WAWebWidFactory").createWid(e));
        if (t == null || !t.isBusiness) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
        }
        if (t.isEnterprise) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT;
        }
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB;
    }
    function c(e) {
        const t = o("WAXplatTrim").trim(e ?? "");
        if (!t) {
            return {
                firstName: "",
                lastName: ""
            };
        }
        if (s.test(t)) {
            const n = t.split(" ").filter((e)=>e.length > 0);
            if (n.length === 2) {
                return {
                    firstName: n[0],
                    lastName: n[1]
                };
            }
        }
        return {
            firstName: t,
            lastName: ""
        };
    }
    function d(e) {
        const t = e.id;
        if (t.isRegularUser()) {
            const n = o("WAWebLidMigrationUtils").toUserLid(t);
            const a = t.isRegularUserPn() ? t : e.phoneNumber;
            const i = o("WAWebUsernameTypes").serializeMaybeUsername(e.username);
            const isExistingContact = o("WAWebFrontendContactGetters").getIsMyContact(e);
            if (!isExistingContact) {
                const u = e.pushname ?? e.verifiedName;
                const d = c(u);
                const { firstName, lastName } = d;
                const _ = o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled() && !r("isStringNullOrEmpty")(i) && !e.isSmb;
                return {
                    lid: n,
                    phoneNumber: _ ? null : a,
                    firstName,
                    lastName,
                    isExistingContact,
                    username: i
                };
            }
            let f = e.shortName;
            let lastName = e.name.replace(f, "").trim();
            if (r("isStringNullOrEmpty")(f) && !r("isStringNullOrEmpty")(lastName)) {
                const y = lastName.split(" ");
                const C = y[0];
                const b = babelHelpers.arrayLikeToArray(y).slice(1);
                f = C;
                lastName = b.join(" ");
            }
            const v = o("WAWebFrontendContactGetters").getIsUsernameContact(e);
            return {
                lid: n,
                phoneNumber: v ? null : a,
                firstName: f,
                lastName,
                isExistingContact,
                syncToAddressbook: h(e),
                username: i
            };
        }
    }
    function m(e) {
        return e.isRegularUser() && !o("WAWebUserPrefsMeUser").isMeAccount(e) && !r("WAWebWid").isAiHub(e) && !r("WAWebWid").isIAS(e) && !r("WAWebWid").isCAPISupportAccount(e) && !r("WAWebWid").isSupportAccount(e);
    }
    function p() {
        return !o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isContactsBackupOn || !o("WAWebPrimaryFeaturesModel").PrimaryFeatures.primaryHasAgreedToNativeContactsNux;
    }
    function _(t) {
        if (!t) {
            return null;
        }
        const c = t?.N?.[0]?.value;
        const d = t?.FN?.[0]?.value;
        const m = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(t)[0];
        const p = o("WAWebVcardParsingUtils").vcardLidWid(t);
        if (m == null && p == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "vcard has no phone number or lid"
            ]))).sendLogs("vcard-no-phone-number-or-lid", {
                sampling: 0.01
            });
            return null;
        }
        const _ = (p != null ? o("WAWebContactCollection").ContactCollection.get(p) : null) ?? o("WAWebContactCollection").ContactCollection.get(m);
        const isExistingContact = _ != null && o("WAWebFrontendContactGetters").getIsMyContact(_);
        return {
            lid: p,
            phoneNumber: m,
            firstName: c?.[1] ?? d?.split(" ")[0] ?? "",
            lastName: c?.[0] ?? d?.split(" ")[1] ?? "",
            isExistingContact,
            username: o("WAWebUsernameTypes").serializeMaybeUsername(_?.username)
        };
    }
    function f(e, t) {
        const n = [];
        for(var r = 0, a = 0; r < e.length && a < t.length;){
            if (o("WAWebContactComparator").ContactComparator(e[r], t[a]) <= 0) {
                n.push(e[r]);
                r++;
            } else {
                n.push(t[a]);
                a++;
            }
        }
        while(r < e.length){
            n.push(e[r]);
            r++;
        }
        while(a < t.length){
            n.push(t[a]);
            a++;
        }
        return n;
    }
    function g(e) {
        if (e.name) {
            e.set("name", undefined);
            e.set("shortName", undefined);
            e.set("type", "out");
        }
        e.set("isUsernameContact", false);
    }
    function h(e) {
        if (o("WAWebContactManagementGating").contactManagementEnabled()) {
            return e.syncToAddressbook ?? true;
        }
        return false;
    }
    l.getMaybeBizPlatformForLogging = u;
    l.splitContactName = c;
    l.getContactDataFromContactModel = d;
    l.canSaveAsMyContact = m;
    l.shouldShowNativeContactsNux = p;
    l.getContactDataFromVcard = _;
    l.mergeSortedContacts = f;
    l.setContactNotMine = g;
}, 98);