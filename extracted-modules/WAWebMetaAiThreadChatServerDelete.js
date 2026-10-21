__d("WAWebMetaAiThreadChatServerDelete", [
    "WALogger",
    "WAWebABProps",
    "WAWebBotProduct",
    "WAWebMetaAiThreadServerDeleteJob",
    "WAWebPersistBotProfiles",
    "WAWebResolveBotProfile",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        const botFbid = f(e);
        const n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
        if (botFbid == null || n == null) {
            return null;
        }
        return {
            botFbid,
            originLid: n.toString()
        };
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { botFbid, originLid }) {
            if (!_(originLid)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-thread-server-delete] account-changed-before-enqueue"
                ])));
                return;
            }
            if (yield g(botFbid)) {
                if (!_(originLid)) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[meta-ai-thread-server-delete] account-changed-during-enqueue"
                    ])));
                    return;
                }
                yield y(t);
            }
        });
        return p.apply(this, arguments);
    }
    function _(originLid) {
        return o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString() === originLid;
    }
    function f(e) {
        if (!e.isFbidBot()) {
            return null;
        }
        const t = o("WAWebResolveBotProfile").resolveBotSupportInput(e);
        if (t == null || t.isDeleted === true || o("WAWebBotProduct").botProductFromServerValue(t.product) !== o("WAWebBotProduct").BotProduct.META_AI_THREAD || !o("WAWebABProps").getABPropConfigValue("ai_meta_ai_thread_server_delete_enabled")) {
            return null;
        }
        return e.user;
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebMetaAiThreadServerDeleteJob").enqueueMetaAiThreadServerDelete(e);
                return true;
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-thread-server-delete] enqueue-failed"
                ]))).sendLogs("meta-ai-thread-server-delete-enqueue-failed");
                return false;
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebPersistBotProfiles").mergeBotSupportFields(e, {
                    isDeleted: true
                });
            } catch (e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-thread-server-delete] local-tombstone-failed"
                ]))).sendLogs("meta-ai-thread-local-tombstone-failed");
            }
        });
        return C.apply(this, arguments);
    }
    l.getMetaAiThreadServerDelete = d;
    l.completeMetaAiThreadServerDelete = m;
    l.getMetaAiThreadServerDeleteBotFbid = f;
    l.persistMetaAiThreadServerDelete = g;
    l.tombstoneDeletedMetaAiThread = y;
}, 98);