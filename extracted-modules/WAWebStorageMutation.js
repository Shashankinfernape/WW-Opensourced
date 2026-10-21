__d("WAWebStorageMutation", [
    "invariant",
    "err"
], function(t, n, r, o, a, i, l, s) {
    const e = (()=>{
        function e(e) {
            if (e?.intentionallyUsePrivateConstructor !== true) {
                s(0, 69810);
            }
            if (this.constructor.name === "Mutation") {
                s(0, 56364);
            }
        }
        const t = e.prototype;
        t.validate = function(t) {
            throw r("err")("Subclasses of Mutation must implement `validate`");
        };
        t.apply = function(t) {
            throw r("err")("Subclasses of Mutation must implement `apply`");
        };
        return e;
    })();
    l.default = e;
}, 98);