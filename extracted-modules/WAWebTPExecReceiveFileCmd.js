__d("WAWebTPExecReceiveFileCmd", [
    "WATimeUtils",
    "WAWebCmd",
    "WAWebSchemaWebTPSharedSession",
    "WAWebTP3PBridge",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebWebTPSharedSessionUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ sessionId, utmCampaign }) {
        if (sessionId == null || sessionId.length === 0 || !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfEditAndShareEnabled()) {
            return false;
        }
        const i = o("WAWebTP3PBridge").WAWebTP3PBridge.getDefaultApp();
        if (i == null) {
            return false;
        }
        try {
            if (sessionId == null) {
                return false;
            }
            o("WAWebTPLoggingUtils").logPdfReceiverFileForwardedEvent(sessionId);
            o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardStart();
            s(sessionId).then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (e == null || e.fileBuffer == null) {
                        o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("forward_session_not_found", "Session not found or file buffer is null", sessionId);
                        throw r("err")("Session not found or file buffer is null");
                    }
                    const n = new File([
                        e.fileBuffer
                    ], e.fileName, {
                        type: "application/pdf"
                    });
                    yield o("WAWebWebTPSharedSessionUtils").clearWebTPSharedSessionFileBuffer(sessionId);
                    o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardComplete();
                    if (o("WAWebTPPdfViewerGatingUtils").isPdfPreviewBeforeSendEnabled()) {
                        o("WAWebTPLoggingUtils").logPdfReceiverPreviewOpenEvent(sessionId, utmCampaign);
                        o("WAWebCmd").Cmd.trigger("open_file_forward_modal_with_preview", n, {
                            showPreview: true,
                            onSend: function() {
                                o("WAWebTPLoggingUtils").logPdfReceiverPreviewSendEvent(sessionId);
                            },
                            onCancel: function() {
                                o("WAWebTPLoggingUtils").logPdfReceiverPreviewCancelEvent(sessionId);
                            }
                        });
                    } else {
                        o("WAWebCmd").Cmd.trigger("open_file_forward_modal", n);
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        } catch (e) {
            o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("forward_failed", "Exception during file forward", sessionId);
            o("WAWebWebTPSharedSessionUtils").clearWebTPSharedSessionFileBuffer(sessionId);
            return false;
        }
        return true;
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
            const n = yield t.get(e);
            if (n == null) {
                return null;
            }
            if (o("WATimeUtils").unixTime() > n.expiresAt) {
                yield t.remove(e);
                return null;
            }
            return n;
        });
        return u.apply(this, arguments);
    }
    l.default = e;
}, 98);