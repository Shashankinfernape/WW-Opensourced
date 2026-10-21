__d("WAWebNetworkGetResponseIfOnline", [
    "WAWebNullFunc",
    "WAWebXHR"
], function(t, n, r, o, a, i, l) {
    function e({ data, method = "GET", responseType, signal, url }) {
        return o("WAWebXHR").request(url, method, data, signal, responseType).then((e)=>{
            if (e.status && e.status < 12000) {
                return e;
            }
            return null;
        }).catch(o("WAWebNullFunc").returnNull);
    }
    l.default = e;
}, 98);