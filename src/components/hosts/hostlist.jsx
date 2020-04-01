import React, { Component } from 'react';
class HOSTLIST extends Component {
    state = {
        hosts :[
        {image : "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:110509?quality=0.8&format=jpg",name:"jayanthi",Description:"She a good phylosopher. you can get good suggestions from her for your life,$3$#$#$# $@#$@$# $#$@$@# @$#@$#@ $#$@$# $#%$#%$# $#$$@$#",rating:4,price:100},
        {image : "https://specials-images.forbesimg.com/imageserve/1198910332/960x0.jpg?fit=scale",name:"Akshata",Description:"$3$#$#$# $@#$@$# $#$@$@# @$#@$#@ $#$@$# $#%$#%$# $#$$@$#",rating:4,price:100},
        {image : "https://c.tribune.com.pk/2017/07/1468415-zayn-1501217623.jpg",name:"Sachin",Description:"He a good phylosopher. you can get good suggestions from him for your life",rating:4,price:100},
        {image : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",name:"Kumar",Description:"Good",rating:4,price:100},
        ]
    }
    render() { 
        return    <ul>
            {this.state.hosts.map((hosts,i) => {
            return (
                <li key={i}  style={{width: "30%",float:'left',margin:10,height:500}}>
                <div className="card" >
                <img className="card-img-top" src={hosts.image} alt="Card image cap" style={{width: "100%",height:200}}/>
                <div className="card-body">
                    <h5 className="card-title">{hosts.name} </h5>
                    <p className="card-text">Rs. {hosts.price} /min</p>
                    <p className="card-text">{hosts.Description}</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link btn btn-primary">Request Meeting</a>
                    <a href="#" className="card-link btn btn-primary">Request Chat</a>
                </div>
                </div>
                </li>
                )



            })}
        </ul>;
            }
}
 
export default HOSTLIST;
