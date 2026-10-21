__d("WAWebChatAssignmentBridgeApi", [
    "WAWebBizChatAssignmentAction",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebSchemaChatAssignment",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        checkOrphanAssignments: function() {
            o("WAWebBizChatAssignmentAction").checkOrphanAssignments();
        },
        restoreChatAssignments: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
                    const e = yield o("WAWebSchemaChatAssignment").getChatAssignmentTable().all();
                    o("WAWebChatAssignmentCollection").ChatAssignmentCollection.initializeFromCache(e);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        removeChatAssignmentsFromCollection: function({ assignmentIds }) {
            o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(assignmentIds);
        }
    };
    l.ChatAssignmentBridgeApi = e;
}, 98);