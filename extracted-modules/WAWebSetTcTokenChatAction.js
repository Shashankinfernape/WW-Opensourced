__d("WAWebSetTcTokenChatAction", [
    "WAArrayBufferUtils",
    "WALogger",
    "WAWebApiOrphanTcToken",
    "WAWebChatCollection",
    "WAWebChatGetExistingBridge",
    "WAWebLidMigrationUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n, r) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, tcTokenTimestamp, tcToken) {
            if (tcToken != null && t.isRegularUser()) {
                const i = n ?? o("WAWebLidMigrationUtils").toLid(t);
                let l = i ? yield o("WAWebChatCollection").ChatCollection.getChatByAccountLid(i) : null;
                if (l == null) {
                    l = yield o("WAWebChatGetExistingBridge").getExisting(t);
                }
                if (l == null) {
                    yield o("WAWebApiOrphanTcToken").createOrUpdateOrphanTcToken(i ?? t, {
                        tcToken,
                        tcTokenTimestamp
                    });
                    return;
                }
                if (!(l.tcToken != null && o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(l.tcToken, tcToken) || l.tcTokenTimestamp != null && l.tcTokenTimestamp > tcTokenTimestamp)) {
                    let s = false;
                    if (l.tcToken == null && o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(l.id) == null) {
                        s = true;
                    }
                    const u = {
                        tcToken,
                        tcTokenTimestamp
                    };
                    l.set(u);
                    if (s) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[ProfilePicIqTC] fetch pp after tc token received"
                        ])));
                        o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(l.id);
                    }
                    yield o("WAWebSchemaChat").getChatTable().merge(l.id.toString(), u);
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.handleIncomingTcToken = s;
}, 98);