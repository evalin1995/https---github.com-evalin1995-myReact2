
function ShowCity(){
return (
    <>
    {(async () => {
        const data = await axios.get('https://github.com/evalin1995/myReact/blob/main/my-react-app1/public/json/F-C0032-001.json');
        const { location } = data.data.swaopendate.dataset;
        // console.log(location);
        location.map((city)=>{
          return <div key={city.locationName}>{city.locationName}</div>
        })
      })
    }
    <p>dity</p>
    </>
    
)
}
export default ShowCity