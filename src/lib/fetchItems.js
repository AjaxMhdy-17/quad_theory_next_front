


const fetchItems = async () => {
    const res = await fetch(`http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`,{ cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default fetchItems