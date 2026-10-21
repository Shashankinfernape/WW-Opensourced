__d("WAWebDrawerCoordination", [
    "WAWebDrawerManagerGlobalContext"
], function(t, n, r, o, a, i, l) {
    const e = [
        "left",
        "right",
        "fullscreen"
    ];
    function s(t, n) {
        if (e.includes(t) && n === "opened") {
            if (t === "left" || t === "right") {
                o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("fullscreen")?.closeDrawer(null, {
                    isConflictingDrawerOpening: true
                });
            } else {
                const i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left");
                i?.closeDrawer(null, {
                    isConflictingDrawerOpening: true
                });
                o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right")?.closeDrawer(null, {
                    isConflictingDrawerOpening: true
                });
            }
        }
    }
    l.closeConflictingDrawer = s;
}, 98);