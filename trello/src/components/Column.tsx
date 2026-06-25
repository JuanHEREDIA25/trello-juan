
import type { ColumnProps } from "../types/Tasks"

export default function Column({name}: ColumnProps) {

    return (

        <>
            <div className="w-80 bg-gray-100 p-4 rounded-xl">
                <h2 className="font-bold mb-4">{name}</h2>
            </div>
        
        </>
    )
}