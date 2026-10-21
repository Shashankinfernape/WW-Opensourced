__d("WAWebBizUpdateVerifiedInfoAction", [
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebQueryExistsJob",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { isApi, isSmb, level, name, privacyMode, serial }) {
            if (privacyMode != null) {
                yield o("WAWebHandlePrivacyModeUpdateMsgAction").handlePrivacyModeTransition(e, privacyMode, {
                    bypassVerifiedNameUpdate: true
                });
            }
            o("WAWebBackendApi").frontendFireAndForget("updateContactWithVerifiedName", {
                contactId: o("WAWebWidToJid").widToUserJid(e),
                verifiedNameInfo: {
                    name,
                    level,
                    isApi,
                    isSmb,
                    privacyMode
                }
            });
            yield o("WAWebApiVerifiedBusinessName").createOrUpdateVerifiedBusinessNameLidAware(e, {
                level,
                serial,
                name,
                isApi,
                isSmb,
                privacyMode: privacyMode ? {
                    actualActors: privacyMode.actualActors,
                    hostStorage: privacyMode.hostStorage,
                    privacyModeTs: privacyMode.privacyModeTs
                } : null
            });
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = yield o("WAWebQueryExistsJob").queryWidExists(t, n);
            if (r != null) {
                const a = r.bizInfo;
                if (a) {
                    yield e(t, a.verifiedName);
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.updateVerifiedInfo = e;
    l.queryAndUpdateContactPropertiesOnNewChat = u;
}, 98);