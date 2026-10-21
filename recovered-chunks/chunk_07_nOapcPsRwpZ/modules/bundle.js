;
_btldr = {};
_nowInl = function() {
    const window_performance = window.performance;
    if (window_performance && window_performance.now && window_performance.timing && window_performance.timing.navigationStart) {
        return window_performance.now() + window_performance.timing.navigationStart;
    }
    return new Date().getTime();
};
_qplInl = (()=>{
    const e = {
        client: {}
    };
    return {
        addPoint: function(t) {
            e.client[t] = _nowInl();
        },
        getPoints: function() {
            return e;
        }
    };
})();
_qplInl.addPoint("htmlFlush");
