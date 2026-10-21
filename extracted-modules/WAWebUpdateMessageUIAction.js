__d("WAWebUpdateMessageUIAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebCommonMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebHandleForMessageRange",
    "WAWebHandleForMessageRangeEnums",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebStatusCollection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, isOffline = false, messageOverwriteOption = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE, msg, preserveOrder = true }) {
            const f = {
                add: "after",
                update: messageOverwriteOption !== o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE,
                isHistory: false
            };
            const g = !isOffline;
            const h = yield o("WAWebHandleForMessageRange").handleForActiveMessageRange(chatId, msg, g);
            if (!h.has(o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.DropMessage)) {
                let y = h.has(o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.SkipUI);
                const C = o("WAWebMsgCollection").MsgCollection.get(msg.id);
                if (C) {
                    if ((o("WAWebCommonMsgUtils").isPlaceholderMsg(C.type) || o("WAWebCommonMsgUtils").isFutureproofMsg(C.type)) && !(o("WAWebCommonMsgUtils").isPlaceholderMsg(msg.type) || o("WAWebCommonMsgUtils").isFutureproofMsg(msg.type)) || o("WAWebCommonMsgUtils").isQuarantinedMsg(C.type) && !o("WAWebCommonMsgUtils").isQuarantinedMsg(msg.type) || o("WAWebCommonMsgUtils").isRichResponseMsg(C.type) && o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(msg) || o("WAWebCommonMsgUtils").isPlaceholderSubtypeUpgrade(msg.subtype, C.subtype)) {
                        f.update = true;
                    } else if (C.fromQuotedMsg) {
                        o("WAWebMsgCollection").MsgCollection.remove(C);
                    } else {
                        y = true;
                    }
                }
                try {
                    if (o("WAWebMsgGetters").getIsStatus(msg)) {
                        o("WAWebStatusCollection").StatusCollection.handleUpdate(msg, false);
                    }
                    if (!y) {
                        yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(chatId, [
                            babelHelpers.extends({}, msg, {
                                recvFresh: true,
                                isNewMsg: true,
                                expiredTimestamp: _(msg)
                            })
                        ], f, "updateMessageUIAction", null, preserveOrder);
                    }
                } catch (error) {
                    if (error instanceof o("WAWebBackendErrors").LogoutDrop) {
                        return;
                    }
                    if (error instanceof o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: PreviousMsgNotUpdatableError"
                        ])), String(msg.id), String(chatId));
                        return;
                    }
                    const b = r("getErrorSafe")(error);
                    if (r("gkx")("26258")) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: ",
                            ", message: ",
                            ", stack: ",
                            ""
                        ])), String(msg.id), String(chatId), b.name, b.message, b.stack).tags("messaging");
                    } else {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: ",
                            ", message: ",
                            ", stack: ",
                            ""
                        ])), String(msg.id), String(chatId), b.name, b.message, b.stack).tags("messaging").sendLogs("msg_handler for MD: error storing/processing single message");
                    }
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebMsgCollection").MsgCollection.get(e.id);
            if (t != null) {
                t.delete();
            }
        });
        return p.apply(this, arguments);
    }
    function _(msg) {
        const e_afterReadDuration = msg.afterReadDuration;
        if (e_afterReadDuration == null || e_afterReadDuration <= 0 || msg.expiredTimestamp != null || !o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return msg.expiredTimestamp ?? null;
        }
        const a = msg.t ?? o("WATimeUtils").unixTime();
        if (msg.id.fromMe || msg.ack != null && msg.ack >= o("WAWebAck").ACK.READ) {
            return a + e_afterReadDuration;
        }
        return o("WAWebMsgGetters").getEphemeralExpirationTimestamp(msg);
    }
    l.updateUI = c;
    l.removePlaceholder = m;
}, 98);