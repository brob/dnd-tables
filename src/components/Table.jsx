import { useState } from 'react';
import getRandom from '../utils/getRandom';


function RandomButton({list, setUpdatedList}) {
    const newList = getRandom(list, 10);
    return (
        <button onClick={function() {setUpdatedList(newList) } }>Pull New Random</button>
    )

}

function SelectRandom({currentList, setSelected}) {
    console.log({currentList, setSelected})
    const handleClick = () => {
        const selected = Math.floor(Math.random() * currentList.length);

        setSelected(selected);
    }

    return (
        <button onClick={handleClick}>Select Random</button>
    )
}

export default function Table({list}) {
    const random = getRandom(list, 10);
    const [updatedList, setUpdatedList] = useState(random);
    const [selected, setSelected] = useState(null);

    console.log({setSelected})
    return (
        <>
        <RandomButton list={updatedList} setUpdatedList={setUpdatedList}>Pull New Random</RandomButton>
        <SelectRandom currentList={updatedList} setSelected={setSelected} />
<table className="table-auto overflow-x-auto  w-full border rounded-3xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th className="px-2 py-2">Roll</th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Description</th>
        </tr>
    </thead>
    <tbody>
        {updatedList.map((item, index) => {
            console.log({selected, index})
        const selectedClass = selected === index ? 'bg-gray-300 dark:bg-gray-800' : '';
        return (
            <tr className={selectedClass} key={index}>
                <td className="px-2 py-2">{index + 1}</td>
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2">{item.description}</td>
            </tr>
        )
    })
    }
        
            

    </tbody>
</table>
</>
    )

}