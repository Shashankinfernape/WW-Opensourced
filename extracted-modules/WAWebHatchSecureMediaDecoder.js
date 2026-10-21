__d("WAWebHatchSecureMediaDecoder", [
    "WAWebAIHatchIdentityStore",
    "WAWebHatchJsonReaders"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "mmg";
    function s(e, t) {
        return m(o("WAWebHatchJsonReaders").readField(e, t));
    }
    function u(e, t = m) {
        const n = new Map;
        if (e == null || typeof e !== "object") {
            return n;
        }
        for (const r of Object.keys(e)){
            if (!o("WAWebHatchJsonReaders").isBlankText(r)) {
                n.set(r, t(o("WAWebHatchJsonReaders").readField(e, r)));
            }
        }
        return n;
    }
    function c(e) {
        let t;
        const n = (t = o("WAWebHatchJsonReaders")).readNonEmptyString(e, "direct_path");
        const r = t.readNonEmptyString(e, "media_key_b64");
        const a = t.readNonEmptyString(e, "file_enc_sha256_b64");
        const i = t.readNonEmptyString(e, "file_sha256_b64");
        if (n == null || r == null || a == null || i == null) {
            return null;
        }
        return {
            directPath: n,
            mediaKey: r,
            encFilehash: a,
            filehash: i
        };
    }
    function d(t) {
        return o("WAWebHatchJsonReaders").readString(t, "media_transport") === e;
    }
    function m(e) {
        const t = p(o("WAWebHatchJsonReaders").readString(e, "media_type"));
        const n = c(e);
        if (t == null || n == null) {
            return null;
        }
        return babelHelpers.extends({}, n, {
            mediaType: t,
            mimeType: o("WAWebHatchJsonReaders").readString(e, "mime_type"),
            sidecarB64: o("WAWebHatchJsonReaders").readString(e, "sidecar_b64"),
            fileLength: o("WAWebHatchJsonReaders").readNumber(e, "file_length"),
            staticUrl: o("WAWebAIHatchIdentityStore").validateWhatsAppNetUrl(o("WAWebHatchJsonReaders").readString(e, "url"), "secure media")
        });
    }
    function p(e) {
        if (e === "image" || e === "video") {
            return e;
        }
        return null;
    }
    l.readSecureMediaField = s;
    l.decodeSecureMediaMap = u;
    l.decodeMmgMediaKeys = c;
    l.hasMmgTransport = d;
}, 98);