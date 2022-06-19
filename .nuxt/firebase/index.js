import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'
import storageService from './service.storage.js'

const appConfig = {"apiKey":"AIzaSyCcMOMmOJycpJu-yhDfjBcpFoNtIzKt5VM","authDomain":"fittler-4166f.firebaseapp.com","projectId":"fittler-4166f","storageBucket":"fittler-4166f.appspot.com","messagingSenderId":"21719243757","appId":"1:21719243757:web:50f2255c62569eb29ba5e4","measurementId":""}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),
    storageService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),
      storageService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore,
    storage
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore,
    storage: storage
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}