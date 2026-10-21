__d("WAWebListsLogging", [
    "WAWebChatGetters",
    "WAWebLabelCollection",
    "WAWebListUpdateUserJourneyWamEvent",
    "WAWebListUpdateWamEvent",
    "WAWebSchemaLabel",
    "WAWebWamEnumListType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e != null) {
            switch(e){
                case o("WAWebSchemaLabel").ListType.NONE:
                    return o("WAWebWamEnumListType").LIST_TYPE.NONE;
                case o("WAWebSchemaLabel").ListType.UNREAD:
                    return o("WAWebWamEnumListType").LIST_TYPE.UNREAD;
                case o("WAWebSchemaLabel").ListType.GROUPS:
                    return o("WAWebWamEnumListType").LIST_TYPE.GROUP;
                case o("WAWebSchemaLabel").ListType.FAVORITES:
                    return o("WAWebWamEnumListType").LIST_TYPE.FAVORITE;
                case o("WAWebSchemaLabel").ListType.PREDEFINED:
                    return o("WAWebWamEnumListType").LIST_TYPE.PREDEFINED;
                case o("WAWebSchemaLabel").ListType.CUSTOM:
                    return o("WAWebWamEnumListType").LIST_TYPE.CUSTOM;
                case o("WAWebSchemaLabel").ListType.COMMUNITY:
                    return o("WAWebWamEnumListType").LIST_TYPE.COMMUNITY;
                case o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED:
                    return o("WAWebWamEnumListType").LIST_TYPE.SERVER_ASSIGNED;
                case o("WAWebSchemaLabel").ListType.DRAFTED:
                    return o("WAWebWamEnumListType").LIST_TYPE.DRAFTS;
                case o("WAWebSchemaLabel").ListType.AI_HANDOFF:
                    return o("WAWebWamEnumListType").LIST_TYPE.BUSINESS_AI;
                case o("WAWebSchemaLabel").ListType.AI_RESPONDING:
                case o("WAWebSchemaLabel").ListType.CHANNELS:
                case o("WAWebSchemaLabel").ListType.LEAD:
                case o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES:
                    return null;
            }
        }
    }
    function s({ entryPoint, listAction, listId, userJorneyAction }) {
        const l = {
            listAction,
            listUpdateUserJourneyAction: userJorneyAction,
            updateEntryPoint: entryPoint
        };
        if (listId != null) {
            const s = o("WAWebLabelCollection").LabelCollection.get(listId);
            if (s != null) {
                const u = parseInt(s.id, 10);
                if (!isNaN(u)) {
                    l.listId = u;
                }
                const c = e(s.type);
                if (c != null) {
                    l.listType = c;
                }
                if (s.predefinedId != null) {
                    l.predefinedId = s.predefinedId;
                }
            }
        }
        const d = new (o("WAWebListUpdateUserJourneyWamEvent")).ListUpdateUserJourneyWamEvent(l);
        d.commit();
    }
    function u({ addedChats, chatsBeforeUpdate, entryPoint, listAction, listId, removedChats }) {
        let u = {
            listId,
            listAction,
            updateEntryPoint: entryPoint
        };
        if (chatsBeforeUpdate != null && (addedChats != null || removedChats != null)) {
            let groupsAdded = 0;
            let groupsAfterUpdate = 0;
            let usersAdded = 0;
            let usersAfterUpdate = 0;
            chatsBeforeUpdate?.forEach(function(e) {
                if (o("WAWebChatGetters").getIsGroup(e)) {
                    groupsAfterUpdate++;
                } else {
                    usersAfterUpdate++;
                }
            });
            addedChats?.forEach(function(e) {
                if (o("WAWebChatGetters").getIsGroup(e)) {
                    groupsAdded++;
                } else {
                    usersAdded++;
                }
            });
            removedChats?.forEach(function(e) {
                if (o("WAWebChatGetters").getIsGroup(e)) {
                    groupsAdded--;
                } else {
                    usersAdded--;
                }
            });
            groupsAfterUpdate = Math.max(0, groupsAfterUpdate + groupsAdded);
            usersAfterUpdate = Math.max(0, usersAfterUpdate + usersAdded);
            u = babelHelpers.extends({}, u, {
                groupsAdded,
                groupsAfterUpdate,
                usersAdded,
                usersAfterUpdate
            });
        }
        const _ = o("WAWebLabelCollection").LabelCollection.get(`${listId}`);
        if (_ != null) {
            const f = e(_.type);
            if (f != null) {
                u.listType = f;
            }
            if (_.predefinedId != null) {
                u.predefinedId = _.predefinedId;
            }
        }
        const g = new (o("WAWebListUpdateWamEvent")).ListUpdateWamEvent(u);
        g.commit();
    }
    l.getListType = e;
    l.logListUpdateUserJorney = s;
    l.logListUpdate = u;
}, 98);