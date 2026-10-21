__d("IntlRedundantStops", [], function(t, n, r, o, a, i) {
    const e = Object.freeze({
        equivalencies: {
            ".": [
                "।",
                "။",
                "。"
            ],
            "…": [
                "ฯ",
                "ຯ",
                "᠁"
            ],
            "!": [
                "！"
            ],
            "?": [
                "？"
            ]
        },
        redundancies: {
            "?": [
                "?",
                ".",
                "!",
                "…"
            ],
            "!": [
                "!",
                "?",
                "."
            ],
            ".": [
                ".",
                "!"
            ],
            "…": [
                "…",
                ".",
                "!"
            ]
        }
    });
    i.default = e;
}, 66);