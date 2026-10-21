__d("WAWebContactManagerMetadataChangeNotifier", [], function(t, n, r, o, a, i) {
    const e = new Set;
    function l(t) {
        e.add(t);
        return function() {
            e.delete(t);
        };
    }
    function s(t) {
        for (const n of e){
            n(t);
        }
    }
    i.subscribeToContactManagerMetadataChanges = l;
    i.notifyContactManagerMetadataChanged = s;
}, 66);