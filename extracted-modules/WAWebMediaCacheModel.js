__d("WAWebMediaCacheModel", [
    "WAWebBaseModel",
    "WAWebODS",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        DATA_URL: 1,
        BLOB: 2,
        CANVAS: 4
    };
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.key = o("WAWebBaseModel").session();
            t.value = o("WAWebBaseModel").session();
            t.id = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        t.getStringKey = function(t) {
            throw r("err")("Not implemented");
        };
        const t_prototype = t.prototype;
        t_prototype.isKeyEqual = function(n) {
            return t.getStringKey(n) === t.getStringKey(this.key);
        };
        t_prototype.toString = function() {
            return t.getStringKey(this.key);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.getStringKey = function({ file }) {
            const n = `${file.name}-${file.size}-${file.lastModified}`;
            return n;
        };
        const t_prototype = t.prototype;
        t_prototype.isMaxDimensionSame = function(t) {
            return this.key.maxDimension === t.maxDimension;
        };
        t_prototype.isOutputTypeSame = function(t) {
            return (this.key.outputType & t.outputType) === t.outputType;
        };
        t_prototype.isOptsSame = function(t) {
            const opts = this.key.opts;
            const t_opts = t.opts;
            return opts?.fitToSquare === t_opts?.fitToSquare && opts?.minDimension === t_opts?.minDimension && opts?.transparency === t_opts?.transparency;
        };
        t_prototype.isKeyEqual = function(n) {
            const e = t.getStringKey(n) === t.getStringKey(this.key);
            if (!e) {
                return false;
            }
            const o = this.isMaxDimensionSame(n);
            const a = this.isOutputTypeSame(n);
            const i = this.isOptsSame(n);
            const l = o && a && i;
            if (l) {
                r("WAWebODS").incr("web.app.resizeRotateMediaCache.sameFileSameOption");
                return true;
            }
            r("WAWebODS").incr("web.app.resizeRotateMediaCache.sameFileDifferentOption");
            return false;
        };
        return t;
    })(s);
    const c = o("WAWebBaseModel").defineModel(u);
    l.ImageOutputTypes = e;
    l.ResizeRotateMediaCacheImpl = u;
    l.ResizeRotateMediaCache = c;
}, 98);