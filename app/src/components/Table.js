const React=require('react');

class Cell extends React.Component{
    render(){
        var data=this.props.data;
        return( <td>{data}</td> );
    }
}
class Row extends React.Component{
    const lat;
    const long;
    componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
      lat=position.coords.latitude;
      long=position.coordslongitude;
    })
  }
    render(){
      var object=this.props.object;
      var arr=(Object.keys(object)).map(obj=>{
        let rObj={};
        const dist=Math.sqrt(Math.pow((lat-obj.lat),2)+Math.pow((long-obj.long),2))
        if(obj.name===this.props.shopName)
        {
          var gettin={"key":obj.key,
                      "name":obj.name,
                      "dist":dist}
          return gettin;
                    }
      })
        console.log(object);
        const row=arr.map((key,i) => <Cell key={i} data={object[key]} />)
        return( <tr>{row}</tr> );
    }
}
export default class Table extends React.Component{
    const name;
    constructor(){
        super();
        this.state={
            error:null,
            isLoaded:false,
            data:[]
            const shopName;
         };
    }
    componentDidMount(){
      this.setState({shopName=name});
        fetch("http://localhost:3500/shops",{method:'GET'})
        .then(res=>res.json())
        .then(
            (result)=>{  this.setState({isLoaded:true,data:result});  },
            (error)=>{  this.setState({isLoaded:true,error});}
        );
    }
    render: function(){
        const {error,isLoaded,data}=this.state;
        if(error){  return(<div>Error</div>);   }
        else if(!isLoaded){ return(<div>Loading</div>); }
        else
        {
            const array=this.state.data;
            const rows=array.map((obj,i) => <Row key={i} object={obj}/>);
            return(
              {
                 <table>
                      <tbody>{rows}</tbody>
                    </table>

                }
            );
        }
    }
}
