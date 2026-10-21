__d("WAGetDisplayMedia", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        const navigator_mediaDevices = navigator.mediaDevices;
        if (navigator_mediaDevices == null) {
            return null;
        }
        return function(t) {
            return navigator_mediaDevices.getDisplayMedia(t);
        };
    }
    const l = e();
    i.getDisplayMedia = l;
}, 66);