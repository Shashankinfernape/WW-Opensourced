__d("WAWebMexLidChangeNotification", [
    "WAWebMexLidChangeNotificationQuery.graphql",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    if (e === undefined) {
        e = n("WAWebMexLidChangeNotificationQuery.graphql");
    }
    function s({ xwa2_notify_lid_change }) {
        if (xwa2_notify_lid_change.old == null || xwa2_notify_lid_change.new == null) {
            throw r("err")("parseLidChangeNotification: missing old or new LID values");
        }
        const { old, new: _new } = xwa2_notify_lid_change;
        const oldLid = o("WAWebWidFactory").createUserLidOrThrow(old);
        const newLid = o("WAWebWidFactory").createUserLidOrThrow(_new);
        return {
            oldLid,
            newLid
        };
    }
    l.parseLidChangeNotification = s;
}, 98);