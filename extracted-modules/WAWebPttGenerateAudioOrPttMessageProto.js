__d("WAWebPttGenerateAudioOrPttMessageProto", [
    "invariant",
    "WALogger",
    "WATypeUtils",
    "WAWebAudioMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u({ contextInfo, json, mediaMetadata }) {
        if (!mediaMetadata) {
            s(0, 66891);
        }
        const l = json.mimetype || mediaMetadata.mimetype;
        const mediaMetadata_duration = mediaMetadata.duration;
        const c = json.waveform || mediaMetadata.waveform;
        const d = mediaMetadata_duration != null && o("WATypeUtils").isString(mediaMetadata_duration) ? parseInt(mediaMetadata_duration, 10) : mediaMetadata_duration;
        const audioMessage = {
            url: mediaMetadata.url,
            mimetype: l,
            directPath: mediaMetadata.directPath,
            fileSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.filehash),
            fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.encFilehash),
            seconds: d,
            ptt: json.type === "ptt",
            fileLength: o("WATypeUtils").isNumber(json.size) ? json.size : undefined,
            mediaKey: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.mediaKey),
            mediaKeyTimestamp: o("WATypeUtils").isNumber(mediaMetadata.mediaKeyTimestamp) ? mediaMetadata.mediaKeyTimestamp : undefined,
            contextInfo,
            streamingSidecar: json.streamingSidecar,
            viewOnce: json.isViewOnce
        };
        if (c) {
            if (o("WAWebAudioMessageProtoUtils").validateWaveform(c)) {
                audioMessage.waveform = c.buffer;
            } else {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Outgoing waveform with invalid size: ",
                    ""
                ])), c.byteLength).sendLogs("outgoing-waveform-invalid-size");
            }
        }
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(json.type ? "ptt" : "audio", audioMessage, r("WAWebWid").isNewsletter(json.to));
        return {
            audioMessage
        };
    }
    l.default = u;
}, 98);