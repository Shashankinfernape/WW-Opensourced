__d("WAWebMmsClientMmsDeleteMdHistorySyncBlob", [
    "WABase64",
    "WABase64UrlSafe",
    "WAWebHttpErrors",
    "WAWebMmsClientFormatHashUrl",
    "WAWebMmsMediaTypes",
    "WAWebPonyfillsFetch",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ auth, companionUserSecret, directPath, encFilehash, encHandle, hostname }) {
            const u = directPath.split("?")[0];
            const c = new TextEncoder().encode(u);
            const d_md = o("WABase64").encodeB64UrlSafe(c);
            const HISTORY_SYNC = o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC;
            const p = r("WAWebMmsClientFormatHashUrl")({
                encFilehash,
                hostname,
                type: HISTORY_SYNC,
                query: {
                    token: o("WABase64UrlSafe").urlSafeBase64(encFilehash),
                    d_md,
                    auth,
                    e_handle: encHandle
                }
            });
            const headers = {};
            if (encHandle != null && companionUserSecret != null) {
                headers.Companion_User_Secret = companionUserSecret;
            }
            const f = yield r("WAWebPonyfillsFetch")(p, {
                method: "DELETE",
                headers
            });
            if (!f.ok) {
                throw new (o("WAWebHttpErrors")).HttpStatusCodeError(f.status, "MMS Delete error");
            }
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);