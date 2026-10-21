__d("WAWebGroupParticipantCollection", [
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebChatCollection",
    "WAWebCollection",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebDebounce",
    "WAWebFrontendContactGetters",
    "WAWebGroupAgentProfileRouting",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupParticipantComparator",
    "WAWebGroupParticipantGetters",
    "WAWebGroupParticipantModel",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebSchemaGroupMetadata",
    "WAWebSendForNeededAddRequest",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n = {}) {
            let a;
            a = e.call(this, t, n) || this;
            a.$ParticipantCollection$p_2 = function(e, t, n) {
                a.$ParticipantCollection$p_3(e);
                if (n.add === true) {
                    a.$ParticipantCollection$p_4(e);
                }
            };
            a.$ParticipantCollection$p_4 = function(e) {
                if (a.iAmMember()) {
                    const maybeCommonGroupChatModel = o("WAWebChatCollection").ChatCollection.get(a.parent.id);
                    if (maybeCommonGroupChatModel && maybeCommonGroupChatModel?.tcToken == null) {
                        if (e != null) {
                            e.contact.set({
                                maybeCommonGroupChatModel
                            }, {
                                silent: true
                            });
                        }
                    }
                }
            };
            a.$ParticipantCollection$p_3 = function(e) {
                if (!(!e || !o("WAWebUserPrefsMeUser").isMeAccount(e.id))) {
                    const r = a.parent.id;
                    const i = r ? o("WAWebChatCollection").ChatCollection.get(r.toString())?.groupMetadata : null;
                    const l = i?.getParentGroupChat()?.groupMetadata;
                    if (l != null) {
                        if (a.iAmMember()) {
                            o("WAWebUpdateSubgroupsCommunityAction").subgroupUnjoinedToJoined(l, r);
                        } else {
                            o("WAWebUpdateSubgroupsCommunityAction").subgroupJoinedToUnjoined(l, r);
                        }
                    }
                }
            };
            a.$ParticipantCollection$p_1 = r("WAWebDebounce")(function() {
                return a.sort();
            }, 1000);
            a.sendForNeededAddRequest = function(participants, onFinish) {
                const l = a.getChat();
                const s = a.getGroupMetadata();
                const groupDesc = s?.desc ?? "";
                const subject = l?.formattedTitle ?? l?.name ?? "";
                o("WAWebSendForNeededAddRequest").sendForNeededAddRequest({
                    groupAddResponse: {
                        participants,
                        gid: o("WAWebWidFactory").asGroupWidOrThrow(a.parent.id)
                    },
                    groupDesc,
                    onFinish,
                    subject
                });
            };
            a.listenTo(a, "change:contact.name", a.$ParticipantCollection$p_1);
            a.listenTo(r("WAWebL10N"), "locale_change", a.$ParticipantCollection$p_1);
            a.listenTo(a, "add remove", a.$ParticipantCollection$p_2);
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            this.forEach((e)=>{
                e.delete();
            });
            this.stopListening();
            this.reset();
        };
        t_prototype.ensureSorted = function() {
            this.$ParticipantCollection$p_1.flush();
        };
        t_prototype.createSortComparator = function() {
            if (r("gkx")("7")) {
                return o("WAWebContactComparator").createContactSortComparator(function(e) {
                    return e.contact;
                });
            }
            return e.prototype.createSortComparator.call(this);
        };
        t_prototype.set = function(n, r) {
            let t = r || {};
            if (t.isParticipantCollectionAdd !== true) {
                t = babelHelpers.extends({}, t, {
                    remove: true
                });
            }
            const o = e.prototype.set.call(this, n, t);
            this.trigger("bulk_add", o);
            if (t.remove === true) {
                this.trigger("bulk_remove", o);
            }
            return o;
        };
        t_prototype.add = function(n, r) {
            let t = r || {};
            t = babelHelpers.extends({}, t, {
                isParticipantCollectionAdd: true
            });
            const o = e.prototype.add.call(this, n, t);
            this.trigger("bulk_add", o);
            return o;
        };
        t_prototype.remove = function(n, r) {
            const t = r || {};
            const a = e.prototype.remove.call(this, n, t);
            a.forEach((e)=>{
                if (e != null) {
                    o("WAWebGroupParticipantGetters").clearGroupParticipantGetterCacheFor(e);
                }
            });
            this.trigger("bulk_remove", a);
            return a;
        };
        t_prototype.reset = function() {
            this.forEach(o("WAWebGroupParticipantGetters").clearGroupParticipantGetterCacheFor);
            e.prototype.reset.call(this);
        };
        t_prototype.canAdd = function() {
            const e = this.getGroupMetadata();
            if (e?.isSuspendedOrTerminated() === true) {
                return false;
            }
            if (this.iAmAdmin()) {
                return true;
            }
            return this.iAmMember() && e?.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        };
        t_prototype.canTransferOwnership = function(t) {
            const e = this.getGroupMetadata();
            return !(e?.isSuspendedOrTerminated() === true || o("WAWebUserPrefsMeUser").isMeAccount(t.id) || !this.iAmSuperAdmin() || !t.isAdmin || o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) !== o("WAWebGroupType").GroupType.COMMUNITY);
        };
        t_prototype.canPromote = function(t) {
            const e = this.getGroupMetadata();
            return !(e?.isSuspendedOrTerminated() === true || !t || o("WAWebUserPrefsMeUser").isMeAccount(t.id) || !this.iAmAdmin() || t.isAdmin || e != null && o("WAWebGroupMetadataGetters").getIsCag(e) || s(t));
        };
        t_prototype.canDemote = function(t) {
            const e = this.getGroupMetadata();
            if (e?.isSuspendedOrTerminated() === true || !t || !this.iAmAdmin() || o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) !== o("WAWebGroupType").GroupType.COMMUNITY && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
                return false;
            }
            const t_isSuperAdmin = t.isSuperAdmin;
            if (t_isSuperAdmin) {
                if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) === o("WAWebGroupType").GroupType.COMMUNITY || o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                    return o("WAWebUserPrefsMeUser").isMeAccount(t.id);
                }
                return false;
            }
            return !(!t.isAdmin || o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP);
        };
        t_prototype.canRemove = function(t) {
            const e = this.getGroupMetadata();
            if (e?.isSuspendedOrTerminated() === true || !t || o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
                return false;
            }
            if (this.iAmAdmin()) {
                return !(e != null && o("WAWebGroupMetadataGetters").getIsCag(e) && (t.isAdmin || t.isSuperAdmin));
            }
            return this.iAmMember() && o("WAWebGroupAgentProfileRouting").isViewerOwnMuseGroupAgent(t.id, this.getChat());
        };
        t_prototype.canVerifyIdentity = function(t) {
            let n;
            if (!t || o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
                return false;
            }
            const r = this.getGroupMetadata();
            return !(r?.hasCapi === true && t.id.toString() === r?.owner?.toString() || o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && (n = t.id) != null && n.isBot());
        };
        t_prototype.userIsMember = function(t) {
            return this.isParticipantWidOrAlternateWidValid(t, function(e) {
                return e != null;
            });
        };
        t_prototype.userIsAdmin = function(t) {
            return this.isParticipantWidOrAlternateWidValid(t, function(e) {
                return e?.isAdmin === true;
            });
        };
        t_prototype.userIsSuperAdmin = function(t) {
            return this.isParticipantWidOrAlternateWidValid(t, function(e) {
                return e?.isSuperAdmin === true;
            });
        };
        t_prototype.isParticipantWidOrAlternateWidValid = function(t, n) {
            const e = this.get(t);
            if (n(e)) {
                return true;
            }
            const r = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
            const a = r ? this.get(r) : null;
            return n(a);
        };
        t_prototype.iAmMember = function() {
            const e = this.getMeParticipant();
            return !!e;
        };
        t_prototype.iAmRestrictedMember = function() {
            const e = this.getGroupMetadata();
            const t = e?.restrict === true;
            return t && !this.iAmAdmin();
        };
        t_prototype.iAmAdmin = function() {
            const e = this.getMeParticipant();
            return e?.isAdmin === true;
        };
        t_prototype.iAmSuperAdmin = function() {
            const e = this.getMeParticipant();
            return e?.isSuperAdmin === true;
        };
        t_prototype.getAdmins = function() {
            return this.where({
                isAdmin: true
            });
        };
        t_prototype.getSuperAdmin = function() {
            return this.findFirst(function(e) {
                return e.isSuperAdmin;
            });
        };
        t_prototype.getMyContacts = function() {
            return this.filter((e)=>{
                const t = o("WAWebContactCollection").ContactCollection.get(e.id);
                return t != null && o("WAWebFrontendContactGetters").getIsMyContact(t);
            });
        };
        t_prototype.getMeParticipant = function() {
            const e = this.get(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow());
            if (e) {
                return e;
            }
            const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (t != null) {
                return this.get(t);
            }
        };
        t_prototype.getChat = function() {
            const e = this.parent.id;
            return o("WAWebChatCollection").ChatCollection.get(e);
        };
        t_prototype.getGroupMetadata = function() {
            const e = this.parent.id;
            return r("WAWebGroupMetadataCollection").get(e);
        };
        return t;
    })(r("WAWebCollection"));
    e.model = r("WAWebGroupParticipantModel");
    e.comparator = r("WAWebGroupParticipantComparator");
    function s({ id }) {
        if (id == null) {
            return false;
        }
        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && id.isBot()) {
            return true;
        }
        return id.isFbidBot() && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    l.default = e;
}, 98);