import bcrypt from 'bcrypt'

const users = [
    {
        name: "Aman kamboj",
        email: "aman@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name:"User1",
        email: "user1@gmail.com",
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name:"User2",
        email: "user2@gmail.com",
        password: bcrypt.hashSync('123456', 10),

    }
]

export default users
