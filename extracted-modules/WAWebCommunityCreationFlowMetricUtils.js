__d("WAWebCommunityCreationFlowMetricUtils", [
    "WAWebCommunityCreationWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumCommunityCreationActionTakenType",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumCommunityCreationEntrypointType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        switch(e){
            case "banner":
                return o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_BANNER;
            case "channel":
                return o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_CHANNEL;
            case "psa":
                return o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_PSA;
            case "chat":
                return o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_CHAT;
            default:
                return o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK;
        }
    }
    class s {
        $3({ actionCount, actionTaken, communityId, currentScreen }) {
            const i = new (o("WAWebCommunityCreationWamEvent")).CommunityCreationWamEvent({
                communityCreationSessionId: this.$1,
                communityCreationActionTaken: actionTaken,
                communityCreationCurrentScreen: currentScreen,
                communityCreationActionCount: actionCount,
                communityId
            });
            if (this.$2 != null) {
                i.communityCreationEntrypoint = this.$2;
            }
            i.commit();
        }
        startSession(t) {
            this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
            this.$2 = t;
        }
        $4() {
            this.startSession();
        }
        enter(t) {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.ENTER,
                currentScreen: t
            });
        }
        getStarted() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.GET_STARTED,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX
            });
        }
        dismiss() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.DISMISS,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX
            });
        }
        next() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.NEXT,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
            });
        }
        createGroup(t, n) {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_GROUP,
                actionCount: t,
                currentScreen: n
            });
        }
        linkGroup(t, n) {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.LINK_GROUP,
                actionCount: t,
                currentScreen: n
            });
        }
        createCommunity(t) {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY,
                currentScreen: t
            });
        }
        exit() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.EXIT,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
            });
            this.$4();
        }
        unlinkGroup() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.UNLINK_GROUP,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
            });
        }
        createCommunitySuccess(t, communityId) {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY_SUCCESS,
                currentScreen: t,
                communityId
            });
        }
        createCommunityFail(t) {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY_FAIL,
                currentScreen: t
            });
        }
        helpIconClick() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.HELP_ICON_CLICK,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
            });
        }
        linkGroupConfirmationOk() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.LINK_GROUP_CONFIRMATION_OK,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.LINK_GROUP_CONFIRMATION
            });
        }
        linkGroupConfirmationCancel() {
            this.$3({
                actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType").COMMUNITY_CREATION_ACTION_TAKEN_TYPE.LINK_GROUP_CONFIRMATION_CANCEL,
                currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.LINK_GROUP_CONFIRMATION
            });
        }
    }
    const u = new s;
    l.getDeeplinkEntrypointType = e;
    l.UiCommunityCreationAction = u;
}, 98);