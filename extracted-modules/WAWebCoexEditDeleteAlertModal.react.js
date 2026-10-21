__d("WAWebCoexEditDeleteAlertModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WAWebModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        BUSINESS_DELETE: "business_delete",
        BUSINESS_EDIT: "business_edit",
        CONSUMER_DELETE: "consumer_delete",
        CONSUMER_EDIT: "consumer_edit"
    };
    function DComponent({ alertType, onClose }) {
        const a = m(alertType);
        const { body, title } = a;
        const c = alertType === "business_edit" || alertType === "business_delete";
        const d = c ? p() : _();
        const f = function() {
            o("WAWebModalManager").ModalManager.closeAlert("none");
            self.setTimeout(function() {
                return o("WAWebExternalLink.react").openExternalLink(d);
            }, 10);
        };
        const g = function() {
            if (onClose != null) {
                onClose();
            } else {
                o("WAWebModalManager").ModalManager.closeAlert("none");
            }
        };
        const extraButtonProps = {
            onClick: f,
            text: s._("Learn more")
        };
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component testid="coex-edit-delete-alert-modal" tsNavigationData={{
            surface: "unknown",
            viewName: "coex-edit-delete-alert"
        }} onOK={g} buttonsDirection="horizontal" okText={r("WAWebFbtCommon")("OK")} type={o("WAWebModal.react").ModalTheme.Multiline} extraButtonProps={extraButtonProps}><strong>{title}</strong><br/><br/>{body}</Component>;
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    function m(alertType) {
        switch(alertType){
            case "consumer_edit":
                return {
                    body: s._("This message was edited in this chat on WhatsApp. The business may still be able to see the original message on other platforms."),
                    title: s._("Edits can only appear on WhatsApp")
                };
            case "business_edit":
                return {
                    body: s._("This message was edited in this chat on WhatsApp. It may not appear on other platforms."),
                    title: s._("Edits can only appear on WhatsApp")
                };
            case "consumer_delete":
                return {
                    body: s._("This message was deleted in this chat on WhatsApp. The business may still be able to see it on other platforms."),
                    title: s._("Messages can only be deleted on WhatsApp")
                };
            case "business_delete":
                return {
                    body: s._("This message was deleted in this chat on WhatsApp. It may still appear on other platforms."),
                    title: s._("Messages can only be deleted on WhatsApp")
                };
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${alertType}`);
                })();
        }
    }
    function p() {
        return `https://faq.whatsapp.com/8122483904494954?lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    function _() {
        return `https://faq.whatsapp.com/1520500555178162?lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    l.CoexAlertType = c;
    l.WAWebCoexEditDeleteAlertModal = DComponent;
}, 226);