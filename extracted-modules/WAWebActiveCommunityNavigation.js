__d("WAWebActiveCommunityNavigation", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.$ActiveCommunityNavigationImpl$p_1 = null;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setActive = function(t) {
            const $ActiveCommunityNavigationImpl$p_1 = this.$ActiveCommunityNavigationImpl$p_1;
            const n = t == null ? $ActiveCommunityNavigationImpl$p_1 == null : $ActiveCommunityNavigationImpl$p_1?.equals(t) === true;
            if (!n) {
                this.$ActiveCommunityNavigationImpl$p_1 = t;
                this.trigger("change");
            }
        };
        t_prototype.getActive = function() {
            return this.$ActiveCommunityNavigationImpl$p_1;
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.default = s;
}, 98);