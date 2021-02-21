// 1-st parameter response allows us to send messages back to a client
module.exports = (response, err) => {
    response.status(500).json({
        success: false,
        err_msg: err.message ? err.message : err
    })
}