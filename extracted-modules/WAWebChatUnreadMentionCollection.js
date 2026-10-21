__d("WAWebChatUnreadMentionCollection", [
    "WAWebCollection",
    "WAWebUnreadMentionModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.oldestUnreadMention = function() {
            const t = this.last() ?? null;
            if (t) {
                this.remove(t);
            }
            return t;
        };
        return t;
    })(r("WAWebCollection"));
    e.model = r("WAWebUnreadMentionModel");
    e.comparator = function(e, t) {
        return t.timestamp - e.timestamp;
    };
    l.default = e;
}, 98);