__d("WAWebTrackableMessageComponent.react", [
    "WAWebFrontendMsgGetters",
    "WAWebMessageAIContentLabel.react",
    "WAWebNewsletterGatingUtils",
    "WAWebViewMode.flow",
    "react",
    "react-compiler-runtime",
    "useWAWebAssociatedMessages",
    "useWAWebMsgValues",
    "useWAWebNewsletterMessageVisibilityLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(13);
        const { channelUserType, chat, component, msg, postId } = e;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            t[0] = c;
        } else {
            c = t[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msg.id, c);
        const m = d[0];
        const p = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(msg.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT);
        const aiProvenanceLabelShown = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(msg.id, p);
        const user = chat.id.user;
        const fromMe = msg.id.fromMe;
        const msg_star = msg.star;
        let aiProvenanceLabelEnabled;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            aiProvenanceLabelEnabled = o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled();
            t[1] = aiProvenanceLabelEnabled;
        } else {
            aiProvenanceLabelEnabled = t[1];
        }
        let C;
        if (t[2] !== aiProvenanceLabelShown || t[3] !== channelUserType || t[4] !== chat.id.user || t[5] !== m || t[6] !== msg.id.fromMe || t[7] !== msg.star || t[8] !== postId) {
            C = {
                cid: user,
                isOriginalAuthor: fromMe,
                isStarredPost: msg_star,
                postId,
                mediaData: m,
                channelUserType,
                aiProvenanceLabelShown,
                aiProvenanceLabelEnabled
            };
            t[2] = aiProvenanceLabelShown;
            t[3] = channelUserType;
            t[4] = chat.id.user;
            t[5] = m;
            t[6] = msg.id.fromMe;
            t[7] = msg.star;
            t[8] = postId;
            t[9] = C;
        } else {
            C = t[9];
        }
        const b = r("useWAWebNewsletterMessageVisibilityLogger")(C);
        const v = b[0];
        let S;
        if (t[10] !== component || t[11] !== v) {
            S = <div ref={v}>{component}</div>;
            t[10] = component;
            t[11] = v;
            t[12] = S;
        } else {
            S = t[12];
        }
        return S;
    }
    l.default = u;
}, 98);