import styles from "./Login.module.css"
import Card from "../../components/Card";
import { useForm } from "react-hook-form"

const form = [
    { 
        label : "Email",
        type : "email",
        name : "email"
    },
    { 
        label : "Mot de Passe",
        type : "password",
        name : "pwd"

    }
    
]

export default function Login () {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                {form.map((field, index) => (
                    <div key={index} className={styles.formGroup}>
                        <label>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            className={styles.formControl}
                            {...register(field.name)}
                        />
                    </div>
                ))}
                <button> Connexion </button>
            </form>
        </Card>
    );
}