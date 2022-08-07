import { createContext, useContext, useState } from 'react'

type TForm = {
    firstName: string
    lastName: string
}

type TContextData = {
    formData: TForm
    handleChangeFormData: (newData: Partial<TForm>) => void
}

interface IProps {
    children: React.ReactNode | React.ReactNode[]
}

const FormContext = createContext<TContextData>({
    formData: {
        firstName: '',
        lastName: '',
    },
    handleChangeFormData: (newData: Partial<TForm>) => {},
})

export const useFormData = () => useContext(FormContext)

const FormCotextProvider: React.FC<IProps> = ({ children }) => {
    const [formData, setFormDate] = useState<TForm>({
        firstName: '',
        lastName: '',
    })

    const handleChangeFormData = (newData: Partial<TForm>) =>
        setFormDate(prevState => ({
            ...prevState,
            ...newData,
        }))

    return (
        <FormContext.Provider value={{ handleChangeFormData, formData }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormCotextProvider
