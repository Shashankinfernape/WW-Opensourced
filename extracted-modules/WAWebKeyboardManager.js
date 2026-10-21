__d("WAWebKeyboardManager", [
    "WAWebKeyboardRun",
    "WAWebKeyboardShortcuts"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(){
            document.addEventListener("keydown", function(e) {
                const t = o("WAWebKeyboardShortcuts").getAction(e);
                if (t) {
                    r("WAWebKeyboardRun")(t);
                }
            });
        }
        trigger(t) {}
        menuBatchRenderWith(t) {}
    }
    const s = new e;
    l.default = s;
}, 98);