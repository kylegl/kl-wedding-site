import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault('America/Los_Angeles')
  app.provide('dayjs', dayjs)
}
