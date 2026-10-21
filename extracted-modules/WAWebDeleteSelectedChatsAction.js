__d("WAWebDeleteSelectedChatsAction", [
    "fbt",
    "WAWebBulkChatAction",
    "WAWebDeleteChatAction",
    "WAWebMetaAiChatActionLogger",
    "WAWebNoop",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    function e(e, { entryPoint = o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT }) {
        return o("WAWebBulkChatAction").runBulkChatAction(e, {
            operation: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebMetaAiChatActionLogger").captureMetaAiChatActionFields(e.id);
                    const n = o("WAWebDeleteChatAction").sendDeleteWithStatus(e, false);
                    e.addPendingAction(n.then(r("WAWebNoop")));
                    const a = yield n;
                    if (a) {
                        const l = yield t.resolve();
                        if (l != null) {
                            o("WAWebWamChatActionEventsLogger").logChatActionEvent(babelHelpers.extends({
                                chatActionEntryPoint: entryPoint,
                                chatActionType: o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.DELETE
                            }, l));
                        }
                    }
                    return a;
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            successToast: function(t) {
                return s._("_j{\"*\":\"{number} selected chats deleted\",\"_1\":\"1 selected chat deleted\"}", [
                    s._plural(t, "number")
                ]);
            },
            failureToast: function(t) {
                return s._("_j{\"*\":\"{number} selected chats couldn't be deleted\",\"_1\":\"1 selected chat couldn't be deleted\"}", [
                    s._plural(t, "number")
                ]);
            },
            itemFailedLogTag: "delete-selected-chats-item-failed",
            partialFailureLogTag: "delete-selected-chats-partial-failure"
        });
    }
    l.deleteSelectedChats = e;
}, 226);