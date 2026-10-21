__d("useWAWebCappingData", [
    "WAWebCmd",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return r("useWAWebEventTargetValue")(o("WAWebCmd").Cmd, "new_chat_message_capping_state_change", o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData);
    }
    l.default = e;
}, 98);