__d("addJoinId", [
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, qpl_join__absolute_time_origin_ms) {
        r("addAnnotations")(e.annotations, {
            string: {
                join_id: t,
                qpl_join__source_clock: "unreliable".valueOf(),
                qpl__source: "client_js"
            }
        });
        if (qpl_join__absolute_time_origin_ms != null) {
            r("addAnnotations")(e.annotations, {
                int: {
                    qpl_join__absolute_time_origin_ms
                }
            });
        }
    }
    l.default = e;
}, 98);