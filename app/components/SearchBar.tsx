export const SearchBar = () => {
    return (
        <div className="max-w-65 flex-1 relative">
            <i className="px-3 absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <svg className="h-3 text-[#9ca3af]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
            </i>
            <input className="w-full h-10 pl-8 text-sm border border-[#d1d5db] rounded-md focus:ring-2 focus:ring-[#6b7280a1] focus:border-none focus:outline-none" type="text" name="searchInp" id="searchInp" placeholder="Search for recipes..." />
        </div>
    );
}