__d("WAWebCTWASuggestionCollection", [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebCTWASuggestionModel"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.hasLoadedFromStorage = false;
            e.$CTWASuggestionCollectionImpl$p_1 = false;
            e.$CTWASuggestionCollectionImpl$p_2 = null;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.markLoadedFromStorage = function() {
            this.cancelStorageWait();
            this.hasLoadedFromStorage = true;
            this.trigger("loaded_from_storage");
        };
        n_prototype.stopWaitingForStorageAfter = function(n) {
            const t = this;
            if (!(this.isDoneWaitingForStorage() || this.$CTWASuggestionCollectionImpl$p_2 != null)) {
                this.$CTWASuggestionCollectionImpl$p_2 = self.setTimeout(function() {
                    t.$CTWASuggestionCollectionImpl$p_2 = null;
                    t.$CTWASuggestionCollectionImpl$p_1 = true;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "CTWASuggestionCollection: stored suggestions did not load within ",
                        " ms"
                    ])), n);
                    t.trigger("stopped_waiting_for_storage");
                }, n);
            }
        };
        n_prototype.isDoneWaitingForStorage = function() {
            return this.hasLoadedFromStorage || this.$CTWASuggestionCollectionImpl$p_1;
        };
        n_prototype.cancelStorageWait = function() {
            if (this.$CTWASuggestionCollectionImpl$p_2 != null) {
                self.clearTimeout(this.$CTWASuggestionCollectionImpl$p_2);
                this.$CTWASuggestionCollectionImpl$p_2 = null;
            }
        };
        n_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.cancelStorageWait();
            this.hasLoadedFromStorage = false;
            this.$CTWASuggestionCollectionImpl$p_1 = false;
        };
        n_prototype.findFirstNotExpired = function() {
            return this.findFirst(function(e) {
                return o("WATimeUtils").isInFuture(e.suggestion.expiresAt);
            });
        };
        n_prototype.removeInteracted = function(t) {
            this.remove(t);
        };
        n_prototype.updateTrackingNuxData = function(t, n) {
            const e = this.get(t);
            if (e != null) {
                e.set("suggestion", babelHelpers.extends({}, e.suggestion, {
                    nuxData: n
                }));
            }
        };
        n_prototype.updateTrackingCoolOffData = function(t, n) {
            const e = this.get(t);
            if (e != null) {
                e.set("suggestion", babelHelpers.extends({}, e.suggestion, {
                    coolOffData: n
                }));
            }
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebCTWASuggestionModel").CTWASuggestionModel;
    const u = new s;
    l.CTWASuggestionCollection = u;
}, 98);