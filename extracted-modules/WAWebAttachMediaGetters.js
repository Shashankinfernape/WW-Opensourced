__d("WAWebAttachMediaGetters", [
    "WAWebAttachMediaConstants",
    "WAWebFileUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebMediaOpaqueData",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebTPPdfViewerGatingUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createAttachMediaCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = e;
    const m = unsafeIdentityGetter;
    const p = o("WAWebGetters").createGetterFactories({
        root: m,
        createCache: o("WAWebGettersCaches").createFrontendAttachMediaCache
    });
    const { clearCacheFor: clearCacheFor_1, field: field_1 } = p;
    function g(e) {
        clearCacheFor(e);
        clearCacheFor_1(e);
    }
    const h = field("file");
    const y = field("filename");
    const C = field("fullPreview");
    const b = field("fullPreviewSize");
    const v = field("documentPageCount");
    const S = field("mimetype");
    const R = field("preview");
    const L = field("state");
    const E = field("type");
    const k = field_1("editedFile");
    const I = field_1("duration");
    const T = field_1("hdEligible");
    const D = field_1("isGif");
    const x = field_1("mediaEditorData");
    const $ = field_1("metadataByQuality");
    const P = field_1("originalFilename");
    const N = field_1("processingProgressPercentage");
    const M = field_1("quality");
    const w = computed(function([t]) {
        if (t instanceof r("WAWebMediaOpaqueData")) {
            return t.size();
        }
        if (t instanceof Blob) {
            return t.size;
        }
        return null;
    }, [
        h
    ]);
    const A = computed(function([t]) {
        if (t) {
            return o("WAWebFileUtils").getFileExtension(t);
        }
        return null;
    }, [
        y
    ]);
    const F = computed(function([t, n, a, i, l, s, u]) {
        if (!t || !n) {
            return false;
        }
        if (t === o("WAWebMsgType").MSG_TYPE.DOCUMENT && o("WAWebMimeTypes").isPdfDocument(n) && a && i !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR && o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) {
            return true;
        }
        if (!l) {
            return false;
        }
        switch(t){
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return !!a;
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                return !(!s || !u);
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.PTT:
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
            case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
                return true;
            default:
                throw r("err")(`Unsupported attach media type ${t}`);
        }
    }, [
        E,
        S,
        y,
        L,
        C,
        b,
        R
    ]);
    const O = [
        "change:type",
        "change:mimetype",
        "change:filename",
        "change:state",
        "change:fullPreview",
        "change:fullPreviewSize",
        "change:preview"
    ];
    const B = O.join(" ");
    l.getAttachMediaUnsafe = m;
    l.clearAttachMediaGetterCacheFor = g;
    l.getFile = h;
    l.getFilename = y;
    l.getFullPreview = C;
    l.getFullPreviewSize = b;
    l.getDocumentPageCount = v;
    l.getMimetype = S;
    l.getPreview = R;
    l.getState = L;
    l.getType = E;
    l.getEditedFile = k;
    l.getDuration = I;
    l.getHdEligible = T;
    l.getIsGif = D;
    l.getMediaEditorData = x;
    l.getMetadataByQuality = $;
    l.getOriginalFilename = P;
    l.getProcessingProgressPercentage = N;
    l.getQuality = M;
    l.getFilesize = w;
    l.getFileExt = A;
    l.getPreviewable = F;
    l.PREVIEWABLE_ROOT_EVENTS = O;
    l.PREVIEWABLE_ROOT_EVENTS_STR = B;
}, 98);