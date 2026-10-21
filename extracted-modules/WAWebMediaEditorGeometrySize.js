__d("WAWebMediaEditorGeometrySize", [
    "WADeepEquals"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor({ height, width }){
            if (width < 0) {
                var r = new RangeError("MediaEditor:Size width cannot be negative");
                r.stack;
                throw r;
            }
            if (height < 0) {
                var o = new RangeError("MediaEditor:Size height cannot be negative");
                o.stack;
                throw o;
            }
            this.$1 = Object.freeze({
                width,
                height
            });
            Object.freeze(this);
        }
        update(n) {
            const t = babelHelpers.extends({}, this.$1);
            if (n.width != null) {
                t.width = n.width;
            }
            if (n.height != null) {
                t.height = n.height;
            }
            if (o("WADeepEquals").deepEqual(this.$1, t)) {
                return this;
            }
            return new e(t);
        }
        clone() {
            return new e(this.$1);
        }
        toString() {
            return `(${this.getWidth()}w, ${this.getHeight()}h)`;
        }
        equals(t) {
            return Math.abs(this.getWidth() - t.getWidth()) < Number.EPSILON && Math.abs(this.getHeight() - t.getHeight()) < Number.EPSILON;
        }
        isEmpty() {
            return this.equals(e.empty());
        }
        static empty() {
            return new e({
                width: 0,
                height: 0
            });
        }
        static nonNegative(n) {
            return new e({
                width: Math.max(0, n.width),
                height: Math.max(0, n.height)
            });
        }
        getWidth() {
            return this.$1.width;
        }
        getHeight() {
            return this.$1.height;
        }
        getDimension() {
            return Math.max(this.getWidth(), this.getHeight());
        }
    }
    l.default = e;
}, 98);