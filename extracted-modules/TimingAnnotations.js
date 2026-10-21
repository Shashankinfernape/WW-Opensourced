__d("TimingAnnotations", [], function(t, n, r, o, a, i) {
    class e {
        addStringAnnotation(t, n) {
            return this;
        }
        addSetAnnotation(t, n) {
            return this;
        }
        addSetElement(t, n) {
            return this;
        }
        registerOnBeforeSend(t) {
            return this;
        }
        addVectorAnnotation(t, n) {
            return this;
        }
        addVectorElement(t, n) {
            return this;
        }
    }
    class l {
        constructor(){
            this.$1 = null;
            this.$2 = null;
            this.$3 = null;
            this.$4 = [];
        }
        addStringAnnotation(t, n) {
            this.$2 = this.$2 || new Map;
            this.$2.set(t, n);
            return this;
        }
        addSetAnnotation(t, n) {
            const e = this.$1 || new Map;
            const r = e.get(t) || new Set;
            n.forEach((e)=>r.add(e));
            e.set(t, r);
            this.$1 = e;
            return this;
        }
        addSetElement(t, n) {
            const e = this.$1 || new Map;
            const r = e.get(t) || new Set;
            r.add(n);
            e.set(t, r);
            this.$1 = e;
            return this;
        }
        addVectorAnnotation(t, n) {
            this.$3 = this.$3 || new Map;
            this.$3.set(t, n);
            return this;
        }
        addVectorElement(t, n) {
            const e = this.$3 = this.$3 || new Map;
            const r = this.$3.get(t) || [];
            r.push(n);
            e.set(t, r);
            return this;
        }
        registerOnBeforeSend(t) {
            this.$4.push(t);
            return this;
        }
        prepareToSend() {
            const e = this;
            this.$4.forEach((t)=>t(e));
            this.$4 = [];
            const setProps = {};
            if (this.$1 != null) {
                for (const [r, o] of this.$1){
                    setProps[r] = Array.from(o.values());
                }
            }
            const stringProps = {};
            if (this.$2 != null) {
                for (const [l, s] of this.$2){
                    stringProps[l] = s;
                }
            }
            const vectorProps = {};
            if (this.$3 != null) {
                for (const [d, m] of this.$3){
                    vectorProps[d] = m;
                }
            }
            return {
                setProps,
                stringProps,
                vectorProps
            };
        }
        static combine(t, n) {
            let e;
            if (t != null && n != null) {
                t.stringProps = babelHelpers.extends({}, n.stringProps, t.stringProps);
                t.setProps = babelHelpers.extends({}, n.setProps, t.setProps);
                e = t;
            } else if (t != null) {
                e = t;
            } else if (n != null) {
                e = n;
            }
            return e;
        }
    }
    l.EmptyTimingAnnotations = e;
    l.EmptyTraceTimingAnnotations = e;
    l.TraceTimingAnnotations = l;
    i.default = l;
}, 66);