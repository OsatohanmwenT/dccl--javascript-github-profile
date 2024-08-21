import nestIcon from "../assets/images/Nesting.svg"
import chieldIcon from "../assets/images/Chield_alt.svg"
import starIcon from "../assets/images/Star.svg"

export default function Card(item) {
    return(
        <div className="flex flex-col justify-center gap-4 p-6 rounded-xl gradient">
                    <a href={item.clone_url} target="blank">
                        <h2 className="text-title text-grayish-white">{item.name}</h2>
                    </a>
                    <p className="text-text-b text-grayish-white">{item.description || "No description available."}</p>
                    <div className="flex items-center justify-start gap-5">
                    {item.forks &&
                            <div className="flex items-center justify-start gap-2">
                                <img src={chieldIcon} alt="chield_alt icon" />
                                <span className="text-text-s text-grayish-white font-semibold">MIT</span>
                            </div>
                        }
                        {item.forks &&
                            <div className="flex items-center justify-start gap-2">
                                <img src={nestIcon} alt="nesting icon" />
                                <span className="text-text-s text-grayish-white font-semibold">{item.forks}</span>
                            </div>
                        }
                        {item.watchers && item.watchers > 0 &&
                            <div className="flex items-center justify-start gap-2">
                                <img src={starIcon} alt="star icon" />
                                <span className="text-text-s text-grayish-white font-semibold">{item.watchers_count}</span>
                            </div>
                        }
                        <div></div>
                    </div>
                    </div>
    )
}