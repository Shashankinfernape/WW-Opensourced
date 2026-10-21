__d("WAWebDeviceFeatures", [
    "WALogger",
    "WAMd5",
    "WAWebSessionStorage",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 1000;
    function u() {
        return navigator.platform;
    }
    function c() {
        const e = navigator;
        if (e.deviceMemory === void 0) {
            return "undefined";
        }
        return `${e.deviceMemory}`;
    }
    function d() {
        const e = window.devicePixelRatio;
        if (e == null || e === void 0) {
            return "undefined";
        }
        return `${e * window.outerWidth}x${e * window.outerHeight}`;
    }
    function m() {
        const n = navigator;
        return n?.connection?.rtt ?? -1;
    }
    function p() {
        return (r("WAWebSessionStorage") == null ? void 0 : r("WAWebSessionStorage").length) ?? -1;
    }
    function _() {
        return "ontouchstart" in window && "TouchEvent" in window;
    }
    function f() {
        if (r("gkx")("15181")) {
            return _();
        }
        return b().touchPresence;
    }
    function g(t) {
        const n = self.performance.now();
        const r = t.getContext("webgl");
        const a = self.performance.now() - n;
        if (a > s) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "WebGL context creation took ",
                "ms"
            ])), Math.ceil(a));
        }
        return r;
    }
    function h() {
        try {
            const e = document.createElement("canvas");
            const t = g(e);
            if (t == null) {
                return "";
            }
            const n = t.getExtension("WEBGL_debug_renderer_info");
            if (n == null) {
                return "";
            }
            const r = t.getParameter(n.UNMASKED_RENDERER_WEBGL);
            if (typeof r !== "string") {
                return "";
            }
            return r;
        } catch (e) {
            return "";
        }
    }
    function y() {
        try {
            const e = document.createElement("canvas");
            e.width = 50;
            e.height = 50;
            const t = g(e);
            if (t == null) {
                return "";
            }
            const n = "\n      attribute vec2 position;\n      varying vec2 vPos;\n      void main() {\n        vPos = position;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }";
            const r = "\n      precision mediump float;\n      varying vec2 vPos;\n      void main() {\n        gl_FragColor = vec4(vPos.x * 0.5 + 0.5, vPos.y * 0.5 + 0.5, 0.5, 1.0);\n      }";
            const a = t.createShader(t.VERTEX_SHADER);
            const i = t.createShader(t.FRAGMENT_SHADER);
            if (a == null || i == null) {
                return "";
            }
            t.shaderSource(a, n);
            t.compileShader(a);
            t.shaderSource(i, r);
            t.compileShader(i);
            const l = t.createProgram();
            if (l == null) {
                return "";
            }
            t.attachShader(l, a);
            t.attachShader(l, i);
            t.linkProgram(l);
            t.useProgram(l);
            const s = t.getAttribLocation(l, "position");
            const u = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, u);
            t.bufferData(t.ARRAY_BUFFER, new Float32Array([
                0,
                0.8,
                -0.8,
                -0.8,
                0.8,
                -0.8
            ]), t.STATIC_DRAW);
            t.enableVertexAttribArray(s);
            t.vertexAttribPointer(s, 2, t.FLOAT, false, 0, 0);
            t.clearColor(0, 0, 0, 1);
            t.clear(t.COLOR_BUFFER_BIT);
            t.drawArrays(t.TRIANGLES, 0, 3);
            const c = new Uint8Array(2500 * 4);
            t.readPixels(0, 0, 50, 50, t.RGBA, t.UNSIGNED_BYTE, c);
            return o("WAMd5").md5(c.toString());
        } catch (e) {
            return "";
        }
    }
    function C() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
        } catch (e) {
            return "";
        }
    }
    function b() {
        return {
            cpuPlatform: u(),
            deviceMemory: c(),
            gpuMake: h(),
            webglFingerprint: y(),
            screenResolution: d(),
            connectionRoundTripTime: m(),
            sessionStorageLength: p(),
            touchPresence: _(),
            timezone: C()
        };
    }
    l.getTouchPresence = _;
    l.getTouchPresenceForTouchOnlyCallers = f;
    l.getDeviceFeatures = b;
}, 98);