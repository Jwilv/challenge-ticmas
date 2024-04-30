import { check } from 'express-validator'
import { isDate } from '../../../../helpers/isDate'

export const validationTask = [
    check('title', 'title  es requerido').notEmpty(),
    check('status', 'status  es requerido').notEmpty(),
    check('id', 'id  es requerido').notEmpty(),
    check('createdAt', 'createdAt  es invalido').custom(isDate),
]

export const validationSimpleTask = [
    check('title', 'title  es requerido').notEmpty(),
]