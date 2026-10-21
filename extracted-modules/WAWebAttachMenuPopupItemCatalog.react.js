__d("WAWebAttachMenuPopupItemCatalog.react", [
    "WAWebAttachMenuStrings",
    "WAWebAttachProductModalLoadable",
    "WAWebAttachmentMenuLogger",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogSession",
    "WAWebUtilsLogQplEvents",
    "WDSIconIcStoreFilled.react",
    "WDSMenuItem.react",
    "react",
    "useLazyRef"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            color: "x1bzzifw",
            $$css: true
        }
    };
    function c({ chat, disabled, dismissMenu, onAlternateSendFlowStart }) {
        const l = r("useLazyRef")(function() {
            return new (o("WAWebProductCatalogSession")).ProductCatalogSession;
        });
        const c = ()=>{
            const e = l.current.toString();
            if (e != null) {
                onAlternateSendFlowStart();
                o("WAWebProductCatalogLogEvents").logCatalogAttachmentButtonClick(e);
                o("WAWebUtilsLogQplEvents").qplStartCatalogView("Attachment");
                const Component = o("WAWebAttachProductModalLoadable").AttachProductModalLoadable;
                o("WAWebModalManager").ModalManager.open(<Component chat={chat} sessionId={e} onSend={function() {
                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CATALOG);
                }} onCancel={function() {
                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CATALOG);
                }}/>);
                dismissMenu();
                o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CATALOG);
            }
        };
        const d = function() {
            c();
        };
        const Component = r("WDSMenuItem.react");
        return <Component testid="mi-attach-product-catalog" onPress={d} Icon={r("WDSIconIcStoreFilled.react")} iconXstyle={u.icon} title={o("WAWebAttachMenuStrings").CatalogText()} disabled={disabled}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);