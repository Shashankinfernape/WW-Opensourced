__d("WAWebVoipMicrophoneToggleRequest", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = 0;
    let l = null;
    function s({ isOwnerCurrent, isUnmuting }) {
        if (isUnmuting && l?.isCurrent() === true) {
            return null;
        }
        const a = e + 1;
        e = a;
        const isCurrent = function() {
            return e === a && isOwnerCurrent();
        };
        l = isUnmuting ? {
            isCurrent,
            requestId: a
        } : null;
        return {
            finish: function() {
                if (l?.requestId === a) {
                    l = null;
                }
            },
            isCurrent
        };
    }
    i.beginMicrophoneToggleRequest = s;
}, 66);