__d("WAWebIsCagGroupCache", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.$1 = new Set;
        }
        add(t) {
            this.$1.add(t.toString());
        }
        remove(t) {
            this.$1.delete(t.toString());
        }
        isCag(t) {
            return this.$1.has(t.toString());
        }
        clear() {
            this.$1.clear();
        }
    }
    const l = new e;
    i.default = l;
}, 66);