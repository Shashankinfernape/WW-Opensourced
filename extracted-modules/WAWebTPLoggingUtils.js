__d("WAWebTPLoggingUtils", [
    "WAAbortError",
    "WACustomError",
    "WAHashStringToNumber",
    "WAWebWamEnumWebtpEventType",
    "WAWebWamEnumWebtpSourceType",
    "WAWebWebcWebtpPdfViewerWamEvent",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const d = r("justknobx")._("3702") ?? 100;
    const m = r("justknobx")._("4883") ?? 1;
    const p = r("justknobx")._("4885") ?? 1;
    const _ = r("justknobx")._("5236") ?? 10;
    function f(e, t = d) {
        if (e == null || e === "") {
            return true;
        }
        return o("WAHashStringToNumber").hashStringToNumber(e) % t === 0;
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (f(e, m)) {
                new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                    webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
                    webtpSessionId: e,
                    webtpFileSize: t,
                    webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER,
                    webtpTelemetryData: JSON.stringify({
                        sampleRate: m
                    })
                }).commit();
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n, r, o) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
            if (f(e, d)) {
                new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                    webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.CLOSE,
                    webtpSessionId: e,
                    webtpFileSize: t,
                    webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER,
                    webtpTelemetryData: JSON.stringify({
                        anrCount: n,
                        longAnimationFrameCount: r.count,
                        longAnimationFrameEntries: r.entries,
                        browserMetrics: a,
                        sampleRate: d
                    })
                }).commit();
            }
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n) {
        if (f(t, p)) {
            const r = e === "media_viewer_header" ? o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.MEDIA_VIEWER_HEADER : e === "message_bubble" ? o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.MESSAGE_BUBBLE : e === "pdf_viewer_error_screen" ? o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER_ERROR_SCREEN : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })();
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.DOWNLOAD_DOCUMENT_CLICK,
                webtpSource: r,
                webtpSessionId: t,
                webtpFileSize: n,
                webtpTelemetryData: JSON.stringify({
                    sampleRate: p
                })
            }).commit();
        }
    }
    function v({ appPerfData: t, filehash: n, sdkVersion: r, size: a }) {
        if (f(n, d)) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.APP_PERF_DATA,
                webtpSessionId: n,
                webtpFileSize: a,
                webtpTelemetryData: JSON.stringify(babelHelpers.extends({}, t, {
                    sampleRate: d
                })),
                webtpSdkVersion: r,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER
            }).commit();
        }
    }
    function S(e, t, n, r) {
        if (f(t, d)) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.TELEMETRY,
                webtpSessionId: t,
                webtpFileSize: n,
                webtpTelemetryData: JSON.stringify(babelHelpers.extends({}, e, {
                    sampleRate: d
                })),
                webtpSdkVersion: r,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER
            }).commit();
        }
    }
    function R({ filehash: t, sdkVersion: n, size: r, telemetryEvent: a }) {
        const { firstPageAjsTotalTime: i, firstPageRenderTime: l, timeTillFirstPage: s } = a;
        if (s != null && f(t, d)) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.TELEMETRY,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER,
                webtpSessionId: t,
                webtpFileSize: r,
                webtpSdkVersion: n,
                webtpTelemetryData: JSON.stringify({
                    action: "viewer_render_time",
                    timeTillFirstPage: s,
                    firstPageAjsTotalTime: i,
                    firstPageRenderTime: l,
                    sampleRate: d
                })
            }).commit();
        }
    }
    function L(e) {
        return ((t)=>{
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "ajsError" && "type" in t && "stackTrace" in t && "errorCode" in t && "currEvent" in t && "memInfo" in t) {
                const { type: n, stackTrace: r, errorCode: o, currEvent: a, memInfo: i } = t;
                return {
                    errorType: "ajsError",
                    errorMessage: `${o ?? ""}${a != null ? `, currEvent: ${a}` : ""}`,
                    errorStack: r ?? "",
                    errorCode: n ?? "",
                    telemetryData: JSON.stringify({
                        memInfo: i
                    })
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "ajsError" && "type" in t && "errorMessage" in t) {
                const { type: l, errorMessage: s } = t;
                return {
                    errorType: "ajsError",
                    errorMessage: s ?? "",
                    errorStack: "",
                    errorCode: l ?? ""
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "getContentDataFailed" && "error" in t && "size" in t) {
                const { error: u, size: c } = t;
                return {
                    errorType: "getContentDataFailed",
                    errorMessage: u,
                    errorStack: "",
                    errorCode: "",
                    telemetryData: JSON.stringify({
                        size: c
                    })
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "ajsInitFailed") {
                return {
                    errorType: "ajsInitFailed",
                    errorMessage: "",
                    errorStack: "",
                    errorCode: ""
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "externalInitFailed" && "error" in t && "code" in t) {
                const { error: d, code: m } = t;
                return {
                    errorType: "externalInitFailed",
                    errorMessage: d,
                    errorStack: "",
                    errorCode: m
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "unknownCommand" && "apiName" in t) {
                const p = t.apiName;
                return {
                    errorType: "unknownCommand",
                    errorMessage: `apiName: ${p}`,
                    errorStack: "",
                    errorCode: ""
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "getContentBufferFailed" && "error" in t) {
                const _ = t.error;
                return {
                    errorType: "getContentBufferFailed",
                    errorMessage: _,
                    errorStack: "",
                    errorCode: ""
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "fileHandleNotFound" && "apiName" in t) {
                const f = t.apiName;
                return {
                    errorType: "fileHandleNotFound",
                    errorMessage: `apiName: ${f}`,
                    errorStack: "",
                    errorCode: ""
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.message === "unexpectedAjsCommand" && "apiName" in t) {
                const g = t.apiName;
                return {
                    errorType: "unexpectedAjsCommand",
                    errorMessage: `apiName: ${g}`,
                    errorStack: "",
                    errorCode: ""
                };
            }
            return {
                errorType: "unknown",
                errorMessage: JSON.stringify(e),
                errorStack: "",
                errorCode: ""
            };
        })(e);
    }
    function E(e) {
        if (e == null || typeof e !== "object" || e instanceof o("WACustomError").TimeoutError || !("level" in e) || !("message" in e) || e.level !== "error") {
            return null;
        }
        const t = e.message;
        if (t === "ajsError" || t === "getContentDataFailed" || t === "ajsInitFailed" || t === "externalInitFailed" || t === "unknownCommand" || t === "getContentBufferFailed" || t === "fileHandleNotFound" || t === "unexpectedAjsCommand") {
            return e;
        }
        return null;
    }
    function k(e) {
        if (e == null || typeof e !== "object") {
            return null;
        }
        if (e instanceof Error || "stack" in e && "message" in e) {
            return e;
        }
        return null;
    }
    function I(e) {
        if (e == null || typeof e !== "object" || e instanceof o("WACustomError").TimeoutError) {
            return null;
        }
        if ("type" in e && "message" in e && "stack" in e && "sdkVersion" in e && typeof e.type === "string" && typeof e.message === "string" && typeof e.stack === "string" && typeof e.sdkVersion === "string") {
            return {
                type: e.type,
                message: e.message,
                stack: e.stack,
                sdkVersion: e.sdkVersion
            };
        }
        return null;
    }
    function T(e, t) {
        if (f(e, _)) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
                webtpSessionId: e,
                webtpFileSize: t,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL,
                webtpTelemetryData: JSON.stringify({
                    sampleRate: _
                })
            }).commit();
        }
    }
    function D(e, t, n, r) {
        if (f(t, d)) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.TELEMETRY,
                webtpSessionId: t,
                webtpFileSize: n,
                webtpTelemetryData: JSON.stringify(babelHelpers.extends({}, e, {
                    sampleRate: d
                })),
                webtpSdkVersion: r,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL
            }).commit();
        }
    }
    function x(e, t, n) {
        if (e instanceof o("WAAbortError").AbortError) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                webtpErrorType: "abort",
                webtpErrorCode: "ABORT",
                webtpErrorMessage: e.message,
                webtpErrorStack: e.stack ?? "",
                webtpSessionId: t,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL,
                webtpFileSize: n
            }).commit();
            return;
        }
        if (e instanceof o("WACustomError").TimeoutError) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                webtpErrorType: "timeout",
                webtpErrorCode: "TIMEOUT",
                webtpErrorMessage: e.message,
                webtpErrorStack: e.stack ?? "",
                webtpSessionId: t,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL,
                webtpFileSize: n
            }).commit();
            return;
        }
        const i = E(e);
        if (i != null) {
            const s = L(i);
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                webtpErrorType: s.errorType,
                webtpErrorMessage: s.errorMessage,
                webtpErrorStack: s.errorStack,
                webtpErrorCode: s.errorCode,
                webtpTelemetryData: s.telemetryData ?? "",
                webtpSessionId: t,
                webtpFileSize: n,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL
            }).commit();
            return;
        }
        const u = I(e);
        if (u != null) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                webtpErrorType: u.type,
                webtpErrorCode: u.type,
                webtpErrorMessage: u.message,
                webtpErrorStack: u.stack,
                webtpSessionId: t,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL,
                webtpFileSize: n,
                webtpSdkVersion: u.sdkVersion
            }).commit();
            return;
        }
        const c = k(e);
        if (c != null) {
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                webtpErrorType: "error",
                webtpErrorCode: P(c),
                webtpErrorMessage: c.message,
                webtpErrorStack: c.stack ?? "",
                webtpSessionId: t,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL,
                webtpFileSize: n
            }).commit();
            return;
        }
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
            webtpErrorType: "other",
            webtpErrorMessage: String(e),
            webtpSessionId: t,
            webtpFileSize: n,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.THUMBNAIL
        }).commit();
    }
    const $ = [
        "webassembly",
        "wasm",
        "out of memory",
        "aborted(",
        "unreachable"
    ];
    function P(e) {
        const t = typeof e.message === "string" ? e.message.toLowerCase() : "";
        if ($.some((e)=>t.includes(e))) {
            return "WASM_ERROR";
        }
        const n = e.name;
        if (n == null || n === "") {
            return "ERROR";
        }
        return n;
    }
    function N(e, t, n) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e instanceof o("WACustomError").TimeoutError) {
                new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                    webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                    webtpErrorType: "timeout",
                    webtpErrorMessage: e.message,
                    webtpErrorStack: e.stack ?? "",
                    webtpSessionId: t,
                    webtpFileSize: n,
                    webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER
                }).commit();
                return;
            }
            const a = E(e);
            if (a != null) {
                const l = L(a);
                new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                    webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                    webtpErrorType: l.errorType,
                    webtpErrorMessage: l.errorMessage,
                    webtpErrorStack: l.errorStack,
                    webtpErrorCode: l.errorCode,
                    webtpTelemetryData: l.telemetryData ?? "",
                    webtpSessionId: t,
                    webtpFileSize: n,
                    webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER
                }).commit();
                return;
            }
            const s = k(e);
            if (s != null) {
                new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                    webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                    webtpErrorType: "error",
                    webtpErrorMessage: s.message,
                    webtpErrorStack: s.stack ?? "",
                    webtpSessionId: t,
                    webtpFileSize: n,
                    webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER
                }).commit();
                return;
            }
            new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
                webtpErrorType: "other",
                webtpErrorMessage: String(e),
                webtpSessionId: t,
                webtpFileSize: n,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER
            }).commit();
        });
        return M.apply(this, arguments);
    }
    function w(e, t) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_SHARER_OPEN,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_SHARER,
            webtpSessionId: e,
            webtpFileSize: t
        }).commit();
    }
    function A(e, t) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_SHARER_CANCEL,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_SHARER,
            webtpSessionId: e,
            webtpTelemetryData: JSON.stringify({
                stage: t
            })
        }).commit();
    }
    function F(e, t, n, r) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_SHARER_CONTINUE,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_SHARER,
            webtpSessionId: e,
            webtpFileSize: t,
            webtpTelemetryData: B(n, r)
        }).commit();
    }
    function O(e, t, n, r) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_SHARER_SUCCESS,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_SHARER,
            webtpSessionId: e,
            webtpFileSize: t,
            webtpTelemetryData: B(n, r)
        }).commit();
    }
    function B(e, t) {
        if (!(e == null && t == null)) {
            const n = {};
            if (e != null) {
                n.continuationTarget = e;
            }
            if (t != null) {
                n.uid = t;
            }
            return JSON.stringify(n);
        }
    }
    function W(e, t, n, r, a) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_SHARER_ERROR,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_SHARER,
            webtpErrorType: e,
            webtpErrorMessage: t,
            webtpErrorStack: a,
            webtpSessionId: n,
            webtpTelemetryData: r != null ? JSON.stringify({
                continuationTarget: r
            }) : void 0
        }).commit();
    }
    function q(e) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_OPEN,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e
        }).commit();
    }
    function U(e, t) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_SUCCESS,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e,
            webtpFileSize: t
        }).commit();
    }
    function V(e, t, n, r) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_ERROR,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpErrorType: e,
            webtpErrorMessage: t,
            webtpErrorStack: r,
            webtpSessionId: n
        }).commit();
    }
    function H(e) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_CANCEL,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e
        }).commit();
    }
    function G(e, t) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_CONTINUE,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e,
            webtpTelemetryData: t != null ? JSON.stringify({
                utmCampaign: t
            }) : void 0
        }).commit();
    }
    function z(e) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_FILE_FORWARDED,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e
        }).commit();
    }
    function j() {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_SHARER_AUTO_PROCEED_CHECKBOX,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_SHARER
        }).commit();
    }
    function K(e) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_SHARER_CONTINUE_AUTO_PROCEED,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_SHARER,
            webtpTelemetryData: e != null ? JSON.stringify({
                continuationTarget: e
            }) : void 0
        }).commit();
    }
    function Q(e, t) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_CONTINUE,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e,
            webtpTelemetryData: JSON.stringify(babelHelpers.extends({
                action: "preview_open"
            }, t != null ? {
                utmCampaign: t
            } : void 0))
        }).commit();
    }
    function X(e) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_FILE_FORWARDED,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e,
            webtpTelemetryData: JSON.stringify({
                action: "preview_send"
            })
        }).commit();
    }
    function Y(e) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.PDF_RECEIVER_CANCEL,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_RECEIVER,
            webtpSessionId: e,
            webtpTelemetryData: JSON.stringify({
                action: "preview_cancel"
            })
        }).commit();
    }
    function J(e, t) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent")).WebcWebtpPdfViewerWamEvent({
            webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.EDIT_MENU_CLICK,
            webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE.PDF_VIEWER,
            webtpSessionId: e,
            webtpTelemetryData: t
        }).commit();
    }
    function Z(e, t, n) {
        J(n, JSON.stringify({
            action: "edit_in_acrobat_click",
            hasUnsavedAnnotations: e,
            source: t
        }));
    }
    function ee({ filehash: t, hasSkipConfirmationPref: n }) {
        J(t, JSON.stringify({
            action: "edit_pdf_click",
            hasSkipConfirmationPref: n
        }));
    }
    function te(e, t) {
        if (e === t) {
            return "select";
        }
        if (t === "shape") {
            return "draw";
        }
        return t;
    }
    function ne(e) {
        J(e, JSON.stringify({
            action: "edit_mode_enter"
        }));
    }
    function re(e, t) {
        J(t, JSON.stringify({
            action: "tool_select",
            tool: e
        }));
    }
    function oe(e, t, n) {
        J(n, JSON.stringify({
            action: "annotation_applied",
            tool: e,
            source: t
        }));
    }
    function ae(e, t) {
        J(t, JSON.stringify({
            action: "style_change",
            kind: e
        }));
    }
    function ie(e, t, n) {
        J(t, JSON.stringify(n != null ? {
            action: "edit_action",
            op: e,
            method: n
        } : {
            action: "edit_action",
            op: e
        }));
    }
    function le(e, t) {
        J(t, JSON.stringify({
            action: "annotated_send",
            hadAnnotations: e
        }));
    }
    function se(e, t) {
        J(t, JSON.stringify({
            action: "annotated_download",
            hadAnnotations: e
        }));
    }
    function ue(e, t) {
        J(t, JSON.stringify({
            action: "annotated_discard",
            hadAnnotations: e
        }));
    }
    function ce(e, t) {
        e: {
            const n = e;
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.action === "annotation_applied" && "source" in n && "tool" in n) {
                const { source: r, tool: o } = n;
                oe(o, r, t);
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.action === "style_change" && "kind" in n) {
                const a = n.kind;
                ae(a, t);
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.action === "edit_action" && "op" in n) {
                const i = n.op;
                ie(i, t, e.method);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
        }
    }
    l.logDocumentOpenEvent = g;
    l.logDocumentCloseEvent = y;
    l.logDownloadDocumentClickEvent = b;
    l.logAppPerfDataEvent = v;
    l.logAppTelemetryDataEvent = S;
    l.logViewerRenderTimeEvent = R;
    l.convertTelemetryErrorEventToLogEvent = L;
    l.asTelemetryError = E;
    l.asError = k;
    l.logThumbnailRenderAttemptEvent = T;
    l.logThumbnailTelemetryDataEvent = D;
    l.logThumbnailRenderErrorEvent = x;
    l.getThumbnailNativeErrorCode = P;
    l.logRenderErrorEvent = N;
    l.logPdfSharerOpenEvent = w;
    l.logPdfSharerCancelEvent = A;
    l.logPdfSharerContinueEvent = F;
    l.logPdfSharerSuccessEvent = O;
    l.logPdfSharerErrorEvent = W;
    l.logPdfReceiverOpenEvent = q;
    l.logPdfReceiverSuccessEvent = U;
    l.logPdfReceiverErrorEvent = V;
    l.logPdfReceiverCancelEvent = H;
    l.logPdfReceiverContinueEvent = G;
    l.logPdfReceiverFileForwardedEvent = z;
    l.logPdfSharerAutoProceedCheckboxEvent = j;
    l.logPdfSharerContinueAutoProceedEvent = K;
    l.logPdfReceiverPreviewOpenEvent = Q;
    l.logPdfReceiverPreviewSendEvent = X;
    l.logPdfReceiverPreviewCancelEvent = Y;
    l.logEditInAcrobatClickEvent = Z;
    l.logEditPdfClickEvent = ee;
    l.toolSelectForToolClick = te;
    l.logAnnotationEditModeEnterEvent = ne;
    l.logAnnotationToolSelectEvent = re;
    l.logAnnotationAppliedEvent = oe;
    l.logAnnotationStyleChangeEvent = ae;
    l.logAnnotationEditActionEvent = ie;
    l.logAnnotatedSendEvent = le;
    l.logAnnotatedDownloadEvent = se;
    l.logAnnotatedDiscardEvent = ue;
    l.logAnnotationInteractionFromBridge = ce;
}, 98);