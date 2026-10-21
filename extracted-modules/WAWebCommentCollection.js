__d("WAWebCommentCollection", [
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebCommentModel",
    "WAWebMsgGetters",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.byParent = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.parentMsgKey;
            });
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getByMsgKey = function(t) {
            return this.findFirst(function(e) {
                return e.id.equals(t);
            });
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebCommentModel").Comment;
    function s(e) {
        return new (o("WAWebCommentModel")).Comment({
            ack: e.ack,
            body: e.body,
            id: e.id,
            parentMsgKey: e.parentMsgKey,
            author: e.author,
            t: e.t,
            type: "comment",
            read: e.read,
            messageSecret: e.messageSecret
        });
    }
    function u(e) {
        return new (o("WAWebCommentModel")).Comment({
            t: e.t,
            parentMsgKey: e.parentMsgKey,
            id: e.id,
            subtype: e.subtype,
            protocolMessageKey: e.protocolMessageKey,
            revokeTimestamp: e.revokeTimestamp,
            isOverwrittenByRevoke: true,
            type: o("WAWebMsgType").MSG_TYPE.REVOKED,
            author: o("WAWebMsgGetters").getSender(e),
            revokeSender: e.revokeSender
        });
    }
    function c(e) {
        return new (o("WAWebCommentModel")).Comment({
            t: e.t,
            parentMsgKey: e.parentMsgKey,
            id: e.id,
            type: "ciphertext",
            author: e.author,
            ack: e.ack
        });
    }
    const d = new e;
    l.createCommentModel = s;
    l.createCommentModelFromRevoke = u;
    l.createCommentModelFromPlaceholder = c;
    l.CommentCollection = d;
}, 98);