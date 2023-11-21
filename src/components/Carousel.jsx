import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  increaseC=()=>{
    if(this.state.count < 2){
      this.setState({count:this.state.count+=1})
    }  
  }
  decreaseC=()=>{
    if(this.state.count > 0){
      this.setState({count:this.state.count-=1})
    }
  }

  render(){
  console.log(images);
    return (
      <div className="carouselContainer">
          <div className="leftArrow" onClick={this.decreaseC}>
            <ArrowBackIosIcon/>
          </div>
          <img src={images[this.state.count].img} alt="" />
          <div className="rightArrow" onClick={this.increaseC}>
            <ArrowForwardIosIcon/>
          </div>
      </div>
    )
  }
}

export default Carousel;