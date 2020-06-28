import React from 'react'
import './AdminCardSingle.css'

export default function CardPackTop(props) {
    return (
        <div class="container">
        <div class="row">
        <div class="col-md-3">
          <div class="card-counter primary">
            <i class="fa fa-code-fork"></i>
            <span class="count-numbers">12</span>
            <span class="count-name">Network</span>
            <span class="count-per">12%</span>
          </div>
        </div>
    
        <div class="col-md-3">
          <div class="card-counter danger">
            <i class="fa fa-ticket"></i>
            <span class="count-numbers">599</span>
            <span class="count-name">Inrasturcture</span>
          </div>
        </div>
    
        <div class="col-md-3">
          <div class="card-counter success">
            <i class="fa fa-database"></i>
            <span class="count-numbers">6875</span>
            <span class="count-name">Data</span>
          </div>
        </div>
    
        <div class="col-md-3">
          <div class="card-counter info">
            <i class="fa fa-users"></i>
            <span class="count-numbers">35</span>
            <span class="count-name">Application</span>
          </div>
        </div>
      </div>
    </div>
    );
  }