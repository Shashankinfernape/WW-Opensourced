__d("WAWebClockBridgeApi", [
    "WAWebClock"
], function(t, n, r, o, a, i, l) {
    const e = {
        setWebClockSkew: function({ newClockSkew }) {
            o("WAWebClock").Clock.setSkew(newClockSkew);
        },
        setIs24Hour: function({ is24Hour }) {
            o("WAWebClock").Clock.setIs24Hour(is24Hour, o("WAWebClock").TimeFormatSource.PhoneTimeFormat);
        }
    };
    l.ClockBridgeApi = e;
}, 98);