__d("WAWebComposeBoxActions", [
    "WAWebEventEmitter",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.$ComposeBoxActionsImpl$p_1 = false;
            t.$ComposeBoxActionsImpl$p_2 = false;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.focus = function(t) {
            const e = o("WAWebStateUtils").unproxy(t);
            if (e) {
                this.trigger(`focus_${e.id.toString()}`);
            } else {
                this.trigger("focus");
            }
        };
        n.send = function(t) {
            const e = o("WAWebStateUtils").unproxy(t);
            this.trigger(`send_${e.id.toString()}`);
        };
        n.paste = function(t, n, r) {
            if (t) {
                const e = o("WAWebStateUtils").unproxy(t);
                this.trigger(`paste_${e.id.toString()}`, n, r);
            } else {
                this.trigger("paste", n, r);
            }
        };
        n.sendPaste = function(t, n) {
            const e = o("WAWebStateUtils").unproxy(t);
            this.trigger(`send_paste_${e.id.toString()}`, n);
        };
        n.pasteFiles = function(t, n) {
            const e = o("WAWebStateUtils").unproxy(t);
            this.trigger(`paste_files_${e.id.toString()}`, n);
        };
        n.toggleQuickReplies = function() {
            this.trigger("toggle_quick_replies");
        };
        n.addMsgSendingLogAttributes = function(t, n) {
            this.trigger(`add_sending_log_attributes_${t.id.toString()}`, n);
        };
        n.setCtwaContextLinkData = function(t, n) {
            this.trigger(`set_ctwa_context_link_data_${t.id.toString()}`, n);
        };
        n.setTextContent = function(t, n) {
            this.trigger(`set_text_content_${t.id.toString()}`, n);
        };
        n.setIsFocus = function(t) {
            this.$ComposeBoxActionsImpl$p_1 = t;
        };
        n.setHasText = function(t) {
            this.$ComposeBoxActionsImpl$p_2 = t;
        };
        n.setNonJidMentions = function(t, n) {
            this.trigger(`set_non_jid_mentions_${t.id.toString()}`, n);
        };
        n.isFocused = function() {
            return this.$ComposeBoxActionsImpl$p_1;
        };
        n.hasText = function() {
            return this.$ComposeBoxActionsImpl$p_2;
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.ComposeBoxActions = s;
}, 98);