__d("WAWebMediaResumeUploadMsg", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebMediaEntry",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaInMemoryKeyCache",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaUpdateMsg",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        let a;
        const t_mediaObject = t.mediaObject;
        if (!t_mediaObject) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "id: ",
                " type: ",
                ""
            ])), t.id.toString(), t.type).sendLogs("media-fault: resumeUploadMsg msg without mediaObject");
            return (s || (s = n("Promise"))).resolve();
        }
        t_mediaObject.userUploadAttemptCount++;
        const i_filehash = t_mediaObject.filehash;
        const u = i_filehash != null && (a = o("WAWebMediaInMemoryKeyCache").MediaKeyCache.get(i_filehash)) != null ? a : undefined;
        t.ack = o("WAWebAck").ACK.CLOCK;
        const c = o("WAWebMsgGetters").getIsNewsletterMsg(t) ? o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia : o("WAWebMediaMmsV4Upload").uploadMedia;
        const d = c({
            mimetype: t.mimetype,
            mediaObject: t_mediaObject,
            mediaKeyInfo: u,
            mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(t),
            forwardedFromWeb: !!t.forwardedFromWeb,
            uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(o("WAWebFrontendMsgGetters").getChat(t)),
            fileOrigin: null,
            isViewOnce: !!t.isViewOnce
        }).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ mediaEntry }) {
                if (i_filehash != null) {
                    o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(i_filehash);
                }
                if (!mediaEntry) {
                    throw r("err")("upload failed: media entry was not created");
                }
                t_mediaObject.userUploadAttemptCount = 0;
                const a = {
                    deprecatedMms3Url: mediaEntry.deprecatedMms3Url,
                    directPath: mediaEntry.directPath,
                    filehash: t_mediaObject.filehash,
                    size: t_mediaObject.size,
                    streamingSidecar: mediaEntry.sidecar,
                    firstFrameSidecar: mediaEntry.firstFrameSidecar
                };
                if (mediaEntry instanceof o("WAWebMediaEntry").EncryptedMediaEntry) {
                    a.mediaKey = mediaEntry.mediaKey;
                    a.mediaKeyTimestamp = mediaEntry.mediaKeyTimestamp;
                    a.encFilehash = mediaEntry.encFilehash;
                } else if (mediaEntry instanceof o("WAWebMediaEntry").UnencryptedMediaEntry) {
                    a.mediaHandle = mediaEntry.handle;
                }
                yield r("WAWebMediaUpdateMsg")(t, a);
                return t;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
        const m = o("WAWebMsgGetters").getIsNewsletterMsg(t) ? o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(o("WAWebFrontendMsgGetters").getChat(t), t, function() {
            return d;
        }) : o("WAWebSendMsgChatAction").resendMsgToChat(o("WAWebFrontendMsgGetters").getChat(t), d);
        return m.catch(()=>{
            t.ack = o("WAWebAck").ACK.FAILED;
        });
    }
    l.resumeUploadMsg = u;
}, 98);