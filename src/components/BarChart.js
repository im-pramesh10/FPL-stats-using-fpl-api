import { Bar } from "react-chartjs-2"
import { chart as chartJS} from "chart.js/auto"

const BarChart = ({ chartdata }) => {
    return ( 
            <Bar data={chartdata}/>      
     );
}
 
export default BarChart;