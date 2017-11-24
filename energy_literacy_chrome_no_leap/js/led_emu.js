function initLedEmu() {
if (external) {
  external.LedDiv = [];
  for (var i=0; i<16; i++) {
    div = document.createElement('div');
    div.style.cssText = 'width:40px;height:40px;position:absolute;left:0px;top:0px;background-color:grey;border-radius:20px;';
    div.style.left = 40*i + 'px'
    external.LedDiv.push(div);
    document.getElementsByTagName('body')[0].appendChild(div);

  }

  external.LedIntensity = function(addr, val) {
    if (addr>=0 && addr<16) {
      if (val>0) {
        external.LedDiv[addr].style.backgroundColor = '#00FF00';
      } else {
        external.LedDiv[addr].style.backgroundColor = 'grey';
      }
    }
  }
}
}
