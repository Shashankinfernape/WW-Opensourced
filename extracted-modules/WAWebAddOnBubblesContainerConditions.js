__d("WAWebAddOnBubblesContainerConditions", [
    "WAWebAddOnBubbleType",
    "WAWebDisplayType",
    "WAWebMessageAssociation.flow",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "react-compiler-runtime",
    "useWAWebCommentMessages"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e[0]) {
            n = r("WAWebMsgKey").from(e[0]);
            t[0] = e[0];
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== n) {
            a = [
                n
            ];
            t[2] = n;
            t[3] = a;
        } else {
            a = t[3];
        }
        const i = o("useWAWebCommentMessages").useHydrateAndAggregateComments(a);
        return i.length > 0;
    }
    function s(e, t) {
        return e === 0 || !t;
    }
    function u(e, t, n) {
        if (e.length === 0) {
            return null;
        }
        const r = t === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER && n !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled();
        if (!r) {
            return null;
        }
        let a = null;
        if (e.length === 1) {
            a = o("WAWebMsgCollection").MsgCollection.get(e[0]);
        } else {
            const i = o("WAWebMsgCollection").MsgCollection.get(e[0]);
            if (i?.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
                a = i;
            } else if (i?.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM) {
                const l = i?.parentMsgKey;
                a = l && o("WAWebMsgCollection").MsgCollection.get(l);
            }
        }
        if (a && o("WAWebMsgActionCapability").canForwardMsg(a)) {
            return a;
        }
        return null;
    }
    l.useHasCommentsBubble = e;
    l.hasHiddenSenderReactions = s;
    l.getForwardBubbleTargetMsg = u;
}, 98);