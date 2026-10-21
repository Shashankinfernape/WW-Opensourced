__d("WAWebSTWImage", [
    "$InternalEnum",
    "WALogger",
    "WAWebMiscErrors",
    "WAWebPonyfillsFetch",
    "WAWebWamEnumImageSearchFailedErrorType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = n("$InternalEnum").Mirrored([
        "NO_INTERNET_CONNECTION",
        "NON_200_RESPONSE",
        "NULL_RESPONSE_BODY",
        "DECODE_OR_PARSE_ERROR",
        "NO_REDIRECT_URL",
        "CONSENT_FORM_IN_URL"
    ]);
    function d(e) {
        if (e instanceof o("WAWebMiscErrors").GoogleLensApiError) {
            switch(e.error){
                case c.NO_INTERNET_CONNECTION:
                    return o("WAWebWamEnumImageSearchFailedErrorType").IMAGE_SEARCH_FAILED_ERROR_TYPE.NETWORK_ERROR;
                case c.NON_200_RESPONSE:
                    return o("WAWebWamEnumImageSearchFailedErrorType").IMAGE_SEARCH_FAILED_ERROR_TYPE.NON_200_RESPONSE;
                case c.NULL_RESPONSE_BODY:
                    return o("WAWebWamEnumImageSearchFailedErrorType").IMAGE_SEARCH_FAILED_ERROR_TYPE.NULL_RESPONSE_BODY;
                case c.DECODE_OR_PARSE_ERROR:
                    return o("WAWebWamEnumImageSearchFailedErrorType").IMAGE_SEARCH_FAILED_ERROR_TYPE.DECODE_OR_PARSE_ERROR;
                case c.NO_REDIRECT_URL:
                    return o("WAWebWamEnumImageSearchFailedErrorType").IMAGE_SEARCH_FAILED_ERROR_TYPE.NO_REDIRECT_URL;
                case c.CONSENT_FORM_IN_URL:
                    return o("WAWebWamEnumImageSearchFailedErrorType").IMAGE_SEARCH_FAILED_ERROR_TYPE.CONSENT_FORM_IN_URL;
            }
        }
        return o("WAWebWamEnumImageSearchFailedErrorType").IMAGE_SEARCH_FAILED_ERROR_TYPE.UNKNOWN_ERROR;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const headers = new Headers;
            const a = new FormData;
            a.append("encoded_image", t, "imageForSearch.jpeg");
            try {
                const l = {
                    method: "POST",
                    body: a,
                    headers
                };
                let d;
                try {
                    d = yield r("WAWebPonyfillsFetch")(`https://lens.google.com/upload?${new URLSearchParams({
                        rjr: "1",
                        ep: "wil",
                        ctx: "wa1"
                    }).toString()}`, l);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Google Lens API fetch error"
                    ]))).tags("STW");
                    throw new (o("WAWebMiscErrors")).GoogleLensApiError(c.NON_200_RESPONSE);
                }
                if (!d.ok) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Google Lens API returned non successful response"
                    ]))).tags("STW");
                    throw new (o("WAWebMiscErrors")).GoogleLensApiError(c.NON_200_RESPONSE);
                }
                const m = new TextDecoder;
                const p = yield d.body?.getReader().read();
                if (p?.value == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "No search url returned while running image seach on web"
                    ]))).tags("STW");
                    throw new (o("WAWebMiscErrors")).GoogleLensApiError(c.NULL_RESPONSE_BODY);
                }
                const _ = m.decode(p?.value);
                const f = JSON.parse(_.slice(5));
                return f.redirect_url;
            } catch (error) {
                throw error instanceof o("WAWebMiscErrors").GoogleLensApiError ? error : new (o("WAWebMiscErrors")).GoogleLensApiError(c.DECODE_OR_PARSE_ERROR);
            }
        });
        return p.apply(this, arguments);
    }
    l.LensApiErrorType = c;
    l.getImageSearchWamErrorType = d;
    l.getImageSearchUrl = m;
}, 98);