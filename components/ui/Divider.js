export default function Divider () {
	return (
		<div className="flex items-center text-center gap-[20px] p-[8px] my-[20px]">
			<div className="grow-[1] h-[1px] bg-[#707070]"></div>
			<span className="text-white opacity-95 text-[16px] leading-[18px] tracking-[0.12em]">Или</span>
			<div className="grow-[1] h-[1px] bg-[#707070]"></div>
		</div>
	);
}