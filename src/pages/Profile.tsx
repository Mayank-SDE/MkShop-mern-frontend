

const DUMMY_PROFILE = {
    name: "mayank",
    email: "m@m.com",
    password: "sksjlsv",
    gender: "male",
    image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    dob: "1999/01/27"

}

const Profile = () => {
    return (
        <div className="container h-fit pb-[50px] sm:pb-[200px] lg:pb-[150px]">

            <div className=" flex flex-col justify-center items-center w-full ">
                <div>
                    <div className="font-bold my-8 text-lg">Profile Details</div>
                </div>
                <div className="rounded-xl dark:bg-slate-100 max-w-full  dark:text-slate-900 bg-slate-900 text-slate-100">
                    <form action="" className="m-10 max-w-full sm:w-[400px] ">
                        <div>
                            <img src={DUMMY_PROFILE.image} alt={DUMMY_PROFILE.name} className="w-[100px] rounded-full mx-auto" />
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="name">Name</label>
                                <input className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="text" id="name" value={DUMMY_PROFILE.name} />
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="email">Email</label>
                                <input className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="text" id="email" value={DUMMY_PROFILE.email} />
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="">Password</label>
                                <input className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="password" id="password" value={DUMMY_PROFILE.password} />
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <div>Gender</div>
                                <select className="rounded-xl text-slate-900 px-3 py-1 font-thin" name="gender" value={DUMMY_PROFILE.gender}>
                                    <option value="male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="dob">Date of birth</label>
                                <input className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="date" id="dob" value={DUMMY_PROFILE.dob} />
                            </div>
                            <button type="submit" className="bg-green-500 w-fit mx-auto hover:bg-green-600 px-5 mt-3 py-1 hover:scale-110 rounded-full">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Profile