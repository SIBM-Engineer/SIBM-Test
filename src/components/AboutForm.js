import React, { Component } from 'react'
import sibmLogo from '../sibm-logo.png'
import tokenLogo from '../token-logo.png'
import drew from '../drew.png'
import drago from '../drago.png'
import './App.css'

import {
    AwesomeButton,
    AwesomeButtonSocial,
    } from 'react-awesome-button';

//SI BM token 
//0x983Bd79E9c57Dd3A87a1de98b9996fD1672768B2

//import Deck from "react-poker";
//import "react-poker/styles.css"
//import "react-poker/styles.css"

//TAG TO DO game contracts 
//0x5Bf93f59C29d9792Ec589EDf07713090596515a0
//new
//contract intertactions run out of gas 
//3X gas
//0x2b69318d414c4F215ac9D156C3814F1bF75De94e
// posts last winner
import RoadmapProgress from 'react-roadmap-progress';
import {UserCard} from 'react-ui-cards';

const milestones = [
  {
      title: 'Phase 1',
      version: '0.0.1',
      description: 'Just getting started...',
      complete: true,
  },
  {
      title: 'Phase 2',
      version: '1.0.0',
      description: (
          <div>
              <h2>Marketing</h2>
              <p>Gaming</p>
          </div>
      ),
      complete: true,
  },
];

export const Founder = () => <UserCard
float
href ='https://www.linkedin.com/in/andrew-czarnecki-7a7371190/'
header = {sibmLogo}
avatar = {drew}    
name = 'Andrew Czarnecki'
positionName = 'Founder & Core Developer'
stats = {[
  {
    name: 'Engineering',
    value: "Field"
  },
  {
      name: 'Years',
      value: '4'
  }
]}
/>

export const Founder2 = () => <UserCard
float
href =''
header = {sibmLogo}
avatar = {drago}    
name = 'Joseph Kasneci'
positionName = 'Digital intern'
stats = {[
  {
    name: 'Insurance',
    value: "Field"
  },
  {
      name: 'Years',
      value: '3'
  }
]}
/>

//
//<RoadmapProgress milestones={milestones} />

class AboutForm extends Component {
        
        constructor(props) {
          super(props);
          this.state = { 
              gamePrize : "",
              lastWinner : "",
              accountDeposited : "",
              contractName : "",
              GameContract : "",
              gameAddress : "",
              game_ABI: ""
            };
          //  this.rollDoneCallback1 = this.rollDoneCallback1.bind(this);
          //  this.rollDoneCallback2 = this.rollDoneCallback2.bind(this);
        }
        //////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////
      //add black jack logic
        //////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////// 
        componentDidMount() {
          //localStorage.setItem('Timer', 0)
          //this.onFinished = this.onFinished.bind(this);
        }
        
        async componentWillMount() {
        }

        async componentWillUnmount() {
          clearInterval(this.interval);
        }
        /*
        SIBM : Smart Insurance Burn Mechanism will be launched on PancakeSwap and sibmtransfer.nft when the count down completes. 
        NFT's will be mintable for low fees until 1GB of IPFS storage has been reached.

        */
        render() {
            //console.log(new Date());
          return (
            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                //this.setState({rollTime : this.state.tokenAmount})
                this.setState({lastNumber : 0})
                this.setState({lastNumber2 : 0})        
                console.log("rollTime - ",this.state.rollTime);
                //this.props.sendTokens(this.state.tokenAmount, this.state.gameAddress)
                }}>
               <head><script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script> </head>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <h1><b> About </b></h1>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>  
            <ul>
              <li> NFT Mint & Marketplace coming in April 2022</li>
              <li> NFT dividends are in developement (auto-staking 50% of mint price)</li>
            </ul> 
            </div>
            <nft-card
          contractAddress="0x89c9c2e4ebeff6903223b062458e11e56636f838"
          tokenId="8962">
          </nft-card>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left"
            }}>
            <Founder/>
            <Founder2/>
            </div>
           </form>
          );
        }
      }
      
      export default AboutForm;
  
     

      