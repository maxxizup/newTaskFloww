import MyInput from "@/components/ui/MyInput";
import MyButton from "@/components/ui/MyButton";
import Link from "next/link";

export default function RegistrationForm () {
	return (
		<form className='p-[8px] flex flex-col gap-[8px]'>
			<div className='w-full flex justify-between'>
				<MyInput width={'197'} height={'48'} type={'text'} placeholder={'Имя'} />
				<MyInput width={'197'} height={'48'} type={'text'} placeholder={'Фамилия'} />
			</div>
			<MyInput height={'44'} type={'email'} placeholder={'Введите почту'} />
			<MyInput height={'44'} type={'password'} placeholder={'Введите пароль'} />
			<MyInput height={'44'} type={'password'} placeholder={'Повторите пароль'} />
			<p className='mt-[2px] text-[10px] text-[#B0B0B0]'>Должно быть не меньше 8 символов.</p>
			<Link href={'/introduce'}>
				<MyButton
					height={44}
					width={414}
					fontSize={16}
					type={'submit'}
				>
					Зарегистрировать аккаунт
				</MyButton>
			</Link>
		</form>
	);
}