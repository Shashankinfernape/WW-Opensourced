__d("WAWebNewsletterAddPaidPartnershipLabelAction", [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMsgCollection",
    "WAWebNewsletterAddPaidPartnershipLabelJob",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, messageType = "MESSAGE") {
            try {
                const a = messageType === "STATUS" ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus : o("WAWebDBMessageUtils").InternalIdPrefix.Default;
                const i = yield o("WAWebNewsletterDBUtils").getMessageByServerId(Number(n), t, a);
                if (i == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][dsa-26] msgKey not found for serverId ",
                        ""
                    ])), n);
                    return false;
                }
                const l = yield o("WAWebNewsletterAddPaidPartnershipLabelJob").addPaidPartnershipLabel({
                    messageType,
                    msgId: i.id.toString(),
                    newsletterJid: t,
                    serverId: n
                });
                if (l === true) {
                    const u = o("WAWebMsgCollection").MsgCollection.get(i.id);
                    u?.set("hasPaidPartnershipLabel", true);
                }
                return l;
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][dsa-26] add paid partnership label failed"
                ]))).tags("newsletter").sendLogs("newsletter-add-paid-partnership-label-action-failed");
                return false;
            }
        });
        return c.apply(this, arguments);
    }
    l.WAWebNewsletterAddPaidPartnershipLabelAction = u;
}, 98);