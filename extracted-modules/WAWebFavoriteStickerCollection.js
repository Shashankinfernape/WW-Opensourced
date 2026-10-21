__d("WAWebFavoriteStickerCollection", [
    "Promise",
    "WABaseGlobals",
    "WAJids",
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebFavoriteStickerModel",
    "WAWebIdleTaskRunner",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaStore",
    "WAWebSchemaFavoriteStickers",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "WAWebStickerUtils",
    "WAWebWebpCalculateWebpFilehashWithoutMetadata",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    function h(e, t) {
        if (e.timestamp < t.timestamp) {
            return 1;
        }
        return -1;
    }
    const y = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t._comparator = function(e, t) {
                return h(e, t);
            };
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    y.model = r("WAWebFavoriteStickerModel");
    const C = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e._comparator = function(e, t) {
                return h(e, t);
            };
            e._emojiToCollection = new Map;
            e._hasInitializedFromCache = false;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.add = function(n, r) {
            const e = t.prototype.add.call(this, n, r);
            const a = o("WAWebABProps").getABPropConfigValue("web_autodownload_stickers");
            if (a) {
                for (const i of e){
                    if (!i) {
                        break;
                    }
                    this._enqueueStickerAutoDownload(i);
                }
            }
            return e;
        };
        a_prototype._enqueueStickerAutoDownload = function(t) {
            o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(t.sticker, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA);
        };
        a_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker);
                }
            });
            return e;
        };
        a_prototype.reset = function() {
            this.forEach((e)=>{
                o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker);
            });
            t.prototype.reset.call(this);
        };
        a_prototype._addSaveTask = function() {
            const t = this;
            if (!this._idleTaskId || !o("WAWebIdleTaskRunner").IdleCallbackTasks.isInQueue(this._idleTaskId)) {
                this._idleTaskId = o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function() {
                    t._saveToDb().catch((t)=>{
                        const n = r("getErrorSafe")(t);
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "FavoriteStickerCollection attempt to save to database failed"
                        ]))).catching(n).sendLogs("favorite-sticker-save-to-db-failed");
                    });
                });
            }
        };
        a_prototype._saveToDb = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.toArray().map((e)=>{
                    const t = e.sticker.toDbData();
                    return {
                        id: e.id,
                        timestamp: e.timestamp,
                        sticker: {
                            index: t.index,
                            width: t.width,
                            height: t.height,
                            size: t.size,
                            mimetype: t.mimetype,
                            filehash: t.filehash,
                            directPath: t.directPath,
                            mediaKey: t.mediaKey,
                            mediaKeyTimestamp: t.mediaKeyTimestamp,
                            encFilehash: t.encFilehash,
                            deprecatedMms3Url: t.deprecatedMms3Url,
                            type: "sticker",
                            stickerAudio: t.stickerAudio
                        },
                        stickerHashWithoutMeta: e.stickerHashWithoutMeta,
                        isFavorite: e.isFavorite,
                        deviceId: e.deviceId
                    };
                });
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[FavStickers] saving to DB, count=",
                    ""
                ])), e.length);
                try {
                    const t = o("WAWebSchemaFavoriteStickers").getFavoriteStickersTable();
                    let n = yield t.count();
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[FavStickers] before save, DB count=",
                        ""
                    ])), n);
                    yield t.clear();
                    yield t.bulkCreateOrReplace(e);
                    n = yield t.count();
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Favorite Stickers: after save, stickers in DB with length: ",
                        ""
                    ])), n);
                } catch (error) {
                    const a = r("getErrorSafe")(error);
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "FavoriteStickerCollection attempt to save to database failed"
                    ]))).sendLogs(a.message);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype._dbDataToModel = function(t) {
            return new (r("WAWebFavoriteStickerModel"))({
                id: t.id,
                timestamp: t.timestamp,
                stickerHashWithoutMeta: t.stickerHashWithoutMeta,
                sticker: new (o("WAWebStickerModel")).StickerModel(babelHelpers.extends({}, t.sticker, {
                    id: t.id
                }))
            });
        };
        a_prototype._getStickerHashWithoutMeta = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield o("WAWebMediaStore").LruMediaStore.get(e);
                if (n == null) {
                    return e;
                }
                const a = o("WAWebStickerUtils").getStickerFileType(t);
                if (a === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
                    return o("WAWebStickerUtils").getLottieStickerFilehashFromZippedStickerBuffer(n, e);
                }
                return r("WAWebWebpCalculateWebpFilehashWithoutMetadata")(n);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.addOrUpdateStickers = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, deviceId) {
                const i = this;
                if (deviceId === undefined) {
                    deviceId = o("WAJids").interpretAsNumber(o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid()));
                }
                const l = e.filter((e)=>!i.get(e.id));
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: length of stickers will be enqueued: ",
                    ""
                ])), e.length);
                if (l.length !== 0) {
                    const s = yield (g || (g = n("Promise"))).all(l.map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(sticker) {
                            return new (r("WAWebFavoriteStickerModel"))({
                                id: sticker.filehash,
                                sticker,
                                stickerHashWithoutMeta: yield i._getStickerHashWithoutMeta(sticker.filehash, sticker.mimetype),
                                timestamp: t,
                                isFavorite: true,
                                deviceId
                            });
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                    this.addAndSort(s);
                    if (this._hasInitializedFromCache) {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Favorite Stickers: need to save collection to DB."
                        ])));
                        this._addSaveTask();
                    }
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.addAndSort = function(t) {
            this.add(t);
            this.sort();
        };
        a_prototype.removeAndSave = function(t, n = {}) {
            const e = this.remove(t, n);
            if (e.length) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: length of stickers will be removed: ",
                    ""
                ])), e.length);
                this._addSaveTask();
            }
            return e;
        };
        a_prototype.initializeFromCache = function(t) {
            const e = this;
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[FavStickers] init from DB, count=",
                ""
            ])), t.length);
            const n = t.map((t)=>e._dbDataToModel(t));
            this.addAndSort(n);
            const r = this.toArray();
            if (r.length > 0) {
                const a = new Set(n.map((e)=>e.id));
                if (r.some((e)=>!a.has(e.id))) {
                    this._addSaveTask();
                }
            }
            this._hasInitializedFromCache = true;
        };
        a_prototype.updateFavoriteStickerWithNewSticker = function(t, n) {
            const r = this.get(t);
            if (r != null) {
                const a = r.sticker.stickerAudio;
                const i = n.toDbData();
                o("WAWebStickerGetters").clearStickerGetterCacheFor(r.sticker);
                r.sticker = new (o("WAWebStickerModel")).StickerModel(babelHelpers.extends({}, i, {
                    stickerAudio: i.stickerAudio ?? a
                }));
                this.set([
                    r
                ], {
                    remove: false,
                    add: false,
                    silent: true,
                    sort: false
                });
                this._addSaveTask();
            }
        };
        a_prototype.getSuggestionsFromEmoji = function(t) {
            return this._emojiToCollection.get(t)?.map(function(e) {
                return e.sticker;
            });
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    C.model = r("WAWebFavoriteStickerModel");
    const b = new C;
    l.FavoriteStickerCollection = b;
}, 98);