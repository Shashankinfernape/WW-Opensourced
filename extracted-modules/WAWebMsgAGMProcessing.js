__d("WAWebMsgAGMProcessing", [
    "WALogger",
    "WATimeUtils",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebDBMessageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 50;
    function u({ ctwaContext: t, from: n, msgKey: r, msgTimestamp: a, to: i }) {
        if (t.greetingMessageBody == null || t.automatedGreetingMessageShown !== true || t.sourceId == null) {
            return null;
        }
        const l = a != null ? o("WATimeUtils").castToUnixTime(parseInt(a, 10)) : o("WATimeUtils").unixTimeMs();
        const s = {
            id: r,
            t: l,
            type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
            kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            from: n,
            to: i,
            ctwaContext: t,
            body: t.greetingMessageBody
        };
        return s;
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = t.ctwaContext;
            try {
                if (a == null) {
                    return [
                        t
                    ];
                }
                const i = o("WAWebCtwaAGMUtils").extractAGMPayload(a);
                const l = o("WAWebMsgGetters").getIsSentByMe(t);
                if (a.automatedGreetingMessageShown !== true || a.sourceId == null) {
                    return [
                        t
                    ];
                }
                if (r("isStringNullOrEmpty")(a.greetingMessageBody)) {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.null_greeting_message,
                        fromBusiness: !l,
                        agmPayload: i,
                        businessWid: t.to,
                        adId: a.sourceId
                    });
                    return [
                        t
                    ];
                }
                if (a.sourceApp != null && !Object.values(o("WAWebCtwaAGMUtils").AGM_SOURCE_APP).includes(a.sourceApp)) {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.invalid_source_app,
                        fromBusiness: !l,
                        agmPayload: i,
                        businessWid: t.to,
                        adId: a.sourceId
                    });
                    return [
                        t
                    ];
                }
                if (i?.ctaType != null && !Object.values(o("WAWebCtwaAGMUtils").AGM_CTA_TYPE).includes(i?.ctaType)) {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_invalid_cta_payload,
                        fromBusiness: !l,
                        agmPayload: i,
                        businessWid: t.to,
                        adId: a.sourceId
                    });
                }
                const { from: s, id: u, t: c, to: d, viewMode: p } = t;
                const f = s;
                const g = d;
                const h = yield m(n.chat);
                const y = _(a?.sourceId, h);
                if (y) {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.duplicated,
                        fromBusiness: !l,
                        agmPayload: i,
                        businessWid: g,
                        adId: a.sourceId
                    });
                    return [
                        t
                    ];
                }
                const C = {
                    id: new (r("WAWebMsgKey"))({
                        remote: n.chat,
                        fromMe: !u.fromMe,
                        id: yield r("WAWebMsgKey").newId()
                    }),
                    ctwaContext: a,
                    body: a.greetingMessageBody,
                    from: g,
                    to: f,
                    type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
                    kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
                    viewMode: p,
                    t: c ?? o("WATimeUtils").unixTimeMs()
                };
                o("WAWebCtwaLogger").logAGMOperation({
                    operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.injected,
                    fromBusiness: !l,
                    agmPayload: i,
                    businessWid: g,
                    adId: a.sourceId
                });
                if (r("isStringNullOrEmpty")(a.description)) {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.bottomsheet_text_error,
                        fromBusiness: !l,
                        agmPayload: i,
                        businessWid: g,
                        adId: a.sourceId
                    });
                }
                if (r("isStringNullOrEmpty")(a.originalImageUrl)) {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_image_error,
                        fromBusiness: !l,
                        agmPayload: i,
                        businessWid: g,
                        adId: a.sourceId
                    });
                }
                return [
                    C,
                    t
                ];
            } catch (n) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAGMMsgs: cannot create MsgKey: ",
                    ""
                ])), n);
                return [
                    t
                ];
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebDBMessageUtils").beginningOfChat(e);
            const n = o("WAWebDBMessageUtils").endOfChat(e);
            const r = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], t, n, {
                lowerInclusive: true,
                upperInclusive: false,
                limit: s,
                reverse: true
            });
            return r.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE);
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        if (e == null) {
            return false;
        }
        return t.some(({ ctwaContext: n })=>n != null && n.sourceId === e);
    }
    l.genHistoryAutomatedGreetingMsg = u;
    l.generateAutomatedGreetingMsgs = c;
}, 98);