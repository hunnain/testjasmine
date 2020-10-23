
export const WEBSITE_URL                = 'https://glasswall-desktop.com';
export const RELEASE_URL                = 'https://github.com/k8-proxy/glasswall-desktop/releases';
export const LICENSE_URL                = 'https://github.com/k8-proxy/glasswall-desktop/blob/master/LICENSE';
export const FW_URL                     = 'https://forensic-workbench.com/';
export const FILE_DROP_URL              = 'https://file-drop.co.uk/';
export const REBUILD_ENGINE_URL         = 'https://8oiyjy8w63.execute-api.us-west-2.amazonaws.com/Prod/api/rebuild/base64';
export const REBUILD_ANALYSIS_URL       = 'https://o7ymnow6vf.execute-api.us-west-2.amazonaws.com/Prod/api/Analyse/base64';
export const REPO_GIT_ISSUE_URL         = "https://github.com/k8-proxy/glasswall-desktop/issues/new";

export const REBUILD_API_KEY            = 'dp2Ug1jtEh4xxFHpJBfWn9V7fKB3yVcv60lhwOAG';
export const VERSION                    = '0.5.0'
export const _PROCESSED_FOLDER          = "./processed/"
export const _CLEAN_FOLDER              = "clean/"
export const _ORIGINAL_FOLDER           = "original/"
export const _REPORT_FOLDER             = "report/"

export const OUTPUT_DIR_FLAT            = "flat";
export const OUTPUT_DIR_HIERARCY        = "hierarcy";

export const WELCOME_PAGE_VISTIED_KEY   = "visited"
export const WELCOME_PAGE_VISTIED_VAL   = "yes"

export const RELEAE_NOTES           =[
                                        {
                                          "date":"October 15th 2020",
                                          "desc":"On uploading multiple files in the app at once, the rebuild api give 429 (TooManyRequests)."
                                        }, 
                                        {
                                          "date":"October 14th 2020",
                                          "desc":"Solution to install upgrades #30"
                                        },
                                        {
                                          "date":"October 13th  2020",
                                          "desc":"Publish a build to Github Release #75"
                                        }, 
                                        {
                                          "date":"October 12th  2020 ",
                                          "desc":" Notification for the updated version. #139"
                                        },
                                         {
                                          "date":"October 12th  2020 ",
                                          "desc":"Change default landing page from Welcome page to the direct File drop option. #137"
                                        }
                                      ]

export const sleepDelay = (milliseconds:number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  export const sleep = (delay:number) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

  const _p8=(s:boolean) =>{

    var p = (Math.random().toString(16)+"000000000").substr(2,8);
    return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
}
 export const guid=()=> {
   
    //return _p8(false) + _p8(true) + _p8(true) + _p8(false);
    return _p8(false) + _p8(true);
    
}

export const stipFileExt =(filename: string)=>{
  return filename.split('.').slice(0, -1).join('.')
}

export const getFileHash=(content: string)=> {
  var crypto = require('crypto');
  // change to 'md5' if you want an MD5 hash
  var hash = crypto.createHash('sha1');

  // change to 'binary' if you want a binary hash.
  hash.setEncoding('hex');

  // the text that you want to hash
  hash.write(content);

  // very important! You cannot read from the stream until you have called end()
  hash.end();

  // and now you get the resulting hash
  var sha1sum = hash.read();
  return sha1sum;
}