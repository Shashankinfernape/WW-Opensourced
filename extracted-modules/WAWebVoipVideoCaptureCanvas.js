__d("WAWebVoipVideoCaptureCanvas", [
    "WALogger",
    "WAWebVoipVideoCaptureWithConverter",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    class u {
        constructor(t, n){
            this.width = t;
            this.height = n;
            this.canvas = document.createElement("canvas");
            this.canvas.width = t;
            this.canvas.height = n;
            var a = this.canvas.getContext("2d");
            if (!a) {
                throw r("err")("Failed to get 2D context from canvas");
            }
            this.canvasContext = a;
            var i = t * n;
            var l = Math.floor(t * n / 2);
            this.nv12Data = new Uint8Array(i + l);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: CanvasVideoConverter: Initialized for ",
                "x",
                ""
            ])), t, n);
        }
        convertVideoToNV12(t) {
            const canvasContext = this.canvasContext;
            const height = this.height;
            const width = this.width;
            canvasContext.drawImage(t, 0, 0, width, height);
            const o = canvasContext.getImageData(0, 0, width, height);
            const o_data = o.data;
            return this.convertRGBAToNV12(o_data, width, height);
        }
        convertRGBAToNV12(t, n, r) {
            const e = n * r;
            const nv12Data = this.nv12Data;
            for(let a = 0; a < r; a++){
                for(let i = 0; i < n; i++){
                    const l = (a * n + i) * 4;
                    const s = t[l];
                    const u = t[l + 1];
                    const c = t[l + 2];
                    const d = 16 + Math.floor(0.2568 * s + 0.5041 * u + 0.0979 * c);
                    nv12Data[a * n + i] = Math.max(0, Math.min(255, d));
                }
            }
            let m = e;
            for(let p = 0; p < r; p += 2){
                for(let _ = 0; _ < n; _ += 2){
                    let f = 0;
                    let g = 0;
                    let h = 0;
                    let y = 0;
                    for(let C = 0; C < 2 && p + C < r; C++){
                        for(let b = 0; b < 2 && _ + b < n; b++){
                            const v = ((p + C) * n + (_ + b)) * 4;
                            f += t[v];
                            g += t[v + 1];
                            h += t[v + 2];
                            y++;
                        }
                    }
                    if (y > 0) {
                        const S = f / y;
                        const R = g / y;
                        const L = h / y;
                        const E = Math.floor(-0.1482 * S - 0.291 * R + 0.4392 * L + 128);
                        const k = Math.floor(0.4392 * S - 0.3678 * R - 0.0714 * L + 128);
                        nv12Data[m] = Math.max(0, Math.min(255, E));
                        nv12Data[m + 1] = Math.max(0, Math.min(255, k));
                        m += 2;
                    }
                }
            }
            return nv12Data;
        }
        cleanup() {
            if (this.canvas) {
                this.canvas.remove();
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: CanvasVideoConverter: Cleaned up"
            ])));
        }
        getConverterName() {
            return "canvas";
        }
    }
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createConverter = function(t, n) {
            return new u(t, n);
        };
        return t;
    })(o("WAWebVoipVideoCaptureWithConverter").WAWebVoipVideoCaptureWithConverter);
    l.CanvasVideoConverter = u;
    l.WAWebVoipVideoCaptureCanvas = c;
}, 98);