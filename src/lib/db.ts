import { firebase } from './config'
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { getApp } from 'firebase/app'
// import getStripe from './stripe'

// database:
const firestore = getFirestore()
// default app
const app = getApp()
//@ts-ignore

export function createUser(uid, data) {
  const coll = collection(firestore, 'users')
  const document = doc(coll, uid)
  return setDoc(document, { uid, ...data }, { merge: true })
}
//@ts-ignore

export function createMeal(data) {
  //@ts-ignore
  const coll = collection(firestore, 'meals')
  const document = doc(coll)
  return setDoc(document, data, { merge: true })
}
//@ts-ignore

export async function deleteSite(id) {
  //@ts-ignore

  firestore.collection('sites').doc(id).delete()
  const snapshot = await firestore
    //@ts-ignore

    .collection('feedback')
    .where('siteId', '==', id)
    .get()
  //@ts-ignore

  const batch = firestore.batch()
  //@ts-ignore

  snapshot.forEach((doc) => {
    batch.delete(doc.ref)
  })

  return batch.commit()
}
//@ts-ignore

export async function updateSite(id, newValues) {
  //@ts-ignore

  return firestore.collection('sites').doc(id).update(newValues)
}
//@ts-ignore

export function createFeedback(data) {
  //@ts-ignore

  return firestore.collection('feedback').add(data)
}
//@ts-ignore

export function deleteFeedback(id) {
  //@ts-ignore

  return firestore.collection('feedback').doc(id).delete()
}
//@ts-ignore

export function updateFeedback(id, newValues) {
  //@ts-ignore

  return firestore.collection('feedback').doc(id).update(newValues)
}
//@ts-ignore

export async function createCheckoutSession(uid) {
  const checkoutSessionRef = await firestore
    //@ts-ignore

    .collection('users')
    .doc(uid)
    .collection('checkout_sessions')
    .add({
      price: process.env.NEXT_PUBLIC_PRICE_ID,
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })
  //@ts-ignore

  checkoutSessionRef.onSnapshot(async (snap) => {
    const { sessionId } = snap.data()

    // if (sessionId) {
    //   const stripe = await getStripe()

    //   stripe.redirectToCheckout({ sessionId })
    // }
  })
}

export async function goToBillingPortal() {
  const functionRef = app
    //@ts-ignore

    .functions('us-central1')
    .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink')

  const { data } = await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })

  window.location.assign(data.url)
}
