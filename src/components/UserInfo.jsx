export default function UserInfo({ userData }) {
    return(
        <>
        <div className="flex items-end max-md:items-start justify-center gap-6">
                    <div className="bg-very-dark-gray p-2 rounded-2xl">
                        <img className="w-40 h-40 rounded-2xl" src={userData.avatar_url} alt="user avater" />
                    </div>
                    <div className="flex items-start max-md:flex-col justify-center gap-6 mb-2">
                        <div className="flex items-center justify-center gap-6 px-6 rounded-2xl py-3 bg-very-dark-blue">
                            <span className="text-gray max-lg:text-text-s font-semibold">Followers</span>
                            <div className="w-[2px] h-[36px] bg-gray rounded-md"></div>
                            <span className="text-grayish-white max-lg:text-text-s  font-semibold">{userData.followers}</span>
                        </div>
                        <div className="flex items-center justify-center gap-6 px-6 rounded-2xl py-3 bg-very-dark-blue">
                            <span className="text-gray max-lg:text-text-s  font-semibold">Following</span>
                            <div className="w-[2px] h-[36px] bg-gray rounded-md"></div>
                            <span className="text-grayish-white max-lg:text-text-s  font-semibold">{userData.following}</span>
                        </div>
                        <div className="flex items-center justify-center gap-6 px-6 rounded-2xl py-3 bg-very-dark-blue">
                            <span className="text-gray font-semibold">Location</span>
                            <div className="w-[2px] h-[36px] bg-gray rounded-md"></div>
                            <span className="text-grayish-white max-lg:text-text-s font-semibold">{userData.location || "Location is unavailable"}</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-large text-grayish-white mt-3">{userData.name}</h1>
                <p className="text-title text-grayish-white/60">{userData.bio}</p></>
    )
}