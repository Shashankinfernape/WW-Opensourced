__d("useWAWebNewsletterChatsMigrationBanners", [
    "WAWebNewsletterChatsMigrationBanners",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function u() {
        return useSyncExternalStore(o("WAWebNewsletterChatsMigrationBanners").subscribeToNewsletterChatsMigrationBanners, d);
    }
    function c() {
        return useSyncExternalStore(o("WAWebNewsletterChatsMigrationBanners").subscribeToNewsletterChatsMigrationBanners, m);
    }
    function d() {
        return o("WAWebNewsletterChatsMigrationBanners").getNewsletterChatsMigrationBanners().chatList;
    }
    function m() {
        return o("WAWebNewsletterChatsMigrationBanners").getNewsletterChatsMigrationBanners().channelsTabCountdownDays;
    }
    l.useNewsletterChatsMigrationChatListBanner = u;
    l.useNewsletterChatsMigrationChannelsTabCountdownDays = c;
}, 98);