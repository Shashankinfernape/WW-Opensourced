__d("QPLCoreHelpers", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, qpl_join__absolute_time_origin_ms, qpl_join__source_is_primary, r, o, qpl_join__namespaces, i) {
        let qpl_join__source_clock = "unreliable";
        if (o != null) {
            qpl_join__source_clock += `_${o}`;
        }
        const d = {
            string: {
                join_id: e,
                qpl_join__source_clock,
                qpl__source: "client_js"
            },
            int: {
                qpl_join__absolute_time_origin_ms
            },
            bool: {
                qpl_join__source_is_primary
            }
        };
        if (r != null && d.int) {
            d.int.qpl_join__close_session_after_seconds = r;
        }
        if (qpl_join__namespaces != null) {
            d.string_array = {
                qpl_join__namespaces
            };
        }
        if (i != null && d.int) {
            d.int.qpl_join__action_priority = i;
        }
        return d;
    }
    function l(e) {
        switch(e){
            case 1:
                return "join_request_";
            case 0:
                return "join_request_";
            case 3:
                return "join_response_";
            case 2:
                return "join_response_";
            default:
                return null;
        }
    }
    function s(e, t) {
        const n = l(e);
        if (n == null) {
            return null;
        }
        return n + t;
    }
    i.generateJoinAnnotations = e;
    i.getAlignmentPointNamePrefix = l;
    i.getAlignmentPointName = s;
}, 66);