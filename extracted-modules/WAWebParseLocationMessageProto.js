__d("WAWebParseLocationMessageProto", [
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        let a = (e.name ?? "") || (e.address ?? "");
        if (e.name != null && e.name !== "" && e.address != null && e.address !== "") {
            a = `${e.name}
${e.address}`;
        }
        const i = e.degreesLatitude !== void 0 ? e.degreesLatitude : void 0;
        const l = e.degreesLongitude !== void 0 ? e.degreesLongitude : void 0;
        const s = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.LOCATION,
            kind: o("WAWebMsgType").MsgKind.Location,
            loc: a,
            lat: i,
            lng: l,
            body: o("WAWebE2EProtoParserApi").decodeBytes(e.jpegThumbnail) || "",
            clientUrl: e.url
        });
        return {
            msgData: s,
            contextInfo: e.contextInfo
        };
    }
    function s(e, t, n) {
        let r;
        if (n) {
            r = {
                finalLat: n.degreesLatitude,
                finalLng: n.degreesLongitude,
                finalThumbnail: o("WAWebE2EProtoParserApi").decodeBytes(n.jpegThumbnail) || "",
                finalAccuracy: n.accuracyInMeters,
                finalSpeed: n.speedInMps,
                finalDegrees: n.degreesClockwiseFromMagneticNorth,
                finalTimeOffset: n.timeOffset
            };
        }
        const a = babelHelpers.extends({}, t, r, {
            type: o("WAWebMsgType").MSG_TYPE.LOCATION,
            kind: o("WAWebMsgType").MsgKind.LocationLive,
            isLive: true,
            lat: e.degreesLatitude,
            lng: e.degreesLongitude,
            body: o("WAWebE2EProtoParserApi").decodeBytes(e.jpegThumbnail) || "",
            accuracy: e.accuracyInMeters,
            speed: e.speedInMps,
            degrees: e.degreesClockwiseFromMagneticNorth,
            comment: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(e.caption),
            sequence: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.sequenceNumber)
        });
        return {
            msgData: a,
            contextInfo: e.contextInfo
        };
    }
    function u({ baseMessage: n, finalLocation: r, messageProtobuf: o }) {
        const { liveLocationMessage: a, locationMessage: i } = o;
        let l = null;
        if (i != null) {
            l = e(i, n);
        }
        if (a != null) {
            l = s(a, n, r);
        }
        return l;
    }
    l.default = u;
}, 98);