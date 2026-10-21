__d("WAWebHandlePrivacyModeUpdateMsgAction", [
    "Promise",
    "WAWebApiChatCommon",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(contactId, privacyMode, a = {}) {
            if (!(!contactId.isUserNotPSA() || contactId.isCAPISupportAccount())) {
                const l = yield c(contactId, a.chat);
                if (l != null && l.isBusiness !== false && !(l.privacyMode == null && privacyMode == null) && !(l.privacyMode != null && privacyMode != null && l.privacyMode.privacyModeTs >= privacyMode.privacyModeTs)) {
                    const { bypassVerifiedNameUpdate = false } = a;
                    const previousState = {
                        isBusiness: l.isBusiness ?? false,
                        privacyMode: l.privacyMode
                    };
                    const currentState = {
                        isBusiness: true,
                        privacyMode
                    };
                    if (contactId.isUser()) {
                        o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
                            contactId,
                            businessInfo: {
                                isBusiness: true,
                                isEnterprise: true,
                                privacyMode
                            }
                        });
                    }
                    yield (e || (e = n("Promise"))).all([
                        bypassVerifiedNameUpdate ? null : o("WAWebApiVerifiedBusinessName").createOrUpdateVerifiedBusinessNameLidAware(contactId, {
                            isApi: true,
                            isSmb: false,
                            privacyMode: privacyMode ? {
                                actualActors: privacyMode.actualActors,
                                hostStorage: privacyMode.hostStorage,
                                privacyModeTs: privacyMode.privacyModeTs
                            } : null
                        }, o("WAWebApiVerifiedBusinessName").VerifiedBusinessNameUpdateType.Merge),
                        o("WAWebBackendApi").frontendFireAndForget("generateAndUpdatePrivacySystemMessages", {
                            userJid: o("WAWebWidToJid").widToUserJid(contactId),
                            previousState,
                            currentState,
                            shouldRunMATonWid: a.shouldRunMATonWid
                        })
                    ]);
                }
            }
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            if (r != null) {
                const isBusiness = r.contact.isBusiness;
                return {
                    isBusiness,
                    privacyMode: isBusiness ? r.contact.privacyMode : null
                };
            }
            const i = yield (e || (e = n("Promise"))).all([
                o("WAWebApiChatCommon").getChatRecord(t),
                o("WAWebApiVerifiedBusinessName").getVerifiedBusinessNameRecordLidAware(t)
            ]);
            const l = i[0];
            const s = i[1];
            if (l == null) {
                return null;
            }
            if (s == null) {
                return {
                    isBusiness: null
                };
            }
            return {
                isBusiness: true,
                privacyMode: s.privacyMode == null ? null : o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(s.privacyMode)
            };
        });
        return d.apply(this, arguments);
    }
    l.handlePrivacyModeTransition = s;
    l.getChatInfo = c;
}, 98);