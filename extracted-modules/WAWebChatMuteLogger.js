__d("WAWebChatMuteLogger", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebChatMuteWamEvent",
    "WAWebMetaAiChatActionLogger",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumActionConducted",
    "WAWebWamEnumMuteChatType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("JSResourceForInteraction")("WAWebMetaAiChatActionIdentity").__setRef("WAWebChatMuteLogger");
    function d(e, t, muteDuration) {
        p(e, {
            actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED.MUTE,
            muteDuration,
            muteEntryPoint: t
        });
    }
    function m(e, t) {
        p(e, {
            actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED.UNMUTE,
            muteEntryPoint: t
        });
    }
    function p(t, n) {
        const i = o("WAWebMetaAiChatActionLogger").resolveMetaAiChatActionChatType(t.id);
        if (i != null && o("WAWebABProps").getABPropConfigValue("ai_chat_action_logging_addition_enabled")) {
            _(t, n, i).catch(()=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat-mute] meta-ai-commit-failed"
                ]))).sendLogs("chat-mute-meta-ai-commit-failed");
            });
            return;
        }
        const l = o("WAWebChatGetters").getIsGroup(t);
        new (o("WAWebChatMuteWamEvent")).ChatMuteWamEvent(babelHelpers.extends({}, n, {
            muteChatType: y(t)
        }, l ? {
            muteGroupSize: t.groupMetadata?.participants?.length ?? 0
        } : {})).commit();
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const i = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString();
            const l = yield g(e, n);
            if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString() !== i) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat-mute] account-changed"
                ])));
                return;
            }
            const u = new (o("WAWebChatMuteWamEvent")).ChatMuteWamEvent(babelHelpers.extends({}, t, {
                muteChatType: o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE[n]
            }));
            if (l != null) {
                u.conversationThreadId = l;
            }
            u.commit();
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = yield c.load();
                return yield n.getMetaAiConversationThreadId(e.id, t);
            } catch (e) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat-mute] thread-id-read-failed"
                ]))).sendLogs("chat-mute-thread-id-read-failed");
                return null;
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        if (o("WAWebChatGetters").getIsGroup(e)) {
            return o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.GROUP;
        }
        return o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE;
    }
    l.logChatMute = d;
    l.logChatUnmute = m;
}, 98);