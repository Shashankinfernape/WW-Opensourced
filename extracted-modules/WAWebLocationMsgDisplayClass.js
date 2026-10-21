__d("WAWebLocationMsgDisplayClass", [], function(t, n, r, o, a, i) {
    function e({ msg }) {
        if (msg.isLive) {
            return "messageLiveLocation";
        }
        return "messageLocation";
    }
    i.default = e;
}, 66);