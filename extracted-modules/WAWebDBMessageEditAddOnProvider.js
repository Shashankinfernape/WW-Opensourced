__d("WAWebDBMessageEditAddOnProvider", [
    "Promise",
    "WALogger",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebMessageAddOnType",
    "WAWebMessageEditUtils",
    "WAWebMsgType",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.MessageEdit,
        matches: function(t) {
            return t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && t.subtype === "message_edit";
        },
        matchesFutureproof: function(t) {
            return t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && t.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL && t.futureproofSubtype === "message_edit";
        },
        canRenderInUi: function(t) {
            const e = t.editMsgType ? o("WAWebMessageEditUtils").getMsgEditType(t.editMsgType) : o("WAWebMessageEditUtils").MsgEditType.TextEdit;
            if (!e) {
                return false;
            }
            switch(e){
                case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
                case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
                    return false;
                case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
                case o("WAWebMessageEditUtils").MsgEditType.TextEdit:
                case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
                case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit:
                    return true;
            }
        },
        processOrphansForNewMsg: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgsWithOutcomes(t.map((e)=>e.parsedMsgPayload));
                const { consumedProtocolMsgs, latestMessageEdits } = r;
                const l = latestMessageEdits.find((t)=>t.parentMsg.id.equals(e.id))?.editedMsgData;
                if (l) {
                    Object.assign(e, l);
                }
                return c(t, consumedProtocolMsgs);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (r("justknobx")._("572")) {
                const o = new Set(t.map((e)=>e.id.toString()));
                const a = yield (s || (s = n("Promise"))).all(e.map((e)=>m(e, o)));
                return {
                    retainedOrphanMsgKeys: a.filter((e)=>e != null)
                };
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                if ((yield o("WAWebQuarantineDataStore").getQuarantineData(t.msgKey)) == null) {
                    return null;
                }
                if (n.has(t.parsedMsgPayload.id.toString())) {
                    if ((yield o("WAWebSchemaMessage").getMessageTable().get(t.msgKey)) == null) {
                        yield o("WAWebQuarantineDataStore").deleteQuarantineData(t.msgKey);
                    }
                    return null;
                }
                return t.msgKey;
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "cleanupQuarantinedEditOrphans: cleanup failed, retaining orphan"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("quarantine-edit-orphan-cleanup-failed", {
                    sampling: 0.01
                });
                return t.msgKey;
            }
        });
        return p.apply(this, arguments);
    }
    l.messageEditAddOnProvider = u;
}, 98);