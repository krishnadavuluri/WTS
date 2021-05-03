import Chart from "react-apexcharts";
export function FinalTry(props) {
  return(
     <div>
         <Chart options={props.options} series={props.series} type="bar" height={props.height} width={'100%'}/>
     </div>
  );
}