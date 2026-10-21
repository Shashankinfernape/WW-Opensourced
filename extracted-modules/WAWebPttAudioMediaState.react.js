__d("WAWebPttAudioMediaState.react", [
    "fbt",
    "WALogger",
    "WAWebAck",
    "WAWebMarkPlayedMsgAction",
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebPttAudioPlayer.react",
    "WAWebStateUtils",
    "WDSButton.react",
    "WDSIconIcDownload.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSIconIcUpload.react",
    "react",
    "useWAWebCallbackOnce",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = [
        "ref"
    ];
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useImperativeHandle, useRef } = p;
    const g = {
        button: {
            width: "x1691je0",
            height: "x90ne7k",
            color: "x14ug900",
            $$css: true
        }
    };
    function h(t) {
        let n;
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, c);
        const { enableKbSeekSpeedChange, msgKey } = i;
        const p = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebMsgGetters")).getAck,
            n.getIsSentByMe,
            n.getType,
            n.getIsAckPlayable,
            n.getIsViewOnce
        ]);
        const h = p[0];
        const y = p[1];
        const C = p[2];
        const isAckPlayable = p[3];
        const isViewOnce = p[4];
        const S = o("useWAWebMediaDataValues").useMediaDataValues(i.mediaData, [
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getSize,
            o("WAWebMediaDataGetters").getWaveform
        ]);
        const R = S[0];
        const fileSize = S[1];
        const E = S[2];
        const k = C === "ptt" ? msgKey : undefined;
        const waveform = C === "ptt" ? E : undefined;
        const TRef = useRef(null);
        const D = (n)=>{
            const t = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (t == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ptt] media action skipped, message left the collection"
                ])));
                return;
            }
            n(t);
        };
        const x = function() {
            D((e)=>void e.forceDownloadMediaEvenIfExpensive());
        };
        const $ = function() {
            D((e)=>void e.resumeUpload());
        };
        const P = function() {
            D((e)=>void e.resumeRemoteUpload());
        };
        const N = function() {
            D((e)=>o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebMediaMissingModal.react"), {
                    msg: e
                })));
        };
        const M = function() {
            D((e)=>e.cancelUpload());
        };
        const w = r("useWAWebCallbackOnce")(function() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "mediaObject state not covered in AudioMediaState: ",
                ""
            ])), R);
        }, [
            R
        ]);
        useImperativeHandle(t_ref, function() {
            return {
                handleKeyActivation: function(t) {
                    TRef.current?.handleKeyActivation(t);
                }
            };
        });
        const Component = o("WAWebPttAudioPlayer.react").WrappedAudioPlayer;
        const Component_1 = r("WDSButton.react");
        const Component_2 = r("WDSButton.react");
        const Component_3 = r("WDSButton.react");
        switch(R){
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                return <Component ref={TRef} mediaData={o("WAWebStateUtils").unproxy(i.mediaData)} outgoingMsg={y} played={o("WAWebMarkPlayedMsgAction").canMarkPlayedFor({
                    ack: h,
                    isAckPlayable,
                    isSentByMe: y,
                    isViewOnce
                }) ? h === o("WAWebAck").ACK.PLAYED : true} displayType={i.displayType} msgKey={msgKey} enableKbSeekSpeedChange={enableKbSeekSpeedChange}/>;
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                return m.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
                    button: <Component_1 Icon={r("WDSIconIcDownload.react")} xstyle={g.button} onPress={x} aria-label={s._("Download voice message")} variant="borderless" size="large" testid="ptt_audio_download"/>,
                    outgoingMsg: y,
                    msgKey: k,
                    waveform
                });
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                return m.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
                    button: <Component_2 Icon={r("WDSIconIcUpload.react")} xstyle={g.button} onPress={$} aria-label={s._("Upload voice message")} variant="borderless" size="large" testid="ptt_audio_upload"/>,
                    outgoingMsg: y,
                    msgKey: k,
                    waveform
                });
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                return m.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
                    button: <Component_3 Icon={r("WDSIconIcUpload.react")} xstyle={g.button} onPress={P} aria-label={s._("Upload voice message")} variant="borderless" size="large" testid="ptt_audio_upload"/>,
                    outgoingMsg: y,
                    msgKey: k,
                    waveform
                });
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                return m.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
                    icon: m.jsx(r("WDSIconIcPlayArrowFilled.react"), {
                        directional: true,
                        height: 34,
                        width: 34
                    }),
                    ariaLabel: s._("Play voice message"),
                    outgoingMsg: y,
                    action: N,
                    msgKey: k,
                    waveform
                });
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
                {
                    const canCancel = R === o("WAWebMediaTypes").MediaDataStage.UPLOADING;
                    return m.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
                        action: canCancel ? M : undefined,
                        canCancel,
                        fileSize,
                        outgoingMsg: y,
                        spinner: true,
                        msgKey: k,
                        waveform
                    });
                }
            default:
                w();
                return m.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
                    spinner: true,
                    outgoingMsg: y,
                    msgKey: k,
                    waveform
                });
        }
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.default = h;
}, 226);