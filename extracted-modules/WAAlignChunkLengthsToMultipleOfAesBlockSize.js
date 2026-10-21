__d("WAAlignChunkLengthsToMultipleOfAesBlockSize", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return parseInt((e + 15) / 16, 10) * 16;
    }
    function l(t, n) {
        const r = [];
        let o = 0;
        let a = 0;
        let i = 0;
        for(let l = 0; l < t.length; ++l){
            o += t[l];
            if (l === t.length - 1 && n != null && n > 0) {
                if (o > a) {
                    r.push(n - a);
                } else {
                    r.pop();
                    r.push(n - i);
                }
                break;
            } else if (o > a) {
                const s = e(o - a);
                i = a;
                r.push(s);
                a += s;
            }
        }
        return r;
    }
    i.alignChunkSizeToMultipleAesBlockSize = e;
    i.alignChunkLengthsToMultipleOfAesBlockSize = l;
}, 66);