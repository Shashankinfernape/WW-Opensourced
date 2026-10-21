__d("WAWebNavBarLogEvents", [
    "WAWebWebcNavbarWamEvent"
], function(t, n, r, o, a, i, l) {
    function e(webcNavbarItemLabel) {
        const t = new (o("WAWebWebcNavbarWamEvent")).WebcNavbarWamEvent({
            webcNavbarItemLabel
        });
        t.commit();
    }
    l.logNavBarEvent = e;
}, 98);