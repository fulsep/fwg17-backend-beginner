let users = [
    {
        id: 1,
        name: 'Leanne Graham'
    },
    {
        id: 2,
        name: 'Clementine Dubuque'
    }
]

let countUser = users.length

exports.getAllUsers = (req, res)=>{
    return res.json({
        success: true,
        message: 'List all users',
        results: users
    })
}

exports.getDetailUser = (req, res)=>{
    const user = users.filter(item => item.id === parseInt(req.params.id))
    if(!user[0]){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    
    return res.json({
        success: true,
        message: 'Detail user',
        results: user[0]
    })
}

exports.createUser = (req, res)=>{
    const {name} = req.body
    countUser = countUser + 1

    const user = {
        id: countUser,
        name
    }

    users.push(user)
    return res.json({
        success: true,
        message: 'Create user successfully.',
        results: user
    })

}

exports.updateUser = (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    const userId = users.map(user => user.id).indexOf(parseInt(id))
    if(userId === -1){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    
    users[userId].name = name
    return res.json({
        success: true,
        message: 'OK',
        results: users[userId]
    })
}

exports.deleteUser = (req, res)=>{
    const {id} = req.params
    const user = users.filter(user => user.id === parseInt(id)) 
    if(!user.length){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    
    users = users.filter(user => user.id !== parseInt(id))
    return res.json({
        success: true,
        message: 'Delete success',
        results: user[0]
    })
}