const jwt = require("jsonwebtoken")
const tokenModel = require("../models/token.schema")
const dbConfig = require("../config/db.config")

class TokenService {

    generatePayload (payload) {
        const accessToken = jwt.sign(payload, dbConfig.JWT_ACCESS_SECRET, "120")
        const refreshToken = jwt.sign(payload, dbConfig.JWT_REFRESH_SECRET, "120")
        return { accessToken, refreshToken}
    }

    validateAccessToken (token) {
        try {
            const userData = jwt.verify(token, dbConfig.JWT_ACCESS_SECRET)
        } catch (error) {
            console.log(error);
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken (usrId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save
        }
        const token = await tokenModel.create({user: userId, refreshToken})
    }

    async removeToken (refreshToken) {
        const tokenData = await tokenModel.deleteOne({refreshToken})
    }
    
    async findToken (refreshToken) {
        const tokenDate = await tokenModel.findOne({refreshToken})
        return tokenData 
    }

}

module.exports = new TokenService();