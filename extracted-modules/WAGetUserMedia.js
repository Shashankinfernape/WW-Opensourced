__d("WAGetUserMedia", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        const navigator_mediaDevices = navigator.mediaDevices;
        if (navigator_mediaDevices == null) {
            return null;
        }
        return function(t) {
            return navigator_mediaDevices.getUserMedia(t);
        };
    }
    const l = e();
    i.getUserMedia = l;
}, 66);