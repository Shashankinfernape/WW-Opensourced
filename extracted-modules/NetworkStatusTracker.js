__d("NetworkStatusTracker", [
    "NetworkStatus"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let online = r("NetworkStatus").isOnline();
    const s = new Set;
    function u(t) {
        if (online !== t) {
            online = t;
            s.forEach((t)=>{
                t({
                    online
                });
            });
        }
    }
    const c = {
        emit: function(t) {
            u(t);
        },
        isOnline: function() {
            return online;
        },
        onChange: function(t) {
            s.add(t);
            return {
                remove: function() {
                    s.delete(t);
                }
            };
        }
    };
    r("NetworkStatus").onChange(function(e) {
        c.emit(e.online);
    });
    l.default = c;
}, 98);