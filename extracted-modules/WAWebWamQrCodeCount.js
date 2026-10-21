__d("WAWebWamQrCodeCount", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.$1 = false;
            this.$2 = 0;
        }
        get() {
            return this.$2;
        }
        $3() {
            if (this.$1) {
                this.$1 = false;
                this.$2 = 0;
                this.initialDisplayDate = null;
            }
        }
        inc() {
            this.$3();
            return this.set(this.$2 + 1);
        }
        set(t) {
            this.$3();
            if (this.$2 !== t) {
                if (t === 1) {
                    this.initialDisplayDate = s();
                }
                this.$2 = t;
                return this.get();
            }
        }
        reset() {
            this.$1 = true;
        }
    }
    const l = new e;
    function s() {
        return Math.floor(window.performance.now());
    }
    i.default = l;
}, 66);