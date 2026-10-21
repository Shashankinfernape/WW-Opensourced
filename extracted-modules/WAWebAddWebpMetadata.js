__d("WAWebAddWebpMetadata", [
    "WATypedArraysConcat",
    "WAWebWebp",
    "WAWebWebpMetadata",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = new Uint8Array(e);
        if (!o("WAWebWebp").isExtendedFile(n)) {
            throw r("err")("Not extended");
        }
        const a = o("WAWebWebpMetadata").toRawWebpMetadata(t);
        const i = u(a);
        const l = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
            n,
            i
        ]);
        l.set(o("WAWebWebp").numberToLittleEndian(l.byteLength - 8), 4);
        const l_buffer = l.buffer;
        return l_buffer;
    }
    function s(EXIF, byteLength) {
        return o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
            o("WAWebWebp").stringToUint8(EXIF),
            o("WAWebWebp").numberToLittleEndian(byteLength)
        ]);
    }
    function u(e) {
        const t = new TextEncoder;
        const n = JSON.stringify(e);
        const r = t.encode(n);
        const a = c(r);
        const i = [
            s(o("WAWebWebp").Chunk.EXIF, a.byteLength),
            a
        ];
        if (r.byteLength % 2 !== 0) {
            i.push(new Uint8Array([
                0
            ]));
        }
        const l = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, i);
        return l;
    }
    function c(e) {
        let t;
        const n = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
            (t = o("WAWebWebp")).stringToUint8("II"),
            new Uint8Array([
                42,
                0
            ]),
            t.numberToLittleEndian(8),
            new Uint8Array([
                1,
                0
            ]),
            t.stringToUint8("AW"),
            new Uint8Array([
                7,
                0
            ]),
            t.numberToLittleEndian(e.byteLength),
            t.numberToLittleEndian(22),
            e
        ]);
        return n;
    }
    l.addWebpMetadata = e;
}, 98);