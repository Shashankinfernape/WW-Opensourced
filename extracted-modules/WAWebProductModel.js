__d("WAWebProductModel", [
    "WAWebBaseModel",
    "WAWebCreateFile",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "WAWebProductGetters",
    "WAWebProductImageCollection"
], function(t, n, r, o, a, i, l) {
    const e = 0;
    const s = 4503599627370496;
    const u = 10;
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.old = o("WAWebBaseModel").session(false);
            t.checkmark = o("WAWebBaseModel").session(false);
            t.id = o("WAWebBaseModel").prop();
            t.isHidden = o("WAWebBaseModel").prop();
            t.catalogWid = o("WAWebBaseModel").prop();
            t.url = o("WAWebBaseModel").prop();
            t.signedShimmedUrl = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.description = o("WAWebBaseModel").prop();
            t.availability = o("WAWebBaseModel").prop();
            t.maxAvailable = o("WAWebBaseModel").prop();
            t.reviewStatus = o("WAWebBaseModel").prop();
            t.isSanctioned = o("WAWebBaseModel").prop();
            t.canAppeal = o("WAWebBaseModel").prop();
            t.currency = o("WAWebBaseModel").prop();
            t.priceAmount1000 = o("WAWebBaseModel").prop();
            t.salePriceAmount1000 = o("WAWebBaseModel").prop();
            t.salePriceStartDate = o("WAWebBaseModel").prop();
            t.salePriceEndDate = o("WAWebBaseModel").prop();
            t.retailerId = o("WAWebBaseModel").prop();
            t.productImageCollection = o("WAWebBaseModel").session();
            t.imageCount = o("WAWebBaseModel").prop();
            t.displayPriority = o("WAWebBaseModel").prop();
            t.videos = o("WAWebBaseModel").prop();
            t.variantInfo = o("WAWebBaseModel").prop();
            t.additionalImageCdnUrl = o("WAWebBaseModel").prop();
            t.additionalImageHashes = o("WAWebBaseModel").prop();
            t.imageCdnUrl = o("WAWebBaseModel").prop();
            t.imageHash = o("WAWebBaseModel").prop();
            t.complianceInfo = o("WAWebBaseModel").prop();
            t.importerInformationExempt = o("WAWebBaseModel").prop();
            t.productMsgMediaData = o("WAWebBaseModel").session();
            t.fetchedFromServer = o("WAWebBaseModel").session();
            t.t = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            const t = this;
            e.prototype.initialize.call(this);
            this.productImageCollection = new (o("WAWebProductImageCollection")).ProductImageCollection;
            this.listenTo(this, "change:imageCdnUrl", function() {
                return t.triggerMainImageUpdate();
            });
            this.initImageUpdate();
        };
        t_prototype.triggerAdditionalImageUpdate = function() {
            const t = this;
            let r = 0;
            this.additionalImageCdnUrl?.forEach(function(mediaUrl, n) {
                t.productImageCollection.gadd({
                    id: `_${n + 1}`,
                    mediaUrl,
                    fetchedFromServer: t.fetchedFromServer,
                    old: false
                }, {
                    merge: true
                });
                r = n + 1;
            });
            this.videos?.forEach(function(e, n) {
                t.productImageCollection.gadd({
                    id: `_${n + r + 1}`,
                    mediaUrl: e.thumbnail_url,
                    fetchedFromServer: t.fetchedFromServer,
                    old: false,
                    videoUrl: e.original_video_url
                }, {
                    merge: true
                });
                r += n + 1;
            });
            this.productImageCollection.filter((e, t)=>t > r).forEach((e)=>e.markOld());
        };
        t_prototype.triggerMainImageUpdate = function() {
            if (this.imageCdnUrl != null && this.imageCdnUrl !== "") {
                this.productImageCollection.gadd({
                    id: "_0",
                    mediaUrl: this.imageCdnUrl,
                    fetchedFromServer: this.fetchedFromServer,
                    old: false
                }, {
                    merge: true
                });
            } else {
                this.productImageCollection.get("_0")?.markOld();
            }
        };
        t_prototype.initImageUpdate = function() {
            if (!this.fetchedFromServer && this.productMsgMediaData) {
                for(let e = 0; e < this.imageCount; e++){
                    this.productImageCollection.gadd({
                        id: `_${e}`,
                        type: "product",
                        mediaData: new (r("WAWebMediaData"))({
                            mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING
                        }),
                        fetchedFromServer: this.fetchedFromServer,
                        old: false
                    }, {
                        merge: true
                    });
                }
                return;
            }
            this.triggerMainImageUpdate();
        };
        t_prototype.markOld = function() {
            this.old = true;
        };
        t_prototype.lazyloadProductImageCollection = function() {
            this.triggerAdditionalImageUpdate();
            return this.productImageCollection;
        };
        t_prototype.getProductImageCollectionCount = function() {
            return this.productImageCollection.length;
        };
        t_prototype.getProductImageCollectionHead = function() {
            return this.productImageCollection.head();
        };
        t_prototype.getHeadImageFile = function() {
            const name = this.name;
            const productImageCollection = this.productImageCollection;
            const r = productImageCollection.head();
            if (r) {
                let a;
                const i = r.mediaData?.mediaBlob;
                if (i instanceof Blob) {
                    a = i;
                } else {
                    a = i.getBlob();
                }
                if (a != null) {
                    const l = o("WAWebCreateFile").createFile([
                        a
                    ], `${name}.jpg`, {
                        type: "image/jpeg"
                    });
                    return l;
                }
            }
        };
        t_prototype.evictImagesFromCache = function() {
            this.productImageCollection.forEach((e)=>e.evictFromCache());
        };
        t_prototype.getPreviewImage = function() {
            return this.productImageCollection.head();
        };
        t_prototype.getCollection = function() {
            return this.collection;
        };
        t_prototype.setIsHidden = function(t) {
            this.isHidden = t;
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebProductGetters").clearProductGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "product";
    const d = o("WAWebBaseModel").defineModel(c);
    l.MIN_PRICE = e;
    l.MAX_PRICE = s;
    l.MAX_PRODUCT_IMAGES = u;
    l.Product = d;
}, 98);