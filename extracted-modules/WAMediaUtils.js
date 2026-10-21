__d("WAMediaUtils", [
    "WACryptoDependencies",
    "WADirectPath",
    "WALongInt",
    "WAMediaEntryData.pb",
    "WAProgressiveJpegGetScanLengths",
    "WAResultOrError",
    "WAServerMediaType",
    "WATimeUtils",
    "decodeProtobuf",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "$$unknownFieldCount",
        "directPath",
        "objectId"
    ];
    const s = [
        "directPath",
        "downloadableThumbnail",
        "lastDownloadAttemptTimestamp",
        "mediaKey",
        "mediaKeyTimestamp",
        "objectId",
        "progressiveJpegDetails",
        "serverMediaType",
        "sidecar",
        "size",
        "uploadToken"
    ];
    function u() {
        const e = new Uint8Array(32);
        o("WACryptoDependencies").getCrypto().getRandomValues(e);
        return e.buffer;
    }
    function c(e) {
        return e;
    }
    function d() {
        return u();
    }
    function m(e) {
        return e;
    }
    function p(e) {
        return e;
    }
    function _(e) {
        return e;
    }
    function f(e) {
        return e;
    }
    function g(e, t) {
        const n = o("decodeProtobuf").decodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, t);
        const { directPath, downloadableThumbnail, fbid, fileEncSha256, filename, fileSha256, mediaKey, mediaKeyTimestamp, objectId, progressiveJpegDetails, serverMediaType, sidecar, size } = n;
        const y = o("WADirectPath").validateDirectPath(directPath);
        return {
            fileSha256,
            mediaKey,
            fileEncSha256,
            directPath: y.success ? y.value : null,
            mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(mediaKeyTimestamp),
            sidecar: sidecar && sidecar,
            objectId,
            fbid,
            downloadableThumbnail: downloadableThumbnail == null ? undefined : {
                directPath: downloadableThumbnail.directPath,
                fileEncSha256: downloadableThumbnail.fileEncSha256,
                fileSha256: downloadableThumbnail.fileSha256,
                mediaKey: downloadableThumbnail.mediaKey,
                mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(downloadableThumbnail.mediaKeyTimestamp),
                objectId: downloadableThumbnail.objectId
            },
            serverMediaType,
            filename,
            progressiveJpegDetails: progressiveJpegDetails && S(progressiveJpegDetails),
            size: size == null ? undefined : o("WALongInt").numberOrThrowIfTooLarge(size)
        };
    }
    function h({ directPath, downloadableThumbnail, fbid, fileEncSha256, filename, fileSha256, mediaKey, mediaKeyTimestamp, objectId, progressiveJpegDetails, serverMediaType, size }) {
        const _ = o("encodeProtobuf").encodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, {
            fileSha256,
            fileEncSha256,
            mediaKey,
            directPath,
            mediaKeyTimestamp,
            serverMediaType,
            objectId,
            fbid,
            downloadableThumbnail,
            filename,
            progressiveJpegDetails,
            size
        });
        return _.readByteArrayView();
    }
    function y(e) {
        return o("encodeProtobuf").encodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, e).readByteArrayView();
    }
    function C(e, t) {
        return o("encodeProtobuf").encodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, babelHelpers.extends({}, e, {
            directPath: t
        })).readByteArrayView();
    }
    function b(e, t) {
        return o("encodeProtobuf").encodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, babelHelpers.extends({}, e, {
            downloadableThumbnail: babelHelpers.extends({}, e.downloadableThumbnail, {
                directPath: t
            })
        })).readByteArrayView();
    }
    function v(t) {
        if (t == null) {
            return null;
        }
        const { $$unknownFieldCount, directPath, objectId } = t;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const l = o("WADirectPath").validateDirectPath(directPath);
        return babelHelpers.extends({}, i, {
            directPath: l.success ? l.value : null,
            objectId,
            mediaKey: t.mediaKey && t.mediaKey,
            mediaKeyTimestamp: t.mediaKeyTimestamp == null ? null : o("WATimeUtils").castToUnixTime(o("WALongInt").numberOrThrowIfTooLarge(t.mediaKeyTimestamp))
        });
    }
    function S(progressiveJpegDetails) {
        if (progressiveJpegDetails == null || progressiveJpegDetails.scanLengths == null || progressiveJpegDetails.sidecar == null) {
            return null;
        }
        return {
            sidecar: progressiveJpegDetails.sidecar,
            scanLengths: progressiveJpegDetails.scanLengths.map((e)=>o("WAProgressiveJpegGetScanLengths").asProgressiveJpegScanLength(o("WALongInt").numberOrThrowIfTooLarge(e)))
        };
    }
    function R(e) {
        const t = o("decodeProtobuf").decodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, e);
        const { directPath, downloadableThumbnail, lastDownloadAttemptTimestamp, mediaKey, mediaKeyTimestamp, objectId, progressiveJpegDetails, serverMediaType, sidecar, size, uploadToken } = t;
        const h = babelHelpers.objectWithoutPropertiesLoose(t, s);
        let progressiveJpegDetails_1 = null;
        if (progressiveJpegDetails != null && progressiveJpegDetails.scanLengths != null && progressiveJpegDetails.sidecar != null) {
            progressiveJpegDetails_1 = {
                sidecar: progressiveJpegDetails.sidecar,
                scanLengths: progressiveJpegDetails.scanLengths.map((e)=>o("WAProgressiveJpegGetScanLengths").asProgressiveJpegScanLength(o("WALongInt").numberOrThrowIfTooLarge(e)))
            };
        }
        const C = o("WADirectPath").validateDirectPath(directPath);
        return babelHelpers.extends({}, h, {
            objectId,
            directPath: C.success ? C.value : undefined,
            sidecar,
            serverMediaType: serverMediaType == null ? null : o("WAServerMediaType").castToServerMediaType(serverMediaType),
            mediaKey: mediaKey && mediaKey,
            mediaKeyTimestamp: mediaKeyTimestamp == null ? null : o("WATimeUtils").castToUnixTime(o("WALongInt").numberOrThrowIfTooLarge(mediaKeyTimestamp)),
            uploadToken: uploadToken && uploadToken,
            progressiveJpegDetails: progressiveJpegDetails_1,
            downloadableThumbnail: downloadableThumbnail && v(downloadableThumbnail),
            size: o("WALongInt").maybeNumberOrThrowIfTooLarge(size),
            lastDownloadAttemptTimestamp: lastDownloadAttemptTimestamp == null ? null : o("WATimeUtils").castToUnixTime(o("WALongInt").numberOrThrowIfTooLarge(lastDownloadAttemptTimestamp))
        });
    }
    function L(e) {
        const { directPath, fileEncSha256, fileSha256, mediaKey, serverMediaType } = e;
        if (mediaKey == null) {
            return o("WAResultOrError").makeError("media-entry-invalid-media-key");
        }
        if (directPath == null) {
            return o("WAResultOrError").makeError("media-entry-invalid-direct-path");
        }
        if (fileEncSha256 == null) {
            return o("WAResultOrError").makeError("media-entry-invalid-file-enc-sha256");
        }
        if (fileSha256 == null) {
            return o("WAResultOrError").makeError("media-entry-invalid-file-sha256");
        }
        if (serverMediaType == null) {
            return o("WAResultOrError").makeError("media-entry-invalid-server-media-type");
        }
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, e, {
            directPath,
            fileEncSha256,
            fileSha256,
            mediaKey,
            serverMediaType
        }));
    }
    function E(e) {
        const { directPath, fileEncSha256, fileSha256, mediaKey } = e;
        const i = [];
        if (mediaKey == null) {
            i.push("media-entry-invalid-media-key");
        } else if (directPath == null) {
            i.push("media-entry-invalid-direct-path");
        } else if (fileEncSha256 == null) {
            i.push("media-entry-invalid-file-enc-sha256");
        } else if (fileSha256 == null) {
            i.push("media-entry-invalid-file-sha256");
        }
        if (mediaKey != null && directPath != null && fileEncSha256 != null && fileSha256 != null) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, e, {
                directPath,
                fileEncSha256,
                fileSha256,
                mediaKey
            }));
        }
        return o("WAResultOrError").makeError(i);
    }
    function k(e) {
        let t = "image/jpeg";
        switch(e){
            case "image":
                t = "image/jpeg";
                break;
            case "ptt":
                t = "audio/wav";
                break;
            case "video":
                t = "video/mp4";
                break;
            case "gif":
                t = "image/gif";
                break;
            case "sticker":
                t = "image/webp";
                break;
            case "preview":
                t = "image/jpeg";
                break;
            case "document":
                t = "application/octet-stream";
                break;
            case "xma-image":
                t = "image/jpeg";
                break;
            default:
                throw r("err")(`Unsupported server media type: ${e}`);
        }
        return t;
    }
    const I = function() {
        return "TransformStream" in self;
    };
    l.createMediaKey = u;
    l.castToMediaKey = c;
    l.createUploadToken = d;
    l.castToUploadToken = m;
    l.castToStreamingSidecar = p;
    l.stringToDeliveryObjectId = _;
    l.stringToBackupEntFbid = f;
    l.mediaEntryDataToRawData = g;
    l.rawDataToMediaEntry = h;
    l.encodeMediaEntryForUpload = y;
    l.encodeMediaEntryWithUpdatedPath = C;
    l.encodeMediaEntryDownloadableThumbnailWithUpdatedPath = b;
    l.convertMediaDownloadableThumbnailToDownloadableThumbnail = v;
    l.decodeMediaEntryData = R;
    l.validateDecodedMediaEntryForDownload = L;
    l.validateDownloadableThumbnailForDownload = E;
    l.getMimeTypeFromServerMediaType = k;
    l.isTransformStreamSupported = I;
}, 98);