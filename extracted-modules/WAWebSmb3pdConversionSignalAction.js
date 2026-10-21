__d("WAWebSmb3pdConversionSignalAction", [
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebCTWAConstants",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatModel",
    "WAWebCommonCTWADataSharing",
    "WAWebConversionTupleCollection",
    "WAWebConversionTupleModel",
    "WAWebCtwa3pdConversionWamEvent",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "WAWebLabelCollection",
    "WAWebOrderStatus"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (t, type)=>{
        if (type === "order_created" || t == null) {
            return "processing";
        }
        switch(t){
            case o("WAWebOrderStatus").OrderStatus.Shipped:
                return "shipped";
            case o("WAWebOrderStatus").OrderStatus.Complete:
            case o("WAWebOrderStatus").OrderStatus.Delivered:
                return "completed";
            case o("WAWebOrderStatus").OrderStatus.Canceled:
                return "canceled";
            case o("WAWebOrderStatus").OrderStatus.Processing:
            case o("WAWebOrderStatus").OrderStatus.Pending:
            case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
            case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
            case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
            case o("WAWebOrderStatus").OrderStatus.Confirmed:
            case o("WAWebOrderStatus").OrderStatus.Delayed:
            case o("WAWebOrderStatus").OrderStatus.Failed:
            case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
            case o("WAWebOrderStatus").OrderStatus.Refunded:
                return "processing";
        }
    };
    const u = function({ chat, orderStatus, paidData, schemaVersion, signalMetadata, subType, surface, type }, a) {
        const g = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(chat);
        const h = o("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(chat);
        if (g != null && !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
            const y = r("WAWebConversionTupleCollection").get(chat.id);
            if (!(y != null && o("WATimeUtils").unixTime() - y.timestamp > o("WAWebConversionTupleModel").ConversionTupleExpiry && o("WAWebCTWAGatingUtils").isCtwaConversionCreationFromDelayEnabled()) && o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true) {
                const ctwa3pdConversionSubtype = subType ?? (type === "detected_outcome" ? null : s(orderStatus ?? null, type));
                if (ctwa3pdConversionSubtype != null) {
                    const ctwa3pdConversionMetadata = signalMetadata ?? JSON.stringify(paidData);
                    const ctwaConversationDepth = y?.conversationDepth ?? 0;
                    const ctwaConversationRepeat = y?.conversationRepeat ?? 0;
                    const R = o("WAWebCTWAGatingUtils").get3pdPostDcDepthLimit();
                    if (!(R > 0 && ctwaConversationDepth > R)) {
                        const L = {
                            ctwa3pdSchemaVersion: schemaVersion ?? 2,
                            ctwa3pdSurfaceType: surface,
                            ctwa3pdConversionType: type,
                            ctwa3pdConversionSubtype,
                            ctwa3pdConversionMetadata,
                            ctwaConversationDepth,
                            ctwaConversationRepeat,
                            ctwaSignals: h ?? undefined
                        };
                        if (g.data != null) {
                            L.ctwaTrackingPayload = g.data;
                        }
                        if (o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled()) {
                            o("WAWebDownloads3PDSignalsDatabaseApi").addOrEdit3PDSignal({
                                clickId: L.ctwaTrackingPayload ?? "",
                                ctwa3pdConversionType: type,
                                ctwa3pdConversionSubtype,
                                ctwa3pdConversionMetadata,
                                timestamp: o("WATimeUtils").unixTimeMs()
                            }).catch((t)=>{
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "addOrEdit3PDSignal: failed to add 3PD signal to the database"
                                ])));
                                return null;
                            });
                        }
                        const k = o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() ? chat.accountLid == null || !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(chat.accountLid.toString()) : !a;
                        if (!k) {
                            new (o("WAWebCtwa3pdConversionWamEvent")).Ctwa3pdConversionWamEvent(L).commit();
                        }
                    }
                }
            }
        }
    };
    const c = (t, n, r, isDataSharingEnabled)=>{
        const e = o("WAWebLabelCollection").LabelCollection.get(t);
        if (e != null) {
            const i = e.predefinedId;
            if (i != null && !(!o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS_SET.has(i) && !(i === o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID && o("WAWebCTWAGatingUtils").is3pdImportantLabelSignalsEnabled()))) {
                let l;
                if (i === o("WAWebCTWAConstants").FOLLOW_UP_PREDEFINED_ID || i === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID || i === o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID) {
                    l = "lead_created";
                } else if (i === o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.NEW_ORDER || i === o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.NEW_CUSTOMER) {
                    l = "order_created";
                } else {
                    l = "order_updated";
                }
                let subType;
                let paidData = {};
                switch(i){
                    case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.NEW_CUSTOMER:
                        subType = "new_customer";
                        paidData = {
                            paid: false
                        };
                        break;
                    case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.ORDER_COMPLETE:
                        subType = "order_complete";
                        paidData = {
                            paid: false
                        };
                        break;
                    case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.NEW_ORDER:
                        subType = "new_order";
                        paidData = {
                            paid: false
                        };
                        break;
                    case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.PAID:
                        subType = "paid";
                        paidData = {
                            paid: true
                        };
                        break;
                    case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.PENDING_PAYMENT:
                        subType = "pending_payment";
                        paidData = {
                            paid: false
                        };
                        break;
                    case o("WAWebCTWAConstants").FOLLOW_UP_PREDEFINED_ID:
                        subType = "follow_up";
                        break;
                    case o("WAWebCTWAConstants").LEAD_PREDEFINED_ID:
                        subType = "lead";
                        break;
                    case o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID:
                        subType = "important";
                        paidData = {
                            paid: false
                        };
                        break;
                }
                u({
                    paidData,
                    chat: n,
                    surface: r,
                    type: l,
                    subType
                }, isDataSharingEnabled);
            }
        }
    };
    function d({ chat, isPaidStateChanged, orderStatus, paidData, type }, t) {
        if (o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
            const s = {
                surface: "order",
                chat,
                type,
                orderStatus,
                paidData
            };
            if (isPaidStateChanged === true) {
                s.subType = "paid_change";
            }
            u(s, t);
        }
    }
    const m = ({ chats, isDataSharingEnabled, labelIds })=>{
        const o = "label_chat";
        chats.forEach((e)=>{
            labelIds.forEach((t)=>{
                c(t, e, o, isDataSharingEnabled);
            });
        });
    };
    const p = (t, customLabelsMappingEvents, isDataSharingEnabled)=>{
        const e = "label_chat";
        t.forEach((t)=>{
            customLabelsMappingEvents.forEach((n)=>{
                const { ctwa_3pd_conversion_subtype, ctwa_3pd_conversion_type } = n;
                if (!(!ctwa_3pd_conversion_type || !ctwa_3pd_conversion_subtype)) {
                    const paidData = JSON.parse(n.ctwa_3pd_conversion_metadata);
                    u({
                        paidData,
                        chat: t,
                        surface: e,
                        type: ctwa_3pd_conversion_type,
                        subType: ctwa_3pd_conversion_subtype
                    }, isDataSharingEnabled);
                }
            });
        });
    };
    function _({ customLabelsMappingEvents, isDataSharingEnabled, labelIds, models }) {
        if (models.length !== 0) {
            const i = models.reduce((acc, model)=>{
                if (model instanceof o("WAWebChatModel").Chat) {
                    acc.push(model);
                }
                return acc;
            }, []);
            if (labelIds != null && labelIds.length > 0 && i.length > 0 && o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats()) {
                m({
                    chats: i,
                    isDataSharingEnabled,
                    labelIds
                });
            }
            if (customLabelsMappingEvents != null && customLabelsMappingEvents.length > 0 && i.length > 0 && o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats()) {
                p(i, customLabelsMappingEvents, isDataSharingEnabled);
            }
        }
    }
    l.log3pdConversionSignal = u;
    l.log3pdConversionSignalForOrders = d;
    l.log3pdConversionSignalForChats = _;
}, 98);