__d("WAWebPttAudioPlayer.react", [
    "fbt",
    "WAAbortError",
    "WAWebAccessibility.react",
    "WAWebAppTracker",
    "WAWebClock",
    "WAWebDisplayType",
    "WAWebDocStateControls.react",
    "WAWebEventsWaitForEvent",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10nFilesize",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPttGetSafeDuration",
    "WAWebPttMessageSeekBar",
    "WAWebPttMessageWaveform.react",
    "WAWebPttMsgAudioStore",
    "WAWebPttPrefs",
    "WAWebPttPrefsGetters",
    "WAWebUA",
    "WDSButton.react",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "asyncToGeneratorRuntime",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "useWAWebAnimationFrames",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebMsgValues",
    "useWAWebOnUnmount",
    "useWAWebPttPrefsValues",
    "useWAWebSendViewCount"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useRef, useState } = m;
    const h = {
        button: {
            position: "x1n2onr6",
            display: "x1lliihq",
            width: "x1691je0",
            height: "x90ne7k",
            color: "xhslqc4",
            $$css: true
        },
        playControl: {
            color: "x14ug900",
            $$css: true
        }
    };
    function y(t) {
        const r = o("react-compiler-runtime").c(6);
        let a;
        let i;
        if (r[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            r[0] = t;
            r[1] = a;
            r[2] = i;
        } else {
            a = r[1];
            i = r[2];
        }
        const l = o("useWAWebMsgValues").useOptionalMsgValues(a.msgKey, [
            o("WAWebMsgGetters").getType
        ])?.[0];
        if (l !== o("WAWebMsgType").MSG_TYPE.PTT && l !== o("WAWebMsgType").MSG_TYPE.AUDIO) {
            return null;
        }
        let s;
        if (r[3] !== a || r[4] !== i) {
            s = <C {...babelHelpers.extends({
                ref: i
            }, a)}/>;
            r[3] = a;
            r[4] = i;
            r[5] = s;
        } else {
            s = r[5];
        }
        return s;
    }
    function C(e) {
        const e_ref = e.ref;
        const { displayType, enableKbSeekSpeedChange = false, mediaData, msgKey, outgoingMsg, played } = babelHelpers.objectWithoutPropertiesLoose(e, u);
        const L = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getId,
            o("WAWebFrontendMsgGetters").getAsPttLike
        ]);
        const E = L[0];
        const k = L[1];
        const I = o("useWAWebPttPrefsValues").usePttPrefsValues([
            o("WAWebPttPrefsGetters").getPlaybackRate
        ]);
        const T = I[0];
        const D = o("useWAWebSendViewCount").usePlaybackSendViewCount(msgKey, {
            mediaData
        });
        const xRef = useRef(T);
        const $RefRef = useRef(0);
        const PRef = useRef(null);
        const N = useState(function() {
            return o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudioForKey(msgKey);
        });
        const M = N[0];
        const w = N[1];
        const A = useState(msgKey);
        const F = A[0];
        const O = A[1];
        if (F !== msgKey) {
            O(msgKey);
            w(function(e) {
                const t = o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudioForKey(msgKey);
                e.dispose();
                return t;
            });
        }
        const { audio, pttPlaybackLogger } = M;
        const q = useState(function() {
            return o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromMediaOrProtobuf(audio, mediaData);
        });
        const U = q[0];
        const V = q[1];
        const H = useState(!audio.paused);
        const G = H[0];
        const z = H[1];
        const j = useState(null);
        const seekingTime = j[0];
        const Q = j[1];
        const X = useState(U > 0 ? audio.currentTime / U : 0);
        const Y = X[0];
        const J = X[1];
        const Z = (t, n)=>{
            J(n > 0 ? t / n : 0);
        };
        const eeRef = useRef(false);
        const te = ()=>Y * U;
        const ne = function() {
            if (!eeRef.current) {
                const e = audio.currentTime;
                D(e);
                const t = te();
                if (e !== t) {
                    Z(e, U);
                }
            }
        };
        const re = r("useWAWebMeasure")();
        const bodyRef = re[0];
        const ae = re[1];
        const ie = ae.width || 200;
        const delay = Math.floor(U * 1000 / (ie * T));
        r("useWAWebAnimationFrames")(ne, {
            active: G,
            delay
        });
        r("useWAWebOnUnmount")(function() {
            if (!o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage) {
                pttPlaybackLogger.commit(true);
                audio.pause();
            }
            if (audio.paused) {
                o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessageForKey(msgKey);
            }
            M.dispose();
        });
        const se = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!eeRef.current) {
                    eeRef.current = true;
                    const e = k == null ? 1 : T;
                    audio.playbackRate = e;
                    audio.defaultPlaybackRate = e;
                    let t = o("WAWebPttGetSafeDuration").getSafeDuration(audio);
                    if (t == null) {
                        const n = r("WAWebEventsWaitForEvent")(audio, "durationchange");
                        audio.load();
                        yield n;
                        t = o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromMediaOrProtobuf(audio, mediaData);
                    }
                    audio.currentTime = Y * t;
                    audio.play().catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
                    eeRef.current = false;
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const ue = function() {
            if (PRef.current) {
                $RefRef.current = PRef.current.getBoundingClientRect().top;
            }
            if (G) {
                audio.pause();
            } else {
                r("promiseDone")(se());
            }
        };
        const ce = function() {
            z(!audio.paused);
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PlayPTT);
        };
        const de = ()=>U ?? o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(mediaData);
        const me = function() {
            const e = o("WAWebPttGetSafeDuration").getSafeDuration(audio);
            const t = de();
            if (e != null && e !== t) {
                V(e);
            }
        };
        const onSeek = function(t) {
            Q(t);
        };
        const onSeekEnd = function(t) {
            const audio_duration = audio.duration;
            const n = t === audio_duration && !G ? 0 : t;
            Z(n, U);
            audio.currentTime = n;
            Q(null);
        };
        useEffect(function() {
            const xRef_current = xRef.current;
            if (T !== xRef_current) {
                audio.playbackRate = T;
                audio.defaultPlaybackRate = T;
                xRef.current = T;
            }
        }, [
            audio,
            T
        ]);
        const fe = function() {
            o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage();
            z(!audio.paused);
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PlayPTT);
        };
        const ge = function() {
            audio.currentTime = 0;
            audio.load();
            ne();
            o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage();
            z(!audio.paused);
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PlayPTT);
        };
        o("useWAWebListener").useListener(audio, "playing", ce);
        o("useWAWebListener").useListener(audio, "pause", fe);
        o("useWAWebListener").useListener(audio, "ended", ge);
        o("useWAWebListener").useListener(audio, "timeupdate", ne);
        o("useWAWebListener").useListener(audio, "durationchange", me);
        const he = function(t) {
            t.preventDefault();
            ue();
        };
        useImperativeHandle(e_ref, function() {
            return {
                handleKeyActivation: he
            };
        });
        const ye = r(G ? "WDSIconIcPauseFilled.react" : "WDSIconIcPlayArrowFilled.react");
        const Ce = G ? s._("Pause voice message") : s._("Play voice message");
        const Component = r("WDSButton.react");
        const button = <Component Icon={ye} xstyle={[
            h.button,
            h.playControl
        ]} onPress={ue} aria-label={Ce} variant="borderless" size="large" testid="audio-play"/>;
        const ve = (t)=>!(enableKbSeekSpeedChange !== true || o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC && t.metaKey !== true || o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.MAC && t.ctrlKey !== true);
        const Se = ({ direction, e: e_1 })=>{
            if (ve(e_1)) {
                if (direction === "left") {
                    o("WAWebPttPrefs").PttPrefs.decreasePlaybackRateFor(E);
                } else {
                    o("WAWebPttPrefs").PttPrefs.increasePlaybackRateFor(E);
                }
            }
        };
        const Re = {
            "ctrl+left": function(t) {
                return Se({
                    e: t,
                    direction: "left"
                });
            },
            "ctrl+right": function(t) {
                return Se({
                    e: t,
                    direction: "right"
                });
            },
            "meta+left": function(t) {
                return Se({
                    e: t,
                    direction: "left"
                });
            },
            "meta+right": function(t) {
                return Se({
                    e: t,
                    direction: "right"
                });
            }
        };
        const Le = <div ref={PRef} className="x10l6tqk x13vifvy xu96u03"/>;
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 handlers={enableKbSeekSpeedChange ? Re : {}} tabIndex={-1}><S bodyRef={bodyRef} button={button} played={played} outgoingMsg={outgoingMsg} displayType={displayType}>{Le}<V3Component duration={G ? te() : o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(mediaData)} seekingTime={seekingTime}/><R msgKey={msgKey} currentTime={te()} duration={U} onSeek={onSeek} onSeekEnd={onSeekEnd} outgoing={outgoingMsg} played={played ?? false} waveform={mediaData.waveform}/></S></Component_1>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    const b = y;
    function V3Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { duration, seekingTime } = e;
        const a = seekingTime ?? duration;
        if (a == null) {
            return null;
        }
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk x1bvqhpb"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== a) {
            l = o("WAWebClock").Clock.durationStr(a);
            t[1] = a;
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] !== l) {
            s = <div {...babelHelpers.extends({}, i, {
                "aria-hidden": true,
                children: l
            })}/>;
            t[3] = l;
            t[4] = s;
        } else {
            s = t[4];
        }
        return s;
    }
    function S(e) {
        const a = e.spinner === true && e.button == null ? <button className="x1n2onr6 x1lliihq x1691je0 x90ne7k xhslqc4" onClick={e.action} data-testid="audio-player-frame-spinner" aria-label={e.ariaLabel}><div className="x10l6tqk x13vifvy xu96u03">{d.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: e.outgoingMsg,
            canCancel: e.canCancel
        })}</div></button> : null;
        const i = e.icon != null && e.button == null && e.spinner !== true ? <button className="x1n2onr6 x1lliihq x1691je0 x90ne7k xhslqc4" onClick={e.action} aria-label={e.ariaLabel}>{e.icon}</button> : null;
        const l = e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        const e_fileSize = e.fileSize;
        const c = e_fileSize != null && e_fileSize !== 0 ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk x1bvqhpb"
            },
            1: {
                className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk x1bvqhpb x1cxzzos"
            }
        }[!!l << 0], {
            children: o("WAWebL10nFilesize").getL10nFilesize(e_fileSize)
        })}/> : null;
        const Component = o("WAWebAccessibility.react").InvisibleLabel;
        return <div className="x78zum5 x6s0dn4 xzt5al7 x1nbhmlj"><div className="x1n2onr6 x1lliihq x1okw0bk x1691je0 x90ne7k x1y332i5 x14mko6t">{e.button}{a}{i}</div><div ref={e.bodyRef} className="x1n2onr6 x98rzlu"><Component>{s._("Voice message")}</Component>{e.children ?? <R msgKey={e.msgKey} currentTime={0} duration={100} onSeek={r("WAWebNoop")} onSeekEnd={r("WAWebNoop")} outgoing={e.outgoingMsg} played={e.played ?? false} waveform={e.waveform} disabled/>}{c}</div></div>;
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R(e) {
        const t = o("react-compiler-runtime").c(18);
        const { currentTime, disabled, duration, msgKey, onSeek, onSeekEnd, outgoing, played, waveform } = e;
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebFrontendMsgGetters").getAsPttLike,
                o("WAWebMsgGetters").getId
            ];
            t[0] = _;
        } else {
            _ = t[0];
        }
        const f = o("useWAWebMsgValues").useOptionalMsgValues(msgKey, _);
        const g = !!(f != null && f[0]);
        const h = g || o("WAWebNewsletterGatingUtils").isAudioFileWaveformDisplayInNewslettersEnabled();
        if (h && waveform != null) {
            let y;
            if (t[1] !== currentTime || t[2] !== disabled || t[3] !== duration || t[4] !== onSeek || t[5] !== onSeekEnd || t[6] !== outgoing || t[7] !== played || t[8] !== waveform) {
                const Component = r("WAWebPttMessageWaveform.react");
                y = <Component currentTime={currentTime} duration={duration} onSeek={onSeek} onSeekEnd={onSeekEnd} outgoing={outgoing} played={played} waveform={waveform} disabled={disabled} skipThumb={disabled}/>;
                t[1] = currentTime;
                t[2] = disabled;
                t[3] = duration;
                t[4] = onSeek;
                t[5] = onSeekEnd;
                t[6] = outgoing;
                t[7] = played;
                t[8] = waveform;
                t[9] = y;
            } else {
                y = t[9];
            }
            return y;
        }
        let C;
        if (t[10] !== currentTime || t[11] !== disabled || t[12] !== duration || t[13] !== onSeek || t[14] !== onSeekEnd || t[15] !== outgoing || t[16] !== played) {
            const Component = r("WAWebPttMessageSeekBar");
            C = <Component currentTime={currentTime} duration={duration} onSeek={onSeek} onCommit={onSeekEnd} outgoing={outgoing} played={played} disabled={disabled}/>;
            t[10] = currentTime;
            t[11] = disabled;
            t[12] = duration;
            t[13] = onSeek;
            t[14] = onSeekEnd;
            t[15] = outgoing;
            t[16] = played;
            t[17] = C;
        } else {
            C = t[17];
        }
        return C;
    }
    l.WrappedAudioPlayer = b;
    l.AudioPlayerFrame = S;
}, 226);