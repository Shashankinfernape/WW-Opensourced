__d("WAWebQuickReplySmartDefaults", [
    "fbt",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyModel",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        f();
        u();
        c();
        d();
    }
    function u() {
        const PROFILE_SMART_DEFAULT = o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT;
        const t = p();
        if (o("WAWebQuickReplyCollection").QuickReplyCollection.get(PROFILE_SMART_DEFAULT)) {
            if (t) {
                o("WAWebQuickReplyCollection").QuickReplyCollection.add({
                    id: PROFILE_SMART_DEFAULT,
                    message: t.message
                }, {
                    merge: true
                });
            }
        } else if (t) {
            o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
                merge: true
            });
        }
    }
    function c() {
        const ADDRESS_SMART_DEFAULT = o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT;
        const t = _();
        if (o("WAWebQuickReplyCollection").QuickReplyCollection.get(ADDRESS_SMART_DEFAULT)) {
            if (t) {
                o("WAWebQuickReplyCollection").QuickReplyCollection.add({
                    id: ADDRESS_SMART_DEFAULT,
                    message: t.message
                }, {
                    merge: true
                });
            }
        } else if (t) {
            o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
                merge: true
            });
        }
    }
    function d() {
        const HOURS_SMART_DEFAULT = o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT;
        const t = m();
        if (o("WAWebQuickReplyCollection").QuickReplyCollection.get(HOURS_SMART_DEFAULT)) {
            if (t) {
                o("WAWebQuickReplyCollection").QuickReplyCollection.add({
                    id: HOURS_SMART_DEFAULT,
                    message: t.message
                }, {
                    merge: true
                });
            }
        } else if (t) {
            o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
                merge: true
            });
        }
    }
    function m() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (t != null) {
            const n = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(t);
            if (n?.businessHours?.config) {
                const a = o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT;
                const message = o("WAWebBusinessProfileUtils").quickReplyHoursStr(n.businessHours);
                return new (r("WAWebQuickReplyModel"))({
                    id: a,
                    shortcut: s._("Hours").toString(),
                    message,
                    count: -1,
                    keywords: []
                });
            }
        }
    }
    function p() {
        const e = o("WAWebContactCollection").ContactCollection.getMeContact();
        if (e) {
            const t = o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT;
            return new (r("WAWebQuickReplyModel"))({
                id: t,
                shortcut: s._("Profile").toString(),
                message: o("WAWebFrontendContactGetters").getDisplayName(e),
                count: -1,
                keywords: []
            });
        }
    }
    function _() {
        const e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (e != null) {
            const t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
            if (t?.latitude != null || t?.longitude != null || t?.address != null) {
                const n = o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT;
                const a = t.address != null && t.address !== "" ? t.address : s._("Map location");
                const i = "📍";
                return new (r("WAWebQuickReplyModel"))({
                    id: n,
                    shortcut: s._("Address").toString(),
                    message: s._("{pinEmoji} {address}", [
                        s._param("pinEmoji", i),
                        s._param("address", a)
                    ]).toString(),
                    count: -1,
                    keywords: []
                });
            }
        }
    }
    function f() {
        const PIX_KEY_SMART_DEFAULT = o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT;
        const t = g();
        if (o("WAWebQuickReplyCollection").QuickReplyCollection.get(PIX_KEY_SMART_DEFAULT)) {
            if (t) {
                o("WAWebQuickReplyCollection").QuickReplyCollection.add({
                    id: PIX_KEY_SMART_DEFAULT,
                    message: t.message
                }, {
                    merge: true
                });
            } else {
                o("WAWebQuickReplyCollection").QuickReplyCollection.remove(PIX_KEY_SMART_DEFAULT);
            }
        } else if (t) {
            o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
                merge: true
            });
        }
    }
    function g() {
        if (o("WAWebBizFrontendGatingUtils").isPixInQuickReplyEnabled()) {
            const e = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
            if (e) {
                const t = o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT;
                return new (r("WAWebQuickReplyModel"))({
                    id: t,
                    shortcut: s._("Pix").toString(),
                    message: o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(e.key, e.key_type),
                    count: -1,
                    keywords: []
                });
            }
        }
    }
    l.addSmartDefaults = e;
    l.getOrUpdatePixKeySmartDefault = f;
}, 226);