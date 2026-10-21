__d("WAWebPttComposerRecordingSession", [
    "fbt",
    "invariant",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAPromiseRaceAbort",
    "WAPttComposerRecorder",
    "WAPttComposerScaleWaveform",
    "WARandomHex",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBaseModel",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoRandomMediaKey",
    "WAWebFrontendChatGetters",
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaHosts",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMmsClientUploadStreamer",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPrepRawMedia",
    "WAWebPresenceChatAction",
    "WAWebPresenceCollection",
    "WAWebPttAudioChannels",
    "WAWebPttAudioManager",
    "WAWebPttComposerRecordingSessionGetters",
    "WAWebPttComposerRecordingStopReason",
    "WAWebPttComposerStreamingEncryptor",
    "WAWebPttDailyUtils",
    "WAWebPttWamEvent",
    "WAWebRecordingSessionStateEnum",
    "WAWebStartMediaUploadQpl",
    "WAWebTimeSpentLoggingExternal",
    "WAWebUploadStreamerRefactorGatingUtils",
    "WAWebWamEnumPttResultType",
    "WAWebWamEnumPttSourceType",
    "WAWebWamEnumTsExternalEventSource",
    "WAWebWamMediaMetricUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l, s, u) {
    let e;
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
    let N;
    let M;
    let w;
    const A = w || (w = o("react"));
    const F = 1;
    const O = 8.5;
    const B = 64;
    const W = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.duration = o("WAWebBaseModel").prop(0);
            e.exceedsMinDuration = o("WAWebBaseModel").prop(false);
            e.isViewOnce = o("WAWebBaseModel").prop(false);
            e.recordingState = o("WAWebBaseModel").prop(o("WAWebRecordingSessionStateEnum").RecordingSessionState.NOT_STARTED);
            e._hasStreamingUploadFailed = o("WAWebBaseModel").prop(false);
            e._draftPreviewSeen = o("WAWebBaseModel").prop(false);
            e._draftPlayCount = o("WAWebBaseModel").prop(0);
            e._draftSeekCount = o("WAWebBaseModel").prop(0);
            e._pauseCount = o("WAWebBaseModel").prop(0);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            let n = null;
            this.on("change:recordingState", function() {
                e._endTsExternalEvent?.();
                if (e._chat != null) {
                    if (o("WAWebPttComposerRecordingSessionGetters").getIsRecording(e)) {
                        n = o("WAWebPttAudioChannels").MainAudioChannel.claim(e, function() {
                            e.pause();
                        });
                        o("WAWebPresenceChatAction").markRecording(e._chat);
                        e._endTsExternalEvent = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.PTT_RECORD);
                    } else {
                        if (n != null) {
                            n();
                        }
                        o("WAWebPresenceChatAction").markPaused(e._chat);
                    }
                }
            });
        };
        a_prototype.start = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this;
                switch(this.recordingState){
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.NOT_STARTED:
                        break;
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING:
                        return true;
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED:
                        return this.resume();
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED:
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR:
                        throw r("err")(`Can't start recording from state ${this.recordingState}`);
                }
                this._uploadQpl = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                    entryPoint: "PttStreamingUpload",
                    mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                    isStreamingUpload: true
                });
                const a = r("WAWebCreateMediaUploadMetrics")({
                    type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                    uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(this._chat),
                    fileOrigin: null,
                    userUploadAttemptCount: 0,
                    forwardedFromWeb: false,
                    isViewOnce: false,
                    uploadQpl: this._uploadQpl
                });
                const { handleEncryptionStart, handleEncryptionSuccess, handleSendMessageStart, handleStreamUploadStart, handleUploadAttemptError, handleUploadAttemptSuccess, handleUploadError, handleUploadHostFound, handleUploadProgress, handleUploadSuccess } = a;
                this._handleSendMessageStart = handleSendMessageStart;
                try {
                    if (o("WAWebUploadStreamerRefactorGatingUtils").isUploadStreamerRefactorEnabled()) {
                        const v = r("WAWebCryptoRandomMediaKey")();
                        this._earlyUploadPromise = new (M || (M = n("Promise")))(function(e) {
                            t._resolveEarlyUploadPromise = e;
                        });
                        const S = new AbortController;
                        this._uploaderAbortController = S;
                        const R = yield o("WAMediaCalculateFilehash").getRandomFilehash();
                        const L = new (o("WAWebMmsClientUploadStreamer")).UploadStreamer({
                            encFilehash: R,
                            token: R,
                            type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                            signal: S.signal,
                            byteOffset: 0,
                            onUploadHostFound: handleUploadHostFound,
                            onUploadAttemptSuccess: handleUploadAttemptSuccess,
                            onUploadAttemptError: handleUploadAttemptError,
                            onProgress: function(t, n) {
                                handleUploadProgress(t.loaded + n);
                            },
                            onStreamUploadStart: handleStreamUploadStart,
                            mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId()
                        }, {
                            mediaHosts: o("WAWebMediaHosts").mediaHosts
                        });
                        L.startUploadFromClient();
                        this._encryptor = yield o("WAWebPttComposerStreamingEncryptor").createStreamingEncryptor({
                            mediaKey: v.key,
                            onChunkEncrypted: (()=>{
                                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                                    try {
                                        yield L.uploadChunkFromClient(n);
                                    } catch (error) {
                                        const a = r("getErrorSafe")(error);
                                        t._resolveEarlyUploadPromise?.(null);
                                        t._hasStreamingUploadFailed = true;
                                        if (a.name === o("WAAbortError").ABORT_ERROR) {
                                            return;
                                        }
                                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                            "onChunkEncrypted: ptt-streaming-upload-error"
                                        ]))).catching(a);
                                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                            "PTT Streaming Upload cancelled due to a problem uploading"
                                        ]))).sendLogs("ptt-streaming-upload-failed");
                                        handleUploadError(a);
                                    }
                                });
                                function i(e) {
                                    return a.apply(this, arguments);
                                }
                                return i;
                            })(),
                            onEncryptionCompleted: (()=>{
                                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, encFilehash) {
                                    handleEncryptionSuccess();
                                    try {
                                        yield L.uploadChunkFromClient(new Uint8Array(e));
                                        const a = yield L.finalizeUploadFromClient(encFilehash);
                                        t._resolveEarlyUploadPromise?.({
                                            directPath: a.directPath,
                                            mediaKey: v.key,
                                            mediaKeyTimestamp: v.timestamp,
                                            encFilehash,
                                            url: a.url
                                        });
                                        handleUploadSuccess();
                                    } catch (error) {
                                        const i = r("getErrorSafe")(error);
                                        t._resolveEarlyUploadPromise?.(null);
                                        t._hasStreamingUploadFailed = true;
                                        if (i.name === o("WAAbortError").ABORT_ERROR) {
                                            return;
                                        }
                                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                            "onEncryptionCompleted: ptt-streaming-upload-error"
                                        ]))).catching(i);
                                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                            "PTT Streaming Upload cancelled due to a problem when finalizing upload"
                                        ]))).sendLogs("ptt-streaming-upload-failed");
                                        handleUploadError(i);
                                    }
                                });
                                function a(t, n) {
                                    return e.apply(this, arguments);
                                }
                                return a;
                            })()
                        });
                    }
                } catch (error) {
                    this._uploadQpl?.endFailWithError("upload_setup_failed", r("getErrorSafe")(error).message);
                    this._uploadQpl = null;
                    throw error;
                }
                try {
                    let I = true;
                    this._recorder = new (r("WAPttComposerRecorder"))({
                        createStream,
                        waveformSampleRate: this.getWaveformSampleRate(),
                        onDuration: function(n) {
                            t.duration = n;
                            t.exceedsMinDuration = n >= F;
                        },
                        onPage: function(n, r) {
                            if (!(!o("WAWebUploadStreamerRefactorGatingUtils").isUploadStreamerRefactorEnabled() || t._hasStreamingUploadFailed)) {
                                try {
                                    if (I) {
                                        handleEncryptionStart();
                                        I = false;
                                    }
                                    t._encryptor?.encryptChunk(n, r);
                                } catch (e) {
                                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                        "PTT Streaming Upload cancelled due to a problem encrypting"
                                    ])));
                                    t._resolveEarlyUploadPromise?.(null);
                                    t._hasStreamingUploadFailed = true;
                                }
                            }
                        }
                    });
                    const T = yield this._recorder.start();
                    if (T) {
                        this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING;
                        o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.RecordPTT);
                        o("WAWebPresenceCollection").PresenceCollection.update(this._chat.presence.id);
                        o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.RECORD, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat)));
                        return true;
                    }
                    this._uploadQpl?.endFailWithError("recording_failed", "recorder_did_not_start");
                    this._uploadQpl = null;
                } catch (error) {
                    this._uploadQpl?.endFailWithError("recording_failed", r("getErrorSafe")(error).message);
                    this._uploadQpl = null;
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "PTT Recording Error"
                    ]))).catching(r("getErrorSafe")(error));
                }
                this._endSession();
                this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR;
                this._releaseGetterCache();
                return false;
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getLiveWaveformSamples = function() {
            return this._recorder?.getLiveWaveformSamples() ?? [];
        };
        a_prototype.getCorrectedWaveformSamples = function() {
            return this._recorder?.getCorrectedWaveformSamples() ?? [];
        };
        a_prototype.getScaledWaveformSamples = function() {
            return r("WAPttComposerScaleWaveform")(this.getCorrectedWaveformSamples(), B).map((e)=>Math.floor(e * 100));
        };
        a_prototype.getPreciseDuration = function() {
            return this._recorder?.getPreciseDuration() ?? 0;
        };
        a_prototype._endSession = function() {
            this._recorder?.stop();
        };
        a_prototype._releaseGetterCache = function() {
            if (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_2")) {
                o("WAWebPttComposerRecordingSessionGetters").clearRecordingSessionGetterCacheFor(this);
            }
        };
        a_prototype._endUploadQpl = function(t) {
            if (this._uploadQpl != null) {
                const e = this._uploadQpl;
                this._uploadQpl = null;
                if (t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT) {
                    if (this._hasStreamingUploadFailed) {
                        e.endFailWithError("upload_failed", "streaming_upload_failed");
                    } else {
                        e.endSuccess();
                    }
                } else if (t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.PTT_TOO_SHORT) {
                    e.endFailWithError("upload_canceled", "ptt_too_short");
                } else if (t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.CANCEL_BUTTON) {
                    e.endFailWithError("upload_canceled", "aborted");
                } else {
                    e.endFailWithError("upload_canceled", "other");
                }
            }
        };
        a_prototype.pause = function() {
            if (this.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING) {
                if (!this.exceedsMinDuration) {
                    this.stop(o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.PTT_TOO_SHORT);
                    return;
                }
                this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED;
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.RecordPTT);
                const e = r("nullthrows")(this._recorder);
                e.pause();
            }
        };
        a_prototype.resume = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                switch(this.recordingState){
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING:
                        return true;
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED:
                        break;
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.NOT_STARTED:
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED:
                    case o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR:
                        throw r("err")(`Can't resume recording from state ${this.recordingState}`);
                }
                this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING;
                try {
                    const e = r("nullthrows")(this._recorder);
                    const t = yield e.resume();
                    if (t) {
                        o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.RecordPTT);
                        return true;
                    }
                    this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED;
                    return false;
                } catch (error) {
                    this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR;
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Error resuming recording session"
                    ]))).catching(r("getErrorSafe")(error));
                    return false;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.stop = function(t) {
            if (this.recordingState !== o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED && (this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED, o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.RecordPTT), this._endSession(), this._endUploadQpl(t), this._releaseGetterCache(), this._recorder != null)) {
                if (t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT) {
                    o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.SEND, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat)));
                } else if (this.duration > F) {
                    o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.CANCEL, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat)));
                }
                if (t !== o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT && this._uploaderAbortController) {
                    this._uploaderAbortController.abort();
                }
                const e = V(t);
                if (e != null) {
                    this._sendPttWamEvent(e);
                }
            }
        };
        a_prototype._getDataForSending = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: _getDataForSending started"
                    ])));
                    const e = r("nullthrows")(this._recorder);
                    const t = yield e.getCompleteRecording();
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Got complete recording, size: ",
                        " bytes, type: ",
                        ""
                    ])), t.size, t.type);
                    const n = yield r("WAWebMediaOpaqueData").createFromData(t, t.type);
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Created OpaqueData successfully"
                    ])));
                    return n;
                } catch (error) {
                    o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Error in _getDataForSending"
                    ])));
                    throw error;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype._getDataForPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = r("nullthrows")(this._recorder);
                const t = yield e.getPartialRecording();
                const n = yield o("WAWebMediaLoad").transcode(t);
                return r("WAWebMediaOpaqueData").createFromData(n, n.type);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getAudioForPlayback = function() {
            const e = this;
            return new z(function() {
                return e._getDataForPlayback();
            });
        };
        a_prototype.getWaveformSampleRate = function() {
            return O;
        };
        a_prototype.send = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isQuestion = false, isViewOnce = false, isWamoSub, questionReplyQuotedMessage, threadId }) {
                try {
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: send started with isViewOnce=",
                        ", isWamoSub=",
                        ""
                    ])), isViewOnce, isWamoSub);
                    this._handleSendMessageStart?.(isViewOnce);
                    if (!this._recorder) {
                        o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: Recorder is null in send method"
                        ])));
                    }
                    const m = r("nullthrows")(this._recorder);
                    const p = this._chat;
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Getting data for sending"
                    ])));
                    const _ = r("WAPromiseRaceAbort")(this._getDataForSending(), p.getDeleteSignal());
                    const f = p.getComposeContents()?.ctwaContext || undefined;
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Before prepRawMedia, duration=",
                        ", waveform samples=",
                        ""
                    ])), Math.floor(m.getDuration()), this.getScaledWaveformSamples().length);
                    let g;
                    try {
                        g = o("WAWebPrepRawMedia").prepRawMedia(_, {
                            isPtt: true,
                            precomputedFields: {
                                duration: Math.floor(m.getDuration()),
                                waveform: new Uint8Array(this.getScaledWaveformSamples())
                            }
                        });
                        o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: prepRawMedia completed successfully"
                        ])));
                    } catch (error) {
                        o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: Error in prepRawMedia"
                        ])));
                        throw error;
                    }
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Early upload promise status: ",
                        ""
                    ])), this._earlyUploadPromise ? "exists" : "null");
                    let botPersonaId = null;
                    if (o("WAWebBotUtils").isMetaAiBot(p.id)) {
                        botPersonaId = o("WAWebBotProfileCollection").BotProfileCollection.get(p.id)?.personaId;
                    }
                    try {
                        g.sendToChat({
                            chat: p,
                            earlyUpload: this._earlyUploadPromise,
                            options: {
                                quotedMsg: p.composeQuotedMsg || undefined,
                                addEvenWhilePreparing: !isViewOnce,
                                ctwaContext: f,
                                isViewOnce,
                                isWamoSub,
                                isQuestion,
                                questionReplyQuotedMessage: questionReplyQuotedMessage ?? undefined,
                                botPersonaId,
                                threadId
                            }
                        });
                        o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: sendToChat called successfully"
                        ])));
                    } catch (error) {
                        o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: Error in sendToChat:"
                        ])));
                        throw error;
                    }
                    p.composeQuotedMsg = null;
                    o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Stopping recording session with SENT reason"
                    ])));
                    this.stop(o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT);
                    try {
                        yield _.catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
                        o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: getData completed or was aborted"
                        ])));
                    } catch (error) {
                        o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: Error in getData"
                        ]))).catching(r("getErrorSafe")(error));
                    }
                    o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: send method completed successfully"
                    ])));
                } catch (error) {
                    o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Unhandled error in send method"
                    ])));
                    throw error;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype._sendPttWamEvent = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(pttResult) {
                const n = r("nullthrows")(this._recorder);
                const a = yield n.getCompleteRecording();
                new (o("WAWebPttWamEvent")).PttWamEvent({
                    pttSource: o("WAWebWamEnumPttSourceType").PTT_SOURCE_TYPE.FROM_CONVERSATION,
                    pttResult,
                    pttDuration: Math.round(this.duration) * 1000,
                    pttSize: Math.round((a.size ?? 0) / 1000) * 1000,
                    pttStop: this._draftPreviewSeen,
                    pttDraftPlayCnt: this._draftPlayCount,
                    pttDraftSeekCnt: this._draftSeekCount,
                    pttPauseCnt: this._pauseCount,
                    isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(this._chat.id)
                }).commit();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.markDraftPreviewSeen = function() {
            if (!this._draftPreviewSeen) {
                this._draftPreviewSeen = true;
                o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.DRAFT_REVIEW, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat)));
            }
        };
        a_prototype.incrementDraftPlayCount = function() {
            this._draftPlayCount++;
        };
        a_prototype.incrementDraftSeekCount = function() {
            this._draftSeekCount++;
        };
        a_prototype.incrementPauseButtonCount = function() {
            this._pauseCount++;
            if (this._pauseCount === 1) {
                o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.PAUSED_RECORD, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat)));
            }
        };
        a_prototype.delete = function() {
            this._uploadQpl?.endCancel();
            this._uploadQpl = null;
            t.prototype.delete.call(this);
            o("WAWebPttComposerRecordingSessionGetters").clearRecordingSessionGetterCacheFor(this);
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    W.Proxy = "recordingSession";
    const q = o("WAWebBaseModel").defineModel(W);
    function U(e) {
        return new q({
            id: o("WARandomHex").randomHex(8),
            _chat: e.chat
        });
    }
    function V(e) {
        switch(e){
            case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT:
                return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.SENT;
            case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.PTT_TOO_SHORT:
                return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.TOO_SHORT;
            case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.CANCEL_BUTTON:
                return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.CANCELLED;
            case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.AI_THREAD_SWITCH:
            case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.OTHER:
                return null;
        }
    }
    function createStream(e) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (r("WAWebCallCollection").activeCall) {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager}>{s._("Can't record voice messages during a WhatsApp call.")}</Component>);
                return null;
            }
            const t = o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOICE_MESSAGES
            });
            const { asyncStream, disposeStream } = t;
            e.addEventListener("abort", function() {
                disposeStream();
            }, {
                once: true
            });
            try {
                return yield asyncStream;
            } catch (error) {
                if (error instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                    var i;
                    o("WAWebModalManager").ModalManager.open(A.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: i.Messaging.MIC_FAIL,
                        type: i.GuidePopupType.GUIDE_UNBLOCK,
                        featureSurface: i.FeatureSurface.VOICE_MESSAGES
                    }));
                    return null;
                }
                if (error instanceof o("WAWebGetUserMediaErrors").GetUserMediaError) {
                    var i;
                    o("WAWebModalManager").ModalManager.open(A.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: i.Messaging.MIC_MISSING,
                        type: i.GuidePopupType.GUIDE_NONE,
                        featureSurface: i.FeatureSurface.VOICE_MESSAGES
                    }));
                    return null;
                }
                throw error;
            }
        });
        return G.apply(this, arguments);
    }
    class z {
        constructor(e){
            var t = this;
            this._opaqueDataPromise = e();
            var r = o("WAWebPttAudioManager").AudioManager.createAudioProxy();
            this._audio = r;
            this._unregisterFromAudioChannel = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(r);
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield t._opaqueDataPromise;
                const t__audio = t._audio;
                if (t__audio != null) {
                    t__audio.src = e.url();
                }
            })();
        }
        getAudio() {
            if (this._audio == null) {
                u(0, 56371);
            }
            return this._audio;
        }
        dispose() {
            const e = this;
            const _audio = this._audio;
            if (_audio != null) {
                this._unregisterFromAudioChannel();
                this._audio = null;
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield e._opaqueDataPromise;
                    t.autorelease();
                })();
            }
        }
    }
    l.RecordingSessionStopReason = o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason;
    l.RecordingSession = q;
    l.createRecordingSession = U;
    l.AudioResource = z;
}, 226);