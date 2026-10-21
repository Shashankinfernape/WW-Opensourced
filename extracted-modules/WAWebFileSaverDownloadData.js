__d("WAWebFileSaverDownloadData", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebDualUploadsPreferredMsg",
    "WAWebFilenameManager",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebZipUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a = false) {
            const i = Array.isArray(t) ? t : [
                t
            ];
            try {
                const l = yield (u || (u = n("Promise"))).all(i.map((e)=>m(e, a)));
                if (l.length > 1) {
                    const s = yield o("WAWebZipUtils").zipFiles(l);
                    return {
                        blob: s,
                        name: o("WAWebFilenameManager").getDefaultName({
                            t: Math.round(Date.now() / 1000),
                            type: "unknown",
                            mimetype: "application/zip",
                            isVcardOverMmsDocument: false,
                            filename: "",
                            vcardList: []
                        })
                    };
                }
                return l[0];
            } catch (error) {
                const c = r("getErrorSafe")(error);
                if (c.name !== o("WAAbortError").ABORT_ERROR) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to get msg download data"
                    ]))).catching(c).sendLogs("msg-download-data-failed");
                }
                throw c;
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, shouldThrowAbortError = false) {
            const a = "text/vcard";
            if (e.type === o("WAWebMsgType").MSG_TYPE.VCARD) {
                return {
                    name: o("WAWebFilenameManager").getDefaultName(e),
                    blob: new Blob([
                        e.body
                    ], {
                        type: a
                    })
                };
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
                return {
                    name: o("WAWebFilenameManager").getDefaultName(e),
                    blob: new Blob([
                        e.vcardList.map((e)=>e.vcard).join("\n")
                    ], {
                        type: a
                    })
                };
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
                const i = o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsgs(o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id));
                if (i.length > 0) {
                    const l = yield (u || (u = n("Promise"))).all(i.map((e)=>m(e, shouldThrowAbortError)));
                    if (l.length === 1) {
                        return l[0];
                    }
                    const c = yield o("WAWebZipUtils").zipFiles(l);
                    return {
                        blob: c,
                        name: o("WAWebFilenameManager").getDefaultName({
                            t: Math.round(Date.now() / 1000),
                            type: "unknown",
                            mimetype: "application/zip",
                            isVcardOverMmsDocument: false,
                            filename: "",
                            vcardList: []
                        })
                    };
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug] getMsgDownloadData Album message has no associated child messages"
                ]))).sendLogs("msg-download-data-almum-no-children");
                throw r("err")("Album message has no associated child messages");
            }
            const d = _(e);
            if (d) {
                return d;
            }
            yield e.downloadMedia({
                downloadEvenIfExpensive: true,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
                isUserInitiated: true,
                shouldThrowAbortError
            });
            const p = _(e);
            if (p) {
                return p;
            }
            throw r("err")("Unable to download because blob cannot be found");
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        if (e.mediaData == null) {
            return null;
        }
        const e_mediaData = e.mediaData;
        const { filehash, mediaBlob, renderableUrl } = e_mediaData;
        if (mediaBlob instanceof r("WAWebMediaOpaqueData")) {
            return {
                name: o("WAWebFilenameManager").getDefaultName(e),
                url: renderableUrl,
                blob: mediaBlob.forceToBlob()
            };
        }
        const l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(filehash);
        if (l) {
            return {
                blob: l,
                name: o("WAWebFilenameManager").getDefaultName(e),
                url: o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(filehash)
            };
        }
        return null;
    }
    l.getMultiMsgDownloadData = c;
    l.getMsgDownloadData = m;
}, 98);