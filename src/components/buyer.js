import React from 'react'
import { Form,FormControl,Button,Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
 class buyer extends React.Component {


  constructor(){
    super();
  
    this.state = {
      products:[],
      visible:3, }
      
      this.loadmore= this.loadmore.bind(this);
  }

componentDidMount(){
fetch('http://127.0.0.1:8000/Listing/').then((resp)=> {
  resp.json().then((result) => {
    let array=result.filter(e => e.completed===false)

    this.setState({products:array})
    
  })
})

     }  
      
     loadmore(){
       this.setState((previous)=>{
         return {visible: previous.visible + 9}
       })
     }

     

  render() {
    console.log(this.state.products)
    return (

        <div className="App"  style={{backgroundColor:"#F8F8F8", paddingTop:100}}>
   <div className="container"  >
      
              <div className='row' >
             <h1 style={{textAlign:'center',marginLeft:345, color:'	#000'}}>ARTWORKS OVERVIEW</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'34%',
    marginRight:390
}}/>

<p style={{fontSize:20,fontWeight:50,marginBottom:70,marginLeft:100}}>There are multiples Artworks you can find and also you can choose to select by checking there Images and Prices.</p>
       <Form inline >
      <br/>
      <br/><br/>    </Form>
       </div>
      

       <div className="container" style={{paddingBottom:50,marginBottom:80}}>
<div className="row"style={{margin:30}}>

{
this.state.products ?
this.state.products.slice(0,this.state.visible).map((item)=>

 <div style={{marginBottom:30}} className="col-sm-4">
 <Card style={{ width:320, margin:10}}>
 <Link to={`/PRODUCT/${item.id}`}> <Card.Img variant="top" src={item.image} style={{height:200}} /></Link>
  <Card.Body>
  <Card.Title > Title : {item.title}</Card.Title>
  <Card.Text ><text style={{fontWeight:'bold'}}>Description :</text> {item.description}</Card.Text>
    <Card.Text><text style={{fontWeight:'bold'}}>STARTING PRICE : </text>${item.start_price}</Card.Text>

    <Link to={`/PRODUCT/${item.id}`}>   <Button variant="primary" type="submit" className="btn btn-primary btn-block">BUY NOW</Button>
 </Link> </Card.Body>
</Card>

 </div>
 
)
:
<h1>api data no found</h1>

}
</div>


<div className='col-md-12'>
  {this.state.visible < this.state.products.length &&
  <button  style={{marginBottom:50}} type="button"  className="btn btn-sm btn-primary" onClick={this.loadmore}>SHOW MORE</button>
  }
</div>

 
     </div>
  
     

     </div>
  
     </div>
    );
    }
}
export default buyer;