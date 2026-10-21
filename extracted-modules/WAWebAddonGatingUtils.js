__d("WAWebAddonGatingUtils", [
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebAddonPluginProcessor").hasAddonProcessor(e)) {
            return o("WAWebAddonPluginProcessor").getAddonProcessor(e).isEnabled();
        }
        return false;
    }
    function s(e) {
        const t = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(e);
        if (t == null || !o("WAWebAddonCrossWindowUtils").isInfraSupportedAddon(t)) {
            return false;
        }
        return o("WAWebAddonPluginProcessor").getAddonProcessor(t).isEnabled();
    }
    l.isUnifiedInfraEnabledForType = e;
    l.isUnifiedInfraEnabled = s;
}, 98);