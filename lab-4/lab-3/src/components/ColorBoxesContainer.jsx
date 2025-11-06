import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
    return(
        <div className="ColorBoxedContainer">
        {colors.map((color, index)=>{
            return <ColorBox key={index} color={color} colors={colors}/>;
            
            })}
        </div>
        );
    }
    

//i cant figure out how to make it to show only grid 5*5git