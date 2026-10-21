__d("WAWebRichOrderStatusLogger", [
    "$InternalEnum",
    "Promise",
    "WAWebABProps",
    "WAWebBusinessTemplateRichOrderStatusWamEvent",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent",
    "WAWebQbmRichOrderStatusInteractionWamEvent",
    "WAWebUnifiedSession",
    "WAWebUserPrefsGeneral",
    "WAWebUtilsPnhSmbLoggingHelper",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum")({
        ORDER_TRACKING_URL_CLICK: "order_tracking_url_click",
        VIEW_ORDER_PRIMARY_CLICK: "view_order_primary_click",
        VIEW_ORDER_SECONDARY_CLICK: "view_order_secondary_click",
        VIEW_ORDER_ITEM_PLACEHOLDER_CLICK: "view_order_item_placeholder_click",
        ORDER_ITEM_ROW_CLICK: "order_item_row_click",
        ORDER_NUMBER_COPY: "order_number_copy",
        TRACKING_NUMBER_COPY: "tracking_number_copy",
        MESSAGE_HEADER_CLICK: "message_header_click",
        MESSAGE_CTA_CLICK: "message_cta_click"
    });
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, actionTypeRichOrderStatus) {
            if (o("WAWebABProps").getABPropConfigValue("utility_order_status_logging_enabled")) {
                const i = o("WAWebFrontendMsgGetters").getChat(t);
                const l = o("WAWebContactCollection").ContactCollection.get(i.id);
                const isBizIntent = l ? o("WAWebContactGetters").getIsBusiness(l) : false;
                const contactType = isBizIntent ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB : o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE;
                const chatsFolderType = i.archive ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX;
                const d = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                const m = o("WAWebChatGetters").getMuteExpiration(i);
                const p = m > Date.now();
                const _ = l ? o("WAWebFrontendContactGetters").getIsMyContact(l) : false;
                const f = Date.now();
                const g = o("WAWebMsgGetters").getT(t);
                const deltaTime = Math.round((f - g * 1000) / 1000);
                const y = o("WAWebChatGetters").getId(i).toString();
                const C = o("WAWebMsgGetters").getId(t);
                const b = yield (e || (e = n("Promise"))).all([
                    o("WAWebChatThreadLogging").getMessageIDHMAC(C.toString()),
                    o("WAWebChatThreadLogging").getChatThreadIDHMAC(y)
                ]);
                const v = b[0];
                const S = b[1];
                const R = o("WAWebMsgGetters").getClientReceivedTsMillis(t);
                const deltaTimeReceived = R != null ? Math.round((f - R) / 1000) : undefined;
                const E = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
                const k = E.readReceipts !== "none";
                new (o("WAWebQbmRichOrderStatusInteractionWamEvent")).QbmRichOrderStatusInteractionWamEvent({
                    actionTypeRichOrderStatus,
                    chatsFolderType,
                    contactType,
                    deltaTime,
                    deltaTimeReceived,
                    isInsubContact: _,
                    isMuted: p,
                    messageIdHmac: v ?? undefined,
                    readReceiptsEnabled: k,
                    threadIdHmac: S ?? undefined,
                    unifiedSessionId: d ?? undefined
                }).commit();
                new (o("WAWebBusinessTemplateRichOrderStatusWamEvent")).BusinessTemplateRichOrderStatusWamEvent({
                    actionTypeRichOrderStatus,
                    businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(o("WAWebChatGetters").getId(i)),
                    chatsFolderType,
                    contactType,
                    isBizIntent,
                    isInsubContact: _,
                    isMuted: p,
                    readReceiptsEnabled: k,
                    templateId: t.templateId ?? undefined
                }).commit();
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebABProps").getABPropConfigValue("utility_order_status_logging_enabled")) {
                const t = o("WAWebOrderStatusButton").getOrderStatusButton(e);
                if (t) {
                    const n = o("WAWebFrontendMsgGetters").getChat(e);
                    const r = o("WAWebOrderStatus").getMergedOrderStatus(n, t);
                    const a = r.firstMessage;
                    if (a) {
                        const i = o("WAWebOrderStatusButton").getOrderStatusButton(a);
                        if (i) {
                            const hasHeaderImageChanged = e.mediaData.filehash !== a.mediaData.filehash;
                            for(var s = t.order.items || [], u = i.order.items || [], hasCurrencyChanged = t.order.currency !== i.order.currency, hasItemNumberChanged = s.length !== u.length, hasItemNameChanged = false, hasItemQuantityChanged = false, hasItemVariantChanged = false, hasItemImageChanged = false, hasItemPriceChanged = false, h = 0; h < Math.min(s.length, u.length); h++){
                                const S = s[h];
                                const R = u[h];
                                if (!hasItemNameChanged) {
                                    hasItemNameChanged = S.name !== R.name;
                                }
                                if (!hasItemQuantityChanged) {
                                    hasItemQuantityChanged = S.quantity !== R.quantity;
                                }
                                if (!hasItemVariantChanged) {
                                    hasItemVariantChanged = S.variant !== R.variant;
                                }
                                if (!hasItemImageChanged) {
                                    hasItemImageChanged = S.image.file_sha256 !== R.image.file_sha256;
                                }
                                if (!hasItemPriceChanged) {
                                    hasItemPriceChanged = S.amount?.value !== R.amount?.value || S.amount?.offset !== R.amount?.offset;
                                }
                            }
                            new (o("WAWebPsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent")).PsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent({
                                businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(o("WAWebChatGetters").getId(n)),
                                hasCurrencyChanged,
                                hasHeaderImageChanged,
                                hasItemImageChanged,
                                hasItemNameChanged,
                                hasItemNumberChanged,
                                hasItemPriceChanged,
                                hasItemQuantityChanged,
                                hasItemVariantChanged
                            }).commit();
                        }
                    }
                }
            }
        });
        return m.apply(this, arguments);
    }
    l.RichOrderStatusActionType = s;
    l.logRichOrderStatusInteraction = u;
    l.logRichOrderStatusInconsistencies = d;
}, 98);