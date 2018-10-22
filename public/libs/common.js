
var BlockchainIncubatorAddress = '0xe72dc73d062274e525ae2d9297cc10bbaa0fe4a7';

var addr0 = "0x1b8a62f90ecf5ce0e9ef3774cc27fdc8fa725161";
var addr1 = "0xbc6a67c7b6b8b0d99aa07e4bfb803addf06e0713";
var addr3 = "0x8f1d2ea30a0cf27c6e643ea8dba1df25a0f81530";





var web3;


function commonsSetWeb3Object()
{
	
					  var Web3 = require('web3');
					  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
					  if (typeof web3 !== 'undefined') {
							// Use Mist/MetaMask's provider
							web3 = new Web3(web3.currentProvider);
					  } else {
							console.log('No web3? You should consider trying MetaMask!')
							// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
							web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
					  }					  
}





function commonGetQueryStringValue(key) 
{
	var url = document.URL;
    query_string = url.split('?');
    string_values = query_string[1].split('&');
    for(i=0;  i < string_values.length; i++)
    {
        if( string_values[i].match(key))
            req_value = string_values[i].split('=');    
    }
    return req_value[1];
}