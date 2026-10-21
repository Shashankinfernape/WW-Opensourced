__d("WAWebThumbnailOutcomeLogger", [
    "WAWebMsgType",
    "WAWebWamEnumDownloadOriginType",
    "WaWebThumbnailOutcomeFalcoEvent"
], function(t, n, r, o, a, i, l) {
    let u;
    let c;
    function d(e) {
        const { branch, checkPerformed, context, generationDurationMs } = e;
        const i = e.checkPerformed ? e : null;
        const l = i?.retryCount;
        r("WaWebThumbnailOutcomeFalcoEvent").log(function() {
            return {
                outcome: m(e),
                branch,
                callsite: context.callsite,
                check_performed: checkPerformed,
                generation_duration_ms: generationDurationMs != null ? h(generationDurationMs) : undefined,
                is_black: i?.isBlack,
                media_type: context.mediaType,
                download_origin: context.downloadOrigin,
                is_encrypted: context.isEncrypted,
                retry_count: l != null ? h(l) : undefined
            };
        });
    }
    function m(e) {
        if (e.checkPerformed) {
            if (e.isBlack) {
                return "BLACK";
            }
            return "OK";
        }
        return e.outcome;
    }
    function p(e) {
        if (e == null) {
            return null;
        }
        return _[e] ?? null;
    }
    var _ = {
        [(u = o("WAWebWamEnumDownloadOriginType")).DOWNLOAD_ORIGIN_TYPE.CHANNEL]: "CHANNEL",
        [u.DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP]: "CHAT_GROUP",
        [u.DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL]: "CHAT_PERSONAL",
        [u.DOWNLOAD_ORIGIN_TYPE.COMMUNITY]: "COMMUNITY",
        [u.DOWNLOAD_ORIGIN_TYPE.PRODUCT_CATALOG]: "PRODUCT_CATALOG",
        [u.DOWNLOAD_ORIGIN_TYPE.STATUS_USER]: "STATUS_USER"
    };
    function f(e, t = false) {
        if (t && e === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return "GIF";
        }
        return g[e] ?? "OTHER";
    }
    var g = {
        [(c = o("WAWebMsgType")).MSG_TYPE.DOCUMENT]: "DOCUMENT",
        [c.MSG_TYPE.IMAGE]: "IMAGE",
        [c.MSG_TYPE.PTV]: "PTV",
        [c.MSG_TYPE.STICKER]: "STICKER",
        [c.MSG_TYPE.VIDEO]: "VIDEO"
    };
    function h(e) {
        return String(Math.round(e));
    }
    l.logThumbnailOutcome = d;
    l.thumbnailDownloadOriginFromWam = p;
    l.thumbnailMediaTypeFromMsgType = f;
}, 98);