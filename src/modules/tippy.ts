import VueTippy from 'vue-tippy'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const options = {
    tippyDefaults: { delay: 50 },
  }

  app.use(VueTippy, options)
}
