export default function Button({type, text, onClick,className}) {
    function getStyle(){
        switch(type) {
        case 'primary': return "rounded-[10px] py-3 px-7 primary-gradient text-white";
        default: return "rounded-[10px] py-3 px-7 primary-gradient";
        }
    }    
    return (
        <button className={`${getStyle()} ${className??""}`} onClick={onClick}>
            {text}
        </button>
    )
}