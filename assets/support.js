const UAparser = new UAParser(navigator.userAgent);
const UA = UAparser.getResult();
console.log(UAparser.getResult());
document.getElementById("userAgent").innerHTML =
  UA.browser.name + " " + UA.browser.version;

function getSupportDevice() {
  let getUA = navigator.userAgent.match(
    /(firefox|chrome|version|android)[\/\s]([\d]+)/gi
  );

  if (!getUA) return false;

  let getDevice = [];
  for (var i = 0; i < getUA.length; i++) {
    getDevice.push(getUA[i].split(getUA[i].indexOf("/") < 0 ? "/" : " "));
  }

  for (var i = 0; i < getDevice.length; i++) {
    switch (getDevice[i][0].toLowerCase()) {
      case "chrome":
        if (getDevice[i][1] < 63) return false;
        break;

      case "firefox":
        if (getDevice[i][1] < 58) return false;
        break;

      case "version":
        if (getDevice[i][1] < 9) return false;
        break;

      case "android":
        if (getDevice[i][1] < 5) return false;
        break;
    }
  }

  return true;
}

if (!getSupportDevice()) window.location.replace("./support");
