__d("WAWebClockPaymentStrings", [
    "fbt",
    "WAWeb-moment",
    "err"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const t = r("WAWeb-moment").unix(e);
        const n = t.startOf("day");
        const o = r("WAWeb-moment")().startOf("day").diff(n, "days");
        if (o === 0) {
            return s._("today");
        }
        if (o === 1) {
            return s._("yesterday");
        }
        if (o < 7) {
            switch(t.day()){
                case 0:
                default:
                    return s._("on Sunday");
                case 1:
                    return s._("on Monday");
                case 2:
                    return s._("on Tuesday");
                case 3:
                    return s._("on Wednesday");
                case 4:
                    return s._("on Thursday");
                case 5:
                    return s._("on Friday");
                case 6:
                    return s._("on Saturday");
            }
        } else {
            const a = t.format("MMMM d");
            return s._("on {date}", [
                s._param("date", a)
            ]);
        }
    }
    function u(e) {
        const t = r("WAWeb-moment").unix(e);
        switch(t.day()){
            case 0:
                return s._("on Sunday");
            case 1:
                return s._("on Monday");
            case 2:
                return s._("on Tuesday");
            case 3:
                return s._("on Wednesday");
            case 4:
                return s._("on Thursday");
            case 5:
                return s._("on Friday");
            case 6:
                return s._("on Saturday");
            default:
                throw r("err")("Unexpected day number");
        }
    }
    l.paymentTimestampStr = e;
    l.dayNameStr = u;
}, 226);