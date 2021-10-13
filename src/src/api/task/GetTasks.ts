import {api} from '../common/client'
import {Task} from '../../type/interfaces/task'
import axios from 'axios'

export const getTasks =  () => {
    return api.get<{tasks: Task[]}>("/tasks")
  }
  