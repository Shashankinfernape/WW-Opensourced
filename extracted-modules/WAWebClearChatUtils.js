__d("WAWebClearChatUtils", [
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebChatClearBridge",
    "WAWebDBUpdateChatTable",
    "WAWebLimitSharingModelUtils",
    "WAWebMaybeClearChatAiThreads",
    "WAWebNoop",
    "WAWebStatusCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, result) {
        if (e && result && (e.deleteMessages(result), o("WAWebLimitSharingModelUtils").createAcp2MsgOnChatClear(e.id), e.id && e.id.isGroup() && result.length > 0)) {
            const n = o("WAWebStatusCollection").StatusCollection.get(e.id);
            n?.revokeMsgs(result);
            if (n?.totalCount === 0) {
                n.delete();
            }
        }
    }
    function s(e, t) {
        const e_promises = e.promises;
        if (e_promises.sendClear) {
            return e_promises.sendClear;
        }
        const r = e.getLastMsgKeyForAction();
        e_promises.sendClear = o("WAWebChatClearBridge").sendClear(e, r, t);
        return e_promises.sendClear;
    }
    function u(t, a) {
        return a.then((()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                t.set({
                    createdLocally: false
                });
                if (n.result) {
                    e(t, n.result);
                    o("WAWebMaybeClearChatAiThreads").maybeClearAiThreadsForChat(t);
                }
                yield o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
                    createdLocally: false
                });
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })()).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, r("WAWebNoop"))).finally(()=>{
            t.promises.sendClear = null;
        });
    }
    l.initClearChat = s;
    l.finalizeClearChat = u;
}, 98);