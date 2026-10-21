__d("WAWebSendNotSpamJob", [
    "WALogger",
    "WASmaxGroupsAcknowledgeGroupRPC",
    "WAWebChatGetters",
    "WAWebNoop",
    "WAWebSchemaChat",
    "WAWebWidToJid",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        if (o("WAWebChatGetters").getIsGroup(t)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[callp] acknowledging group ",
                ""
            ])), t.id.toLogString());
            o("WASmaxGroupsAcknowledgeGroupRPC").sendAcknowledgeGroupRPC({
                iqTo: o("WAWebWidToJid").widToGroupJid(t.id)
            }).catch(r("WAWebNoop"));
        }
        return o("WAWebSchemaChat").getChatTable().merge(t.id.toString(), {
            notSpam: true
        }).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "get chat table merge failed"
            ]))).verbose().sendLogs("get chat table merge failed when sending spam report");
            throw r("err")("get chat table merge failed");
        });
    }
    l.default = u;
}, 98);