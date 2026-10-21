__d("renameFunctionWithStaticName_BeCareful", [], function(t, n, r, o, a, i) {
    function e() {
        try {
            const e = new Function("a", "b", "return a + b;");
            if (typeof e !== "function" || e(1, 1) !== 2) {
                return false;
            }
            const t = new Function("return function ProbeName(){ return 42; };");
            const n = t();
            return typeof n === "function" && n.name === "ProbeName" && n() === 42;
        } catch (e) {
            return false;
        }
    }
    function l(e, t) {
        const n = new Function("f", `return function ${t}_jssp_wrapper(...args) {
       return f.apply(this, args);
     };`)(e);
        return n;
    }
    const s = e() ? l : function(e, t) {
        return e;
    };
    i.default = s;
}, 66);