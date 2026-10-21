__d("WAWebChatSearchQuery", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = "SEARCH_EVENT";
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.query = "";
            e.filter = {};
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.trimmed = function() {
            return this.query.trim();
        };
        n_prototype.highlighted = function() {
            const e = this.trimmed().toLowerCase().split(" ");
            return Array.from(new Set(e));
        };
        n_prototype.$SearchQuery$p_1 = function() {
            return this.trimmed() === "" || !this.trimmed();
        };
        n_prototype.isEmptyQuery = function() {
            return this.$SearchQuery$p_1();
        };
        n_prototype.hasFilter = function() {
            return this.hasKindFilter() || this.hasLabelFilter();
        };
        n_prototype.hasKindFilter = function() {
            return !!this.filter.kind;
        };
        n_prototype.hasLabelFilter = function() {
            return !!this.filter.label;
        };
        n_prototype.updateQuery = function(n) {
            const query = this.query;
            this.query = n;
            if (n.trim() !== query) {
                this.trigger(e);
            }
        };
        n_prototype.updateLabelQuery = function(t) {
            this.filter = t || {};
        };
        n_prototype.clear = function() {
            this.updateQuery("");
        };
        n_prototype.equals = function(t, n) {
            return this.query === t && this.filter.kind === n?.kind && this.filter.label === n?.label && this.filter.leadStage === n?.leadStage;
        };
        return n;
    })(r("WAWebEventEmitter"));
    function u(e) {
        if (e == null) {
            return false;
        }
        return !!(!e.isEmptyQuery() || e.hasFilter());
    }
    l.SEARCH_EVENT = e;
    l.SearchQuery = s;
    l.isSearchResult = u;
}, 98);