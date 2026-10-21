__d("WAWebHandleBizThreadDataNotification", [
    "WALogger",
    "WASmaxBizThreadDataNotifyRPC",
    "WASmaxNotificationFallbackGenericNotificationRPC",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWebApplyServerLeadStage",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 0.01;
    const p = new Set([
        "detected_outcome",
        "lead_stage"
    ]);
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleBizThreadDataNotification: notification received"
            ])));
            const t_content = t.content;
            const a = Array.isArray(t_content) ? t_content.find((e)=>String(e.tag) === "thread_data") : null;
            if (a != null) {
                const i = o("WASmaxParseUtils").attrString(a, "notif_sub_type");
                if (i.success && !p.has(i.value)) {
                    return o("WASmaxNotificationFallbackGenericNotificationRPC").makeGenericNotificationResponseAck(t);
                }
            }
            try {
                const l = o("WASmaxBizThreadDataNotifyRPC").receiveNotifyRPC(t);
                const u = l.parsedRequest;
                if (u.threadDataSubtypeMixin.notifSubType === "detected_outcome" && u.threadDataOrigin === "generated") {
                    o("WAWebBackendApi").frontendFireAndForget("emitDetectedOutcomeNotificationSignal", {
                        payloadJson: new TextDecoder("utf-8").decode(u.threadDataPayloadElementValue),
                        threadLid: u.threadDataThreadLid.toString()
                    });
                }
                if (u.threadDataSubtypeMixin.notifSubType === "lead_stage") {
                    yield g(u.threadDataThreadLid.toString(), new TextDecoder("utf-8").decode(u.threadDataPayloadElementValue));
                }
            } catch (error) {
                if (error instanceof o("WASmaxParsingFailure").SmaxParsingFailure) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleBizThreadDataNotification: parse failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-thread-data-parse-failed", {
                        sampling: m
                    });
                    return o("WASmaxNotificationFallbackGenericNotificationRPC").makeGenericNotificationResponseBadStanza({
                        ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError
                    }, t);
                }
                throw error;
            }
            return o("WASmaxNotificationFallbackGenericNotificationRPC").makeGenericNotificationResponseAck(t);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = y(t);
            if (n == null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizThreadDataNotification: lead_stage payload has no lead_stage_id"
                ])));
                return;
            }
            try {
                const a = yield o("WAWebApplyServerLeadStage").applyServerLeadStage(e, n);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizThreadDataNotification: lead_stage ",
                    ""
                ])), a);
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizThreadDataNotification: applying lead_stage failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-thread-data-lead-stage-apply-failed", {
                    sampling: m
                });
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        try {
            const t = JSON.parse(e);
            if (t != null && typeof t === "object") {
                const n = t.lead_stage_id;
                if (typeof n === "string") {
                    return n;
                }
                return null;
            }
        } catch (e) {
            return null;
        }
        return null;
    }
    l.handleBizThreadDataNotification = _;
}, 98);