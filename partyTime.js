
var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  this.toggle = !toggle;

  chrome.storage.sync.set({'toggle': this.toggle});

  if (this.toggle) {
    chrome.browserAction.setTitle({title: 'Deactivate maximum party'});
    executeCustomScript();
  }
  else {
    chrome.browserAction.setTitle({title: 'Activate maximum party'});
  }

});

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

    chrome.storage.sync.get('value',function(items) { 
      this.toggle = items.toggle;
    });

    if (this.toggle) {      
      chrome.browserAction.setTitle({title: 'Deactivate maximum party'});
      executeCustomScript();
      sendResponse({farewell: "Partay!"});
    }
});


function executeCustomScript() {

  chrome.tabs.executeScript(null,{code: "var imagess = document.querySelectorAll('img'); for (var i = 0; i < imagess.length; i++) { var randoNum=Math.floor(32*Math.random()+1);switch(randoNum){case 1:imagess[i].src='" + chrome.extension.getURL('/parrots/parrot.gif') + "';break;case 2:imagess[i].src='" + chrome.extension.getURL('/parrots/aussiecongaparrot.gif') + "';break;case 3:imagess[i].src='" + chrome.extension.getURL('/parrots/aussieparrot.gif') + "';break;case 4:imagess[i].src='" + chrome.extension.getURL('/parrots/aussiereversecongaparrot.gif') + "';break;case 5:imagess[i].src='" + chrome.extension.getURL('/parrots/boredparrot.gif') + "';break;case 6:imagess[i].src='" + chrome.extension.getURL('/parrots/chillparrot.gif') + "';break;case 7:imagess[i].src='" + chrome.extension.getURL('/parrots/congaparrot.gif') + "';break;case 8:imagess[i].src='" + chrome.extension.getURL('/parrots/dealwithitparrot.gif') + "';break;case 9:imagess[i].src='" + chrome.extension.getURL('/parrots/explodyparrot.gif') + "';break;case 10:imagess[i].src='" + chrome.extension.getURL('/parrots/fastparrot.gif') + "';break;case 11:imagess[i].src='" + chrome.extension.getURL('/parrots/fiestaparrot.gif') + "';break;case 12:imagess[i].src='" + chrome.extension.getURL('/parrots/gothparrot.gif') + "';break;case 13:imagess[i].src='" + chrome.extension.getURL('/parrots/ice-cream-parrot.gif') + "';break;case 14:imagess[i].src='" + chrome.extension.getURL('/parrots/middleparrot.gif') + "';break;case 15:imagess[i].src='" + chrome.extension.getURL('/parrots/oldtimeyparrot.gif') + "';break;case 16:imagess[i].src='" + chrome.extension.getURL('/parrots/parrotcop.gif') + "';break;case 17:imagess[i].src='" + chrome.extension.getURL('/parrots/parrotdad.gif') + "';break;case 18:imagess[i].src='" + chrome.extension.getURL('/parrots/parrotwave1.gif') + "';break;case 19:imagess[i].src='" + chrome.extension.getURL('/parrots/partyparrot.gif') + "';break;case 20:imagess[i].src='" + chrome.extension.getURL('/parrots/reversecongaparrot.gif') + "';break;case 21:imagess[i].src='" + chrome.extension.getURL('/parrots/rightparrot.gif') + "';break;case 22:imagess[i].src='" + chrome.extension.getURL('/parrots/sadparrot.gif') + "';break;case 23:imagess[i].src='" + chrome.extension.getURL('/parrots/shufflefurtherparrot.gif') + "';break;case 24:imagess[i].src='" + chrome.extension.getURL('/parrots/shuffleparrot.gif') + "';break;case 25:imagess[i].src='" + chrome.extension.getURL('/parrots/shufflepartyparrot.gif') + "';break;case 26:imagess[i].src='" + chrome.extension.getURL('/parrots/slowparrot.gif') + "';break;default:imagess[i].src='" + chrome.extension.getURL('/parrots/parrot.gif') + "'} }"});

}


