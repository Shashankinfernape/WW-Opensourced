__d("WAWebNonMessageDataRequestHandlerUploadSticker", [
    "Promise",
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebCryptoRandomMediaKey",
    "WAWebFavoriteStickerCollection",
    "WAWebMediaEntry",
    "WAWebMediaMmsV4Upload",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsMmsRetry.pb",
    "WAWebRecentStickerCollectionMd",
    "WAWebSendNonMessageDataRequestResponse",
    "WAWebStickerModel",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    function g(t, n) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[Sticker RDU] reupload response results len=",
            ""
        ])), n.length);
        if (n.length === 0) {
            o("WAWebNonMessageDataRequestLoggingUtils").logNonMessagePeerDataResponse(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, t, 0, 0, 0, 0, 0);
            return;
        }
        const n_length = n.length;
        let i = 0;
        let l = 0;
        let p = 0;
        let _ = 0;
        const f = new Map;
        let g = 0;
        let h = 0;
        const y = [];
        let C = 0;
        const b = [];
        const v = [];
        n.forEach((e)=>{
            if (e.mediaUploadResult === o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS) {
                i++;
            } else if (e.mediaUploadResult === o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.NOT_FOUND) {
                _++;
            } else {
                p++;
            }
            const e_stickerMessage = e.stickerMessage;
            if (e_stickerMessage == null) {
                g++;
                return;
            }
            const { directPath, fileEncSha256, fileSha256, mediaKey, mediaKeyTimestamp } = e_stickerMessage;
            if (fileSha256 == null) {
                h++;
                return;
            }
            const d = o("WABase64").encodeB64(fileSha256);
            if (e.mediaUploadResult !== o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS) {
                if (y.length < 3) {
                    y.push(e.mediaUploadResult);
                }
                if (e.mediaUploadResult !== o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.NOT_FOUND) {
                    f.set(d, r("nullthrows")(e.mediaUploadResult));
                }
                return;
            }
            if (fileEncSha256 == null || mediaKey == null) {
                C++;
                return;
            }
            l++;
            const m = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.get(d);
            const S = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(d);
            if (o("WAWebNonMessageDataRequestMediaHandlingUtils").inFlightStickerRequests.has(d)) {
                o("WAWebNonMessageDataRequestMediaHandlingUtils").inFlightStickerRequests.delete(d);
            }
            if (m || S) {
                let R;
                const L = m != null ? m.sticker : r("nullthrows")(S).sticker;
                if (directPath === L.directPath && o("WABase64").encodeB64(fileEncSha256) === L.encFilehash && o("WABase64").encodeB64(mediaKey) === L.mediaKey) {
                    return;
                }
                if ((R = L.mediaObject) != null && R.entries.entries) {
                    L.mediaObject?.entries?.clearEntries();
                }
                const k = new (o("WAWebStickerModel")).StickerModel({
                    id: L.filehash,
                    directPath: directPath ?? L.directPath,
                    filehash: L.filehash,
                    encFilehash: o("WABase64").encodeB64(fileEncSha256),
                    mediaKey: o("WABase64").encodeB64(mediaKey),
                    mediaKeyTimestamp: mediaKeyTimestamp != null ? Number(mediaKeyTimestamp) : L.mediaKeyTimestamp,
                    width: L.width,
                    height: L.height,
                    size: L.size,
                    mimetype: L.mimetype,
                    type: L.type,
                    isAvatar: L.isAvatar,
                    index: 0
                });
                if (m) {
                    if (b.length < 3) {
                        b.push(d);
                    }
                    o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.updateRecentStickerWithNewSticker(d, k);
                }
                if (S) {
                    if (v.length < 3) {
                        v.push(d);
                    }
                    o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(d, k);
                }
            }
        });
        if (g > 0) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null stickerMessage in results"
            ])), g);
        }
        if (h > 0) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null fileSha256 in results"
            ])), h);
        }
        if (y.length > 0) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: ",
                " mediaUploadResults are not success => ",
                ""
            ])), y.length, y);
        }
        if (C > 0) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null media fields in results"
            ])), C);
        }
        o("WAWebNonMessageDataRequestMediaHandlingUtils").insertResponseError(f, o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER).catch((e)=>{
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "sticker reupload response error insertion failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("sticker-reupload-response-error-insertion");
        });
        o("WAWebNonMessageDataRequestLoggingUtils").logNonMessagePeerDataResponse(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, t, n_length, i, l, p, _);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(stanzaId, t) {
            const t_length = t.length;
            let successUploadCount = 0;
            let existingDataNoUploadCount = 0;
            let errorCount = 0;
            let u = 0;
            const c = o("WATimeUtils").unixTime();
            const d = [];
            const m = t.map(({ fileSha256 })=>{
                if (fileSha256 == null) {
                    errorCount++;
                    d.push({
                        mediaUploadResult: o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.GENERAL_ERROR
                    });
                    return;
                }
                const n = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(fileSha256);
                if (n == null) {
                    u++;
                    d.push({
                        mediaUploadResult: o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.NOT_FOUND,
                        stickerMessage: {
                            fileSha256: o("WABase64").decodeB64(fileSha256)
                        }
                    });
                    return;
                }
                return n;
            }).filter((e)=>e != null);
            const g = new Set;
            let h = 0;
            const y = m.map((e)=>{
                const t = r("nullthrows")(e?.sticker);
                const t_mediaObject = t.mediaObject;
                if (t_mediaObject == null) {
                    return {
                        kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                    };
                }
                if (o("WAWebNonMessageDataRequestMediaHandlingUtils").shouldSkipMediaUploadWithSuccess(t.filehash, o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, c)) {
                    const mediaEntry = t_mediaObject.entries.getDownloadEntry(true);
                    if (mediaEntry instanceof o("WAWebMediaEntry").EncryptedMediaEntry) {
                        existingDataNoUploadCount++;
                        g.add(t.filehash);
                        return {
                            kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS,
                            mediaEntry
                        };
                    }
                }
                if (o("WAWebNonMessageDataRequestMediaHandlingUtils").shouldSkipMediaUploadWithCancellation(t.filehash, o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, c)) {
                    g.add(t.filehash);
                    return {
                        kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
                    };
                }
                const uploadEntry = o("WAWebMediaMmsV4Upload").getUploadEntryForMediaType(t_mediaObject.entries, true, "sticker");
                if (uploadEntry instanceof o("WAWebMediaEntry").UnencryptedMediaEntry) {
                    h++;
                    return {
                        kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                    };
                }
                const mediaKeyInfo = uploadEntry instanceof o("WAWebMediaEntry").EncryptedMediaEntry ? {
                    key: uploadEntry.mediaKey,
                    timestamp: uploadEntry.mediaKeyTimestamp
                } : r("WAWebCryptoRandomMediaKey")();
                return o("WAWebMediaMmsV4Upload").uploadMedia({
                    mimetype: t.mimetype,
                    mediaObject: t_mediaObject,
                    mediaType: "sticker",
                    forwardedFromWeb: false,
                    uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.STICKER_WEB,
                    fileOrigin: null,
                    mediaKeyInfo,
                    isViewOnce: true,
                    uploadEntry
                });
            });
            if (h > 0) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker-upload] ",
                    " unexpected unencrypted entries"
                ])), h).sendLogs("sticker-upload-unexpected-unencrypted-entry");
            }
            for(var C = yield (f || (f = n("Promise"))).all(y), b = new Map, v = 0; v < C.length; v++){
                const L = C[v];
                const { kind, mediaEntry } = L;
                const I = r("nullthrows")(m[v]);
                const T = r("nullthrows")(I?.sticker);
                if (kind !== o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS || mediaEntry == null) {
                    errorCount++;
                    d.push({
                        mediaUploadResult: o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.GENERAL_ERROR,
                        stickerMessage: {
                            fileSha256: o("WABase64").decodeB64(T.filehash)
                        }
                    });
                    if (!g.has(T.filehash)) {
                        b.set(T.filehash, kind);
                    }
                    continue;
                }
                successUploadCount++;
                if (!g.has(T.filehash)) {
                    let D;
                    if ((D = T.mediaObject) != null && D.entries.entries) {
                        T.mediaObject?.entries?.clearEntries();
                    }
                    const $ = new (o("WAWebStickerModel")).StickerModel({
                        id: T.filehash,
                        directPath: mediaEntry.directPath,
                        filehash: T.filehash,
                        encFilehash: mediaEntry.encFilehash,
                        mediaKey: mediaEntry.mediaKey,
                        mediaKeyTimestamp: mediaEntry.mediaKeyTimestamp,
                        width: T.width,
                        height: T.height,
                        size: T.size,
                        mimetype: T.mimetype,
                        isAvatar: T.isAvatar,
                        type: T.type,
                        index: 0
                    });
                    o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(T.filehash, $);
                    b.set(T.filehash, kind);
                }
                d.push({
                    mediaUploadResult: o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS,
                    stickerMessage: {
                        fileSha256: o("WABase64").decodeB64(T.filehash),
                        fileEncSha256: o("WABase64").decodeB64(mediaEntry.encFilehash ?? ""),
                        mediaKey: o("WABase64").decodeB64(mediaEntry.mediaKey),
                        mimetype: T.mimetype,
                        height: T.height,
                        width: T.width,
                        directPath: mediaEntry.directPath ?? "",
                        mediaKeyTimestamp: mediaEntry.mediaKeyTimestamp
                    }
                });
            }
            o("WAWebSendNonMessageDataRequestResponse").sendPeerDataOperationRequestResponseMessage(stanzaId, o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, d).catch((e)=>{
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "sticker reupload response message sending failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("sticker-reupload-response-msg-send");
            });
            o("WAWebNonMessageDataRequestMediaHandlingUtils").insertMediaUploadResult(b, c);
            o("WAWebNonMessageDataRequestLoggingUtils").logMediaUpload({
                errorCount,
                existingDataNoUploadCount,
                notFoundCount: u,
                requestCount: t_length,
                requestType: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER,
                stanzaId,
                successUploadCount
            });
        });
        return y.apply(this, arguments);
    }
    l.handleUploadStickerPeerDataOperationRequestResponse = g;
    l.handleUploadStickerPeerDataOperationRequest = h;
}, 98);