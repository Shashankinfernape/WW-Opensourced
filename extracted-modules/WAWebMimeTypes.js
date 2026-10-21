__d("WAWebMimeTypes", [
    "WATypedArraysEqual",
    "WAWebFileTypeFromBytes",
    "WAWebMediaFileErrors",
    "WAWebMimeTypesBuildExtToMime",
    "filterObject"
], function(t, n, r, o, a, i, l) {
    const e = 262;
    const s = new Uint8Array([
        208,
        207,
        17,
        224,
        161,
        177,
        26,
        225
    ]);
    const u = "application/x-cfb";
    function c(e) {
        return r("WATypedArraysEqual")(e, s);
    }
    const d = {
        "text/plain": {
            ext: "TXT",
            msgType: "document",
            icon: "icon-doc-txt",
            canSend: true
        },
        "text/rtf": {
            ext: "RTF",
            msgType: "document",
            icon: "icon-doc-doc",
            canSend: true,
            signatureMimetype: "application/rtf"
        },
        "text/html": {
            ext: "HTML",
            msgType: "document",
            icon: "icon-doc-txt",
            canSend: false,
            previewType: "html"
        },
        "text/vcard": {
            ext: "VCF",
            msgType: "vcard"
        },
        "application/zip": {
            ext: "ZIP",
            icon: "icon-doc-generic",
            msgType: "document"
        },
        "application/pdf": {
            ext: "PDF",
            msgType: "document",
            icon: "icon-doc-pdf",
            canSend: true,
            signatureMimetype: "application/pdf",
            previewType: "pdf"
        },
        "application/msword": {
            ext: "DOC",
            msgType: "document",
            icon: "icon-doc-doc",
            canSend: true,
            signatureMimetype: "application/x-msi",
            previewType: "msoffice"
        },
        "application/vnd.ms-excel": {
            ext: "XLS",
            msgType: "document",
            icon: "icon-doc-xls",
            canSend: true,
            signatureMimetype: "application/x-msi",
            previewType: "msoffice"
        },
        "application/vnd.ms-powerpoint": {
            ext: "PPT",
            msgType: "document",
            icon: "icon-doc-ppt",
            canSend: true,
            signatureMimetype: "application/x-msi",
            previewType: "msoffice"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
            ext: "DOCX",
            msgType: "document",
            icon: "icon-doc-doc",
            canSend: true,
            signatureMimetype: "application/zip",
            previewType: "msoffice"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
            ext: "PPTX",
            msgType: "document",
            icon: "icon-doc-ppt",
            canSend: true,
            signatureMimetype: "application/zip",
            previewType: "msoffice"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            ext: "XLSX",
            msgType: "document",
            icon: "icon-doc-xls",
            canSend: true,
            signatureMimetype: "application/zip",
            previewType: "msoffice"
        },
        "audio/aac": {
            msgType: "audio",
            ext: "AAC"
        },
        "audio/mp4": {
            msgType: "audio"
        },
        "audio/amr": {
            msgType: "audio"
        },
        "audio/mpeg": {
            msgType: "audio"
        },
        "audio/ogg; codecs=opus": {
            msgType: "audio",
            ext: "OGG"
        },
        "audio/wav": {
            msgType: "audio",
            ext: "wav"
        },
        "video/mp4": {
            msgType: "video",
            ext: "MP4"
        },
        "video/3gpp": {
            msgType: "video"
        },
        "image/jpeg": {
            msgType: "image"
        },
        "image/png": {
            msgType: "image"
        }
    };
    const m = d;
    const p = r("filterObject")(m, function(e) {
        return e?.msgType === "document";
    });
    const _ = "*";
    const f = "image/*";
    const g = "video/mp4,video/3gpp,video/quicktime";
    const h = "video/mp4,video/3gpp,video/quicktime,video/webm,video/x-matroska";
    const y = g;
    const C = "audio/wav,audio/mp3,audio/ogg,audio/aac,audio/mpeg";
    const b = r("WAWebMimeTypesBuildExtToMime")();
    const v = r("filterObject")(d, function(e) {
        return e?.msgType === "document" && e.canSend === true && e.ext != null;
    });
    function S(e, t, n = false) {
        for(const r in v){
            const o = d[r];
            if (o != null) {
                const { ext: a, signatureMimetype: i } = o;
                const l = n ? i : r;
                if (l === e && a != null && t != null && t.toLowerCase().endsWith(a.toLowerCase())) {
                    return r;
                }
            }
        }
        if (e === "image/svg+xml") {
            return null;
        }
        if (n || e != null) {
            return e;
        }
        return "application/octet-stream";
    }
    function R(e) {
        const n = d[e];
        if (n) {
            return `.${(n.ext ?? e.split("/")[1]).toLowerCase()}`;
        }
        return "";
    }
    function L(e) {
        const t = d[e];
        return t?.previewType;
    }
    function E(t, n) {
        const r = n.subarray(0, e);
        const a = o("WAWebFileTypeFromBytes").fileTypeFromBytes(r);
        if (a) {
            return a.mime;
        }
        if (t === "image") {
            return "image/jpeg";
        }
        if (t === "group-history") {
            return "application/protobuf";
        }
        throw new (o("WAWebMediaFileErrors")).MediaEncryptionError(`unknown mime decrypt error for type:${t}`);
    }
    const k = "audio/ogg";
    function I(e) {
        if (e == null) {
            return false;
        }
        return e.includes(k);
    }
    function T(e) {
        return L(e) === "pdf";
    }
    function D(e) {
        return L(e) === "html";
    }
    l.MIMETYPE_DETERMINING_LENGTH = e;
    l.MSCFB_HEADER = s;
    l.MSCFB_MIME = u;
    l.isMsCompoundFileBinaryFormat = c;
    l.MIMETYPES = m;
    l.DOCUMENT_MIMETYPES = p;
    l.DOC_MIMES = _;
    l.IMAGE_MIMES = f;
    l.EXTENDED_VIDEO_MIMES = h;
    l.VIDEO_MIMES = y;
    l.AUDIO_MIMES = C;
    l.EXT_TO_MIME = b;
    l.isAllowedDocumentMimetype = S;
    l.getExtension = R;
    l.previewType = L;
    l.getMediaMimeType = E;
    l.isOpus = I;
    l.isPdfDocument = T;
    l.isHtmlDocument = D;
}, 98);