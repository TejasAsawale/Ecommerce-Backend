const jwt = require('jsonwebtoken');

function authorise (req, res, next) {
    const token = req.headers['authorization'];
    console.log(token);
        if (!token) {
        return res.status(403).json({message:"No token, authorization denied"});
    }
    const splitToken = token.split(' ')[1]
    console.log(splitToken);

    jwt.verify(splitToken, 'tejas', (err, decoded) => {
        if(err) {
            return res.status(401).send({message: "Token is not valid"});
        }
        req.userId = decoded._id; // Store the decoded uer ID in the request object
        next();
    });
}
//     try {
//         const decoded = jwt.verify(token, 'tejas');
//         req.user = decoded.userId;
//         next();
//     } catch (error) {
//         res.status(401).json({message:"Token is not valid"});
//     }
// };



module.exports = authorise;