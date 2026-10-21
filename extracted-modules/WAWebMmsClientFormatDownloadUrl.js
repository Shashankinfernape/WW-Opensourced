__d("WAWebMmsClientFormatDownloadUrl", [
    "WABase64UrlSafe",
    "WALogger",
    "WAWebABProps",
    "WAWebSharedConstants",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u({ byteRange, directPath, downloadBucket, encFilehash, hostname, mode, type }) {
        if (!r("isStringNullOrEmpty")(directPath)) {
            return c({
                encFilehash,
                hostname,
                directPath,
                query: {
                    mode,
                    bytestart: byteRange == null ? undefined : byteRange.start.toString(),
                    byteend: byteRange == null ? undefined : byteRange.end.toString(),
                    [o("WAWebSharedConstants").MMS_URL_MEDIA_TYPE_SEARCH_PARAM]: type,
                    [o("WAWebSharedConstants").IS_MMS_URL_SEARCH_PARAM]: ""
                },
                downloadBucket,
                type
            });
        }
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[mms] missing direct path, media type: ",
            ""
        ])), type).sendLogs("media-fault: missing direct path");
        throw r("err")("No direct path is available for download, abort");
    }
    function c({ directPath, downloadBucket, encFilehash, hostname, query, type }) {
        const c = new URL(directPath, `https://${hostname}`);
        if (c.hostname !== hostname) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "url.hostname: ",
                ", hostname: ",
                ", directPath: ",
                ""
            ])), c.hostname, hostname, directPath).sendLogs("malicious directPath");
            throw r("err")("malicious directPath");
        }
        const d = c.searchParams || new URLSearchParams(c.search);
        if (encFilehash != null && encFilehash !== "") {
            d.set("hash", o("WABase64UrlSafe").urlSafeBase64(encFilehash));
        }
        if (downloadBucket != null) {
            d.set("_nc_cat", downloadBucket.toString());
        }
        const m = o("WAWebABProps").getABPropConfigValue("low_cache_hit_rate_media_types");
        if (m != null) {
            const p = m.split(",");
            if (p.includes(type)) {
                d.set("_nc_map", "whatsapp-nofna");
            }
        }
        Object.keys(query).forEach((e)=>{
            const t = query[e];
            if (t != null) {
                d.set(e, t);
            }
        });
        return `https://${c.host}${c.pathname}?${d.toString()}`;
    }
    l.default = u;
}, 98);