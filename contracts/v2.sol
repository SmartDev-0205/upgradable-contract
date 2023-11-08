// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PriceFeedTrackerV2 is Initializable {
    address private admin;
    int public price; // NOTE: new storage slot

    // Emitted when the price is retrieved changes
   event PriceRetrievedFrom(address feed, int price);

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
    function retrievePrice() public returns (int) {

        price = 1000000000000000000000;

       emit PriceRetrievedFrom(admin, price);

       return price;
    }
}
