__d("WAWebDrawerManager", [
    "Promise",
    "WAWebDrawerManagerGlobalContext",
    "WAWebNoop"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {}
        const a = t.prototype;
        a.openDrawerRight = function(t, n) {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right")?.openDrawer(t, n);
        };
        a.openDrawerMid = function(t, n) {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("mid")?.openDrawer(t, n);
        };
        a.openDrawerLeft = function(t, n) {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.openDrawer(t, n);
        };
        a.openDrawerFullscreen = function(t, n) {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("fullscreen")?.openDrawer(t, n);
        };
        a.openDrawerLeftAsync = function(r, a) {
            return o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.openDrawer(r, a) ?? (e || (e = n("Promise"))).resolve(true);
        };
        a.closeDrawerRight = function() {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right")?.closeDrawer();
        };
        a.closeDrawerMid = function() {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("mid")?.closeDrawer();
        };
        a.closeDrawerLeft = function(t) {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.closeDrawer(null, t);
        };
        a.closeDrawerFullscreen = function() {
            o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("fullscreen")?.closeDrawer();
        };
        a.closeDrawerLeftAsync = function(r) {
            return o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.closeDrawer(null, r) ?? (e || (e = n("Promise"))).resolve(true);
        };
        a.registerCloseGuardLeft = function(t) {
            return o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.registerCloseGuard(t) ?? r("WAWebNoop");
        };
        a.hasCloseGuardLeft = function() {
            return o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.hasCloseGuard() ?? false;
        };
        return t;
    })();
    const u = new s;
    function c() {
        u.closeDrawerRight();
    }
    function d() {
        u.closeDrawerLeft();
    }
    l.DrawerManager = u;
    l.closeDrawerRight = c;
    l.closeDrawerLeft = d;
}, 98);