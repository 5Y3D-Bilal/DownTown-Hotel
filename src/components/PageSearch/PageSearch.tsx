'use client'
import { useState } from 'react';
import Search from '../CLIENT/Search/Search';

type PageSearchProps = {

};

const PageSearch: React.FC<PageSearchProps> = () => {
    const [RoomTypeFilter, setRoomTypeFilter] = useState('')
    const [searchQuery, setSearchQuery] = useState(' ')

    return <div>
        <Search RoomTypeFilter={RoomTypeFilter} searchQuery={searchQuery} setRoomTypeFilter={setRoomTypeFilter} setSearchQuery={setSearchQuery} />
    </div>
}
export default PageSearch;