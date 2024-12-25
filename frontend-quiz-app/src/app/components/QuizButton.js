import Link from "next/link";


export default function QuizButton({title, icon}) {
    return (
        <button className="bg-navy w-72 rounded-lg flex items-center gap-6 p-4">
            <img className="bg-white" src={icon}/>
            {title}
        </button>
        
    )
    
}