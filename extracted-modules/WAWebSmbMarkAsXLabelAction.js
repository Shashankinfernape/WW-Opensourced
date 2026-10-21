__d("WAWebSmbMarkAsXLabelAction", [
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCTWAConstants",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebConversionTupleCollection",
    "WAWebConversionTupleModel",
    "WAWebCtwaLabelSignalWamEvent",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebWamEnumCtwaLabelTarget",
    "WAWebWamEnumCtwaLabelType",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new Map([
        [
            (e = o("WAWebCTWAConstants")).ALLOWED_PREDEFINED_LABEL_IDS.NEW_CUSTOMER,
            (s = o("WAWebWamEnumCtwaLabelType")).CTWA_LABEL_TYPE.NEW_CUSTOMER
        ],
        [
            e.ALLOWED_PREDEFINED_LABEL_IDS.NEW_ORDER,
            s.CTWA_LABEL_TYPE.NEW_ORDER
        ],
        [
            e.ALLOWED_PREDEFINED_LABEL_IDS.PENDING_PAYMENT,
            s.CTWA_LABEL_TYPE.PENDING_PAYMENT
        ],
        [
            e.ALLOWED_PREDEFINED_LABEL_IDS.PAID,
            s.CTWA_LABEL_TYPE.PAID
        ],
        [
            e.ALLOWED_PREDEFINED_LABEL_IDS.ORDER_COMPLETE,
            s.CTWA_LABEL_TYPE.ORDER_COMPLETE
        ],
        [
            e.ALLOWED_PREDEFINED_LABEL_IDS.FOLLOW_UP,
            s.CTWA_LABEL_TYPE.FOLLOW_UP
        ],
        [
            e.ALLOWED_PREDEFINED_LABEL_IDS.LEAD,
            s.CTWA_LABEL_TYPE.LEAD
        ]
    ]);
    const c = {
        globalSharingSettingEnabled: false
    };
    const d = (t)=>{
        if (t === o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.FOLLOW_UP || t === o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.LEAD || t === o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.DO_LEAD) {
            return {};
        }
        if (t === o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.PAID) {
            return {
                paid: true
            };
        }
        return {
            paid: false
        };
    };
    const m = (eventSharingSettingEnabled)=>{
        const e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        switch(e){
            case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true:
                return babelHelpers.extends({
                    globalSharingSettingEnabled: true
                }, o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() ? null : {
                    eventSharingSettingEnabled
                });
            case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false:
                return c;
            case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset:
            default:
                return null;
        }
    };
    function p(e, { lead, metadata }) {
        const a = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e));
        if (a != null) {
            const i = _(metadata);
            const labelId = lead ? o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.DO_LEAD : o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.DO_NEW_ORDER;
            o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignal({
                chat: a,
                paidData: d(labelId),
                signalMetadata: i,
                subType: lead ? "do_lead" : "do_new_order",
                surface: "label_chat",
                type: lead ? "lead_created" : "order_created"
            }, true);
            f(a, [
                labelId
            ], true, null, i == null ? null : {
                labelId,
                metadata: i
            });
        }
    }
    function _(metadata) {
        if (!(metadata == null || !o("WAWebABProps").getABPropConfigValue("ctwa_ae_model_meta_data_signal_enabled"))) {
            return metadata;
        }
    }
    function f(e, t, n, a, i) {
        const u = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e);
        if (!(u == null || !o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats()) && !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
            const c = r("WAWebConversionTupleCollection").get(e.id);
            if (!(c != null && o("WATimeUtils").unixTime() - c.timestamp > o("WAWebConversionTupleModel").ConversionTupleExpiry && o("WAWebCTWAGatingUtils").isCtwaConversionCreationFromDelayEnabled())) {
                const p = e.accountLid?.toString();
                const customerAdsSharingSettingEnabled = o("WAWebPerCustomerDataSharingUtils").getCustomerAdsDataSharingState(p);
                const ctwaConversationDepth = c?.conversationDepth ?? 0;
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(e.id.toString()).then((e)=>{
                    if (t && t.length !== 0) {
                        t.forEach((ctwaLabelType)=>{
                            const r = d(ctwaLabelType);
                            const ctwaSignalMetadata = i != null && i.labelId === ctwaLabelType ? i.metadata : JSON.stringify(r);
                            const l = babelHelpers.extends({
                                ctwaConversationDepth,
                                ctwaLabelSignalVersion: 2,
                                ctwaLabelTarget: o("WAWebWamEnumCtwaLabelTarget").CTWA_LABEL_TARGET.CHAT,
                                ctwaLabelType,
                                ctwaSignalMetadata,
                                deepLinkConversionSource: u.source
                            }, m(n), {
                                customerAdsSharingSettingEnabled,
                                threadIdHmac: e ?? undefined
                            });
                            new (o("WAWebCtwaLabelSignalWamEvent")).CtwaLabelSignalWamEvent(l).commit();
                        });
                    }
                    if (a && a.length !== 0) {
                        a.forEach((t)=>{
                            const t_ctwa_3pd_conversion_subtype = t.ctwa_3pd_conversion_subtype;
                            if (t_ctwa_3pd_conversion_subtype) {
                                const a = babelHelpers.extends({
                                    ctwaConversationDepth,
                                    ctwaLabelSignalVersion: 2,
                                    ctwaLabelTarget: o("WAWebWamEnumCtwaLabelTarget").CTWA_LABEL_TARGET.CHAT,
                                    ctwaLabelType: o("WAWebLabelConstants").mapCustomLabelSubtypeToCTWALabelType(t_ctwa_3pd_conversion_subtype),
                                    ctwaSignalMetadata: t.ctwa_3pd_conversion_metadata,
                                    deepLinkConversionSource: u.source
                                }, m(n), {
                                    customerAdsSharingSettingEnabled,
                                    threadIdHmac: e ?? undefined
                                });
                                new (o("WAWebCtwaLabelSignalWamEvent")).CtwaLabelSignalWamEvent(a).commit();
                            }
                        });
                    }
                });
            }
        }
    }
    function g(e, t, n) {
        const r = [];
        t.forEach((e)=>{
            const t = o("WAWebLabelCollection").LabelCollection.get(e);
            const n = t?.predefinedId;
            if (n != null) {
                const a = u.get(n);
                if (a != null) {
                    r.push(a);
                }
                if (n === o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID && o("WAWebCTWAGatingUtils").is3pdImportantLabelSignalsEnabled()) {
                    r.push(o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.IMPORTANT);
                }
            }
        });
        if (r.length !== 0) {
            e.forEach((e)=>{
                if (e instanceof o("WAWebChatModel").Chat) {
                    f(e, r, n);
                }
            });
        }
    }
    l.emitDetectedOutcomeSignalsOnReceive = p;
    l.logLabelAddedToChatAction = f;
    l.logLabelSignalForModels = g;
}, 98);