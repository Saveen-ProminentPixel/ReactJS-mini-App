import { useState } from "react"


function Accordian({items}){
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index: number) => {
        if(expandedIndex === index){
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    }


    const renderedItems = items.map((item: {id: string; label:string, content: string},index: number)=> {

        const isExpanded = index === expandedIndex;
        
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-200 border-b border-black items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                </div>
                {isExpanded && <div className="border-b p-5 bg-gray-100">{item.content}</div>}
            </div>
        )
    })

    return (
        <div>
            {renderedItems}
        </div>
    )

}

export default Accordian;