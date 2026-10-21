__d("WAWebMdAppStateOfflineNotificationsWamEvent", [
    "WAWebWamCodegenUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebWamCodegenUtils").defineEvents({
        MdAppStateOfflineNotifications: [
            2602,
            {
                dedupKey: [
                    2,
                    o("WAWebWamCodegenUtils").TYPES.INTEGER
                ],
                redundantCount: [
                    1,
                    o("WAWebWamCodegenUtils").TYPES.INTEGER
                ]
            },
            [
                1,
                20,
                1000
            ],
            "regular"
        ]
    }, {
        MdAppStateOfflineNotifications: []
    });
    l.MdAppStateOfflineNotificationsWamEvent = e;
}, 98);