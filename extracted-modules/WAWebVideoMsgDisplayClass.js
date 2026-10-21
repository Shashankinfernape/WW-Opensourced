__d("WAWebVideoMsgDisplayClass", [], function(t, n, r, o, a, i) {
    function e({ msg }) {
        if (msg.mediaData.isGif) {
            return "messageGif";
        }
        return "messageVideo";
    }
    i.default = e;
}, 66);