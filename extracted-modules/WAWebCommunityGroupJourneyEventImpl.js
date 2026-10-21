__d("WAWebCommunityGroupJourneyEventImpl", [
    "WALogger",
    "WAWebGetSharedSessionId",
    "WAWebGetThreadType",
    "WAWebGetUserRole",
    "WAWebGroupJourneyWamEvent",
    "WAWebWamEnumSurfaceType"
], function(t, n, r, o, a, i, l) {
    let e;
    class s {
        constructor({ action, chat, surface }){
            this.action = action;
            this.surface = surface;
            this.chat = chat;
            this.sessionId = o("WAWebGetSharedSessionId").getSharedSessionId();
        }
        static inviteModalSourceToSurface(n) {
            let t;
            e: {
                if (n === "community_home") {
                    t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME;
                    break e;
                }
                if (n === "community_nav") {
                    t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV;
                    break e;
                }
                if (n === "subgroup_switcher") {
                    t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV_SHEET;
                    break e;
                }
                if (n === "invite_link" || n === "group_mention") {
                    t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT;
                    break e;
                }
                if (n === "other") {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "No relevant communtiy journey log for this invite modal"
                    ])));
                    t = null;
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
            }
            return t;
        }
        shouldLogThreadType() {
            switch(this.surface){
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT:
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST:
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME:
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_TAB:
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV:
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV_SHEET:
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_SETTINGS:
                case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GROUP_INFO:
                    return true;
                default:
                    return false;
            }
        }
        getThreadType() {
            if (!this.shouldLogThreadType() || this.chat?.groupMetadata == null) {
                return null;
            }
            return o("WAWebGetThreadType").getThreadType(this.chat);
        }
        getGroupSize() {
            const n = this.chat?.groupMetadata;
            if (n == null) {
                return 0;
            }
            return n.participants.length ?? 0;
        }
        getUserRole() {
            return o("WAWebGetUserRole").getUserRole(this.chat);
        }
        commit() {
            const e = new (o("WAWebGroupJourneyWamEvent")).GroupJourneyWamEvent({
                actionType: this.action,
                appSessionId: this.sessionId,
                surface: this.surface,
                groupSize: this.getGroupSize()
            });
            const t = this.getThreadType();
            if (t != null) {
                e.threadType = t;
            }
            const n = this.getUserRole();
            if (n != null) {
                e.userRole = n;
            }
            e.commit();
        }
    }
    l.CommunityGroupJourneyEvent = s;
}, 98);