__d("WAWebForwardedBotMessageUtils", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === "download_consent_accepted") {
            return "normal";
        }
        if (e === "failed" && o("WAWebABProps").getABPropConfigValue("ai_rich_response_unknown_sender_verification_masking_enabled")) {
            return "masked";
        }
        return "normal";
    }
    l.getForwardedBotDisplayMode = e;
}, 98);