import React, { Component } from 'react';
import './framestyle.css' ;



class Dataframe extends Component {
          htype=[ "Physcial","Virtual" ];
          vtype=["VMWARE","KVM","Hyper-V","None"];
          ostype=["Windows 2012","Windows 2016","RedHat 8","RedHat 7","Centos","Ubuntu"];
    state = {  
          
          h_type:"Choose",
          v_type:"Choose",
          o_type:"Choose",
          mname:"",
          fqdn:"",
          cpu:"",
          ram:"",
          disk:""

          



    }

    componentWillReceiveProps(nextProps){

        
    }
    render() { 
        return (  

              <div>
                  <div className="dataBox" >   
                      <label id="ilabel">Machine Type</label>
                      <select id="htype" value={this.state.h_type} onChange={e=>this.setState({h_type:e.target.selected})}>
        {this.htype.map((i)=>{  return <option value={i}>{i}</option> })}   
        <option selected disabled hidden>Choose </option>
                      </select>
                      <label id="ilable">HyperVisor Type</label >
                      <select id="vtype" value={this.state.v_type} onChange={e=>this.setState({v_type:this.target.selected})} >
        {this.vtype.map((i)=>{  return <option value={i}>{i}</option> })}
        <option selected disabled hidden>Choose </option>   
                      </select>
                     <label id="ilabel">Machine Name</label>
                     <input type="text" value={this.state.mname}  onChange={e=>{this.setState({mname:e.target.value});}}></input>
                      <label id="ilabel">DNS Name(FQDN)</label>
                      <input type="text" value={this.state.fqdn} onChange={e=>{this.setState({fqdn:e.target.value});}} ></input>
                      <label id="ilabel"  >CPU</label>
                      <input type="text" value={this.state.cpu} onChange={e=>{this.setState({cpu:e.target.value});}} ></input>
                      <label id="ilabel">RAM</label>
                      <input type="text" value={this.state.ram} onChange={e=>{this.setState({ram:e.target.value});}}></input>
                      <label id="ilable">Disk</label>
                      <input type="text" value={this.state.disk} onChange={e=>{this.setState({disk:e.target.value});}}></input>
                      <label id="ilabel;">Operating System</label>
                      <select id="ostype" value={this.state.o_type} onChange={e=>this.setState({o_type:this.target.select})}> 
                       {this.ostype.map((i)=>{ return <option id={i}>{i} </option>  })}
                       <option selected disabled hidden>Choose </option>

                      </select>

       
                   


                  </div>
                  <div className="separator_one"> &nbsp; </div>
                  
                  <div className="btgrp_one">   <div> <button className="btgrp_one_m1">Add Machine </button> </div>   <div> <button className="btgrp_one_m2" > Reset </button> </div> </div>
                


              </div>


        );
    }
}
 
export default Dataframe;