__d("WAWebHdDownloadAffordance", [
    "WAWebMediaTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e == null) {
            return "none";
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.RESOLVED && t === false || e === o("WAWebMediaTypes").MediaDataStage.INIT || e === o("WAWebMediaTypes").MediaDataStage.EXISTS || e === o("WAWebMediaTypes").MediaDataStage.NEED_POKE || e === o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY) {
            return "request";
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.FETCHING || e === o("WAWebMediaTypes").MediaDataStage.DECRYPTING || e === o("WAWebMediaTypes").MediaDataStage.PREPARING || e === o("WAWebMediaTypes").MediaDataStage.REUPLOADING) {
            return "inflight";
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || e === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED || e === o("WAWebMediaTypes").MediaDataStage.RESOLVED) {
            return "none";
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.UPLOADING || e === o("WAWebMediaTypes").MediaDataStage.FINALIZING || e === o("WAWebMediaTypes").MediaDataStage.SENDING || e === o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING) {
            return "inflight";
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD || e === o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD) {
            return "request";
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE || e === o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE || e === o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN) {
            return "none";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function s(e) {
        if (e == null) {
            return false;
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.UPLOADING || e === o("WAWebMediaTypes").MediaDataStage.FINALIZING || e === o("WAWebMediaTypes").MediaDataStage.SENDING || e === o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD || e === o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING || e === o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD) {
            return true;
        }
        if (e === o("WAWebMediaTypes").MediaDataStage.INIT || e === o("WAWebMediaTypes").MediaDataStage.EXISTS || e === o("WAWebMediaTypes").MediaDataStage.PREPARING || e === o("WAWebMediaTypes").MediaDataStage.REUPLOADING || e === o("WAWebMediaTypes").MediaDataStage.FETCHING || e === o("WAWebMediaTypes").MediaDataStage.DECRYPTING || e === o("WAWebMediaTypes").MediaDataStage.RESOLVED || e === o("WAWebMediaTypes").MediaDataStage.NEED_POKE || e === o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY || e === o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE || e === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || e === o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE || e === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED || e === o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN) {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.getHdDownloadAffordance = e;
    l.isOutgoingHdStage = s;
}, 98);