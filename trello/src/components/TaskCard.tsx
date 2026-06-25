import { useState } from "react"


export default function TaskCard() {

    const [taches, setTaches] = useState<string[]>([])
    const [newTache, setNewTache] = useState("")

    const handleChange = (e) => {
        setNewTache(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setTaches([...taches, newTache])
        setNewTache("")
    }

    const handleDelete= (tacheASupprimer: String) => {
        const tachesDelete = [...taches]
        const updateTaches = tachesDelete.filter(tache=> tache !==tacheASupprimer)
        setTaches(updateTaches)


    }



    return (
        <>
            <div className="w-80 bg-white p-3 rounded-lg shadow">
                <form onSubmit= {handleSubmit}>
                    <input type="text" 
                    value= {newTache}
                    placeholder="tache"
                    onChange= {handleChange}
                    />

                    <button
                    type="submit"
                    >Ajouter</button>

                </form>
                <div>
                    <ul>
                        {taches.map((tache)=>(
                        <li className="flex gap-2 ml-4">
                        <button
                        onClick= {()=>handleDelete(tache)}
                        >
                        X</button>                                               
                            {tache}
                        </li>
                        ))}
                    </ul>
                </div>
             
            </div>
        
        </>
    )
}