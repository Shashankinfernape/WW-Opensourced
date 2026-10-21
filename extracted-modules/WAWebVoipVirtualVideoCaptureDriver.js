__d("WAWebVoipVirtualVideoCaptureDriver", [
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = 1280;
    const d = 720;
    const m = 30;
    const p = 2000;
    const _ = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FFC0CB"
    ];
    class f {
        constructor(){
            this.$1 = null;
            this.$2 = null;
            this.$3 = 0;
            this.$4 = null;
            this.$5 = null;
        }
        start() {
            const t = this;
            this.$3 = 0;
            const n = document.createElement("canvas");
            n.width = c;
            n.height = d;
            this.$1 = n;
            const a = n.getContext("2d");
            if (a == null) {
                throw r("err")("Failed to get 2D canvas context");
            }
            this.$2 = a;
            this.$6();
            this.$4 = window.setInterval(function() {
                t.$3 = (t.$3 + 1) % _.length;
            }, p);
            this.$5 = window.setInterval(function() {
                t.$6();
            }, 1000 / m);
            const i = n.captureStream(m);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [VirtualVideoCapture] Started ",
                "x",
                " @ ",
                "fps"
            ])), c, d, m);
            return i;
        }
        stop() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [VirtualVideoCapture] Stopping"
            ])));
            if (this.$5 != null) {
                window.clearInterval(this.$5);
                this.$5 = null;
            }
            if (this.$4 != null) {
                window.clearInterval(this.$4);
                this.$4 = null;
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [VirtualVideoCapture] Stopped"
            ])));
        }
        $6() {
            const e = this.$2;
            if (e != null) {
                for(let t = _.length, n = c / t, r = 0; r < t; r++){
                    const o = (r + this.$3) % t;
                    e.fillStyle = _[o];
                    e.fillRect(r * n, 0, n, d);
                }
            }
        }
    }
    l.WAWebVoipVirtualVideoCaptureDriver = f;
}, 98);