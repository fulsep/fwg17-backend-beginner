exports.getAllUsers = (req, res)=>{
    return res.json({
        success: true,
        message: 'List all users',
        results: [
            {
                id: 1,
                name: 'Leanne Graham'
            },
            {
                id: 2,
                name: 'Bob'
            }
        ]
    })
}

// exports.createUser = (req, res)=>{
//     // process
// }