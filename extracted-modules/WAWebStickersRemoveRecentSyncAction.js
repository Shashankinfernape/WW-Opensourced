__d("WAWebStickersRemoveRecentSyncAction", [
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebMiscGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebRecentStickerCollectionMd",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 7;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.RemoveRecentSticker;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                if (!o("WAWebMiscGatingUtils").isRecentStickersMDEnabled()) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: remove recent sticker operation not supported"
                    ])));
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                let r = 0;
                let a = 0;
                const i = t.map((e)=>{
                    if (e.operation !== "set") {
                        r++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const e_indexParts = e.indexParts;
                    const l = e_indexParts[1];
                    if (l == null) {
                        a++;
                        return n.malformedActionIndex();
                    }
                    const s = e.value.removeRecentStickerAction?.lastStickerSentTs;
                    const u = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.get(l);
                    if (!u) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Orphan
                        };
                    }
                    const c = o("WALongInt").maybeNumberOrThrowIfTooLarge(s);
                    if (c == null || o("WALongInt").numberOrThrowIfTooLarge(u.timestamp) <= c) {
                        o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.removeAndSave(u);
                    }
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (r > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: remove recent sticker sync: ",
                        " operations not supported"
                    ])), r);
                }
                if (a > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: ",
                        " sticker hashes not provided"
                    ])), a);
                }
                return i;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.generateRemoveStickerMutation = function(t) {
            const e = o("WATimeUtils").unixTimeMs();
            const n = {
                removeRecentStickerAction: {
                    lastStickerSentTs: t.timestamp
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    t.sticker.filehash
                ],
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                value: n,
                timestamp: e,
                action: this.getAction()
            });
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);