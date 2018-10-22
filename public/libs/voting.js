// Import the page's CSS. Webpack will know what to do with it.

// Import libraries we need.


/*
 * When you compile and deploy your Voting contract,
 * truffle stores the abi and deployed address in a json
 * file in the build directory. We will use this information
 * to setup a Voting abstraction. We will use this abstraction
 * later to create an instance of the Voting contract.
 * Compare this against the index.js from our previous tutorial to see the difference
 * https://gist.github.com/maheshmurthy/f6e96d6b3fff4cd4fa7f892de8a1a1b4#file-index-js
 */

var voting_artifacts = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "votesReceived",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidateList",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "candidateNames",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "candidate",
          "type": "bytes32"
        }
      ],
      "name": "totalVotesFor",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "candidate",
          "type": "bytes32"
        }
      ],
      "name": "voteForCandidate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "candidate",
          "type": "bytes32"
        }
      ],
      "name": "validCandidate",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
  

		var votingContract = web3.eth.contract(voting_artifacts);

		var votingContractInstance = votingContract.at("0x4a7af8d1b4866a56ea8460658f0f9fdd1888da00");
  
  
let candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

window.voteForCandidate = function(candidate) {
    let candidateName = $("#candidate").val();

    $("#msg").html("Vote has been submitted. The vote count will increment as soon as the vote is recorded on the blockchain. Please wait.")
    $("#candidate").val("");

    /* Voting.deployed() returns an instance of the contract. Every call
     * in Truffle returns a promise which is why we have used then()
     * everywhere we have a transaction call
     */
    
		debugger;

  		votingContractInstance.voteForCandidate.call(candidateName, {gas: 140000, from: web3.eth.accounts[0]}, function(error, result) 
		{
			votingContractInstance.totalVotesFor.call(candidateName, function(error, result) 
			{
				$("#" + candidates[name]).html(result.toString());
			});			
		});

}




$( document ).ready(function() {
	  
	  var Web3 = require('web3');
	  if (typeof web3 !== 'undefined') {
		console.warn("Using web3 detected from external source like Metamask")
		// Use Mist/MetaMask's provider
		window.web3 = new Web3(web3.currentProvider);
	  } else {
		console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
		// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
		window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	  }

	  
	  //Voting.setProvider(web3.currentProvider);
	  let candidateNames = Object.keys(candidates);
	  

	  for (var i = 0; i < candidateNames.length; i++) 
	  {
		let name = candidateNames[i];
  		votingContractInstance.totalVotesFor.call(name, function(error, result) 
		{
		    $("#" + candidates[name]).html(result.toString());
		});
	  }
  
});