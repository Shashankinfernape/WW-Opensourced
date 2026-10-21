__d("WAWebUnreadMentionMetadataModel", [
    "WAWebBaseModel",
    "WAWebChatUnreadMentionCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.unreadMentionCollection = o("WAWebBaseModel").prop();
            t.pendingUnreadMentionCount = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            this.unreadMentionCollection = new (r("WAWebChatUnreadMentionCollection"));
            this.pendingUnreadMentionCount = 0;
        };
        t_prototype.hasMentionId = function(t) {
            return this.unreadMentionCollection.get(t) != null;
        };
        t_prototype.addUnreadMentions = function(t, n) {
            this.unreadMentionCollection.add(t);
        };
        t_prototype.removeUnreadMentions = function(t) {
            this.unreadMentionCollection.remove(t);
        };
        t_prototype.oldestUnreadMention = function() {
            return this.unreadMentionCollection.oldestUnreadMention();
        };
        t_prototype.reset = function() {
            this.pendingUnreadMentionCount = 0;
            this.unreadMentionCollection.reset();
        };
        t_prototype.getUnreadMentionCount = function() {
            return this.pendingUnreadMentionCount + this.unreadMentionCollection.length;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);