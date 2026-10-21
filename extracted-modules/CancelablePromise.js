__d("CancelablePromise", [
    "Promise",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    let e;
    class s {
        constructor(t){
            var o = this;
            this.$1 = new (e || (e = n("Promise")))(function(e, n) {
                o.$3 = n;
                r("promiseDone")(t.then((result)=>{
                    if (o.$2) {
                        return n({
                            isCanceled: true,
                            message: "canceled",
                            result
                        });
                    }
                    return e(result);
                }).catch((e)=>{
                    if (o.$2) {
                        return n({
                            isCanceled: true,
                            message: "canceled"
                        });
                    }
                    return n(e);
                }));
            });
            this.$2 = false;
        }
        getPromise() {
            return this.$1;
        }
        cancel() {
            this.$2 = true;
        }
        reject(t) {
            this.cancel();
            this.$3?.(t);
        }
    }
    l.default = s;
}, 98);