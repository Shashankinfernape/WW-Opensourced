__d("WAWebRecentStickerCollectionMd", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebIdleTaskRunner",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaStorage",
    "WAWebMsgCollection",
    "WAWebRecentStickerModel",
    "WAWebSchemaRecentStickers",
    "WAWebStickerGetters",
    "WAWebStickerModel",
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
    let h;
    let y;
    let C;
    let b;
    const v = 32;
    const S = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e._hasInitializedFromCache = false;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker);
                }
            });
            return e;
        };
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
        a_prototype.reset = function() {
            this.forEach((e)=>{
                o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker);
            });
            t.prototype.reset.call(this);
        };
        a_prototype._comparator = function(t, n) {
            if (t.weight !== n.weight) {
                if (t.weight < n.weight) {
                    return 1;
                }
                return -1;
            }
            if (t.timestamp < n.timestamp) {
                return 1;
            }
            return -1;
        };
        a_prototype._dbDataToModel = function(t) {
            return new (r("WAWebRecentStickerModel"))({
                id: t.id,
                timestamp: t.timestamp,
                msgId: t.msgId,
                sticker: new (o("WAWebStickerModel")).StickerModel(t.sticker),
                weight: t.weight ?? 1,
                isNewSticker: t.isNewSticker
            });
        };
        a_prototype._addSaveTask = function() {
            const t = this;
            if (!this._idleTaskId || !o("WAWebIdleTaskRunner").IdleCallbackTasks.isInQueue(this._idleTaskId)) {
                this._idleTaskId = o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function() {
                    t._saveToDb().catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "RecentStickerCollection attempt to save to database failed"
                        ]))).catching(r("getErrorSafe")(t)).sendLogs("recent-sticker-save-failed");
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
                        msgId: e.msgId,
                        weight: e.weight,
                        sticker: {
                            id: t.id,
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
                            isAvatar: t.isAvatar,
                            type: "sticker",
                            stickerAudio: t.stickerAudio
                        }
                    };
                });
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Recent Stickers: need to save stickers in DB with length: ",
                    ""
                ])), e.length);
                try {
                    const t = o("WAWebSchemaRecentStickers").getRecentStickersTable();
                    let n = yield t.count();
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Recent Stickers: before save, stickers in DB with length: ",
                        ""
                    ])), n);
                    yield t.clear();
                    yield t.bulkCreateOrReplace(e);
                    n = yield t.count();
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Recent Stickers: after save, stickers in DB with length: ",
                        ""
                    ])), n);
                } catch (error) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "RecentStickerCollection attempt to save to database failed"
                    ]))).sendLogs(String(error));
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.addStickerWithMediaData = function({ encFilehash, id, mediaData, mediaKey, stickerAudio, stickerSentTs }) {
            this.addNewSticker(new (o("WAWebStickerModel")).StickerModel(babelHelpers.extends({}, mediaData, {
                mediaKey,
                encFilehash,
                id: mediaData.filehash,
                stickerAudio
            })), id.toString(), stickerSentTs);
        };
        a_prototype.addNewSticker = function(t, n, r) {
            if (!t.id) {
                t.id = t.filehash;
            }
            const e = this.get(t.id) == null;
            this.addStickersAndPersistToDB([
                [
                    t.toDbData(),
                    r ?? o("WATimeUtils").unixTimeMs(),
                    n
                ]
            ], e);
        };
        a_prototype.addStickersAndPersistToDB = function(t, isNewSticker = false) {
            const e = this;
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "Recent Stickers: length of stickers will be enqueued: ",
                ""
            ])), t.length);
            if (t.length !== 0) {
                const r = new Set(t.map((e)=>e[0].id));
                const a = t.reduce((acc, [n, o, a])=>{
                    if (r.has(n.id)) {
                        r.delete(n.id);
                        const i = [
                            [
                                n,
                                o,
                                a
                            ]
                        ];
                        return i.concat(acc);
                    }
                    return acc;
                }, []);
                const i = [];
                const l = [];
                a.forEach(([r, a, s])=>{
                    const u = e.get(r.id);
                    if (u) {
                        if (u.timestamp <= a) {
                            u.timestamp = a;
                        }
                        if (r.stickerAudio != null) {
                            o("WAWebStickerGetters").clearStickerGetterCacheFor(u.sticker);
                            u.sticker.stickerAudio = r.stickerAudio;
                        }
                        l.push(u);
                    } else {
                        const c = e._dbDataToModel({
                            id: r.id,
                            timestamp: a,
                            sticker: {
                                id: r.id,
                                index: r.index,
                                width: r.width,
                                height: r.height,
                                size: r.size,
                                mimetype: r.mimetype,
                                filehash: r.filehash,
                                directPath: r.directPath,
                                mediaKey: r.mediaKey,
                                mediaKeyTimestamp: r.mediaKeyTimestamp,
                                encFilehash: r.encFilehash,
                                deprecatedMms3Url: r.deprecatedMms3Url,
                                isAvatar: r.isAvatar,
                                type: "sticker",
                                stickerAudio: r.stickerAudio
                            },
                            msgId: s,
                            weight: r.weight != null ? Number(r.weight.toFixed(2)) : 1,
                            isNewSticker
                        });
                        i.push(c);
                        l.push(c);
                    }
                });
                if (l.length > 0) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Recent Stickers: adjust weight and resort stickers."
                    ])));
                    this.adjustWeight(l);
                    this.addAndSort(i);
                    if (this._hasInitializedFromCache) {
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "Recent Stickers: need to save collection to DB."
                        ])));
                        this._addSaveTask();
                    }
                }
            }
        };
        a_prototype.replaceAndEnqueue = function(t, n = false) {
            if (this.length > 0) {
                const e = this.map((e)=>e.id);
                this.remove(e);
            }
            if (t.length === 0) {
                this._addSaveTask();
                return;
            }
            this.addStickersAndPersistToDB(t, n);
        };
        a_prototype.updateDirectPath = function(t, n) {
            const e = this.get(t);
            if (e != null && e.sticker) {
                e.sticker.directPath = n;
                this.set([
                    e
                ], {
                    remove: false,
                    add: false,
                    silent: true,
                    sort: false
                });
                this._addSaveTask();
            } else {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "updateDirectPaths: stickerId not found in collection"
                ])));
            }
        };
        a_prototype.updateStickerMediaData = function(t, n) {
            const e = this.get(t);
            if (!(n == null || e == null)) {
                if (n.directPath != null) {
                    e.sticker.directPath = n.directPath;
                }
                if (n.encFilehash != null) {
                    e.sticker.encFilehash = n.encFilehash;
                }
                if (n.mediaKey) {
                    e.sticker.mediaKey = n.mediaKey;
                }
                if (n.mediaKeyTimestamp) {
                    e.sticker.mediaKeyTimestamp = n.mediaKeyTimestamp;
                }
                this.set([
                    e
                ], {
                    remove: false,
                    add: false,
                    silent: true,
                    sort: false
                });
                this._addSaveTask();
            }
        };
        a_prototype.updateRecentStickerWithNewSticker = function(t, n) {
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
        a_prototype.associateStickerWithMsg = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield o("WAWebMsgCollection").MsgCollection.getMessagesById([
                    t
                ]);
                const n_messages = n.messages;
                const e_mediaObject = e.mediaObject;
                const i = e_mediaObject?.associatedMsgs() || [];
                if (e_mediaObject && (i.length === 0 || !n_messages.some((e)=>i.includes(e)))) {
                    o("WAWebMediaStorage").associateMediaWithMsg(e_mediaObject, n_messages[n_messages.length - 1]);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.initializeFromCache = function(t) {
            const e = this;
            this._hasInitializedFromCache = true;
            const n = t.map((t)=>{
                const n = e._dbDataToModel(t);
                if (n.msgId != null) {
                    e.associateStickerWithMsg(n.sticker, n.msgId).catch((e)=>{
                        o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "RecentStickerCollection attempt to associate sticker with message failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("recent-sticker-associate-msg-failed");
                    });
                }
                return n;
            });
            const a = this.toArray();
            if (a.length > 0) {
                n.forEach((e)=>e.weight = Number((e.weight * 0.9 ** a.length).toFixed(2)));
            }
            this.addAndSort(n);
            if (a.length) {
                const i = new Set(n.map((e)=>e.id));
                if (a.some((e)=>!i.has(e))) {
                    this._addSaveTask();
                }
            }
        };
        a_prototype.addAndSort = function(t) {
            this.add(t);
            this.sort();
            if (this.length > v && this._hasInitializedFromCache) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Recent Stickers: stickers length ",
                    " is over the limit."
                ])), this.length);
                this.set(this.toArray().slice(0, v));
            }
        };
        a_prototype.removeAndSave = function(t, n = {}) {
            const e = this.remove(t, n);
            if (e.length) {
                this._addSaveTask();
            }
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "Recent Stickers: stickers length ",
                " after remove."
            ])), this.length);
            return e;
        };
        a_prototype.removeAllRecentAvatarStickers = function() {
            const e = this.filter((e)=>e.sticker.isAvatar === true);
            if (e.length === 0) {
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "Recent Stickers: no avatar stickers found, skip removing."
                ])));
                return [];
            }
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "Recent Stickers: removing all ",
                " avatar stickers."
            ])), e.length);
            return this.removeAndSave(e);
        };
        a_prototype.adjustWeight = function(t) {
            const e = new Set(t.map((e)=>e.id));
            this.filter((t)=>!e.has(t.id)).forEach((e)=>e.weight = Number((e.weight * 0.9).toFixed(2)));
            t.forEach((e)=>{
                if (e.isNewSticker === true) {
                    e.isNewSticker = undefined;
                } else {
                    e.weight = Number((e.weight + 1).toFixed(2));
                }
            });
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    S.model = r("WAWebRecentStickerModel");
    const R = new S;
    l.RecentStickerCollectionMd = R;
}, 98);