let defaultVid = "https://www.youtube.com/embed/uxgHmbM3Ig0";

document.getElementById("iframe").src = defaultVid;   

const artVids = ["https://www.youtube.com/embed/IqVXThss1z4", "https://www.youtube.com/embed/-YPOWBQAd1M", "https://www.youtube.com/embed/q2bwZ-nUxhU"];

const sportsVids = ["https://www.youtube.com/embed/1lvkeUjEMlA", "https://www.youtube.com/embed/OTTWedyp37o", "https://www.youtube.com/embed/o1diW_2W-cM","https://www.youtube.com/embed/qT5GlgXrX-0", "https://www.youtube.com/embed/yMQyQRw1Bbc"];

const web3Vids = ["https://www.youtube.com/embed/b2z-UCXAJRA", "https://www.youtube.com/embed/dwjiucS4NtY", "https://www.youtube.com/embed/eim8REOYLzA", "https://www.youtube.com/embed/7Kq3YWsysc0", "https://www.youtube.com/embed/b1m_PTVxD-s"];


function vidPicker() {
    let viewerVidSelection = document.getElementById("selection").selectedIndex;
    if (viewerVidSelection === 0) {
        document.getElementById("iframe").src = defaultVid;
    }
    else if (viewerVidSelection === 1) {
        let artId = Math.floor((Math.random()*(artVids.length)));
        document.getElementById("iframe").src = artVids[artId];
    }
    else if (viewerVidSelection === 2) {
        let sportsId = Math.floor((Math.random()*(sportsVids.length)));
        document.getElementById("iframe").src = sportsVids[sportsId];
    }
    else {
        let web3Id = Math.floor((Math.random()*(web3Vids.length)));
        document.getElementById("iframe").src = web3Vids[web3Id];
    }
}

document.getElementById("randomizer").addEventListener("click", vidPicker());



