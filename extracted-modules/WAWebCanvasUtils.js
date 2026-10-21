__d("WAWebCanvasUtils", [
    "Promise",
    "WAWebABProps",
    "WAWebDataUrlToBlob",
    "WAWebEncodeRgbaToWebp",
    "WAWebImageGeometry",
    "WAWebMediaOpaqueData",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        const t = r("nullthrows")(e.getContext("2d"));
        const n = t.getImageData(0, 0, e.width, e.height);
        return r("WAWebEncodeRgbaToWebp")({
            height: e.height,
            opts: {
                ensureExtendedFormat: true
            },
            rgbaData: n.data,
            width: e.width
        });
    }
    function u(t, a = "image/jpeg") {
        if (Object.hasOwn(HTMLCanvasElement.prototype, "toBlob")) {
            const i = a === "image/jpeg" ? o("WAWebABProps").getABPropConfigValue("web_jpeg_quality") / 100 : void 0;
            return new (e || (e = n("Promise")))(function(e, n) {
                t.toBlob(function(t) {
                    if (t == null) {
                        n(r("err")(`canvas.toBlob produced no ${a} blob`));
                    } else {
                        e(t);
                    }
                }, a, i);
            });
        }
        return (e || (e = n("Promise"))).resolve(o("WAWebDataUrlToBlob").dataURLtoBlob(t.toDataURL(a)));
    }
    function c(e, t = "image/jpeg", n) {
        const r = e.toDataURL(t);
        const a = o("WAWebDataUrlToBlob").dataURLtoBlob(r);
        if (a.size <= n) {
            return e.toDataURL(t);
        }
        for(let i = 0.9; i >= 0.1; i -= 0.1){
            const l = e.toDataURL(t, i);
            const s = o("WAWebDataUrlToBlob").dataURLtoBlob(l);
            if (s.size <= n) {
                return l;
            }
        }
        return null;
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const i = n || {};
            const l = i.mimetype ?? "image/jpeg";
            for(var s = i.maxAttempts ?? 10, c = 0.5, d = e, m = yield u(d, l), p = 0; p < s && !(m.size <= t); p++){
                const _ = Math.floor(e.width * c);
                const f = Math.floor(e.height * c);
                d = g(_, f);
                const h = r("nullthrows")(d.getContext("2d"));
                h.drawImage(e, 0, 0, _, f);
                m = yield u(d, l);
                c *= 0.5;
            }
            return {
                opaqueData: yield r("WAWebMediaOpaqueData").createFromData(m, l),
                width: d.width,
                height: d.height,
                dataUrl: d.toDataURL("image/jpeg")
            };
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        const t = r("nullthrows")(e.getContext("2d"));
        const { width: n, height: o } = e;
        const a = t.getImageData(0, 0, n, o);
        const i = Math.max(n, o);
        e.width = i;
        e.height = i;
        const l = (i - n) / 2;
        const s = (i - o) / 2;
        t.clearRect(0, 0, n, o);
        t.putImageData(a, l, s, 0, 0, n, o);
    }
    function _(e, t) {
        const n = r("nullthrows")(e.getContext("2d"));
        const a = h(e);
        const i = o("WAWebImageGeometry").aspectRatioScaled(e.width / e.height, t);
        const { height: l, width: s } = i;
        e.width = s;
        e.height = l;
        n.drawImage(a, 0, 0, s, l);
    }
    function f(e) {
        const t = r("nullthrows")(e.getContext("2d"));
        t.fillStyle = "rgb(247,247,247)";
        t.fillRect(0, 0, e.width, e.height);
    }
    function g(e, t) {
        const n = document.createElement("canvas");
        n.width = e;
        n.height = t;
        return n;
    }
    function h(e) {
        const t = g(e.width, e.height);
        const n = r("nullthrows")(t.getContext("2d"));
        n.drawImage(e, 0, 0);
        return t;
    }
    function y(e) {
        const t = r("nullthrows")(e.getContext("2d"));
        const n = t.getImageData(0, 0, e.width, e.height);
        const o = n.data.length / 4;
        let a;
        for(a = 0; a < o; a++){
            const i = n.data[4 * a + 3];
            if (i !== 0) {
                return false;
            }
        }
        return true;
    }
    function C(e) {
        const t = r("nullthrows")(e.getContext("2d"));
        const n = t.getImageData(0, 0, e.width, e.height);
        const o = n.data.length / 4;
        let a = 1 / 0;
        let i = 1 / 0;
        let l = 0;
        let s = 0;
        let u;
        for(u = 0; u < o; u++){
            const c = n.data[4 * u + 3];
            if (c !== 0) {
                const d = u % e.width;
                const m = Math.floor(u / e.width);
                if (d < a) {
                    a = d;
                }
                if (d > l) {
                    l = d;
                }
                if (m < i) {
                    i = m;
                }
                if (m > s) {
                    s = m;
                }
            }
        }
        return {
            left: a,
            top: i,
            right: l,
            bottom: s
        };
    }
    function b(e) {
        if (!y(e)) {
            const t = C(e);
            const { bottom: n, left: o, right: a, top: i } = t;
            const l = n - i;
            const s = a - o;
            const u = r("nullthrows")(e.getContext("2d"));
            const c = u.getImageData(o, i, s, l);
            const d = g(s, l);
            const m = r("nullthrows")(d.getContext("2d"));
            m.putImageData(c, 0, 0);
            return d;
        }
    }
    function v(e, t, n = "white") {
        const o = document.createElement("canvas");
        const a = r("nullthrows")(o.getContext("2d"));
        const i = document.createElement("canvas");
        const l = r("nullthrows")(i.getContext("2d"));
        const s = t * 2;
        o.width = i.width = e.width + s * 2;
        o.height = i.height = e.height + s * 2;
        a.drawImage(e, s, s);
        l.shadowColor = n;
        l.shadowBlur = 1;
        for(let u = 0; u < s; u++){
            l.drawImage(o, 0, 0);
            a.drawImage(i, 0, 0);
        }
        l.shadowColor = "rgba(0,0,0,0)";
        l.drawImage(e, s, s);
        return i;
    }
    l.canvasToWebp = s;
    l.canvasToBlob = u;
    l.getResizedDataUrl = c;
    l.generateMicroThumb = d;
    l.square = p;
    l.scale = _;
    l.fillBackgroundWithGray = f;
    l.createCanvas = g;
    l.trim = b;
    l.addBorder = v;
}, 98);