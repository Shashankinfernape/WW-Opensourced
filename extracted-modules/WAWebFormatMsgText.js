__d("WAWebFormatMsgText", [
    "fbt",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizFormatInteractiveMsg",
    "WAWebFormatBroadcastNotification",
    "WAWebFormatE2ENotification",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatGroupNotification",
    "WAWebFormatMessageHistoryBundleBody",
    "WAWebFormatMessageHistoryNoticeBody",
    "WAWebFormatMsgTextUtils",
    "WAWebFormatNotificationTemplateText",
    "WAWebFormatOversizedMsg",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowResponseUtils",
    "WAWebMessagePluginFormatMsgText",
    "WAWebMessagePluginFutureproofMsgText",
    "WAWebMsgType",
    "WAWebSystemMessagePluginFormatMsgText",
    "WAWebViewOnceState"
], function(t, n, r, o, a, i, l, s) {
    function e({ associatedMessages, msg, options }) {
        const { unformat = true, formatAsLastMsg = false, formatAsSearchResult = false, spoilerReplacement, searchQuery = [] } = options ?? {};
        const L = msg.safe();
        let E = false;
        let k;
        if (L.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && L.futureproofType) {
            k = o("WAWebMessagePluginFutureproofMsgText").futureproofMsgText({
                msg
            });
        } else {
            k = o("WAWebMessagePluginFormatMsgText").formatMsgText({
                msg,
                associatedMessages,
                options: {
                    unformat,
                    formatAsLastMsg,
                    formatAsSearchResult,
                    onSpoilerReplacementHandled: function() {
                        E = true;
                    },
                    spoilerReplacement,
                    searchQuery
                }
            }) ?? o("WAWebSystemMessagePluginFormatMsgText").formatMsgText({
                msg,
                options: {
                    unformat,
                    formatAsLastMsg,
                    formatAsSearchResult,
                    onSpoilerReplacementHandled: function() {
                        E = true;
                    },
                    spoilerReplacement,
                    searchQuery
                }
            });
        }
        if (k != null) {
            return u(k, spoilerReplacement, E);
        }
        switch(L.type){
            case o("WAWebMsgType").MSG_TYPE.HSM:
                return c(msg, msg.body ?? "", unformat, spoilerReplacement);
            case o("WAWebMsgType").MSG_TYPE.CHAT:
                if (msg.isFromTemplate) {
                    const D = msg.body ?? "";
                    if (msg.title) {
                        return c(msg, `${msg.title} ${D}`, unformat, spoilerReplacement, `*${msg.title}* ${D}`);
                    }
                    return c(msg, D, unformat, spoilerReplacement);
                }
                if (msg.isDynamicReplyButtonsMsg && msg.title) {
                    const x = o("WAWebFormatMsgTextUtils").maybeAddFooter(msg.body, msg);
                    if (x != null) {
                        return c(msg, `${msg.title}
${x}`, unformat, spoilerReplacement, `*${msg.title}*
${x}`);
                    }
                }
                return c(msg, msg.body ?? "", unformat, spoilerReplacement);
            case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
                if (o("WAWebBizCtwaAGMUtils").isAGMSupported(msg)) {
                    return c(msg, msg.body ?? "", unformat, spoilerReplacement);
                }
                return o("WAWebFormatUnknownMsg").formatUnknownMsgText(msg);
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
                if (o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(msg)) {
                    return o("WAWebGalaxyFlowResponseUtils").getGalaxyFlowResponseSubtitle(msg.id);
                }
                return d(msg.body || "", spoilerReplacement);
            case o("WAWebMsgType").MSG_TYPE.PTV:
                {
                    if (L.isViewOnce) {
                        if (o("WAWebViewOnceState").isViewed(L)) {
                            return s._("Opened");
                        }
                        return s._("Video note");
                    }
                    const $ = o("WAWebFormatMsgTextUtils").maybeAddFooter(msg.caption, msg);
                    if ($ != null && $ !== "") {
                        return c(msg, $, unformat, spoilerReplacement);
                    }
                    return s._("Video note");
                }
            case o("WAWebMsgType").MSG_TYPE.GP2:
                return r("WAWebFormatGroupNotification")(msg, formatAsLastMsg);
            case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
                return o("WAWebFormatBroadcastNotification").formatBroadcastNotification(msg);
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
                return d(msg.body ?? "", spoilerReplacement);
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
                return o("WAWebFormatE2ENotification").formatE2ENotification(L);
            case o("WAWebMsgType").MSG_TYPE.PRODUCT:
                {
                    const P = [
                        o("WAWebFrontendMsgGetters").getText(msg),
                        msg.caption,
                        msg.footer
                    ].filter(Boolean).join(" ");
                    if (P.length) {
                        return c(msg, P, unformat, spoilerReplacement);
                    }
                    return s._("Product");
                }
            case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
                return o("WAWebFormatOversizedMsg").formatOversizedMsgText();
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
                {
                    const M = o("WAWebBizFormatInteractiveMsg").formatInteractive(msg, {
                        formatAsSearchResult
                    });
                    if (spoilerReplacement == null) {
                        return M;
                    }
                    return d(M.toString(), spoilerReplacement);
                }
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
                return o("WAWebFormatUnknownMsg").formatUnknownMsgText(msg);
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
                return d(r("WAWebFormatNotificationTemplateText")(msg, formatAsLastMsg).text.toString(), spoilerReplacement);
            case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
                if (msg.subtype === "ephemeral_setting") {
                    return o("WAWebFormatEphemeralSetting").formatEphemeralSetting(msg);
                }
                if (msg.subtype === "share_phone_number") {
                    return s._("Share phone number");
                }
                if (msg.subtype === "limit_sharing_system_message") {
                    return d(r("WAWebFormatNotificationTemplateText")(msg, formatAsLastMsg).text.toString(), spoilerReplacement);
                }
                return "";
            case o("WAWebMsgType").MSG_TYPE.ORDER:
                return d(msg.message || "", spoilerReplacement);
            case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
                return o("WAWebFormatUnknownMsg").formatUnknownMsgText(msg);
            case o("WAWebMsgType").MSG_TYPE.COMMENT:
                return s._("Someone replied to an announcement. Check your phone to see it.");
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
                return o("WAWebFormatMessageHistoryBundleBody").formatMessageHistoryBundleBody(L);
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
                return o("WAWebFormatMessageHistoryNoticeBody").formatMessageHistoryNoticeBody(L);
            default:
                return "";
        }
    }
    function u(e, spoilerReplacement, n) {
        if (spoilerReplacement == null || n) {
            return e;
        }
        return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(e.toString(), {
            spoilerReplacement
        });
    }
    function c(msg, t, unformat, spoilerReplacement, a = t) {
        if (unformat) {
            return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, t, {
                spoilerReplacement
            });
        }
        return d(a, spoilerReplacement);
    }
    function d(e, spoilerReplacement) {
        return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(e, {
            spoilerReplacement
        });
    }
    l.default = e;
}, 226);