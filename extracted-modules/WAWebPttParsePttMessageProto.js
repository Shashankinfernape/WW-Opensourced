__d("WAWebPttParsePttMessageProto", [
    "WALongInt",
    "WATimeUtils",
    "WAWebAudioMessageProtoUtils",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n, msgContext: r }) {
        const a = n.audioMessage;
        if (a != null) {
            const i = a.ptt;
            if (i === true) {
                const { contextInfo: l, backgroundArgb: s, directPath: u, mediaKeyTimestamp: c, mimetype: d, seconds: m, streamingSidecar: p, viewOnce: _, waveform: f } = a;
                const g = o("WAWebMediaMessageGetValidatedProperties").getValidatedMediaMessageProperties(a, t, r, o("WAWebMsgType").MSG_TYPE.PTT);
                const { fileEncSha256: h, fileLength: y, fileSha256: C, mediaKey: b, url: v } = g;
                const S = babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.PTT,
                    kind: o("WAWebMsgType").MsgKind.Ptt,
                    deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(v),
                    directPath: u,
                    mimetype: d,
                    filehash: o("WAWebE2EProtoParserApi").decodeBytes(C),
                    encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(h),
                    size: y,
                    duration: `${m || 0}`,
                    mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(b),
                    mediaKeyTimestamp: c != null ? o("WALongInt").numberOrThrowIfTooLarge(c) : o("WATimeUtils").unixTime(),
                    streamingSidecar: p,
                    waveform: f && o("WAWebAudioMessageProtoUtils").validateWaveform(f) ? new Uint8Array(f) : void 0,
                    backgroundColor: s,
                    isViewOnce: _ === true
                });
                o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(S, a);
                o("WAWebAudioMessageProtoUtils").validateRequiredAudioProperties(S, a);
                return {
                    msgData: S,
                    contextInfo: l
                };
            }
        }
    }
    l.default = e;
}, 98);