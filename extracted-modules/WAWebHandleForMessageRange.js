__d("WAWebHandleForMessageRange", [
    "Promise",
    "WAWebActiveMessageRanges",
    "WAWebAddonGatingUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebHandleForMessageRangeEnums",
    "WAWebMsgRangeContainmentHandlers",
    "WAWebMsgType",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Set;
    const u = (t)=>t.reduce((acc, item)=>new Set([].concat(Array.from(acc), Array.from(item))), new Set);
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            e: {
                if (e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive) {
                    if (e.actionValue.archived === true) {
                        yield o("WAWebMsgRangeContainmentHandlers").handleForArchive(e, n);
                    } else {
                        yield o("WAWebMsgRangeContainmentHandlers").handleForUnarchive(e, n);
                    }
                    return s;
                    break e;
                }
                if (e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead) {
                    yield o("WAWebMsgRangeContainmentHandlers").handleForMarkAsReadUnread(e, n, !!e.actionValue.read);
                    return s;
                    break e;
                }
                if (e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredDeleteMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredKeepMedia) {
                    const r = o("WAWebMsgRangeContainmentHandlers").handleForClearChat(e, n);
                    if (r) {
                        return new Set([
                            r
                        ]);
                    }
                    return s;
                }
                if (e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredDeleteMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredKeepMedia) {
                    if (!(yield m(t.id))) {
                        const a = o("WAWebMsgRangeContainmentHandlers").handleForClearChat(e, n);
                        if (a) {
                            return new Set([
                                a
                            ]);
                        }
                        return s;
                    }
                    return s;
                }
                if (e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatDeleteMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatKeepMedia) {
                    const i = o("WAWebMsgRangeContainmentHandlers").handleForDeleteChat(e, n);
                    if (i) {
                        return new Set([
                            i
                        ]);
                    }
                    return s;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.action}`);
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSyncdActionUtils").buildIndex(o("WAWebSyncdConst").Actions.Star, o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(e));
            const n = yield o("WAWebSyncdDb").getSyncAction(t);
            if (n) {
                const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, n.binarySyncData).value;
                return a?.starAction?.starred || false;
            }
            return false;
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a = true) {
            if (o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(r.type)) {
                return s;
            }
            const i = yield o("WAWebApiActiveMessageRanges").getActiveMessageRanges(t.toString());
            const l = i.map((e)=>[
                    e,
                    o("WAWebActiveMessageRanges").rangeContainsMessage(e.actionValue.messageRange, r)
                ]);
            const d = l.filter(([, t])=>t === o("WAWebHandleForMessageRangeEnums").RangeContain.CONTAINS_BY_ADDITIONAL).map(([t])=>t);
            d.forEach((e)=>{
                e.remainingMessages--;
            });
            yield o("WAWebApiActiveMessageRanges").bulkUpdateActiveMessageRanges(d, a);
            const m = l.map(([t, n])=>c(t, r, n));
            const p = yield (e || (e = n("Promise"))).all(m);
            return u(p);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return !!(o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type) || e.type === "reaction" || e.type === "poll_update");
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = new Map;
            t.forEach((e)=>{
                if (!(o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e.type) || g(e))) {
                    const t = r.get(e.id.remote.toString());
                    if (t == null || t.t < e.t) {
                        r.set(e.id.remote.toString(), e);
                    }
                }
            });
            yield (e || (e = n("Promise"))).all(Array.from(r.entries(), function([t, n]) {
                return _(o("WAWebWidFactory").createWid(t), n);
            }));
        });
        return y.apply(this, arguments);
    }
    l.handleForActiveMessageRange = _;
    l.handleOfflineForMessageRange = h;
}, 98);