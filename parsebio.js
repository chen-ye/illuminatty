parsebio={};

parsebio.hello = function(){
	console.log('parser');
	return false;
}

parsebio.get = function() {
	


	return TSV.stringify("http://www.cbioportal.org/webservice.do?cmd=getMutationData&genetic_profile_id=ov_tcga_mutations+ucec_tcga_mutations&gene_list=BRCA1");

}