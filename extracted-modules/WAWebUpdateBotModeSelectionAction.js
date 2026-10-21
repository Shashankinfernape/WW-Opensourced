__d("WAWebUpdateBotModeSelectionAction", [
    "WALogger",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebMaybeGetBotModeSelection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u({ botModeSelection, chat, threadId }) {
        if (threadId != null) {
            const aiThread = chat.aiThreads?.get(threadId);
            if (aiThread != null) {
                c({
                    aiThread,
                    chatId: chat.id,
                    botModeSelection
                });
                return;
            }
        }
        o("WAWebMaybeGetBotModeSelection").storeInMemoryBotMode(botModeSelection);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ aiThread, botModeSelection, chatId }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[updateBotModeSelectionAction]: Start"
            ])));
            const i = {
                threadId: aiThread.id,
                chatId,
                lastMessageTimestamp: aiThread.lastMessageTimestamp,
                creationTimestamp: aiThread.creationTimestamp,
                botModeSelection
            };
            yield o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata([
                i
            ]);
            aiThread.set({
                botModeSelection
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[updateBotModeSelectionAction]: End"
            ])));
        });
        return d.apply(this, arguments);
    }
    function m({ botModeOverride, chat, threadId }) {
        if (threadId != null) {
            const i = chat.aiThreads?.get(threadId);
            if (i != null) {
                const l = {
                    threadId: i.id,
                    chatId: chat.id,
                    lastMessageTimestamp: i.lastMessageTimestamp,
                    creationTimestamp: i.creationTimestamp,
                    botModeOverride
                };
                o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata([
                    l
                ]);
                i.set({
                    botModeOverride
                });
                return;
            }
        }
        o("WAWebMaybeGetBotModeSelection").storeInMemoryBotModeOverride(botModeOverride);
    }
    l.persistBotModeSelection = u;
    l.persistDynamicBotModeOverride = m;
}, 98);