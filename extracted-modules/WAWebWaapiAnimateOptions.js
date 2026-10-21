__d("WAWebWaapiAnimateOptions", [
    "WAWebUimUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (typeof e !== "object" || e == null) {
            return {};
        }
        const { container: t, progress: n } = e;
        const r = e;
        const a = t ?? null;
        return {
            axis: s(r.axis),
            container: o("WAWebUimUtils").isCrossWindowHTMLElement(a) ? a : void 0,
            delay: c(r.delay),
            drag: r.drag === true,
            duration: u(r.duration),
            easing: d(r.easing),
            offset: c(r.offset),
            progress: typeof n === "function" ? n : void 0,
            queue: typeof r.queue === "string" || r.queue === false ? r.queue : void 0,
            stagger: c(r.stagger)
        };
    }
    function s(e) {
        if (e === "x") {
            return "x";
        }
        if (e === "y") {
            return "y";
        }
    }
    function u(e) {
        const t = c(e);
        if (t == null) {
            return void 0;
        }
        return Math.max(t, 0);
    }
    function c(e) {
        if (typeof e === "number" && Number.isFinite(e)) {
            return e;
        }
    }
    function d(e) {
        if (typeof e === "string") {
            return e;
        }
        if (Array.isArray(e) && (e.length === 2 || e.length === 4)) {
            const t = [];
            for (const n of e){
                const r = c(n);
                if (r != null) {
                    t.push(r);
                }
            }
            if (t.length === e.length) {
                return t;
            }
            return void 0;
        }
    }
    l.optionsObject = e;
}, 98);