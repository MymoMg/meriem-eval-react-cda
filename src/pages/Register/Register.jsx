import styles from "./Register.module.css"
import Card from "../../components/Card";
import { useForm } from "react-hook-form"

const form = [
    { 
        label : "Pseudo",
        type : "text",
        name : "pseudo"
    },
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

export default function Register () {
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
                <button> S'inscrire </button>
            </form>
        </Card>
    );
}