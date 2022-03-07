import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp()
}

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }

// import admin from 'firebase-admin'

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   })
// }

// const db = admin.database()
// export default db

// const serviceAccount = require('../../../../../easycalorie-35a78-firebase-adminsdk-uxi37-fcb6752d52.json')

// const ref = db.ref("restricted_access/secret_document")
// ref.once("value", function(snapshot) {
//   console.log(snapshot.val())
// })

// const serviceAccount = require('C:\Users\EKurochkin\Downloads\easycalorie-35a78-firebase-adminsdk-uxi37-8185949c79.json')

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// })

// {
//   projectId: 'easycalorie-35a78',
//   serviceAccountId: 'firebase-adminsdk-uxi37@easycalorie-35a78.iam.gserviceaccount.com',
// }
