__d("WAWebMdAppStateDirtyBitsWamEvent", [
    "WAWebWamCodegenUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebWamCodegenUtils").defineEvents({
        MdAppStateDirtyBits: [
            2520,
            {
                dedupKey: [
                    3,
                    o("WAWebWamCodegenUtils").TYPES.INTEGER
                ],
                dirtyBitsFalsePositive: [
                    2,
                    o("WAWebWamCodegenUtils").TYPES.BOOLEAN
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
        MdAppStateDirtyBits: []
    });
    l.MdAppStateDirtyBitsWamEvent = e;
}, 98);