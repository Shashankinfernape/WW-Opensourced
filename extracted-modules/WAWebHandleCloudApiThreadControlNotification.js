__d("WAWebHandleCloudApiThreadControlNotification", [
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebBizAiAgentGating",
    "WAWebBizAiThreadControlExtraJson",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t) {
        const { consumerLid: r, consumerPhoneNumber: a, senderNotificationTimestampMs: i, shouldSuppressNotification: l, status: c } = t;
        const p = o("WALongInt").maybeNumber(i);
        const _ = o("WAWebBizAiThreadControlExtraJson").parseBulkThreadControl({
            raw: t.notificationContent?.extraJson,
            isSmartComposerEnabled: o("WAWebBizAiAgentGating").isSmartComposerWebEnabled,
            notificationTimestampMs: p
        });
        if (_ != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Biz AI] Received bulk thread control notification, count: ",
                ""
            ])), _.length);
            o("WAWebBackendApi").frontendFireAndForget("bulkUpdateChatCapiThreadControl", {
                updates: _
            });
            return;
        }
        if (a == null && r == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Maiba] thread ctrl missing phone & lid, status=",
                ""
            ])), c);
            return;
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[Biz AI] Received thread control notification, status: ",
            ""
        ])), c);
        o("WAWebBackendApi").frontendFireAndForget("updateChatCapiThreadControl", {
            consumerPhoneNumber: a,
            consumerLid: r,
            status: c,
            timestampMs: p,
            shouldSuppressNotification: l,
            suggestedRepliesEnabled: d(t, c),
            lastHandoffActor: m(t, c)
        });
    }
    function d(e, t) {
        if (!(t !== o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN && t !== o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED)) {
            if (t === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN) {
                return false;
            }
            return o("WAWebBizAiThreadControlExtraJson").parseSuggestedRepliesFromUpdateState(e.notificationContent?.extraJson) ?? void 0;
        }
    }
    function m(e, t) {
        if (!(t !== o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN && t !== o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED)) {
            return {
                actor: o("WAWebBizAiThreadControlExtraJson").parseLastHandoffActor(e.notificationContent?.extraJson)
            };
        }
    }
    l.default = c;
}, 98);