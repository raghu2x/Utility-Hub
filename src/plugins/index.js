import '@/css/app.css'
import '@/css/style.css'

import './font-awesome.js'
import router from '@/router'

export default {
  install(app) {
    app.use(router)
  },
}
