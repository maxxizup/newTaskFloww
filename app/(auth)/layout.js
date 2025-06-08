export default function AuthLayout({ children }) {

    return (
        <>
            {/* Общий родительский блок */}
            <div className="h-full p-[20px] flex justify-center items-center">
                {children}
            </div>
        </>
    )
}