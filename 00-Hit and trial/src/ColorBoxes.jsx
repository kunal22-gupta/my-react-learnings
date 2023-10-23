import "./ColorBoxes.css"
import ColorBox from "./ColorBox";
export default function ColorBoxes({colors}) {
    const noOfColors = colors.length;
    console.log(noOfColors);
    const rows = []
    for(let i = 1; i <= 5; i++){
        const columns = []
        for(let j = 1; j<= 5; j++){
            columns.push(<ColorBox colors={colors}/>)
        }
        rows.push(<div className="row">{columns}</div>)
    }
    return (
        <div className="ColorBoxes">
            {rows}
        </div>
    )
}
//     return(
//         <div className="ColorBoxes">
//             <div className="row">
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//             </div>
//             <div className="row">
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//             </div>
//             <div className="row">
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//             </div>
//             <div className="row">
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//             </div>
//             <div className="row">
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//                 <ColorBox colors={colors}/>
//             </div>
//         </div>
//     )
// }