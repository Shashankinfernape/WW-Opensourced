__d("WAWebStatusPSAUtils", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (t.length === 0) {
            return -1;
        }
        let n = 0;
        let campaignId_1 = t[0].campaignId;
        for(let o = 1; o < t.length; o++){
            const a = t[o];
            const { campaignId, id } = a;
            if (campaignId_1 !== campaignId) {
                campaignId_1 = campaignId;
                n = 0;
            } else {
                n++;
            }
            if (id.toString() === e.toString()) {
                return n;
            }
        }
        return -1;
    }
    function s(e) {
        const t = u(e);
        const n = [];
        Object.keys(t).forEach((e)=>{
            const r = t[e];
            const { numberOfReadStatus, numberOfStatus } = r;
            const i = numberOfStatus - numberOfReadStatus;
            n.push(`${e}:${i}`);
        });
        return n.join(",");
    }
    function u(e) {
        const t = {};
        e.forEach(({ campaignDuration, campaignId, statusPSAReadTimestamp, t: t_1 })=>{
            if (!(campaignId == null || campaignId === "")) {
                if (!t[campaignId]) {
                    t[campaignId] = {
                        id: campaignId,
                        t: t_1,
                        duration: campaignDuration,
                        firstReadTimestamp: null,
                        numberOfStatus: 0,
                        numberOfReadStatus: 0
                    };
                }
                const i = t[campaignId];
                i.numberOfStatus++;
                if (statusPSAReadTimestamp != null) {
                    i.numberOfReadStatus++;
                    if (i.firstReadTimestamp == null || statusPSAReadTimestamp < i.firstReadTimestamp) {
                        i.firstReadTimestamp = statusPSAReadTimestamp;
                    }
                }
            }
        });
        return t;
    }
    function c(e, t) {
        const e_firstReadTimestamp = e.firstReadTimestamp;
        if (e_firstReadTimestamp != null) {
            return o("WATimeUtils").unixTime() - e_firstReadTimestamp > t;
        }
        const e_duration = e.duration;
        if (e_duration != null) {
            return o("WATimeUtils").unixTime() - e.t > e_duration;
        }
        return false;
    }
    function d(e, t) {
        const n = u(e);
        return Object.keys(n).every((e)=>c(n[e], t));
    }
    l.getPsaCampaignIndex = e;
    l.getPsaCampaignsString = s;
    l.getPSACampaigns = u;
    l.isCampaignExpired = c;
    l.isExpiredStatusPSA = d;
}, 98);