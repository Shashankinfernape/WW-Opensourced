__d("WAWebWebDynamicSamplingTestEventWithSamplingWamEvent", [
    "WAWebWamCodegenUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebWamCodegenUtils").defineEvents({
        WebDynamicSamplingTestEventWithSampling: [
            5320,
            {
                dedupKey: [
                    1,
                    o("WAWebWamCodegenUtils").TYPES.INTEGER
                ]
            },
            [
                100,
                100,
                10000
            ],
            "regular"
        ]
    }, {
        WebDynamicSamplingTestEventWithSampling: []
    });
    l.WebDynamicSamplingTestEventWithSamplingWamEvent = e;
}, 98);