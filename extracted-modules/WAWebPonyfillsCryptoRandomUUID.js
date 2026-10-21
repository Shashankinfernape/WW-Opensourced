__d("WAWebPonyfillsCryptoRandomUUID", [], function(t, n, r, o, a, i) {
    function e() {
        if ("randomUUID" in self.crypto) {
            return self.crypto.randomUUID();
        }
        return `10000000-1000-4000-8000${-100000000000}`.replace(/[018]/g, (e)=>(e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
    }
    i.default = e;
}, 66);