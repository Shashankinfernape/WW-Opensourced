__d("WAWebCsv3pdSignals", [
    "WAWeb-moment",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebDownloads3PDSignalsDatabaseApi").getRecent3PDSignals();
            const t = (ctwa3pdConversionMetadata)=>{
                const e = ctwa3pdConversionMetadata.replace(/\"/g, '""');
                return `"${e}"`;
            };
            const n = "timestamp,clickId,event,metadata";
            if (e.length === 0) {
                return n;
            }
            const r = [];
            r.push(n);
            e.forEach((e)=>{
                const n = e.timestamp ? new Date(e.timestamp).toISOString() : "";
                const o = [
                    n,
                    String(e.clickId),
                    String(e.ctwa3pdConversionSubtype),
                    t(e.ctwa3pdConversionMetadata)
                ].join(",");
                r.push(o);
            });
            const a = r.join("\n");
            return a;
        });
        return s.apply(this, arguments);
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield e();
            const n = new Blob([
                t
            ], {
                type: "text/csv"
            });
            const a = r("WAWeb-moment")().format("YYYYMMDD-HHMMSS");
            const i = `CustomerRelatedActivities_DataReport_${a}`;
            return o("WAWebFileSaver").FileSaver.downloadData(n, i, o("WAWebFileSaverTypes").AllowedFileExtensions.CSV);
        });
        return c.apply(this, arguments);
    }
    l.generateCsvDataFor3pdSignals = e;
    l.downloadCsvFor3pdSignals = u;
}, 98);