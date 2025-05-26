import MyInput from "@/components/ui/MyInput";
import MyButton from "@/components/ui/MyButton";
import Link from "next/link";

export default function LoginForm() {
	return (
		<form className='p-[8px] flex flex-col gap-[8px]'>
			<MyInput
				height={44}
				type="email"
				placeholder={'Введите вашу почту'}
			/>
			<MyInput
				height={44}
				type="password"
				placeholder={'Введите пароль'}
			/>
			<div className='text-white my-[20px] flex flex-col items-center opacity-85 hover:opacity-75 cursor-pointer'>
				<p className=''>Забыли пароль?</p>
				<p className=''>Продолжить с помощью кода</p>
			</div>
			<Link href={'/introduce'}>
				<MyButton
					height={44}
					width={414}
					fontSize={16}
					type="submit"
				>
					Войти
				</MyButton>
			</Link>
		</form>
	);
}