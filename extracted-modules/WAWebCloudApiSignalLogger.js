__d("WAWebCloudApiSignalLogger", [
    "WAWebABProps",
    "WAWebCloudApiSignalEventWamEvent",
    "WAWebHandleMsgTypes.flow",
    "WAWebMmSignalSharingModelUtils",
    "WAWebWamEnumCloudApiSignalType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ carouselCardIndex, chat, ctaAction, ctaButtonIndex, msg, templateType }) {
        if (o("WAWebABProps").getABPropConfigValue("wa_biz_payment_template_click_signals")) {
            s({
                carouselCardIndex,
                chat,
                ctaButtonIndex,
                msg,
                signalType: o("WAWebWamEnumCloudApiSignalType").CLOUD_API_SIGNAL_TYPE.PAYMENT_TEMPLATE_CLICK,
                templateFields: {
                    cloudApiSignalCtaAction: ctaAction,
                    cloudApiSignalTemplateType: templateType
                }
            });
        }
    }
    function s({ carouselCardIndex, chat, ctaButtonIndex, msg, signalType, templateFields }) {
        if (!(chat.contact?.privacyMode?.hostStorage !== o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook || o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(msg))) {
            const cloudApiSignalData = o("WAWebMmSignalSharingModelUtils").getMmSignalSharingExpirationWindowItem({
                chat,
                msgId: msg.id
            })?.undisclosedToken;
            if (cloudApiSignalData != null) {
                new (o("WAWebCloudApiSignalEventWamEvent")).CloudApiSignalEventWamEvent(babelHelpers.extends({
                    cloudApiSignalCarouselCardIndex: carouselCardIndex,
                    cloudApiSignalCtaButtonIndex: ctaButtonIndex,
                    cloudApiSignalData,
                    cloudApiSignalType: signalType
                }, templateFields)).commit();
            }
        }
    }
    l.logCloudApiPaymentTemplateClick = e;
}, 98);