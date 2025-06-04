import NavPanel from "@/components/ui/NavPanel";
import WSHeader from "@/components/workspace__components/WSHeader";

export default function TaskFloww() {
	return (
		<div className='h-full p-[20px] flex gap-[40px]'>
			<NavPanel/>
			<div className='h-full w-full py-[20px] flex flex-col justify-between gap-[40px]'>
				<WSHeader />
				<div className='w-full h-full flex flex-col gap-[45px]'>
					Hello
				</div>
			</div>
		</div>
	);
}