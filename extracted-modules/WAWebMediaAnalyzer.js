__d("WAWebMediaAnalyzer", [
    "WABlobToArrayBuffer",
    "WALogger",
    "WAResultOrError",
    "WAWebMediaGatingUtils",
    "WAWebMediaWorkerProxy",
    "WAWebSendMessageToMediaWorker",
    "WAWebWebcMediaAnalyzedWamEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
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
    function h(e, isGif) {
        return {
            type: "video/mp4",
            file: new Blob([
                e
            ], {
                type: "video/mp4"
            }),
            isGif
        };
    }
    let y = null;
    function C() {
        if (y == null) {
            const e = document.createElement("video");
            const t = [
                'video/mp4; codecs="hvc1.1.6.L93.B0"',
                'video/mp4; codecs="hev1.1.6.L93.B0"',
                'video/mp4; codecs="hvc1"',
                'video/mp4; codecs="hev1"'
            ];
            y = t.some((t)=>e.canPlayType(t) === "probably");
        }
        return y;
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[transcodeToMp4AndCheckAndRepair] start transcode to mp4 and mp4RepairMux"
            ])));
            const use_wasm_worker = o("WAWebMediaGatingUtils").shouldUseWasmMediaWorkerForFile(t);
            a.addAnnotations({
                bool: {
                    use_wasm_worker
                }
            });
            if (use_wasm_worker) {
                try {
                    a.addPoint("transcode_to_mp4_check_and_repair_start");
                    const l = yield o("WABlobToArrayBuffer").blobToArrayBuffer(t);
                    const mimeType = t.type;
                    const m = yield o("WAWebMediaWorkerProxy").transcodeToMp4InWorker({
                        input: new Uint8Array(l),
                        mimeType,
                        supportsHevc: C(),
                        eventFlow: {
                            addAnnotations: function(t) {
                                return a.addAnnotations(t);
                            },
                            addPoint: function(t, n) {
                                return a.addPoint(t, n);
                            },
                            flowDetails: a.flowDetails
                        }
                    });
                    if (m.success) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[transcodeToMp4AndCheckAndRepair][success]"
                        ])));
                        a.addPoint("transcode_to_mp4_check_and_repair_end");
                        return o("WAResultOrError").makeResult([
                            h(m.value, n),
                            true
                        ]);
                    }
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[transcodeToMp4AndCheckAndRepair][error] transcode failed, falling back to checkAndRepair"
                    ])));
                    a.addAnnotations({
                        string: {
                            error: m.error
                        }
                    });
                    a.addPoint("transcode_to_mp4_check_and_repair_fail");
                } catch (error) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[transcodeToMp4AndCheckAndRepair] got error!"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("transcode-to-mp4-error");
                }
            }
            a.addAnnotations({
                bool: {
                    used_fallback: true
                }
            });
            const p = yield L(t, n, a).catch((e)=>o("WAResultOrError").makeError({
                    error: "exception",
                    errorDetail: r("getErrorSafe")(e).message
                }));
            if (p.success) {
                return o("WAResultOrError").makeResult([
                    p.value,
                    false
                ]);
            }
            return o("WAResultOrError").makeError({
                error: p.error.error,
                errorDetail: p.error.errorDetail
            });
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[checkAndRepairAudio] start check and repair audio"
            ])));
            const a = new (o("WAWebWebcMediaAnalyzedWamEvent")).WebcMediaAnalyzedWamEvent;
            let webcMediaSupported = false;
            try {
                n.addPoint("check_and_repair_audio_start");
                n.addAnnotations({
                    bool: {
                        use_wasm_worker: false
                    }
                });
                const l = yield L(e, t, n);
                if (l.success) {
                    webcMediaSupported = l.value != null;
                    n.addPoint("check_and_repair_audio_end");
                    return o("WAResultOrError").makeResult([
                        l.value,
                        false
                    ]);
                }
                return o("WAResultOrError").makeError(l.error);
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAnalyzer:checkAndRepairAudio got error!"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("media-detection-error");
                return o("WAResultOrError").makeError({
                    error: "check_and_repair_audio_exception",
                    errorDetail: r("getErrorSafe")(error).message
                });
            } finally{
                let webcMediaExtensions;
                if (e instanceof File) {
                    const u = e.name.split(".");
                    if (u.length > 1) {
                        webcMediaExtensions = u[u.length - 1];
                    }
                }
                a.set({
                    webcMediaSupported,
                    webcMediaExtensions
                });
                a.markWebcMediaAnalyzeT();
                a.commit();
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, asGif, n) {
            n.addPoint("send_message_to_media_worker_start");
            const r = {
                type: "prep",
                file: e,
                asGif
            };
            const a = yield o("WAWebSendMessageToMediaWorker").sendMessageToMediaWorker(r);
            const { error, file, filename, result, type } = a;
            n.addPoint("send_message_to_media_worker_end");
            n.addAnnotations({
                string: {
                    worker_response_type: type
                }
            });
            e: {
                if (type === "result") {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAnalyzer:checkAndRepair approved file"
                    ])));
                    return o("WAResultOrError").makeResult(result);
                    break e;
                }
                if (type === "parsingError") {
                    const errorDetail = String(error);
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "trouble parsing file ",
                        " (fossil ",
                        ") ",
                        ""
                    ])), file, filename, errorDetail);
                    if (file) {
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "MediaAnalyzer:checkAndRepair got parsing error! ",
                            ""
                        ])), errorDetail).sendLogs("media-parsing-error");
                    }
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAnalyzer:checkAndRepair rejected file (",
                        ")"
                    ])), errorDetail);
                    return o("WAResultOrError").makeError({
                        error: "parsing_error",
                        errorDetail
                    });
                    break e;
                }
                return o("WAResultOrError").makeError({
                    error: "unhandled_type"
                });
            }
        });
        return E.apply(this, arguments);
    }
    l.transcodeToMp4AndMp4RepairMux = b;
    l.checkAndRepairAudio = S;
}, 98);