__d("WAWebLocalStorageClearOnLogout", [
    "WAWebLocalStorage"
], function(t, n, r, o, a, i, l) {
    const e = [
        "WAWebFalcoBuffer"
    ];
    const s = [
        "falco_queue_log"
    ];
    function u() {
        if (r("WAWebLocalStorage") != null) {
            for (const t of e){
                r("WAWebLocalStorage").removeItem(t);
            }
            const n = Object.keys(r("WAWebLocalStorage"));
            for (const o of n){
                for (const a of s){
                    if (o.startsWith(a)) {
                        r("WAWebLocalStorage").removeItem(o);
                        break;
                    }
                }
            }
        }
    }
    l.clearLocalStorageKeysOnLogout = u;
}, 98);