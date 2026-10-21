__d("WAWebVoipScreenSharePickerState", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set;
    let l = 0;
    function s() {
        return e.size > 0;
    }
    function u() {
        const t = l++;
        e.add(t);
        return function() {
            e.delete(t);
        };
    }
    i.getIsScreenSharePickerOpen = s;
    i.beginScreenSharePicker = u;
}, 66);