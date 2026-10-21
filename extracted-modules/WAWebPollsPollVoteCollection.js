__d("WAWebPollsPollVoteCollection", [
    "WAWebApiContact",
    "WAWebBaseCollection",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebPollsPollVoteModel",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getVoteFromSenderAddressingModeInsensitive = function(t) {
            const e = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
            return this.findFirst(function(n) {
                return n.sender.equals(t) || n.sender.equals(e);
            });
        };
        t_prototype.getUnreadCount = function() {
            return this.countWhere(function(e) {
                return e.selectedOptionLocalIds.length > 0 && !e.read && !o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
            });
        };
        t_prototype.getVoteCount = function() {
            return this.countWhere(function(e) {
                return e.selectedOptionLocalIds.length > 0;
            });
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebPollsPollVoteModel").PollVote;
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$PollVoteCollectionImpl$p_1 = new Map;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.add = function(n, r) {
            const e = t.prototype.add.call(this, n, r);
            const o = m(e.filter(Boolean));
            for (const [i, l] of o){
                const s = this.getForParentAddressingModeInsensitive([
                    i
                ]);
                const u = s[0];
                u.add(l);
            }
            return e;
        };
        n_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            const o = m(e.filter(Boolean));
            for (const [i, l] of o){
                this.getForParentAddressingModeInsensitive([
                    i
                ])[0].remove(l);
            }
            return e;
        };
        n_prototype.reset = function() {
            t.prototype.reset.call(this);
            for (const e of this.$PollVoteCollectionImpl$p_1.values()){
                e.reset();
            }
            this.$PollVoteCollectionImpl$p_1.clear();
        };
        n_prototype.getForParentAddressingModeInsensitive = function(t) {
            const e = this;
            return t.map((t)=>e.$PollVoteCollectionImpl$p_2(t));
        };
        n_prototype.$PollVoteCollectionImpl$p_2 = function(n) {
            const r = this;
            let a = this.$PollVoteCollectionImpl$p_1.get(n.toString()) ?? o("WAWebMaybe").ifSome(o("WAWebLidMigrationUtils").getAlternateMsgKey(n), function(e) {
                return r.$PollVoteCollectionImpl$p_1.get(e.toString());
            });
            if (a == null) {
                a = new e;
                a.add(this.filter((e)=>e.parentMsgKey.equals(n)));
                this.$PollVoteCollectionImpl$p_1.set(n.toString(), a);
            }
            return a;
        };
        n_prototype.getByMsgKey = function(t) {
            return this.get(u(t));
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebPollsPollVoteModel").PollVote;
    function u(e) {
        return `!!${e.toString()}`;
    }
    function c(e) {
        return new (o("WAWebPollsPollVoteModel")).PollVote(babelHelpers.extends({
            id: u(e.msgKey)
        }, e));
    }
    const d = new s;
    function m(e) {
        const t = new Map;
        if (e) {
            e.forEach((e)=>{
                const e_parentMsgKey = e.parentMsgKey;
                if (!t.has(e_parentMsgKey)) {
                    t.set(e_parentMsgKey, []);
                }
                r("nullthrows")(t.get(e_parentMsgKey)).push(e);
            });
        }
        return t;
    }
    l.GroupedPollVoteCollection = e;
    l.createPollVoteModel = c;
    l.PollVoteCollection = d;
}, 98);