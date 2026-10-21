__d("WAWebEventMsgsCollection", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebCollectionConstants",
    "WAWebFrontendMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgQueryUtils",
    "WAWebNoop",
    "WAWebSocketConstants",
    "WAWebSocketModel"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(e) {
            let n;
            n = t.call(this) || this;
            n.syncPromise = null;
            n.isFullySynced = false;
            n.isInitialized = false;
            n.chat = e;
            n.listenTo(o("WAWebSocketModel").Socket, "change:stream", function() {
                if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED) {
                    n.isFullySynced = false;
                } else if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED) {
                    n.delete();
                }
            });
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            if (this.isInitialized) {
                return (s || (s = n("Promise"))).resolve();
            }
            const msgs = this.chat.msgs;
            if (msgs == null) {
                return (s || (s = n("Promise"))).resolve();
            }
            if (msgs.length) {
                this.add(msgs.filter(c));
            }
            let t = (s || (s = n("Promise"))).resolve();
            if (this.chat.msgs.msgLoadState.noEarlierMsgs) {
                this.isFullySynced = true;
            } else {
                t = this.queryEvents({
                    recurse: false
                });
            }
            this.isInitialized = true;
            return t;
        };
        a_prototype.delete = function() {
            this.isFullySynced = false;
            this.isInitialized = false;
            t.prototype.delete.call(this);
        };
        a_prototype.queryEvents = function(a) {
            const t = this;
            const a_recurse = a.recurse;
            if (this.syncPromise) {
                return this.syncPromise;
            }
            if (this.isFullySynced) {
                return (s || (s = n("Promise"))).resolve();
            }
            let l;
            const u = this.last();
            if (u) {
                l = u.id;
            }
            const d = (this.syncPromise = o("WAWebMsgQueryUtils").getEventMsgs(this.chat.id, o("WAWebCollectionConstants").PAGE_SIZE, l).then((e)=>{
                if (!e || e.length < o("WAWebCollectionConstants").PAGE_SIZE) {
                    t.isFullySynced = true;
                }
                t.add(e.filter(c));
            }).then(()=>{
                t.syncPromise = null;
                if (t.isFullySynced) {
                    t.trigger(o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED);
                } else if (a_recurse === true) {
                    t.trigger("partial_sync");
                    return t.queryEvents({
                        recurse: true
                    });
                }
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, r("WAWebNoop"))).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Event msg sync error: "
                ])));
            })).finally(()=>{
                t.syncPromise = null;
            });
            return d;
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebMsgModel").Msg;
    u.comparator = function(e, t) {
        return t.t - e.t;
    };
    function c(e) {
        return o("WAWebFrontendMsgGetters").getAsEventCreation(e) != null;
    }
    l.default = u;
}, 98);