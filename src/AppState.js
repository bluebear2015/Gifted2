import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},

  gifts: [],

  /** @type {import('./models/Account.js').Account} */
  account: {}
})
