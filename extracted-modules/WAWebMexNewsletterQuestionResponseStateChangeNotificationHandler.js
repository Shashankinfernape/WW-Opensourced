__d("WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t, { xwa2_notify_newsletter_response_state_update }) {
        if (xwa2_notify_newsletter_response_state_update == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][resp-state] null data in xwa2_notify"
            ])));
            return (u || (u = n("Promise"))).resolve();
        }
        const { response_server_id, response_state, server_id } = xwa2_notify_newsletter_response_state_update;
        try {
            e: {
                if (response_state === "HIDE") {
                    o("WAWebBackendApi").frontendFireAndForget("hideNewsletterQuestionResponse", {
                        questionServerId: Number(server_id),
                        responseServerId: response_server_id
                    });
                    break e;
                }
                if (response_state === "STAR" || response_state === "UNSTAR") {
                    o("WAWebBackendApi").frontendFireAndForget("updateNewsletterQuestionResponseStarredState", {
                        questionServerId: Number(server_id),
                        responseServerId: response_server_id,
                        starred: response_state === "STAR"
                    });
                    break e;
                }
                break e;
            }
        } catch (error) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][resp-state] question resp state notif failed"
            ]))).tags("newsletter").catching(r("getErrorSafe")(error)).sendLogs("newsletter-question-resp-state-notif-failed");
        }
        return (u || (u = n("Promise"))).resolve();
    }
    l.mexHandleNewsletterQuestionsResponseStateChange = c;
}, 98);