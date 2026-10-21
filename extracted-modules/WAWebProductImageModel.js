__d("WAWebProductImageModel", [
    "Promise",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WAWebBaseModel",
    "WAWebCryptoCalculateFilehash",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaDataUtils",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebProductImageGetters",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "https://static.whatsapp.net";
    const d = 1000;
    const m = 900 * 1000;
    const p = 10;
    const _ = o("WAPromiseBackoffs").createTimer({
        algo: {
            type: "fibonacci",
            first: 0,
            second: 1
        },
        jitter: 0.25,
        max: m
    });
    function f(mediaUrl) {
        const t = `_productimage_${mediaUrl.includes(c) ? mediaUrl : new URL(mediaUrl).pathname}`;
        return t;
    }
    const g = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.type = o("WAWebBaseModel").prop();
            e.mediaUrl = o("WAWebBaseModel").prop();
            e.videoUrl = o("WAWebBaseModel").prop();
            e.blobUrl = o("WAWebBaseModel").session();
            e.mediaData = o("WAWebBaseModel").session();
            e.fetchedFromServer = o("WAWebBaseModel").prop();
            e.old = o("WAWebBaseModel").session(false);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            const n = function() {
                return e.triggerImageUpdate();
            };
            this.listenTo(this, "change:mediaUrl", n);
            this.listenTo(this, "change:fetchedFromServer", n);
            this.triggerImageUpdate();
        };
        a_prototype._processAndUpdateMediaData = function(a) {
            const t = this;
            let i = {};
            const l = r("WAWebMediaOpaqueData").createFromData(a, "image/jpeg");
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "_processAndUpdateMediaData: before prepRawMedia"
            ])));
            const s = o("WAWebMedia").prepRawMedia(l, {});
            s.waitForPrep().then((e)=>{
                i = babelHelpers.extends({}, i, {
                    mediaBlob: e.mediaBlob,
                    type: e.type,
                    mimetype: e.mimetype,
                    fullWidth: e.fullWidth,
                    fullHeight: e.fullHeight
                });
                return (u || (u = n("Promise"))).all([
                    typeof e.preview === "string" ? r("WAWebMediaOpaqueData").createFromBase64Jpeg(e.preview) : (u || (u = n("Promise"))).resolve(null),
                    r("WAWebMediaOpaqueData").createFromData(e.mediaBlob),
                    o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(e.mediaBlob)
                ]);
            }).then(([n, r, a])=>{
                i = babelHelpers.extends({}, i, {
                    preview: n,
                    mediaBlob: r,
                    renderableUrl: r.url(),
                    mediaStage: o("WAWebMediaTypes").MediaDataStage.RESOLVED,
                    filehash: a
                });
                if (a !== t.mediaData.filehash) {
                    t.mediaData.set(i);
                }
            });
        };
        a_prototype.triggerImageUpdate = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                if (!(!this.fetchedFromServer || !this.mediaUrl)) {
                    if (!this.mediaData) {
                        this.addChild("mediaData", new (r("WAWebMediaData"))({
                            mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING
                        }));
                    }
                    const t = f(this.mediaUrl);
                    const a = yield o("WAWebMediaStore").LruMediaStore.get(t);
                    if (a) {
                        return this._processAndUpdateMediaData(a);
                    }
                    const i = {
                        delay: function({ taskDuration }) {
                            const n = d * _();
                            return Math.max(n - taskDuration, 0);
                        },
                        signal: new AbortController().signal,
                        retries: p
                    };
                    try {
                        const l = yield o("WABackoffDelay").backoff(i, (()=>{
                            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                                const n = yield o("WAWebMediaDataUtils").fetchMedia(e.mediaUrl);
                                if (!n || !(n.status >= 200 && n.status < 300)) {
                                    return t(new (o("WAWebMediaLoadErrors")).CatalogImageDownloadError);
                                }
                                return n;
                            });
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        })());
                        const u = l.result;
                        o("WAWebMediaStore").LruMediaStore.put(t, u);
                        this._processAndUpdateMediaData(u);
                    } catch (e) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to fetch ",
                            ""
                        ])), this.mediaUrl);
                        this.mediaData.set({
                            mediaStage: o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING
                        });
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.markOld = function() {
            this.old = true;
        };
        a_prototype.evictFromCache = function() {
            if (this.mediaUrl) {
                const e = f(this.mediaUrl);
                o("WAWebMediaStore").LruMediaStore.del(e);
            }
        };
        a_prototype.delete = function() {
            t.prototype.delete.call(this);
            o("WAWebProductImageGetters").clearProductImageGetterCacheFor(this);
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    g.Proxy = "productImage";
    const h = o("WAWebBaseModel").defineModel(g);
    l.STATIC_WHATSAPP_IMAGE_URI = c;
    l.ProductImage = h;
}, 98);