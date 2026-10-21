__d("WAWebMediaEditorGeometryRect", [
    "WADeepEquals",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometrySize"
], function(t, n, r, o, a, i, l) {
    const e = 0.000001;
    const s = (()=>{
        function t(e) {
            this.$1 = Object.freeze(babelHelpers.extends({}, e));
            Object.freeze(this);
        }
        t.create = function(n) {
            return new t({
                origin: new (r("WAWebMediaEditorGeometryPoint"))({
                    x: n.x,
                    y: n.y
                }),
                size: new (r("WAWebMediaEditorGeometrySize"))({
                    width: n.width,
                    height: n.height
                }),
                rotation: n.rotation,
                scale: n.scale
            });
        };
        const t_prototype = t.prototype;
        t_prototype.updateXYWidthHeight = function(t) {
            const e = babelHelpers.extends({}, this.$1);
            if (t.x != null || t.y != null) {
                e.origin = e.origin.update({
                    x: t.x,
                    y: t.y
                });
            }
            if (t.width != null || t.height != null) {
                e.size = e.size.update({
                    width: t.width,
                    height: t.height
                });
            }
            if (t.rotation != null) {
                e.rotation = t.rotation;
            }
            if (t.scale != null) {
                e.scale = t.scale;
            }
            return this.update(e);
        };
        t_prototype.update = function(r) {
            const n = babelHelpers.extends({}, this.$1);
            const { origin, rotation, scale, size } = r;
            if (origin != null) {
                n.origin = origin;
            }
            if (size != null) {
                n.size = size;
            }
            if (rotation != null) {
                n.rotation = rotation;
            }
            if (scale != null && Math.abs(n.scale.x - scale.x) > e && Math.abs(n.scale.y - scale.y) > e) {
                n.scale = scale;
            }
            if (o("WADeepEquals").deepEqual(this.$1, n)) {
                return this;
            }
            return new t(n);
        };
        t_prototype.clone = function() {
            return new t(this.$1);
        };
        t_prototype.addPadding = function(t, n) {
            const e = this.getTopLeft();
            const o = n.getTopLeft();
            const a = new (r("WAWebMediaEditorGeometryPoint"))({
                x: Math.max(o.getX(), e.getX() - t),
                y: Math.max(o.getY(), e.getY() - t)
            });
            const i = this.getBottomRight();
            const l = n.getBottomRight();
            const s = new (r("WAWebMediaEditorGeometryPoint"))({
                x: Math.min(l.getX(), i.getX() + t),
                y: Math.min(l.getY(), i.getY() + t)
            });
            const u = s.getX() - a.getX();
            const c = s.getY() - a.getY();
            return this.updateXYWidthHeight({
                x: a.getX(),
                y: a.getY(),
                width: u,
                height: c
            });
        };
        t_prototype.toString = function() {
            return `(${this.getOrigin().toString()}, ${this.getSize().toString()}, ${this.getRotation()}r)`;
        };
        t_prototype.equals = function(t) {
            return this.getOrigin().equals(t.getOrigin()) && this.getSize().equals(t.getSize()) && this.getRotation() === t.getRotation() && this.getScale() === t.getScale();
        };
        t_prototype.contains = function(t) {
            return t.getX() >= this.getX() && t.getY() >= this.getY() && t.getX() < this.getX() + this.getWidth() && t.getY() < this.getY() + this.getHeight();
        };
        t_prototype.getTopLeft = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX(),
                y: this.getY()
            });
        };
        t_prototype.getTopCenter = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX() + this.getWidth() / 2,
                y: this.getY()
            });
        };
        t_prototype.getTopRight = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX() + this.getWidth(),
                y: this.getY()
            });
        };
        t_prototype.getLeftCenter = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX(),
                y: this.getY() + this.getHeight() / 2
            });
        };
        t_prototype.getCenter = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX() + this.getWidth() / 2,
                y: this.getY() + this.getHeight() / 2
            });
        };
        t_prototype.getRightCenter = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX() + this.getWidth(),
                y: this.getY() + this.getHeight() / 2
            });
        };
        t_prototype.getBottomLeft = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX(),
                y: this.getY() + this.getHeight()
            });
        };
        t_prototype.getBottomCenter = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX() + this.getWidth() / 2,
                y: this.getY() + this.getHeight()
            });
        };
        t_prototype.getBottomRight = function() {
            return new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getX() + this.getWidth(),
                y: this.getY() + this.getHeight()
            });
        };
        t_prototype.getOrigin = function() {
            return this.$1.origin;
        };
        t_prototype.getSize = function() {
            return this.$1.size;
        };
        t_prototype.getX = function() {
            return this.getOrigin().getX();
        };
        t_prototype.getY = function() {
            return this.getOrigin().getY();
        };
        t_prototype.getWidth = function() {
            return this.getSize().getWidth();
        };
        t_prototype.getHeight = function() {
            return this.getSize().getHeight();
        };
        t_prototype.getRotation = function() {
            return this.$1.rotation;
        };
        t_prototype.getScale = function() {
            return this.$1.scale;
        };
        t_prototype.getDimension = function() {
            return this.getSize().getDimension();
        };
        return t;
    })();
    l.default = s;
}, 98);