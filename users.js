import jwt from "jsonwebtoken"

export async function userLogin(req, res) {
  const { email, password } = req.body
  const db = dbConnect()
  const matchingUsers = await db.collection('users')
    .where('email', '==', email.toLowerCase())
    .where('password', '==', password)
    .get()
  const users = matchingUsers.docs.map(doc => ({...doc.data(), uid: doc.id }))
  if(!users.length) {
    res.status(401).send({ message: 'Invalid email or password' })
    return
  }
  // if we get here... we have (at least) one matching user
  let user = users[0]
  user.password = undefined
  const token = jwt.sign(user, secretKey)
  res.send({ user, token })
}

export async function addNewUser(req, res) {
  const { email, password } = req.body
  const db = dbConnect()
  // we should check to see if email already being used
  await db.collection('users').add({ email: email.toLowerCase(), password })
  userLogin(req, res)
  // res.status(201).send({ message: 'Account successfully created' })
}

export async function updateUser(req, res) {
  const { uid } = req.params // profile they want to update
  const db = dbConnect()
  await db.collection('users').doc(uid).update(req.body)
  res.status(202).send({ message: 'updated'})
}
