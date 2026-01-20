// const catchAsync = require('../utils/catchAsync');

const signIn = async (req, res, next) => {
  console.log('im here')
  return res.status(200).json({ data: 'hello' });
};


export default { signIn }; // This provides the 'default' export