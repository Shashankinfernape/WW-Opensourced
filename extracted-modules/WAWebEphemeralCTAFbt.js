__d("WAWebEphemeralCTAFbt", [
    "fbt",
    "WAWebAfterReadUtils"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        if (o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return s._("Change timer.");
        }
        return s._("Click to change.");
    }
    function u() {
        if (o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return s._("Set your own default timer.");
        }
        return s._("Click to set your own default timer.");
    }
    function c() {
        if (o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return s._("Change timer.");
        }
        return s._("Click to change your default timer.");
    }
    l.getDmActionChangeSettingFbt = e;
    l.getDmActionSetOwnTimerFbt = u;
    l.getDmActionChangeDefaultTimerFbt = c;
}, 226);