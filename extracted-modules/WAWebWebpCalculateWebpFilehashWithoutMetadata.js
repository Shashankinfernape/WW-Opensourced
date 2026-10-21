__d("WAWebWebpCalculateWebpFilehashWithoutMetadata", [
    "WACryptoSha256",
    "WAWebWebp"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = new Uint8Array(e);
        const r = o("WAWebWebp").findWebpChunk(n, o("WAWebWebp").Chunk.EXIF) ?? o("WAWebWebp").findWebpChunk(n, o("WAWebWebp").Chunk.XMP);
        if (r == null) {
            return o("WACryptoSha256").sha256Base64(e);
        }
        const a = n.slice(0, r.position);
        const i = a.byteLength - o("WAWebWebp").CHUNK_HEADER_SIZE;
        a.set(o("WAWebWebp").numberToLittleEndian(i), o("WAWebWebp").FOUR);
        return o("WACryptoSha256").sha256Base64(a);
    }
    l.default = e;
}, 98);