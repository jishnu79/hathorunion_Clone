const db = require('../Config/Db')

const contactUs = async (req, res) => {
    const { name, email, phone, catogery, message } = req.body
    try {
        const data = await db.query('INSERT INTO studens (name,email,phone,catogery,message) VALUES(?,?,?,?,?) ', [name, email, phone, catogery, message])
        if (!data) {
            res.send({
                success: false,
                message: "Data enter error"
            })
        } else {
            res.send({
                success: true,
                message: "Submited Success"
            })
        }
    } catch (error) {
        res.send({
            data: error,
            success: false,
            message: "server error"
        })
    }
}

const getDetails = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM studens')
        if (!data) {
            res.send({
                success: false,
                message: "record not found"
            })
        } else {
            res.send({
                success: true,
                data: data[0]
            })
        }
    } catch (error) {
        res.send({
            data: error,
            success: false,
            message: "server error"
        })
    }
}

module.exports = {
    contactUs, getDetails
}