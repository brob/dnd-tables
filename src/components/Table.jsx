import { useState, useEffect } from 'react';
import getRandom from '../utils/getRandom';


function Button({children, onClick}) {
    return (
        <button className="mt-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={onClick}>{children}</button>
    )
}

function RandomButton({list, setUpdatedList, setSelected}) {
    const newList = getRandom(list, 10);
    const handleClick = () => {
        setSelected(null);
        setUpdatedList(newList);
    }

    return (
        <Button onClick={handleClick }>Pull New Random</Button>
    )

}

function SelectRandom({currentList, setSelected}) {
    const handleClick = () => {
        const selected = Math.floor(Math.random() * currentList.length);

        setSelected(selected);
    }

    return (
        <Button onClick={handleClick}>Select Random</Button>
    )
}

export default function Table({list, title}) {
    const random = getRandom(list, 10);
    const [updatedList, setUpdatedList] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setUpdatedList(random);
    }, [])


    return (
        <>

    <div className="flex gap-2 justify-between items-center mb-3">
        <h2 className="text-xl">{title}</h2>
        <RandomButton list={updatedList} setSelected={setSelected} setUpdatedList={setUpdatedList}>Pull New List</RandomButton>
        <SelectRandom currentList={updatedList} setSelected={setSelected} />

    </div>
    <div className="overflow-x">

<table className="table-auto overflow-x-scroll  w-full border rounded-3xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th className="px-2 py-2">Roll</th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Description</th>
        </tr>
    </thead>
    <tbody>
        {updatedList.map((item, index) => {
        const selectedclassName = selected === index ? 'bg-purple-500 dark:bg-purple-800 text-white' : 'even:bg-gray-100 odd:bg-white';
        return (
            <tr className={selectedclassName} key={index}>
                <td className="px-2 py-2">{index + 1}</td>
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2">{item.description}</td>
            </tr>
        )
    })
    }
        
            

    </tbody>
</table>
</div>
</>
    )

}