__d("WAWebAddAndReorderMsgsActionsUtils", [
    "WALogger",
    "WAWebMsgModelUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ anchorMsgKey, chatMsgsCollection, firstUnreadKey, insertAfter, msgHistory, newMsgs, reorderMsgs, resetMostRecentMsgs, threadOrChat }) {
        const m = u({
            chatMsgsCollection,
            newMsgs,
            payloadMsgs: msgHistory,
            reorderMsgs,
            threadOrChat
        });
        o("WAWebMsgModelUtils").addRecordsToChat({
            anchorMsgKey,
            chatMsgsCollection: m.collection,
            firstUnreadKey,
            insertAfter,
            newRecords: m.msgs,
            resetMostRecentMsgs,
            threadOrChat
        });
    }
    function u({ chatMsgsCollection, newMsgs, payloadMsgs, reorderMsgs, threadOrChat }) {
        const s = {};
        const u = {};
        let c;
        let d;
        let m;
        let reorderMsgs_length = reorderMsgs.length;
        let _ = chatMsgsCollection;
        if (reorderMsgs_length === 0) {
            return {
                msgs: newMsgs,
                collection: _
            };
        }
        for(c = 0; c < reorderMsgs_length; c++){
            d = reorderMsgs[c];
            u[d.id] = d;
        }
        reorderMsgs_length = newMsgs.length;
        for(c = 0; c < reorderMsgs_length; c++){
            d = newMsgs[c];
            if (d) {
                s[d.id] = d;
            }
        }
        const f = [];
        const g = [];
        reorderMsgs_length = payloadMsgs.length;
        for(c = 0; c < reorderMsgs_length; c++){
            d = payloadMsgs[c];
            if (!!d && (m = s[d.id], m && f.push(m), m = u[d.id], m)) {
                if (m.recvFresh) {
                    f.push(m);
                    threadOrChat.removeMsg(m);
                    m.unset("recvFresh");
                } else {
                    const h = threadOrChat.getAllCMCs();
                    const cmc2 = h.find((e)=>e.get(m.id));
                    if (!(chatMsgsCollection && cmc2 === chatMsgsCollection)) {
                        if (cmc2) {
                            cmc2.forEach((e)=>{
                                f.push(e);
                                delete u[e.id];
                            });
                            if (cmc2 === threadOrChat.msgs) {
                                threadOrChat.replaceMsgsCollection(chatMsgsCollection);
                                _ = threadOrChat.msgs;
                            } else {
                                threadOrChat.notifyMsgCollectionMerge({
                                    cmc1: chatMsgsCollection,
                                    cmc2,
                                    cmcResult: chatMsgsCollection
                                });
                                threadOrChat.removeMsgsCollection(cmc2);
                            }
                        } else {
                            g.push(d);
                            f.push(u[d.id]);
                        }
                    }
                }
            }
        }
        if (g.length > 0) {
            const C = g.slice(0, 3).map((e)=>e.id);
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Msg:reorder] merge CMC orphans=",
                " ids=",
                ""
            ])), g.length, C);
        }
        return {
            msgs: f,
            collection: _
        };
    }
    l.default = s;
}, 98);