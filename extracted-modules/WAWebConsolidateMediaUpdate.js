__d("WAWebConsolidateMediaUpdate", [
    "Promise",
    "WALogger",
    "WAWebExperienceIdWamFields",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaMmsV4Download",
    "WAWebMediaObject",
    "WAWebMediaOpaqueData",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        const t = {};
        o("WAWebMediaTypes").MAPPED_MSG_PROPS.forEach((n)=>{
            const r = e[n];
            const a = o("WAWebMediaTypes").MSG_TO_MEDIA[n];
            t[a] = r;
        });
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            const n = o("WAWebMediaObject").getInteractiveMsgMediaType(e);
            if (n) {
                t.type = n;
            }
        }
        return t;
    }
    function d(t, n) {
        if (t.isUnsentPhoneMsg()) {
            if (t.mediaObject) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "id: ",
                    " type: ",
                    ""
                ])), t.id.toString(), t.type).sendLogs("media-fault: consolidateMediaUpdate unsent message");
            }
            const r = c(t);
            if (Object.prototype.hasOwnProperty.call(r, "preview")) {
                const a = r.preview;
                delete r.preview;
                if (a != null && a !== "") {
                    p(a).then((e)=>{
                        if (t?.mediaData && t.isUnsentPhoneMsg()) {
                            t.mediaData.preview = e;
                        }
                    });
                }
            }
            t.mediaData.set(babelHelpers.extends({}, r, {
                mediaStage: o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD
            }));
        } else {
            m({
                msg: t,
                msgValues: t,
                rmrReason: n
            });
        }
    }
    function m({ chatWid, msg, msgValues, rmrReason }) {
        const l = c(msgValues);
        let msg_mediaObject = msg.mediaObject;
        const msgValues_filehash = msgValues.filehash;
        const m = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(msg);
        if (msg_mediaObject) {
            if (msgValues_filehash != null && msgValues_filehash !== "" && msgValues_filehash !== msg_mediaObject.filehash) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "media:msg ",
                    " ",
                    " filehash"
                ])), msg.id.toString(), msg_mediaObject.filehash != null && msg_mediaObject.filehash !== "" ? "changed" : "added");
                o("WAWebMediaStorage").disassociateMediaFromMsg(msg_mediaObject, msg);
                msg_mediaObject = o("WAWebMediaStorage").getOrCreateMediaObject(msgValues_filehash);
                msg.mediaObject = msg_mediaObject;
                o("WAWebMediaStorage").associateMediaWithMsg(msg_mediaObject, msg);
            }
        } else {
            if (msgValues_filehash != null && msgValues_filehash !== "") {
                msg_mediaObject = o("WAWebMediaStorage").getOrCreateMediaObject(msgValues_filehash);
            } else {
                msg_mediaObject = new (o("WAWebMediaObject")).MediaObject;
            }
            const p = msg.mediaData;
            if (p.aspectRatio !== undefined) {
                l.aspectRatio = p.aspectRatio;
            }
            msg.mediaObject = msg_mediaObject;
            o("WAWebMediaStorage").associateMediaWithMsg(msg_mediaObject, msg);
        }
        let _ = false;
        const { deprecatedMms3Url, directPath, encFilehash, firstFrameSidecar, mediaKey, mediaKeyTimestamp, scanLengths, scansSidecar, staticUrl, streamingSidecar, type } = msgValues;
        if (deprecatedMms3Url || encFilehash || directPath || !m) {
            let k;
            try {
                k = o("WAWebMmsMediaTypes").msgToMediaType({
                    type: msgValues.type,
                    isGif: msgValues.isGif,
                    interactiveHeader: msgValues.interactiveHeader,
                    isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(msgValues)
                });
            } catch (e) {
                k = ~o("WAWebMmsMediaTypes").MEDIA_TYPE_VALUES.indexOf(type) ? type : null;
            }
            _ = m ? !msg_mediaObject.entries.has({
                encFilehash,
                deprecatedMms3Url
            }) : !msg_mediaObject.entries.hasUnencryptedEntry({
                filehash: msgValues_filehash,
                directPath
            });
            let I;
            if (_) {
                if (k != null && (encFilehash != null || directPath != null && k === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT || !m)) {
                    if (m && mediaKey != null) {
                        I = msg_mediaObject.entries.addEntry({
                            deprecatedMms3Url,
                            mediaKey,
                            mediaKeyTimestamp,
                            encFilehash,
                            type: k,
                            sidecar: streamingSidecar,
                            directPath,
                            firstFrameSidecar,
                            scansSidecar,
                            scanLengths,
                            debugHint: "consolidate",
                            staticUrl
                        });
                    } else if (!m && directPath != null && msgValues_filehash != null) {
                        I = msg_mediaObject.entries.addUnencryptedEntry({
                            debugHint: "consolidate",
                            directPath,
                            filehash: msgValues_filehash,
                            type: k
                        });
                    }
                } else {
                    _ = false;
                }
            } else if (m && mediaKey != null && mediaKey !== "") {
                I = msg_mediaObject.entries.updateEntry({
                    deprecatedMms3Url,
                    mediaKey,
                    mediaKeyTimestamp,
                    encFilehash,
                    type: k,
                    sidecar: streamingSidecar,
                    directPath,
                    firstFrameSidecar,
                    scansSidecar,
                    scanLengths,
                    staticUrl
                });
            } else if (!m && msgValues_filehash != null) {
                I = msg_mediaObject.entries.updateUnencryptedEntry({
                    filehash: msgValues_filehash,
                    directPath
                });
            }
            if (!I) {
                _ = false;
            }
            if (_ && msg_mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING) {
                l.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT;
            }
        }
        if (!msg_mediaObject.consolidate(l)) {
            msg_mediaObject.notifyMsgsAsync();
        }
        if (_ && msg_mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.NEED_POKE) {
            let T;
            try {
                T = o("WAWebMmsMediaTypes").getMsgMediaType(msg);
            } catch (error) {
                if (!msgValues.type) {
                    throw error;
                }
                T = o("WAWebMmsMediaTypes").msgToMediaType({
                    type: msgValues.type,
                    isGif: msg.isGif,
                    isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(msg)
                });
            }
            o("WAWebMediaMmsV4Download").downloadMedia({
                mimetype: msgValues.mimetype,
                mediaObject: msg_mediaObject,
                downloadEvenIfExpensive: false,
                mediaType: T,
                rmrReason,
                downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(msg),
                chatWid,
                experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(msg)
            });
        }
    }
    function p(e) {
        if (e instanceof r("WAWebMediaOpaqueData")) {
            return (u || (u = n("Promise"))).resolve(e);
        }
        return r("WAWebMediaOpaqueData").createFromBase64Preview(e);
    }
    l.consolidateMediaUpdate = d;
    l.consolidateMediaUpdateWithValues = m;
}, 98);