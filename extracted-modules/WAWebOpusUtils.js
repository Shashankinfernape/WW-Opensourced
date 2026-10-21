__d("WAWebOpusUtils", [
    "WATimeUtils",
    "WAWebApiChatCommon",
    "WAWebLimitSharingModelUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 1000;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = o("WAWebWidFactory").createWid(t);
            if (n?.skipSharingLimitedCheck !== true) {
                const i = yield o("WAWebApiChatCommon").getChatRecord(r);
                if (i?.limitSharing?.sharingLimited !== true) {
                    return;
                }
            }
            const l = {
                sharingLimited: false,
                trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN,
                limitSharingSettingTimestamp: Math.floor(o("WATimeUtils").unixTime()) * e
            };
            yield o("WAWebLimitSharingModelUtils").updateChat(r, l);
            if (n?.skipSystemMessage !== true) {
                yield o("WAWebLimitSharingModelUtils").genLimitSharingSystemMessage(r, l, {
                    beforeTimestamp: n?.beforeTimestamp
                });
            }
        });
        return u.apply(this, arguments);
    }
    l.opusProcessChat = s;
}, 98);