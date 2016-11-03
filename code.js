javascript:(function(){
	/*site html */
	var site_html = document.documentElement.innerHTML;

    /*
	regex pattern
	actually it's really complicated to match DOI because of poor standards!
	we adopt a broad better-to-get-false-positive-than-false-negative approach:
	(word boundery) 10 . anything not (whitespace, %, ", #, ?)
	http://stackoverflow.com/questions/27910/finding-a-doi-in-a-document-or-page
	https://www.doi.org/doi_handbook/2_Numbering.html
	*/
    var re_DOI = /\b10\.[^\s\%"#\?]+\/[^\s\%"#\?]+/;
	
	/*matches*/
	var re_matches = re_DOI.exec(site_html);
	console.log(re_matches);
	
	/*
	action based on length
	>0 -> go to scihub with that DOI
	>1 -> let user know we found more than one, choose which to use
	0 -> let user know we didnt find anything
	*/
	if (re_matches === null) {
		/*let user know there wasn't any DOIs to be found*/
		alert("Could not find any DOI!");
		return null;
	}
	
	/*make url*/
	var url = "http://sci-hub.cc/" + re_matches[0];
	console.log(url);
	
	/*go to first hit*/
	window.location = url;
})();