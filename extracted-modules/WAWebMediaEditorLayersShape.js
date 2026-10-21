__d("WAWebMediaEditorLayersShape", [
    "$InternalEnum",
    "WADeepEquals",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorEnumsColorsGetColorValue",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorUtilsGenerateLayerId",
    "WAWebMediaEditorUtilsShapes",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = [
        "mode"
    ];
    const s = n("$InternalEnum").Mirrored([
        "None",
        "Pixelate",
        "Smooth"
    ]);
    const u = (()=>{
        function t(e) {
            this.$1 = Object.freeze(babelHelpers.extends({}, e));
            Object.freeze(this);
        }
        t.create = function(a) {
            const a_mode = a.mode;
            const i = a_mode === undefined ? s.None : a_mode;
            const l = babelHelpers.objectWithoutPropertiesLoose(a, e);
            const width = l.image.width;
            const height = l.image.height;
            if (!width || !height) {
                throw r("err")("Image must have valid width and height");
            }
            const d = l.backgroundFrame.getWidth() / 2 - l.size.getWidth() / 2;
            const m = l.size.getWidth() + d;
            const p = l.backgroundFrame.getHeight() / 2 - l.size.getHeight() / 2;
            const _ = l.size.getHeight() + p;
            const f = l.shape === o("WAWebMediaEditorUtilsShapes").ShapeType.LINE || l.shape === o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW ? [
                d,
                _,
                (d + m) / 2,
                (_ + p) / 2,
                m,
                p
            ] : [];
            return new t({
                id: o("WAWebMediaEditorUtilsGenerateLayerId").generateLayerId("shape"),
                image: l.image,
                editable: true,
                frame: new (r("WAWebMediaEditorGeometryRect"))({
                    origin: l.origin,
                    size: l.size,
                    rotation: 0,
                    scale: {
                        x: 1,
                        y: 1
                    }
                }),
                radius: l.radius,
                shape: l.shape,
                backgroundFrame: l.backgroundFrame,
                confirmed: true,
                mode: i,
                points: f,
                fillColor: l.fillColor,
                strokeColor: l.strokeColor,
                strokeWidth: l.strokeWidth
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
        t_prototype.setBlurMode = function(t) {
            return this.$2({
                mode: t
            });
        };
        t_prototype.setPoints = function(t) {
            return this.$2({
                points: t
            });
        };
        t_prototype.setFillColor = function(fillColor) {
            return this.$2({
                fillColor
            });
        };
        t_prototype.setStrokeColor = function(strokeColor) {
            return this.$2({
                strokeColor
            });
        };
        t_prototype.setStrokeWidth = function(strokeWidth) {
            return this.$2({
                strokeWidth
            });
        };
        t_prototype.setShape = function(t) {
            return this.$2({
                shape: t
            });
        };
        t_prototype.setShapeRadius = function(radius) {
            return this.$2({
                radius
            });
        };
        t_prototype.setShapeBackgroundFrame = function(backgroundFrame) {
            return this.$2({
                backgroundFrame
            });
        };
        t_prototype.setConfirmed = function() {
            return this.$2({
                confirmed: true
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
                e.backgroundFrame = new (r("WAWebMediaEditorGeometryRect"))({
                    origin: this.getBackgroundFrame().getOrigin(),
                    size: new (r("WAWebMediaEditorGeometrySize"))({
                        width: a,
                        height: i
                    }),
                    rotation: this.getBackgroundFrame().getRotation(),
                    scale: this.getBackgroundFrame().getScale()
                });
            }
            if (n.editable != null) {
                e.editable = n.editable;
            }
            if (n.frame != null) {
                e.frame = n.frame;
            }
            if (n.radius != null) {
                e.radius = n.radius;
            }
            if (n.shape != null) {
                e.shape = n.shape;
            }
            if (n.points != null) {
                e.points = n.points;
            }
            if (n.fillColor != null) {
                e.fillColor = n.fillColor;
            }
            if (n.strokeColor != null) {
                e.strokeColor = n.strokeColor;
            }
            if (n.strokeWidth != null) {
                e.strokeWidth = n.strokeWidth;
            }
            if (n.backgroundFrame != null) {
                e.backgroundFrame = n.backgroundFrame;
            }
            if (n.confirmed != null) {
                e.confirmed = n.confirmed;
            }
            if (n.mode != null) {
                e.mode = n.mode;
            }
            if (o("WADeepEquals").deepEqual(this.$1, e)) {
                return this;
            }
            return new t(e).setConfirmed();
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
        t_prototype.getPoints = function() {
            return this.$1.points;
        };
        t_prototype.getFillColor = function() {
            return this.$1.fillColor ?? o("WAWebMediaEditorEnumsColorsGetColorValue").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK);
        };
        t_prototype.getStrokeColor = function() {
            return this.$1.strokeColor ?? o("WAWebMediaEditorEnumsColorsGetColorValue").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK);
        };
        t_prototype.getStrokeWidth = function() {
            return this.$1.strokeWidth ?? 10;
        };
        t_prototype.getMode = function() {
            return this.$1.mode;
        };
        t_prototype.getShape = function() {
            return this.$1.shape;
        };
        t_prototype.getRadius = function() {
            return this.$1.radius;
        };
        t_prototype.getBackgroundFrame = function() {
            return this.$1.backgroundFrame;
        };
        t_prototype.getConfirmed = function() {
            return this.$1.confirmed;
        };
        t_prototype.isBlur = function() {
            return this.getMode() !== s.None;
        };
        t_prototype.isRectangle = function() {
            return this.getShape() === o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE;
        };
        t_prototype.isCircle = function() {
            return this.getShape() === o("WAWebMediaEditorUtilsShapes").ShapeType.CIRCLE;
        };
        t_prototype.isLine = function() {
            return this.getShape() === o("WAWebMediaEditorUtilsShapes").ShapeType.LINE;
        };
        t_prototype.isArrow = function() {
            return this.getShape() === o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW;
        };
        return t;
    })();
    l.BlurMode = s;
    l.ShapeLayer = u;
}, 98);