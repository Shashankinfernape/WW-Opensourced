__d("Hyperion", [
    "Env",
    "ExecutionEnvironment",
    "hyperionCore",
    "hyperionDOM"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    if ((u || (u = r("ExecutionEnvironment"))).isInBrowser && !(u || (u = r("ExecutionEnvironment"))).isInWorker && (c || (c = r("Env"))).loadHyperion === true) {
        (e || (e = o("hyperionCore"))).intercept(t, (s || (s = o("hyperionDOM"))).IWindow.IWindowPrototype);
    }
}, 34);