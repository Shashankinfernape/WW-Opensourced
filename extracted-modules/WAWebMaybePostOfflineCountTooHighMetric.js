__d("WAWebMaybePostOfflineCountTooHighMetric", [
    "WALogger",
    "WAWebBackendJobsCommon",
    "WAWebMsgProcessingApiUtils",
    "WAWebOfflineCountTooHighWamEvent",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumStanzaType",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 11;
    function u({ encs: r, msgInfo: a, msgMeta: i }) {
        const l = parseInt(a.offline, 10);
        if (!(Number.isNaN(l) || l < s)) {
            const u = new (o("WAWebOfflineCountTooHighWamEvent")).OfflineCountTooHighWamEvent({
                offlineCount: l,
                stanzaType: o("WAWebWamEnumStanzaType").STANZA_TYPE.MESSAGE,
                mediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
                    encMediaType: r.find((e)=>e.encMediaType != null)?.encMediaType,
                    msgType: i.type,
                    msgPollType: i.pollType
                })
            });
            const c = o("WAWebWamMsgUtils").getMessageTypeFromMsgInfoType(a.type);
            if (c != null) {
                u.messageType = c;
            }
            const d = o("WAWebMsgProcessingApiUtils").getFrom(a);
            const m = o("WAWebWamMsgUtils").getWamE2eSenderType(d);
            if (m != null) {
                u.e2eSenderType = m;
            }
            if (d.isHosted()) {
                u.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
            }
            u.commitAndWaitForFlush().catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to post OfflineCountTooHigh metric: ",
                    ""
                ])), String(t)).tags("messaging");
            });
        }
    }
    l.OFFLINE_COUNT_TOO_HIGH_THRESHOLD = s;
    l.maybePostOfflineCountTooHigh = u;
}, 98);