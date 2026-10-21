__d("WAWebMessageComponentWrapper.react", [
    "WAWebBizVPVTrackableMessageComponent.react",
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageComponent.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebTrackableMessageComponent.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizVPVData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "msgComponentRef",
        "onContextMenu"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(19);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.msgComponentRef;
            i = t.onContextMenu;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        let s;
        if (n[4] !== a || n[5] !== i || n[6] !== l) {
            s = i == null ? u.jsx(r("WAWebMessageComponent.react"), babelHelpers.extends({
                ref: a
            }, l)) : <div onContextMenu={i}>{u.jsx(r("WAWebMessageComponent.react"), babelHelpers.extends({
                ref: a
            }, l))}</div>;
            n[4] = a;
            n[5] = i;
            n[6] = l;
            n[7] = s;
        } else {
            s = n[7];
        }
        const c = s;
        const d = o("WAWebFrontendMsgGetters").getChat(l.msg);
        const m = o("WAWebChatGetters").getIsNewsletter(d);
        let p;
        if (n[8] !== l.msg.serverId) {
            p = l.msg.serverId?.toString();
            n[8] = l.msg.serverId;
            n[9] = p;
        } else {
            p = n[9];
        }
        const postId = p;
        const visibilityData = r("useWAWebBizVPVData")(l.msg);
        if (visibilityData != null) {
            let h;
            if (n[10] !== c || n[11] !== visibilityData) {
                h = u.jsx(r("WAWebBizVPVTrackableMessageComponent.react"), {
                    component: c,
                    visibilityData
                });
                n[10] = c;
                n[11] = visibilityData;
                n[12] = h;
            } else {
                h = n[12];
            }
            return h;
        }
        const y = m && o("WAWebNewsletterGatingUtils").isNewsletterVPVMessageVisibilityLoggingEnabled();
        const d_newsletterMetadata = d.newsletterMetadata;
        if (y && postId != null && d_newsletterMetadata != null) {
            const channelUserType = o("WAWebNewsletterLoggingUtils").getChannelUserType(d_newsletterMetadata?.membershipType);
            let v;
            if (n[13] !== channelUserType || n[14] !== c || n[15] !== l.chat || n[16] !== l.msg || n[17] !== postId) {
                v = u.jsx(r("WAWebTrackableMessageComponent.react"), {
                    component: c,
                    chat: l.chat,
                    msg: l.msg,
                    postId,
                    channelUserType
                });
                n[13] = channelUserType;
                n[14] = c;
                n[15] = l.chat;
                n[16] = l.msg;
                n[17] = postId;
                n[18] = v;
            } else {
                v = n[18];
            }
            return v;
        }
        return c;
    }
    l.default = c;
}, 98);