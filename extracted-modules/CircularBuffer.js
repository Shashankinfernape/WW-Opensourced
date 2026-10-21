__d("CircularBuffer", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            if (e <= 0) {
                throw r("FBLogger")("comet_infra").mustfixThrow("Buffer size should be a positive integer");
            }
            this.$1 = e;
            this.$2 = 0;
            this.$3 = [];
            this.$4 = [];
        }
        write(t) {
            const e = this;
            if (this.$3.length < this.$1) {
                this.$3.push(t);
            } else {
                this.$4.forEach((t)=>t(e.$3[e.$2]));
                this.$3[this.$2] = t;
                this.$2++;
                this.$2 %= this.$1;
            }
            return this;
        }
        onEvict(t) {
            this.$4.push(t);
            return this;
        }
        read() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
        }
        expand(t) {
            if (t > this.$1) {
                const e = this.read();
                this.$2 = 0;
                this.$3 = e;
                this.$1 = t;
            }
            return this;
        }
        dropFirst(t) {
            if (t <= this.$1) {
                const e = this.read();
                this.$2 = 0;
                e.splice(0, t);
                this.$3 = e;
            }
            return this;
        }
        clear() {
            this.$2 = 0;
            this.$3 = [];
            return this;
        }
        currentSize() {
            return this.$3.length;
        }
        lastElement() {
            return this.$3[this.$2];
        }
    }
    l.default = e;
}, 98);