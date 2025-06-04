"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import MyInput from "@/components/ui/MyInput"
import MyButton from "@/components/ui/MyButton"

export default function RegistrationForm() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")
	const router = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			setError("Пожалуйста, заполните все поля.")
			return
		}

		if (password.length < 8) {
			setError("Пароль должен содержать минимум 8 символов.")
			return
		}

		if (password !== confirmPassword) {
			setError("Пароли не совпадают.")
			return
		}

		const newUser = { firstName, lastName, email, password }

		const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")
		const userExists = existingUsers.some((user) => user.email === email)

		if (userExists) {
			setError("Пользователь с таким email уже существует.")
			return
		}

		localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]))
		localStorage.setItem("currentUser", JSON.stringify(newUser))

		router.push("/introduce")
	}

	return (
		<form className='p-[8px] flex flex-col gap-[8px]' onSubmit={handleSubmit}>
			<div className='w-full flex justify-between'>
				<MyInput
					width={'197'}
					height={'48'}
					type='text'
					placeholder='Имя'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<MyInput
					width={'197'}
					height={'48'}
					type='text'
					placeholder='Фамилия'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</div>
			<MyInput
				height={'44'}
				type='email'
				placeholder='Введите почту'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<MyInput
				height={'44'}
				type='password'
				placeholder='Введите пароль'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<MyInput
				height={'44'}
				type='password'
				placeholder='Повторите пароль'
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>

			<p className='mt-[2px] text-[10px] text-[#B0B0B0]'>Должно быть не меньше 8 символов.</p>
			{error && <p className="text-red-500 text-[12px]">{error}</p>}

			<MyButton
				height={44}
				width={414}
				fontSize={16}
				type='submit'
			>
				Зарегистрировать аккаунт
			</MyButton>
		</form>
	)
}