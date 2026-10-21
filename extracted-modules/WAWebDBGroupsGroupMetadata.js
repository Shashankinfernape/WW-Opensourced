__d("WAWebDBGroupsGroupMetadata", [
    "Promise",
    "WABatcher",
    "WAWebModelStorageUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupInfos }) {
            let r = [];
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "group-metadata"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const a = yield n.bulkGet(groupInfos.map((e)=>e.id.toString()));
                    r = groupInfos.map((e, t)=>{
                        const y = a[t];
                        let C = {
                            subject: e.subject,
                            subjectTime: e.subjectTime || 0
                        };
                        let b = {
                            announce: e.announce,
                            a_v_id: e.a_v_id || 0
                        };
                        let v = {
                            desc: e.desc,
                            descId: e.descId,
                            descOwner: e.descOwner?.toString(),
                            descTime: e.descTime || 0
                        };
                        if (y) {
                            const subjectTime = y.subjectTime || 0;
                            const a_v_id = y.a_v_id || 0;
                            const descTime = y.descTime || 0;
                            if (subjectTime > C.subjectTime) {
                                C = {
                                    subject: y.subject,
                                    subjectTime
                                };
                            }
                            if (a_v_id > b.a_v_id) {
                                b = {
                                    announce: y.announce,
                                    a_v_id
                                };
                            }
                            if (descTime > v.descTime) {
                                v = {
                                    desc: y.desc,
                                    descId: y.descId,
                                    descOwner: y.descOwner,
                                    descTime
                                };
                            }
                        }
                        const E = {
                            ephemeralDuration: e.ephemeralDuration || 0,
                            disappearingModeTrigger: e.disappearingModeTrigger,
                            disappearingModeInitiatedByMe: e.disappearingModeInitiatedByMe,
                            afterReadDuration: e.afterReadDuration
                        };
                        const k = babelHelpers.extends({
                            id: e.id.toString(),
                            creation: e.creation,
                            owner: e.owner?.toString(),
                            restrict: e.restrict,
                            noFrequentlyForwarded: e.noFrequentlyForwarded,
                            membershipApprovalMode: e.membershipApprovalMode,
                            memberAddMode: e.memberAddMode,
                            growthLockExpiration: e.growthLockExpiration,
                            growthLockType: e.growthLockType,
                            size: e.size || 0,
                            support: e.support ?? false,
                            suspended: e.suspended ?? false,
                            suspendAppealStatus: e.suspendAppealStatus ?? null,
                            suspendAppealUpdateTime: e.suspendAppealUpdateTime ?? null,
                            terminated: e.terminated ?? false,
                            parentGroup: e.parentGroup?.toString(),
                            isParentGroup: e.isParentGroup,
                            isParentGroupClosed: e.isParentGroupClosed,
                            defaultSubgroup: e.defaultSubgroup,
                            generalSubgroup: e.generalSubgroup,
                            lastActivityTimestamp: y?.lastActivityTimestamp ?? 0,
                            lastSeenActivityTimestamp: y?.lastSeenActivityTimestamp ?? 0,
                            isLidAddressingMode: e.isLidAddressingMode,
                            reportToAdminMode: e.reportToAdminMode ?? false,
                            lastReportToAdminTimestamp: y?.lastReportToAdminTimestamp,
                            allowNonAdminSubGroupCreation: e.allowNonAdminSubGroupCreation,
                            generalChatAutoAddDisabled: e.generalChatAutoAddDisabled,
                            hasCapi: e.hasCapi === true,
                            hiddenSubgroup: e.hiddenSubgroup,
                            groupSafetyCheck: e.groupSafetyCheck,
                            lastCommunityPollTimestamp: y?.lastCommunityPollTimestamp,
                            isOpenBotGroup: e?.isOpenBotGroup ?? y?.isOpenBotGroup,
                            isTeeBotGroup: e?.isTeeBotGroup ?? y?.isTeeBotGroup
                        }, C, v, b, E);
                        if (e.hasIncompleteParticipantInformation != null && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            k.hasIncompleteParticipantInformation = e.hasIncompleteParticipantInformation;
                        }
                        if (e.memberLinkMode !== undefined) {
                            k.memberLinkMode = e.memberLinkMode;
                        }
                        if (e.memberShareGroupHistoryMode !== undefined) {
                            k.memberShareGroupHistoryMode = e.memberShareGroupHistoryMode;
                        }
                        if (e.groupAdder != null) {
                            return babelHelpers.extends({}, k, {
                                groupAdder: e.groupAdder?.toString()
                            });
                        }
                        return k;
                    });
                    return n.bulkCreateOrMerge(r);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupWid }) {
            const f = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(String(groupWid));
            if (f) {
                return {
                    id: groupWid,
                    owner: f.owner == null ? null : o("WAWebWidFactory").createWid(f.owner),
                    creation: f.creation,
                    desc: f.desc ?? undefined,
                    descId: f.descId ?? undefined,
                    descOwner: f.descOwner == null ? null : o("WAWebWidFactory").createWid(f.descOwner),
                    descTime: f.descTime ?? undefined,
                    restrict: f.restrict || false,
                    announce: f.announce || false,
                    noFrequentlyForwarded: f.noFrequentlyForwarded || false,
                    ephemeralDuration: f.ephemeralDuration || 0,
                    membershipApprovalMode: f.membershipApprovalMode ?? false,
                    memberAddMode: f.memberAddMode,
                    memberLinkMode: f.memberLinkMode,
                    subject: f.subject,
                    support: f.support === true,
                    lastActivityTimestamp: f.lastActivityTimestamp ?? 0,
                    lastSeenActivityTimestamp: f.lastSeenActivityTimestamp ?? 0,
                    lastReportToAdminTimestamp: f.lastReportToAdminTimestamp ?? null,
                    isLidAddressingMode: f.isLidAddressingMode,
                    allowNonAdminSubGroupCreation: f.allowNonAdminSubGroupCreation ?? false,
                    generalChatAutoAddDisabled: f.generalChatAutoAddDisabled ?? false,
                    hasCapi: f.hasCapi === true,
                    lastCommunityPollTimestamp: f.lastCommunityPollTimestamp ?? 0,
                    isOpenBotGroup: f.isOpenBotGroup ?? false,
                    isTeeBotGroup: f.isTeeBotGroup ?? false,
                    shouldDefaultGroupHistoryShareOn: f.shouldDefaultGroupHistoryShareOn
                };
            }
            return null;
        });
        return d.apply(this, arguments);
    }
    const m = (()=>{
        const e = 3000;
        return o("WABatcher").batch({
            delayMs: e
        }, (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = n();
                yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkCreateOrMerge(t);
                return e.map((e)=>{});
                function n() {
                    return Array.from(e.reduce((acc, item)=>{
                        acc.set(item.id, babelHelpers.extends({}, acc.get(item.id) ?? {}, item));
                        return acc;
                    }, new Map).values());
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    })();
    function p(e, t, n = false) {
        if (n) {
            return m(babelHelpers.extends({}, t, {
                id: e.toString()
            }));
        }
        return o("WAWebSchemaGroupMetadata").getGroupMetadataTable().createOrMerge(e.toString(), babelHelpers.extends({
            id: e.toString()
        }, t));
    }
    function _(e) {
        return o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(e.toString());
    }
    function f(t) {
        if (t.length === 0) {
            return (e || (e = n("Promise"))).resolve([]);
        }
        return o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkGet(t.map((e)=>{
            if (e == null) {
                return "";
            }
            return e.toString();
        }));
    }
    l.updateGroupMetadataTable = s;
    l.getGroupMetadataUNSAFE = c;
    l.persistGroupMetadata = p;
    l.getGroupMetadata = _;
    l.bulkGetGroupMetadata = f;
}, 98);