__d("WAWebBotMultiModalToasts", [
    "fbt",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("This file format is not supported.")
        }));
    }
    function d(e) {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("_j{\"*\":\"You can't share more than {number} items.\",\"_1\":\"You can't share more than 1 item.\"}", [
                s._plural(e, "number")
            ])
        }));
    }
    function m(e) {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("_j{\"*\":\"You can't share more than {number} items.\",\"_1\":\"You can't share more than 1 item.\"}", [
                s._plural(e, "number")
            ])
        }));
    }
    function p(e) {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("_j{\"*\":\"Media is too large. {maxMb} MB is the max.\"}", [
                s._param("maxMb", e, [
                    0
                ])
            ])
        }));
    }
    function _() {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("You can't share images and documents to Meta AI at the same time.")
        }));
    }
    function f({ hasAudio, hasDocument, hasImage, hasVideo }) {
        if (hasVideo && hasAudio && hasImage) {
            return s._("Can't send video, audio, or images to Meta AI at this time");
        }
        if (hasVideo && hasAudio && hasDocument) {
            return s._("Can't send video, audio, or documents to Meta AI at this time");
        }
        return null;
    }
    function g(hasVideo, hasAudio, hasImage, hasDocument) {
        if (hasVideo && hasImage) {
            return s._("Can't send video or images to Meta AI at this time");
        }
        if (hasVideo && hasDocument) {
            return s._("Can't send video or documents to Meta AI at this time");
        }
        if (hasAudio && hasVideo) {
            return s._("Can't send audio or video files to Meta AI at this time");
        }
        if (hasAudio && hasImage) {
            return s._("Can't send audio or images to Meta AI at this time");
        }
        if (hasAudio && hasDocument) {
            return s._("Can't send audio or documents to Meta AI at this time");
        }
        return null;
    }
    function h({ hasAudio, hasDocument, hasImage, hasVideo }) {
        if (hasVideo) {
            return s._("Can't send a video file to Meta AI at this time");
        }
        if (hasAudio) {
            return s._("Can't send an audio file to Meta AI at this time");
        }
        if (hasImage) {
            return s._("Can't send image files to Meta AI at this time");
        }
        if (hasDocument) {
            return s._("Can't send documents to Meta AI at this time");
        }
        return null;
    }
    function y(e) {
        const n = new Set(e);
        const hasVideo = n.has("video");
        const hasAudio = n.has("audio");
        const hasImage = n.has("image");
        const hasDocument = n.has("document");
        if (n.size >= 3) {
            return f({
                hasAudio,
                hasDocument,
                hasImage,
                hasVideo
            }) ?? C();
        }
        if (n.size === 2) {
            return g(hasVideo, hasAudio, hasImage, hasDocument) ?? C();
        }
        return h({
            hasAudio,
            hasDocument,
            hasImage,
            hasVideo
        }) ?? C();
    }
    function C() {
        return s._("Can't send this type of files to Meta AI at this time");
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b(e) {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: y(e)
        }));
    }
    function v(e) {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("_j{\"*\":\"{number} items couldn't be sent\",\"_1\":\"1 item couldn't be sent\"}", [
                s._plural(e, "number")
            ])
        }));
    }
    l.showUnsupportedFileFormatToast = c;
    l.showDocumentUploadLimitExceededToast = d;
    l.showMediaSendLimitExceededToast = m;
    l.showMediaTooLargeToast = p;
    l.showMixedMediaTypeToast = _;
    l.getUnsupportedMimeTypesMessage = y;
    l.showUnsupportedMimeTypesToast = b;
    l.showSendMediaFailedItemToast = v;
}, 226);