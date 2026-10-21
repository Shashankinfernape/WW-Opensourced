__d("WAWebRecentStickerCollection", [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebConnModel",
    "WAWebMobilePlatforms",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 32;
    const u = ((t)=>{
        function a(...a_1) {
            let e;
            e = t.call(this, ...a_1) || this;
            e._comparator = function(t, n) {
                if (o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.ANDROID) {
                    return e._getWeight(n) - e._getWeight(t);
                }
                if (t.index > n.index) {
                    return 1;
                }
                return -1;
            };
            e._syncStatus = "NONE";
            e._weightMap = new Map;
            e._sortTrimScale = function() {
                const e_length = e.length;
                if (e_length) {
                    e.sort();
                    if (e_length > s) {
                        for(let n = s; n < e_length; n++){
                            e._weightMap.delete(r("nullthrows")(e.at(n)).id);
                        }
                        e.remove(e.slice(s));
                    }
                    const o = e.head();
                    const a = e.last();
                    if (!(o && a && e._getWeight(o) < 10 && e._getWeight(a) > 0.01)) {
                        e.forEach((n, r)=>{
                            e._weightMap.set(n.id, 1 + 3 * ((e_length - r) / e_length));
                        });
                    }
                }
            };
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
                }
            });
            return e;
        };
        a_prototype._getWeight = function(t) {
            return r("nullthrows")(this._weightMap.get(t.id));
        };
        a_prototype.enqueue = function(t) {
            if (t.length !== 0) {
                if (o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.ANDROID) {
                    this._enqueueAndroid(t);
                } else {
                    this._enqueueiOS(t);
                }
            }
        };
        a_prototype.addStickerWithMediaData = function(t) {
            const e = new (o("WAWebStickerModel")).StickerModel(babelHelpers.extends({}, t, {
                id: t.filehash
            }));
            this.enqueue([
                e
            ]);
        };
        a_prototype._enqueueAndroid = function(t) {
            const e = this;
            t.forEach((t)=>{
                if (!e.get(t.id)) {
                    e._weightMap.set(t.id, 0);
                    e.add(t);
                }
                e.forEach((n)=>{
                    let r = e._getWeight(n);
                    if (n.id === t.id) {
                        r += 1;
                    } else {
                        r *= 0.9;
                    }
                    e._weightMap.set(n.id, Math.round(1000 * r) / 1000);
                });
            });
            this._sortTrimScale();
        };
        a_prototype._enqueueiOS = function(t) {
            const e = this;
            this.forEach((e, t)=>{
                e.index = s + t;
            });
            const n = new Set(t.map((e)=>e.id));
            const r = t.reduce((acc, item)=>{
                if (n.has(item.id)) {
                    n.delete(item.id);
                    return [
                        item
                    ].concat(acc);
                }
                return acc;
            }, []).slice(0, s);
            r.forEach((t, n)=>{
                const r = e.get(t.id);
                if (r) {
                    r.index = n;
                } else {
                    e.add({
                        id: t.id,
                        deprecatedMms3Url: t.deprecatedMms3Url,
                        directPath: t.directPath,
                        filehash: t.filehash,
                        encFilehash: t.encFilehash,
                        mediaKey: t.mediaKey,
                        mediaKeyTimestamp: t.mediaKeyTimestamp,
                        width: t.width,
                        height: t.height,
                        size: t.size,
                        mimetype: t.mimetype,
                        type: t.type,
                        index: n
                    });
                }
            });
            this.sort();
            this.remove(this.slice(s));
        };
        a_prototype.sync = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this._sync();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype._sync = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this._syncStatus !== "INPROGRESS") {
                    this._syncStatus = "INPROGRESS";
                    try {
                        yield this.findQuery({}, {
                            set: true
                        });
                        this.sort();
                        this._syncStatus = "SUCCESS";
                    } catch (t) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "collection:recent_sticker:_sync error "
                        ])));
                        this._syncStatus = "FAILURE";
                    }
                }
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.isSynced = function() {
            return this._syncStatus === "SUCCESS" || this._syncStatus === "FAILURE";
        };
        a_prototype.reset = function() {
            this.forEach(o("WAWebStickerGetters").clearStickerGetterCacheFor);
            this._syncStatus = "NONE";
            this._weightMap.clear();
            return t.prototype.reset.call(this);
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebStickerModel").StickerModel;
    const c = new u;
    l.RecentStickerCollection = c;
}, 98);