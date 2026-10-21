__d("WAWebGetPrioritizedCommonGroupsAction", [
    "WAWebFindCommonGroupsContactAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumHighlightGroupType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const commonGroups = yield o("WAWebFindCommonGroupsContactAction").findCommonGroups(e);
            if (commonGroups != null) {
                const n = Array.from(commonGroups.getModelsArray());
                return {
                    commonGroups,
                    priority: u(n)
                };
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (e.length) {
            let group;
            let wamEnum = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.UNKNOWN;
            const r = (t)=>t.name != null && t.name !== "";
            let a = [];
            const i = [];
            const l = [];
            let s = 0;
            let u = [];
            let c = Infinity;
            let d = [];
            if (e.length > 1) {
                e.forEach((e)=>{
                    if (r(e)) {
                        if (o("WAWebUserPrefsMeUser").isMeAccount(e.groupMetadata?.owner)) {
                            i.push(e);
                            a = i;
                            wamEnum = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.CREATOR;
                            return;
                        } else if (i.length) {
                            return;
                        }
                        if (e.iAmAdmin()) {
                            l.push(e);
                            a = l;
                            wamEnum = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.ADMIN;
                            return;
                        } else if (l.length) {
                            return;
                        }
                        const g = e.groupMetadata?.participants.getMyContacts().length ?? 0;
                        if (g > 0 && g >= s) {
                            if (g > s) {
                                u = [
                                    e
                                ];
                            } else if (g === s) {
                                u.push(e);
                            }
                            s = g;
                            a = u;
                            wamEnum = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.SAVED_CONTACTS;
                            return;
                        } else if (u.length) {
                            return;
                        }
                        const h = e.groupMetadata?.participants.length ?? 0;
                        if (h > 0 && h <= c) {
                            if (h < c) {
                                d = [
                                    e
                                ];
                            } else if (h === c) {
                                d.push(e);
                            }
                            c = h;
                            a = d;
                            if (d.length === 1) {
                                wamEnum = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.PARTICIPANTS;
                            } else {
                                wamEnum = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.MORE;
                            }
                            return;
                        }
                    }
                });
                if (a.length) {
                    a.sort((e, t)=>{
                        if (e.t != null && t?.t != null) {
                            if (e.t >= t.t) {
                                return -1;
                            }
                            return 1;
                        }
                        return -1;
                    });
                }
                group = a[0];
            } else {
                const m = e[0];
                if (r(m)) {
                    group = m;
                    wamEnum = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.SINGLE;
                }
            }
            return {
                group,
                wamEnum
            };
        }
    }
    l.getPrioritizedCommonGroups = e;
    l.prioritizeGroups = u;
}, 98);