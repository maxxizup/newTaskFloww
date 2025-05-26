const MyButton = ({ children, width, height, fontSize, ...props }) => {
	return (
		<button
			style={{ width: `${width}px`, height: `${height}px`, fontSize: `${fontSize}px` }}
			className="bg-[#6361FF] text-white text-opacity-95 rounded-[4px] flex justify-center items-center transition ease-linear cursor-pointer hover:bg-[#8A89FF] active:bg-[#6A69DF] disabled:bg-[#B1B0FF]"
			{...props}
		>
			{children}
		</button>
	);
};

export default MyButton;