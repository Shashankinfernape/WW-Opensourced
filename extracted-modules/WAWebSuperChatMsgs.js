__d("WAWebSuperChatMsgs", [
    "WALogger",
    "WAWebBaseModel",
    "WAWebChatMsgsCollection",
    "WAWebGroupHistoryGating",
    "WAWebWid",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.pendingMsgs = o("WAWebBaseModel").prop();
            e.labels = o("WAWebBaseModel").prop();
            e.msgChunks = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.lastReceivedKey = o("WAWebBaseModel").session();
            e.unreadMsgAnchor = o("WAWebBaseModel").session();
            e.disableUnreadAnchor = o("WAWebBaseModel").session();
            e.msgsLength = o("WAWebBaseModel").session();
            e.msgsChanged = o("WAWebBaseModel").session(0);
            e.noEarlierMsgs = o("WAWebBaseModel").session(false);
            e.msgs = o("WAWebBaseModel").collection(o("WAWebChatMsgsCollection").ChatMsgsCollection);
            e.$ChatMsgs$p_1 = null;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            this.listenTo(this.msgs, "change:last", function() {
                e.msgsChanged++;
            });
            const n = function() {
                e.msgsChanged++;
                e.msgsLength = e.msgs.length;
            };
            this.listenTo(this.msgs, "add", n);
            this.listenTo(this.msgs, "remove", n);
            this.listenTo(this.msgs, "bulk_add", n);
            const a = this.id;
            if (a instanceof r("WAWebWid") && a.isGroup() && o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderPrerequisitesEnabled()) {
                const i = function() {
                    const noEarlierMsgs = e.msgs.msgLoadState.noEarlierMsgs;
                    if (e.noEarlierMsgs !== noEarlierMsgs) {
                        e.noEarlierMsgs = noEarlierMsgs;
                    }
                };
                this.$ChatMsgs$p_1 = this.msgs.onMsgLoadStateChange(i);
                i();
            }
        };
        n_prototype.onEmptyMRM = function() {
            throw r("err")("onEmptyMRM not implemented");
        };
        n_prototype.delete = function() {
            this.$ChatMsgs$p_1?.();
            t.prototype.delete.call(this);
            this.getAllCMCs().forEach((e)=>{
                e.forEach((e)=>{
                    e.delete();
                });
                e.delete();
            });
        };
        n_prototype.removeMsg = function(n) {
            const t = this;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:Chat:removeMsg ",
                ""
            ])), n.get("id"));
            this.$ChatMsgs$p_2(n, n.getMsgChunk());
            n.forEachThreadMsgChunk(function(e) {
                t.$ChatMsgs$p_2(n, e);
            });
        };
        n_prototype.$ChatMsgs$p_2 = function(t, n) {
            if (!(n == null || !n.includes(t))) {
                n.remove(t);
                if (n.length === 0) {
                    if (n === this.msgs) {
                        this.onEmptyMRM();
                    } else if (this.msgChunks.includes(n)) {
                        this.removeMsgsCollection(n);
                    }
                }
            }
        };
        n_prototype.getAllCMCs = function() {
            return this.msgChunks.concat([
                this.msgs
            ]);
        };
        n_prototype.getAllMsgs = function() {
            return this.getAllCMCs().map((e)=>e.getModelsArray()).flat();
        };
        n_prototype.replaceMsgsCollection = function(cmc1) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "model:Chat:replaceMsgsCollection:",
                ""
            ])), this.id.toString());
            const newFocusCtx = {
                msg: cmc1.last()
            };
            this.msgs.replace(cmc1);
            this.notifyMsgCollectionMerge({
                cmc1,
                cmc2: this.msgs,
                cmcResult: this.msgs,
                newFocusCtx
            });
            this.msgChunks = this.msgChunks.filter((e)=>e !== cmc1);
            cmc1.delete();
        };
        n_prototype.removeMsgsCollection = function(t) {
            this.msgChunks = this.msgChunks.filter((e)=>e !== t);
            t.delete();
        };
        n_prototype.notifyMsgCollectionMerge = function({ cmc1, cmc2, cmcResult, newFocusCtx }) {
            this.trigger("change:cmc:merge", {
                cmc1,
                cmc2,
                cmcResult,
                newFocusCtx
            });
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    l.default = u;
}, 98);