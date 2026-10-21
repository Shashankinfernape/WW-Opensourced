__d("QPLInspector", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.$1 = [];
            this.$2 = {};
        }
        appendLog(t) {
            for(const e in this.$2){
                if (!(!Object.prototype.hasOwnProperty.call(this.$2, e) || t.marker_id !== e)) {
                    this.$2[t.marker_id].forEach((e)=>e(t));
                }
            }
            this.$1.push(t);
        }
        dumpLogs() {
            return this.$1;
        }
        addListener(t, n) {
            if (!Object.prototype.hasOwnProperty.call(this.$2, t)) {
                this.$2[t] = [];
            }
            this.$2[t].push(n);
            this.$1.forEach((e)=>{
                if (e.marker_id === t) {
                    n(e);
                }
            });
        }
        removeListener(t, n) {
            const e = this.$2[t].indexOf(n);
            if (e !== -1) {
                this.$2[t].splice(e, 1);
            }
        }
    }
    const l = new e;
    i.default = l;
}, 66);