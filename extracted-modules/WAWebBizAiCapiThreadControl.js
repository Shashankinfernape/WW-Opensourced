__d("WAWebBizAiCapiThreadControl", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebBizAiHandoffRemoval",
    "WAWebDBUpdateChatTable",
    "WAWebNotificationBackend",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(t, capiThreadControl, r) {
        const a = r?.skipSideEffects === true;
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[Maiba] setCapiThreadControl: ",
            " -> ",
            " for chat=",
            "",
            ""
        ])), t.capiThreadControl, capiThreadControl, t.id.toLogString(), a ? " (silent)" : "");
        t.capiThreadControl = capiThreadControl;
        t.forceDismissAiAgentBlockBar = false;
        const i = !a && capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED;
        if (capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED) {
            t.isAiHandoff = i || t.isAiHandoff === true;
            o("WAWebBizAiHandoffRemoval").maybeSetHandoffRemovalExpiry(t);
        } else {
            t.isAiHandoff = false;
            t.aiHandoffStartedAt = null;
            o("WAWebBizAiHandoffRemoval").clearHandoffRemovalExpiry(t);
        }
        if (i) {
            t.aiHandoffStartedAt = o("WATimeUtils").unixTime();
            t.isSmartComposerHandoffCardDismissed = false;
            t.unreadCount = 1;
            o("WAWebNotificationBackend").showAiHandoffNotification(t).catch(o("WAAbortError").catchAbort(function(e) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Maiba] Aborted notification ",
                    ""
                ])), e);
            }));
        }
        return o("WAWebDBUpdateChatTable").updateChatTable(t.id, babelHelpers.extends({
            capiThreadControl,
            unreadCount: t.unreadCount,
            isAiHandoff: t.isAiHandoff,
            aiHandoffRemovalExpiry: t.aiHandoffRemovalExpiry,
            aiHandoffStartedAt: t.aiHandoffStartedAt
        }, m(t, r)));
    }
    function m(e, t) {
        const n = {};
        const r = t?.suggestedRepliesEnabled;
        if (r !== undefined) {
            e.suggestedRepliesEnabled = r;
            n.suggestedRepliesEnabled = r;
        }
        const o = t?.aiLastHandoffActor;
        if (o !== undefined) {
            e.aiLastHandoffActor = o;
            n.aiLastHandoffActor = o;
        }
        return n;
    }
    function p(e, aiLastHandoffActor) {
        if (e.aiLastHandoffActor === aiLastHandoffActor) {
            return (c || (c = n("Promise"))).resolve();
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[Maiba] setAiLastHandoffActor: ",
            " -> ",
            " for chat=",
            ""
        ])), e.aiLastHandoffActor, aiLastHandoffActor, e.id.toLogString());
        e.aiLastHandoffActor = aiLastHandoffActor;
        return o("WAWebDBUpdateChatTable").updateChatTable(e.id, {
            aiLastHandoffActor
        });
    }
    l.setCapiThreadControl = d;
    l.setAiLastHandoffActor = p;
}, 98);