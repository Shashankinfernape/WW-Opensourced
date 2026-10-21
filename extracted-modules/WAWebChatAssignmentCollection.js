__d("WAWebChatAssignmentCollection", [
    "WALogger",
    "WAWebAgentCollection",
    "WAWebAssignedAgentsCollection",
    "WAWebBaseCollection",
    "WAWebChatAssignmentModel",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            e.$ChatAssignmentCollectionImpl$p_1 = new Map;
            e.$ChatAssignmentCollectionImpl$p_2 = new Map;
            e.$ChatAssignmentCollectionImpl$p_3 = [];
            e.listenTo(e, "add", function(t) {
                return e.$ChatAssignmentCollectionImpl$p_4(t);
            });
            e.listenTo(e, "remove", function(t) {
                return e.$ChatAssignmentCollectionImpl$p_5(t);
            });
            e.listenTo(e, "change", function(t) {
                return e.$ChatAssignmentCollectionImpl$p_6(t);
            });
            e.listenTo(o("WAWebAgentCollection").AgentCollection, "add", function(t) {
                return e.$ChatAssignmentCollectionImpl$p_7(t);
            });
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.$ChatAssignmentCollectionImpl$p_4 = function(n) {
            this.$ChatAssignmentCollectionImpl$p_1.set(n.chatId, !n.chatOpenedByAgent);
            const t = this.getAgentCollectionForChatId(o("WAWebWidFactory").createWid(n.chatId));
            if (n.agent == null) {
                const r = o("WAWebAgentCollection").AgentCollection.get(n.agentId);
                if (r != null) {
                    n.agent = r;
                } else {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "chat_assignment_collection:_handleAdd failed"
                    ]))).sendLogs("chat_assignment_collection:_handleAdd: attempted to add assignment without agent");
                }
            }
            if (n.agent != null) {
                t.add(n.agent);
            }
        };
        n_prototype.$ChatAssignmentCollectionImpl$p_5 = function(t) {
            const e = this.$ChatAssignmentCollectionImpl$p_2.get(t.chatId);
            if (e) {
                e.remove(t.agent);
            }
            this.$ChatAssignmentCollectionImpl$p_1.delete(t.chatId);
        };
        n_prototype.$ChatAssignmentCollectionImpl$p_6 = function(t) {
            this.$ChatAssignmentCollectionImpl$p_1.set(t.chatId, !t.chatOpenedByAgent);
            this.getAgentCollectionForChatId(o("WAWebWidFactory").createWid(t.chatId)).trigger("change", []);
        };
        n_prototype.$ChatAssignmentCollectionImpl$p_7 = function(t) {
            const e = this.$ChatAssignmentCollectionImpl$p_3.filter((e)=>e.agentId === t.id);
            this.processChatAssignments(e);
        };
        n_prototype.processChatAssignments = function(t) {
            const e = this;
            const n = [];
            t.forEach((t)=>{
                const agent = o("WAWebAgentCollection").AgentCollection.get(t.agentId);
                if (e.get(t.id)?.agent.id === t.agentId) {
                    e.get(t.id)?.set({
                        chatOpenedByAgent: t.chatOpenedByAgent
                    });
                } else {
                    if (agent && !agent.isDeleted) {
                        n.push(new (o("WAWebChatAssignmentModel")).ChatAssignment({
                            id: t.id,
                            chatId: t.chatId,
                            chatOpenedByAgent: t.chatOpenedByAgent,
                            agent
                        }));
                    } else {
                        e.$ChatAssignmentCollectionImpl$p_3.push(t);
                    }
                }
            });
            this.add(n, {
                merge: true
            });
        };
        n_prototype.getChatUnopenedStatus = function(t) {
            return !!this.$ChatAssignmentCollectionImpl$p_1.get(t.toString({
                legacy: true
            }));
        };
        n_prototype.reset = function() {
            this.$ChatAssignmentCollectionImpl$p_2.forEach((e)=>{
                e.reset();
            });
            t.prototype.reset.call(this);
        };
        n_prototype.getAgentCollectionForChatId = function(t) {
            let e = this.$ChatAssignmentCollectionImpl$p_2.get(t.toString({
                legacy: true
            }));
            if (!e) {
                e = new (o("WAWebAssignedAgentsCollection")).AssignedAgentsCollection;
                this.$ChatAssignmentCollectionImpl$p_2.set(t.toString({
                    legacy: true
                }), e);
            }
            return e;
        };
        n_prototype.initializeFromCache = function(t) {
            this.processChatAssignments(t);
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebChatAssignmentModel").ChatAssignment;
    const u = new s;
    l.ChatAssignmentCollection = u;
}, 98);