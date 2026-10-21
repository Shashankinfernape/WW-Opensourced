__d("WAWebApiAddActiveMessageRange", [
    "invariant",
    "WAWebApiActiveMessageRanges",
    "WAWebDBMsgUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive,
                actionValue: r("nullthrows")(t.archiveChatAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead,
                actionValue: r("nullthrows")(t.markChatAsReadAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredKeepMedia) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredKeepMedia,
                actionValue: r("nullthrows")(t.clearChatAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredDeleteMedia) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredDeleteMedia,
                actionValue: r("nullthrows")(t.clearChatAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredKeepMedia) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredKeepMedia,
                actionValue: r("nullthrows")(t.clearChatAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredDeleteMedia) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredDeleteMedia,
                actionValue: r("nullthrows")(t.clearChatAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatDeleteMedia) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatDeleteMedia,
                actionValue: r("nullthrows")(t.deleteChatAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatKeepMedia) {
            return {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatKeepMedia,
                actionValue: r("nullthrows")(t.deleteChatAction)
            };
        }
        if (e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Unknown) {
            return s(false, "unsupported action for message ranges: %s", e);
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            const i = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, r);
            const l = e(n, i);
            const l_actionValue = l.actionValue;
            const u = l_actionValue.messageRange?.messages || [];
            const c = yield o("WAWebDBMsgUtils").filterReceivedMessagesInRange(t, u);
            const remainingMessages = Math.max(0, u.length - c.length);
            return o("WAWebApiActiveMessageRanges").createOrReplaceActiveMessageRange(babelHelpers.extends({
                chatId: t
            }, e(n, i), {
                remainingMessages
            }));
        });
        return c.apply(this, arguments);
    }
    l.addActiveMessageRange = u;
}, 98);