__d("WAWebStickersFavoriteSyncAction", [
    "Promise",
    "WABase64",
    "WABaseGlobals",
    "WAJids",
    "WALogger",
    "WAWebFavoriteStickerCollection",
    "WAWebMiscGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebStickerModel",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.FavoriteSticker;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                let l = 0;
                let m = 0;
                const p = yield (d || (d = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation !== "set") {
                                a++;
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                };
                            }
                            const { indexParts, timestamp, value } = e;
                            const u = indexParts[1];
                            if (!u) {
                                return r.malformedActionIndex();
                            }
                            const c = value.stickerAction;
                            if (c == null) {
                                i++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                            }
                            const { deviceIdHint, directPath, fileEncSha256, height, isFavorite, mediaKey, mimetype, width } = c;
                            if (isFavorite == null) {
                                i++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                            }
                            if (!o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
                                l++;
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                        modelId: u,
                                        modelType: o("WAWebSyncdConst").SyncModelType.FavoriteSticker
                                    }
                                };
                            }
                            if (isFavorite) {
                                if (o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(u)) {
                                    m++;
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                }
                                const b = new (o("WAWebStickerModel")).StickerModel({
                                    id: u,
                                    directPath,
                                    filehash: u,
                                    encFilehash: fileEncSha256 ? o("WABase64").encodeB64(fileEncSha256) : "",
                                    mediaKey: mediaKey != null ? o("WABase64").encodeB64(mediaKey) : "",
                                    mediaKeyTimestamp: timestamp,
                                    width,
                                    height,
                                    mimetype
                                });
                                yield o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.addOrUpdateStickers([
                                    b
                                ], timestamp, deviceIdHint);
                            } else {
                                const v = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(u);
                                if (!v) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                }
                                o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.removeAndSave(u);
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        } catch (e) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: favorite sticker sync: ",
                        " operations not supported"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: favorite sticker sync: ",
                        " malformed mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] fav sticker: ",
                        " ops unsupported, orphaned"
                    ])), l);
                }
                if (m > 0) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] fav sticker: skipped ",
                        " already added"
                    ])), m);
                }
                return p;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.generateFavoriteSyncMutation = function(t, isFavorite, r) {
            const i = {
                stickerAction: {
                    fileEncSha256: o("WABase64").decodeB64(t.encFilehash ?? ""),
                    mediaKey: o("WABase64").decodeB64(t.mediaKey ?? ""),
                    mimetype: t.mimetype,
                    height: t.height,
                    width: t.width,
                    directPath: t.directPath ?? undefined,
                    isFavorite,
                    deviceIdHint: o("WAJids").interpretAsNumber(o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid()))
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    t.filehash
                ],
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                value: i,
                timestamp: r,
                action: this.getAction()
            });
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const p = new m;
    l.default = p;
}, 98);