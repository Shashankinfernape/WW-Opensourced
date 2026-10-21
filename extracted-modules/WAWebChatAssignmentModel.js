__d("WAWebChatAssignmentModel", [
    "WAWebBaseModel",
    "WAWebChatAssignmentCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.chatId = o("WAWebBaseModel").prop();
            t.agent = o("WAWebBaseModel").prop();
            t.agentId = o("WAWebBaseModel").prop();
            t.chatOpenedByAgent = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebChatAssignmentCollection").ChatAssignmentCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "chat_assignment";
    const s = o("WAWebBaseModel").defineModel(e);
    l.ChatAssignment = s;
}, 98);