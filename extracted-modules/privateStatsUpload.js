__d("privateStatsUpload", [
    "Promise",
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WAPromiseRetryLoop",
    "WATimeUtils",
    "WAWamStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = "https://dit.whatsapp.net/deidentified_telemetry";
    const y = "245118376424571|3e7d275052f1522bf3200afcf53841a7";
    const p_1 = 0;
    const b = "WAMEventBuffer.dat";
    const v = 3;
    const S = 9;
    const R = 111000;
    const L = 3067002;
    const E = 3067003;
    const k = 3067004;
    function I(e) {
        return {
            result: e.result,
            httpResponseCode: e.httpResponseCode,
            uploadTime: o("WATimeUtils").monotonicTimeSince(e.uploadStartTime)
        };
    }
    function T(e, t, n, r) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a, i) {
            if ((yield o("WAWamStorage").privateStatsKillSwitchGetBlockedToken()) === y) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Removing private stats buffer without submitting it (kill switch)"
                ])));
                return o("WAWamStorage").removeBufferByKey(a.key).then(()=>{
                    t();
                });
            }
            const uploadStartTime = o("WATimeUtils").monotonicTime();
            const d = yield i();
            if (d == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Couldn't get token to submit a private stats buffer"
                ])));
                t();
                return;
            }
            const m = new FormData;
            m.append("access_token", y);
            const p = yield o("WACryptoHmac").hmacSha256(d.sharedSecret, a.content);
            const _ = o("WABase64").encodeB64UrlSafe(d.token, true);
            const f = o("WABase64").encodeB64UrlSafe(p, true);
            const v = `${_}+${f}`;
            m.append("credential", v);
            m.append("message", new Blob([
                a.content
            ], {
                type: "application/octet-stream"
            }), b);
            m.append("meta_data", JSON.stringify({
                t: o("WATimeUtils").unixTime(),
                p: p_1
            }));
            const S = {
                method: "POST",
                body: m,
                "Content-Type": "multipart/form-data"
            };
            let R;
            try {
                R = yield fetch(h, S);
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Upload of a private stats buffer failed: ",
                    ""
                ])), error);
                r({
                    uploadStartTime,
                    result: "error-other"
                });
                return;
            }
            const R_status = R.status;
            const E = (n)=>{
                t({
                    uploadStartTime,
                    httpResponseCode: R_status,
                    result: n
                });
            };
            const k = (t)=>{
                r({
                    uploadStartTime,
                    httpResponseCode: R_status,
                    result: t
                });
            };
            switch(R_status){
                case 200:
                    return o("WAWamStorage").removeBufferByKey(a.key).then(()=>{
                        E("success");
                    });
                case 429:
                    E("error-server-other");
                    return;
                case 401:
                    return (g || (g = n("Promise"))).all([
                        o("WAWamStorage").privateStatsKillSwitchSet(y),
                        o("WAWamStorage").removeBufferByKey(a.key)
                    ]).then(()=>{
                        E("error-access-token");
                    });
                case 400:
                    {
                        const I = yield x(R);
                        const { result, shouldRetry } = I;
                        const $ = {
                            uploadStartTime,
                            httpResponseCode: R_status,
                            result
                        };
                        if (shouldRetry === "retry") {
                            r($);
                        } else {
                            t($);
                        }
                        return;
                    }
                case 500:
                    k("error-server-other");
                    return;
            }
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Unsupported response status code from PrivateStats upload request: ",
                ""
            ])), R_status);
            k("error-other");
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield e.json().catch(()=>{});
            if (typeof t !== "object") {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to parse error response 400 from PrivateStats upload request or parsed response is not an object"
                ])));
                return {
                    result: "error-other",
                    shouldRetry: "retry"
                };
            }
            const t_error = t.error;
            if (typeof t_error !== "object") {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Incorrect or missing error entry in the error response 400 from PrivateStats upload request"
                ])));
                return {
                    result: "error-other",
                    shouldRetry: "retry"
                };
            }
            const { code, error_subcode } = t_error;
            if (typeof code !== "number" || typeof error_subcode !== "number") {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Incorrect code or subcode in the error response 400 from PrivateStats upload request"
                ])));
                return {
                    result: "error-other",
                    shouldRetry: "retry"
                };
            }
            switch(code){
                case S:
                    return {
                        result: "error-server-other",
                        shouldRetry: "no-retry"
                    };
                case R:
                    switch(error_subcode){
                        case L:
                            return {
                                result: "error-parsing",
                                shouldRetry: "retry"
                            };
                        case E:
                            return {
                                result: "error-decoding",
                                shouldRetry: "retry"
                            };
                        case k:
                            return {
                                result: "error-credential",
                                shouldRetry: "retry"
                            };
                        default:
                            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "Unsupported subcode value in the error response 400 from PrivateStats upload request: ",
                                ""
                            ])), error_subcode);
                            return {
                                result: "error-other",
                                shouldRetry: "retry"
                            };
                    }
                default:
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Unsupported code value in the error response 400 from PrivateStats upload request: ",
                        ""
                    ])), code);
                    return {
                        result: "error-other",
                        shouldRetry: "retry"
                    };
            }
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        const r = e.map((e)=>{
            let n = v;
            const metrics = [];
            const a = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
                name: "uploadPrivateStatsBuffer",
                timer: {
                    algo: {
                        type: "exponential",
                        first: 250
                    },
                    max: 1000
                },
                code: function(a) {
                    return T(a, function(e) {
                        const t = I(e);
                        metrics.push(t);
                        if (n <= 0) {
                            a();
                        } else {
                            n--;
                        }
                    }, e, t);
                }
            });
            a.start();
            return a.promise().then((t)=>{
                if (t != null) {
                    const n = I(t);
                    metrics.push(n);
                }
                return {
                    uploadedBufferKey: t?.result === "success" ? e.key : null,
                    metrics
                };
            });
        });
        return (g || (g = n("Promise"))).all(r).then((e)=>{
            const metrics = e.reduce((acc, item)=>{
                acc.push(...item.metrics);
                return acc;
            }, []);
            const uploadedBufferKeys = e.reduce((acc, item)=>{
                if (item.uploadedBufferKey != null) {
                    acc.push(item.uploadedBufferKey);
                }
                return acc;
            }, []);
            return {
                uploadedBufferKeys,
                metrics
            };
        });
    }
    l.upload_UNSAFE_INTERNAL_DO_NOT_USE = P;
}, 98);