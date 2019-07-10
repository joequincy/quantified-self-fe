import styles from './diary'
import Diary from './diaryModel'
import QSapp from './app'
let diary = new Diary($('#diary')[0])
let app = new QSapp(diary)
diary.useApp = app

app.setupBindings()

diary.reset()
