const contact = require('../Models/ContactUsModel');

const contactUs = async (req, res) => {
    try {
        const userdet = new contact(req.body)
        await userdet.save()
        res.send({
            success: true,
            message: "Message sent successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    contactUs
}