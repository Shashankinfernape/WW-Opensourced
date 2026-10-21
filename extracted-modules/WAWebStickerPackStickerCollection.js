__d("WAWebStickerPackStickerCollection", [
    "Promise",
    "WATimeUtils",
    "WAWebFetchFirstPartyStickersAction",
    "WAWebNoop",
    "WAWebStickerCollection",
    "WAWebStickerConstants",
    "WAWebStickerPackPlaceholder"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function a(e, n) {
            let r;
            r = t.call(this) || this;
            r.stickerPackId = e;
            r.isFirstParty = n;
            r._firstPartyFetchTimestamp = null;
            const o = a._cache[r.stickerPackId];
            if (o) {
                return o || babelHelpers.assertThisInitialized(r);
            }
            let i;
            const l = r;
            Object.defineProperty(r, "fetchState", {
                get: function() {
                    return i;
                },
                set: function(t) {
                    if (i !== t) {
                        i = t;
                        l.trigger("change:fetchState", t);
                    }
                }
            });
            return r;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.fetch = function(a) {
            const i = this;
            const l = this.isFirstParty && o("WATimeUtils").unixTime() - (this._firstPartyFetchTimestamp ?? 0) >= o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT;
            if ((a === true || l) && this.fetchState !== o("WAWebStickerCollection").FETCH_STATE.PENDING) {
                delete this._fetchPromise;
            }
            if (this._fetchPromise) {
                return this._fetchPromise;
            }
            this.fetchState = o("WAWebStickerCollection").FETCH_STATE.PENDING;
            if (o("WAWebStickerPackPlaceholder").isStickerPackPlaceholderId(this.stickerPackId)) {
                this._fetchPromise = new (e || (e = n("Promise")))(r("WAWebNoop"));
                return this._fetchPromise;
            }
            let s;
            if (this.isFirstParty) {
                this._firstPartyFetchTimestamp = o("WATimeUtils").unixTime();
                s = o("WAWebFetchFirstPartyStickersAction").fetchFirstPartyStickers(this.stickerPackId);
            } else {
                return (e || (e = n("Promise"))).resolve();
            }
            this._fetchPromise = s.then((e)=>{
                const t = Math.max(i.length || e.length);
                i._resetRange(0, t, e);
                i.fetchState = o("WAWebStickerCollection").FETCH_STATE.SUCCESS;
            }).catch(()=>{
                i.fetchState = o("WAWebStickerCollection").FETCH_STATE.ERROR;
            });
            return this._fetchPromise;
        };
        a_prototype._resetRange = function(t, n, r) {
            const e = this;
            this._forEachInRange(t, n, function(n, o) {
                const a = r[o - t];
                if (n) {
                    if (a) {
                        if (n.id === a.id) {
                            n.set(a);
                        } else {
                            e.remove(n);
                            e.add(a);
                        }
                    } else {
                        e.remove(n);
                    }
                } else if (a) {
                    e.add(a);
                }
            });
        };
        a_prototype._forEachInRange = function(t, n, r) {
            for(let e = t; e < n; e++){
                const o = this.at(e);
                r(o, e);
            }
        };
        return a;
    })(o("WAWebStickerCollection").StickerCollectionImpl);
    s._cache = {};
    s.comparator = function(e, t) {
        if (e.index < t.index) {
            return -1;
        }
        if (e.index > t.index) {
            return 1;
        }
        return 0;
    };
    l.default = s;
}, 98);