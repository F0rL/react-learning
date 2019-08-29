import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

export const getInputChangeAction = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (id) => ({
  type: DELETE_TODO_ITEM,
  id
})