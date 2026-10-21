__d("WAWebGroupMetadataModel", [
    "fbt",
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebBaseModel",
    "WAWebChatCollection",
    "WAWebCommunityGatingUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMembershipApprovalRequestCollection",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupParticipantCollection",
    "WAWebGroupPendingParticipantCollection",
    "WAWebGroupType",
    "WAWebInviteV4QueryGroupAction",
    "WAWebMiscGatingUtils",
    "WAWebOrgMemberContactName",
    "WAWebPastParticipantCollection",
    "WAWebSchemaGroupMetadata",
    "WAWebSubgroupSuggestionCollection",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = ((t)=>{
        function a(...a) {
            let e;
            e = t.call(this, ...a) || this;
            e.participants = o("WAWebBaseModel").collection(r("WAWebGroupParticipantCollection"));
            e.pendingParticipants = o("WAWebBaseModel").collection(r("WAWebGroupPendingParticipantCollection"));
            e.pastParticipants = o("WAWebBaseModel").collection(r("WAWebPastParticipantCollection"));
            e.membershipApprovalRequests = o("WAWebBaseModel").collection(r("WAWebGroupMembershipApprovalRequestCollection"));
            e.subgroupSuggestions = o("WAWebBaseModel").collection(r("WAWebSubgroupSuggestionCollection"));
            e.id = o("WAWebBaseModel").prop();
            e.creation = o("WAWebBaseModel").prop();
            e.owner = o("WAWebBaseModel").prop();
            e.subject = o("WAWebBaseModel").prop();
            e.subjectTime = o("WAWebBaseModel").prop();
            e.desc = o("WAWebBaseModel").prop();
            e.descId = o("WAWebBaseModel").prop();
            e.descTime = o("WAWebBaseModel").prop();
            e.descOwner = o("WAWebBaseModel").prop();
            e.restrict = o("WAWebBaseModel").prop();
            e.announce = o("WAWebBaseModel").prop();
            e.noFrequentlyForwarded = o("WAWebBaseModel").prop();
            e.ephemeralDuration = o("WAWebBaseModel").prop();
            e.disappearingModeTrigger = o("WAWebBaseModel").prop();
            e.disappearingModeInitiatedByMe = o("WAWebBaseModel").prop();
            e.afterReadDuration = o("WAWebBaseModel").prop();
            e.membershipApprovalMode = o("WAWebBaseModel").prop();
            e.memberAddMode = o("WAWebBaseModel").prop();
            e.memberLinkMode = o("WAWebBaseModel").prop();
            e.growthLockExpiration = o("WAWebBaseModel").prop();
            e.growthLockType = o("WAWebBaseModel").prop();
            e.reportToAdminMode = o("WAWebBaseModel").prop();
            e.size = o("WAWebBaseModel").prop();
            e.numSubgroups = o("WAWebBaseModel").prop();
            e.support = o("WAWebBaseModel").prop();
            e.suspended = o("WAWebBaseModel").prop(false);
            e.terminated = o("WAWebBaseModel").prop(false);
            e.suspendAppealStatus = o("WAWebBaseModel").prop(null);
            e.suspendAppealUpdateTime = o("WAWebBaseModel").prop(null);
            e.suspendAppealApprovedSeen = o("WAWebBaseModel").prop(false);
            e.uniqueShortNameMap = o("WAWebBaseModel").prop();
            e.isLidAddressingMode = o("WAWebBaseModel").prop();
            e.isParentGroup = o("WAWebBaseModel").prop();
            e.isParentGroupClosed = o("WAWebBaseModel").prop();
            e.parentGroup = o("WAWebBaseModel").prop();
            e.defaultSubgroup = o("WAWebBaseModel").prop();
            e.generalSubgroup = o("WAWebBaseModel").prop();
            e.hiddenSubgroup = o("WAWebBaseModel").prop();
            e.groupSafetyCheck = o("WAWebBaseModel").prop();
            e.groupAdder = o("WAWebBaseModel").prop();
            e.generalChatAutoAddDisabled = o("WAWebBaseModel").prop();
            e.lastCommunityPollTimestamp = o("WAWebBaseModel").prop();
            e.unjoinedSubgroups = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.joinedSubgroups = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.allowNonAdminSubGroupCreation = o("WAWebBaseModel").prop();
            e.lastActivityTimestamp = o("WAWebBaseModel").prop();
            e.lastSeenActivityTimestamp = o("WAWebBaseModel").prop();
            e.lastReportToAdminTimestamp = o("WAWebBaseModel").prop();
            e.hasCapi = o("WAWebBaseModel").prop();
            e.isOpenBotGroup = o("WAWebBaseModel").prop();
            e.isTeeBotGroup = o("WAWebBaseModel").prop();
            e.isInternal = o("WAWebBaseModel").session();
            e.memberShareGroupHistoryMode = o("WAWebBaseModel").prop();
            e.shouldDefaultGroupHistoryShareOn = o("WAWebBaseModel").prop();
            e.stale = o("WAWebBaseModel").session(true);
            e.deviceStale = o("WAWebBaseModel").session(false);
            e.trusted = o("WAWebBaseModel").session(true);
            e.inviteCode = o("WAWebBaseModel").session();
            e.groupInviteCodePromise = o("WAWebBaseModel").session();
            e.revokeGroupInvitePromise = o("WAWebBaseModel").session();
            e.participantQueryPromise = o("WAWebBaseModel").session();
            e.deviceQueryPromise = o("WAWebBaseModel").session();
            e.unjoinedSubgroupsQueryPromise = o("WAWebBaseModel").session();
            e.displayedDesc = o("WAWebBaseModel").session("");
            e.revokeGroupsV4AddInvitePromise = o("WAWebBaseModel").session();
            e.cachedDeviceCount = o("WAWebBaseModel").session();
            e.cachedDeviceSizeBucket = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.isNonAdminAndACAGJREnabled = function() {
            const t = !this.participants.iAmAdmin();
            const n = this.participants.iAmMember();
            const r = this.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
            const a = this.membershipApprovalMode ?? false;
            return t && n && r && a;
        };
        a_prototype.hasUniqueShortNameMention = function(t) {
            if (!this.uniqueShortNameMap || !t.shortName || !o("WAWebFrontendContactGetters").getIsMyContact(t)) {
                return false;
            }
            const n = this.$GroupMetadata$p_2(t.shortName);
            return this.uniqueShortNameMap.get(n) ?? false;
        };
        a_prototype.$GroupMetadata$p_2 = function(t) {
            return t.toLowerCase().trim();
        };
        a_prototype.isSuspendedOrTerminated = function() {
            return this.suspended || this.terminated;
        };
        a_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.getCollection().remove(this.id);
            this.participants.delete();
            o("WAWebGroupMetadataGetters").clearGroupMetadataGetterCacheFor(this);
            o("WAWebFrontendGroupMetadataGetters").clearFrontendGroupMetadataGetterCacheFor(this);
        };
        a_prototype.canSetSubject = function() {
            if (this.isSuspendedOrTerminated() || o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return false;
            }
            if (o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.COMMUNITY) {
                return this.participants.iAmAdmin();
            }
            if (this.participants.iAmMember()) {
                if (this.participants.iAmAdmin()) {
                    return !this.support;
                }
                if (this.restrict === true) {
                    return false;
                }
                return !this.support;
            }
            return false;
        };
        a_prototype.canSetDescription = function() {
            if (!this.participants.iAmMember() || !this.participants.iAmAdmin() && this.restrict || this.isSuspendedOrTerminated() || (o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.COMMUNITY || o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) && !this.participants.iAmAdmin()) {
                return false;
            }
            return !this.support;
        };
        a_prototype.canSetGroupProperty = function() {
            if (this.isSuspendedOrTerminated() || o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return false;
            }
            if (this.participants.iAmAdmin()) {
                return !this.support;
            }
            return false;
        };
        a_prototype.userCanSetEphemeralSetting = function(t) {
            const e = !this.support;
            if (this.isSuspendedOrTerminated()) {
                return false;
            }
            if (t.isUser()) {
                if (!this.participants.userIsMember(t)) {
                    return false;
                }
                if (this.participants.userIsAdmin(t)) {
                    return e;
                }
            }
            if (this.restrict || o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return false;
            }
            return e;
        };
        a_prototype.canSetEphemeralSetting = function() {
            const e = this;
            return o("WAWebUserPrefsMeUser").getMeDeviceWids().some((t)=>e.userCanSetEphemeralSetting(o("WAWebWidFactory").asUserWidOrThrow(t)));
        };
        a_prototype.initialize = function() {
            const e = this;
            o("WAWebBaseModel").BaseModel.prototype.initialize.call(this);
            const t = function() {
                e.isTrusted();
                e.$GroupMetadata$p_3();
            };
            this.listenTo(this.participants, "change:isAdmin", t);
            this.listenTo(this.participants, "change:isSuperAdmin", t);
            this.listenTo(this.participants, "change:contact.isMyContact", t);
            this.listenTo(this.participants, "sort", t);
            this.listenTo(this.participants, "remove", t);
            this.listenTo(this.participants, "reset", t);
            for (const n of [
                "bulk_add",
                "bulk_remove",
                "reset"
            ]){
                this.listenTo(this.participants, n, this.triggerParticipantsChange);
            }
            this.listenTo(this, "change:owner", this.isTrusted);
            this.listenTo(this, "change:isParentGroup", this.$GroupMetadata$p_4);
            this.listenTo(this, "change:desc", this.$GroupMetadata$p_3);
            this.listenTo(this, "change:parentGroup", this.$GroupMetadata$p_3);
            this.listenTo(this, "change:isParentGroup", this.$GroupMetadata$p_3);
            this.listenTo(this, "change:defaultSubgroup", this.$GroupMetadata$p_3);
            this.listenTo(this, "change:generalSubgroup", this.$GroupMetadata$p_3);
            this.$GroupMetadata$p_3();
            this.isTrusted();
            this.$GroupMetadata$p_1 = this.$GroupMetadata$p_5();
            this.listenTo(this.participants, "change:contact.shortName", this.$GroupMetadata$p_6);
            this.uniqueShortNameMap = new Map;
            if (o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.COMMUNITY) {
                this.$GroupMetadata$p_4();
            }
        };
        a_prototype.$GroupMetadata$p_6 = function() {
            this.$GroupMetadata$p_1?.debounce(a.UPDATE_NAME_MAP_DEBOUNCE_TIME);
        };
        a_prototype.triggerParticipantsChange = function() {
            if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
                this.$GroupMetadata$p_1?.debounce(a.UPDATE_NAME_MAP_DEBOUNCE_TIME);
            }
            this.trigger("change:participants");
        };
        a_prototype.$GroupMetadata$p_5 = function() {
            const e = this;
            return new (o("WAShiftTimer")).ShiftTimer(function() {
                if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
                    const t = new Map;
                    if (e.participants) {
                        e.participants.forEach((n)=>{
                            if (n.contact.shortName && o("WAWebFrontendContactGetters").getIsMyContact(n.contact)) {
                                const r = e.$GroupMetadata$p_2(n.contact.shortName);
                                if (t.has(r)) {
                                    t.set(r, false);
                                } else {
                                    t.set(r, true);
                                }
                            }
                        });
                    }
                    e.uniqueShortNameMap = t;
                }
            });
        };
        a_prototype.$GroupMetadata$p_7 = function() {
            return this.participants.some((e)=>e.isAdmin && o("WAWebFrontendContactGetters").getIsMyContact(e.contact));
        };
        a_prototype.$GroupMetadata$p_8 = function() {
            return o("WAWebOrgMemberContactName").getKnownOrgMember(this.owner) != null || o("WAWebOrgMemberContactName").getKnownOrgMember(this.groupAdder) != null || this.participants.some((e)=>e.isAdmin && o("WAWebOrgMemberContactName").getKnownOrgMember(e.id) != null);
        };
        a_prototype.isTrusted = function() {
            if (this.stale) {
                return this.trusted;
            }
            if (this.support) {
                return this.trusted = true;
            }
            if (this.owner) {
                if (o("WAWebUserPrefsMeUser").isMeAccount(this.owner)) {
                    return this.trusted = true;
                }
                const e = o("WAWebContactCollection").ContactCollection.get(this.owner);
                if (e != null && o("WAWebFrontendContactGetters").getIsMyContact(e)) {
                    return this.trusted = true;
                }
            }
            if (this.groupAdder != null) {
                const t = o("WAWebContactCollection").ContactCollection.get(this.groupAdder);
                if (t != null && o("WAWebFrontendContactGetters").getIsMyContact(t)) {
                    return this.trusted = true;
                }
            }
            return this.trusted = this.$GroupMetadata$p_7() || this.$GroupMetadata$p_8();
        };
        a_prototype.hasJoined = function() {
            const e = this.id;
            const joinedSubgroups = this.joinedSubgroups;
            const n = o("WAWebGroupMetadataGetters").getGroupType(this);
            if (n === o("WAWebGroupType").GroupType.COMMUNITY) {
                return joinedSubgroups.length > 0;
            }
            const r = o("WAWebChatCollection").ChatCollection.get(e);
            if (r) {
                return r.isReadOnly === false;
            }
            return false;
        };
        a_prototype.$GroupMetadata$p_3 = function() {
            if (o("WAWebGroupMetadataGetters").getGroupType(this) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !this.canSetDescription() && (this.desc == null || this.desc === "")) {
                this.displayedDesc = s._("Get the latest announcements from the admins of this community.").toString();
            } else {
                this.displayedDesc = this.desc;
            }
        };
        a_prototype.$GroupMetadata$p_4 = function() {
            o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroups(this);
            o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroups(this);
        };
        a_prototype.revokeGroupsV4AddInvite = function(r) {
            const t = this;
            if (this.revokeGroupsV4AddInvitePromise) {
                return this.revokeGroupsV4AddInvitePromise;
            }
            const a = o("WAWebWidToJid").widToGroupJid(this.id);
            const pendingParticipants = this.pendingParticipants;
            let l = (u || (u = n("Promise"))).resolve();
            l = o("WAWebInviteV4QueryGroupAction").revokeGroupInviteV4(r, a);
            return this.revokeGroupsV4AddInvitePromise = l.then((e)=>{
                if (e.status >= 200 && e.status < 300) {
                    pendingParticipants.remove(r);
                }
                return e.status;
            }).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[GroupMetadata] revokeGroupsV4AddInvite failed"
                ])));
                return 500;
            }).finally(()=>{
                t.revokeGroupsV4AddInvitePromise = null;
            });
        };
        a_prototype.queryGroupsV4PendingInvite = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                const t = yield o("WAWebInviteV4QueryGroupAction").getPendingParticipants(this.id);
                t.forEach((t)=>{
                    e.pendingParticipants.add({
                        id: o("WAWebWidFactory").createUserWidOrThrow(t)
                    });
                });
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getJoinedSubgroupsMetadata = function() {
            const e = this.getCollection();
            return r("compactMap")(this.joinedSubgroups, function(t) {
                return e.get(t.toString());
            });
        };
        a_prototype.getJoinedSubgroupsChat = function() {
            return r("compactMap")(this.joinedSubgroups, function(e) {
                return o("WAWebChatCollection").ChatCollection.get(e.toString());
            });
        };
        a_prototype.getUnjoinedSubgroupsMetadata = function() {
            return r("compactMap")(this.unjoinedSubgroups, function(e) {
                return r("WAWebUnjoinedSubgroupMetadataCollection").get(e.toString());
            });
        };
        a_prototype.getSubgroupsMetadata = function() {
            return [].concat(this.getJoinedSubgroupsMetadata(), this.getUnjoinedSubgroupsMetadata());
        };
        a_prototype.getSubgroupSuggestions = function() {
            const e = new Set;
            return this.subgroupSuggestions.filter(({ groupId, isExistingGroup })=>{
                if (e.has(groupId.toString())) {
                    return false;
                }
                return e.add(groupId.toString()) && !(isExistingGroup && !o("WAWebCommunityGatingUtils").memberSuggestedGroupsM3ReceiverEnabled());
            });
        };
        a_prototype.getParentGroupChat = function() {
            const parentGroup = this.parentGroup;
            if (parentGroup) {
                return o("WAWebChatCollection").ChatCollection.get(parentGroup);
            }
        };
        a_prototype.isParentGroupParticipant = function() {
            const parentGroup = this.parentGroup;
            if (!parentGroup) {
                return false;
            }
            const t = this.getCollection().get(parentGroup);
            return !!(t != null && t.joinedSubgroups.length);
        };
        a_prototype.getCollection = function() {
            return r("WAWebGroupMetadataCollection");
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "groupMetadata";
    c.idClass = r("WAWebWid");
    c.UPDATE_NAME_MAP_DEBOUNCE_TIME = 200;
    const d = o("WAWebBaseModel").defineModel(c);
    l.default = d;
}, 226);