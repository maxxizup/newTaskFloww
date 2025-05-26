import MyButton from "@/components/ui/MyButton";
import Link from "next/link";

export default function PsychoForm() {
	return (
		<form className='mt-[40px] px-[8px] flex flex-col gap-[10px]' action="">
			<select className='h-[44px] w-full bg-[#707070] text-[#B0B0B0] rounded-[8px] px-[20px] text-[13px]' name="" id="">
				<option selected={true} disabled={true} className='h-[44px] rounded-[8px] text-[#B0B0B0]' value="value1">Какова ваша сфера деятельности?</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Студент</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Фрилансер</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Стартапер</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Офисный сотрудник</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Творческая профессия</option>
			</select>
			<select className='h-[68px] w-full bg-[#707070] text-[#B0B0B0] rounded-[8px] px-[20px] text-[13px]' name="" id="">
				<option selected={true} disabled={true} className='h-[44px] rounded-[8px] text-[#B0B0B0]' value="value1">Как вы обычно справляетесь с большим списком задач?</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Планирую каждый шаг - разбираю на подпункты, ставлю сроки</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Делаю что-то сразу - начинаю с простого, чтобы “разогнаться”</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Жду вдохновения - работаю только когда есть настроение</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Оптимизирую процесс - ищу систему, чтобы сделать быстрее</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Выбираю главное - 2-3 задачи, остальное подождет</option>
			</select>
			<select className='h-[68px] w-full bg-[#707070] text-[#B0B0B0] rounded-[8px] px-[20px] text-[13px]' name="" id="">
				<option selected={true} disabled={true} className='selected h-[44px] rounded-[8px] text-[#B0B0B0]' value="value1">Что вас чаще всего выбивает из рабочего ритма?</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Страх ошибки - если не уверен в идеальном результате, откладывю</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Желание успеть все - хватаюсь за 10 дел, завершаю 2</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Отсутствие драйва - не могу работать “через силу”</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Технические сложности - трачу время на настройку инструментов</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Перегрузка - если задач слишком много, игнорирую список</option>
			</select>
			<select className='h-[44px] w-full bg-[#707070] text-[#B0B0B0] rounded-[8px] px-[20px] text-[13px]' name="" id="">
				<option selected={true} disabled={true} className='selected h-[44px] rounded-[8px] text-[#B0B0B0]' value="value1">Как вы реагируете на срыв сроков?</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Паникую - мне важно соблюдать дедлайны любой ценой</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Работаю в аврале - ночью, но успеваю</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Переношу - если нет настроения, значит, время еще не пришло</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Анализирую - ищу способ избежать этого в будущем</option>
				<option className='h-[44px] rounded-[8px] text-white' value="value1">Не переживаю - сроки можно подвинуть</option>
			</select>
			<select className='h-[68px] w-full bg-[#707070] text-[#B0B0B0] rounded-[8px] px-[20px] text-[13px]' name="" id="">
				<option selected={true} disabled={true} className='selected h-[44px] rounded-[8px] text-white' value="value1">Выберите задачи, которые вы будете решать в TaskFloww </option>
			</select>
			<Link href={'/createDash'}>
				<MyButton
					type='submit'
					width={414}
					height={44}
				>
					Продолжить настройку
				</MyButton>
			</Link>
		</form>
	)
}