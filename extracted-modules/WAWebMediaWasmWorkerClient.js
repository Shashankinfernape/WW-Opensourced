__d("WAWebMediaWasmWorkerClient", [
    "FBLogger",
    "Promise",
    "QPLUserFlow",
    "WAByteArray",
    "WACustomError",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WAWebCallsOnlyGating",
    "WAWebMediaWasmWorkerResource",
    "WAWebNoop",
    "WorkerBundleResource",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
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
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    const N = ()=>r("FBLogger")("media_platform").tags([
            "WAWebMediaWasmWorkerClient"
        ]);
    let M = o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ? null : O();
    function w() {
        if (M == null) {
            M = O();
        }
        return M;
    }
    const A = 30000;
    const F = 10000;
    function O() {
        const t = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebMediaWasmWorkerResource"));
        const n = new (o("WorkerMessagePort")).WorkerSyncedMessagePort(t, "WAWebMediaWasmWorker");
        n.addMessageListener("log", function({ logType, message }) {
            switch(logType){
                case "dev":
                    N().DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "from worker: ",
                        ""
                    ])), message);
                    break;
                case "error":
                    N().MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "worker error: ",
                        ""
                    ])), message);
                    break;
                default:
            }
        });
        n.addMessageListener("qpl", function(e) {
            B(e);
        });
        return n;
    }
    function B({ action, event }) {
        switch(action.type){
            case "point":
                {
                    r("QPLUserFlow").addPoint(event, action.pointName, {
                        instanceKey: action.instanceKey
                    });
                    break;
                }
            case "annotations":
                {
                    r("QPLUserFlow").addAnnotations(event, action.annotations, {
                        instanceKey: action.instanceKey
                    });
                    break;
                }
            default:
                N().MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Unknown QPL action type from worker: ",
                    ""
                ])), action.type);
        }
    }
    function W(e) {
        e?.addPoint("get_connected_worker_port_start");
        const t = w();
        return o("WAPromiseTimeout").promiseTimeout(t.fullyConnected, A).then((t)=>{
            e?.addPoint("get_connected_worker_port_end");
            return o("WAResultOrError").makeResult(t);
        }).catch((t)=>{
            e?.addPoint("get_connected_worker_port_fail", {
                string: {
                    workerPortFailure: t instanceof o("WACustomError").TimeoutError ? "timeout" : "runtime-error"
                }
            });
            if (t instanceof o("WACustomError").TimeoutError) {
                return o("WAResultOrError").makeError("worker-connection-timeout");
            }
            N().MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "worker-connection-runtime-error: ",
                ""
            ])), r("getErrorSafe")(t).message);
            return o("WAResultOrError").makeError("worker-connection-runtime-error");
        });
    }
    let q = 0;
    function U() {
        return ++q;
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = U();
            N().INFO(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "MB to worker"
            ])), t, Math.floor(e.byteLength / (1024 * 1024)));
            const n = yield W();
            if (!n.success) {
                return {
                    transferredBuffer: e,
                    result: o("WAResultOrError").makeError(n.error)
                };
            }
            const n_value = n.value;
            const a = n_value.onMessageOnce("calculateFilehashResponse", function(e) {
                return e.requestId === t;
            });
            n_value.postMessage({
                buffer: e,
                requestId: t,
                type: "calculateFilehashRequest"
            }, [
                e
            ]);
            const i = yield a;
            const { output, transferredBuffer } = i;
            if (output.success) {
                N().INFO(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "calculateFilehashInWorker[",
                    "]: received result from worker"
                ])), t);
                return {
                    transferredBuffer,
                    result: o("WAResultOrError").makeResult({
                        filehash: output.value
                    })
                };
            }
            N().MUSTFIX(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: failed: ",
                ""
            ])), t, output.error.errorMessage);
            return {
                transferredBuffer,
                result: o("WAResultOrError").makeError(output.error.errorType)
            };
        });
        return H.apply(this, arguments);
    }
    function G(e, t, n) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, length) {
            const r = U();
            N().INFO(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "hmacSha256InWorker[",
                "]: sending ",
                "MB to worker"
            ])), r, Math.floor(t.byteLength / (1024 * 1024)));
            const a = yield W();
            if (!a.success) {
                return {
                    transferredKeyBuffer: e,
                    transferredBuffer: t,
                    result: o("WAResultOrError").makeError(a.error)
                };
            }
            const a_value = a.value;
            const l = a_value.onMessageOnce("calculateHmacSha256Response", function(e) {
                return e.requestId === r;
            });
            a_value.postMessage({
                keyBuffer: e,
                buffer: t,
                length,
                requestId: r,
                type: "calculateHmacSha256Request"
            }, [
                e,
                t
            ]);
            const s = yield l;
            const { output, transferredBuffer, transferredKeyBuffer } = s;
            if (output.success) {
                N().INFO(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "hmacSha256InWorker[",
                    "]: received result from worker"
                ])), r);
                return {
                    transferredKeyBuffer,
                    transferredBuffer,
                    result: o("WAResultOrError").makeResult({
                        hmac: output.value
                    })
                };
            }
            N().MUSTFIX(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "hmacSha256InWorker[",
                "]: failed: ",
                ""
            ])), r, output.error.errorMessage);
            return {
                transferredKeyBuffer,
                transferredBuffer,
                result: o("WAResultOrError").makeError(output.error.errorType)
            };
        });
        return z.apply(this, arguments);
    }
    function j(e) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ eventFlow, input, mimeType, supportsHevc }) {
            N().INFO(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video"
            ])));
            const i = U();
            N().INFO(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                ""
            ])), i);
            const l = yield W(eventFlow);
            if (!l.success) {
                return o("WAResultOrError").makeError(l.error);
            }
            const l_value = l.value;
            const u = l_value.onMessageOnce("transcodeToMp4Response", function(e) {
                return e.requestId === i;
            });
            const c = o("WAByteArray").uint8ArrayToBuffer(input);
            const d = c ? [
                c
            ] : undefined;
            l_value.postMessage({
                input: c,
                requestId: i,
                mimeType,
                supportsHevc,
                type: "transcodeToMp4Request",
                qplData: eventFlow.flowDetails
            }, d);
            eventFlow?.addPoint("sent_request_to_media_worker_start");
            const m = yield u;
            const m_output = m.output;
            N().INFO(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "received output from worker, requestId: ",
                ", success: ",
                ""
            ])), i, m_output.success);
            if (m_output.success) {
                eventFlow?.addPoint("sent_request_to_media_worker_end");
                return m_output;
            }
            eventFlow?.addPoint("sent_request_to_media_worker_end");
            eventFlow?.addAnnotations({
                string: {
                    errorMessage: m_output.error.errorMessage
                }
            });
            return o("WAResultOrError").makeError(m_output.error.errorType);
        });
        return K.apply(this, arguments);
    }
    function Q(e) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ eventFlow, input }) {
            N().INFO(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "mp4RepairMuxInWorker processing video"
            ])));
            const r = U();
            N().INFO(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                ""
            ])), r);
            const a = yield W(eventFlow);
            if (!a.success) {
                return o("WAResultOrError").makeError(a.error);
            }
            const a_value = a.value;
            const l = a_value.onMessageOnce("mediaOperationResponse", function(e) {
                return e.requestId === r;
            });
            const s = o("WAByteArray").uint8ArrayToBuffer(input);
            const u = s ? [
                s
            ] : undefined;
            a_value.postMessage({
                operation: "mp4RepairMux",
                input: s,
                requestId: r,
                type: "mediaOperationRequest"
            }, u);
            eventFlow?.addPoint("sent_request_to_media_worker_start");
            const c = yield l;
            const c_output = c.output;
            if (c_output.success) {
                N().INFO(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "received output from worker, requestId: ",
                    ""
                ])), r);
                eventFlow?.addPoint("sent_request_to_media_worker_end");
                return o("WAResultOrError").makeResult(c_output.value);
            }
            N().MUSTFIX(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "requestId: ",
                ", error: ",
                ""
            ])), r, c_output.error.errorMessage);
            eventFlow?.addPoint("sent_request_to_media_worker_fail");
            return o("WAResultOrError").makeError(c_output.error.errorType);
        });
        return X.apply(this, arguments);
    }
    function Y(e) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ eventFlow, input, mediaType, rawMimeType, strictJpegScanValidationEnabled, strictMp4ValidationEnabled, strictOggOpusValidationEnabled }) {
            const u = U();
            N().INFO(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classify in worker, requestId: ",
                ""
            ])), u);
            const c = yield W(eventFlow);
            if (!c.success) {
                return {
                    transferredBuffer: input,
                    result: o("WAResultOrError").makeError({
                        errorName: c.error
                    })
                };
            }
            const c_value = c.value;
            const m = c_value.onMessageOnce("kaleidoscopeClassifyResponse", function(e) {
                return e.requestId === u;
            });
            c_value.postMessage({
                mediaType,
                rawMimeType,
                strictJpegScanValidationEnabled,
                strictOggOpusValidationEnabled,
                strictMp4ValidationEnabled,
                input,
                requestId: u,
                type: "kaleidoscopeClassifyRequest"
            }, [
                input
            ]);
            eventFlow.addPoint("sent_request_to_media_worker_start");
            const p = yield m;
            const { output, transferredBuffer } = p;
            if (output.success) {
                N().INFO(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "received output from worker, requestId: ",
                    ""
                ])), u);
                eventFlow?.addPoint("sent_request_to_media_worker_end");
                return {
                    transferredBuffer,
                    result: output
                };
            }
            eventFlow.addPoint("sent_request_to_media_worker_fail");
            return {
                transferredBuffer,
                result: o("WAResultOrError").makeError({
                    errorName: output.error
                })
            };
        });
        return J.apply(this, arguments);
    }
    function Z(e) {
        return ee.apply(this, arguments);
    }
    function ee() {
        ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ eventFlow, hints, input }) {
            const l = U();
            N().INFO(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope provenance detection in worker, requestId: ",
                ""
            ])), l);
            const s = yield W(eventFlow);
            if (!s.success) {
                N().WARN(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "provenance detection failed, requestId: ",
                    ", reason: no-worker-port, error: ",
                    ""
                ])), l, s.error);
                eventFlow?.addPoint("worker_roundtrip_fail", {
                    string: {
                        failure_reason: "no_worker_port"
                    }
                });
                return {
                    transferredBuffer: input,
                    provenance: null
                };
            }
            const s_value = s.value;
            let c = r("WAWebNoop");
            const d = new (P || (P = n("Promise")))(function(e) {
                const t = s_value.addMessageListener("kaleidoscopeProvenanceResponse", function(t) {
                    if (t.requestId === l) {
                        c();
                        N().INFO(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "received provenance from worker, requestId: ",
                            ", hasSignal: ",
                            ""
                        ])), l, t.provenance != null);
                        e({
                            transferredBuffer: t.transferredBuffer,
                            provenance: t.provenance,
                            engineErrorCode: t.engineErrorCode
                        });
                    }
                });
                c = function() {
                    s_value.removeMessageListener("kaleidoscopeProvenanceResponse", t);
                };
            });
            try {
                eventFlow?.addPoint("worker_roundtrip_start");
                s_value.postMessage({
                    input,
                    hints,
                    qplData: eventFlow?.flowDetails,
                    requestId: l,
                    type: "kaleidoscopeProvenanceRequest"
                }, [
                    input
                ]);
                const m = yield o("WAPromiseTimeout").promiseTimeout(d, F);
                eventFlow?.addPoint("worker_roundtrip_end");
                return m;
            } catch (error) {
                c();
                const failure_reason = error instanceof o("WACustomError").TimeoutError ? "timeout" : "post_failed";
                N().WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "provenance detection failed, requestId: ",
                    ", reason: ",
                    ", error: ",
                    ""
                ])), l, failure_reason, r("getErrorSafe")(error).message);
                eventFlow?.addPoint("worker_roundtrip_fail", {
                    string: {
                        failure_reason
                    }
                });
                return {
                    transferredBuffer: input,
                    provenance: null
                };
            }
        });
        return ee.apply(this, arguments);
    }
    function te(operation) {
        N().INFO(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            ""
        ])), operation);
        o("WAPromiseTimeout").promiseTimeout(w().fullyConnected, A).then((t)=>{
            t.postMessage({
                type: "prewarm",
                operation
            });
        }).catch((e)=>{
            N().WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "prewarm failed: ",
                ""
            ])), r("getErrorSafe")(e).message);
        });
    }
    l.getWorkerPortWithTimeout = W;
    l.calculateFilehashInWorker = V;
    l.hmacSha256InWorker = G;
    l.transcodeToMp4InWorker = j;
    l.mp4RepairMuxInWorker = Q;
    l.kaleidoscopeClassifyInWorker = Y;
    l.detectAiProvenanceInWorker = Z;
    l.prewarmMediaWasmWorker = te;
}, 98);