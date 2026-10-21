__d("WAWebBizBroadcastProHiddenChatStorage", [
    "WALogger",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebChatViewMode.flow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(t, n, r, a, i) {
        const l = o("WAWebBizBroadcastProHiddenChatClassifier").classifyBizBroadcastProMessageBatch(r, a, i);
        const { hasMarketingPeerCopy, hasNonMarketingMessage, latestMarketingPeerCopyTimestamp, latestNonMarketingTimestamp } = l;
        if (t == null) {
            if (hasMarketingPeerCopy) {
                if (hasNonMarketingMessage) {
                    if (latestNonMarketingTimestamp == null) {
                        return n;
                    }
                    return p(n, {
                        t: latestNonMarketingTimestamp
                    });
                }
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: hiding new chat ",
                    ""
                ])), a.toLogString());
                return p(n, {
                    chatViewMode: o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF,
                    t: _(n.t, latestMarketingPeerCopyTimestamp)
                });
            }
            return n;
        }
        if (t.chatViewMode !== o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF) {
            if (hasMarketingPeerCopy) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: keeping order of visible chat ",
                    ""
                ])), a.toLogString());
                return p(n, {
                    t: _(t.t, latestNonMarketingTimestamp)
                });
            }
            return n;
        }
        if (!o("WAWebBizBroadcastProHiddenChatClassifier").isBizBroadcastProHiddenChatsEnabled()) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: hiding disabled, skipped hidden chat ",
                ""
            ])), a.toLogString());
            return n;
        }
        if (!hasMarketingPeerCopy && !hasNonMarketingMessage) {
            return n;
        }
        if (hasNonMarketingMessage) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: revealing hidden chat ",
                ""
            ])), a.toLogString());
            return p(n, {
                chatViewMode: o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE,
                t: hasMarketingPeerCopy ? latestNonMarketingTimestamp ?? t.t : n.t ?? t.t
            });
        }
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "[BBProHiddenChat] applyBizBroadcastProHiddenChatState: keeping chat ",
            " hidden"
        ])), a.toLogString());
        return p(n, {
            t: _(t.t, latestMarketingPeerCopyTimestamp)
        });
    }
    function p(e, t) {
        const n = babelHelpers.extends({}, e);
        if (t.chatViewMode != null) {
            n.chatViewMode = t.chatViewMode;
        }
        if (t.t == null) {
            delete n.t;
        } else {
            n.t = t.t;
        }
        return n;
    }
    function _(e, t) {
        if (e == null) {
            return t;
        }
        if (t == null) {
            return e;
        }
        return Math.max(e, t);
    }
    l.applyBizBroadcastProHiddenChatState = m;
}, 98);