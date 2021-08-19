import React from 'react'
import { useMutation } from '@apollo/client'
import { Button } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { CREATE_USER } from '../mutations'

const Actions = () => {

    const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

    return (
        <Formik
            initialValues={{ username: '', age: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Поле не может быть пустым'
                } 
                if (!values.age) {
                    errors.age = 'Поле не может быть пустым'
                } 
                return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                createUser({
                    variables: {
                        username: values.username,
                        age: values.age
                    }
                })
                setSubmitting(false)
                resetForm()
            }}
        >
            {({ isSubmitting }) => (
                <Form className='form'>
                    <Field type="text" name="username" className='input' placeholder='Введите имя' />
                    <ErrorMessage name="username" component="div" className='err' />
                    <Field type="number" name="age" className='input' placeholder='Введите возраст' />
                    <ErrorMessage name="age" component="div" className='err' />
                    <Button type="submit" variant="outlined" disabled={isSubmitting} className='btn'>Отправить</Button>
                </Form>
            )}
        </Formik>
            
    )
}

export default Actions
