__d("DOMRectReadOnly", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(){
            this.bottom = 0;
            this.height = 0;
            this.left = 0;
            this.right = 0;
            this.top = 0;
            this.width = 0;
            this.x = 0;
            this.y = 0;
        }
        static fromRect(n) {
            const t = n || {
                height: 0,
                width: 0,
                x: 0,
                y: 0
            };
            const { height, width, x, y } = t;
            const l = new e;
            l.x = x;
            l.y = y;
            l.width = width;
            l.height = height;
            l.top = y;
            l.bottom = y + height;
            l.right = x + width;
            l.left = x;
            return l;
        }
    }
    const l = "DOMRectReadOnly" in window;
    const s = l ? window.DOMRectReadOnly.fromRect : undefined;
    const u = !!s && typeof s === "function";
    const c = u ? window.DOMRectReadOnly : e;
    i.default = c;
}, 66);