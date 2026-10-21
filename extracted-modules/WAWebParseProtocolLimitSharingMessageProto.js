__d("WAWebParseProtocolLimitSharingMessageProto", [
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingPairDedup",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = o("WAWebParseLimitSharingHistorySyncProto").getLimitSharingEnvelopeFromProtobuf(n);
        if (!(r?.type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.LIMIT_SHARING || !(r != null && r.limitSharing))) {
            const a = o("WAWebParseLimitSharingHistorySyncProto").getLimitSharingFromEnvelope(r.limitSharing, o("WAWebWidFactory").createWid(t.from.toString()));
            const i = a.sharingLimited;
            const l = i != null && o("WAWebLimitSharingGatingUtils").isAcp2Enabled() && o("WAWebLimitSharingPairDedup").consumePairedRedundantAcp1(t.id.remote.toString(), {
                enabled: i,
                fromMe: t.id.fromMe,
                settingTimestamp: a.limitSharingSettingTimestamp
            });
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                    subtype: "limit_sharing_system_message",
                    kind: "protocol",
                    limitSharing: a
                }, l ? {
                    viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
                } : null),
                contextInfo: void 0
            };
        }
    }
    l.default = e;
}, 98);