export default function ColorBox({ colors }) {
 return (
  <div className="ColorBoxesContainer">
    {colors.map((color, index) => (
        <div className="ColorBox"
        key={index}
        style={{ backgroundColor: color }}
        onClick={(event) => {const randomIndex = Math.floor(Math.random() * colors.length);
            event.target.style.backgroundColor = colors[randomIndex];
        }}>

        </div>
    ))}
    </div>
    
);

}