// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PriceFeedTracker is Initializable {
   address private admin;

   function initialize(address _admin) public initializer {
       admin = _admin;
   }

   function getAdmin() public view returns (address) {
       return admin;
   }

   /**
    * Network: Goerli
    * Aggregator: ETH/USD
    * Address: 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
    */
   function retrievePrice() public pure returns (int) {
        return 1000000000000000000000;
   }
} 