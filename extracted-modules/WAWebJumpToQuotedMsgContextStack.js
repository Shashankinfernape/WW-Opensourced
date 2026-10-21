__d("WAWebJumpToQuotedMsgContextStack", [
    "WAWebEventEmitter",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = "change";
    const s = 500;
    function u() {
        return r("justknobx")._("4542");
    }
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$JumpToQuotedMsgContextStackImpl$p_1 = new Map;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.push = function(n, r) {
            const o = this.$JumpToQuotedMsgContextStackImpl$p_1.get(n) ?? [];
            o.push(r);
            this.$JumpToQuotedMsgContextStackImpl$p_1.set(n, o);
            this.trigger(e, n);
        };
        n_prototype.pop = function(n) {
            const t = this.$JumpToQuotedMsgContextStackImpl$p_1.get(n);
            if (t == null || t.length === 0) {
                return null;
            }
            const r = t.pop();
            if (t.length === 0) {
                this.$JumpToQuotedMsgContextStackImpl$p_1.delete(n);
            }
            this.trigger(e, n);
            return r;
        };
        n_prototype.peek = function(t) {
            const e = this.$JumpToQuotedMsgContextStackImpl$p_1.get(t);
            if (e == null || e.length === 0) {
                return null;
            }
            return e[e.length - 1];
        };
        n_prototype.hasReturnPoint = function(t) {
            return this.peek(t) != null;
        };
        n_prototype.size = function(t) {
            return this.$JumpToQuotedMsgContextStackImpl$p_1.get(t)?.length ?? 0;
        };
        n_prototype.clear = function(n) {
            if (this.$JumpToQuotedMsgContextStackImpl$p_1.delete(n)) {
                this.trigger(e, n);
            }
        };
        return n;
    })(r("WAWebEventEmitter"));
    const d = new c;
    l.JUMP_TO_QUOTED_MSG_CONTEXT_CHANGE = e;
    l.RETURN_POINT_INVALIDATION_SCROLL_PX = s;
    l.isJumpBackToQuotedMsgContextEnabled = u;
    l.JumpToQuotedMsgContextStack = d;
}, 98);