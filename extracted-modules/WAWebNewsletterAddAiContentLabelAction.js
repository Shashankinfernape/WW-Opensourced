__d("WAWebNewsletterAddAiContentLabelAction", [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMsgAIProvenance",
    "WAWebMsgCollection",
    "WAWebNewsletterAddAiContentLabelJob",
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
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r = "MESSAGE") {
            try {
                const a = r === "STATUS" ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus : o("WAWebDBMessageUtils").InternalIdPrefix.Default;
                const i = yield o("WAWebNewsletterDBUtils").getMessageByServerId(Number(n), t, a);
                if (i == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][sgi-ai-content] msgKey not found for serverId ",
                        ""
                    ])), n).tags("newsletter", "sgi", "wa-ice", "wa-spice-web").sendLogs("newsletter-label-ai-content-msgkey-missing");
                    return false;
                }
                const l = yield o("WAWebNewsletterAddAiContentLabelJob").addAiContentLabel(t, n, r);
                if (l === true) {
                    const u = o("WAWebMsgCollection").MsgCollection.get(i.id);
                    u?.set("aiProvenance", o("WAWebMsgAIProvenance").withSelfDisclosed(u?.aiProvenance));
                }
                return l;
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content] label ai content failed"
                ]))).tags("newsletter", "sgi", "wa-ice", "wa-spice-web").sendLogs("newsletter-label-ai-content-action-failed");
                return false;
            }
        });
        return c.apply(this, arguments);
    }
    l.WAWebNewsletterAddAiContentLabelAction = u;
}, 98);