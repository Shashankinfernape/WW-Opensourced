__d("ExecutionEnvironment", [], function(t, n, r, o, a, i) {
    "use strict";
    const canUseDOM = !!(t !== undefined && t.document && t.document.createElement);
    const isInWorker = typeof WorkerGlobalScope === "function";
    const isInSharedWorker = typeof SharedWorkerGlobalScope === "function" && self instanceof SharedWorkerGlobalScope;
    const isInMainThread = !isInWorker && canUseDOM;
    const c = {
        canUseDOM,
        canUseEventListeners: canUseDOM && !!(t.addEventListener || t.attachEvent),
        canUseViewport: canUseDOM && !!window.screen,
        canUseWorkers: typeof Worker !== "undefined",
        isInBrowser: canUseDOM || isInWorker,
        isInMainThread,
        isInSharedWorker,
        isInWorker
    };
    i.default = c;
}, 66);