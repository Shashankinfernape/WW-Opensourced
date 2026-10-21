__d("WAHandleChatStateProtocol", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        let t;
        if (e.name === "Paused") {
            t = "idle";
        } else {
            e.name;
            t = e.value.composingMedia === "audio" ? "recording_audio" : "typing";
        }
        return t;
    }
    i.parseChatStatus = e;
}, 66);