__d("WAWebBizAiHandoffActor", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (e === "AI") {
            return "AI";
        }
        if (e === "BUSINESS") {
            return "BUSINESS";
        }
        if (e == null) {
            return null;
        }
        return "UNKNOWN";
    }
    i.parseBizAiHandoffActor = e;
}, 66);