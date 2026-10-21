__d("WAWebAttachMenuPopupItemOrders.react", [
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebBizEntryPoint",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebOrderCreationFlowLoadable",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderExpansionNotSupportedPopup.react",
    "WAWebOrdersExpansionUtils",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WDSIconIcReceiptFilled.react",
    "WDSMenuItem.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            color: "x1ydg37e",
            $$css: true
        },
        opacityOverride: {
            opacity: "xuzhngd",
            $$css: true
        }
    };
    function c({ chat, dismissMenu, onAlternateSendFlowStart }) {
        const i = ()=>{
            new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
                orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_ORDER_FROM_ICON_MENU,
                actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_CREATION),
                orderDetailEntryPoint: String(r("WAWebBizEntryPoint").MERCHANT_INITIATED),
                hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow()))
            }).commit();
            const e = function() {
                const Component = r("WAWebOrderCreationFlowLoadable");
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component entryPoint={r("WAWebBizEntryPoint").MERCHANT_INITIATED} chat={chat} onSend={function() {
                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.ORDER);
                }} onCancel={function() {
                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.ORDER);
                }}/>, {
                    transition: "slide-left"
                });
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.ORDER);
            };
            r("WAWebSmbDataSharingOptInModalDialog").maybeShowOrderDataSharingDialog(chat, e, o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER);
        };
        const l = ()=>{
            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebOrderExpansionNotSupportedPopup.react"), {
                chat
            }));
        };
        const c = !o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled() && o("WAWebOrdersExpansionUtils").isSellerCountrySameAsBuyer(chat) || o("WAWebOrdersExpansionUtils").isContactCountrySupported(chat);
        const d = function() {
            if (c) {
                onAlternateSendFlowStart();
                i();
            } else {
                l();
            }
            dismissMenu();
        };
        const iconXstyle = [
            u.icon,
            !c && u.opacityOverride
        ];
        const Component = r("WDSMenuItem.react");
        return <Component testid="mi-attach-order" onPress={d} Icon={r("WDSIconIcReceiptFilled.react")} iconXstyle={iconXstyle} title={o("WAWebAttachMenuStrings").OrderText()}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);