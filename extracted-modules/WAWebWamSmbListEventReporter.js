__d("WAWebWamSmbListEventReporter", [
    "WAWebGetSharedSessionId",
    "WAWebLabelCollection",
    "WAWebListsLogging",
    "WAWebMobilePlatforms",
    "WAWebSmbListEventWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumListType"
], function(t, n, r, o, a, i, l) {
    const s = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? o("WAWebGetSharedSessionId").getSharedSessionId();
    function u(e) {
        if (o("WAWebMobilePlatforms").isSMB()) {
            e.appSessionId = s;
            const t = new (o("WAWebSmbListEventWamEvent")).SmbListEventWamEvent(e);
            t.commit();
        }
    }
    function c({ bulkLabeling, currentListState, customListTitle, entryPointConversionSource, extraAttributes, labelOperation, labelTarget, lastMessageDirection, listId, listIndex, listsApplied, listsRemoved, messageDepth, predefinedId, smbListFeatureName, smbListSurface, threadIdHmac, updateEntryPoint, userActionTarget }) {
        const S = {
            labelOperation
        };
        if (updateEntryPoint != null) {
            S.updateEntryPoint = updateEntryPoint;
        }
        if (labelTarget != null) {
            S.labelTarget = labelTarget;
        }
        if (threadIdHmac != null) {
            S.threadIdHmac = threadIdHmac;
        }
        if (listIndex != null) {
            S.listIndex = listIndex;
        }
        if (currentListState != null) {
            S.currentListState = currentListState;
        }
        if (extraAttributes != null) {
            S.extraAttributes = extraAttributes;
        }
        if (bulkLabeling != null) {
            S.bulkLabeling = bulkLabeling;
        }
        if (customListTitle != null) {
            S.customListTitle = customListTitle;
        }
        if (listsApplied != null) {
            S.listsApplied = listsApplied;
        }
        if (listsRemoved != null) {
            S.listsRemoved = listsRemoved;
        }
        if (entryPointConversionSource != null) {
            S.entryPointConversionSource = entryPointConversionSource;
        }
        if (messageDepth != null) {
            S.messageDepth = messageDepth;
        }
        if (lastMessageDirection != null) {
            S.lastMessageDirection = lastMessageDirection;
        }
        if (smbListFeatureName != null) {
            S.smbListFeatureName = smbListFeatureName;
        }
        if (smbListSurface != null) {
            S.smbListSurface = smbListSurface;
        }
        if (userActionTarget != null) {
            S.userActionTarget = userActionTarget;
        }
        if (listId != null) {
            S.listId = listId;
            const R = o("WAWebLabelCollection").LabelCollection.get(String(listId));
            if (R != null) {
                const L = o("WAWebListsLogging").getListType(R.type);
                if (L != null) {
                    S.listType = L;
                }
                if (R.predefinedId != null) {
                    S.predefinedId = R.predefinedId;
                }
                if (listIndex == null) {
                    const E = o("WAWebLabelCollection").LabelCollection.getActiveLists();
                    const k = E.findIndex((e)=>e.id === String(listId));
                    if (k >= 0) {
                        S.listIndex = k;
                    }
                }
            }
        }
        if (predefinedId != null && S.predefinedId == null) {
            S.predefinedId = predefinedId;
        }
        if (S.predefinedId != null && S.predefinedId > 0) {
            S.listType = o("WAWebWamEnumListType").LIST_TYPE.PREDEFINED;
        }
        u(S);
    }
    l.logSmbListEvent = c;
}, 98);