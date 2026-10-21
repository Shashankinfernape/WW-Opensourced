__d("WAWebMessageInsertDeferredPlaceholder", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageProcessorCache",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "-DEFERRED";
    function d(e) {
        const t = o("WAWebMsgProcessingApiUtils").generateBaseMsg(e).id;
        return new (r("WAWebMsgKey"))({
            fromMe: t.fromMe,
            id: `${t.id}${c}`,
            participant: t.participant,
            remote: t.remote
        });
    }
    function m(e) {
        if (o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()) {
            return _(e);
        }
        return (u || (u = n("Promise"))).resolve();
    }
    function p(e) {
        if (o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()) {
            return g(e);
        }
        return (u || (u = n("Promise"))).resolve();
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgInfo, reason }) {
            try {
                const a = d(msgInfo);
                const i = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey([
                    a.toString()
                ]);
                const l = i[0];
                if (l) {
                    return;
                }
                const s = babelHelpers.extends({}, o("WAWebMsgProcessingApiUtils").generateBaseMsg(msgInfo), {
                    id: a,
                    type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                    kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
                    body: reason
                });
                yield o("WAWebMessageProcessorCache").messageProcessorCache.addMessages([
                    {
                        msg: s
                    }
                ], true);
                if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
                        chatId: s.id.remote,
                        msg: s
                    });
                }
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[insertDeferredPlaceholder] msgId=",
                    " insert failed: ",
                    ""
                ])), msgInfo.externalId, error).tags("messaging");
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = d(e);
                if (yield y(t)) {
                    return;
                }
                const n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
                if (n != null) {
                    yield y(n);
                }
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[removeDeferredPlaceholder] msgKey removal failed: ",
                    ""
                ])), error).tags("messaging");
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.toString();
            const n = yield o("WAWebSchemaMessage").getMessageTable().get(t);
            if (n == null) {
                return false;
            }
            const r = o("WAWebDBMessageSerialization").messageFromDbRow(n);
            if (r.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER) {
                return false;
            }
            yield o("WAWebSchemaMessage").getMessageTable().bulkRemove([
                t
            ]);
            o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
                msg: r
            });
            return true;
        });
        return C.apply(this, arguments);
    }
    l.maybeInsertDeferredPlaceholder = m;
    l.maybeRemoveDeferredPlaceholder = p;
}, 98);