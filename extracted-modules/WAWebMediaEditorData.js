__d("WAWebMediaEditorData", [
    "WADeepEquals",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorLayersDraw",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorUtilsFilterType",
    "WAWebMediaEditorUtilsGetDominantColor",
    "cr:10202",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = 0;
    const s = (()=>{
        function t(e) {
            this.$1 = Object.freeze(babelHelpers.extends({}, e));
            Object.freeze(this);
        }
        t.create = function() {
            let n;
            let a;
            const i = o("WAWebMediaEditorUtilsGetDominantColor").DEFAULT_DOMINANT_COLOR.getBackgroundAndTintColors();
            const { backgroundColor, tintColor } = i;
            return new t({
                id: Math.random(),
                frame: new (r("WAWebMediaEditorGeometryRect"))({
                    origin: new (r("WAWebMediaEditorGeometryPoint"))({
                        x: 0,
                        y: 0
                    }),
                    size: new (a = r("WAWebMediaEditorGeometrySize"))({
                        width: 0,
                        height: 0
                    }),
                    rotation: 0,
                    scale: {
                        x: 0,
                        y: 0
                    }
                }),
                layers: [],
                paintLayer: new (n = o("WAWebMediaEditorLayersDraw")).DrawLayer({
                    size: a.empty(),
                    type: n.DrawLayerType.Paint
                }),
                outlineLayer: new n.DrawLayer({
                    size: a.empty(),
                    type: n.DrawLayerType.Outline
                }),
                background: null,
                selectedLayer: null,
                activeFilter: o("WAWebMediaEditorUtilsFilterType").FilterType.NONE,
                backgroundColor,
                tintColor,
                rotation: e,
                cropFrame: new (r("WAWebMediaEditorGeometryRect"))({
                    origin: new (r("WAWebMediaEditorGeometryPoint"))({
                        x: 0,
                        y: 0
                    }),
                    size: new a({
                        width: 0,
                        height: 0
                    }),
                    rotation: 0,
                    scale: {
                        x: 0,
                        y: 0
                    }
                }),
                sending: false
            });
        };
        const t_prototype = t.prototype;
        t_prototype.$2 = function(a) {
            const e = babelHelpers.extends({}, this.$1);
            if (a.layers != null) {
                e.layers = a.layers;
            }
            if (a.paintLayer !== undefined) {
                e.paintLayer = a.paintLayer;
            }
            if (a.outlineLayer !== undefined) {
                e.outlineLayer = a.outlineLayer;
            }
            if (a.background !== undefined) {
                e.background = a.background;
            }
            if (a.frame !== undefined) {
                e.frame = a.frame;
                if (e.frame) {
                    e.cropFrame = e.cropFrame.updateXYWidthHeight({
                        x: 0,
                        y: 0,
                        width: e.frame.getWidth(),
                        height: e.frame.getHeight()
                    });
                }
            }
            if (a.cropFrame !== undefined) {
                e.cropFrame = a.cropFrame;
            }
            if (a.selectedLayer !== undefined) {
                if (r("gkx")("16539")) {
                    const i = n("cr:10202") == null ? undefined : n("cr:10202").getMediaEditorDebug();
                    if (i) {
                        i.selectedLayer = a.selectedLayer;
                    }
                }
                e.selectedLayer = a.selectedLayer;
            }
            if (a.backgroundColor != null) {
                e.backgroundColor = a.backgroundColor;
            }
            if (a.tintColor != null) {
                e.tintColor = a.tintColor;
            }
            if (a.rotation != null) {
                e.rotation = a.rotation;
            }
            if (a.activeFilter != null) {
                e.activeFilter = a.activeFilter;
            }
            if (a.sending != null) {
                e.sending = a.sending;
            }
            if (o("WADeepEquals").deepEqual(this.$1, e)) {
                return this;
            }
            return new t(e);
        };
        t_prototype.updateLayer = function(t, n) {
            if (t instanceof o("WAWebMediaEditorLayersText").TextLayer && !(n instanceof o("WAWebMediaEditorLayersText").TextLayer) || t instanceof o("WAWebMediaEditorLayersImage").ImageLayer && !(n instanceof o("WAWebMediaEditorLayersImage").ImageLayer)) {
                const e = new TypeError("MediaEditorData: calling _updateLayer with two different layer types");
                e.stack;
                throw e;
            }
            if (t === n) {
                return this;
            }
            const r = this.getLayers().map((e)=>{
                if (e === t) {
                    return n;
                }
                return e;
            });
            let a = this.getSelectedLayer();
            if (a === t) {
                a = n;
            }
            return this.$2({
                layers: r,
                selectedLayer: a
            });
        };
        t_prototype.setBackground = function(t, n) {
            const { fitToSquare = false, scale = {
                x: 1,
                y: 1
            } } = n ?? {};
            const u = o("WAWebMediaEditorLayersImage").ImageLayer.create({
                type: o("WAWebMediaEditorLayersImage").ImageLayerType.Background,
                origin: new (r("WAWebMediaEditorGeometryPoint"))({
                    x: 0,
                    y: 0
                }),
                image: t,
                editable: true,
                scale
            });
            const c = u.getFrame().getDimension();
            const d = fitToSquare ? r("WAWebMediaEditorGeometryRect").create({
                x: 0,
                y: 0,
                width: c,
                height: c,
                scale: {
                    x: 1,
                    y: 1
                },
                rotation: 0
            }) : u.getFrame();
            const m = new (r("WAWebMediaEditorGeometryPoint"))({
                x: (d.getWidth() - u.getWidth()) / 2,
                y: (d.getHeight() - u.getHeight()) / 2
            });
            const background = u.setScale(scale).setOrigin(m);
            const _ = o("WAWebMediaEditorUtilsGetDominantColor").getDominantColor(t);
            const f = _.getBackgroundAndTintColors();
            const { backgroundColor, tintColor } = f;
            const y = new (o("WAWebMediaEditorLayersDraw")).DrawLayer({
                size: d.getSize(),
                type: o("WAWebMediaEditorLayersDraw").DrawLayerType.Paint
            });
            const C = new (o("WAWebMediaEditorLayersDraw")).DrawLayer({
                size: d.getSize(),
                type: o("WAWebMediaEditorLayersDraw").DrawLayerType.Outline
            });
            return this.$2({
                background,
                frame: d,
                backgroundColor,
                tintColor,
                paintLayer: y,
                outlineLayer: C
            });
        };
        t_prototype.updateBackground = function({ image, origin, rotation, scale }) {
            const i = this.getBackground()?.setImage(image).setOrigin(origin).setRotation(rotation).setScale(scale);
            return this.$2({
                background: i,
                selectedLayer: i
            }).setShapeLayerBackground(i?.getFrame(), image);
        };
        t_prototype.addImageLayer = function(t) {
            const e = o("WAWebMediaEditorLayersImage").ImageLayer.create(t);
            const n = [].concat(this.getLayers(), [
                e
            ]);
            return this.$2({
                layers: n,
                selectedLayer: e
            });
        };
        t_prototype.addImageLayerToCenter = function(t) {
            const e = this.toCanvasPoint(new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getScreenWidth() / 2,
                y: this.getScreenHeight() / 2
            }));
            const n = new (r("WAWebMediaEditorGeometryPoint"))({
                x: e.getX() - t.image.width / 2,
                y: e.getY() - t.image.height / 2
            });
            const o = babelHelpers.extends({
                origin: n,
                rotation: -this.getRotation()
            }, t);
            return this.addImageLayer(o);
        };
        t_prototype.addShapeLayer = function(t) {
            const e = o("WAWebMediaEditorLayersShape").ShapeLayer.create(t);
            const n = [].concat(this.getLayers(), [
                e
            ]);
            return this.$2({
                layers: n,
                selectedLayer: e
            });
        };
        t_prototype.addShapeLayerToCenter = function(t) {
            const i = this.toCanvasPoint(new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getScreenWidth() / 2,
                y: this.getScreenHeight() / 2
            }));
            const l = new (r("WAWebMediaEditorGeometryPoint"))({
                x: i.getX() - (t.size?.getWidth() ?? t.image.width) / 2,
                y: i.getY() - (t.size?.getHeight() ?? t.image.height) / 2
            });
            const s = babelHelpers.extends({
                origin: l
            }, t);
            return this.addShapeLayer(s);
        };
        t_prototype.setShapeLayerBackground = function(t, n) {
            const e = this.getLayers().map((e)=>{
                let r = e;
                if (r instanceof o("WAWebMediaEditorLayersShape").ShapeLayer) {
                    if (n != null) {
                        r = r.setImage(n);
                    }
                    if (t != null) {
                        r = r.setShapeBackgroundFrame(t);
                    }
                }
                return r;
            });
            return this.$2({
                layers: e
            });
        };
        t_prototype.addTextLayer = function(t) {
            const e = t instanceof o("WAWebMediaEditorLayersText").TextLayer ? t : o("WAWebMediaEditorLayersText").TextLayer.create(babelHelpers.extends({}, t, {
                rotation: -this.getRotation()
            }));
            const n = [].concat(this.getLayers(), [
                e
            ]);
            return this.$2({
                layers: n,
                selectedLayer: e
            });
        };
        t_prototype.setText = function(t, n) {
            return this.updateLayer(t, t.setText(n));
        };
        t_prototype.setTextColor = function(t, n) {
            return this.updateLayer(t, t.setTextColor(n));
        };
        t_prototype.setTextBackground = function(t, n) {
            return this.updateLayer(t, t.setTextBackground(n));
        };
        t_prototype.setFont = function(t, n) {
            return this.updateLayer(t, t.setFont(n));
        };
        t_prototype.setAlignment = function(t, n) {
            return this.updateLayer(t, t.setAlignment(n));
        };
        t_prototype.setBlurMode = function(t, n) {
            return this.updateLayer(t, t.setBlurMode(n));
        };
        t_prototype.setShapeFillColor = function(t, n) {
            return this.updateLayer(t, t.setFillColor(n));
        };
        t_prototype.setShapeStrokeColor = function(t, n) {
            return this.updateLayer(t, t.setStrokeColor(n));
        };
        t_prototype.setShapeStrokeWidth = function(t, n) {
            return this.updateLayer(t, t.setStrokeWidth(n));
        };
        t_prototype.setShapeRadius = function(t, n) {
            return this.updateLayer(t, t.setShapeRadius(n));
        };
        t_prototype.setShapeBackgroundFrame = function(t, n) {
            return this.updateLayer(t, t.setShapeBackgroundFrame(n));
        };
        t_prototype.setRotation = function(t) {
            if (t % 90 !== 0) {
                throw r("err")("canvas can only be rotated at a 90 degrees interval");
            }
            return this.$2({
                rotation: t % 360
            });
        };
        t_prototype.setCrop = function(t, n) {
            if (t.getX() < 0 || t.getY() < 0 || t.getX() + n.getWidth() > this.getWidth() || t.getY() + n.getHeight() > this.getHeight()) {
                throw r("err")("canvas crop must stays within the frame bound");
            }
            const cropFrame = new (r("WAWebMediaEditorGeometryRect"))({
                origin: t,
                size: n,
                rotation: 0,
                scale: {
                    x: 0,
                    y: 0
                }
            });
            return this.$2({
                cropFrame
            });
        };
        t_prototype.setActiveFilter = function(activeFilter) {
            return this.$2({
                activeFilter
            });
        };
        t_prototype.setSending = function(sending) {
            return this.$2({
                sending
            });
        };
        t_prototype.addEmptyTextLayer = function(t, n) {
            const e = {
                origin: new (r("WAWebMediaEditorGeometryPoint"))({
                    x: this.getWidth() / 4,
                    y: this.getHeight() / 2
                }),
                text: "",
                textColor: t,
                textBackground: false,
                font: n,
                alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER
            };
            return this.addTextLayer(e);
        };
        t_prototype.addPaintPath = function(t) {
            const e = this.getPaintLayer().addPath(t);
            return this.$2({
                paintLayer: e
            });
        };
        t_prototype.addOutlinePath = function(t) {
            const e = this.getOutlineLayer().addPath(t);
            return this.$2({
                outlineLayer: e
            });
        };
        t_prototype.clearOutlinePaths = function() {
            const e = this.getOutlineLayer().clearPaths();
            return this.$2({
                outlineLayer: e
            });
        };
        t_prototype.translateLayer = function(t, n) {
            return this.updateLayer(t, t.setOrigin(n));
        };
        t_prototype.translateBackground = function(t) {
            const n = this.getBackground()?.setOrigin(t);
            return this.$2({
                background: n,
                selectedLayer: n
            }).setShapeLayerBackground(n?.getFrame());
        };
        t_prototype.transformLayer = function({ frame, layer, rotation, scale }) {
            let i = layer;
            if (frame != null && layer instanceof o("WAWebMediaEditorLayersShape").ShapeLayer) {
                i = layer.setFrame(frame);
            }
            i = i.setRotation(rotation).setScale(scale);
            return this.updateLayer(layer, i);
        };
        t_prototype.transformBackground = function(t, n) {
            const r = this.getBackground()?.setRotation(t).setScale(n);
            return this.$2({
                background: r,
                selectedLayer: r
            }).setShapeLayerBackground(r?.getFrame());
        };
        t_prototype.setSelectedLayer = function(selectedLayer) {
            return this.$2({
                selectedLayer
            });
        };
        t_prototype.clearSelectedLayer = function() {
            return this.$2({
                selectedLayer: null
            });
        };
        t_prototype.deleteLayer = function(t) {
            t.delete();
            const e = this.getLayers().filter((e)=>e !== t);
            let n = {
                layers: e
            };
            if (t === this.getSelectedLayer()) {
                n = babelHelpers.extends({}, n, {
                    selectedLayer: null
                });
            }
            return this.$2(n);
        };
        t_prototype.deleteAllLayers = function() {
            let e;
            this.getLayers().forEach((e)=>e.delete());
            return this.$2({
                layers: [],
                paintLayer: new (e = o("WAWebMediaEditorLayersDraw")).DrawLayer({
                    size: this.getSize(),
                    type: e.DrawLayerType.Paint
                }),
                outlineLayer: new e.DrawLayer({
                    size: this.getSize(),
                    type: e.DrawLayerType.Outline
                }),
                selectedLayer: null
            });
        };
        t_prototype.hasEdits = function() {
            return !this.getPaintLayer().isEmpty() || !this.getOutlineLayer().isEmpty() || this.getLayers().length > 0 || this.getRotation() !== e || !this.getSize().equals(this.$1.cropFrame.getSize()) || this.getActiveFilter() !== o("WAWebMediaEditorUtilsFilterType").FilterType.NONE;
        };
        t_prototype.getLayers = function() {
            return this.$1.layers;
        };
        t_prototype.getLastTextLayer = function() {
            const e = this.getLayers().findLast((e)=>e instanceof o("WAWebMediaEditorLayersText").TextLayer);
            if (e instanceof o("WAWebMediaEditorLayersText").TextLayer) {
                return e;
            }
            return null;
        };
        t_prototype.getActiveFilter = function() {
            return this.$1.activeFilter;
        };
        t_prototype.getPaintLayer = function() {
            return this.$1.paintLayer;
        };
        t_prototype.getOutlineLayer = function() {
            return this.$1.outlineLayer;
        };
        t_prototype.getBackground = function() {
            return this.$1.background;
        };
        t_prototype.getSelectedLayer = function() {
            return this.$1.selectedLayer;
        };
        t_prototype.getBackgroundColor = function() {
            return this.$1.backgroundColor;
        };
        t_prototype.getTintColor = function() {
            return this.$1.tintColor;
        };
        t_prototype.getSize = function() {
            return this.$1.frame.getSize();
        };
        t_prototype.getFrame = function() {
            return this.$1.frame;
        };
        t_prototype.getWidth = function() {
            return this.$1.frame.getWidth();
        };
        t_prototype.getHeight = function() {
            return this.$1.frame.getHeight();
        };
        t_prototype.getCropWidth = function() {
            return this.$1.cropFrame.getWidth();
        };
        t_prototype.getCropHeight = function() {
            return this.$1.cropFrame.getHeight();
        };
        t_prototype.getCropOrigin = function() {
            return this.$1.cropFrame.getOrigin();
        };
        t_prototype.getCropSize = function() {
            return this.$1.cropFrame.getSize();
        };
        t_prototype.getCropCenter = function() {
            return this.$1.cropFrame.getCenter();
        };
        t_prototype.getScreenWidth = function() {
            if (this.getRotation() % 180 === 0) {
                return this.getCropWidth();
            }
            return this.getCropHeight();
        };
        t_prototype.getScreenHeight = function() {
            if (this.getRotation() % 180 === 0) {
                return this.getCropHeight();
            }
            return this.getCropWidth();
        };
        t_prototype.getCanvasCenter = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getWidth() / 2,
                y: this.getHeight() / 2
            });
        };
        t_prototype.getRotation = function() {
            return this.$1.rotation;
        };
        t_prototype.getSending = function() {
            return this.$1.sending;
        };
        t_prototype.getId = function() {
            return this.$1.id;
        };
        t_prototype.toScreenPoint = function(t) {
            let e;
            const n = Math.max(this.getWidth(), this.getHeight());
            const o = new (e = r("WAWebMediaEditorGeometryPoint"))({
                x: n / 2,
                y: n / 2
            });
            const a = new e({
                x: t.getX() + (n - this.getWidth()) / 2,
                y: t.getY() + (n - this.getHeight()) / 2
            });
            const i = a.rotate(o, this.getRotation());
            const l = new e({
                x: this.getCropCenter().getX() + (n - this.getWidth()) / 2,
                y: this.getCropCenter().getY() + (n - this.getHeight()) / 2
            });
            const s = l.rotate(o, this.getRotation());
            const u = new e({
                x: s.getX() - this.getScreenWidth() / 2,
                y: s.getY() - this.getScreenHeight() / 2
            });
            return new e({
                x: i.getX() - u.getX(),
                y: i.getY() - u.getY()
            });
        };
        t_prototype.toCanvasPoint = function(t) {
            let e;
            const n = Math.max(this.getWidth(), this.getHeight());
            const o = new (e = r("WAWebMediaEditorGeometryPoint"))({
                x: n / 2,
                y: n / 2
            });
            const a = this.getCropCenter().rotate(o, this.getRotation());
            const i = new e({
                x: a.getX() - this.getScreenWidth() / 2,
                y: a.getY() - this.getScreenHeight() / 2
            });
            const l = new e({
                x: t.getX() + i.getX(),
                y: t.getY() + i.getY()
            });
            const s = l.rotate(o, -this.getRotation());
            return new e({
                x: s.getX(),
                y: s.getY()
            });
        };
        t_prototype.resetCropRotate = function() {
            return this.setRotation(0).setCrop(new (r("WAWebMediaEditorGeometryPoint"))({
                x: 0,
                y: 0
            }), new (r("WAWebMediaEditorGeometrySize"))({
                width: this.getWidth(),
                height: this.getHeight()
            }));
        };
        t_prototype.isRotated = function() {
            return this.getRotation() !== 0;
        };
        t_prototype.isCropped = function() {
            return !this.getCropOrigin().equals(new (r("WAWebMediaEditorGeometryPoint"))({
                x: 0,
                y: 0
            })) || !this.getCropSize().equals(this.getSize());
        };
        t_prototype.isOutlined = function() {
            return !this.getOutlineLayer().isEmpty();
        };
        return t;
    })();
    l.default = s;
}, 98);