__d("WAWebGroupAgentDeletedChat", [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupType",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addedIds: t, chatId: n, removedIds: r }) {
            if (![].concat(t, r).some(o("WAWebBotUtils").isWidGroupAgentFbidWid) || t.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e)) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return false;
            }
            return p(n);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, currentIsOpenBotGroupState: n, currentIsTeeBotGroupState: r, prevIsOpenBotGroupState: a, prevIsTeeBotGroupState: i }) {
            const l = n != null && n !== !!a || r != null && r !== !!i;
            if (!l || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return false;
            }
            return p(t);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                return (yield o("WAWebSchemaChat").getChatTable().get(t.toString(), false)) == null;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "isGroupChatDeleted: chat read failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("group-agent-deleted-chat-check-failed");
                return false;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return u({
            addedIds: t.flatMap((e)=>{
                if (e.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
                    return e.participants.map(({ id: t })=>t);
                }
                return [];
            }),
            chatId: e,
            removedIds: t.flatMap((e)=>{
                if (e.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE) {
                    return e.participants.map(({ id: t })=>t);
                }
                return [];
            })
        });
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, currentParticipantIds: n, prevParticipantIds: a }) {
            if (a == null || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return a;
            }
            try {
                const i = new Set(a);
                const l = new Set(n.map(String));
                const c = yield u({
                    addedIds: n.filter((e)=>!i.has(String(e))),
                    chatId: t,
                    removedIds: a.filter((e)=>!l.has(e)).map((e)=>o("WAWebWidFactory").createWid(e))
                });
                if (c) {
                    return null;
                }
                return a;
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getPrevParticipantIdsForMetadataAgentRows: deleted chat check failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("group-agent-deleted-chat-check-failed");
                return a;
            }
        });
        return h.apply(this, arguments);
    }
    l.isBotGroupStateChangeInDeletedGroupChat = d;
    l.isAgentChangeInDeletedGroupChatForActions = f;
    l.getPrevParticipantIdsForMetadataAgentRows = g;
}, 98);