export default function MyInput ({width, height,...props}) {
	return <input
		style={{ width: `${width}px`, height: `${height}px`}}
		className='bg-[#707070] rounded-[8px] text-white text-[16px] px-[20px] focus:outline-none'
		required={true}
		{...props}
	/>
}