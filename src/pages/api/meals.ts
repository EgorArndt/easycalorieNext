import { db } from '@lib/firebase-admin'

export default async (_, res) => {
  const snapshot = await db.collection('meals').get()
  const meals = []

  snapshot.forEach((doc) => {
    meals.push({ id: doc.id, ...doc.data() })
  })
  if (res.status(200)) console.log(meals)
  res.status(200).json(meals)
}

// export default async (req, res) => {
//   try {
//     const { uid } = await auth.verifyIdToken(req.headers.token);
//     const { sites } = await getUserSites(uid);

//     res.status(200).json({ sites });
//   } catch (error) {
//     logger.error(
//       {
//         request: {
//           headers: formatObjectKeys(req.headers),
//           url: req.url,
//           method: req.method
//         },
//         response: {
//           statusCode: res.statusCode
//         }
//       },
//       error.message
//     );

//     res.status(500).json({ error });
//   }
// };

// import db from '@lib/admin'
// import { getDatabase, ref, onValue} from "firebase/database";

// export default async (_, res) => {
//   const db = getDatabase();
//   console.log(db)
// const starCountRef = ref(db, 'meals');

// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data)
// });
// }

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// export default async (_, res) => {
//   const snapshot = await db.refcollection('meals')
//   const meals = []
//   snapshot.forEach(doc => {
//     meals.push({id: doc.id, ...doc.data()})
//   })

//   res.status(200).json(meals)

// }

// const ref = db.ref('https://easycalorie.firebaseio.com/meals')

// ref.on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (errorObject) => {
//   console.log('The read failed: ' + errorObject.name);
// });
