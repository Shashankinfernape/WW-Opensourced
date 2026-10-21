__d("WAWebReactionsModels", [
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebCollection",
    "WAWebContactCollection",
    "WAWebMsgKey",
    "WAWebReactionsCollection",
    "WAWebReactionsSendersGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.msgKey = o("WAWebBaseModel").prop();
            t.parentMsgKey = o("WAWebBaseModel").prop();
            t.reactionText = o("WAWebBaseModel").prop();
            t.timestamp = o("WAWebBaseModel").prop();
            t.senderUserJid = o("WAWebBaseModel").prop();
            t.read = o("WAWebBaseModel").prop();
            t.orphan = o("WAWebBaseModel").prop();
            t.senderObj = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            if (!r("WAWebWid").isNewsletter(this.senderUserJid)) {
                const t = o("WAWebContactCollection").ContactCollection.gadd(o("WAWebWidFactory").createUserWidOrThrow(this.senderUserJid));
                this.addChild("senderObj", t);
            }
        };
        t_prototype.isEqual = function(t) {
            return this.id.equals(t.id);
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebReactionsSendersGetters").clearReactionsSendersGetterCacheFor(this);
        };
        return t;
    })(o("WAWebAddOnModel").AddOnBaseModel);
    s.Proxy = "reactionsSenders";
    s.idClass = r("WAWebMsgKey");
    const u = (e = o("WAWebBaseModel")).defineModel(s);
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebCollection"));
    c.model = u;
    c.comparator = function(e, t) {
        if (o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)) {
            return -1;
        }
        if (o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid)) {
            return 1;
        }
        return t.timestamp - e.timestamp;
    };
    const d = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.aggregateEmoji = o("WAWebBaseModel").prop();
            t.hasReactionByMe = o("WAWebBaseModel").prop();
            t.senders = o("WAWebBaseModel").collection(c);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.BaseModel);
    d.Proxy = "aggReactions";
    const m = e.defineModel(d);
    const p = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebCollection"));
    p.model = m;
    p.comparator = function(e, t) {
        const n = t.senders.length - e.senders.length;
        if (e.hasReactionByMe) {
            return -1;
        }
        if (t.hasReactionByMe) {
            return 1;
        }
        if (n === 0) {
            const r = t.senders.at(0);
            const o = e.senders.at(0);
            if (r && o) {
                return r.timestamp - o.timestamp;
            }
        }
        return n;
    };
    const _ = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.reactionByMe = o("WAWebBaseModel").prop();
            t.reactions = o("WAWebBaseModel").collection(p);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.unreadSenders = function() {
            return this.reactions.toArray().flatMap((e)=>e.senders.toArray()).filter((e)=>!e.read && !o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid));
        };
        t_prototype.getReactionSenderModel = function(t, n) {
            const e = this.reactions.get(t);
            const r = e == null ? undefined : e.senders.findFirst(function(e) {
                return e.senderUserJid === n;
            });
            return r;
        };
        t_prototype.getCollection = function() {
            return o("WAWebReactionsCollection").ReactionsCollection;
        };
        return t;
    })(e.BaseModel);
    _.Proxy = "reactions";
    _.idClass = r("WAWebMsgKey");
    const f = e.defineModel(_);
    l.ReactionsSenders = u;
    l.ReactionsSendersCollection = c;
    l.AggReactions = m;
    l.Reactions = f;
}, 98);