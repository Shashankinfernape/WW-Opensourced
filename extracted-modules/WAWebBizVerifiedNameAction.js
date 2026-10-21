__d("WAWebBizVerifiedNameAction", [
    "Promise",
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebChatCollection",
    "WAWebFrontendChatGetters",
    "WAWebHandleBusinessNameChangeLidHelpers",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebSchemaVerifiedBusinessName",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                yield (e || (e = n("Promise"))).all(t.map(({ id, verifiedName })=>{
                    const r = verifiedName?.privacyMode;
                    if (r != null) {
                        const a = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(id);
                        if (!(a == null || o("WAWebFrontendChatGetters").getShouldAppearInList(a) === true)) {
                            return o("WAWebHandlePrivacyModeUpdateMsgAction").handlePrivacyModeTransition(a.id, r, {
                                chat: a,
                                bypassVerifiedNameUpdate: true,
                                shouldRunMATonWid: false
                            });
                        }
                    }
                }));
                const a = o("WAWebHandleBusinessNameChangeLidHelpers").getVerifiedNamesToUpdateLidAware(t);
                const i = r("compactMap")(a, function({ id, verifiedName }) {
                    if (verifiedName == null) {
                        return null;
                    }
                    const { isApi, isSmb, level, name, privacyMode, serial } = verifiedName;
                    return {
                        id: id.isLid() ? id.toString() : id.user,
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
                    };
                });
                yield o("WAWebSchemaVerifiedBusinessName").getVerifiedBusinessNameTable().bulkCreateOrReplace(i);
                yield o("WAWebBizUpdateContactsWithVerifiedNamesAction").applyContactBusinessProps();
            }
        });
        return u.apply(this, arguments);
    }
    l.handleVerifiedNameSync = s;
}, 98);