__d("WAWebCommunityActivityCollection", [
    "fbt",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebCommunityActivityModel",
    "WAWebDBMessageStoreUtils",
    "WAWebGroupType",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.listenTo(r("WAWebUnjoinedSubgroupMetadataCollection"), "add remove change:subject", t.$CommunityActivityCollection$p_1);
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.$CommunityActivityCollection$p_1 = function(t) {
            const e = this.findFirst(function(e) {
                return e.subgroupId?.equals(t.id);
            });
            if (e != null) {
                e.subgroupName = t.subject;
            }
        };
        t_prototype.getActivityFor = function(t) {
            return this.filter((e)=>e.communityId.equals(t));
        };
        t_prototype.shouldShowTabBadge = function() {
            if (this.length === 0) {
                return false;
            }
            const t = o("WAWebUserPrefsMultiDevice").getCommunityTabLastSeenTimestamp() ?? 0;
            return this.some((e)=>e.timestamp > t);
        };
        t_prototype.syncActivityFor = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = this;
                const a = o("WAWebUserPrefsMultiDevice").getCommunityTabLastSeenTimestamp() ?? 0;
                const i = yield o("WAWebDBMessageStoreUtils").getMessagesBefore(e.toString(), function(e) {
                    return e.t < o("WATimeUtils").unixTime() - o("WAWebCommunityActivityModel").EXPIRATION_TIME_FOR_SUB_GROUP_LINK;
                });
                if (i.length !== 0) {
                    i.forEach((t)=>{
                        if (t.author != null) {
                            const i = o("WAWebWidFactory").createWidFromWidLike(t.author);
                            if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
                                const timestamp = t.t;
                                if (t.subtype === o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK) {
                                    const subgroupId = o("WAWebWidFactory").createWidFromWidLike((t.templateParams ?? [])[0]);
                                    let subgroupName = o("WAWebChatCollection").ChatCollection.get(subgroupId)?.formattedTitle;
                                    if (subgroupName == null) {
                                        const f = r("WAWebUnjoinedSubgroupMetadataCollection").get(subgroupId.toString())?.subject;
                                        const g = t.templateParams?.[1];
                                        if (f != null) {
                                            subgroupName = f;
                                        } else if (typeof g === "string") {
                                            subgroupName = g;
                                        } else {
                                            subgroupName = s._("unknown subject").toString();
                                        }
                                    }
                                    const h = new (o("WAWebCommunityActivityModel")).CommunityActivity({
                                        id: t.id,
                                        type: o("WAWebCommunityActivityModel").ActivityTypeType.SUB_GROUP_LINK,
                                        communityId: e,
                                        timestamp,
                                        subgroupName,
                                        subgroupId
                                    });
                                    n.addDeduppedSubgroupLink([
                                        h
                                    ]);
                                } else {
                                    if (t.subtype === o("WAWebGroupType").GROUP_ACTIONS.ADD && timestamp > a) {
                                        n.add({
                                            id: e.toString(),
                                            communityId: e,
                                            timestamp,
                                            type: o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY
                                        });
                                    }
                                }
                            }
                        }
                    });
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.addDeduppedSubgroupLink = function(t) {
            const e = this;
            const n = t.filter((t)=>!e.some((e)=>e.subgroupId?.equals(t.subgroupId)));
            return this.add(n);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebCommunityActivityModel").CommunityActivity;
    e.comparator = function(e, t) {
        return e.timestamp - t.timestamp;
    };
    const u = new e;
    l.default = u;
}, 226);