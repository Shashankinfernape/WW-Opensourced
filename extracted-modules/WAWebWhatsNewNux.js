__d("WAWebWhatsNewNux", [
    "WAWebNux",
    "WAWebNuxCoolOff"
], function(t, n, r, o, a, i, l) {
    const e = {
        COOL_OFF_DURATION_IN_DAYS: 30,
        MAX_DISMISSES: 1000,
        MAX_VIEWS_IN_DAYS: 1000,
        MAX_CLICKS: 1000,
        VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1000,
        CLICKS_BEFORE_COOL_OFF: 1000,
        COOL_OFF_START_STORAGE_KEY: o("WAWebNux").CoolOffPeriodKeys.WHATS_NEW
    };
    function s(COOL_OFF_DURATION_IN_DAYS = 30) {
        return new (o("WAWebNuxCoolOff")).CoolOffNux(o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.WHATS_NEW, babelHelpers.extends({}, e, {
            COOL_OFF_DURATION_IN_DAYS
        }));
    }
    function u(e = 30) {
        return s(e).shouldShow();
    }
    l.createWhatsNewNux = s;
    l.shouldShowWhatsNewNux = u;
}, 98);