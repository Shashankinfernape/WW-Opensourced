__d("WAWebWebp", [
    "$InternalEnum",
    "WABinary",
    "WALogger",
    "WATypedArraysEqual"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum")({
        VP8X: "VP8X",
        ANMF: "ANMF",
        EXIF: "EXIF",
        XMP: "XMP "
    });
    const c = 12;
    const d = 8;
    const m = 4;
    const p = 20;
    const _ = 2;
    const f = 125;
    const g = 0;
    function h(e, t) {
        const n = R(t);
        let o = 0;
        for(o += c; o < e.byteLength;){
            const a = e.slice(o, o + d);
            const i = a.slice(0, m);
            let l = v(a.slice(m, 2 * m));
            if (l % 2 !== 0) {
                l += 1;
            }
            if (r("WATypedArraysEqual")(i, n)) {
                return {
                    position: o,
                    size: l + m + m
                };
            }
            o += d + l;
        }
        return null;
    }
    function y(t) {
        if (!C(t)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker file not extended format."
            ])));
            return null;
        }
        const n = h(t, u.EXIF);
        if (!n) {
            return null;
        }
        const r = t.slice(n.position, n.position + n.size);
        let a;
        let i;
        for(let l = r.byteLength; l > 0; --l){
            if (i == null && r[l] === f) {
                i = l;
            } else if (i != null && r[l] === g) {
                a = l + 1;
                break;
            }
        }
        if (a == null || i == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "JSON not found in sticker file"
            ])));
            return null;
        }
        return {
            position: n.position + a,
            size: i - a + 1
        };
    }
    function C(e) {
        const t = e.slice(c, c + m);
        return r("WATypedArraysEqual")(t, R(u.VP8X));
    }
    function b(e) {
        const t = new Uint8Array(e);
        return C(t) && (_ & t[p]) !== 0;
    }
    function v(e) {
        return e.reduce((e, t, n)=>e + (t << n * 8), 0);
    }
    function S(e) {
        const t = new (o("WABinary")).Binary;
        t.writeUint32(e, true);
        return t.readByteArrayView();
    }
    function R(e) {
        const t = new (o("WABinary")).Binary;
        t.writeString(e);
        return t.readByteArrayView();
    }
    l.Chunk = u;
    l.CHUNK_HEADER_SIZE = d;
    l.FOUR = m;
    l.findWebpChunk = h;
    l.findWebpMetadata = y;
    l.isExtendedFile = C;
    l.isAnimatedWebp = b;
    l.littleEndianToNumber = v;
    l.numberToLittleEndian = S;
    l.stringToUint8 = R;
}, 98);