__d("WAWebChatlistHeaderDropdownLogEvents", [
    "WAWebWamEnumWebcMenuType",
    "WAWebWebcMenuWamEvent"
], function(t, n, r, o, a, i, l) {
    function e(webcMenuItemLabel) {
        const t = new (o("WAWebWebcMenuWamEvent")).WebcMenuWamEvent({
            webcMenuAction: o("WAWebWamEnumWebcMenuType").WEBC_MENU_TYPE.THREADS_SCREEN_CLICK,
            webcMenuItemLabel
        });
        t.commit();
    }
    l.logMenuEvent = e;
}, 98);