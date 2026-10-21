__d("WAWebQuickReplyCollection", [
    "WAWebBaseCollection",
    "WAWebFrontendQuickReplyGetters",
    "WAWebQuickReplyModel",
    "WAWebQuickReplySmartDefaults"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r_1) {
            let t;
            t = e.call(this, ...r_1) || this;
            t.smartDefaultsAdded = false;
            t.sortQuickReply = function(e, t) {
                const n = o("WAWebFrontendQuickReplyGetters").getTotalCount(e);
                const r = o("WAWebFrontendQuickReplyGetters").getTotalCount(t);
                if (n === r) {
                    if (e.id < t.id) {
                        return -1;
                    }
                    return 1;
                }
                if (n > r) {
                    return -1;
                }
                return 1;
            };
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.addSmartDefaultsIfNeeded = function() {
            if (this.smartDefaultsAdded === false) {
                o("WAWebQuickReplySmartDefaults").addSmartDefaults();
                this.smartDefaultsAdded = true;
            }
        };
        t_prototype.filterShortcuts = function(t) {
            const e = this.filter(({ shortcut })=>shortcut.toLowerCase().startsWith(t.toLowerCase()));
            return e.sort(this.sortQuickReply);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebQuickReplyModel");
    const s = new e;
    l.QuickReplyCollection = s;
}, 98);