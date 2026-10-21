__d("WAWebDataUrlToBlob", [
    "err"
], function(t, n, r, o, a, i, l) {
    const e = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
    function s(t) {
        const n = t.match(e);
        if (!n) {
            throw r("err")("invalid data URI");
        }
        const o = n[2] ? n[1] : `text/plain${n[3] || ";charset=US-ASCII"}`;
        const a = !!n[4];
        const i = t.slice(n[0].length);
        let l;
        if (a) {
            l = atob(i);
        } else {
            l = decodeURIComponent(i);
        }
        const s = new ArrayBuffer(l.length);
        const u = new Uint8Array(s);
        for(let c = 0; c < l.length; c += 1){
            u[c] = l.charCodeAt(c);
        }
        return new Blob([
            u
        ], {
            type: o
        });
    }
    l.dataURLtoBlob = s;
}, 98);