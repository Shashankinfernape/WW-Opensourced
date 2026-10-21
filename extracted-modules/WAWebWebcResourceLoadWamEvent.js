__d("WAWebWebcResourceLoadWamEvent", [
    "WAWebWamCodegenUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e = o("WAWebWamCodegenUtils")).defineEvents({
        WebcResourceLoad: [
            688,
            {
                dedupKey: [
                    4,
                    e.TYPES.INTEGER
                ],
                webcResourceCached: [
                    3,
                    e.TYPES.BOOLEAN
                ],
                webcResourceDuration: [
                    2,
                    e.TYPES.TIMER
                ],
                webcResourceName: [
                    1,
                    e.TYPES.STRING
                ]
            },
            [
                1,
                1000,
                2000
            ],
            "regular"
        ]
    }, {
        WebcResourceLoad: []
    });
    l.WebcResourceLoadWamEvent = s;
}, 98);