__d("BootloaderDocumentInserter", [
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u() {
        if (!s) {
            s = document.head || document.getElementsByTagName("head")[0] || document.body;
        }
        return s;
    }
    function c(t) {
        if ((e || (e = r("ExecutionEnvironment"))).isInWorker) {
            t(null);
            return;
        }
        const n = document.createDocumentFragment();
        t(n);
        u().appendChild(n);
    }
    l.getDOMContainerNode = u;
    l.batchDOMInsert = c;
}, 98);