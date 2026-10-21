__d("WAWebNewsletterDeleteModal.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebEnforcementActionLogging",
    "WAWebModalManager",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterDeleteAction",
    "WAWebUserConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumInteractionSurface",
    "WAWebWamEnumThreadType",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect } = c;
    function p() {
        return s._("To delete, confirm your country code and enter your phone number.");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _() {
        return s._("To delete, confirm your email.");
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f() {
        return s._("Delete");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e) {
        const t = o("react-compiler-runtime").c(21);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebChatGetters").getName
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e_chat.id, a);
        const l = i[0];
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = [];
            t[1] = c;
        } else {
            c = t[1];
        }
        useEffect(y, c);
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", h);
        let d;
        if (t[2] !== e_chat.id) {
            d = function() {
                o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log({
                    channelCoreEventType: o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.DELETE,
                    cid: e_chat.id,
                    eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                });
                o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                o("WAWebModalManager").ModalManager.close();
            };
            t[2] = e_chat.id;
            t[3] = d;
        } else {
            d = t[3];
        }
        const onCompletion = d;
        let C;
        if (t[4] !== e_chat) {
            C = function() {
                r("WAWebEnforcementActionLogging").logChannelDeletePhoneNumberConfirmClick();
                return o("WAWebNewsletterDeleteAction").deleteNewsletterAction(e_chat);
            };
            t[4] = e_chat;
            t[5] = C;
        } else {
            C = t[5];
        }
        let errorMessage;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            errorMessage = s._("The channel couldn't be deleted. Please try again.");
            t[6] = errorMessage;
        } else {
            errorMessage = t[6];
        }
        let v;
        if (t[7] !== C) {
            v = [
                {
                    action: C,
                    errorMessage
                }
            ];
            t[7] = C;
            t[8] = v;
        } else {
            v = t[8];
        }
        const S = v;
        let R;
        if (t[9] !== l) {
            R = s._("You deleted your channel \"{channel-name}\"", [
                s._param("channel-name", u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: l
                }))
            ]);
            t[9] = l;
            t[10] = R;
        } else {
            R = t[10];
        }
        const successText = R;
        let E;
        if (t[11] !== e_chat.id) {
            E = {
                surface: "channel-delete-page",
                extras: {
                    channelWid: e_chat.id,
                    threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL
                }
            };
            t[11] = e_chat.id;
            t[12] = E;
        } else {
            E = t[12];
        }
        const k = E;
        let emailContentText;
        let phoneContentText;
        let D;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            D = f();
            emailContentText = _();
            phoneContentText = p();
            t[13] = emailContentText;
            t[14] = phoneContentText;
            t[15] = D;
        } else {
            emailContentText = t[13];
            phoneContentText = t[14];
            D = t[15];
        }
        let x;
        if (t[16] !== S || t[17] !== onCompletion || t[18] !== successText || t[19] !== k) {
            const Component = r("WAWebUserConfirmationModal.react");
            x = <Component actions={S} actionType="solid-warning" actionText={D} emailContentText={emailContentText} phoneContentText={phoneContentText} successText={successText} onCompletion={onCompletion} tsNavigationData={k}/>;
            t[16] = S;
            t[17] = onCompletion;
            t[18] = successText;
            t[19] = k;
            t[20] = x;
        } else {
            x = t[20];
        }
        return x;
    }
    function h() {
        r("WAWebEnforcementActionLogging").logDismissModalClick();
    }
    function y() {
        r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.DELETE_CHANNEL_PHONE_NUMBER_CONFIRM);
    }
    l.default = g;
}, 226);