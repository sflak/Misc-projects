// Sydney Flak
// sflak1@my.smccd.edu
// CIS 114 OL
// translate.js
// Assignment #7
// 5/13/16


//api key:  trnsl.1.1.20160511T053003Z.6aaa45ab2e98d0bf.bdc7389d4bbdee44485b41c693340a3e8534de1d

$(document).ready(function(){

	//initial stuff
	$('#theForm').submit(function(e){

		
		var text = $('#text');
		var output = $('#output');
		
		var api = 'trnsl.1.1.20160511T053003Z.6aaa45ab2e98d0bf.bdc7389d4bbdee44485b41c693340a3e8534de1d';
		
		var textString = text.val();
		textString = textString.replace(/ /g, "+");	

		
		$.getJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + api + "&lang=en-ru&text=" + textString + "!&callback=?", function(trans){
            
              output.html(trans.text[0]);
          
		});

		return false;

	});

});
	
	