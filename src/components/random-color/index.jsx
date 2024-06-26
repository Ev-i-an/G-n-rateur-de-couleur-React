import { useEffect } from "react";

export default function RandomColor(){
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000");

    function handleCreateRandomHexColor(lenght){
        return Math.floor(Math.random()*lenght)

        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i=0; i=6; i++){
            hexColor += hex[RandomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor(){
        const r = RandomColorUtility(256);
        const g = RandomColorUtility(256);
        const b = RandomColorUtility(256);

        setColor(`rgb$(r),$(g), $(b)`);
    }

    useEffect(()=> {
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
        
    }, [typeOfColor]);
   

    return (
        <div 
        style={{
            width: "100vh",
            height:"auto",
            background: color,
        }}
        >
        <button onClick={()=> setTypeOfColor('hex')}>Créer couleur HEX </button>
        <button onClick={()=> setTypeOfColor('rgb')}>Créer couleur RGB </button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Générer une couleur aléatoire</button>
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            color:" #fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: 'column',
            gap: '20px'

        }}
        >
            <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
            
            <h1>{color}</h1>
        </div>
        </div>
    )
}