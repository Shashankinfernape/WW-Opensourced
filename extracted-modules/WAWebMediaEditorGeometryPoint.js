__d("WAWebMediaEditorGeometryPoint", [
    "WADeepEquals"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            this.$1 = Object.freeze(babelHelpers.extends({}, e));
            Object.freeze(this);
        }
        update(n) {
            const t = babelHelpers.extends({}, this.$1);
            if (n.x != null) {
                t.x = n.x;
            }
            if (n.y != null) {
                t.y = n.y;
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
            return `(${this.getX()}x, ${this.getY()}y)`;
        }
        equals(t) {
            return Math.abs(this.getX() - t.getX()) < Number.EPSILON && Math.abs(this.getY() - t.getY()) < Number.EPSILON;
        }
        distance(t) {
            return Math.sqrt((t.getX() - this.getX()) ** 2 + (t.getY() - this.getY()) ** 2);
        }
        rotate(n, r) {
            const t = r * Math.PI / 180;
            const o = this.getX() - n.getX();
            const a = this.getY() - n.getY();
            const i = Math.cos(t) * o - Math.sin(t) * a + n.getX();
            const l = Math.sin(t) * o + Math.cos(t) * a + n.getY();
            return new e({
                x: Math.round(i * 100) / 100,
                y: Math.round(l * 100) / 100
            });
        }
        getX() {
            return this.$1.x;
        }
        getY() {
            return this.$1.y;
        }
    }
    l.default = e;
}, 98);