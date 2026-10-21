__d("WAWebLinkJoinedMembersUtils", [
    "WATimeUtils",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebExistingGroupPermissionsDrawerLoadable",
    "WAWebGetSharedSessionId",
    "WAWebGroupBulkRemovalWamEvent",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupLinkJoinUtils",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebWamEnumGroupBulkRemovalEntryPoint",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(groupBulkRemovalAction, t, removedMembersCount) {
        new (o("WAWebGroupBulkRemovalWamEvent")).GroupBulkRemovalWamEvent({
            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
            bulkRemovalGroupId: o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(t),
            groupBulkRemovalAction,
            groupBulkRemovalEntryPoint: o("WAWebWamEnumGroupBulkRemovalEntryPoint").GROUP_BULK_REMOVAL_ENTRY_POINT.FLOOD_SYSTEM_MESSAGE,
            removedMembersCount
        }).commit();
    }
    function c(e) {
        return {
            startTime: e - o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_WINDOW_SECS,
            endTime: e + o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_COOLDOWN_SECS
        };
    }
    function d(e, t) {
        const n = r("WAWebL10N").getFullLocale().replace("_", "-");
        const o = new Date(e * 1000);
        const a = new Date(t * 1000);
        const i = o.getFullYear() === a.getFullYear() && o.getMonth() === a.getMonth() && o.getDate() === a.getDate();
        const l = new Intl.DateTimeFormat(n, {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
        const s = new Intl.DateTimeFormat(n, {
            hour: "numeric",
            minute: "2-digit"
        });
        if (i) {
            const u = l.format(o);
            const c = s.format(a);
            return `
${u} - ${c}`;
        }
        const d = l.format(o);
        const m = l.format(a);
        return `
${d} - ${m}`;
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = n != null ? o("WATimeUtils").castToUnixTime(n - o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_WINDOW_SECS) : undefined;
            const a = n != null ? o("WATimeUtils").castToUnixTime(n + o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_COOLDOWN_SECS) : undefined;
            const i = yield o("WAWebGroupLinkJoinUtils").getParticipantsJoinedViaLink(e.id.toString(), r, a);
            const t_participants = t.participants;
            return i.filter((e)=>{
                const t = o("WAWebWidFactory").createWid(e);
                return t_participants.get(t) != null;
            });
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        o("WAWebModalManager").closeModalManager();
        const Component = o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "existing_group_permissions",
            chat: e,
            groupMetadata: t
        } : <Component chat={e} groupMetadata={t} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
            transition: "slide-left",
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    l.logGroupBulkRemovalWamEvent = u;
    l.calculateTimeRange = c;
    l.formatJoinTimeRange = d;
    l.fetchRemainingParticipants = m;
    l.openGroupPermissionsDrawer = _;
}, 98);