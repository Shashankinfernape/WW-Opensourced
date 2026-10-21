__d("WAWebEphemeralKeepInChatUtils", [
    "WAWebBackendApi",
    "WAWebEphemeralConstants",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e != null && e === o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL) {
            return o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        }
        if (e != null && e === o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL) {
            return o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        }
        return null;
    }
    function s(e) {
        if (e === o("WAWebEphemeralConstants").KeepInChatState.KEPT) {
            return o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL;
        }
        if (e === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT) {
            return o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL;
        }
        return o("WAWebProtobufsE2E.pb").KeepType.UNKNOWN;
    }
    function u(e) {
        return e === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
    }
    function c(kicState) {
        return kicState === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
    }
    function d(e) {
        let t;
        let keepInChatMessage;
        e.forEach((e)=>{
            if (!t || m(e, t) === 1) {
                keepInChatMessage = t;
                t = e;
            }
        });
        if (keepInChatMessage != null) {
            o("WAWebBackendApi").frontendFireAndForget("logTieBreakIgnoredKicWam", {
                keepInChatMessage
            });
        }
        return t;
    }
    function m(e, t) {
        if (e.senderTimestampMs == null) {
            return -1;
        }
        if (t.senderTimestampMs == null || e.senderTimestampMs > t.senderTimestampMs || e.senderTimestampMs === t.senderTimestampMs && e.id.id > t.id.id) {
            return 1;
        }
        return -1;
    }
    function p(e) {
        if (e.kicKey != null) {
            const a = o("WAWebMsgGetters").getIsGroupMsg(e);
            if (e.kicKey?.fromMe === true) {
                return o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            }
            if (a && e.kicKey?.participant != null) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.kicKey.participant);
            }
            if (!a && e.kicKey?.remote != null) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.kicKey.remote);
            }
        }
    }
    function _(e) {
        return c(e.kicState) && r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(p(e), o("WAWebMsgGetters").getSender(e)));
    }
    l.parseKeepTypeToKicState = e;
    l.kicStateToKeepType = s;
    l.isKept = u;
    l.runKeepInChatTieBreaker = d;
    l.compareKeepInChatMessages = m;
    l.kicSenderSuperPowerActive = _;
}, 98);