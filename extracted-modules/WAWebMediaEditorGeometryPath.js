__d("WAWebMediaEditorGeometryPath", [], function(t, n, r, o, a, i) {
    class e {
        constructor({ color, points, smoothing, thickness }){
            this.$1 = [].concat(points);
            this.$2 = color;
            this.$3 = thickness;
            this.$4 = smoothing;
            Object.freeze(this);
        }
        update(n) {
            let t = this.getPoints();
            let color = this.getColor();
            let thickness = this.getThickness();
            let smoothing = this.getSmoothing();
            if (n.points != null) {
                t = n.points;
            }
            if (n.color != null) {
                color = n.color;
            }
            if (n.thickness != null) {
                thickness = n.thickness;
            }
            if (n.smoothing != null) {
                smoothing = n.smoothing;
            }
            return new e({
                points: t,
                color,
                thickness,
                smoothing
            });
        }
        clone() {
            const t = {
                points: [].concat(this.getPoints()),
                color: this.getColor().clone(),
                thickness: this.getThickness(),
                smoothing: this.getSmoothing()
            };
            return new e(t);
        }
        toString() {
            const e = this.getPoints().map((e)=>e.toString()).join(", ");
            return `points: [${e}]
color: ${this.getColor().toString()}
thickness: ${this.getThickness()}`;
        }
        equals(t) {
            return this.getColor().equals(t.getColor()) && Math.abs(this.getThickness() - t.getThickness()) < Number.EPSILON && this.getPoints().length === t.getPoints().length && this.getPoints().every((e, n)=>e.equals(t.getPoints()[n]));
        }
        isDrag() {
            return this.getPoints().length > 1;
        }
        isSmooth() {
            return this.getSmoothing() || this.isDrag();
        }
        getPoints() {
            return this.$1;
        }
        getColor() {
            return this.$2;
        }
        getThickness() {
            return this.$3;
        }
        getSmoothing() {
            return this.$4;
        }
    }
    i.default = e;
}, 66);