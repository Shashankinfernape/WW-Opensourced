__d("WAWebMediaEditorLayersDraw", [
    "$InternalEnum",
    "WAWebMediaEditorGeometryPath",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorUtilsGenerateLayerId"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "Paint",
        "Outline"
    ]);
    const s = (()=>{
        function e(e) {
            this.$4 = e.type;
            if (e.size != null) {
                const size = e.size;
                this.$2 = new (r("WAWebMediaEditorGeometryRect"))({
                    origin: new (r("WAWebMediaEditorGeometryPoint"))({
                        x: 0,
                        y: 0
                    }),
                    size,
                    rotation: 0,
                    scale: {
                        x: 1,
                        y: 1
                    }
                });
                this.$3 = [];
            } else {
                if (e.frame != null && e.paths != null) {
                    this.$2 = e.frame;
                    this.$3 = e.paths;
                }
            }
            if (e.id != null) {
                this.$1 = e.id;
            } else {
                this.$1 = o("WAWebMediaEditorUtilsGenerateLayerId").generateLayerId(e.type);
            }
            Object.freeze(this);
        }
        const e_prototype = e.prototype;
        e_prototype.delete = function() {};
        e_prototype.$5 = function(n) {
            let t = this.$3;
            if (n.paths != null) {
                t = n.paths;
            }
            const r = this.$2;
            const o = this.$4;
            return new e({
                id: this.getId(),
                paths: t,
                frame: r,
                type: o
            });
        };
        e_prototype.setOrigin = function(t) {
            const e = new TypeError("MediaEditor:DrawLayer resetting origin is not allowed");
            e.stack;
            throw e;
        };
        e_prototype.setRotation = function(t) {
            const e = new TypeError("MediaEditor:DrawLayer resetting rotation is not allowed");
            e.stack;
            throw e;
        };
        e_prototype.setScale = function(t) {
            const e = new TypeError("MediaEditor:DrawLayer resetting scale is not allowed");
            e.stack;
            throw e;
        };
        e_prototype.addPath = function(t) {
            const e = new (r("WAWebMediaEditorGeometryPath"))(t);
            const n = [].concat(this.$3, [
                e
            ]);
            return this.$5({
                paths: n
            });
        };
        e_prototype.clearPaths = function() {
            const e = [];
            return this.$5({
                paths: e
            });
        };
        e_prototype.isEmpty = function() {
            return this.$3.length === 0;
        };
        e_prototype.getAllPoints = function() {
            return this.getPaths().reduce((acc, item)=>{
                if (!item.getSmoothing() && acc.length) {
                    acc.push(acc[acc.length - 1]);
                }
                if (item.isDrag()) {
                    acc.push(item.getPoints()[0]);
                }
                acc.push(...item.getPoints().flatMap((e)=>{
                    if (item.isSmooth()) {
                        return [
                            e
                        ];
                    }
                    return [
                        e,
                        e
                    ];
                }));
                return acc;
            }, []);
        };
        e_prototype.getPaths = function() {
            return this.$3;
        };
        e_prototype.getEditable = function() {
            return false;
        };
        e_prototype.getId = function() {
            return this.$1;
        };
        e_prototype.getType = function() {
            return this.$4;
        };
        e_prototype.getFrame = function() {
            return this.$2;
        };
        e_prototype.getOrigin = function() {
            return this.$2.getOrigin();
        };
        e_prototype.getSize = function() {
            return this.$2.getSize();
        };
        e_prototype.getX = function() {
            return this.$2.getX();
        };
        e_prototype.getY = function() {
            return this.$2.getY();
        };
        e_prototype.getWidth = function() {
            return this.$2.getWidth();
        };
        e_prototype.getHeight = function() {
            return this.$2.getHeight();
        };
        e_prototype.getRotation = function() {
            return this.$2.getRotation();
        };
        e_prototype.getScale = function() {
            return this.$2.getScale();
        };
        return e;
    })();
    l.DrawLayerType = e;
    l.DrawLayer = s;
}, 98);