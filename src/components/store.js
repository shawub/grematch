import { init } from '@rematch/core'
import * as models from './model'

const store = init({
  models,
})

export default store
