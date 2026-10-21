__d("WAWebParseLimitSharingHistorySyncProto", [
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled() && e.messageStubType === o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType.CHANGE_LIMIT_SHARING) {
                const n = e.messageStubParameters;
                const r = n[0];
                const a = n[1];
                const i = n[2];
                const l = {
                    sharingLimited: r === "true",
                    limitSharingSettingTimestamp: Number(e.messageTimestamp) * 1000,
                    trigger: o("WAWebLimitSharingPropMappingUtils").getLimitSharingTriggerFromHistorySyncStubParameter(a)
                };
                const s = u(l, i ? o("WAWebWidFactory").createWid(i) : undefined);
                yield d(t, s);
            }
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return {
            sharingLimited: e?.sharingLimited,
            trigger: e?.trigger,
            limitSharingSettingTimestamp: e?.limitSharingSettingTimestamp,
            initiatedBy: t
        };
    }
    function c({ limitSharingMessage, protocolMessage }) {
        if (limitSharingMessage?.message?.protocolMessage?.limitSharing) {
            return limitSharingMessage?.message?.protocolMessage;
        }
        return protocolMessage;
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE;
            e.subtype = o("WAWebCommonMsgSubtypeTypes").MsgSubtype.LimitSharingSystemMessage;
            e.limitSharing = t;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return {
            enabled: e?.enabled,
            trigger: e?.trigger,
            settingTimestamp: e?.settingTimestamp,
            initiatedByMe: e?.initiatedByMe,
            initiatedBy: t
        };
    }
    function _({ acp2SettingMessage, protocolMessage }) {
        if (acp2SettingMessage?.message?.protocolMessage?.acp2Setting) {
            return acp2SettingMessage?.message?.protocolMessage;
        }
        return protocolMessage;
    }
    l.parseLimitSharingFromProtocolHistorySyncMessage = e;
    l.getLimitSharingFromEnvelope = u;
    l.getLimitSharingEnvelopeFromProtobuf = c;
    l.getAcp2SettingFromEnvelope = p;
    l.getAcp2EnvelopeFromProtobuf = _;
}, 98);