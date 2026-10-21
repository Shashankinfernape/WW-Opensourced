__d("WAWebMediaData", [
    "WAWebBaseModel",
    "WAWebMediaCleanFileName",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaStreamability",
    "WAWebMediaTypes",
    "WAWebSuspiciousContent"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").session(u);
            t.type = o("WAWebBaseModel").prop(o("WAWebMediaTypes").OUTWARD_TYPES.UNKNOWN);
            t.directPath = o("WAWebBaseModel").prop();
            t.mediaKey = o("WAWebBaseModel").prop();
            t.mediaKeyTimestamp = o("WAWebBaseModel").prop();
            t.encFilehash = o("WAWebBaseModel").prop();
            t.mediaStage = o("WAWebBaseModel").prop(o("WAWebMediaTypes").MediaDataStage.INIT);
            t.size = o("WAWebBaseModel").prop();
            t.loadedSize = o("WAWebBaseModel").prop();
            t.filehash = o("WAWebBaseModel").prop();
            t.mimetype = o("WAWebBaseModel").prop();
            t.mediaBlob = o("WAWebBaseModel").prop();
            t.renderableUrl = o("WAWebBaseModel").prop();
            t.fullHeight = o("WAWebBaseModel").prop();
            t.fullWidth = o("WAWebBaseModel").prop();
            t.aspectRatio = o("WAWebBaseModel").prop();
            t.rgbaBuffer = o("WAWebBaseModel").prop();
            t.rgbaHeight = o("WAWebBaseModel").prop();
            t.rgbaWidth = o("WAWebBaseModel").prop();
            t.animationDuration = o("WAWebBaseModel").prop(0);
            t.animatedAsNewMsg = o("WAWebBaseModel").prop(false);
            t.isAnimated = o("WAWebBaseModel").prop();
            t.isFirstParty = o("WAWebBaseModel").prop();
            t.isFromStickerMaker = o("WAWebBaseModel").prop();
            t.isAvatar = o("WAWebBaseModel").prop();
            t.isAiSticker = o("WAWebBaseModel").prop();
            t.isLottie = o("WAWebBaseModel").prop();
            t.stickerPremiumStatus = o("WAWebBaseModel").prop();
            t.stickerPackId = o("WAWebBaseModel").prop();
            t.stickerPackName = o("WAWebBaseModel").prop();
            t.stickerPackPublisher = o("WAWebBaseModel").prop();
            t.stickerMakerSourceType = o("WAWebBaseModel").prop();
            t.singleLoopDuration = o("WAWebBaseModel").prop();
            t.firstFrameLength = o("WAWebBaseModel").prop();
            t.firstFrameSidecar = o("WAWebBaseModel").prop();
            t.emojis = o("WAWebBaseModel").prop();
            t.accessibilityLabel = o("WAWebBaseModel").prop();
            t.progressiveStage = o("WAWebBaseModel").prop();
            t.isViewOnce = o("WAWebBaseModel").prop(false);
            t.staticUrl = o("WAWebBaseModel").prop();
            t.preview = o("WAWebBaseModel").prop();
            t.sidecar = o("WAWebBaseModel").prop();
            t.duration = o("WAWebBaseModel").prop();
            t.isGif = o("WAWebBaseModel").prop();
            t.gifAttribution = o("WAWebBaseModel").prop();
            t.suspiciousContent = o("WAWebBaseModel").prop(o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO);
            t.filename = o("WAWebBaseModel").prop();
            t.pageCount = o("WAWebBaseModel").prop();
            t.documentPreview = o("WAWebBaseModel").prop();
            t.isPasswordProtected = o("WAWebBaseModel").prop();
            t.isVcardOverMmsDocument = o("WAWebBaseModel").prop(false);
            t.parsedVcards = o("WAWebBaseModel").prop();
            t.extractedLottieSticker = o("WAWebBaseModel").prop();
            t.fullPreviewSize = o("WAWebBaseModel").prop();
            t.fullPreviewData = o("WAWebBaseModel").prop();
            t.subtype = o("WAWebBaseModel").prop();
            t.waveform = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
        };
        t_prototype.set = function(n, r, o) {
            let t;
            let a = o;
            if (typeof n === "string") {
                t = {
                    [n]: r
                };
            } else {
                t = n;
                a = r;
            }
            t = m(t);
            return e.prototype.set.call(this, t, a);
        };
        t_prototype.isStreamable = function(t) {
            return o("WAWebMediaStreamability").isStreamableMedia(this, t);
        };
        t_prototype.isDownloadable = function() {
            if (this.isViewOnce) {
                return false;
            }
            const e = this.renderableUrl != null;
            if (e) {
                return true;
            }
            const t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(this.filehash);
            if (t) {
                return true;
            }
            const n = this.mediaStage === o("WAWebMediaTypes").MediaDataStage.EXISTS || this.mediaStage === o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY;
            return !!n;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "mediaData";
    var s = 1;
    function u() {
        return String(s++);
    }
    var c = o("WAWebBaseModel").defineModel(e);
    c.TYPE = o("WAWebMediaTypes").OUTWARD_TYPES;
    const d = c;
    function m(e) {
        if (e.filename != null && e.filename !== "" && e.type === c.TYPE.DOCUMENT) {
            const t = o("WAWebMediaCleanFileName").cleanFilename(e.filename);
            return babelHelpers.extends({}, e, {
                filename: t,
                caption: t
            });
        }
        return e;
    }
    l.default = d;
}, 98);