const nodemailer = require("nodemailer");
const dbConfig = require("../config/db.config")

class MailService {
    
    constructor () {
        this.transporter = nodemailer.createTransport({
            host: dbConfig.SMTP_HOST,
            port: dbConfig.SMTP_PORT,
            secure: false,
            auth: {
                user: dbConfig.SMTP_USER,
                pass: dbConfig.SMTP_PASSWORD
            }
        }).verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
        }
})
    }

    async sendActivationMail (to, link) {
        await this.transporter.sendMail({
            from: dbConfig.SMTP_USER,
            to,
            subject: "Активация аккаунт на:" + dbConfig.API_URL,
            text: "",
            html:   `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                    `
        })
    }
}

module.exports = new MailService();