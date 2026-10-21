__d("WAWebStickerModel", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBaseModel",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "WAWebStickerGetters",
    "getErrorSafe",
    "once"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("once")(function() {
        return new d({
            id: "placeholder",
            isPlaceholder: true
        });
    });
    const u = r("once")(function() {
        return new d({
            id: "createButton",
            isCreateButton: true
        });
    });
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.mediaData = o("WAWebBaseModel").session();
            e.mediaObject = o("WAWebBaseModel").prop();
            e.deprecatedMms3Url = o("WAWebBaseModel").prop();
            e.directPath = o("WAWebBaseModel").prop();
            e.filehash = o("WAWebBaseModel").prop();
            e.height = o("WAWebBaseModel").prop();
            e.index = o("WAWebBaseModel").prop();
            e.mediaKey = o("WAWebBaseModel").prop();
            e.mediaKeyTimestamp = o("WAWebBaseModel").prop();
            e.mimetype = o("WAWebBaseModel").prop();
            e.size = o("WAWebBaseModel").prop();
            e.type = o("WAWebBaseModel").prop(o("WAWebMediaTypes").OUTWARD_TYPES.STICKER);
            e.encFilehash = o("WAWebBaseModel").prop();
            e.width = o("WAWebBaseModel").prop();
            e.weight = o("WAWebBaseModel").prop();
            e.stickerPackId = o("WAWebBaseModel").prop();
            e.stickerPackName = o("WAWebBaseModel").prop();
            e.stickerPackPublisher = o("WAWebBaseModel").prop();
            e.isPlaceholder = o("WAWebBaseModel").prop();
            e.isCreateButton = o("WAWebBaseModel").prop();
            e.isAvatar = o("WAWebBaseModel").prop();
            e.stickerAudio = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            const n = new (r("WAWebMediaData"));
            this.addChild("mediaData", n);
            if (o("WAWebABProps").getABPropConfigValue("web_sticker_suggestions_enable")) {
                this.listenTo(n, "change:emojis", function(t) {
                    if (t.emojis != null) {
                        if (t.emojis.length) {
                            e.trigger("sticker_mediaData_emojis_updated");
                        }
                        e.stopListening(n, "change:emojis");
                    }
                });
            }
            if (!this.isPlaceholder && !this.isCreateButton) {
                o("WAWebMedia").registerSticker(this);
            }
        };
        n_prototype.downloadMedia = function(shouldThrow) {
            const t = this;
            return o("WAWebMedia").downloadStickerOrStickerPackIcon({
                shouldThrow,
                sticker: this,
                type: "STICKER"
            }).catch((n)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "id: ",
                    ", error"
                ])), t.id).catching(r("getErrorSafe")(n)).tags("non-sad").sendLogs("sticker-panel:sticker download failed");
            });
        };
        n_prototype.toDbData = function() {
            return {
                id: this.id || this.filehash,
                index: this.index || 0,
                width: this.width,
                height: this.height,
                size: this.size,
                mimetype: this.mimetype,
                filehash: this.filehash,
                directPath: this.directPath,
                mediaKey: this.mediaKey,
                mediaKeyTimestamp: this.mediaKeyTimestamp ?? o("WATimeUtils").unixTime(),
                encFilehash: this.encFilehash,
                deprecatedMms3Url: this.deprecatedMms3Url,
                isAvatar: this.isAvatar,
                type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                weight: this.weight,
                stickerAudio: this.stickerAudio
            };
        };
        n_prototype.delete = function() {
            t.prototype.delete.call(this);
            o("WAWebStickerGetters").clearStickerGetterCacheFor(this);
            o("WAWebMedia").deregisterSticker(this);
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "sticker";
    c.getPlaceholder = s;
    c.getCreateButton = u;
    var d = o("WAWebBaseModel").defineModel(c);
    d.getPlaceholder = s;
    l.Sticker = c;
    l.StickerModel = d;
}, 98);