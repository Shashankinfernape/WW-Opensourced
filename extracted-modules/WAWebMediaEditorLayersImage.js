__d("WAWebMediaEditorLayersImage", [
    "$InternalEnum",
    "WADeepEquals",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorUtilsGenerateLayerId",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "Image",
        "Emoji",
        "Sticker",
        "Background"
    ]);
    const s = (()=>{
        function t(e) {
            this.$1 = Object.freeze(babelHelpers.extends({}, e));
            Object.freeze(this);
        }
        t.create = function(n) {
            const width = n.image.width;
            const height = n.image.height;
            if (!width || !height) {
                throw r("err")("Image must have valid width and height");
            }
            return new t({
                id: o("WAWebMediaEditorUtilsGenerateLayerId").generateLayerId("image"),
                type: n.type,
                image: n.image,
                editable: n.editable,
                frame: new (r("WAWebMediaEditorGeometryRect"))({
                    origin: n.origin,
                    size: new (r("WAWebMediaEditorGeometrySize"))({
                        width,
                        height
                    }),
                    rotation: n.rotation ?? 0,
                    scale: n.scale
                })
            });
        };
        const t_prototype = t.prototype;
        t_prototype.delete = function() {};
        t_prototype.setOrigin = function(t) {
            return this.$2({
                frame: this.getFrame().update({
                    origin: t
                })
            });
        };
        t_prototype.setRotation = function(t) {
            return this.$2({
                frame: this.getFrame().update({
                    rotation: t
                })
            });
        };
        t_prototype.setScale = function(t) {
            return this.$2({
                frame: this.getFrame().update({
                    scale: t
                })
            });
        };
        t_prototype.setFrame = function(t) {
            return this.$2({
                frame: t
            });
        };
        t_prototype.setImage = function(t) {
            return this.$2({
                image: t
            });
        };
        t_prototype.setEditable = function(t) {
            return this.$2({
                editable: t
            });
        };
        t_prototype.$2 = function(n) {
            const e = babelHelpers.extends({}, this.$1);
            if (n.image != null) {
                const a = n.image.width;
                const i = n.image.height;
                if (!a || !i) {
                    throw r("err")("Image must have valid width and height");
                }
                e.image = n.image;
                e.frame = new (r("WAWebMediaEditorGeometryRect"))({
                    origin: this.getFrame().getOrigin(),
                    size: new (r("WAWebMediaEditorGeometrySize"))({
                        width: a,
                        height: i
                    }),
                    rotation: this.getFrame().getRotation(),
                    scale: this.getFrame().getScale()
                });
            }
            if (n.editable != null) {
                e.editable = n.editable;
            }
            if (n.frame != null) {
                e.frame = n.frame;
            }
            if (o("WADeepEquals").deepEqual(this.$1, e)) {
                return this;
            }
            return new t(e);
        };
        t_prototype.getImage = function() {
            return this.$1.image;
        };
        t_prototype.getEditable = function() {
            return this.$1.editable;
        };
        t_prototype.getId = function() {
            return this.$1.id;
        };
        t_prototype.getFrame = function() {
            return this.$1.frame;
        };
        t_prototype.getOrigin = function() {
            return this.$1.frame.getOrigin();
        };
        t_prototype.getSize = function() {
            return this.$1.frame.getSize();
        };
        t_prototype.getX = function() {
            return this.$1.frame.getX();
        };
        t_prototype.getY = function() {
            return this.$1.frame.getY();
        };
        t_prototype.getWidth = function() {
            return this.$1.frame.getWidth();
        };
        t_prototype.getHeight = function() {
            return this.$1.frame.getHeight();
        };
        t_prototype.getRotation = function() {
            return this.$1.frame.getRotation();
        };
        t_prototype.getScale = function() {
            return this.$1.frame.getScale();
        };
        t_prototype.isSticker = function() {
            return this.$1.type === e.Sticker;
        };
        t_prototype.isEmoji = function() {
            return this.$1.type === e.Emoji;
        };
        t_prototype.isBackground = function() {
            return this.$1.type === e.Background;
        };
        return t;
    })();
    l.ImageLayerType = e;
    l.ImageLayer = s;
}, 98);