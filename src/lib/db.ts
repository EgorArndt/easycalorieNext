import { firebase } from './config'
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { getApp } from 'firebase/app'
// import getStripe from './stripe'

// database:
const firestore = getFirestore()
// default app
const app = getApp()

export function createUser(uid, data) {
  const coll = collection(firestore, 'users')
  const document = doc(coll, uid)
  return setDoc(document, { uid, ...data }, { merge: true })
}

export function createSite(data) {
  const site = firestore.collection('sites').doc()
  site.set(data)

  return site
}

export async function deleteSite(id) {
  firestore.collection('sites').doc(id).delete()
  const snapshot = await firestore
    .collection('feedback')
    .where('siteId', '==', id)
    .get()

  const batch = firestore.batch()

  snapshot.forEach((doc) => {
    batch.delete(doc.ref)
  })

  return batch.commit()
}

export async function updateSite(id, newValues) {
  return firestore.collection('sites').doc(id).update(newValues)
}

export function createFeedback(data) {
  return firestore.collection('feedback').add(data)
}

export function deleteFeedback(id) {
  return firestore.collection('feedback').doc(id).delete()
}

export function updateFeedback(id, newValues) {
  return firestore.collection('feedback').doc(id).update(newValues)
}

export async function createCheckoutSession(uid) {
  const checkoutSessionRef = await firestore
    .collection('users')
    .doc(uid)
    .collection('checkout_sessions')
    .add({
      price: process.env.NEXT_PUBLIC_PRICE_ID,
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })

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
    .functions('us-central1')
    .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink')

  const { data } = await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })

  window.location.assign(data.url)
}
