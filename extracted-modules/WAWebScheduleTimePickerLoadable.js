__d("WAWebScheduleTimePickerLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebScheduleTimePicker.react").__setRef("WAWebScheduleTimePickerLoadable").load();
        return e;
    }), "WAWebScheduleTimePickerLoadable");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <div/>;
        }
    });
    l.WAWebScheduleTimePickerLoadable = c;
}, 98);