console.log("smab Author Tracker 0.4.14");
setTimeout(cleanWbrs, 2000);
setTimeout(searchAndFilter, 2400);

function cleanWbrs() {
    console.log("smab Author Tracker ...remove wbr tags...");

    var i = 0;

    var wbrs = document.getElementsByTagName('wbr');
    for (i = 0, len = wbrs.length; i != len; ++i) {
        wbrs[0].parentNode.removeChild(wbrs[0]);
    }
}

function searchAndFilter() {
    console.log("smab Author Tracker ...search and filter ...");

    var labels = document.getElementsByClassName('name');
    for (label of labels) {
        var nameStr = label.innerHTML;
        label.innerHTML = nameStr;

        // SPAM
        if (
            /[\da-f]{32}/i.test(nameStr)
            || /[\,\da-z]{20}/i.test(nameStr)
        ) {
            foundAuthor = false;
            //console.log(`SPAM ${nameStr}`);

            label.style['background-color'] = '#ff00ff';
            label.parentNode.parentNode.style.visibility = 'hidden';
            label.parentNode.parentNode.style.display = 'none';
        } else if (
            // Books and Authors
            /aaronovi/i.test(nameStr)
            || /robert.*asprin/i.test(nameStr)
            || /baddiel/i.test(nameStr)
            || /iain.*banks/i.test(nameStr)
            || /mel.*brooks/i.test(nameStr)
            || /max.*brooks/i.test(nameStr)
            || /terry.*brooks/i.test(nameStr)
            || /butcher/i.test(nameStr)
            || /orson.*scott.*card/i.test(nameStr)
            || /colfer/i.test(nameStr)
            || /james.*corey/i.test(nameStr)
            || /dibdin/i.test(nameStr)
            || /dummies/i.test(nameStr)
            || /gaiman/i.test(nameStr)
            || /galbraith/i.test(nameStr)
            || /gerritsen/i.test(nameStr)
            || /charlaine.*harris/i.test(nameStr)
            || /kim.*harrison/i.test(nameStr)
            || /jemisin/i.test(nameStr)
            || /lagerkrantz/i.test(nameStr)
            || /luke.*jennings/i.test(nameStr)
            || /leckie/i.test(nameStr)
            || /george.*martin/i.test(nameStr)
            || /randal.*munro/i.test(nameStr)
            || /modesitt/i.test(nameStr)
            || /osman/i.test(nameStr)
            || /pratchett/i.test(nameStr)
            || /pullman/i.test(nameStr)
            || /rankin/i.test(nameStr)
            || /kathy.*reichs/i.test(nameStr)
            || /peter.*robinson/i.test(nameStr)
            || /rowling/i.test(nameStr)
            || /russinovic/i.test(nameStr)
            // Magazines
            || /android/i.test(nameStr)
            || /arrowords/i.test(nameStr)
            || /bdm/i.test(nameStr)
            || /CODE.*magazine/i.test(nameStr)
            || /computeractive/i.test(nameStr)
            || /computer.*shopper/i.test(nameStr)
            || /criss.*cross/i.test(nameStr)
            || /codeword/i.test(nameStr)
            || /crossword/i.test(nameStr)
            || /custom.*pc/i.test(nameStr)
            || /dotnet/i.test(nameStr)
            || /economist.*uk/i.test(nameStr)
            || /futures/i.test(nameStr)
            || /maximum.*pc/i.test(nameStr)
            || /microsoft/i.test(nameStr)
            || /msdn/i.test(nameStr)
            || /new.scientist/i.test(nameStr)
            || /nintendo/i.test(nameStr)
            || /puzzle/i.test(nameStr)
            || /pcworld/i.test(nameStr)
            || /radio.*times/i.test(nameStr)
            || /retro.*game/i.test(nameStr)
            || /ntifi.*rican/i.test(nameStr)
            || /T3.*uk/i.test(nameStr)
            || /stuff/i.test(nameStr)
            || /ultimate.*guide/i.test(nameStr)
            || /windows.10/i.test(nameStr)
            || /windows.11/i.test(nameStr)
            || /windows.*guide/i.test(nameStr)
            || /xbox.*guide/i.test(nameStr)
        ) {
            console.log(nameStr);
            label.style['background-color'] = '#0000ff';
            label.style['color'] = 'yellow';
        } else if (
            // Sandra
             /alan.*bennett/i.test(nameStr)
            || /beaton/i.test(nameStr)
            || /cleeves/i.test(nameStr)
            || /coren/i.test(nameStr)
            || /ellis.*peters/i.test(nameStr)
            || /ferrante/i.test(nameStr)
            || /grisham/i.test(nameStr)
            || /harari/i.test(nameStr)
            || /hislop/i.test(nameStr)
            || /ishiguro/i.test(nameStr)
            || /j.*d.*robb/i.test(nameStr)
            || /julia.*quinn/i.test(nameStr)
            || /lucinda.*riley/i.test(nameStr)
            || /marian.*keyes/i.test(nameStr)
            || /ngaio.*marsh/i.test(nameStr)
            || /nora.*roberts/i.test(nameStr)
        ) {
            console.log(nameStr);
            label.style['background-color'] = '#75f1bb';
            label.style['color'] = 'yellow';
        } else if (
            // Ali
             /bill.*bryson/i.test(nameStr)
            || /cookbook/i.test(nameStr)
            || /lagerkrantz/i.test(nameStr)
            || /lets.*colour/i.test(nameStr)
            || /national.*geographic/i.test(nameStr)
            || /physio/i.test(nameStr)
            || /recipe/i.test(nameStr)
            || /saramago/i.test(nameStr)
            || /toni.*jordan/i.test(nameStr)
            || /yoga/i.test(nameStr)
        ) {
            console.log(nameStr);
            label.style['background-color'] = '#ff00c1';
            label.style['color'] = 'yellow';
       }

    }

    console.log("smab Author Tracker ...Done");
}

