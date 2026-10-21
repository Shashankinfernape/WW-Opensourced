__d("WAWebConversationPanelActions", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.focus = function() {
            this.trigger("conversation_panel_focus");
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.ConversationPanelActions = s;
}, 98);