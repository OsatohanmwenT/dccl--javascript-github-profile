export default function Input({ search, handleUsernameChange }) {

    const handleInputChange = (e) => {
        const value = e.target.value;
        handleUsernameChange(value);
    }

    return(
        <input type="text" value={search} onChange={handleInputChange} placeholder="username" 
        className="py-4 pl-10 pr-4 text-grayish-white rounded-lg mx-auto min-w-[50vw]
         bg-very-dark-gray bg-search-icon bg-no-repeat
          bg-[center_left_10px]" />
    )
} 