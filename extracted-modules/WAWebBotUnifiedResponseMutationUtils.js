__d("WAWebBotUnifiedResponseMutationUtils", [
    "WALogger",
    "WALongInt"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const n = e?.botMetadata?.unifiedResponseMutation?.mediaDetailsMetadataList;
        if (!(n == null || n.length === 0)) {
            const r = [];
            for (const o of n){
                const a = c(o);
                if (a != null) {
                    r.push(a);
                }
            }
            if (r.length > 0) {
                return r;
            }
            return undefined;
        }
    }
    function c(t) {
        if (t != null) {
            const n = t.id;
            if (n == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-response-mutation] dropping mediaDetailsMetadata with no id"
                ]))).sendLogs("unified-response-mutation-media-missing-id");
                return;
            }
            const highResMedia = d(t.highResMedia);
            const previewMedia = d(t.previewMedia);
            if (!(highResMedia == null && previewMedia == null)) {
                return {
                    id: n,
                    highResMedia,
                    previewMedia
                };
            }
        }
    }
    function d(e) {
        if (e != null) {
            const { directPath, fileEncSha256, fileSha256, mediaKey } = e;
            if (directPath == null || mediaKey == null || fileEncSha256 == null || fileSha256 == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-response-mutation] dropping media missing required download fields"
                ]))).sendLogs("unified-response-mutation-media-missing-download-fields");
                return;
            }
            return {
                directPath,
                mediaKey,
                fileEncSha256,
                fileSha256,
                mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.mediaKeyTimestamp),
                mimetype: e.mimetype ?? undefined
            };
        }
    }
    function m(e) {
        if (e.length !== 0) {
            return {
                mediaDetailsMetadataList: e.map(p)
            };
        }
    }
    function p(e) {
        return {
            id: e.id,
            highResMedia: e.highResMedia != null ? _(e.highResMedia) : undefined,
            previewMedia: e.previewMedia != null ? _(e.previewMedia) : undefined
        };
    }
    function _(e) {
        return {
            directPath: e.directPath,
            mediaKey: e.mediaKey,
            fileEncSha256: e.fileEncSha256,
            fileSha256: e.fileSha256,
            mediaKeyTimestamp: e.mediaKeyTimestamp ?? undefined,
            mimetype: e.mimetype ?? undefined
        };
    }
    l.parseUnifiedResponseMutationMediaList = u;
    l.parseMediaDetailsMetadata = c;
    l.parseBotMediaMetadata = d;
    l.generateUnifiedResponseMutation = m;
    l.generateBotMediaMetadata = _;
}, 98);