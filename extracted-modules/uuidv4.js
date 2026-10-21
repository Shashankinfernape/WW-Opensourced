__d("uuidv4", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        const t = self?.crypto?.randomUUID;
        if (typeof t === "function") {
            return self.crypto.randomUUID();
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e)=>{
            const t = Math.random() * 16 | 0;
            const n = e === "x" ? t : t & 3 | 8;
            return n.toString(16);
        });
    }
    i.default = e;
}, 66);