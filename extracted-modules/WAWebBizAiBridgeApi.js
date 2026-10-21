__d("WAWebBizAiBridgeApi", [
    "WALogger",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAISettingsCategoryHandlers",
    "WAWebBizAISettingsVersionCollection",
    "WAWebBizAiBulkThreadControlLogEvents",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiResponseSettingsV2GateModel",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebWidFactory",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(consumerLid, consumerPhoneNumber) {
        let n = null;
        const r = consumerLid != null ? o("WAWebWidFactory").createUserWidOrThrow(consumerLid, "lid") : null;
        const a = consumerPhoneNumber != null ? o("WAWebWidFactory").createUserWidOrThrow(consumerPhoneNumber) : null;
        if (r != null) {
            n = o("WAWebChatCollection").ChatCollection.get(r);
        }
        if (n == null && a != null) {
            n = o("WAWebChatCollection").ChatCollection.get(a);
        }
        if (n == null && a == null) {
            const i = r != null ? o("WAWebLidMigrationUtils").toPn(r) : null;
            n = i != null ? o("WAWebChatCollection").ChatCollection.get(i) : null;
        } else if (n == null && r == null) {
            const l = a != null ? o("WAWebLidMigrationUtils").toLid(a) : null;
            n = l != null ? o("WAWebChatCollection").ChatCollection.get(l) : null;
        }
        return n;
    }
    const g = {
        updateChatCapiThreadControl: function({ consumerLid, consumerPhoneNumber, lastHandoffActor, shouldSuppressNotification, status, suggestedRepliesEnabled, timestampMs }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] updateChatCapiThreadControl status=",
                ""
            ])), status);
            const m = f(consumerLid, consumerPhoneNumber);
            if (m != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Maiba] updateChatCapiThreadControl status=",
                    " chat=",
                    ""
                ])), status, m.id.toLogString());
                o("WAWebAIAgentAIReplyUtils").applyServerEchoThreadControl({
                    chat: m,
                    options: {
                        suppressNotification: shouldSuppressNotification,
                        suggestedRepliesEnabled,
                        lastHandoffActor
                    },
                    status,
                    timestampMs
                });
            } else {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] updateChatCapiThreadControl: chat not found"
                ]))).sendLogs("maiba-thread-control-chat-not-found");
            }
        },
        bulkUpdateChatCapiThreadControl: function({ updates }) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] bulkUpdateChatCapiThreadControl count=",
                ""
            ])), updates.length);
            let appliedCount = 0;
            let a = 0;
            let failedCount = 0;
            for (const [s, u] of updates.entries()){
                try {
                    const p = f(u.consumerLid, u.consumerPhoneNumber);
                    if (p != null) {
                        o("WAWebAIAgentAIReplyUtils").applyServerEchoThreadControl({
                            chat: p,
                            options: {
                                suppressNotification: true,
                                suggestedRepliesEnabled: u.suggestedRepliesEnabled,
                                lastHandoffActor: u.lastHandoffActor
                            },
                            status: u.status,
                            timestampMs: u.timestampMs
                        });
                        appliedCount += 1;
                    } else {
                        a += 1;
                    }
                } catch (error) {
                    failedCount += 1;
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[BizAI] bulkUpdateChatCapiThreadControl: failed to apply update at index=",
                        ""
                    ])), s).catching(r("getErrorSafe")(error)).sendLogs("maiba-bulk-thread-control-update-failed");
                }
            }
            if (updates.length > 0) {
                o("WAWebBizAiBulkThreadControlLogEvents").logBulkThreadControlBatchApplied({
                    appliedCount,
                    failedCount,
                    notFoundCount: a,
                    totalCount: updates.length
                });
                if (appliedCount === 0 && a > 0) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[BizAI] bulkUpdateChatCapiThreadControl: applied nothing, notFound=",
                        ", total=",
                        ""
                    ])), a, updates.length).tags("non-sad").sendLogs("maiba-bulk-thread-control-batch-unresolved", {
                        employeeSampling: 1,
                        sampling: 0.01,
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                    });
                }
            }
        },
        handleBizAiSettingsNudge: function({ category, updatedAtMs, version }) {
            const a = o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.cast(category);
            if (a == null) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] handleBizAiSettingsNudge: unknown category=",
                    ""
                ])), category);
                return;
            }
            o("WAWebBizAISettingsCategoryHandlers").registerCategoryHandler(a);
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] handleBizAiSettingsNudge: category=",
                " version=",
                ""
            ])), category, version);
            o("WAWebBizAISettingsVersionCollection").BizAISettingsVersionCollection.handleNudge(a, version, updatedAtMs);
        },
        loadedBizAiLargeScreensGate: function({ enabled }) {
            o("WAWebBizAiLargeScreensGateModel").applyBizAiLargeScreensGate(enabled);
        },
        loadedBizAiResponseSettingsV2Gate: function({ enabled }) {
            o("WAWebBizAiResponseSettingsV2GateModel").applyBizAiResponseSettingsV2Gate(enabled);
        },
        loadedBizAiWebSmartComposerAiListsGate: function({ enabled }) {
            o("WAWebBizAiWebSmartComposerAiListsGateModel").applyBizAiWebSmartComposerAiListsGate(enabled);
        },
        loadedBizAiWebEditingCoachingGate: function({ enabled }) {
            o("WAWebBizAiWebEditingCoachingGateModel").applyBizAiWebEditingCoachingGate(enabled);
        }
    };
    l.BizAiBridgeApi = g;
}, 98);