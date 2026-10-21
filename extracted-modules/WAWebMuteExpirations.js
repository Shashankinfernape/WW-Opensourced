__d("WAWebMuteExpirations", [
    "fbt",
    "WATimeUtils",
    "WAWebClock"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        {
            getLabel: function() {
                return s._("8 hours");
            },
            duration: 8,
            radioId: "8-hours"
        },
        {
            getLabel: function() {
                return s._("1 week");
            },
            duration: 168,
            radioId: "1-week"
        },
        {
            getLabel: function() {
                return s._("Always");
            },
            duration: Number.POSITIVE_INFINITY,
            radioId: "always"
        }
    ];
    function u() {
        return e[0].duration;
    }
    function c(e) {
        if (e === Number.POSITIVE_INFINITY) {
            return o("WAWebClock").MUTE_ALWAYS_EXPIRATION_SENTINEL;
        }
        return e * 60 * 60 + o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }
    l.ALL_MUTE_DURATIONS = e;
    l.getDefaultMuteDuration = u;
    l.calculateMuteExpiration = c;
}, 226);