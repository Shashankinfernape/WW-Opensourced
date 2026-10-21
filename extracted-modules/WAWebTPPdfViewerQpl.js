__d("WAWebTPPdfViewerQpl", [
    "WAWebEnvironment",
    "WAWebQplFlowWrapper",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("qpl")._(891426979, "2244");
    function s(e) {
        window.addEventListener("beforeunload", e);
        return function() {
            window.removeEventListener("beforeunload", e);
        };
    }
    const u = (()=>{
        function t() {}
        const n = t.prototype;
        n.$3 = function(t) {
            this.$1?.end(t);
            this.$1 = null;
            this.$2?.();
        };
        n.$4 = function(t, n) {
            this.$1?.addPoint(t, n);
        };
        n.initialize = function(n) {
            const t = this;
            if (this.$1 != null) {
                this.$3(105);
            }
            this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
                trackedForLoss: true,
                cancelOnUnload: true,
                annotations: {
                    string: {
                        sub_platform: r("WAWebEnvironment").getSubPlatform(),
                        event_type: n
                    }
                }
            });
            this.$2 = s(function() {
                t.$4("before_unload");
                t.$3(706);
            });
        };
        n.pdfPreviewOpen = function() {
            this.$4("pdf_preview_open");
        };
        n.pdfPreviewClose = function() {
            this.$4("pdf_preview_close");
            this.$3(105);
        };
        n.pdfFetchStart = function() {
            this.$4("pdf_fetch_start");
        };
        n.pdfFetchEnd = function() {
            this.$4("pdf_fetch_end");
        };
        n.preloadStart = function() {
            this.$4("preload_start");
        };
        n.preloadEnd = function() {
            this.$4("preload_end");
        };
        n.preloadError = function() {
            this.$4("preload_error");
            this.$3(3);
        };
        n.appReady = function() {
            this.$4("app_ready");
        };
        n.appError = function() {
            this.$4("app_error");
        };
        n.renderPdfStart = function() {
            this.$4("render_pdf_start");
        };
        n.renderPdfEnd = function() {
            this.$4("render_pdf_end");
            this.$3(2);
        };
        n.renderPdfError = function() {
            this.$4("render_pdf_error");
            this.$3(3);
        };
        n.addIframePoint = function(t, n, r) {
            if (n != null) {
                this.$1?.addPoint(t, {
                    timestamp: n,
                    data: r
                });
            } else {
                this.$4(t, {
                    data: r
                });
            }
        };
        n.renderThumbnailStart = function() {
            this.$4("render_thumbnail_start");
        };
        n.renderThumbnailError = function() {
            this.$4("render_thumbnail_error");
            this.$3(3);
        };
        n.renderThumbnailEnd = function() {
            this.$4("render_thumbnail_end");
            this.$3(2);
        };
        n.sharerModalOpen = function() {
            this.$4("sharer_modal_open");
        };
        n.sharerAppReady = function() {
            this.$4("sharer_app_ready");
        };
        n.sharerUserCancel = function() {
            this.$4("sharer_user_cancel");
            this.$3(4);
        };
        n.sharerUserContinue = function() {
            this.$4("sharer_user_continue");
        };
        n.sharerGetPdfStart = function() {
            this.$4("sharer_get_pdf_start");
        };
        n.sharerGetPdfEnd = function() {
            this.$4("sharer_get_pdf_end");
        };
        n.sharerSessionCreated = function() {
            this.$4("sharer_session_created");
        };
        n.sharerAdobeOpenStart = function() {
            this.$4("sharer_adobe_open_start");
        };
        n.sharer3pGetPdfReceived = function() {
            this.$4("sharer_3p_get_pdf_received");
        };
        n.sharer3pPdfDataSent = function() {
            this.$4("sharer_3p_pdf_data_sent");
        };
        n.sharerSuccess = function() {
            this.$4("sharer_success");
            this.$3(2);
        };
        n.sharerError = function() {
            this.$4("sharer_error");
            this.$3(3);
        };
        n.sharerTimeout = function() {
            this.$4("sharer_3p_timeout");
            this.$3(3);
        };
        n.receiverPageOpen = function() {
            this.$4("receiver_page_open");
        };
        n.receiverBridgeCreated = function() {
            this.$4("receiver_bridge_created");
        };
        n.receiverBridgeError = function() {
            this.$4("receiver_bridge_error");
            this.$3(3);
        };
        n.receiverGetPdfSent = function() {
            this.$4("receiver_get_pdf_sent");
        };
        n.receiverPdfDataReceived = function() {
            this.$4("receiver_pdf_data_received");
        };
        n.receiverValidationStart = function() {
            this.$4("receiver_validation_start");
        };
        n.receiverValidationPass = function() {
            this.$4("receiver_validation_pass");
        };
        n.receiverValidationWarn = function() {
            this.$4("receiver_validation_warn");
        };
        n.receiverValidationFail = function() {
            this.$4("receiver_validation_fail");
            this.$3(3);
        };
        n.receiverFileTooLarge = function() {
            this.$4("receiver_file_too_large");
            this.$3(3);
        };
        n.receiverSessionNotFound = function() {
            this.$4("receiver_session_not_found");
            this.$3(3);
        };
        n.receiverStoreStart = function() {
            this.$4("receiver_store_start");
        };
        n.receiverStoreEnd = function() {
            this.$4("receiver_store_end");
        };
        n.receiverStoreError = function() {
            this.$4("receiver_store_error");
            this.$3(3);
        };
        n.receiverTimeout = function() {
            this.$4("receiver_timeout");
            this.$3(3);
        };
        n.receiverUserContinue = function() {
            this.$4("receiver_user_continue");
            this.$3(2);
        };
        n.receiverUserCancel = function() {
            this.$4("receiver_user_cancel");
            this.$3(4);
        };
        n.receiverForwardStart = function() {
            this.$4("receiver_forward_start");
        };
        n.receiverForwardComplete = function() {
            this.$4("receiver_forward_complete");
        };
        return t;
    })();
    const c = new u;
    l.WebTPPdfViewerQpl = u;
    l.pdfViewerQpl = c;
}, 98);