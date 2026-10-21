__d("WAWebVoipBackendCallLogTargetResolver", [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactExternalUserState",
    "WAWebFindChat",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callCreatorWid, callId, groupJid, isCallLink, peerWid, participants = [] }) {
            let m;
            let _;
            let VISIBLE = o("WAWebViewMode.flow").ViewModeType.VISIBLE;
            const callCreatorUserWid = yield p({
                callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(callCreatorWid)
            });
            const fromMe = o("WAWebUserPrefsMeUser").isMeAccount(callCreatorUserWid);
            const y = participants.filter((e)=>e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e));
            if (groupJid != null) {
                m = groupJid;
                _ = callCreatorUserWid;
            } else if (!fromMe) {
                m = callCreatorUserWid;
            } else {
                const C = y.length === 1 ? y[0] : null;
                if (isCallLink !== true && C != null && !(yield d(C))) {
                    m = yield p({
                        callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(C)
                    });
                } else if (isCallLink !== true && peerWid != null && !(yield d(peerWid))) {
                    m = yield p({
                        callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(peerWid)
                    });
                } else {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] getCallLogTargetDetails: msg -> self chat"
                    ])));
                    m = callCreatorUserWid;
                    VISIBLE = y.length > 0 || peerWid != null ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL : o("WAWebViewMode.flow").ViewModeType.HIDDEN;
                }
            }
            return {
                msgKeyId: callId ?? (yield r("WAWebMsgKey").newId()),
                fromMe,
                callCreatorUserWid,
                chatId: m,
                participant: _,
                viewMode: VISIBLE
            };
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.isUser()) {
                return false;
            }
            try {
                return o("WAWebContactExternalUserState").isGuestUser((yield o("WAWebApiContact").getContactRecord(o("WAWebWidFactory").asUserWidOrThrow(e)))?.externalUserState);
            } catch (e) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] isGuest: contact read failed, treating as non-guest"
                ])));
                return false;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callDestinationWid, groupJid }) {
            let r = callDestinationWid;
            const a = !r.isLid() && o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
            const i = !groupJid && (r.isLid() || a);
            if (i) {
                if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                    yield o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced();
                }
                const l = yield o("WAWebFindChat").findOrCreateLatestChat(callDestinationWid, "voipCallLog");
                const s = l.chat;
                r = o("WAWebWidFactory").asUserWidOrThrow(s.id);
            }
            return r;
        });
        return _.apply(this, arguments);
    }
    l.getCallLogTargetDetails = u;
    l.get1x1CallLidOrPnDestination = p;
}, 98);