__d("WAWebNewsletterAdminInsightsGetters", [
    "fbt",
    "WAWebClock",
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l, s) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNewsletterAdminInsightsCache
    });
    const { clearCacheFor, computed, field } = e;
    const m = clearCacheFor;
    const p = field("accountsReachedAll");
    const _ = field("accountsReachedChannels");
    const f = field("accountsReachedChannelStatus");
    const g = field("followers");
    const h = field("followersByCountry");
    const y = field("followersDelta");
    const C = field("followersReachedAll");
    const b = field("followersReachedChannels");
    const v = field("followersReachedChannelStatus");
    const S = field("growthChartData");
    const R = field("rangeStart");
    const L = field("rangeEnd");
    const E = field("nonFollowersReachedAll");
    const k = field("nonFollowersReachedChannels");
    const I = field("nonFollowersReachedChannelStatus");
    const T = field("reachByCountryAll");
    const D = field("reachByCountryChannels");
    const x = field("reachByCountryChannelStatus");
    const $ = field("reachDeltaAll");
    const P = field("reachDeltaChannels");
    const N = field("reachDeltaChannelStatus");
    const M = computed(function([t]) {
        if (t.length === 0) {
            return [];
        }
        return [
            {
                data: t,
                dataLabels: [
                    {
                        label: s._("Net follows"),
                        key: "net-follows"
                    },
                    {
                        label: s._("Follows"),
                        key: "follows"
                    },
                    {
                        label: s._("Unfollows"),
                        key: "unfollows"
                    }
                ],
                dataSetLabel: {
                    label: s._("Growth"),
                    key: "growth"
                }
            }
        ];
    }, [
        S
    ]);
    const w = computed(function([t, n]) {
        if (t == null || n == null) {
            return 0;
        }
        return o("WAWebClock").Clock.daysDeltaAbs(t, n) + 1;
    }, [
        R,
        L
    ]);
    l.clearNewsletterAdminInsightsGetterCacheFor = m;
    l.getAccountsReachedAll = p;
    l.getAccountsReachedChannels = _;
    l.getAccountsReachedChannelStatus = f;
    l.getFollowers = g;
    l.getFollowersByCountry = h;
    l.getFollowersDelta = y;
    l.getFollowersReachedAll = C;
    l.getFollowersReachedChannels = b;
    l.getFollowersReachedChannelStatus = v;
    l.getRangeStart = R;
    l.getRangeEnd = L;
    l.getNonFollowersReachedAll = E;
    l.getNonFollowersReachedChannels = k;
    l.getNonFollowersReachedChannelStatus = I;
    l.getReachByCountryAll = T;
    l.getReachByCountryChannels = D;
    l.getReachByCountryChannelStatus = x;
    l.getReachDeltaAll = $;
    l.getReachDeltaChannels = P;
    l.getReachDeltaChannelStatus = N;
    l.getGrowthChart = M;
    l.getRangeInDays = w;
}, 226);