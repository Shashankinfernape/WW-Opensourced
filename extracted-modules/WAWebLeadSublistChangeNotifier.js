__d("WAWebLeadSublistChangeNotifier", [], function(t, n, r, o, a, i) {
    const e = new Set;
    function l(t) {
        e.add(t);
        return function() {
            e.delete(t);
        };
    }
    function s() {
        for (const t of e){
            t();
        }
    }
    i.subscribeToLeadSublistChanges = l;
    i.notifyLeadSublistChanged = s;
}, 66);