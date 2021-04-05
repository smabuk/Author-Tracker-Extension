console.log("smab Author Tracker 0.3.0");
setTimeout(cleanWbrs, 2000);
setTimeout(searchAndFilter, 2400);

function cleanWbrs() {
	console.log("smab Author Tracker remove wbr tags...");

	var i = 0;
	
	var wbrs = document.getElementsByTagName('wbr');
	for (i = 0, len = wbrs.length; i != len; ++i) {
		wbrs[0].parentNode.removeChild(wbrs[0]);
	}
}

function searchAndFilter() {
	console.log("smab Author Tracker search and filter ...");
	
	i = 0;
	var nameStr = "";
	var labels = document.getElementsByClassName('name');
	for (label of labels) {
		var foundAuthor = false;
		nameStr = label.innerHTML;
		label.innerHTML = nameStr;
		
		// SPAM
		if (/[\da-f]{32}/i.test(nameStr)) {
			foundAuthor = false;
			//console.log(`SPAM ${nameStr}`);
			
			label.style['background-color'] = '#ff00ff';
			label.parentNode.parentNode.style.visibility = 'hidden';
			label.parentNode.parentNode.style.display = 'none';
		} else if (
					/aaronovi/i.test(nameStr)
					|| /baddiel/i.test(nameStr)
					|| /beaton/i.test(nameStr)
					|| /brooks/i.test(nameStr)
					|| /butcher/i.test(nameStr)
					|| /orson.*scott.*card/i.test(nameStr)
					|| /cleeves/i.test(nameStr)
					|| /colfer/i.test(nameStr)
					|| /james.*corey/i.test(nameStr)
					|| /dibdin/i.test(nameStr)
					|| /gaiman/i.test(nameStr)
					|| /galbraith/i.test(nameStr)
					|| /gerritsen/i.test(nameStr)
					|| /charlaine.*harris/i.test(nameStr)
					|| /kim.*harrison/i.test(nameStr)
					|| /jemisin/i.test(nameStr)
					|| /luke.*jennings/i.test(nameStr)
					|| /leckie/i.test(nameStr)
					|| /ngaio.*marsh/i.test(nameStr)
					|| /george.*martin/i.test(nameStr)
					|| /randal.*munro/i.test(nameStr)
					|| /osman/i.test(nameStr)
					|| /pratchett/i.test(nameStr)
					|| /pullman/i.test(nameStr)
					|| /rankin/i.test(nameStr)
					|| /kathy.*reichs/i.test(nameStr)
					|| /j.*d.*robb/i.test(nameStr)
					|| /nora.*roberts/i.test(nameStr)
					|| /peter.*robinson/i.test(nameStr)
					|| /rowling/i.test(nameStr)
					|| /russinovic/i.test(nameStr)
					) {
			console.log(nameStr);
			label.style['background-color'] = '#0000ff';
			label.style['color'] = 'yellow';
		}
		
	}
	
	console.log("smab Author Tracker Done");
}

