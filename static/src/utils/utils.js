import packageJson from '../../package.json';
console.log("package" + packageJson.owner); // 

export const  MAC_BUILD     =  "https://github.com/" + packageJson.repo_owner + "/" + packageJson.repo + 
                               "/releases/download/"+ packageJson.tagVersion + "/" + packageJson.app_name + "-" 
                               + packageJson.version +".dmg"

export const  WINDOWS_BUILD =  "https://github.com/" + packageJson.repo_owner + "/" + packageJson.repo + 
                                "/releases/download/"+ packageJson.tagVersion + "/" + packageJson.app_name 
                                + "-Setup-" + packageJson.version + ".exe"

export const  LINUX_BUILD   =   "https://github.com/" + packageJson.repo_owner + "/" + packageJson.repo + 
                                "/releases/download/"+ packageJson.tagVersion + "/" + packageJson.app_name + "-" 
                                 +  packageJson.version + ".snap"
console.log("LINUX_BUILD" + LINUX_BUILD)                              
export const  RELEASE_URL   =   "https://github.com/" + packageJson.repo_owner + "/" + packageJson.repo + "/releases/";

export let getOS = () =>{

    var userAgent        = window.navigator.userAgent,
        platform         = window.navigator.platform,
        macosPlatforms   = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms     = ['iPhone', 'iPad', 'iPod'],
        os = null;
        
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  

export let downloadUrl =() =>{
    let platform = getOS();
    if ( platform== 'Mac OS' || platform == 'iOS'){
            return MAC_BUILD;
    }else if(platform == "Windows"){
        return WINDOWS_BUILD;
    }else if(platform == 'Linux'){
        return LINUX_BUILD
    }else{
        return MAC_BUILD
    }

}