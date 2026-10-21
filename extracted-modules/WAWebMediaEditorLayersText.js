__d("WAWebMediaEditorLayersText", [
    "WADeepEquals",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorEnumsColorsGetColorValue",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorUtilsColor",
    "WAWebMediaEditorUtilsGenerateLayerId",
    "WAWebMediaEditorUtilsTextBackground",
    "WAWebMediaEditorUtilsTextInCanvas"
], function(t, n, r, o, a, i, l) {
    const fontSize = 18;
    const s = {
        lineVerticalPadding: 6,
        lineHorizontalPadding: 8,
        layerPadding: 6,
        backgroundBorderRadius: 5,
        backgroundShadow: {
            offsetX: 0,
            offsetY: 1,
            radius: 6,
            spread: 0,
            color: new (o("WAWebMediaEditorUtilsColor")).Color(0, 0, 0, 0.32)
        }
    };
    const u = (()=>{
        function t(e) {
            this.$1 = Object.freeze(babelHelpers.extends({}, e));
            Object.freeze(this);
        }
        t.create = function(n) {
            const lines = [];
            const i = c(lines, s);
            let l = 0;
            if (n.rotation != null) {
                l = n.rotation;
            }
            return new t({
                id: o("WAWebMediaEditorUtilsGenerateLayerId").generateLayerId("text"),
                text: "",
                textColor: n.textColor,
                textBackground: n.textBackground,
                font: n.font,
                alignment: n.alignment,
                lines,
                frame: new (r("WAWebMediaEditorGeometryRect"))({
                    origin: new (r("WAWebMediaEditorGeometryPoint"))({
                        x: n.origin.getX() - i.getWidth() / 2,
                        y: n.origin.getY() - i.getHeight() / 2
                    }),
                    size: i,
                    rotation: l,
                    scale: n.scale ?? {
                        x: 1,
                        y: 1
                    }
                }),
                maxWidth: 0,
                backgroundPath: ""
            }).setText(n.text);
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
        t_prototype.setText = function(t) {
            return this.$2({
                text: t
            });
        };
        t_prototype.setTextColor = function(t) {
            return this.$2({
                textColor: t
            });
        };
        t_prototype.setTextBackground = function(textBackground) {
            return this.$2({
                textBackground
            });
        };
        t_prototype.setFont = function(t) {
            return this.$2({
                font: t
            });
        };
        t_prototype.setAlignment = function(t) {
            return this.$2({
                alignment: t
            });
        };
        t_prototype.$2 = function(a) {
            const n = babelHelpers.extends({}, this.$1);
            if (a.frame != null) {
                n.frame = a.frame;
            }
            if (a.textColor != null) {
                n.textColor = a.textColor;
            }
            if (a.textBackground != null) {
                n.textBackground = a.textBackground;
            }
            if (a.text != null && a.text !== n.text || a.font != null && a.font !== n.font) {
                n.text = a.text ?? n.text;
                n.font = a.font ?? n.font;
                n.lines = o("WAWebMediaEditorUtilsTextInCanvas").getLines({
                    font: n.font,
                    fontSize,
                    maxWidth: this.$1.maxWidth,
                    originalText: n.text
                });
                const u = c(n.lines, s);
                const d = n.frame.getSize();
                const m = n.frame.getOrigin();
                const p = new (r("WAWebMediaEditorGeometryPoint"))({
                    x: m.getX() + d.getWidth() / 2 - u.getWidth() / 2,
                    y: m.getY() + d.getHeight() / 2 - u.getHeight() / 2
                });
                n.frame = n.frame.update({
                    origin: p,
                    size: u
                });
            }
            if (a.alignment != null) {
                n.alignment = a.alignment;
            }
            if (this.getFont() !== n.font || this.getText() !== n.text || this.getAlignment() !== n.alignment) {
                const lineWidths = n.lines.map((e)=>e.width);
                n.backgroundPath = o("WAWebMediaEditorUtilsTextBackground").generateTextBackgroundPath({
                    alignment: n.alignment,
                    lineWidths,
                    style: {
                        lineVerticalPadding: this.getStyles().lineVerticalPadding,
                        lineHorizontalPadding: this.getStyles().lineHorizontalPadding,
                        lineHeight: this.getLineHeight(),
                        arcSize: this.getStyles().backgroundBorderRadius
                    }
                });
            }
            if (o("WADeepEquals").deepEqual(this.$1, n)) {
                return this;
            }
            return new t(n);
        };
        t_prototype.getLines = function() {
            return this.$1.lines;
        };
        t_prototype.getLinesOfText = function() {
            return this.getLines().map((e)=>e.text);
        };
        t_prototype.getLineWidths = function() {
            return this.getLines().map((e)=>e.width);
        };
        t_prototype.getNumberOfLines = function() {
            return this.getLines().length;
        };
        t_prototype.getFontSize = function() {
            return fontSize;
        };
        t_prototype.getLineHeight = function() {
            return this.getFontSize();
        };
        t_prototype.getStyles = function() {
            return s;
        };
        t_prototype.getText = function() {
            return this.$1.text;
        };
        t_prototype.getTextColor = function() {
            return this.$1.textColor;
        };
        t_prototype.getTextBackgroundColor = function() {
            if (this.getTextColor().isLight()) {
                return o("WAWebMediaEditorEnumsColorsGetColorValue").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLACK);
            }
            return o("WAWebMediaEditorEnumsColorsGetColorValue").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.WHITE);
        };
        t_prototype.getTextBackground = function() {
            return this.$1.textBackground;
        };
        t_prototype.getFont = function() {
            return this.$1.font;
        };
        t_prototype.getEditable = function() {
            return true;
        };
        t_prototype.getId = function() {
            return this.$1.id;
        };
        t_prototype.getAlignment = function() {
            return this.$1.alignment;
        };
        t_prototype.getFrame = function() {
            return this.$1.frame;
        };
        t_prototype.getOrigin = function() {
            return this.getFrame().getOrigin();
        };
        t_prototype.getSize = function() {
            return this.getFrame().getSize();
        };
        t_prototype.getX = function() {
            return this.getFrame().getX();
        };
        t_prototype.getY = function() {
            return this.getFrame().getY();
        };
        t_prototype.getWidth = function() {
            return this.getFrame().getWidth();
        };
        t_prototype.getHeight = function() {
            return this.getFrame().getHeight();
        };
        t_prototype.getRotation = function() {
            return this.getFrame().getRotation();
        };
        t_prototype.getScale = function() {
            return this.getFrame().getScale();
        };
        t_prototype.getBackgroundPath = function() {
            return this.$1.backgroundPath;
        };
        return t;
    })();
    function c(lines, n) {
        const o = Math.max(...lines.map((e)=>e.width).concat([
            0
        ])) + n.lineHorizontalPadding * 2 + n.layerPadding * 2;
        const a = lines.length * (fontSize + n.lineVerticalPadding * 2) + n.layerPadding * 2;
        return new (r("WAWebMediaEditorGeometrySize"))({
            width: o,
            height: a
        });
    }
    l.DEFAULT_FONT_SIZE = fontSize;
    l.TextLayer = u;
}, 98);