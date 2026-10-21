__d("WAWebMessageInsertDebugPlaceholder", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebMessageProcessorCache",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        if (o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()) {
            c(e);
        }
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ additionalInfo: n, externalId: r, msgInfo: a, nackReason: i, offline: l }) {
            if (a == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[insertDebugPlaceholder] msgId=",
                    " parse msgInfo failed"
                ])), r).tags("messaging");
                return;
            }
            const u = i.toString();
            const c = n != null ? `${u} ${n}` : u;
            const d = babelHelpers.extends({}, o("WAWebMsgProcessingApiUtils").generateBaseMsg(a), {
                type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
                body: c
            });
            try {
                yield o("WAWebMessageProcessorCache").messageProcessorCache.addMessages([
                    {
                        msg: d
                    }
                ], l !== true);
                if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
                        chatId: d.id.remote,
                        msg: d
                    });
                }
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[insertDebugPlaceholder] msgId=",
                    " insert failed: ",
                    ""
                ])), r, e).tags("messaging");
            }
        });
        return d.apply(this, arguments);
    }
    l.maybeInsertDebugPlaceholder = u;
}, 98);