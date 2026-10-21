__d("WAWebCommentModalActions", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.scrollReplyModalToBottom = function() {
            this.trigger("scroll_reply_modal_to_bottom");
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.CommentModalActions = s;
}, 98);