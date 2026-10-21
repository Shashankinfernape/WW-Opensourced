__d("WAWebEphemeralKeepInChatWamUtils", [
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebDBMsgUtils",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatErrorsWamEvent",
    "WAWebKeepInChatPerfWamEvent",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicActionType",
    "WAWebWamEnumKicErrorCodeType",
    "WAWebWamEnumKicRequestTypeType",
    "WAWebWamEnumResponseType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t;
        switch(e){
            case o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL:
                t = o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.KEEP;
                break;
            case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL:
                t = o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.UNKEEP;
                break;
            default:
                break;
        }
        return t;
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebChatCollection").ChatCollection.get(t.id.remote);
            const r = new (o("WAWebKeepInChatPerfWamEvent")).KeepInChatPerfWamEvent({
                response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.ERROR,
                requestSendTime: t.t,
                chatEphemeralityDuration: n && o("WAWebChatEphemerality").getEphemeralSetting(n) || 0
            });
            let a;
            if (n) {
                a = yield o("WAWebChatThreadLogging").getChatThreadID(n.id.toJid());
            }
            if (a != null) {
                r.set({
                    threadId: a
                });
            }
            const i = e(t.keepType);
            if (i) {
                r.set({
                    kicRequestType: i
                });
            }
            const l = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t.keptMessageKey);
            if (l) {
                r.set({
                    kicMessageEphemeralityDuration: l?.ephemeralDuration || 0
                });
            }
            return r;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        if (e === o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL) {
            return o("WAWebWamEnumKicActionType").KIC_ACTION_TYPE.KEEP_MESSAGE;
        }
        return o("WAWebWamEnumKicActionType").KIC_ACTION_TYPE.UNKEEP_MESSAGE;
    }
    function d(e, t) {
        const a = e != null ? o("WAWebFrontendMsgGetters").getChat(e) : null;
        const i = new (o("WAWebKeepInChatErrorsWamEvent")).KeepInChatErrorsWamEvent({
            kicAction: c(t),
            isAGroup: a != null && o("WAWebChatGetters").getIsGroup(a),
            isAdmin: a != null && o("WAWebChatGetters").getIsGroup(a) && a.groupMetadata?.participants.iAmAdmin(),
            canEditDmSettings: a != null && o("WAWebChatGetters").getIsGroup(a) ? a.groupMetadata?.canSetEphemeralSetting() : true,
            kicMessageEphemeralityDuration: e?.ephemeralDuration || 0
        });
        return i;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield s(e);
            t.set({
                kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.OLDER_REQUEST
            });
            t.commit();
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield s(e);
            t.set({
                kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.TIE_BREAK_IGNORED
            });
            t.commit();
        });
        return f.apply(this, arguments);
    }
    l.parseKeepTypeToMetric = e;
    l.getBaseErrorLog = d;
    l.logOlderRequestKic = m;
    l.logTieBreakIgnoredKic = _;
}, 98);