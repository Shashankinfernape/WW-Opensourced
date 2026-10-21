__d("WAWebRetrieveMessagesForBundle", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebDBMessageUtils",
    "WAWebDualUploadsAssociationTypes",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 50;
    function s(e, t) {
        const n = t ?? o("WATimeUtils").unixTime();
        const r = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs(e);
        return n - r;
    }
    function u(e, t, n) {
        if (!r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type) || e.isScheduledMsg === true || e.viewMode === o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE || e.t != null && e.t < t || n != null && e.t != null && e.t > n || o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(e.associationType)) {
            return false;
        }
        const a = r("WAWebMsgKey").fromString(e.id).fromMe && e.ack === o("WAWebAck").ACK.CLOCK;
        return !(e.isSendFailure === true || e.ack < o("WAWebAck").ACK.CLOCK || a || e.expiredTimestamp != null && e.expiredTimestamp < o("WATimeUtils").unixTime() && !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState));
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const i = Math.min(r ?? Infinity, o("WAWebABProps").getABPropConfigValue("group_history_message_count_limit"));
            const l = s(t, a);
            const c = [];
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "message"
            ], (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                    let s = o("WAWebDBMessageUtils").endOfChat(t);
                    let upperInclusive = true;
                    while(c.length < i){
                        const m = yield r.between([
                            "internalId"
                        ], o("WAWebDBMessageUtils").beginningOfChat(t), s, {
                            lowerInclusive: true,
                            upperInclusive,
                            reverse: true,
                            limit: e
                        }, function(e) {
                            return e.t != null && e.t < l;
                        });
                        if (m.length === 0) {
                            break;
                        }
                        const p = i - c.length;
                        c.push(...m.filter((e)=>u(e, l, a)).slice(0, p));
                        const _ = m[m.length - 1];
                        s = _.internalId;
                        upperInclusive = false;
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
            return c;
        });
        return d.apply(this, arguments);
    }
    l.retrieveMessagesForBundle = c;
}, 98);