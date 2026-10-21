__d("WAPttComposerRecorderPollableTimer", [], function(t, n, r, o, a, i) {
    class e {
        start() {
            this.$1 = Date.now();
        }
        stop() {
            this.$2 = Date.now();
        }
        pause() {
            this.stop();
        }
        resume() {
            this.$1 = Date.now() - this.getTime();
            this.$2 = null;
        }
        getTime() {
            const t = this.$1;
            if (t == null) {
                return 0;
            }
            const n = this.$2 ?? Date.now();
            return n - t;
        }
    }
    i.default = e;
}, 66);