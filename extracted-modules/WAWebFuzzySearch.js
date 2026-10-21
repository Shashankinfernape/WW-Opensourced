__d("WAWebFuzzySearch", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        const n = [];
        const t_length = t.length;
        const e_length = e.length;
        if (e_length > t_length) {
            return [];
        }
        let a;
        for(let i = 0, l = 0; i < e_length; i++){
            a = false;
            const s = e.charCodeAt(i);
            while(l < t_length){
                if (t.charCodeAt(l++) === s) {
                    n.push(l - 1);
                    a = true;
                    break;
                }
            }
            if (!a) {
                return [];
            }
        }
        return n;
    }
    function l(t, n) {
        return !t || !!e(t, n).length;
    }
    i.fuzzyMatches = e;
    i.fuzzySearch = l;
}, 66);