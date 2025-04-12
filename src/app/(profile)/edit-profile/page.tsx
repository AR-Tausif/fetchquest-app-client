export default function ProfilePage() {
    return(
        <div className="flex flex-col gap-4 h-screen bg-gray-100">
            
                <label htmlFor="name">Name</label>
                <input type="text" className="border border-gray-900 p-4 rounded-md text-xl" defaultValue={"Tausif Ahmed"} />
            
        </div>
    )
}