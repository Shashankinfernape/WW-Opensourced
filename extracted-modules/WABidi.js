__d("WABidi", [
    "WABidiRangeData"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    let l;
    function s() {
        if (!e) {
            const t = n("WABidiRangeData").DATA;
            const r = t.length / 2;
            e = new Int32Array(r);
            l = new Int32Array(r);
            for(let o = 0, a = 0; o < r; o++, a += 2){
                e[o] = t[a] + (o === 0 ? 0 : e[o - 1]);
                l[o] = t[a + 1];
            }
        }
    }
    function u(t) {
        s();
        for(let n = 0; n < t.length; n++){
            let r = t.charCodeAt(n) | 0;
            if (r >= 55296 && r < 56320) {
                if (++n === t.length) {
                    break;
                }
                const o = t.charCodeAt(n);
                if (o >= 56320 && o < 57344) {
                    r = 65536 + ((r & 1023) << 10 | o & 1023);
                } else {
                    continue;
                }
            } else if (r >= 56320 && r < 57344) {
                continue;
            }
            if (!(r < e[0])) {
                const a = e.length | 0;
                for(var i = 0, u = a - 1 | 0; i < u;){
                    const c = u + i >> 1;
                    if (e[c] > r) {
                        u = c - 1 | 0;
                    } else if (e[c + 1] > r) {
                        u = c;
                        break;
                    } else {
                        i = c + 1 | 0;
                    }
                }
                const d = l[u];
                const m = e[u] + Math.abs(d) | 0;
                if (r < m) {
                    if (d < 0) {
                        return "rtl";
                    }
                    return "ltr";
                }
            }
        }
    }
    i.bidiDir = u;
}, 66);