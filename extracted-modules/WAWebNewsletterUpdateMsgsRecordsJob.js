__d("WAWebNewsletterUpdateMsgsRecordsJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMessageProcessorCache",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d(e).waitUntilCompleted();
    }
    function d(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("addNewsletterMsgsRecords", function() {
            if (e.length === 0) {
                return (u || (u = n("Promise"))).resolve();
            }
            return o("WAWebMessageProcessorCache").messageProcessorCache.addMessages(e.map((e)=>({
                    msg: e
                })), true);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        });
    }
    function m(t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateNewsletterMsgRecord", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebMsgGetters").getIsNewsletterMsg(t)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateNewsletterMsgRecord] Called on a non-newsletter msg"
                ])));
                return;
            }
            if ((yield o("WAWebSchemaMessage").getMessageTable().get(t.id.toString())) == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateNewsletterMsgRecord] Msg not found, skipping"
                ])));
                return;
            }
            const t_serverId = t.serverId;
            const r = o("WAWebFrontendMsgGetters").getChat(t);
            const a = _(o("WAWebMsgDataFromModel").msgDataFromMsgModel(t));
            const i = o("WAWebDBMessageSerialization").dbRowFromMessage(a);
            const internalIdPrefix = o("WAWebDBMessageUtils").getPrefixForInternalId({
                isGroupStatus: a.isGroupStatus,
                isNewsletterStatus: a.isNewsletterStatus
            });
            if (t_serverId != null) {
                i.internalId = o("WAWebDBMessageUtils").craftInternalId({
                    chatId: r.id.toJid(),
                    inChatMsgId: t_serverId,
                    internalIdPrefix
                });
            }
            yield o("WAWebSchemaMessage").getMessageTable().merge(t.id.toString(), i);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function p(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterMsgAckValues", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e);
            return t.map((e)=>e?.ack ?? null);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function _(e) {
        delete e.serverId;
        delete e.rowId;
        delete e.messageRangeIndex;
        return e;
    }
    l.addNewsletterMsgsRecords = c;
    l.addNewsletterMsgsRecordsJob = d;
    l.updateNewsletterMsgRecord = m;
    l.getNewsletterMsgAckValues = p;
}, 98);