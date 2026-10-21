__d("WAWebDataTransfer", [
    "Promise",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    let e;
    const l = /\r\n/g;
    const s = (()=>{
        function t(e) {
            const t = this;
            this.hasText = function() {
                return t.hasType("text/plain");
            };
            this.hasType = function(e) {
                return t.types.includes(e);
            };
            this.data = e;
            if (e.types) {
                if (Array.isArray(e.types)) {
                    this.types = e.types;
                } else {
                    this.types = Object.keys(e.types).map((t)=>e.types[t]);
                }
            } else {
                this.types = [];
            }
        }
        const t_prototype = t.prototype;
        t_prototype.getItems = function() {
            const e = this;
            if (this.data.items) {
                return Array.prototype.slice.call(this.data.items);
            }
            const t = this.$1();
            return this.types.map((n)=>({
                    type: n,
                    data: e.data.getData(n),
                    kind: t.includes(n) ? "string" : "file"
                }));
        };
        t_prototype.$1 = function() {
            return Array.prototype.slice.call(this.data.files).map(({ type })=>type);
        };
        t_prototype.getText = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$2(e);
                if (t != null && t !== "") {
                    return t.replace(l, "\n");
                }
                return null;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$2 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = t || [];
                if (r.length === 0) {
                    r.push("text/plain");
                }
                const data = this.data;
                if (data.getData) {
                    let a;
                    r.some((e)=>{
                        const t = data.getData(e);
                        if (t) {
                            a = data.getData(e);
                            return true;
                        }
                    });
                    return (e || (e = n("Promise"))).resolve(a);
                }
                const i = u(this.data.items, r);
                if (i.length) {
                    const l = (e || (e = n("Promise"))).all(i.map((t)=>new (e || (e = n("Promise")))(function(e) {
                            return t.getAsString(e);
                        })));
                    const s = yield l;
                    return s.find((e)=>e.length);
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.getFiles = function() {
            if (this.data.items) {
                return Array.prototype.slice.call(this.data.items).filter(({ kind })=>kind === "file").map((e)=>e.getAsFile()).filter((e)=>!!e);
            }
            return Array.prototype.slice.call(this.data.files || []);
        };
        t_prototype.getData = function(t) {
            return this.data.getData(t);
        };
        t_prototype.hasFiles = function() {
            if (this.data.items) {
                return Array.prototype.slice.call(this.data.items).some(({ kind })=>kind === "file");
            }
            return !!Array.prototype.slice.call(this.data.files || []).length;
        };
        return t;
    })();
    function u(items, t) {
        const n = Array.from(items);
        return t.reduce((acc, item)=>{
            const r = n.find((e)=>e.type === item);
            if (r) {
                acc.push(r);
            }
            return acc;
        }, []);
    }
    i.default = s;
}, 66);