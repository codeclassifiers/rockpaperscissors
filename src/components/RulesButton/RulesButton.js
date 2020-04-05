import React from 'react';
import './RulesButton.css';
import basicRules from '../../assets/images/basicRules.png'
function RulesButton(props) {
    const renderRulesImage = () =>{
        if(props.gameType === 'basic'){
          return(
              <div className="rulesImageContainer hv-center">
                  <img src={basicRules} className="basicRulesImage" alt={'basicRulesImage'}/>
              </div>
          )      
        } 
    }
    return(
        <div className="row d-flex justify-content-center mt-4">
            <button type="button" className="btn rulesButton" data-toggle="modal" data-target="#rulesModal">
                RULES
            </button>
            <div className="modal fade" id="rulesModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content modalContainer">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Rules</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body modalBodyContainer hv-center">
                    {renderRulesImage()}
                </div>
                <div className="modal-footer hv-center">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RulesButton;