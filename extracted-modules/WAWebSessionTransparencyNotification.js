__d("WAWebSessionTransparencyNotification", [
    "fbt",
    "WAWebBotSessionTransparencyNotice",
    "WAWebExternalLink.react",
    "WAWebFaqUrl"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        if (e === o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType.AiSafetyDisclaimer) {
            return {
                text: s._("Just a reminder that you’re chatting with an AI, not a real person. It’s been 3 hours—time for a break? Click to learn more."),
                handleClick: function() {
                    o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBotSessionTransparencyUrl());
                }
            };
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.getBotSessionTransparencySystemMessageNotification = e;
}, 226);