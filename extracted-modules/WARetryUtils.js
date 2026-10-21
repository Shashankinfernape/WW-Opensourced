__d("WARetryUtils", [
    "WARandomJitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e) {
            return {
                algo: {
                    backoff: {
                        first: 1,
                        second: 1,
                        type: "fibonacci"
                    },
                    toMs: function(t) {
                        return (1 + t) * 1000 + o("WARandomJitter").getRandomJitter();
                    },
                    type: "adjust"
                },
                relativeDelay: true,
                max: 600000
            };
        }
        return {
            algo: {
                type: "adjust",
                backoff: {
                    type: "fibonacci",
                    first: 1,
                    second: 1
                },
                toMs: function(t) {
                    return (9 + t) * 1000;
                }
            },
            max: 620000
        };
    }
    l.fibonacciBackoff = e;
}, 98);