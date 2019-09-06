import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss';
import {CV} from './components/CV';
import {Data} from "./content";


ReactDOM.render(<CV {...Data}/>, document.getElementById('root'));
