__d("WAWebMouseManager", [
    "WAWebKeyboardRun",
    "WAWebKeyboardShortcuts"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebKeyboardShortcuts").getActionFromMouseEvent(e);
        if (t) {
            r("WAWebKeyboardRun")(t);
        }
    }
    l.mouseWheelListener = e;
}, 98);