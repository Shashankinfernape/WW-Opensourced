__d("WAWebFlatListController", [], function(t, n, r, o, a, i) {
    class e {
        registerContainer(t) {
            this.$1 = t;
            if (this.$2) {
                t.onRegisterList();
            }
        }
        unregisterContainer() {
            this.$1 = null;
        }
        triggerScroll() {
            if (this.$2) {
                this.$2.handleScroll();
            }
        }
        triggerLayout(t) {
            if (this.$2) {
                this.$2.handleLayout(t);
            }
        }
        registerList(t) {
            this.$2 = t;
            if (this.$1) {
                this.$1.onRegisterList();
            }
        }
        unregisterList() {
            this.$2 = null;
        }
        getScrollFromStart() {
            if (this.$1) {
                return this.$1.getScrollFromStart();
            }
        }
        setScrollFromStart(t) {
            if (this.$1) {
                this.$1.setScrollFromStart(t);
            }
        }
    }
    i.default = e;
}, 66);