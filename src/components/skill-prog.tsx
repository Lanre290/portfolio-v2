
interface prog{
    text:string;
    progress:number;
}

function Prog(data:prog){
    return(
        <div className="flex flex-col gap-y-1 py-4 hover:bg-gray-200 hover:bg-opacity-50 cursor-pointer">
            <div className="flex flex-row justify-between">
                <h3 className="text-gray-50">{data.text}</h3>
                <h3 className="text-gray-50">{data.progress}%</h3>
            </div>
            <div className="bg-primary-color-light h-1 rounded-md mx-auto w-full">
                <div className="h-full w-3/4 rounded-md bg-primary-color" style={{width: `${data.progress}%`}}></div>
            </div>
        </div>
    )
}

export default Prog