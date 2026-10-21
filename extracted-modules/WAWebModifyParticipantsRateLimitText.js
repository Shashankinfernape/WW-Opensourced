__d("WAWebModifyParticipantsRateLimitText", [
    "fbt",
    "WAWebClock"
], function(t, n, r, o, a, i, l, s) {
    function e({ participantLimit }) {
        return s._("_j{\"*\":\"You can't add more than {participant_limit} members right now. Try again later.\",\"_1\":\"You can't add more than 1 member right now. Try again later.\"}", [
            s._plural(participantLimit, "participant_limit")
        ]);
    }
    function u({ backoff, limitType }) {
        switch(limitType){
            case "user":
                return s._("You can't add more members to groups right now. {time}", [
                    s._param("time", o("WAWebClock").Clock.tryAgainInStr(backoff))
                ]);
            case "group":
                return s._("You can't add more members to this group right now. {time}", [
                    s._param("time", o("WAWebClock").Clock.tryAgainInStr(backoff))
                ]);
            default:
                return s._("You can't add more members to this group right now.");
        }
    }
    l.WAWebModifyParticipantsCountRateLimitText = e;
    l.WAWebModifyParticipantsTimeRateLimitText = u;
}, 226);