__d("BanzaiLazyQueue", [
    "SimpleHook"
], function(t, n, r, o, a, i, l) {
    let e = [];
    const onQueue = new (o("SimpleHook")).SimpleHook;
    const u = {
        onQueue,
        queuePost: function(n, r, o) {
            e.push([
                n,
                r,
                o
            ]);
            onQueue.call(n, r, o);
        },
        flushQueue: function() {
            const t = e;
            e = [];
            return t;
        }
    };
    i.exports = u;
}, 34);