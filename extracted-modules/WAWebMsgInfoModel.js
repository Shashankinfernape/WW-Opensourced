__d("WAWebMsgInfoModel", [
    "WAWebBaseModel",
    "WAWebCollection",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebMsgInfoCollection",
    "WAWebMsgInfoGetters",
    "WAWebMsgKey",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.contact = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.addChild("contact", o("WAWebContactCollection").ContactCollection.gadd(this.id));
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebMsgInfoGetters").clearMsgInfoParticipantGetterCacheFor(this);
        };
        return t;
    })((e = o("WAWebBaseModel")).BaseModel);
    s.Proxy = "msgInfoParticipant";
    s.idClass = r("WAWebWid");
    const u = e.defineModel(s);
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.remove = function(n, r) {
            const t = e.prototype.remove.call(this, n, r);
            t.forEach((e)=>{
                if (e != null) {
                    o("WAWebMsgInfoGetters").clearMsgInfoParticipantGetterCacheFor(e);
                }
            });
            return t;
        };
        t_prototype.reset = function() {
            this.forEach(o("WAWebMsgInfoGetters").clearMsgInfoParticipantGetterCacheFor);
            e.prototype.reset.call(this);
        };
        return t;
    })(r("WAWebCollection"));
    c.model = u;
    c.comparator = function(e, t) {
        return o("WAWebContactComparator").ContactComparator(e.contact, t.contact);
    };
    const d = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.usePlayReceipt = o("WAWebBaseModel").prop();
            t.playedRemaining = o("WAWebBaseModel").prop(0);
            t.readRemaining = o("WAWebBaseModel").prop(0);
            t.deliveryRemaining = o("WAWebBaseModel").prop(0);
            t.deliveryPrivacyMode = o("WAWebBaseModel").prop();
            t.countedAgents = o("WAWebBaseModel").prop();
            t.played = o("WAWebBaseModel").collection(c);
            t.read = o("WAWebBaseModel").collection(c);
            t.delivery = o("WAWebBaseModel").collection(c);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebMsgInfoCollection").MsgInfoCollection;
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebMsgInfoGetters").clearMsgInfoGetterCacheFor(this);
        };
        return t;
    })(e.BaseModel);
    d.Proxy = "msgInfo";
    d.idClass = r("WAWebMsgKey");
    const m = e.defineModel(d);
    l.MsgInfoParticipant = u;
    l.ParticipantCollection = c;
    l.MsgInfo = m;
}, 98);