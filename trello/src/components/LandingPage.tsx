import { useState } from "react"
import type { Task } from "../types/Tasks";
import Column from "./Column";
import TaskCard from "./TaskCard";


export default function LandingPage() {

    

    return (
        <>
            <h1 className="text-3xl font-bold mb-8">TRELLO</h1>

            <div className="flex justify-center gap-6">
                <div>
                    <Column name= "A faire"/>
                    <TaskCard/>
                </div>

                <div>
                    <Column name= "Done" />
                </div>
               

            </div>










        
        
        </>
    )
}