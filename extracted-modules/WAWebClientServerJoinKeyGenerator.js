__d("WAWebClientServerJoinKeyGenerator", [], function(t, n, r, o, a, i) {
    function e() {
        const e = new Uint8Array(15);
        crypto.getRandomValues(e);
        let t = "";
        for(let n = 0; n < e.length; n++){
            t += String.fromCharCode(e[n]);
        }
        return btoa(t);
    }
    i.generateClientServerJoinKey = e;
}, 66);