__d("WAWebMdAppStateMessageRangeWamEvent", [
    "WAWebWamCodegenUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebWamCodegenUtils").defineEvents({
        MdAppStateMessageRange: [
            2522,
            {
                additionalMessagesCount: [
                    1,
                    o("WAWebWamCodegenUtils").TYPES.INTEGER
                ],
                dedupKey: [
                    2,
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
        MdAppStateMessageRange: []
    });
    l.MdAppStateMessageRangeWamEvent = e;
}, 98);