import styles from './diary'
import Diary from './diaryModel'
import QSapp from './app'
let diary = new Diary($('#diary')[0])

$('#showAddFoodButton').on('click', null, {type: 'Food'}, QSapp.showAddForm)
$('#showAddMealButton').on('click', null, {type: 'Meal'}, QSapp.showAddForm)

diary.initializeMeals(QSapp.getAllMeals);
