__d("WAWebHatchAboutManager", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(){
            this.$1 = new Map;
            this.$2 = [];
        }
        subscribe(t) {
            const e = this;
            this.$2.push(t);
            return function() {
                e.$2 = e.$2.filter((e)=>e !== t);
            };
        }
        getAboutState(t) {
            return this.$1.get(t) ?? null;
        }
        feedUnifiedResponse(t, n) {
            const e = this.$3(n);
            if (e != null) {
                const { isInProgress, title } = e;
                this.$1.set(t, {
                    isInProgress,
                    text: title
                });
                this.$4(t, title, isInProgress);
            }
        }
        clearAboutText(t) {
            this.$1.delete(t);
            this.$4(t, "", false);
        }
        $3({ sections }) {
            if (sections == null) {
                return null;
            }
            for (const n of sections){
                const r = n.view_model;
                if (r != null) {
                    const o = r.primitives;
                    if (o != null) {
                        for (const a of o){
                            if (a.__typename === "GenAIBotProgressStatusPrimitive") {
                                return {
                                    title: a.title,
                                    isInProgress: a.is_in_progress === true
                                };
                            }
                        }
                    }
                }
            }
            return null;
        }
        $4(t, n, r) {
            for (const e of [].concat(this.$2)){
                e(t, n, r);
            }
        }
    }
    const l = new e;
    i.default = l;
}, 66);