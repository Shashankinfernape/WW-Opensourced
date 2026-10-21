__d("useWAWebIsChannelsInChatListEnabled", [
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterGatingUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function u(e) {
        o("WAWebNewsletterChatsMigrationCapability").newsletterChatsMigrationEmitter.on("change", e);
        return function() {
            o("WAWebNewsletterChatsMigrationCapability").newsletterChatsMigrationEmitter.off("change", e);
        };
    }
    function useC() {
        return useSyncExternalStore(u, o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled);
    }
    l.default = useC;
}, 98);