__d("WAWebPttComposer.react", [
    "$InternalEnum",
    "WAWebAttachMediaViewOnceInChat.react",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebPttCancelButton.react",
    "WAWebPttComposerRecordingSession",
    "WAWebPttComposerRecordingSessionGetters",
    "WAWebPttComposerWaveform.react",
    "WAWebPttMessageUserJourneyLogger",
    "WAWebPttPauseResumeRecordingButton.react",
    "WAWebPttPlayPauseButton.react",
    "WAWebPttSendButton.react",
    "WAWebPttTsExternalLogger",
    "WAWebQuestions.flow",
    "WAWebRecordingSessionStateEnum",
    "WAWebTabOrder",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityTransitionGroup",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebPttRecordingSessionValues",
    "useWAWebSetModelValue",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useRef, useState } = u;
    const _ = n("$InternalEnum").Mirrored([
        "RECORDER",
        "PREVIEW"
    ]);
    const f = {
        viewOnceButtonSpacing: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function g(e) {
        const { chat, onComplete, recordingSession } = e;
        const uRef = useRef();
        const gRef = useRef();
        const C = useState(function() {
            switch(recordingSession.recordingState){
                case o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED:
                    return _.PREVIEW;
                case o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING:
                    return _.RECORDER;
                default:
                    throw r("err")(`Invalid recording session state: ${recordingSession.recordingState}`);
            }
        });
        const b = C[0];
        const v = C[1];
        const S = o("useWAWebChatValues").useOptionalChatValues(chat.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg
        ]) ?? [
            false,
            null,
            null
        ];
        const R = S[0];
        const L = S[1];
        const E = S[2];
        const k = useState(null);
        const I = k[0];
        const T = k[1];
        const D = useState(function() {
            if (b === _.PREVIEW) {
                return recordingSession.getAudioForPlayback();
            }
            return null;
        });
        const x = D[0];
        const $ = D[1];
        useEffect(function() {
            if (x != null) {
                return o("WAWebPttTsExternalLogger").attachPttPlayTimeSpentLogger(x.getAudio());
            }
        }, [
            x
        ]);
        const P = ()=>{
            $(null);
            x?.dispose();
        };
        const N = x?.getAudio();
        const MRef = useRef();
        const wRef = useRef();
        const ARef = useRef(recordingSession);
        ARef.current = recordingSession;
        const F = r("useWAWebEventTargetValue")(recordingSession, "change:duration", function() {
            return Math.floor(recordingSession.duration);
        });
        const O = useState(function() {
            return Math.floor(N?.currentTime || 0);
        });
        const B = O[0];
        const W = O[1];
        const q = useState(function() {
            return (N?.currentTime || 0) === 0;
        });
        const U = q[0];
        const V = q[1];
        const H = (t)=>{
            W(Math.floor(t));
            V(t === 0);
        };
        o("useWAWebListener").useListener(N, "timeupdate", function() {
            H(N?.currentTime ?? 0);
        });
        const G = useState(null);
        const z = G[0];
        const j = G[1];
        const K = o("useWAWebPttRecordingSessionValues").usePttRecordingSessionValues(recordingSession, [
            o("WAWebPttComposerRecordingSessionGetters").getExceedsMinDuration,
            o("WAWebPttComposerRecordingSessionGetters").getIsRecording,
            o("WAWebPttComposerRecordingSessionGetters").getIsViewOnce
        ]);
        const Q = K[0];
        const X = K[1];
        const Y = K[2];
        const J = o("useWAWebSetModelValue").useSetModelValue(recordingSession, "isViewOnce");
        const Z = useState(Y);
        const shouldSkipNuxAndToast = Z[0];
        const te = Z[1];
        const ne = function() {
            te(false);
            J(!Y);
        };
        o("useWAWebListener").useListener(recordingSession, "change:recordingState", function() {
            if (recordingSession.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED || recordingSession.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR) {
                onComplete();
            }
        });
        const re = r("useWAWebEventTargetValue")(N, [
            "play",
            "pause"
        ], function() {
            return N != null && !N.paused;
        });
        const confirmOnMouseUp = useH();
        const ae = function() {
            recordingSession.stop(o("WAWebPttComposerRecordingSession").RecordingSessionStopReason.CANCEL_BUTTON);
            o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.delete(chat.id, E != null);
        };
        useEffect(function() {
            if (X) {
                self.setTimeout(function() {
                    MRef.current?.focus();
                }, 100);
            }
        }, [
            X
        ]);
        useEffect(function() {
            if (b === _.PREVIEW) {
                ARef.current.markDraftPreviewSeen();
                self.setTimeout(function() {
                    wRef.current?.focus();
                }, 100);
            }
        }, [
            b
        ]);
        r("useWAWebOnUnmount")(function() {
            N?.pause();
            P();
            recordingSession.pause();
        });
        const ie = (isWamoSub)=>{
            recordingSession.send({
                isQuestion: e.questionType === o("WAWebQuestions.flow").QuestionType.Question,
                isViewOnce: Y,
                isWamoSub,
                questionReplyQuotedMessage: e.questionReplyQuotedMessage,
                threadId: e.threadId
            });
        };
        const le = function() {
            if (Q) {
                const popupAnchorEl = gRef.current;
                if (R && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(L) && popupAnchorEl && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
                    const n = function(t) {
                        ie(t === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub);
                    };
                    T({
                        popupAnchorEl,
                        handleSelect: n
                    });
                } else {
                    ie();
                }
                e.onSend?.();
                o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.send(chat.id, E != null);
            }
        };
        o("useWAWebListener").useListener(recordingSession, "change:recordingState", function() {
            if (!o("WAWebPttComposerRecordingSessionGetters").getIsRecording(recordingSession) && recordingSession.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED) {
                P();
                const e = recordingSession.getAudioForPlayback();
                $(e);
                H(0);
                v(_.PREVIEW);
            }
        });
        const se = function() {
            recordingSession.incrementPauseButtonCount();
            recordingSession.pause();
            o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.pause(chat.id, E != null);
        };
        const ue = function() {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                N?.pause();
                v(_.RECORDER);
                const e = yield recordingSession.resume();
                if (!e) {
                    v(_.PREVIEW);
                }
                o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.resume(chat.id, E != null);
            })();
        };
        const ce = function() {
            const e = r("nullthrows")(N);
            if (e.paused) {
                e.play();
                recordingSession.incrementDraftPlayCount();
            } else {
                e.pause();
            }
        };
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "pause_ptt_recording", function() {
            const e = b === _.RECORDER ? se : ue;
            e();
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "send_ptt_recording", le);
        o("useWAWebListener").useListener(N, "ended", function() {
            r("nullthrows")(N).load();
        });
        const getCurrentTime = useCallback(function() {
            return N?.currentTime ?? 0;
        }, [
            N
        ]);
        const me = r("useWAWebStableCallback")(function() {
            return recordingSession.getPreciseDuration();
        });
        const pe = r("useWAWebStableCallback")(function() {
            return recordingSession.duration;
        });
        const _e = r("useWAWebStableCallback")(function() {
            return recordingSession.getLiveWaveformSamples();
        });
        const fe = r("useWAWebStableCallback")(function() {
            return recordingSession.getCorrectedWaveformSamples();
        });
        const onSeekEnd = r("useWAWebStableCallback")(function(e) {
            H(e);
            j(null);
            r("nullthrows")(N).currentTime = e;
            recordingSession.incrementDraftSeekCount();
        });
        const onSeek = r("useWAWebStableCallback")(function(e) {
            j(Math.floor(e));
        });
        const Component = r("WAWebPttPauseResumeRecordingButton.react");
        const ye = <div className="x78zum5 xqf2s3x"><Component recording={b === _.RECORDER} confirmOnMouseUp={confirmOnMouseUp} tabOrder={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON} onConfirm={b === _.RECORDER ? se : ue}/></div>;
        const Component_1 = o("WAWebPttComposerWaveform.react").Waveform;
        const Ce = <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x78zum5 x6s0dn4"><div className="x170jfvy x1fsd2vl x1b0f5k1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1uvdrpn x14mko6t"/><Y12 time={F}/><div className="x78zum5 x1iyjqo2 xs83m0k x1r8uery x1sikpz7 x1sa5p1d x1wbi8v6"><Component_1 location={o("WAWebPttComposerWaveform.react").WaveformLocation.DRAFT_PREVIEW} sampleRate={recordingSession.getWaveformSampleRate()} getSamples={_e} getCurrentTime={getCurrentTime} getDuration={me} live={X} mode={o("WAWebPttComposerWaveform.react").WaveformMode.RECORDER} onSeek={onSeek} onSeekEnd={onSeekEnd} tabIndex={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON}/></div></div>;
        const Component_2 = r("WAWebAttachMediaViewOnceInChat.react");
        const be = !chat.contact.isEnterprise && !o("WAWebUserPrefsMeUser").isMeAccount(chat.contact.id) ? <Component_2 chat={chat} containerXstyle={f.viewOnceButtonSpacing} mediaType={o("WAWebMsgType").MSG_TYPE.PTT} onChange={ne} isOn={Y} disabled={false} shouldShowNux={b === _.PREVIEW} dataTab={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON} shouldSkipNuxAndToast={shouldSkipNuxAndToast}/> : null;
        const ve = z ?? (U ? F : B);
        const Component_3 = r("WAWebPttPlayPauseButton.react");
        const Component_4 = o("WAWebPttComposerWaveform.react").Waveform;
        const Se = <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x78zum5 x6s0dn4 x14mko6t x1y3qizg x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x15unhv1 x1s194ge xvp2sfm x11hqq3w x13tw7jo xbm2e5w xgdig0o xj3boke xzt5al7 x1kukv79 x11ahuha x972fbf x10w94by x1qhh985 x14e42zd"><Component_3 ref={wRef} theme="compose-box" paused={!re} tabOrder={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON} onConfirm={ce}/><div className="x78zum5 x1iyjqo2 xs83m0k x1r8uery x1sikpz7 xf6vk7d x1hm9lzh"><Component_4 location={o("WAWebPttComposerWaveform.react").WaveformLocation.DRAFT_PREVIEW} sampleRate={recordingSession.getWaveformSampleRate()} getSamples={fe} getCurrentTime={getCurrentTime} getDuration={pe} live={re} mode={o("WAWebPttComposerWaveform.react").WaveformMode.PREVIEW} onSeek={onSeek} onSeekEnd={onSeekEnd} tabIndex={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON}/></div><Y12 time={ve}/></div>;
        const Re = function(t) {
            if (t.key === "Escape") {
                t.stopPropagation();
                ae();
            }
        };
        const Component_5 = r("WAWebPttCancelButton.react");
        const Component_6 = r("WAWebVelocityTransitionGroup");
        const Component_7 = r("WAWebPttSendButton.react");
        const Component_8 = r("WAWebNewsletterWamoSubMessageTypePopup.react");
        return <div onKeyDown={Re} ref={uRef} className="x78zum5 x6s0dn4 xh8yej3 x19ygybj" tabIndex={0}><Component_5 ref={MRef} confirmOnMouseUp={confirmOnMouseUp} onConfirm={ae} tabOrder={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON}/><div className="x1n2onr6 x78zum5 x1iyjqo2 xs83m0k x1r8uery x6s0dn4 x5yr21d"><Component_6 transitionName="fade">{b === _.RECORDER ? Ce : null}{b === _.PREVIEW ? Se : null}</Component_6></div>{ye}{be}<Component_7 ref={gRef} disabled={!Q && !X} confirmOnMouseUp={confirmOnMouseUp} onConfirm={le} tabOrder={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON}/>{I != null && <Component_8 handleSelect={I.handleSelect} popupAnchorEl={I.popupAnchorEl} onDismiss={function() {
            return T(null);
        }}/>}</div>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function useH() {
        const e = o("react-compiler-runtime").c(2);
        const t = useState(false);
        const n = t[0];
        const r = t[1];
        let a;
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                const e = self.setTimeout(function() {
                    r(true);
                }, 250);
                const t = function() {
                    r(false);
                    n();
                };
                window.addEventListener("mouseup", t);
                var n = function() {
                    window.removeEventListener("mouseup", t);
                    self.clearTimeout(e);
                };
                return n;
            };
            i = [];
            e[0] = a;
            e[1] = i;
        } else {
            a = e[0];
            i = e[1];
        }
        useEffect(a, i);
        return n;
    }
    function Y12(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_time = e.time;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x2c5eco xunn93x"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_time) {
            a = o("WAWebClock").Clock.durationStr(e_time);
            t[1] = e_time;
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        if (t[3] !== a) {
            i = <div {...babelHelpers.extends({}, r, {
                role: "timer",
                children: a
            })}/>;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    l.default = g;
}, 98);