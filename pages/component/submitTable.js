import {kpiValueMapper} from '../../public/api/helper.js'

export default function SubmitTable(props){
    const kpiMap = kpiValueMapper(props.data)
    const handleChange = (index) => e => {
        const path = kpiMap[index];
        console.log(index, path);
        props.score.kraAreas[path[0]].kras[path[1]].kpis[path[2]].selfScore = e.target.value;
        props.setScore({...props.score});
        
    }
    return (
<>
        <div className='mt-8 bg-white p-8 rounded-md shadow-md  text-xs w-11/12'>
        <table className = "table-auto">
            <thead className='border-b-2'>
                <tr>
                    <th>KRA AREAS</th>
                    <th >KRA</th>
                    <th >KPIs</th>
                    <th >Target</th>
                    <th >COMPLETION DATE</th>
                    <th >TRACKING</th>                    
                    <th >SELF SCORE %</th>
                    <th > LINE HEAD SCORE</th> 
                    <th >3RD PARTY SCORE/H.O.D</th>
                    <th >WEIGHT</th>
                    <th >RATING (1-4)</th>
                    <th >WEIGHT X RATING</th>

                </tr>
            </thead>
            <tbody>
                
                {props.data!==undefined?props.data.map((data,index)=>{
                    return(
                    <tr className='text-center border-b-2'>
                    <td >{data[0]}</td>
                    <td>{data[1]}</td>
                    <td>{data[2].name}</td>
                    <td>{data[2].target}</td>
                    <td>{data[2].completionPeriod}</td>
                    <td>{data[2].tracking}</td>
                    <td><input className="border text-center h-6" type ="number" onChange={handleChange(index)} value={data[2].selfScore}/></td>
                    <td>{data[2].LineHeadScore}</td>
                    <td>{data[2].thirdPartyScore}</td>
                    <td>{data[2].weight}</td>
                    <td>{data[2].Rating}</td>
                    <td>{data[2].WeightbyRating}</td>
                    </tr>)

                }):<></>}
            </tbody>
        </table>

        

    </div>
</>
    )
}