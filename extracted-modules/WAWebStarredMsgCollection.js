__d("WAWebStarredMsgCollection", [
    "Promise",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebCollectionConstants",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebMsgQueryUtils",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function a() {
            let e;
            e = t.call(this) || this;
            e.syncPromise = null;
            e.isSynced = false;
            e.listenTo(o("WAWebSocketModel").Socket, "change:stream", function() {
                if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED) {
                    e.isSynced = false;
                } else if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED) {
                    e.delete();
                }
            });
            return e;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.process = function(t, n, r, o) {
            if (o !== true) {
                this.updateMsgs(t, n, r);
            } else {
                this.delete();
            }
        };
        a_prototype.sync = function(a) {
            if (this.isSynced) {
                return (u || (u = n("Promise"))).resolve();
            }
            if (this.syncPromise != null) {
                return this.syncPromise;
            }
            const t = this;
            let i;
            const l = this.last();
            if (l) {
                i = l.id;
            }
            this.syncPromise = o("WAWebMsgQueryUtils").getStarred(a, o("WAWebCollectionConstants").PAGE_SIZE, i).then((e)=>{
                if (e.length) {
                    t.add(e, {
                        silent: true
                    });
                }
                if (e.length < o("WAWebCollectionConstants").PAGE_SIZE) {
                    t.isSynced = true;
                }
            }).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "starred msg sync error: "
                ])));
            }).finally(()=>{
                t.syncPromise = null;
                t.trigger("sync");
            });
            this.trigger("sync");
            return r("nullthrows")(this.syncPromise, "syncPromise can not be null");
        };
        a_prototype.updateMsgs = function(t, r, a) {
            const e = this;
            const i = this.syncPromise || (u || (u = n("Promise"))).resolve();
            this.syncPromise = i.then(()=>{
                if (t) {
                    const i = r.length > 0 ? o("WAWebMsgCollection").MsgCollection.incrementalStarredUpdate(r) : (u || (u = n("Promise"))).resolve([]);
                    return i.then((t)=>{
                        const n = t.concat(a);
                        if (e.isSynced) {
                            e.add(n, {
                                silent: true
                            });
                        }
                        n.forEach((e)=>{
                            o("WAWebFrontendMsgGetters").getChat(e).starredMsgs?.add(e);
                        });
                        e.trigger("sync");
                    }).catch((e)=>{
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "models:starred:update:error: "
                        ])));
                    });
                }
                const l = r.concat(a).filter((e)=>!e.star);
                p(l);
            }).finally(()=>{
                e.syncPromise = null;
            });
        };
        a_prototype.delete = function() {
            this.isSynced = false;
            t.prototype.delete.call(this);
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebMsgModel").Msg;
    c.comparator = function(e, t) {
        return t.t - e.t;
    };
    var d = new c;
    function m(e) {
        d.add(e);
        e.forEach((e)=>{
            o("WAWebFrontendMsgGetters").getChat(e).starredMsgs?.add(e);
        });
    }
    function p(e) {
        d.remove(e);
        e.forEach((e)=>{
            o("WAWebFrontendMsgGetters").getChat(e).starredMsgs?.remove(e);
        });
    }
    l.StarredMsgCollection = c;
    l.AllStarredMsgsCollection = d;
    l.addStarredMsgs = m;
    l.removeStarredMsgs = p;
}, 98);