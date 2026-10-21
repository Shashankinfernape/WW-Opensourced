__d("WAWebDocumentVisibilityObserver", [], function(t, n, r, o, a, i) {
    const e = 60000;
    class l {
        constructor(){
            this.$1 = !document.hidden;
            this.$2 = !document.hidden;
            this.$3 = document.hidden ? null : 0;
            this.$4 = null;
            this.$5 = [];
        }
        isDocumentVisible() {
            return this.$1;
        }
        isWindowInFocus() {
            return this.$2;
        }
        getReturnedFromHiddenTime() {
            return this.$4;
        }
        getDocumentVisibilityDuration({ end, start }) {
            let r = 0;
            const end_1 = window.performance.now();
            if (this.$3 != null) {
                this.$5.push({
                    start: this.$3,
                    end: end_1
                });
                this.$3 = end_1;
            }
            for (const a of this.$5){
                if (!(a.end < start || a.start > end)) {
                    if (a.start <= start && a.end <= end) {
                        r += a.end - start;
                        continue;
                    }
                    if (a.start <= start && a.end > end) {
                        r += end - start;
                        continue;
                    }
                    if (a.start >= start && a.end <= end) {
                        r += a.end - a.start;
                        continue;
                    }
                    if (a.start >= start && a.end > end) {
                        r += end - a.start;
                        continue;
                    }
                }
            }
            return r;
        }
        observe() {
            const t = this;
            const n = (r, o)=>{
                if (o !== t.$1) {
                    t.$1 = o;
                    if (o) {
                        t.$3 = r.timeStamp;
                        t.$4 = r.timeStamp;
                    } else if (t.$3 != null) {
                        t.$5.push({
                            start: t.$3,
                            end: r.timeStamp
                        });
                        t.$3 = null;
                    }
                    t.$5 = t.$5.filter((t)=>t.end >= r.timeStamp - e);
                }
            };
            const r = function(t) {
                n(t, !document.hidden);
            };
            const o = function() {
                t.$2 = true;
            };
            const a = function() {
                t.$2 = false;
            };
            document.addEventListener("visibilitychange", r);
            window.addEventListener("focus", o);
            window.addEventListener("blur", a);
            return function() {
                document.removeEventListener("visibilitychange", r);
                window.removeEventListener("focus", o);
                window.removeEventListener("blur", a);
            };
        }
    }
    i.WAWebDocumentVisibilityObserver = l;
}, 66);