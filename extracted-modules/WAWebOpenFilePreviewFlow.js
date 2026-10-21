__d("WAWebOpenFilePreviewFlow", [
    "WAWebCmd",
    "WAWebFileUtils",
    "WAWebMimeTypes",
    "WAWebResolveSupportedMediaTypes",
    "WAWebSendFilesToChats",
    "WAWebWamEnumMediaPickerOriginType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const n = o("WAWebFileUtils").getMimeTypeForFilepath(e.name) ?? o("WAWebMimeTypes").DOC_MIMES;
        return {
            file: e,
            type: o("WAWebFileUtils").FILETYPE.DOCUMENT,
            filename: e.name,
            mimetype: n
        };
    }
    function s({ chat, files, options }) {
        if (files.length !== 0) {
            const { origin = o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.DOCUMENT_PICKER, onCancel, onComplete } = options ?? {};
            const attachments = files.map(e);
            o("WAWebCmd").Cmd.attachMediaDrawer({
                chat,
                attachments,
                bot3pMediaInputAuthorized: o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(chat),
                fileOrigin: origin,
                onCancel,
                onComplete
            });
        }
    }
    function u(e, t, n, options) {
        const a = options ?? {};
        const { onCancel, onComplete, origin } = a;
        if (n.length > 0) {
            s({
                chat: e,
                files: [
                    t
                ],
                options: {
                    origin,
                    onCancel,
                    onComplete: function(o) {
                        if (o) {
                            r("WAWebSendFilesToChats")([].concat(n), [
                                t
                            ], {
                                batchNotifications: true,
                                totalChats: n.length + 1
                            });
                        }
                        onComplete?.(o);
                    }
                }
            });
        } else {
            s({
                chat: e,
                files: [
                    t
                ],
                options
            });
        }
    }
    l.openFilePreviewFlowMulticast = u;
}, 98);