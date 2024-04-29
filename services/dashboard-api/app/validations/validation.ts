import { check } from 'express-validator'
import { isDate } from '../../../../helpers/isDate'

export const validationTaskRepo = [
    check('title', 'title  es requerido').notEmpty(),
    check('status', 'status  es requerido').notEmpty(),
    check('id', 'id  es requerido').notEmpty(),
    check('createdAt', 'createdAt  es invalido').custom(isDate),
]

export const validationTaskApi= [
    check('title', 'title  es requerido').notEmpty(),
]