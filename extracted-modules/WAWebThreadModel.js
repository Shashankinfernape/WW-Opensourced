__d("WAWebThreadModel", [
    "WALogger",
    "WAWebBaseModel",
    "WAWebChatCollection",
    "WAWebChatLoadMessages",
    "WAWebChatMsgsCollection",
    "WAWebSuperChatMsgs",
    "WAWebThreadId",
    "WAWebThreadMsgUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.creationTimestamp = o("WAWebBaseModel").prop();
            e.lastMessageTimestamp = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.getParentChat = function() {
            return o("WAWebChatCollection").ChatCollection.get(this.id.key.remote);
        };
        n_prototype.initialize = function() {
            t.prototype.initialize.call(this);
            this.msgs.threadId = this.id;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ThreadChatParity] ThreadModel.initialize: threadId=",
                " set"
            ])), this.id.toString());
        };
        n_prototype.seedFromChat = function(t) {
            const e = this;
            if (!(this.msgs.length > 0)) {
                const n = this.id;
                const r = [];
                t.msgs.forEach((e)=>{
                    if (o("WAWebThreadMsgUtils").isMsgInThread(e, n)) {
                        r.push(e);
                    }
                });
                if (r.length > 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadChatParity] seedFromChat: thread=",
                        " +",
                        " msgs"
                    ])), n.toString(), r.length);
                    this.msgs.add(r);
                }
                const a = ()=>{
                    const t = [];
                    i.forEach((e)=>{
                        if (o("WAWebThreadMsgUtils").isMsgInThread(e, n)) {
                            t.push(e);
                        }
                    });
                    if (t.length > 0) {
                        const r = new (o("WAWebChatMsgsCollection")).ChatMsgsCollection;
                        r.threadId = n;
                        r.add(t);
                        e.msgChunks.push(r);
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[ThreadChatParity] seedFromChat: thread=",
                            " sparse +",
                            " msgs"
                        ])), n.toString(), t.length);
                    }
                };
                for (var i of t.msgChunks){
                    a();
                }
            }
        };
        n_prototype.onEmptyMRM = function() {
            const e = this.getParentChat();
            if (e != null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadChatParity] onEmptyMRM: thread=",
                    " reloading"
                ])), this.id.toString());
                o("WAWebChatLoadMessages").loadEarlierMsgs({
                    chat: e,
                    msgCollection: this.msgs,
                    threadId: this.id
                }).catch(()=>{
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadChatParity] onEmptyMRM: loadEarlierMsgs failed"
                    ])));
                });
            }
        };
        return n;
    })(r("WAWebSuperChatMsgs"));
    m.Proxy = "thread";
    m.idClass = r("WAWebThreadId");
    l.default = m;
}, 98);