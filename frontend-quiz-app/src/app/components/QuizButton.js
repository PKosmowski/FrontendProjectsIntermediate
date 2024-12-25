import Link from "next/link";

export default function QuizButton({title, icon}) {
    console.log({icon});
    return (
        <button>
            <Link href="pages/questionPage">
                {title}
                <img src={icon}/>
            </Link>
        </button>
        
    )
    
}