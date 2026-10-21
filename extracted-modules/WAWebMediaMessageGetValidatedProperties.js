__d("WAWebMediaMessageGetValidatedProperties", [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WAWebHandleMsgError",
    "WAWebMediaUrlAllowlist",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum")({
        MISSING_MEDIA_KEY: "missing_media_key",
        INVALID_SHA256: "invalid_sha256",
        INVALID_ENC_SHA256: "invalid_enc_sha256",
        INVALID_URL: "invalid_url",
        INVALID_MIME_TYPE: "invalid_mime_type",
        INVALID_MEDIA_KEY: "invalid_media_key",
        INVALID_FILE_LENGTH: "invalid_file_length"
    });
    const c = ((e)=>{
        function t(t) {
            let n;
            const { e2eFailureReason: r, errorCode: o, expectedType: a, options: i } = t;
            const l = `${String(o)} for ${a} message`;
            n = e.call(this, l, r, i) || this;
            n.name = "MediaMessageValidationError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    const d = "video/";
    const m = "image/";
    function p(e) {
        return _(e) || e.startsWith(m);
    }
    function _(e) {
        return e.startsWith(d);
    }
    function f(e) {
        return e.id == null;
    }
    function g({ fileEncSha256: l, fileLength: d, fileSha256: m, mediaKey: p, mimetype: _, url: g }, n, a, i) {
        const h = a === "relay" || a === "outgoing" || r("justknobx")._("585") && n.from instanceof r("WAWebWid") && n.from.isNewsletter() && a === "history";
        if (!h) {
            return {
                mediaKey: p,
                fileSha256: m,
                fileEncSha256: l,
                fileLength: o("WALongInt").numberOrThrowIfTooLarge(d ?? 0),
                url: g,
                mimetype: _
            };
        }
        if (f(n)) {
            return {
                mediaKey: p,
                fileSha256: m,
                fileEncSha256: l,
                fileLength: o("WALongInt").numberOrThrowIfTooLarge(d ?? 0),
                url: g,
                mimetype: _
            };
        }
        if (!r("WAWebNewsletterIsNewsletterMsg")(n)) {
            if (p == null) {
                throw new c({
                    e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_KEY,
                    errorCode: u.MISSING_MEDIA_KEY,
                    expectedType: i
                });
            }
            if (p.byteLength !== 32) {
                throw new c({
                    e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_KEY,
                    errorCode: u.INVALID_MEDIA_KEY,
                    expectedType: i
                });
            }
            if (l != null && l.byteLength !== 32) {
                throw new c({
                    e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_FILE_SHA256,
                    errorCode: u.INVALID_ENC_SHA256,
                    expectedType: i
                });
            }
        }
        if (m?.byteLength !== 32) {
            throw new c({
                e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_FILE_SHA256,
                errorCode: u.INVALID_SHA256,
                expectedType: i
            });
        }
        if (g != null && !o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(g)) {
            throw new c({
                e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_URL,
                errorCode: u.INVALID_URL,
                expectedType: i
            });
        }
        if (i === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && _ != null) {
            throw new c({
                e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_MIME_TYPE,
                errorCode: u.INVALID_MIME_TYPE,
                expectedType: i
            });
        }
        if (_ == null && i !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            throw new c({
                e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_MIME_TYPE,
                errorCode: u.INVALID_MIME_TYPE,
                expectedType: i
            });
        }
        const y = o("WAWebMmsMediaTypes").getValidMimeTypes(i);
        if (_ != null && y != null && !y.has(_)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected ",
                " for ",
                " message"
            ])), _, i);
            throw new c({
                e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_MIME_TYPE,
                errorCode: u.INVALID_MIME_TYPE,
                expectedType: i
            });
        }
        let C;
        let b = false;
        if (i === o("WAWebMsgType").MSG_TYPE.STICKER) {
            if (d != null) {
                C = o("WALongInt").numberOrThrowIfTooLarge(d);
                b = C >= 0;
            } else {
                b = true;
            }
        } else if (i === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            if (d == null) {
                b = false;
            } else {
                C = o("WALongInt").numberOrThrowIfTooLarge(d);
                b = C >= 0;
            }
        } else if (d == null) {
            b = false;
        } else {
            C = o("WALongInt").numberOrThrowIfTooLarge(d);
            b = C > 0;
        }
        if (!b) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid file length ",
                " with a type ",
                " for ",
                " message"
            ])), d, typeof d, i);
            throw new c({
                e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_IMAGE_FILE_LENGTH,
                errorCode: u.INVALID_FILE_LENGTH,
                expectedType: i,
                options: {
                    sendLogs: i === o("WAWebMsgType").MSG_TYPE.IMAGE ? 0.01 : true
                }
            });
        }
        return {
            mediaKey: p,
            fileSha256: m,
            fileEncSha256: l,
            fileLength: C,
            url: g,
            mimetype: _
        };
    }
    l.MediaMessageValidationError = c;
    l.isMediaMimeType = p;
    l.isVideoMimeType = _;
    l.getValidatedMediaMessageProperties = g;
}, 98);