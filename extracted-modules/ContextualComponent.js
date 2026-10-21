__d("ContextualComponent", [
    "Parent"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor({ element, isRoot, parent }){
            this.$2 = isRoot;
            this.$3 = element;
            this.$4 = parent;
            this.$5 = new Set;
            this.$6 = [];
            this.$7 = [];
            this.$8();
        }
        static forNode(n) {
            return e.$1.get(n) || null;
        }
        static closestToNode(n) {
            const t = o("Parent").find(n, function(t) {
                return !!e.forNode(t);
            });
            if (t) {
                return e.forNode(t);
            }
            return null;
        }
        static register(n) {
            return new e(n);
        }
        onCleanup(t) {
            this.$6.push(t);
        }
        onUnmount(t) {
            this.$7.push(t);
        }
        cleanup() {
            this.$5.forEach((e)=>e.cleanup());
            this.$6.forEach((e)=>e());
            this.$6 = [];
        }
        unmount() {
            this.cleanup();
            this.$5.forEach((e)=>e.unmount());
            this.$7.forEach((e)=>e());
            this.$7 = [];
            const t = this.$4;
            if (t) {
                e.$1.delete(this.$3);
                t.$9(this);
            }
        }
        reinitialize() {
            const t = this.$4;
            if (t) {
                t.$9(this);
                this.$4 = undefined;
            }
            e.$1.delete(this.$3);
            this.$8();
        }
        $8() {
            if (!this.$2 && !this.$4) {
                const t = e.closestToNode(this.$3);
                if (t) {
                    this.$4 = t;
                }
            }
            if (this.$4) {
                this.$4.$10(this);
            }
            e.$1.set(this.$3, this);
        }
        $10(t) {
            this.$5.add(t);
        }
        $9(t) {
            this.$5.delete(t);
        }
    }
    e.$1 = new Map;
    l.default = e;
}, 98);