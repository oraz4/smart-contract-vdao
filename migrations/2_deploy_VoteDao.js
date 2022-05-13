const VoteDao = artifacts.require('VoteDao.sol')

module.exports = async function(deployer, _network, addresses) {
    const [admin, _] = addresses;

    await deployer.deploy(VoteDao);

};
