__d("WAWebMediaInMemoryBlobCache", [
    "WALogger",
    "WALruCache",
    "WAThrottle",
    "WAWebCreateMediaBlobUrl",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMemoryPressureCacheRegistry",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 250000000;
    const u = 50 * 1024 * 1024;
    class c {
        constructor(e = s){
            var t = this;
            this.$3 = new Map;
            this.$4 = new Set;
            this.$5 = new Set;
            this.$6 = {
                name: "media_blob",
                unit: "bytes",
                release: function() {
                    return t.trimUnusedTo(u);
                }
            };
            this.$7 = false;
            this.getOrCreateURL = function(e) {
                const n = t.$3.get(e);
                if (n != null) {
                    t.touch(e);
                    return n;
                }
                const a = t.get(e);
                if (!a) {
                    throw r("err")(`There is no blob matching filehash: ${e}.`);
                }
                const i = o("WAWebCreateMediaBlobUrl").createMediaBlobUrl(a);
                t.$3.set(e, i);
                return i;
            };
            this.revokeURL = function(e, n) {
                if (n != null) {
                    if (t.$3.get(e) !== n) {
                        throw r("err")("The url provided does not match the filehash.");
                    }
                    t.$3.delete(e);
                    window.URL.revokeObjectURL(n);
                }
            };
            this.$10 = o("WAThrottle").throttle(function() {
                t.$4.forEach((e)=>{
                    const n = t.$3.get(e);
                    if (n != null) {
                        window.URL.revokeObjectURL(n);
                        t.$3.delete(e);
                    }
                });
                t.$4.clear();
            }, 0, {
                leading: false
            });
            if (e != null && e < 0) {
                throw r("err")("Size limit cannot be a negative number.");
            }
            this.$2 = {};
            this.$1 = new (o("WALruCache")).LruCache({
                sizeLimit: e,
                getSize: function(t) {
                    return t.size;
                },
                onEvict: function(n, r) {
                    if (t.$3.has(n) && t.$8(n) === 0) {
                        t.revokeURL(n, t.$3.get(n));
                        o("WAWebMediaStorage").getOrCreateMediaObject(n).consolidate({
                            downloadStage: o("WAWebMediaTypes").DownloadStage.INIT,
                            progressiveStage: null
                        });
                    }
                    t.$7 = true;
                },
                onPurge: function() {
                    if (t.$7) {
                        t.$7 = false;
                        t.$9();
                    }
                },
                shouldEvict: function(n, r) {
                    return t.$8(n) === 0;
                }
            });
        }
        get(t) {
            return this.$1.get(t);
        }
        has(t) {
            return this.$1.has(t);
        }
        touch(t) {
            this.get(t);
        }
        put(t, n) {
            this.$1.put(t, n);
            o("WAWebMemoryPressureCacheRegistry").registerMemoryPressureCache(this.$6);
            this.$9();
        }
        replace(t, n) {
            const e = this.$3.get(t);
            if (e != null && this.$8(t) === 0) {
                this.revokeURL(t, e);
            } else {
                this.$3.delete(t);
            }
            this.put(t, n);
        }
        delete(t) {
            this.$1.delete(t);
            this.$9();
        }
        clear() {
            const e = this;
            this.$10.flush();
            this.$2 = {};
            this.$3.forEach((t, n)=>{
                e.revokeURL(n, t);
            });
            this.$3.clear();
            this.$1.clear();
        }
        trimUnusedTo(t) {
            const e = this.$1.getCurrentSize();
            this.$1.trimTo(t);
            return e - this.$1.getCurrentSize();
        }
        increaseUsageCount(t) {
            this.$2[t] = this.$8(t) + 1;
            this.$4.delete(t);
        }
        decreaseUsageCount(n) {
            const t = this.$8(n);
            if (t <= 0) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[InMemoryMediaBlobCache] usageCount can't go negative"
                ]))).tags("media-in-memory-blob-cache").sendLogs("media-blob-cache-usage-count-negative-number");
                return;
            }
            this.$2[n] = t - 1;
            if (this.$2[n] === 0) {
                delete this.$2[n];
                this.$4.add(n);
                this.$10();
            }
        }
        $8(t) {
            return this.$2[t] || 0;
        }
        $9() {
            this.$5.forEach((e)=>e());
        }
        subscribe(t) {
            const e = this;
            this.$5.add(t);
            return function() {
                e.$5.delete(t);
            };
        }
        canFitFile(t) {
            return t <= this.$1.getSizeLimit();
        }
    }
    const d = new c;
    l.InMemoryMediaBlobCacheImpl = c;
    l.InMemoryMediaBlobCache = d;
}, 98);