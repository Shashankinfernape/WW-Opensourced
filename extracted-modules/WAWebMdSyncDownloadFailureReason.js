__d("WAWebMdSyncDownloadFailureReason", [
    "WAWebHttpErrors",
    "WAWebMmsClientErrors"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e instanceof o("WAWebHttpErrors").HttpTimedOutError) {
            return "http_timeout";
        }
        if (e instanceof o("WAWebHttpErrors").HttpNetworkError) {
            return "http_network_error";
        }
        if (e instanceof o("WAWebMmsClientErrors").MediaNotFoundError) {
            return "media_not_found";
        }
        if (e instanceof o("WAWebMmsClientErrors").MediaTooLargeError) {
            return "media_too_large";
        }
        if (e instanceof o("WAWebMmsClientErrors").MediaInvalidError) {
            return "media_invalid";
        }
        if (e instanceof o("WAWebMmsClientErrors").MMSUnauthorizedError) {
            return "mms_unauthorized";
        }
        if (e instanceof o("WAWebMmsClientErrors").MMSForbiddenError) {
            return "mms_forbidden";
        }
        if (e instanceof o("WAWebMmsClientErrors").MMSThrottleError) {
            return "mms_throttled";
        }
        if (e instanceof o("WAWebHttpErrors").MmsDownloadFilehashMismatchError) {
            return "media_filehash_mismatch";
        }
        if (e instanceof o("WAWebHttpErrors").HttpInvalidResponseError) {
            return "http_invalid_response";
        }
        if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError) {
            if (e.status >= 500) {
                return "http_server_error";
            }
            if (e.status >= 400) {
                return "http_client_error";
            }
            return "http_unexpected_status";
        }
        return "unknown_download_error";
    }
    l.getMdSyncDownloadFailureReason = e;
}, 98);