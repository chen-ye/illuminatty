parsebio={};

parsebio.hello = function(){
	console.log('parser');
	return false;
}

parsebio.get = function() {
	
// 	Papa.parse("http://www.cbioportal.org/webservice.do?cmd=getMutationData&genetic_profile_id=ov_tcga_mutations+ucec_tcga_mutations&gene_list=BRCA1", {
// 	download: true,
// 	complete: function(results) {
// 		console.log(results);
// 	}
// });

// 	Papa.parse("http://cbioportal.org/webservice.do?cmd=getCaseLists&cancer_study_id=gbm_tcga", {
// 	download: true,
// 	step: function(row) {
// 		console.log("Row:", row.data);
// 	},
// 	complete: function() {
// 		console.log("All done!");
// 	}
// });
Papa.parse("./cancerdata.csv", {
	download: true,
	complete: function(results) {
		console.log(results);
	}
	// rest of config ...
})

	
}

parsebio.get();