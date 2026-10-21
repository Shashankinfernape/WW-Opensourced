__d("WAWebCommonNewsletterStrings", [
    "fbt",
    "WAWebABProps",
    "WAWebCommonNewsletterEnums",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebUsernameGatingUtils",
    "WAXplatTrim",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        if (e < 10 ** 3) {
            return e;
        }
        return parseInt((e / 1000).toFixed(0), 10) * 1000;
    }
    function d(e, t = false) {
        if (e >= 10 ** 6) {
            return s._("_j{\"*\":\"{number} followers\",\"_1\":\"1 follower\"}", [
                s._plural(t ? e : c(e), "number", t ? r("WAWebL10N").n(e) : r("WAWebL10N").d(e))
            ]);
        }
        return s._("_j{\"*\":\"{number} followers\",\"_1\":\"1 follower\"}", [
            s._plural(t ? e : c(e), "number", t ? r("WAWebL10N").n(e) : r("WAWebL10N").d(e))
        ]);
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m(e) {
        switch(e){
            case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Recommended:
                return s._("Explore");
            case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Trending:
                return s._("Most active");
            case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Featured:
                return s._("Featured");
            case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.New:
                return s._("New");
            case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Popular:
                return s._("Popular");
            case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Country:
                return s._("Region");
        }
    }
    function p(e) {
        return s._("Search in {directory_category_name}", [
            s._param("directory_category_name", e.name)
        ]);
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _() {
        return s._("Find channels");
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f() {
        return s._("Create channel");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g() {
        return s._("Check your internet connection and try again.");
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h() {
        return s._("Delete channel");
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y({ isLoading, resultCount, searchText }) {
        if (isLoading) {
            if (resultCount > 0) {
                return s._("_j{\"*\":\"Loading, showing {number} channels on the screen.\",\"_1\":\"Loading, showing 1 channel on the screen.\"}", [
                    s._plural(resultCount, "number")
                ]);
            }
            return s._("Loading channels.");
        }
        if (resultCount === 0) {
            return s._("No channels found.");
        }
        if (o("WAXplatTrim").trim(searchText) !== "") {
            return s._("_j{\"*\":\"Search results: {number} channels found. Scroll to load more.\",\"_1\":\"Search results: 1 channel found. Scroll to load more.\"}", [
                s._plural(resultCount, "number")
            ]);
        }
        return s._("_j{\"*\":\"Find channels list, showing {number} channels on the screen. Scroll to load more.\",\"_1\":\"Find channels list, showing 1 channel on the screen. Scroll to load more.\"}", [
            s._plural(resultCount, "number")
        ]);
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C(e, t) {
        if (e === "create") {
            return s._("Create channel");
        }
        if (e === "directory") {
            return _();
        }
        if (t != null) {
            return s._("View update");
        }
        return s._("View channel");
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b() {
        return s._("Unfollow channel");
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v() {
        return s._("Copy link");
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S(e) {
        return s._("Start growing \"{channel_name}\"", [
            s._param("channel_name", e)
        ]);
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R(e) {
        return s._("You created this channel, \"{channel_name}\"", [
            s._param("channel_name", e)
        ]);
    }
    R.displayName = `${R.name} [from ${i.id}]`;
    function L(e) {
        return s._("_j{\"*\":\"{number} invited\",\"_1\":\"1 invited\"}", [
            s._plural(e, "number")
        ]);
    }
    L.displayName = `${L.name} [from ${i.id}]`;
    function E() {
        return s._("Revoke invite");
    }
    E.displayName = `${E.name} [from ${i.id}]`;
    function k(e) {
        return s._("{contact-name} is no longer an admin.", [
            s._param("contact-name", e)
        ]);
    }
    k.displayName = `${k.name} [from ${i.id}]`;
    function I(e) {
        switch(e){
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
                return r("WAWebFbtCommon")("Admin");
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
                return s._("Owner");
            default:
                return null;
        }
    }
    function T(e) {
        switch(e){
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
                return "newsletter-admin-marker";
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
                return "newsletter-owner-marker";
            default:
                return "";
        }
    }
    function DComponent() {
        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            return s._("Admins can send updates, change the channel profile and see your phone number or username. {=m2}.", [
                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2()}>{s._("Learn more")}</Component>)
            ]);
        }
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("Admins can send updates, change the channel profile and see your phone number. {=m2}.", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2()}>{s._("Learn more")}</Component>)
        ]);
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    function x() {
        return s._("Only contacts who have you in their address book will receive your invite.");
    }
    x.displayName = `${x.name} [from ${i.id}]`;
    function $() {
        return s._("Transfer ownership");
    }
    $.displayName = `${$.name} [from ${i.id}]`;
    function P() {
        return s._("Explore more");
    }
    P.displayName = `${P.name} [from ${i.id}]`;
    function N(e) {
        return s._("_j{\"*\":\"Last {number} days\",\"_1\":\"Last 1 day\"}", [
            s._plural(e, "number", e)
        ]);
    }
    N.displayName = `${N.name} [from ${i.id}]`;
    function M(e) {
        return s._("_j{\"*\":\"over last {number} days\",\"_1\":\"over last 1 day\"}", [
            s._plural(e, "number", e)
        ]);
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function w() {
        return {
            name: s._("Follows"),
            description: s._("The number of times WhatsApp accounts followed your channel in the last 30 days."),
            key: "follows"
        };
    }
    function A() {
        return {
            name: s._("Net follows"),
            description: s._("The number of follows minus the number of unfollows of your channel in the last 30 days, including unfollows resulting from WhatsApp account deletion."),
            key: "net-follows"
        };
    }
    function F() {
        return {
            name: s._("Unfollows"),
            description: s._("The number of times WhatsApp accounts unfollowed your channel in the last 30 days, including unfollows resulting from WhatsApp account deletion."),
            key: "unfollows"
        };
    }
    function O() {
        return {
            name: s._("Accounts reached"),
            description: s._("The number of WhatsApp accounts who have viewed any of your updates at least once. This does not include multiple views by the same accounts."),
            key: "accounts-reached"
        };
    }
    function B() {
        return {
            name: s._("Followers"),
            description: s._("The number of followers who have viewed any of your updates at least once."),
            key: "followers"
        };
    }
    function W() {
        return {
            name: s._("Non-followers"),
            description: s._("The number of non-followers who have viewed any of your updates at least once, by opening your channel through links, browsing or searching."),
            key: "non-followers"
        };
    }
    function q() {
        return {
            name: s._("Top regions"),
            description: s._("The regions with the highest concentration of reached WhatsApp accounts with a phone number registered in those regions."),
            key: "reach-top-regions"
        };
    }
    function U() {
        return {
            name: s._("Top regions"),
            description: s._("The regions with the highest concentration of your followers with a phone number registered in those regions."),
            key: "follower-top-regions"
        };
    }
    function V() {
        return {
            name: s._("Total followers"),
            description: s._("The total number of WhatsApp accounts following your channel."),
            key: "total-followers"
        };
    }
    function H() {
        const e = o("WAWebABProps").getABPropConfigValue("channels_producer_insights_min_followers");
        return s._("_j{\"*\":\"Insights are available after reaching {number} followers.\",\"_1\":\"Insights are available after reaching 1 follower.\"}", [
            s._plural(e, "number", e)
        ]);
    }
    H.displayName = `${H.name} [from ${i.id}]`;
    function G() {
        return s._("To protect consumer privacy, accounts reached below 100 are not displayed.");
    }
    G.displayName = `${G.name} [from ${i.id}]`;
    l.roundToThousands = c;
    l.getNewsletterFollowersText = d;
    l.getNewsletterDirectoryFilterLabel = m;
    l.getNewsletterCategorySearchPlaceholder = p;
    l.getFindNewslettersText = _;
    l.getCreateChannelText = f;
    l.getNoInternetConnectionText = g;
    l.getDeleteChannelText = h;
    l.getNewsletterResultsAnnouncementString = y;
    l.getNewsletterLinkActionLabel = C;
    l.getUnfollowNewsletterText = b;
    l.getCopyLinkText = v;
    l.startGrowingChannelNameText = S;
    l.getYouCreatedChannelWithNameText = R;
    l.getAdminInvitesTitleText = L;
    l.getRevokeButtonFullText = E;
    l.getSomeoneIsNoLongerAnAdminText = k;
    l.getNewsletterMembershipRoleTag = I;
    l.getNewsletterRoleMarker = T;
    l.adminPrivacyNux = DComponent;
    l.followerInviteDisclaimer = x;
    l.getNewsletterTransferOwnershipText = $;
    l.getNewsletterSimilarNewslettersTitle = P;
    l.getDaysCoveredText = N;
    l.getOverLastDaysText = M;
    l.getFollowsMetricInfo = w;
    l.getNetFollowsMetricInfo = A;
    l.getUnfollowsMetricInfo = F;
    l.getAccountsReachMetricInfo = O;
    l.getReachFollowersMetricInfo = B;
    l.getReachNonFollowersMetricInfo = W;
    l.getReachTopRegionsMetricInfo = q;
    l.getFollowerTopRegionsMetricInfo = U;
    l.getTotalFollowersMetricInfo = V;
    l.getMetricsAvailabilityDisclaimer = H;
    l.getReachMetricsThreshold = G;
}, 226);