__d("WAWebUpdateLocalSignalSession", [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBroadcastSenderKeyManager",
    "WAWebChatCollection",
    "WAWebProcessRetryKeyBundle",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { from, keyBundle, offline, originalMsgId, participant, regId, retryCount }, a) {
            const f = participant || from;
            const g = a ?? o("WAWebSessionScope").SessionScope.DEFAULT;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateLocalSignalSession: retryCount: ",
                ", offline: ",
                ", has keyBundle: ",
                ""
            ])), retryCount, offline.toString(), (!!keyBundle).toString());
            if (t.isGroup()) {
                const h = o("WAWebChatCollection").ChatCollection.get(t);
                if (h && f) {
                    o("WAWebApiParticipantStore").markForgetSenderKey(h.id, [
                        f
                    ]);
                }
            }
            if (t.isStatus() && f) {
                yield o("WAWebUserPrefsStatus").markForgetStatusSenderKey([
                    f
                ]);
            }
            if (t.isBroadcastList() && f) {
                o("WAWebBroadcastSenderKeyManager").markForgetBroadcastSenderKey(o("WAWebWidFactory").createDeviceWidFromWidOrThrow(f), t.toString());
            }
            const y = o("WAWebWidFactory").asUserWidOrThrow(f);
            const savedRegId = yield o("WAWebSignal").Session.getRemoteRegId(f, g);
            if (o("WAWebUserPrefsMeUser").isMeAccount(y) && savedRegId !== regId) {
                throw r("err")(`updateLocalSignalSession: detect registration Id change remote: ${regId}, local: ${String(savedRegId)} for peer device`);
            }
            const is1on1 = t.isUser() && !o("WAWebUserPrefsMeUser").isMeAccount(y);
            const v = yield o("WAWebProcessRetryKeyBundle").processKeyBundle({
                is1on1,
                keyBundle,
                offline,
                remoteRegId: regId,
                requester: f,
                savedRegId,
                sessionScope: g
            });
            if (!v) {
                if (savedRegId != null && savedRegId !== regId) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "updateLocalSignalSession: delete session because reg does not match, saved: ",
                        ", received: ",
                        ""
                    ])), savedRegId, regId);
                    yield o("WAWebSignal").Session.deleteRemoteSession(f);
                }
            }
            const S = 2;
            if (retryCount === S) {
                return o("WAWebSignal").Session.saveSessionBaseKey(f, originalMsgId, g);
            }
            if (retryCount > S) {
                const R = yield o("WAWebSignal").Session.hasSameBaseKey(f, originalMsgId, g);
                if (R) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "updateLocalSignalSession: delete local session due to same base key"
                    ])));
                    const L = g === o("WAWebSessionScope").SessionScope.STATUS ? g : undefined;
                    return o("WAWebSignal").Session.deleteRemoteSession(f, L);
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.updateLocalSignalSession = c;
}, 98);