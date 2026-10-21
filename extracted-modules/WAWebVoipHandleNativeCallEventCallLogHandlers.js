__d("WAWebVoipHandleNativeCallEventCallLogHandlers", [
    "Promise",
    "WACamelCase",
    "WALogger",
    "WATimeUtils",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBackendApi",
    "WAWebCallLogSync",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebHandleRetryRequest",
    "WAWebSyncdCoreApi",
    "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    "WAWebVoipQplHelpers",
    "WAWebVoipStackInterface",
    "WAWebVoipTimeSeriesUpload",
    "WAWebVoipWaCallEnums",
    "WAWebWamCodegenUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const i = a.parsers.parseSyncDeviceData(t);
            yield (p || (p = n("Promise"))).all(i.map((e)=>o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [
                        e.UserJid
                    ],
                    phash: e.PHash,
                    context: "voip"
                })));
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleSyncDevices: ",
                " wids synced"
            ])), i.length);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebVoipQplHelpers").startVoipEndCallQpl();
            o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CALL_ENDING_HANDLER_START);
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const callEndingData = t.parsers.parseCallEndingData(e);
            const n_result = callEndingData.result;
            e: {
                if (n_result === o("WAWebVoipWaCallEnums").CallLogResult.Connected || n_result === o("WAWebVoipWaCallEnums").CallLogResult.ConnectedLonely) {
                    o("WAWebCoreActionsODS").logCallSuccess();
                    break e;
                }
                if (n_result === o("WAWebVoipWaCallEnums").CallLogResult.Failed) {
                    o("WAWebCoreActionsODS").logCallErrorTerminal();
                    break e;
                }
                if (n_result === o("WAWebVoipWaCallEnums").CallLogResult.Unavailable) {
                    if (callEndingData.connectTime != null && callEndingData.connectTime > 0) {
                        o("WAWebCoreActionsODS").logCallErrorTerminal();
                    }
                    break e;
                }
                break e;
            }
            o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromNativeCallEndingEvent", {
                callEndingData
            });
            o("WAWebBackendApi").frontendFireAndForget("handleCallEndingForSurvey", {
                userRatingInterval: callEndingData.userRatingInterval,
                connectTime: callEndingData.connectTime,
                callLogResult: callEndingData.result
            });
            if (callEndingData.userRatingInterval < 0) {
                o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").requestStoredFieldstatsSend();
            }
            if (callEndingData.timeSeriesPath != null && t.type === "web") {
                o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm").then((e)=>o("WAWebVoipTimeSeriesUpload").uploadTimeSeriesLogsAsync(callEndingData, e)).catch((e)=>{
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [TS Upload] Failed to upload time-series logs: ",
                        ""
                    ])), e);
                });
            }
            if (callEndingData.fromMe && callEndingData.isCallLink !== true) {
                yield y(callEndingData);
            }
            o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CALL_ENDING_HANDLER_END);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WATimeUtils").unixTimeMs();
            const a = r("WAWebCallLogSync").getCallLogMutation(t, e);
            yield o("WAWebSyncdCoreApi").lockForSync([], [
                a
            ], function() {
                return (p || (p = n("Promise"))).resolve();
            });
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const n = t.parsers.parseRejectedDecryptionFailureData(e);
            yield o("WAWebHandleRetryRequest").handleRetryRequest({
                stanzaId: null,
                originalMsgId: n.CallId,
                ts: null,
                retryCount: n.RetryCount,
                regId: n.Registration,
                offline: false,
                from: n.PeerDeviceJid,
                participant: null,
                recipient: null,
                keyBundle: null,
                type: "voip_1x1_retry"
            });
            yield t.resendOfferOnDecryptionFailure(n.PeerDeviceJid.toString({
                formatIncludeDevice: true,
                legacy: true
            }), n.CallId);
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const joinableCallLogData = t.parsers.parseUpdateJoinableCallLogData(e);
            o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromEventUpdateJoinable", {
                joinableCallLogData
            });
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const callMissedData = t.parsers.parseCallMissedData(e);
            if (callMissedData.PeerUserJid != null) {
                o("WAWebBackendApi").frontendFireAndForget("cancelCallNotification", {
                    wid: callMissedData.PeerUserJid
                });
            }
            o("WAWebCoreActionsODS").logCallIncomingMissed();
            o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromEventCallMissed", {
                callMissedData
            });
            if (callMissedData.ShouldUploadFieldStats === true) {
                k(callMissedData);
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ MissedCallFieldStats }) {
            if (MissedCallFieldStats == null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: missed call fieldstats: no stats to send"
                ])));
                return;
            }
            try {
                const n = Object.entries(MissedCallFieldStats);
                const a = Object.fromEntries(r("compactMap")(n, function([t, n]) {
                    const a = t === "abtest_bucket" ? "callTestBucket" : r("WACamelCase")(t, {
                        treatNumbersAsWordBoundaries: false
                    });
                    if (a == null) {
                        return null;
                    }
                    try {
                        const i = o("WAWebWamCodegenUtils").metrics.getEvent("Call", a);
                        if (i.type === "boolean") {
                            return [
                                a,
                                !!n
                            ];
                        }
                        return [
                            a,
                            n
                        ];
                    } catch (e) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: missed call fieldstats: metric undefined for ",
                            ""
                        ])), a);
                        return null;
                    }
                }));
                const i = yield o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId");
                const l = new (o("WAWebCallWamEvent")).CallWamEvent(a);
                if (i != null) {
                    l.set({
                        unifiedSessionId: i
                    });
                }
                l.commit();
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: missed call WAM event committed"
                ])));
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to send missed call fieldstats"
                ]))).catching(r("getErrorSafe")(error));
            }
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const call1to1LogData = t.parsers.parseUpdate1to1CallLogData(e);
            o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromEventUpdate1to1", {
                call1to1LogData
            });
        });
        return D.apply(this, arguments);
    }
    function x() {
        o("WAWebBackendApi").frontendFireAndForget("handleMuteRequestFailed", {});
    }
    function $(e) {
        let muterJid = null;
        try {
            const a = JSON.parse(e);
            muterJid = a?.muter_jid?.raw_jid ?? null;
        } catch (e) {}
        o("WAWebBackendApi").frontendFireAndForget("handleMutedByOthers", {
            muterJid
        });
    }
    function P(e) {}
    l.handleSyncDevices = _;
    l.handleCallEnding = g;
    l.handleRejectedDecryptionFailure = b;
    l.handleUpdateJoinableCallLog = S;
    l.handleCallMissed = L;
    l.handleUpdate1to1CallLog = T;
    l.handleMuteRequestFailed = x;
    l.handleMutedByOthers = $;
    l.handleNoOpEvent = P;
}, 98);