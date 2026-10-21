__d("WAWebPlaceholder", [
    "fbt",
    "WAWebAcp2PlaceholderStrings",
    "WAWebFaqUrl",
    "WDSIconIcSchedule.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "WDSIconWdsIcViewOnce.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e, t = null) {
        let placeholderMsg;
        let externalLink;
        let i;
        if (e === "fanout") {
            placeholderMsg = s._("Waiting for this message. Check your phone.");
            externalLink = o("WAWebFaqUrl").getFanoutPlaceholderFaqUrl();
            i = u.jsx(r("WDSIconIcSchedule.react"), {});
        } else if (e === "bot_unavailable_fanout" || e === "hosted_unavailable_fanout") {
            placeholderMsg = s._("This message can't be displayed here. Please open WhatsApp on your phone to view the message.");
            i = u.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                testid: "unknown",
                height: 24,
                width: 24
            });
        } else if (e === "view_once_unavailable_fanout") {
            if (t === true) {
                placeholderMsg = s._("You sent a view once message from another device.");
            } else {
                placeholderMsg = s._("You received a view once message. For added privacy, you can only open it on your phone.");
                externalLink = o("WAWebFaqUrl").getViewOnceScreenshotProtectionUrl();
            }
            i = u.jsx(r("WDSIconWdsIcViewOnce.react"), {});
        } else if (e === "acp_unavailable_fanout") {
            placeholderMsg = o("WAWebAcp2PlaceholderStrings").getAcp2PlaceholderText();
            externalLink = o("WAWebAcp2PlaceholderStrings").getAcp2PlaceholderFaqUrl();
            i = u.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                testid: "unknown",
                height: 24,
                width: 24
            });
        } else {
            placeholderMsg = s._("Waiting for this message. This may take a while.");
            externalLink = o("WAWebFaqUrl").getCiphertextFaqUrl();
            i = u.jsx(r("WDSIconIcSchedule.react"), {});
        }
        return {
            placeholderMsg,
            placeholderIcon: i,
            externalLink
        };
    }
    l.getPlaceholderDetails = c;
}, 226);