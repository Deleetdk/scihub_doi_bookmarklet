javascript:(function() {
    var body = document.documentElement.innerHTML; 
    /*    
    * Actually it's really complicated to match DOI because of poor standards!   
    * We adopt a broad better-to-get-false-positive-than-false-negative approach:   
    * (word boundary) 10 . anything not (whitespace, %, ", #, ?)   
    * http://stackoverflow.com/questions/27910/finding-a-doi-in-a-document-or-page   
    * https://www.doi.org/doi_handbook/2_Numbering.html    
    */

    var re = /\b10\.[^\s\%"#\?,']+\/[^\s\%"#\?,']+/g; 
    /*    
    * TODO Action based on length    
    * >0: Go to scihub with that DOI    
    * >1: Let user know we found more than one, choose which to use    
    *  0: Let user know we didnt find anything    
    */

    var matches = body.match(re);
    if (matches === null) {
        alert("Could not find any DOI!");
        return undefined;
    }

    /* use first match */
    doi = matches[0];

    /* Go go go! */
    window.location = "http://sci-hub.cc/" + doi;
})();
