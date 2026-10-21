__d("WAWebClockSkewDifferenceTWamEvent", [
    "WAWebWamCodegenUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebWamCodegenUtils").defineEvents({
        ClockSkewDifferenceT: [
            3178,
            {
                clockSkewHourly: [
                    1,
                    o("WAWebWamCodegenUtils").TYPES.INTEGER
                ]
            },
            [
                1,
                1000,
                10000
            ],
            "private",
            37887164
        ]
    }, {
        ClockSkewDifferenceT: []
    });
    l.ClockSkewDifferenceTWamEvent = e;
}, 98);