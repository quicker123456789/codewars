function domainParser(url){ 
  return url.match(/(w{3}\.|http:\/\/w{3}\.|http:\/\/)?([^\n\/\.]+)\./).pop();
}

console.log(domainParser('zq1g6tcttnjn6cs.co.za/default.html'));//zq1g6tcttnjn6cs

/*
function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
}
*/