'use client'
import { SetStateAction, useState } from 'react'; // Импортируем useState для управления состоянием
import styles from './regest.module.css'; // Импортируем стили
import Link from 'next/link';

export default function Mainnn() {
    const [username, setUsername] = useState(''); // Состояние для имени пользователя
    const [password, setPassword] = useState(''); // Состояние для пароля
    const [errorMessage, setErrorMessage] = useState(''); // Состояние для сообщений об ошибках
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

    const handleAddToCart = async () => {
        setErrorMessage(''); // Очищаем все предыдущие сообщения об ошибках

        try {
            const userData = { username, password }; // Создаем объект данных пользователя
            const response = await fetch('http://localhost:3001/api/auth/register', { // Замените URL-адрес вашего бэкэнда
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Пользователь успешно добавлен!');// Сообщение об успехе
                const token = await response.json()
                localStorage.setItem('token',token)
                setIsRegistrationSuccess(true);
                // Обработайте успешную регистрацию (например, перенаправление, очистка формы)
            } else {
                const error = await response.json();
                setErrorMessage(error.message); // Устанавливаем сообщение об ошибке из ответа
            }
        } catch (error) {
            console.error('Ошибка при добавлении пользователя:', error); // Записываем ошибку для отладки
            setErrorMessage('Произошла ошибка. Повторите попытку позже.'); // Общее сообщение об ошибке для пользователя
        }
    };

    const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    return (
        <div className={styles.main}>
            <div className={styles.main1}>
            </div>
            <div className={styles.main2}>
                <div className={styles.text}>NEW TO VOLUMENZEIT?</div>
                <div className={styles.text1}>Create a new account</div>
                    <input
                        type="text"
                        placeholder="     Name"
                        value={username}
                        onChange={handleUsernameChange}
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="     Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={styles.input}
                    />
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                    {isRegistrationSuccess && <p className={styles.error1}>You create account</p>}
                    <button onClick={handleAddToCart} className={styles.button}>Create Account</button>
                    <Link href={'/'}><button className={styles.button}>Home page</button> </Link>
                </div>
        </div>
    );
}