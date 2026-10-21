__d("WAWebAssetLoader", [
    "invariant",
    "Promise",
    "WAAbortError",
    "WABackoffUtils",
    "WADeepEquals",
    "WALogger",
    "WAPriorityQueue",
    "WAPromiseRaceAbort",
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebAssetLoaderDynamicStyle",
    "WAWebAssetToLoad",
    "WAWebEmoji",
    "WAWebEmojiAssetLoader",
    "WAWebEmojiConst",
    "WAWebLoadAssetUrl",
    "WAWebNoop",
    "WAWebWamEnumWebcAssetCacheTypeCode",
    "WAWebWebcAssetLoadWamEvent",
    "asyncToGeneratorRuntime",
    "cr:5624",
    "err",
    "getErrorSafe",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = {
        INITIAL_EMOJI_LOAD: 1,
        INITIAL_ASSET_LOAD: 2,
        THEME_ASSET_LOAD: 2,
        HELP_ANIMATED_DOODLE: 2,
        LAZY_LOAD_EMOJI: 2,
        NOTIFICATION_ICON: 2
    };
    const C = (()=>{
        function t(e = 90) {
            const t = this;
            this.$1 = new (r("WAWebAssetLoaderDynamicStyle"))("asset-style");
            this.$2 = {};
            this.$3 = {};
            this.$4 = null;
            this.$6 = r("WAWebAssetLoaderDpiChangeDispatch").currentRes;
            this.$7 = 0;
            this.$9 = new (r("WAPriorityQueue"))(function(e) {
                return -e.priority;
            });
            this.$10 = false;
            this.loadAssetsForCurrentDpi = function() {
                const e = r("WAWebAssetLoaderDpiChangeDispatch").currentRes;
                const n = t.$6;
                if (e !== n) {
                    t.$6 = e;
                    Object.keys(t.$2).forEach((e)=>{
                        t.$13(e, n);
                    });
                    t.$11(Object.values(t.$2), y.INITIAL_EMOJI_LOAD, {
                        forceCheck: false
                    }).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
                }
            };
            this.$8 = e;
        }
        const a = t.prototype;
        a.initEmojiAsset = function(t) {
            this.$4 = t;
        };
        a.loadInitialAssets = function(n) {
            const t = new (o("WAWebWebcAssetLoadWamEvent")).WebcAssetLoadWamEvent({
                webcAssetName: "initial-assets",
                webcAssetFromCache: false,
                webcAssetCacheType: o("WAWebWamEnumWebcAssetCacheTypeCode").WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED
            });
            this.$11(n, y.INITIAL_ASSET_LOAD, {
                estimateStorage: true
            }).then(()=>{
                t.markWebcAssetLoadT();
                t.commit();
                const n = t.webcAssetLoadT;
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "AssetLoader:loadInitialAssets complete in ",
                    "ms"
                ])), n);
            }).catch(o("WAAbortError").catchAbort(function() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "AssetLoader:loadInitialAssets cancelled by more recent request."
                ])));
            }));
        };
        a.loadEmoji = function(t, a) {
            if (this.$4 && this.$5) {
                const e = this.$4(this.$5);
                const i = o("WAWebEmoji").EmojiUtil.getBucket(t);
                const l = this.$12();
                const s = e.get(`${l}b${i}`);
                const u = this.$6;
                if (s) {
                    return this.loadAsset(s, a, false).catch(o("WAAbortError").catchAbort(function() {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "AssetLoader: loadEmoji Cancelled by more recent request: ",
                            "-",
                            ""
                        ])), s.id, u);
                    }));
                }
                return (h || (h = n("Promise"))).reject(r("err")("The given emoji glyph id was not found"));
            }
            return (h || (h = n("Promise"))).reject(r("err")("emojiForPlatform or currentPlatform are not set"));
        };
        a.loadEmojis = function() {
            const e = r("nullthrows")(this.$5);
            if (this.$4 == null) {
                s(0, 56365);
            }
            const t = Array.from(this.$4(e).values());
            const n = new (o("WAWebWebcAssetLoadWamEvent")).WebcAssetLoadWamEvent({
                webcAssetName: "emojis",
                webcAssetFromCache: false,
                webcAssetCacheType: o("WAWebWamEnumWebcAssetCacheTypeCode").WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED
            });
            this.$11(t, y.INITIAL_EMOJI_LOAD, {
                estimateStorage: true
            }).then(()=>{
                n.markWebcAssetLoadT();
                n.commit();
                const e = n.webcAssetLoadT;
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "AssetLoader:loadEmojis complete in ",
                    "ms"
                ])), e);
            }).catch(o("WAAbortError").catchAbort(function() {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "AssetLoader:loadEmojis cancelled by more recent request."
                ])));
            }));
        };
        a.loadAsset = function(t, a, i = true) {
            const e = this;
            const l = t.id;
            const s = r("WAWebAssetLoaderDpiChangeDispatch").currentRes;
            const u = this.$2[l];
            if (u && !o("WADeepEquals").deepEqual(t, u)) {
                const c = [
                    "Attempted to load an asset using an already used ID"
                ];
                return (h || (h = n("Promise"))).reject(r("err")(c.join("\n")));
            }
            this.$2[l] = t;
            this.$3[l] = this.$3[l] || {};
            const d = s === "high" ? "low" : "high";
            this.$13(l, d);
            const m = this.$3[l][s];
            if (m && !i) {
                return m.promise;
            }
            const _ = new (r("WAWebAssetToLoad"))(t, s, a);
            const f = new AbortController;
            const g = f.signal;
            const y = this.$14(_, f).then((n)=>{
                if (g.aborted) {
                    throw new (o("WAAbortError")).AbortError;
                }
                const r = t.selectors;
                if (r) {
                    e.$1.setRule(`${r.join(", ")}`, {
                        "background-image": `url('${n}')`
                    });
                }
                return n;
            }).catch((t)=>{
                const n = r("getErrorSafe")(t);
                const a = e.$3[l][s];
                const i = C !== a;
                if (!i) {
                    e.$3[l][s] = null;
                }
                if (n.name === o("WAAbortError").ABORT_ERROR && (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Asset load cancelled by more recent request: ",
                    "-",
                    ""
                ])), l, s), i && a)) {
                    return a.promise;
                }
                throw t;
            });
            _.setConsumerPromise(y);
            var C = {
                promise: y,
                abort: function(n) {
                    e.abortUrlPromise(_, n);
                }
            };
            this.$3[l][s] = C;
            if (m) {
                m.abort(false);
            }
            this.$15();
            return y;
        };
        a.$14 = function(t, o) {
            const e = this;
            const a = new (h || (h = n("Promise")))(function(n) {
                t.setConsumerPromiseResolve(n, o);
                e.$9.push(t);
            });
            return r("WAPromiseRaceAbort")(a, o.signal);
        };
        a.$15 = function() {
            const e = this;
            if (!(this.$7 >= this.$8)) {
                const t = function() {
                    const t = e.$9.pull();
                    if (!t) {
                        return {
                            v: void 0
                        };
                    }
                    e.$7 += 1;
                    o("WAWebLoadAssetUrl").loadUrl(t).then(()=>{
                        e.decrementCurrentlyLoadingCount();
                        e.$15();
                    }).catch(o("WAAbortError").catchAbort(function() {
                        e.decrementCurrentlyLoadingCount();
                        e.$15();
                    })).catch((n)=>{
                        e.decrementCurrentlyLoadingCount();
                        if (!r("gkx")("26258") && n instanceof o("WAWebLoadAssetUrl").LoadUrlError && (n.statusCode === 404 || n.statusCode === 429)) {
                            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "Dev-only: Failed to load asset ",
                                " with status ",
                                ". This might cause emojis to not show, this likely happens because emoji hashes changed. Rebuilding should fix the issue"
                            ])), n.url, n.statusCode);
                            return;
                        }
                        t.retryCount += 1;
                        const a = o("WABackoffUtils").expBackoff(t.retryCount, 120000, 1000, 0.1);
                        self.setTimeout(function() {
                            e.$9.push(t);
                            e.$15();
                        }, a);
                        e.$15();
                        o("WAWebLoadAssetUrl").getSupportedImageFormatUrl(t).then((e)=>{
                            const t = e.split("/");
                            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "Asset: ",
                                " failed. Retrying... ",
                                ""
                            ])), t[t.length - 1], String(n));
                        });
                    });
                };
                let n;
                for(let a = 0; a < this.$8 - this.$7; a++){
                    n = t();
                    if (n) {
                        return n.v;
                    }
                }
            }
        };
        a.abortUrlPromise = function(t, n = true) {
            const e = t.getLoadUrlPromise();
            if (e) {
                t.abortLoadUrlPromise();
                const r = t.getConsumerPromise();
                if (n && r) {
                    t.abortConsumerPromise();
                }
            }
            this.$15();
        };
        a.$13 = function(t, n) {
            const r = this.$3[t]?.[n];
            if (r) {
                this.$3[t][n] = null;
                r.abort(true);
            }
        };
        a.setPlatform = function(t) {
            const e = this;
            const n = this.$5;
            if (t !== n) {
                this.$5 = t;
                const a = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t);
                const i = a === o("WAWebEmojiConst").EMOJI_TYPE.APPLE ? o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP : o("WAWebEmojiConst").EMOJI_TYPE.APPLE;
                const l = i === o("WAWebEmojiConst").EMOJI_TYPE.APPLE ? "emoji-apple-" : "emoji-wa-";
                Object.keys(this.$2).forEach((t)=>{
                    if (t.startsWith(l)) {
                        e.$13(t, "high");
                        e.$13(t, "low");
                    }
                });
                if (this.$4 != null) {
                    const s = Array.from(this.$4(t).values());
                    this.$11(s, y.INITIAL_EMOJI_LOAD, {
                        forceCheck: false
                    }).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
                }
            }
        };
        a.isAssetLoaded = function(t) {
            return this.$2[t] != null;
        };
        a.$12 = function() {
            const e = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(this.$5);
            if (e === o("WAWebEmojiConst").EMOJI_TYPE.APPLE) {
                return "emoji-apple-";
            }
            return "emoji-wa-";
        };
        a.$11 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
                const o = this;
                const a = r?.forceCheck !== false;
                const i = r?.estimateStorage === true;
                const l = yield (h || (h = n("Promise"))).all(e.map((e)=>o.loadAsset(e, t, a)));
                if (n("cr:5624")) {
                    n("cr:5624")({
                        keep: Object.values(this.$2),
                        estimateStorage: i
                    });
                }
                return l;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.decrementCurrentlyLoadingCount = function() {
            if (this.$7 <= 0 && !this.$10) {
                this.$10 = true;
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!"
                ]))).sendLogs("Tried to decrease _loadingCount below zero, would have been negative.");
            }
            this.$7 = Math.max(0, this.$7 - 1);
        };
        return t;
    })();
    l.LOAD_PRIORITY = y;
    l.AssetLoaderImpl = C;
}, 98);