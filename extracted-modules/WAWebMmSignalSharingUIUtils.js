__d("WAWebMmSignalSharingUIUtils", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebMmSignalSharingDisclosureModalLoadable.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingShowDisclosureModal",
    "WAWebMmSignalSharingTos",
    "WAWebModalManager",
    "WAWebQbmMessageClickLogEvent",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return o("WAWebFaqUrl").getFullUrl(o("WAWebMmSignalSharingGatingUtils").getMmDisclosureLearnMoreArticleId());
        }
        return "";
    }
    function d(e) {
        const t = s._("This chat has offers and announcements");
        const ctaText = s._("Learn more");
        const handleClick = function() {
            Component({
                action: "learnMore",
                chat: e,
                onLearnMore: function() {
                    return o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingDisclosureLearnMoreEvent({
                        eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.DISCLOSURE_INFO_CLICK,
                        chat: e
                    });
                }
            });
        };
        return {
            text: t,
            ctaText,
            handleClick
        };
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled() && e.target instanceof HTMLElement && e.target?.tagName === "A") {
                e.preventDefault();
                const a = yield o("WAWebMmSignalSharingShowDisclosureModal").showDisclosureModalForMm(t, n.unsafe(), o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK);
                const i = e.target instanceof HTMLAnchorElement && e.target ? e.target : null;
                const l = o("WAWebMmSignalSharingModelUtils").getBodyLinkForMmSignalSharing({
                    chat: t,
                    msg: n.unsafe(),
                    isMmSignalSharingDisclosureTosAccepted: o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted(),
                    defaultUrl: i?.href
                });
                const { index, link } = l;
                if (link == null) {
                    return;
                }
                if (a && index != null) {
                    Component({
                        eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                        chat: t,
                        onOk: function() {
                            const e = o("WAWebMmSignalSharingModelUtils").getBodyLinkForMmSignalSharing({
                                chat: t,
                                msg: n.unsafe(),
                                isMmSignalSharingDisclosureTosAccepted: o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted(),
                                defaultUrl: i?.href
                            });
                            const { index, link } = e;
                            if (link != null) {
                                o("WAWebExternalLink.react").openExternalLink(link);
                                o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingLinkClickEvent({
                                    eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                                    linkTypeIndex: index,
                                    msg: n,
                                    chat: t,
                                    hasShownDisclosure: true
                                });
                                o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                                    msg: n.unsafe(),
                                    chat: t,
                                    buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.BODY_URL
                                });
                                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                                    msg: n,
                                    chat: t,
                                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.LINK_CLICK,
                                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                                });
                            }
                        },
                        onCancel: function(isExplicitCancel) {
                            return o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingDisclosureCancelEvent({
                                eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                                chat: t,
                                msg: n.unsafe(),
                                isExplicitCancel
                            });
                        },
                        onDismissed: function() {
                            const e = o("WAWebMmSignalSharingModelUtils").getBodyLinkForMmSignalSharing({
                                chat: t,
                                msg: n.unsafe(),
                                isMmSignalSharingDisclosureTosAccepted: o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted(),
                                defaultUrl: i?.href
                            });
                            const e_link = e.link;
                            if (e_link != null) {
                                o("WAWebExternalLink.react").openExternalLink(e_link);
                                o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingLinkClickEvent({
                                    eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                                    linkTypeIndex: index,
                                    msg: n,
                                    chat: t,
                                    hasShownDisclosure: true
                                });
                                o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                                    msg: n.unsafe(),
                                    chat: t,
                                    buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.BODY_URL
                                });
                                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                                    msg: n,
                                    chat: t,
                                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.LINK_CLICK,
                                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                                });
                            }
                        }
                    });
                } else if (i?.href != null) {
                    o("WAWebExternalLink.react").openExternalLink(link);
                    o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingLinkClickEvent({
                        eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                        linkTypeIndex: index,
                        msg: n,
                        chat: t
                    });
                    o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                        msg: n.unsafe(),
                        chat: t,
                        buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.BODY_URL
                    });
                    o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                        msg: n,
                        chat: t,
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.LINK_CLICK,
                        messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                    });
                }
            }
        });
        return p.apply(this, arguments);
    }
    function Component({ action, chat, eventType, onCancel, onDismissed, onLearnMore, onOk }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            const Component = o("WAWebMmSignalSharingDisclosureModalLoadable.react").MmSignalSharingDisclosureModal;
            o("WAWebModalManager").ModalManager.open(<Component action={action} eventType={eventType} chat={chat} onOk={onOk} onCancel={onCancel} onDismissed={onDismissed} onLearnMore={onLearnMore}/>);
        }
    }
    l.getMmSignalSharingLearnMoreHCAURL = c;
    l.getMmSignalSharingMessageNotification = d;
    l.manageMmSignalSharingBodyClick = m;
    l.openMmSignalSharingDisclosureModal = Component;
}, 226);