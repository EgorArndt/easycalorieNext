import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCdJoyQtrZVc_uZ3i94DPEdVROSQJFeJ4c',
  authDomain: 'easycalorie-35a78.firebaseapp.com',
  projectId: 'easycalorie-35a78',
}
const firebase = initializeApp(firebaseConfig)
export default firebase

// const db = getFirestore(firebase)

// Detect auth state
// onAuthStateChanged(auth, user => {
//     if (user !== null) {
//         console.log('logged in!')
//     } else {
//         console.log('no user')
//     }
// })

// connectAuthEmulator(auth, 'http://localhost:3000')
