__d("DoublyLinkedListMap", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.$1 = null;
            this.$2 = null;
            this.$3 = {};
            this.$4 = 0;
        }
        get(t) {
            const n = this.$3[t]?.data;
            return n ?? null;
        }
        getIndex(t) {
            for(let e = this.$1, n = 0; e; e = e.next, n++){
                if (e.key === t) {
                    return n;
                }
            }
            return null;
        }
        $5(t, n, r, o) {
            let e = r;
            if (e != null && !this.$3[e]) {
                e = null;
            }
            let a;
            if (e != null && this.$3[e]) {
                a = this.$3[e];
            } else {
                a = o ? this.$1 : this.$2;
            }
            const i = {
                data: n,
                key: t,
                next: null,
                prev: null
            };
            if (a) {
                this.remove(t);
                if (o) {
                    i.prev = a.prev;
                    if (a.prev) {
                        a.prev.next = i;
                    }
                    a.prev = i;
                    i.next = a;
                } else {
                    i.next = a.next;
                    if (a.next) {
                        a.next.prev = i;
                    }
                    a.next = i;
                    i.prev = a;
                }
            }
            if (i.prev === null) {
                this.$1 = i;
            }
            if (i.next === null) {
                this.$2 = i;
            }
            this.$3[t] = i;
            this.$4++;
            return this;
        }
        insertBefore(t, n, r) {
            return this.$5(t, n, r, true);
        }
        insertAfter(t, n, r) {
            return this.$5(t, n, r, false);
        }
        prepend(t, n) {
            return this.insertBefore(t, n, this.$1 && this.$1.key);
        }
        append(t, n) {
            return this.insertAfter(t, n, this.$2 && this.$2.key);
        }
        remove(t) {
            const e = this.$3[t];
            if (e) {
                const { next, prev } = e;
                if (next) {
                    next.prev = prev;
                }
                if (prev) {
                    prev.next = next;
                }
                if (this.$1 === e) {
                    this.$1 = next;
                }
                if (this.$2 === e) {
                    this.$2 = prev;
                }
                delete this.$3[t];
                this.$4--;
            }
            return this;
        }
        find(t) {
            for(let e = this.$1; e; e = e.next){
                if (t(e.data)) {
                    return e.key;
                }
            }
            return null;
        }
        reduce(t, n) {
            let e = n;
            for(let r = this.$1; r; r = r.next){
                e = t(r.data, e);
            }
            return e;
        }
        exists(t) {
            return !!this.$3[t];
        }
        isEmpty() {
            return !this.$1;
        }
        reset() {
            this.$1 = null;
            this.$2 = null;
            this.$3 = {};
            this.$4 = 0;
        }
        map(t) {
            for(let e = this.$1; e; e = e.next){
                t(e.data);
            }
        }
        getCount() {
            return this.$4;
        }
        getHead() {
            return this.$1?.data;
        }
        getTail() {
            return this.$2?.data;
        }
        getNext(t) {
            return this.$3[t]?.next?.data;
        }
        getPrev(t) {
            return this.$3[t]?.prev?.data;
        }
        getHeadKey() {
            return this.$1?.key;
        }
        getTailKey() {
            return this.$2?.key;
        }
    }
    a.exports = e;
}, null);