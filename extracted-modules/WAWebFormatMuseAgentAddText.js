__d("WAWebFormatMuseAgentAddText", [
    "fbt",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebGroupAgentAddAttribution",
    "WAWebLidMigrationUtils",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ agentClickable, attribution, author, authorClickable, recipients }) {
        const u = recipients.length === 1 ? recipients[0] : null;
        if (u == null || !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(u) || !o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()) {
            return null;
        }
        const c = o("WAWebBotProfileCollection").BotProfileCollection.get(u);
        if (!o("WAWebBotProduct").isMuseAgentProduct(u, o("WAWebBotProduct").botProductFromServerValue(c?.product))) {
            return null;
        }
        if (author == null) {
            return s._("{agent_name}, a Muse agent, was added", [
                s._param("agent_name", agentClickable)
            ]);
        }
        const d = attribution === o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution.OWNER || c?.creatorLid != null && o("WAWebLidMigrationUtils").toUserLid(author)?.user === c.creatorLid;
        if (o("WAWebSystemMessagesUtils").isMe(author)) {
            if (d) {
                return s._("You added {agent_name}, your Muse agent", [
                    s._param("agent_name", agentClickable)
                ]);
            }
            return s._("You added {agent_name}, a Muse agent", [
                s._param("agent_name", agentClickable)
            ]);
        }
        if (authorClickable == null) {
            return null;
        }
        if (d) {
            return s._("{owner_name} added {agent_name}, their Muse agent", [
                s._param("owner_name", authorClickable),
                s._param("agent_name", agentClickable)
            ]);
        }
        return s._("{user_name} added {agent_name}, a Muse agent", [
            s._param("user_name", authorClickable),
            s._param("agent_name", agentClickable)
        ]);
    }
    l.formatMuseAgentAddText = e;
}, 226);