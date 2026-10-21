__d("WAWebMexNewsletterMilestoneNotificationHandler", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatGetExistingBridge",
    "WAWebMsgModelFromData",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDBUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const a = n.xwa2_notify_newsletter_milestone;
                const { message_server_id, newsletter_id, reaction_code, type, value } = a;
                const m = yield o("WAWebNewsletterDBUtils").getMessageByServerId(Number(message_server_id), newsletter_id);
                const p = yield o("WAWebChatGetExistingBridge").getExisting(o("WAWebWidFactory").createWid(newsletter_id));
                if (p == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[milestone-notif] no chat for newsletter"
                    ]))).tags("mex", "newsletter", "milestone-notification").sendLogs("newsletter-mex-milestone-notification-no-chat");
                    return;
                }
                if (type === "MESSAGE_FORWARDS" && !o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_admin_notifications_forwards_enabled")) {
                    return;
                }
                o("WAWebBackendApi").frontendFireAndForget("displayNewsletterMilestoneDesktopNotification", {
                    msg: m && o("WAWebMsgModelFromData").msgModelFromMsgData(m),
                    reactionCode: reaction_code,
                    milestoneType: type,
                    value,
                    chat: p
                });
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[milestone-notif] failed to handle milestone notification"
                ]))).catching(r("getErrorSafe")(error)).tags("mex", "newsletter").sendLogs("newsletter-mex-milestone-notification-failed");
            }
        });
        return c.apply(this, arguments);
    }
    l.mexHandleNewsletterMilestone = u;
}, 98);